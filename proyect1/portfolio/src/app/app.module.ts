import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FrameComponent } from './components/frame/frame.component';
import { Header3Component } from './components/header3/header3.component';
import { Est1Component } from './components/estudios/est1/est1.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Est2Component } from './components/estudios/est2/est2.component';
import { Est3Component } from './components/estudios/est3/est3.component';
import { Trb1Component } from './components/trabajos/trb1/trb1.component';
import { Cur1MetAgilComponent } from './components/cursos/cur1-met-agil/cur1-met-agil.component';
import { Cur2AltiumComponent } from './components/cursos/cur2-altium/cur2-altium.component';
import { SveltiaComponent } from './components/detalles/sveltia/sveltia.component';
import { QtComponent } from './components/aptitudes/qt/qt.component';
import { DetallesbkgComponent } from './components/detalles/detallesbkg/detallesbkg.component';
import { CurMetComponent } from './components/detalles/cur-met/cur-met.component';
import { CurAltiumComponent } from './components/detalles/cur-altium/cur-altium.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FrameComponent,
    Header3Component,
    Est1Component,
    FooterComponent,
    LoginComponent,
    ResumenComponent,
    Est2Component,
    Est3Component,
    Trb1Component,
    Cur1MetAgilComponent,
    Cur2AltiumComponent,
    SveltiaComponent,
    QtComponent,
    DetallesbkgComponent,
    CurMetComponent,
    CurAltiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
