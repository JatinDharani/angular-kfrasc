import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TfaFormComponent } from '../tfa-form/tfa-form.component';

const routes: Routes = [
{
	path:'tfaform',component:TfaFormComponent
},
{
	path:'',redirectTo: '/tfaform', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
