import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//  The parent component
export class AppComponent {

  title = 'aCompComms2';

  //  The string to send to the sub
  messageToSub:string = "DEFAULT";

  messageFromSub:string = "DEFAULT";

  //  Send a message to the sub component
  parentToSub(){
    this.messageToSub = "Hello! I am the parent.";
  }

  //  Update the property
  getMessageFromSub(message:string){

    this.messageFromSub = message;

  }

}
