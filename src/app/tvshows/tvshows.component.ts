import { Component, OnInit } from '@angular/core';
import { Show } from '../show';
import { SHOWS } from '../mock-tv-shows';


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  shows = SHOWS;
  
  selectedShow: Show;

  onSelect(show: Show): void {
    this.selectedShow = show;
  }

  constructor() { }

  ngOnInit() {
  }

}
