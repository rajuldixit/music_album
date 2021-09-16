import { Injectable } from '@angular/core';
import axios  from 'axios';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl: string = environment.api.base_url;

  constructor(private httpClient: HttpClient) { }

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
