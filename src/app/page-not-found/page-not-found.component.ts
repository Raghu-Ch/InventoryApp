import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="aligner" fxLayout="column" fxLayoutAlign="center center">
    <i class="material-icons">error</i>
    <p> 404! page-not-found</p>
  </div>
  `,
  styles: ['p,i {color: red; font-size: 24px;}', 'i {font-size: 90px;}', '.aligner {position: relative; top: 200px}']
})
export class PageNotFoundComponent { }
