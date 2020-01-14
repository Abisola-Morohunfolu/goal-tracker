import React from 'react';

const TaskCounter = props => {
	const { totalTask, doneTask } = props;
	return (
		<div className="counter">
			{totalTask ? (
				<h3 className="count-header">Total Task: {totalTask}</h3>
			) : (
				<h3 className="count-header">Nothing To do</h3>
			)}

			{totalTask ? (
				doneTask ? (
					<h3>
						Tasks Done: {doneTask} / {totalTask}
					</h3>
				) : (
					<h3>Nothing done yet</h3>
				)
			) : null}
		</div>
	);
};

export default TaskCounter;
