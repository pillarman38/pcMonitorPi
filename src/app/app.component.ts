import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebsoketServiceService } from './websoket-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tm';
  gpu;
  cpu;
  ramPercentage;
  @ViewChild("child") child: ElementRef;

  constructor(private webSocket: WebsoketServiceService) {}

  ngOnInit() {
    this.webSocket.emit("photoUpdater", "yoooooooooo")
    this.webSocket.listen('photoUpdate').subscribe((data: any[]) => {
      console.log(data)
      
    })
    this.webSocket.listen('videoUpdate').subscribe((data: any[]) => {
      console.log(data)
      
    })
    this.webSocket.listen('test event').subscribe((data: any[]) => {
      console.log(data)
      
    })
    this.webSocket.message('message').subscribe((data: any[]) => {
      console.log(data)
      this.gpu = data['gpu'][8]['utilizationgpu']
      this.cpu = data['cpu']
      this.ramPercentage = data['ramPercentage']
      console.log(this.ramPercentage);
      
    })
  }
}
