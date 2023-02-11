import { Component } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-auth-page',
  styleUrls: ['auth.component.scss'],
  template: `

        <router-outlet></router-outlet>
   
  `,
})
export class AuthComponent {
}
