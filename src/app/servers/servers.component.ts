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
  serverCreated = false;
  servers = ['testServer','testServer 2'];
  constructor() {
    setTimeout(()=>{
       this.allowNewServer = true;
    },3000);
   }

  ngOnInit() {
  }
 
  onCreatedServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.statusCreatedServer = 'server was created! name is '+ this.serverName;
  }
  onChangeServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
