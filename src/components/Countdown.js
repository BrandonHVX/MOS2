import React, { useEffect, useState } from 'react'

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    const difference = +new Date(`${year}-10-1`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24 * 18)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <>
        {timeLeft[interval]} {interval}{' '}
      </>
    )
  })
  return (
    <div>
      {' '}
      <p className="countdown mt-4  ">
        {' '}
        {timerComponents.length ? timerComponents : <span></span>}
      </p>
    </div>
  )
}

export default App
