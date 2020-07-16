import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  // const b = 20
    
  // console.log("Hello from component :)")
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Nader"  age={26+10}/>
      <Hello name={name} age={age} />
      <Hello />
      {/* <p>Hello World, today is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p> */}
    </>

  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

