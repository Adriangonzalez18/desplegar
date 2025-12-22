import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './noticia-component.html',
  styleUrl: './noticia-component.css',
})
export class NoticiaComponent implements OnInit {

  noticia: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<any[]>('assets/noticias.json').subscribe(data => {
      this.noticia = data.find(n => n.id === id);
    });
  }
}
