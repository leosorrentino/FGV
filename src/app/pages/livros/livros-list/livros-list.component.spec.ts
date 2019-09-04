import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Livros } from '../shared/livro.model';
import { LivrosListComponent } from './livros-list.component';
import { never, NEVER } from 'rxjs';
import { emit } from 'cluster';

describe('LivrosListComponent', () => {
  let component: LivrosListComponent;
  let fixture: ComponentFixture<LivrosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosListComponent ]
    })
    .compileComponents();
  }));

    fixture = TestBed.createComponent(LivrosListComponent);
    component = fixture.componentInstance;
 
  let livros: Livros[] = [
    {
      title: "Titulo",
      authorName: "Autor"
      

    }
  ]
  component.livros = livros;

  it('Deve Criar', () => {
    expect(component).toBeDefined();
  });

  /**
   * Verifica HTML
   */

  describe('Verifica conteudo HTML', () => {
    it('Titulo', () => {
      fixture.detectChanges();
      let tit = fixture.debugElement.query(By.css('.timeline-title')).nativeElement;

      expect(tit.innerText).toContain('Titulo')
    });

    it('Autor', () => {
      fixture.detectChanges();
      let tit = fixture.debugElement.query(By.css('.timeline-heading')).nativeElement;

      expect(tit.innerText).toContain('Titulo')
    });

  });


   /**
   * Verifica Funções 
   */

  describe('Verifica funções', () => {
    it('Chamar ordenarPorTitulos()', () => {
      fixture.detectChanges();
      
      //spyOn(component.ordenarPorTitulos, 'emit' );

      let click = fixture.debugElement.query(By.css('.btn btn-success float-right')).nativeElement;
      click.dispatchEvent(new Event('click'));

      expect(click.component.ordenarPorTitulos.emit).toHaveBeenCalledWith(component.livros[0]); 
    });

    it('Chamar ordenarPorEdicao()', () => {
      fixture.detectChanges();
      
      //spyOn(component.ordenarPorEdicao(), 'emit' );

      let click = fixture.debugElement.query(By.css('.btn btn-success float-right')).nativeElement;
      click.dispatchEvent(new Event('click'));

      expect(click.component.ordenarPorEdicao.emit).toHaveBeenCalledWith(component.livros[0]); 
    });

    it('Chamar ordenarPorAutor()', () => {
      fixture.detectChanges();
      
      //spyOn(component.ordenarPorAutor(), 'emit' );

      let click = fixture.debugElement.query(By.css('.btn btn-success float-right')).nativeElement;
      click.dispatchEvent(new Event('click'));

      expect(click.component.ordenarPorAutor.emit).toHaveBeenCalledWith(component.livros[0]); 
    });
   

  });


});
