import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal, editGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(goal.text);
  const [editor, setEditor] = useState(false);

  const openEditor = () => {
    setEditText(goal.text);
    setEditor(true);
  };

  const cancelEditor = () => {
    setEditor(false);
  }

  const confirmEdit = () => {
    dispatch(editGoal({ id: goal._id, text: editText }));
    setEditor(false);
  }

  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      {editor ? (
        <section className='form-group'>
          <input value={editText} className="form-control" onChange={(e) => setEditText(e.target.value)} />
          <button className='btn' onClick={confirmEdit}>Confirm</button>
          <button className='btn' onClick={cancelEditor}>Cancel</button>
        </section>
      ) : (
        <>
          <h2>{goal.text}</h2>
          <div>
            <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">X</button>
            <button onClick={() => openEditor()} className="edit">E</button>
          </div>
        </>
      )}
    </div>
  );
}

export default GoalItem;