import { Component } from '@angular/core';
//import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  priorities=['heigh','medium','low']
 taskArr:any[]=[]

  lastindex:any 
  addTask(item: string, priority: string) {
    const tempTask: {
      task: string,
      priority: string
    } = {
      task: item,
        priority: priority
  
    }
        debugger
      
    if (tempTask.task !== "") {
      
  

    if (tempTask.priority === "heigh") {
      this.taskArr.unshift(tempTask)
    }
    else if (tempTask.priority === "low") {
     this.taskArr.push(tempTask)
    } else {

      const lastIndex = this.taskArr. reduce((lastIndex, tempTask, index) => {
        
        if (tempTask.priority == "heigh") {
          return index;
        }
        return lastIndex;
      }, -1)
      this.taskArr.splice(lastIndex + 1, 0, tempTask)
      
   }


  


    }
  }
  
  remove(id:number) {
    this.taskArr.splice(id)
  }
}
