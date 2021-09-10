import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor(private http: HttpClient) { }

  getAll(data: any) {
    return this.http.get(environment.apiServer + environment.api.pokemon).toPromise(); 
  }
  viewpokeman(data: any) {
    return this.http.get(environment.apiServer + environment.api.pokemon+"/"+data).toPromise();
  }
}
