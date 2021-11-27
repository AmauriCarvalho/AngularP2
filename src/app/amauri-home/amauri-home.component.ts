import { Component, OnInit } from '@angular/core';
import { AmauriTaskService } from '../amauri-task.service';

@Component({
  selector: 'app-amauri-home',
  templateUrl: './amauri-home.component.html',
  styleUrls: ['./amauri-home.component.css']
})
export class AmauriHomeComponent implements OnInit {

  constructor(public tasks: AmauriTaskService) { }

  ngOnInit() {
  }

}