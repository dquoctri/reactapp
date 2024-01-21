import { useState, useEffect, Dispatch, SetStateAction } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T | (() => T)): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
