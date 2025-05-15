import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http = inject(HttpClient)
  
  apiUrl = 'https://jsonplaceholder.typicode.com/users'


  getUser() {
    this.http.get(this.apiUrl)
  }
  
}
