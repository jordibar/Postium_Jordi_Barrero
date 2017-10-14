import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  @Input() posts: Post[];

  constructor(
    private _router: Router) {}


  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección del autor de un post y navega a la dirección correspondiente.  |
  | Recuerda que para hacer esto necesitas inyectar como dependencia el      |
  | Router de la app. La ruta a navegar es '/posts/users', pasando como      |
  | parámetro el identificador del autor.                                    |
  |=========================================================================*/
  mostrarPostsUsuario(post: Post): void {
    const userId = post.author.id;
    this._router.navigate(['posts/users', userId ]);
    
  }

  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección de un post y navega a la dirección correspondiente. Recuerda   |
  | que para hacer esto necesitas inyectar como dependencia el Router de la  |
  | app. La ruta a navegar es '/posts', pasando como parámetro el            |
  | identificador del post.                                                  |
  |=========================================================================*/
  mostrarPostDetails(post: Post): void {
    const postId = post.id;
    this._router.navigate(['/posts/', postId ]);
    //console.log("Post pulsado "+post.id);
  }
}
