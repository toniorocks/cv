import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'acceso', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
