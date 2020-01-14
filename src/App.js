import React, { Component } from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
import InputTask from './Components/InputComponent';
import NewTask from './Components/TaskComponent';
import TaskCounter from './Components/CounterComponent';

class App extends Component {
	state = {
		tasks: [],
		inputValue: ''
	};

	handleInputChange = event => {
		const value = event.target.value;
		this.setValue(value);
	};

	setValue = value => {
		this.setState({
			inputValue: value
		});
	};

	addNewTaskHandler = value => {
		if (value.length) {
			const todo = value;
			const id = Math.floor(Math.random() * 100);
			const todoObject = {
				id,
				todo,
				done: false
			};
			const tempTask = [...this.state.tasks];
			this.setState(
				{
					tasks: [...tempTask, todoObject]
				},
				this.setValue('')
			);
		}
	};

	toggleTaskDoneHandler = id => {
		const tempTasks = [...this.state.tasks];
		const index = tempTasks.findIndex(task => task.id === id);
		const singletask = tempTasks[index];
		singletask.done = !singletask.done;
		this.setState({
			tasks: [...tempTasks]
		});
	};

	deleteTaskHandler = id => {
		const tempTasks = [...this.state.tasks];
		const newTask = tempTasks.filter(task => task.id !== id);
		this.setState({
			tasks: [...newTask]
		});
	};

	render() {
		let tasks = null;
		if (this.state.tasks) {
			tasks = this.state.tasks.map(task => (
				<NewTask
					task={task}
					key={task.id}
					toggleDone={this.toggleTaskDoneHandler}
					deleteTask={this.deleteTaskHandler}
				/>
			));
		}
		return (
			<div className="App">
				<Header />
				<InputTask
					inputValue={this.state.inputValue}
					addNewTask={this.addNewTaskHandler}
					changeHandler={this.handleInputChange}
				/>
				<TaskCounter
					totalTask={this.state.tasks.length}
					doneTask={this.state.tasks.filter(task => task.done).length}
				/>
				<div className="task-wrapper">{tasks}</div>
			</div>
		);
	}
}

export default App;
