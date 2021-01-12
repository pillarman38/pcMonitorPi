import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsoketServiceService {
  socket: any;
  uri = "http://192.168.1.86:4002"

  constructor() { 
    this.socket = io(this.uri)
  }

  message(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) =>{
        console.log(eventName,data)
        subscriber.next(data)
      })
    })
  }
  
  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) =>{
        console.log(eventName,data)
        subscriber.next(data)
      })
    })
  }
  emit(eventName, data) {
    console.log(this.socket)
    this.socket.emit(eventName, data);
  }
  emitToServer(eventName, data) {
    console.log(this.socket)
      this.socket.emit(eventName, data);

  }
}

