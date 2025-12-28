import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
    try {
        const item = localStorage.getItem(key)
        console.log('item', item)
        return item ? JSON.parse(item) : initialValue
    } catch (error) {
        console.warn('Error reading localStorage key:', key)
        return initialValue
    }
    })

    const setValue = (value) => {
    try {
        const valueToStore =
        value instanceof Function ? value(storedValue) : value

        setStoredValue(valueToStore)
        localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
        console.warn('Error setting localStorage key:', key)
    }
    }

    return [storedValue, setValue]
}