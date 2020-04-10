# Angular-lint-issue

https://github.com/angular/angular-cli/issues/17382

If the the file `src/app/foo/foo.service` is not imported anywhere it can not be linted at all.  
Just uncomment this statement `import { a } from './foo/foo.service';` in the the `app.component.ts` and the lint stage will be passed.

Command in your terminal: `ng lint --files src/app/foo/foo.service.ts`
