import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule,FormsModule, ReactiveFormsModule]
})
export class AppComponent implements OnInit {
  title = '¡Bienvenido(a)!';
  private http = inject(HttpClient)
  users: any;

  apiUrl = 'https://jsonplaceholder.typicode.com/users'

  ngOnInit() {

  }


  loadUsers () {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data  =>  {
      this.users = data;
    })
  }
}
