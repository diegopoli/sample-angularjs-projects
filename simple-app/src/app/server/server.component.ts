import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online { color: white; }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  randomNumber: number = 0;

  constructor() {
    this.randomNumber = Math.random();
    this.serverId =  this.randomNumber;
    this.serverStatus = this.randomNumber > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
