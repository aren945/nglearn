import { Component, OnInit } from '@angular/core';

interface Thing {
  name: string;
  complete: boolean;
}


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  doDoThings: Thing[];
  completeThings: Thing[];
  tempThing: Thing;
  constructor() {
    this.completeThings = [{
      name: '测试1',
      complete: true
    }];
    this.doDoThings = [{
      name: '测试toDo',
      complete: false
    }];
    this.tempThing = {
      name: '',
      complete: false
    };
  }

  ngOnInit() {
  }

  markCompleteToDoThing(thing: Thing): void {
    this.doDoThings.splice(this.doDoThings.indexOf(thing), 1);
    thing.complete = true;
    this.completeThings.push(thing);
  }

  markToThing(thing: Thing): void {
    this.completeThings.splice(this.completeThings.indexOf(thing), 1);
    thing.complete = false;
    this.doDoThings.push(thing);
  }

  addToDoThing(): void {
    if (this.tempThing.name) {
      this.doDoThings.push(this.tempThing);
    }
    this.tempThing = {
      name: '',
      complete: false
    };
  }

}
