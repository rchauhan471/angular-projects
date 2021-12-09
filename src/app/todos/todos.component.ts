import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  inputTodo = '';

  constructor() {}

  ngOnInit() {
    this.todos = [];
  }
  toggleDone(id) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
