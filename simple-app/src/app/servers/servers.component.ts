import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['S1'];
  logs = [0];
  logCounter = 0;
  showSecret = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server has been created! The name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateLog() {
    this.showSecret = !this.showSecret;
    this.logCounter++;
    this.logs.push(this.logCounter);
    // this.logs.push(this.logs.length + 1);
  }
}
