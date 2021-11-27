import { Component, OnInit } from '@angular/core';
import { AmauriTaskService } from '../amauri-task.service';

@Component({
  selector: 'app-amauri-task',
  templateUrl: './amauri-task.component.html',
  styleUrls: ['./amauri-task.component.css']
})
export class AmauriTaskComponent implements OnInit {

  constructor(public tasks: AmauriTaskService) { }

  ngOnInit() {
  }

}