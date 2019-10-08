import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  // selector: '[app-servers]',
 // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  constructor() {
    setTimeout(()=>{
       this.allowNewServer = true;
    },3000);
   }

  ngOnInit() {
  }
 
}
