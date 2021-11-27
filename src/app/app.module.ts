import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AmauriTaskComponent } from './amauri-task/amauri-task.component';
import { AmauriHomeComponent } from './amauri-home/amauri-home.component';
import { AmauriTaskService } from './amauri-task.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: 'home', component: AmauriHomeComponent},
    {path: 'task', component: AmauriTaskComponent},
  ]) ],
  declarations: [ AppComponent, HelloComponent, AmauriTaskComponent, AmauriHomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AmauriTaskService]
})
export class AppModule { }
