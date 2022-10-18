import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-component1',
  templateUrl: './sub-component1.component.html',
  styleUrls: ['./sub-component1.component.css']
})

export class SubComponent1Component implements OnInit {

  //  The sub component name
  componentName:string = "Sub Component 1";

  constructor() { }

  ngOnInit(): void {

  }


}
