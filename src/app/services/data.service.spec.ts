import { TestBed } from '@angular/core/testing';
import axios  from 'axios';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';
describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 200 response', (done) => {
    axios.get(environment.api.base_url)
     .then((response) => {
       expect(response.status).toBe(200);
       done();
     });
  });

});
