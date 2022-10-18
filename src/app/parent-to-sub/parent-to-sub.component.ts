import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-sub',
  templateUrl: './parent-to-sub.component.html',
  styleUrls: ['./parent-to-sub.component.css']
})

//  Parent sends message to this sub.
export class ParentToSubComponent implements OnInit {

  @Input() messageFromParent = "DEFAULT";

  constructor() { }

  ngOnInit(): void {
  }


}
