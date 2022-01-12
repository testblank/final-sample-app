# Loading

ref를 사용하는 부모 컴포넌트에서 `loading` component의 method를 사용 할 수 있도록
[useImperativeHandle](https://ko.reactjs.org/docs/hooks-reference.html#useimperativehandle)를 사용하고 있습니다.

> ❗️❗️ 공식문서 에서는 `useImperativeHandle`사용을 `지양`합니다.

```jsx
const Loading = forwardRef((props, ref) => {
  let enable = true;
  const [loadingView, setLoadingView] = useState(null);

  const show = () => {
    if (enable) {
      setLoadingView(<LoadingView hide={hide} />);
    }
  };

  const hide = () => {
    setLoadingView(null);
  };

  const setEnable = () => {
    enable = true;
  };

  const setDisable = () => {
    enable = false;
  };

  useImperativeHandle(ref, () => ({
    show: () => show(),
    hide: () => hide(),
    setEnable: () => setEnable(),
    setDisable: () => setDisable(),
  }));

  return <div>{loadingView}</div>;
});
```

- show (`LoadingView` component를 보여줍니다.)
- hide (`loadingVeiw` component를 숨깁니다.)
- setEnable (enable에 true를 할당하고 `show()`를 호출 했을 때 `LoadingView` component를 보여줍니다.)
- setDisable (enable에 false를 할당합니다.)

## _usage_

```jsx
const Component = (props) => {
  const ref = useRef(null);

  ref.current.show();
  ref.current.hide();
  ref.current.setEnable();
  ref.current.setDisable();

  return <Loading ref={ref} />;
};
```

부모에서 ref를 넘겨주고 current로 접근 합니다.
