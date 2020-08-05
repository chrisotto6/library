import { useEffect, useState } from 'react'
import xml2js from 'xml2js'

const CACHE = {}

export default function useFetch(url, defaultValue = []) {
  const [data, setData] = useState(defaultValue)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const parser = xml2js.Parser({ explicitArray: false })
    const cacheID = url

    if (CACHE[cacheID] !== undefined) {
      setData(CACHE[cacheID])
      setLoading(false)
    } else {
      setLoading(true)

      fetch(url)
        .then((res) => res.text())
        .then((newData) => {
          parser.parseString(newData, (err, res) => {
            if (err) console.log(err)
            const data = res.GoodreadsResponse.reviews.review
            CACHE[cacheID] = data
            setData(data)
            setLoading(false)
          })
        })
    }
  }, [url])

  return [data, isLoading]
}
