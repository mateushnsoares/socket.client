import { useState, useEffect } from 'react'
import Cache from '../store/cache'

type Response<T> = [
  T,
  (value: T) => void
]

function useCache<T> (key: 'requests' | 'folders'): Response<T> {
  const defaultValue = Cache.get<T>(key as unknown as string) as T
  const [value, setValue] = useState<typeof defaultValue>(defaultValue)

  useEffect(() => {
    setInterval(() => {
      const newValue = Cache.get(key) as T
      setCacheValue(newValue)
      setValue(newValue)
    }, 200)
  }, [])

  function setCacheValue (value: T) {
    Cache.set(key, value)
  }

  return [value, setCacheValue]
}

export default useCache
