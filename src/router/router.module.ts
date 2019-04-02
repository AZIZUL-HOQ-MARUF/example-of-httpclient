import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from 'src/app/components/http/http.component';

const appRoutes: Routes = [
  { path: 'http', component: HttpComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
