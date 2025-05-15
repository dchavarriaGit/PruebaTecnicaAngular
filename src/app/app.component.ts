import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule]
})
export class AppComponent implements OnInit {
  title = '¡Bienvenido(a)!';
  

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
}
