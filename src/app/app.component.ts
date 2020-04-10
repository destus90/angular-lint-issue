import { Component } from '@angular/core';

/**
 * uncomment import statement and `ng lint --files src/app/foo/foo.service.ts` should work
 */
// import { a } from './foo/foo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super-test';
}
