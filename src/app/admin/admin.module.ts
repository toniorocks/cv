import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@app/app-routing.module';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { HabilidadesComponent } from '@app/admin/habilidades/habilidades.component';
import { InicioComponent } from '@app/admin/inicio/inicio.component';
import { LibroComponent } from '@app/admin/libro/libro.component';
import { ProyectosComponent } from '@app/admin/proyectos/proyectos.component';
import { PublicacionesComponent } from '@app/admin/publicaciones/publicaciones.component';
import { NuevaComponent } from '@app/admin/publicaciones/nueva/nueva.component';
import { EditaComponent } from '@app/admin/publicaciones/edita/edita.component';
import { IndiceComponent } from '@app/admin/publicaciones/indice/indice.component';
import { AdminComponent } from '@app/admin/admin.component';
import { MensajesComponent } from '@app/admin/mensajes/mensajes.component';

import { OauthService } from '@app/servicios/interceptores/oauth.service';

@NgModule({
    declarations: [
        AdminComponent,
        HabilidadesComponent,
        InicioComponent,
        LibroComponent,
        ProyectosComponent,
        PublicacionesComponent,
        NuevaComponent,
        EditaComponent,
        IndiceComponent,
        MensajesComponent
    ],
    exports: [],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        AppRoutingModule,
        AngularEditorModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: OauthService,
        multi: true
    }]
})

export class AdminModule {}
