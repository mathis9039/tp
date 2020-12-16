import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { ReadComponent } from './application/crud/read/read.component';
import { ShowComponent } from './application/crud/show/show.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { ErrorComponent } from './application/error/error.component';
import { FormComponent } from './application/formulaires/form/form.component';
import { ReactiveFormComponent } from './application/formulaires/reactive-form/reactive-form.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';


const routes: Routes = [
  {path:'tutoriel',
    children:[
      {path:':id', component: TutorielsComponent},
    ]},
  {path:'updateForm/:id', component: UpdateComponent},
  {path:'show/:id', component: ShowComponent},
  {path:'formulaire', component: ReactiveFormComponent},
  {path:'crud', component: ReadComponent},
  {path:'contact', component: ContactComponent},
  {path:'home', component: HomeComponent},

  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
