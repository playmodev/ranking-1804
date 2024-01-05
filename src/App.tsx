import React, { useEffect, useMemo, useState } from 'react'
import './App.css'
import { getRanking } from './api'

function App() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ ranking, setRanking ] = useState([])

  const fetchRanking = useMemo(
    () => async () => {
      try {
        const data = await getRanking()
        setRanking(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching ranking:', error);
      }
    },
    []
  )

  useEffect(
    () => { fetchRanking() }, 
    [fetchRanking]
  )

  return (
    <>
      {
        isLoading
          ? <p>Loading</p>
          : <pre>{JSON.stringify(ranking, null, 4)}</pre>
      }
    </>
  )
}

export default App
