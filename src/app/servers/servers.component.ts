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
  customClass = "red";
  statusCreatedServer = 'not created !';
  serverName = '';
  constructor() {
    setTimeout(()=>{
       this.allowNewServer = true;
    },3000);
   }

  ngOnInit() {
  }
 
  onCreatedServer(){
    this.statusCreatedServer = 'server is created';
  }
  onChangeServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
