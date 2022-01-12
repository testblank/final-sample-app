# **usePageLayout**

page마다 동일한 layout을 가질 수 있도록 빈 layout을 만들고 재사용 하기위한 component입니다.

usePageLayout은

-   [**renderPage**](#render-page)
-   **openPopup**
-   **closePopup**
-   **openSheet**
-   **closeSheet**
-   **openDrawer**
-   **closeDrawer**

총 7개 함수를 return합니다.

# _usage_

```jsx
import { Appbar, usePageLayout } from 'layout';
import { Popup } from '@components/modal/Popup';
import { Sheet } from '@components/modal/Sheet';
import { Drawer } from '@components/modal/Drawer';

const SamplePage = () => {

	const {
		renderPage,
		openPopup,
		closePopup,
		openSheet,
		closeSheet,
		openDrawer,
		closeDrawer,
	} = usePageLayout();

	const bodyRender = () => {
		return (
			<div onClick={() => openPopup()}>open popup btn</div>
			<div onClick={() => openSheet()}>open sheet btn</div>
		)
	};

	return renderPage({
		header: <Appbar cbOnClickLeft={() => openDrawer()}/>,
		body: bodyRender(),
		popup: <Popup />,
		sheet: <Sheet />,
		drawer: <Drawer />,
	})

};
```

새로 만들고자 하는 페이지에 usePageLayout을 import 합니다.  
renderPage함수에 각 영역에 맞는 화면을 만들어 parameter로 던져줍니다.

modal관련 component는 [React Portals](https://reactjs.org/docs/portals.html)로 만들어져 있습니다.  
필요한 곳에서 modal관련 `open*`, `close*` 함수를 호출 하면 각각  
`*-root` id를 가진 div element 하위에 modal이 생성 됩니다.(아래 renderPage 참고)

---

<h2 id='render-page'>renderPage</h1>

```jsx
const renderPage = ({ header, body, popup, sheet, drawer }) => {

	const headerRender = (header) => return header;
	const bodyRender = (body) => return body;

	const popupRender = (popup) => return <PopupWrapper>{popup}</PopupWrapper>;
	const sheetRender = (sheet) => return <SheetWrapper>{sheet}</SheetWrapper>;
	const drawerRender = (drawer) => return <DrawerWrapper>{drawer}</DrawerWrapper>;

	return (
        <div ref={refWrap}>
            <div ref={refHeader}>
            {header && headerRender(header)}
            </div>

            <div ref={refBody}>
            {body && bodyRender(body)}
            </div>

            <div id={'drawer-root'} ref={refDrawer}>
            {drawer && drawerRender(drawer)}
            </div>

            <div id={'popup-root'} ref={refPopup}>
            {popup && popupRender(popup)}
            </div>

            <div id={'sheet-root'} ref={refSheet}>
            {sheet && sheetRender(sheet)}
            </div>
        </div>
	)
}
```

header, body, popup, sheet, drawer 5가지 parameter가 있습니다.  
render하고싶은 element를 넣어주면 됩니다.

---

## modal wrapper (_DrawerWrapper.jsx_)

> ⚠️ popup, sheet, drawer 모두 동일합니다.

```jsx
const DrawerWrapper = (children) => {
    //SheetWrapper | PopupWrapper
    const { drawerState } = useSelector((state) => state.modalReducer);
    // sheetState, popupState
    const el = document.getElementById('drawer-root');
    //'sheet-root' | 'popup-root'
    const comp = React.cloneElement(children);

    if (!el) {
        const newNode = document.createElement('div');
        newNode.setAttribute('id', 'drawer-root');
        const rootNode = document.getElementById('#root');
        rootNode.after(newNode);
    }

    if (!drawerState) {
        return null;
    }

    return ReactDOM.createPortal(comp, el);
};
```

popup, sheet, drawer의 경우 각각의 Wapper component로 쌓여있습니다.

DrawerWrapper에서는 `drawerState === true`일 때 drawer component를 return 합니다.  
usePageLayout에는 id가 drawer-root 인 element가 있지만 usePageLayout을 사용하지 않고 drawer component를 사용 할 때를 위해서 예외 처리가 되어 있습니다.

> ⚠️ modal(popup, sheet, drawer)들의 state는 usePageLayout없이도 사용할 수 있도록 [redux](https://react-redux.js.org/)로 관리 합니다.

## modalReducer.js

```jsx
// Action creator
// popup, sheet, drawer 세 가지 modal의 action 을 만들어 줍니다.
export const POPUP_STATE = 'POPUP_STATE';
export const SHEET_STATE = 'SHEET_STATE';
export const DRAWER_STATE = 'DRAWER_STATE';

export const setPopupState = (popupState) => ({
    type: POPUP_STATE,
    popupState,
});

export const setSheetState = (sheetState) => ({
    type: SHEET_STATE,
    sheetState,
});

export const setDrawerState = (drawerState) => ({
    type: DRAWER_STATE,
    drawerState,
});

// initial state 초기값은 false입니다.

const initialState = {
    popupState: false,
    sheetState: false,
    drawerState: false,
};

// 각 modal의 state를 변화 시켜줄 reducer입니다.
export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPUP_STATE:
            return {
                ...state,
                popupState: action.popupState,
            };
        case SHEET_STATE:
            return {
                ...state,
                sheetState: action.sheetState,
            };
        case DRAWER_STATE:
            return {
                ...state,
                drawerState: action.drawerState,
            };

        default:
            return state;
    }
};
```

다른 component에서 state를 읽거나 변경하기 위해 아래와 같이  
useSelector, useDispatch를 사용합니다.

```jsx
// useSelector
const { popupState, sheetState, drawerState } = useSelector((state) => state.modalReducer);

// setDrawerState action을 dispatch하는 예시
const dispatch = useDispatch();
dispatch(setDrawerState(true));
```

---

## usePageLayout없이 popup, drawer, sheet render 예시

```jsx
const ExampleComponent = () => {
    const dispatch = useDispatch();
    const { drawerState } = useSelector((state) => state.modalReducer);

    return (
        <div>
            <div onClick={() => dispatch(setDrawerState(true))} />
            {drawerState && <Drawer />}
        </div>
    );
};
```

usePageLayout 없이 modal을 사용할 경우 직접 setDrawerState, setSheetState, setPopupState를 dispatch하여 state를 업데이트 해주고 state에 따라 render 조건을 변경해줍니다.
