import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TodoListComponent} from '../todo-list/todo-list.component';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit, AfterViewInit {

  flag = true;

  @ViewChild('viewchild') myView: ElementRef;
  @ViewChild(TodoListComponent) todo: TodoListComponent;
  constructor() { }

  ngOnInit() {
    let a = document.getElementById('box');
    a.innerHTML = '12312';
  }

  ngAfterViewInit(): void {
    let  c = document.getElementById('box1');
    console.log(c);

    const dd = <HTMLDivElement>this.myView.nativeElement;

    dd.style.width = '100px';

    console.log(this.myView.nativeElement.style.width);


    console.log('this is', this.todo);
  }

  addToDo(): void {
    this.todo.doDoThings.push({name: 'dom组件增加', complete: false});
  }

}
