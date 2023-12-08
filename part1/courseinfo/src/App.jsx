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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App