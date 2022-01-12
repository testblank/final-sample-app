# useClientRect

element의 DOMRect object를 얻는 hook입니다.

```jsx
const useClientRect = () => {
    const [rect, setRect] = useState(null);

    const ref = useCallback((node) => {
        if (node !== null) {
            setRect(node.getBoundingClientRect());
        }
    }, []);

    return [rect, ref];
};
```

---

## _usage_

```jsx
import { useClientRect } from '@hooks';

const [rect, ref] = useClientRect():

const left = rect.left;
const top = rect.top;
const right = rect.right;
const bottom = rect.bottom;
const width = rect.width;
const height = rect.height;

return <div ref={ref} />;
```
