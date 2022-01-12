# 작업 흐름

이 프로젝트에서는 UI component를  
publish -> component -> story와 같은 흐름으로 작성합니다.

---

먼저 src/publish 폴더에 jsx 파일을 작성 합니다.  
시안과 일치하도록 알맞게 작성합니다. 기본적으로 [tailwindcss](https://tailwindcss.com/)로
스타일링을 합니다.

추가로 `<canvas />`로 그려할 부분이 있다면 컴포넌트 내부에 그리고  
tailwind에서 지원하지 않는 스타일 작업해야 할 때에는 [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)를 사용합니다.

> ⚠️하나의 컴포넌트에 하나의 css파일이 만들어져야 합니다.  
> 예를들어 `ButtonPublish.jsx` component가 있다면 그 component에  
> 전용으로 사용 할 `ButtonPublish.modules.css`를 만들어야 합니다.

> 🙅 그냥 `ButtonPublish.css` 파일이 아닙니다. 파일명을 정확히 작성해 주세요.

props의 경우엔 동적으로 자주 바뀌겠다 싶은 부분위주로 작성 해 줍니다.  
button 안에 있는 text가 버튼이 사용되는 곳 마다 다르다면  
text를 props로 받도록 하는 식 입니다.  
또 component끼리의 합성을 생각 해 children prop에 대한 고려도 필요합니다.  
[Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html#gatsby-focus-wrapper)를 참고하시면 좋아요.

src/components 폴더에 동일한 혹은 구분 가능한 파일명의 component를 만듭니다. (`Button.jsx`)  
publish에 작성 된 component를 import하고 component를 제어 할 logic을 함께 작성 해 줍니다.

마지막으로 완성된 컴포넌트를 story로 만들어 줍니다. (`Button.stories.jsx`)
