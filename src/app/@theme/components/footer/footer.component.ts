import { Component } from '@angular/core';
@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      0.0.1
    </span>
    <div class="socials">
     <p>{{currentYear}}</p>
    </div>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
