import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Materialize Angular';
  @ViewChild('carousel', {static: false}) carousel: ElementRef;
  constructor() {}
  ngAfterViewInit() {
    const options = {
      duration: 300,
      dist: 0,
      shift: 30
    }
    M.Carousel.init(this.carousel.nativeElement, options);
  }
}
