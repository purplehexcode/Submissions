import { useState } from 'react'

const Button = ({text,handle}) => {
  return (
    <button onClick={handle}>{text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const total = (good+neutral+bad)
  const average = (good*1 + neutral * 0 + bad * -1) / total
  const positivePercentage = (good/total)*100
  
  if (total===0){
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h2>Statistics</h2>
        <div>
          <table>
            <tbody>
              <StatisticLine text='Good' value={good}/>
              <StatisticLine text='Neutral' value={neutral}/>
              <StatisticLine text='Bad' value={bad}/>
              <StatisticLine text='All' value={total}/>
              <StatisticLine text='Average' value={average}/>
              <StatisticLine text='Positive' value={positivePercentage + ' %'}/>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setClickGood = () => {
    setGood(good+1)
  }

  const setClickNeutral = () => {
    setNeutral(neutral+1)
  }

  const setClickBad = () => {
    setBad(bad+1)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button text='Good' handle={setClickGood}/>
        <Button text='Neutral' handle={setClickNeutral}/>
        <Button text='Bad' handle={setClickBad}/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App