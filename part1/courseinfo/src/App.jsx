/* eslint-disable react/prop-types */
const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({part, exercise}) => {
  return(
    <p>{part} {exercise}</p>
  )
}

const Content = (prop) => {
  return(
    <> 
      <Part part={prop.part1} exercise={prop.exercises1} />
      <Part part={prop.part2} exercise={prop.exercises2} />
      <Part part={prop.part3} exercise={prop.exercises3} />
    </>
  )
}

const Total = (prop) => {
  return (
    <p>Number of exercises {prop.exercises1 + prop.exercises2 + prop.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )
}

export default App