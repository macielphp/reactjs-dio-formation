import { useState } from 'react';

export default function useToggle(initial = false) {
    const [value, setValue] = useState(initial);

    const toggle = () => setValue(v => !v);
    const on = () => setValue(true);
    const off = () => setValue(false);

    return { value, toggle, on, off };
}