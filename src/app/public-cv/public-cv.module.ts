import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from '../app-routing.module';

import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ExitoComponent } from './exito/exito.component';
import { PublicCvComponent } from './public-cv.component';
import { SharedComponent } from './shared/shared.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OauthService } from '@app/servicios/interceptores/oauth.service';

@NgModule({
    declarations: [
        HomeComponent,
        ContactoComponent,
        BlogComponent,
        PortfolioComponent,
        SkillsComponent,
        BootstrapModalComponent,
        LoginComponent,
        RegistroComponent,
        ExitoComponent,
        PublicCvComponent,
        SharedComponent,
        ProfileMenuComponent
    ],
    exports: [
        LoginComponent,
        RegistroComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AppRoutingModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: OauthService,
        multi: true
    }]
})

export class PublicCvModule {}