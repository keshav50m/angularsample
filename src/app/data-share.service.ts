import { Injectable } from '@angular/core';
import *as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  socket: any;
  readonly url: string = "ws://192.168.1.100:3000";
  constructor() {
    this.socket = io(this.url)
  }

  listen(congratulations: string) {
    return new Observable((subscriber) => {
      this.socket.on(congratulations, (data: any) => {
        subscriber.next(data)
        // console.log(data)
      })
    })
  }
}
