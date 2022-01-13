# useWindowSize

window객체의 innerWidth, innerHeight가 필요할 떄 사용합니다.

```jsx
const useWindowSize = () => {
  const [size, setSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  const updateSize = useCallback(() => {
    setSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [updateSize]);

  return size;
};
```

`resize`함수를 사용해 window크기가 바뀌면 새 innerWidth, innerHeight를  
state에 담아 return 합니다.
