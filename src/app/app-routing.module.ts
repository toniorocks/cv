import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/public-cv/home/home.component';
import { ContactoComponent } from '@app/public-cv/contacto/contacto.component';
import { BlogComponent } from '@app/public-cv/blog/blog.component';
import { PortfolioComponent } from '@app/public-cv/portfolio/portfolio.component';
import { SkillsComponent } from '@app/public-cv/skills/skills.component';
import { LoginComponent } from '@app/public-cv/login/login.component';
import { RegistroComponent } from '@app/public-cv/registro/registro.component';
import { ExitoComponent } from '@app/public-cv/exito/exito.component';
import { PublicCvComponent } from '@app/public-cv/public-cv.component';

const routes: Routes = [
  {
    path: '', component: PublicCvComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'acceso', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'exito', component: ExitoComponent }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
