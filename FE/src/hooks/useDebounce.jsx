import { useEffect, useState } from "react"

export const useDebounce = (value, sleep = 1000) => {
  const [newVal, setNewVal] = useState(value)
  useEffect(() => {
    const timeId = setTimeout(() => {
      setNewVal(value)
    }, sleep)
    return () => clearTimeout(timeId)
  }, [value])

  return newVal
}