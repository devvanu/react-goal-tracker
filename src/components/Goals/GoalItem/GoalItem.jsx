import './GoalItem.css'

const GoalItem = (props) => {

  const deleteGoalHandler = ()=>{
    props.deleteGoal(props.goalObj.id);
  }

  return (
    <li className="goal-item" onClick={deleteGoalHandler}>
      {props.goalObj.text}
    </li>
  )
}

export default GoalItem