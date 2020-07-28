import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Defining components
const Title = ({text}) => <h1>{text}</h1>

const Button = ({onClick,text}) => {
  return (
      <button onClick={onClick}>{text}</button>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voteStore, setVoteStore] = useState(new Array(anecdotes.length).fill(0))
  let maxQuote = Math.max(...voteStore)

  const voteCollecter = () => {
    const voteData = [...voteStore]
    voteData[selected] += 1
    setVoteStore(voteData)

  }

  const randomGenerator = () => {
    const randomNumber = Math.floor(Math.random()*anecdotes.length)
    setSelected(randomNumber)
  }

  return (
    <>
      <Title text='Anecdote of the Day' />
      <p>{props.anecdotes[selected]}</p>
      <p>The quote has {voteStore[selected]} votes</p>
      <Button onClick={voteCollecter} text='Vote' />
      <Button onClick={randomGenerator} text='Next Anecdote' />
      <Title text='Anecdote with Most Votes:' />
      <p>{props.anecdotes[voteStore.indexOf(maxQuote)]} </p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
    <App anecdotes={anecdotes} />,
  document.getElementById('root')
);

