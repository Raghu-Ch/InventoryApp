import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="center">
    <mat-card fxFlex=50 fxLayout="column" class="center">
      <i class="material-icons">error</i>
      <p> 404! </p>
      <p>
        page-not-found!
      </p>
    </mat-card>
  </div>
  `,
  styles: ['p,i {color: red;}', 'i {font-size: 60px;}', '.center {align-items: center; justify-content: center;}']
})
export class PageNotFoundComponent { }
