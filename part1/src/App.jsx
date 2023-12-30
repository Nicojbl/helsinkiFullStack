import { useState } from "react";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.text} {props.value}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        {props.text} {props.value}
      </p>
    </>
  );
};

const StatisticsLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  if (props.all) {
    return (
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="good" value={props.good} />
            <StatisticsLine text="Neutral" value={props.neutral} />
            <StatisticsLine text="Bad" value={props.bad} />
            <StatisticsLine text="all" value={props.all} />
            <StatisticsLine text="avergae" value={props.average} />
            <StatisticsLine text="positive" value={`${props.positive}%`} />
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.value}>{props.text}</button>
    </>
  );
};

const MostVotedAnecdote = (props) => {
  return (
    <>
      <p>{props.mostVotedAnecdote}</p>
      <p>has {props.votesForAnecdote} votes</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [selected, setSelected] = useState(0);

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

  const totalExercises =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;

  const handleGoodClick = () => {
    setGood(good + 1);
    const updateGood = good + 1;
    setGood(updateGood);
    setAll(updateGood + neutral + bad);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    setAll(good + updateNeutral + bad);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    const updateBad = bad + 1;
    setBad(updateBad);
    setAll(good + neutral + updateBad);
  };

  const average = all / 3;
  const positive = (good / all) * 100;

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(anecdotes.map(() => 0));

  const randomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const mostVotedAnecdote = () => {
    const mostVotedIndex = votes.indexOf(Math.max(...votes));
    return mostVotedIndex
  };

  return (
    <>
      <div>
        <Header course={course.name} />
        <Content
          text={course.parts[0].name}
          value={course.parts[0].exercises}
        />
        <Content
          text={course.parts[1].name}
          value={course.parts[1].exercises}
        />
        <Content
          text={course.parts[2].name}
          value={course.parts[2].exercises}
        />
        <Total text="Total exercises:" value={totalExercises} />
      </div>
      <div>
        <h1>Give feedback</h1>
        <Button text="Good" value={handleGoodClick} />
        <Button text="Neutral" value={handleNeutralClick} />
        <Button text="Bad" value={handleBadClick} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      </div>
      <div>
        <h1>acnedote</h1>
        <p>{anecdotes[selected]}</p>
        <button onClick={handleVoteClick}>Vote</button>
        <p>votes: {votes[selected]}</p>
        <button onClick={randomAnecdote}>Next acnedote</button>
        <h1>Anecdote with most votes</h1>
        <MostVotedAnecdote mostVotedAnecdote={anecdotes[mostVotedAnecdote()]} votesForAnecdote={votes[mostVotedAnecdote()]} />
      </div>
    </>
  );
};

export default App;
