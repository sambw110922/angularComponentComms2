import { Component, OnInit } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-to-parent',
  templateUrl: './sub-to-parent.component.html',
  styleUrls: ['./sub-to-parent.component.css']
})

export class SubToParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //  The emitter
  @Output() messageToParent = new EventEmitter<string>();

  messenger(){
    this.sendMessageToParent("this is a message")
  }

  //  Send a message to the parent component
  sendMessageToParent(message:string){

    this.messageToParent.emit(message);

  }



}
