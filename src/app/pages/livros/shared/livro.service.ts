import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import { map, catchError, flatMap} from "rxjs/operators";

import { Livros } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private apiPath: string = "api/livros";   

  constructor(private http: HttpClient) { }

    getAll(): Observable<Livros[]>{
      return this.http.get(this.apiPath).pipe(
        catchError(this.handleError),
        map(this.jsonDataToLivro)
      )
    }
    
    getById(id: number): Observable<Livros>{
      const url = '${this.apiPath}/${id}';
      return this.http.get(this.apiPath).pipe(
        catchError(this.handleError),
        map(this.jsonDataLivro)
      )
    }

    create(livro: Livros): Observable<Livros>{
      return this.http.post(this.apiPath, livro).pipe(
        catchError(this.handleError),
        map(this.jsonDataLivro)
      )
    } 
    
    // Private Methods
    private jsonDataToLivro(jsonData: any[]): Livros[]{
      const livros: Livros[] = [];
      jsonData.forEach(element => livros.push(element as Livros));
      return livros;
    }

    private jsonDataLivro(jsonData: any): Livros{
      return jsonData as Livros;
    }

    private handleError(error: any): Observable<any>{
      console.log("Erro na requisição => ", error);
      return throwError(error);
    }
    
}
