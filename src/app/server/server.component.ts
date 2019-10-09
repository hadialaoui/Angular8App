import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: String = 'off line';
  constructor() {
    this.serverStatus= Math.random() > 0.5 ?'off line':'on line';
   }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === "on line"? "green" : "red";
  }
}
