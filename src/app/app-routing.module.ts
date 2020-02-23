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
import { AdminComponent } from './admin/admin.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { MensajesComponent } from './admin/mensajes/mensajes.component';
import { ProyectosComponent } from './admin/proyectos/proyectos.component';
import { HabilidadesComponent } from './admin/habilidades/habilidades.component';
import { LibroComponent } from './admin/libro/libro.component';
import { PublicacionesComponent } from './admin/publicaciones/publicaciones.component';
import { LoginGuard } from './servicios/guards/login.guard';
import { NuevaComponent } from './admin/publicaciones/nueva/nueva.component';
import { IndiceComponent } from './admin/publicaciones/indice/indice.component';
import { EditaComponent } from './admin/publicaciones/edita/edita.component';


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
  },{
    path: 'admin', component: AdminComponent, children: [
      { path: '', component: InicioComponent, canActivate: [LoginGuard] },
      { path: 'mensajes', component: MensajesComponent, canActivate: [LoginGuard] },
      { path: 'proyectos', component: ProyectosComponent, canActivate: [LoginGuard] },
      { path: 'habilidades', component: HabilidadesComponent, canActivate: [LoginGuard] },
      { path: 'publicaciones', component: PublicacionesComponent, canActivate: [LoginGuard], children: [
        {path: '', component: IndiceComponent, canActivate: [LoginGuard]},
        {path: 'nuevo', component: NuevaComponent, canActivate: [LoginGuard]},
        {path: 'edita', component: EditaComponent, canActivate: [LoginGuard]},
      ] },
      { path: 'libro', component: LibroComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
