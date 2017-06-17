import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos;
text;
oldText;
appState = 'default';
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
	  

	  //get values from local storage
	  this.todos = this._todoService.getTodos();
	 
	  
  }
	addTodo(){
	var	newTodo={
		
		
			text: this.text
	
		};
		this.todos.push(newTodo);
		this._todoService.addTodo(newTodo);
	}
	
	deleteTodo(todoText){
		for(var i =0; i< this.todos.length; i++){
			if(this.todos[i].text == todoText){
				this.todos.splice(i, 1);
			}
		}
		this._todoService.deleteTodo(todoText);
	}
editTodo(todo, event){
	this.appState  = 'edit';
	this.oldText = todo.text;
	console.log(this.appState);
	this.text = todo.text;
}
updateTodo(){
	
	for(var i =0; i< this.todos.length; i++){
			if(this.todos[i].text == this.oldText){
				this.todos[i].text = this.text;
				
			}
		
		}
this._todoService.updateTodo(this.oldText, this.text);
	console.log(this.text, this.oldText);
	this.text = '';//remove text from input afterwards
	this.appState ='default';
}
}
