import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
 // templateUrl: './warning-alert.component.html',
 template:'<p>This is warning, you are in dangerous!</p>',
 styles:[ 'p{padding:20px;background-color:mistyrose;border:1px solid red;}']
 // styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
