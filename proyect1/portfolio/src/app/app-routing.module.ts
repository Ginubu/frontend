import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cur1MetAgilComponent } from './components/cursos/cur1-met-agil/cur1-met-agil.component';
import { CurMetComponent } from './components/detalles/cur-met/cur-met.component';
import { SveltiaComponent } from './components/detalles/sveltia/sveltia.component';
import { LoginComponent } from './components/login/login.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  {path:'resumen', component:ResumenComponent},
  {path:'login', component:LoginComponent},
  {path:'sveltia',component:SveltiaComponent},
  {path: 'cur1-met-agil',component:CurMetComponent},
  {path:'',redirectTo:'resumen',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
