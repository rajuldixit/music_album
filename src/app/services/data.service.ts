import { Injectable } from '@angular/core';
import axios  from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl: string = environment.api.base_url;

  constructor() { }

  fetch() {
    return axios.get(this.baseUrl).then( response => {
      return response;
    })
    .catch(function(error) {
      return error;
    })
    .finally(function() {

    })
  }
}
