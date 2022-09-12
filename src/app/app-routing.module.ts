import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { EditblogComponent } from './editblog/editblog.component';
import { HomeComponent } from './home/home.component';
import { NewblogComponent } from './newblog/newblog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'new', component: NewblogComponent  },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: BlogdetailsComponent },
  { path: 'home/:id/edit', component: EditblogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
