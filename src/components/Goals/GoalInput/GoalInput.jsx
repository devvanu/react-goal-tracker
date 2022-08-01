import { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button';
import styles from './GoalInput.module.css';

// ====== FOR STYLED COMPONENTS =======
// const FormControl = styled.div`
//     margin: 0.5rem 0;

//   & label {
//     color: ${ props=> (props.invalid ? 'red' : 'black' ) };
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${ props=> (props.invalid ? 'red': '#ccc') };
//     background: ${ props=> (props.invalid ? '#ffd7d7': 'transparent') };
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [isTextValid, setIsTextValid] = useState(true);

  const addGoalHandler = (event)=> {
    if(event.target.value.trim().length > 0){
        setIsTextValid(true);
    }
    setEnteredGoal(event.target.value);
  }

  const submitHandler = (event)=> {
    event.preventDefault();
    if(enteredGoal.trim().length === 0){
        setIsTextValid(false);
        return;
    }
    props.addGoalText(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <form onSubmit={submitHandler}>

        {/* ===== Using CSS CLASSES Dynamically ===== */}
        {/* <div className={`form-control ${ !isTextValid ? 'invalid' : '' }`}>
            <label>Goals:</label>
            <input type='text' value={enteredGoal}
                onChange={addGoalHandler} />
        </div> */}
        
        {/*===== Using SYTLED COMPONENTS ===== */}
        {/* <FormControl invalid={!isTextValid} >
            <label>Goals:</label>
            <input type='text' value={enteredGoal}
            onChange={addGoalHandler} />
          </FormControl> */}

        {/* Using CSS MODULES */}
        <div className={ `${styles['form-control']} ${!isTextValid && styles.invalid}`}>
            <label>Goals:</label>
            <input type='text' value={enteredGoal}
                onChange={addGoalHandler} />
        </div>

        <Button type="submit">Add Goal</Button>
    </form>
  )
}

export default GoalInput