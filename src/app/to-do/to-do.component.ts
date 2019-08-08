import { Component, OnInit } from '@angular/core';
import { ToDo } from '../ToDo/ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
ToDo: string[] = ["laundry", "dishes", "shopping"];
constructor() {}
addTask(data: any): void{
  console.log(data.form.value.newTask);
  this.ToDo.push(data.form.value.newTask)
}

  ngOnInit() {
  }

}
