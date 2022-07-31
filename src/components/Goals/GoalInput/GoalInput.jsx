import { useState } from 'react';

import Button from '../../UI/Button';
import './GoalInput.css';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const addGoalHandler = (event)=> {
    setEnteredGoal(event.target.value);
  }

  const submitHandler = (event)=> {
    event.preventDefault();
    props.addGoalText(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <form onSubmit={submitHandler}>
        <div className="form-control">
            <label>Goals:</label>
            <input
                type='text' value={enteredGoal}
                onChange={addGoalHandler} />
        </div>
        <Button type="submit">Add Goal</Button>
    </form>
  )
}

export default GoalInput