import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Creating independent components  
const TitleDisplay = ({title}) => <h1>{title}</h1>

const Button = ({onClick,text}) => (
  <button onClick={onClick}>{text}</button>
)

const DataCollecter = ({text, stat}) => {
  // tr element should be enclosed inside the tbody tag
    return (
      <div>
        <table>
          <tbody>
            <tr>
                <td>{text}:</td>
                <td>{stat}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
} 

// * Refactoring the code: Adding new "Statistics" component

// ** Adding conditional rendering inside the "Statistics" component
const Statistics = (props) => {
  if (props.data.total === 0) {
    return (
      <div>
        No feedback given to display
      </div>
    )
  }
  return (
    <div>
        <DataCollecter text='Good' stat={props.data.good} />
        <DataCollecter text='Neutral' stat={props.data.neutral} />
        <DataCollecter text='Bad' stat={props.data.bad} />
        <DataCollecter text='All feedback' stat={props.data.total} />
        <DataCollecter text='Average' stat={props.data.feedbackValue/props.data.total} />
        <DataCollecter text='Positive feedback' stat={props.data.good/props.data.total*100 + ' %'} />
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Creating a single object for whole data
  const data = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: good + neutral + bad,
    feedbackValue:  good*(1) + neutral*(0) + bad*(-1)
  }

  return (
    <> 
        <TitleDisplay title='Give Feedback' />
        <Button onClick={() => setGood(good + 1)} text='Good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
        <Button onClick={() => setBad(bad + 1)} text='Bad' />
        <TitleDisplay title='Statistics' />
        {/* Only pass the single object to the component, not individual properties of an object */}
        <Statistics data={data} /> 
        
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
