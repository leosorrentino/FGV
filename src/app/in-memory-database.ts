import { InMemoryDbService } from "angular-in-memory-web-api";

import { Livros } from './pages/livros/shared/livro.model';

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const livros: Livros[] = [
            { id: 3, title: 'Java How to Program', authorName: 'Deitel & Deitel', editionYear: 2007},
            { id: 4, title: 'Patterns of Enterprise Application Architecture', authorName: 'Martin Fowler', editionYear: 2002},
            { id: 1, title: 'Head First Design Patterns',  authorName: 'Elisabeth Freeman', editionYear: 2004},
            { id: 2, title: 'Internet & World Wide Web: How to Program ', authorName: 'Deitel & Deitel', editionYear: 2007}
        ];
        return { livros }
    }
}