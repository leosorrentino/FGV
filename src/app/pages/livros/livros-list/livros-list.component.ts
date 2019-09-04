import { Component, OnInit } from '@angular/core';

import { Livros } from '../shared/livro.model';
import { LivrosService } from '../shared/livro.service';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.css']
})
export class LivrosListComponent implements OnInit {

  livros: Livros[] = [];

  constructor(
    private livrosService: LivrosService) { }

  ngOnInit() {
    this.livrosService.getAll().subscribe(
      livros => this.livros = livros,
      error => alert("Erro ao carregar a lista") 
    )
  }

  public ordenarPorTitulos(){
    this.livrosService.getAll().subscribe(
      livros => this.livros = livros.sort((a,b) => a.id - b.id),
      error => alert("Erro ao carregar a lista") 
    )
  }

  public ordenarPorEdicao(){
    this.livrosService.getAll().subscribe(
      livros => this.livros = livros.sort((a,b) => b.editionYear - a.editionYear),
      error => alert("Erro ao carregar a lista") 
    )
  }

  public ordenarPorAutor(){
    this.livrosService.getAll().subscribe(
      livros => this.livros = livros.sort((a,b) => b.editionYear - a.editionYear),
      error => alert("Erro ao carregar a lista") 
    )
  }

}
