import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-est1',
  templateUrl: './est1.component.html',
  styleUrls: ['./est1.component.css']
})
export class Est1Component implements OnInit {

  constructor() { }
  pen=faPen
  ngOnInit(): void {
  }

}
