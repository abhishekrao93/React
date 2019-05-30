import React from 'react'
import {Button,Typography} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

class MainContent extends React.Component{
	constructor(){
				super();
				this.state = {
					toDoList : []
				};
				
		}
		
		add() {
			var addValue = this.refs.title.value;
			
			if(localStorage.getItem('toDoList') ==  null)
			{
				var toDoList = [];
				toDoList.push(addValue);
				localStorage.setItem('toDoList',JSON.stringify(toDoList));
			}
			else{
				var toDoList = JSON.parse(localStorage.getItem('toDoList'));
				toDoList.push(addValue)
				localStorage.setItem('toDoList',JSON.stringify(toDoList));
			}
			this.setState({
				toDoList : JSON.parse(localStorage.getItem('toDoList'))
			})
		}
		
		delete(e){
			var deletedList = JSON.parse(localStorage.getItem('toDoList'));
			var index = deletedList.indexOf(e.target.value);
			
			deletedList.splice(index,1);
			
			this.setState({
				toDoList : deletedList
			})
			localStorage.setItem('toDoList',JSON.stringify(deletedList));
		}

		

	render(){	
		
		return (
			<main theme>
				<Typography variant ="title" color="inherit">
								<div>
									<h1>Create a TODO List</h1>
								</div>
								
								<input type="text" placeholder="Enter Your Task" ref="title"/>
								<Fab color="primary" aria-label="Add Task" onClick={this.add.bind(this)} >
									<AddIcon />
								</Fab>		
								
								<br/><br/>
								<ul>
									{this.state.toDoList.map(function(toDoList,index){
										return (
											<li key={index} value="toDoList">{toDoList}
													<Button color="primary" data-key={index} onClick={ this.delete.bind(this)}>
														Delete
													</Button>
											</li>
										);
									},this)
										
									}
								</ul>
				</Typography>
			</main>
		)
	}
}
export default MainContent