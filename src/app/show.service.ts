import { Injectable } from '@angular/core';
import { Show } from './show';
import { SHOWS } from './mock-tv-shows';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  getShows(): Show[] {
    return SHOWS;
  }
  constructor() { }
}
