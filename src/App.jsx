import { useState } from 'react';

import GoalInput from './components/Goals/GoalInput/GoalInput';
import GoalList from './components/Goals/GoalList/GoalList';
import './App.css';

const DUMMY_GOALS = [
  { id: 'g1', text: 'Your added Goal will be listed here' },
  { id: 'g2', text: 'You can delete the Goal by clicking on it' },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_GOALS);

  const addGoalHandler = (goalTxt)=> {
    const goal = {
      id: Date.now() + '' + Math.floor(Math.random()*78),
      text: goalTxt
    }
    setGoals( prevGoals=> {
      return [goal, ...prevGoals]
    })
  }

  const deleteGoalHandler = (goalId)=>{
    setGoals(prevGoals=>{
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    })
  }

  return (
    <div>
      <section id="goal-form">
        <GoalInput addGoalText={addGoalHandler} />
      </section>
      <section id="goals">
        <GoalList goalItems={goals} deleteGoal={deleteGoalHandler} />
      </section>
    </div>
  )
}

export default App;