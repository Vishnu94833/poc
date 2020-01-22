import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private title;
  constructor() { }

  ngOnInit() {
    this.title = document.title;
  }

  addNewUser(){
    console.log("added new user");
    
  }

}
