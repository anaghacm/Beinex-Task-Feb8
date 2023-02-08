import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public element:any='';
  constructor() { }

  ngOnInit(): void {
  }

  goDown() {
    try {
      this.element = document.getElementById("firstdiv");
      this.element.scrollIntoView();
    } catch (err) {

    }
  }
}
