import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 templateUrl: './servers.component.html',
 // template:'<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus='No Server was created';
servername="test"
  constructor() { 
    setTimeout(() => {
      this.allowNewServer= true; 
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer()
  {
    this.serverCreationStatus ='Server was created!';
  }
  onUpdateServerName(event :Event)
  {
  this.servername=(<HTMLInputElement>event.target).value;
  }


}
