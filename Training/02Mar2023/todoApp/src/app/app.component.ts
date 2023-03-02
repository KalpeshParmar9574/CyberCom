import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  priority:string[]=['high','medium','low']
 taskArr:any[]=[]


  addTask(item: string, priority: number) {
    const  tempTask ={
      task: item,
      priority:priority
    }
    this.taskArr.push(tempTask);


  }
  // removeTask(id: number) {
  //   // this.tasks = this.tasks.filter(item => item.id !== id);
  // }
}
