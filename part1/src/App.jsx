const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      <p>
        part1: {props.part1}
        <br></br> 
        exercises: {props.exercises1}
      </p>
      <p>
        part2: {props.part2} 
        <br></br>
        exercises: {props.exercises2}
      </p>
      <p>
        part3: {props.part3}
        <br></br>
        exercises: {props.exercises3}
      </p>
    </>
  );
};

const Total = (props) => {
  console.log(props);
  const totalExercises = props.exercises1 + props.exercises2 + props.exercises3;

  return (
    <>
      <p>Total exercises: {totalExercises}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content
        part1={course.parts[0].name}
        exercises1={course.parts[0].exercises}
        part2={course.parts[1].name}
        exercises2={course.parts[1].exercises}
        part3={course.parts[2].name}
        exercises3={course.parts[2].exercises}
      />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  );
};

export default App;