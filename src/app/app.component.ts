import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
template: `

<nav class='navbar navbar-expand navbar-light bg-light' >
<a class='navbar-brand '>{{title}}</a>
<ul class='nav nav-pills'>
<li><a class='nav-link' routerLink="/welcome">home</a></li>
<li><a class='nav-link' routerLink="/products">product</a></li>

</ul>
</nav>
<div>
<router-outlet></router-outlet>
</div>

`
 
})
export class AppComponent {
 title : string = 'My first Angular application';

}
