import React from 'react';

const NewTask = props => {
	const { task, toggleDone, deleteTask } = props;
	return (
		<div className="task__container">
			<h2>{task.todo}</h2>
			<button onClick={() => toggleDone(task.id)} className={task.done ? 'undo' : 'done'}>
				{task.done ? 'Undo' : 'Mark as Done'}
			</button>
			<button onClick={() => deleteTask(task.id)} className="delete">
				Delete
			</button>
		</div>
	);
};

export default NewTask;
