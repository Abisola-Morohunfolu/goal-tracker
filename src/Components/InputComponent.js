import React from 'react';

const InputTask = props => {
	const { inputValue, addNewTask, changeHandler } = props;
	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				addNewTask(inputValue);
			}}
			className="form-container"
		>
			<input type="text" placeholder="Add new Task" value={inputValue} onChange={changeHandler} />
			<button type="submit" onClick={() => addNewTask(inputValue)}>
				Add Task
			</button>
		</form>
	);
};

export default InputTask;
