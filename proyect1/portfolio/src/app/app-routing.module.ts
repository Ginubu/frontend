import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurMetComponent } from './components/detalles/cur-met/cur-met.component';
import { SveltiaComponent } from './components/detalles/sveltia/sveltia.component';
import { LoginComponent } from './components/login/login.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { CurAltiumComponent } from './components/detalles/cur-altium/cur-altium.component';

const routes: Routes = [
  {path:'resumen', component:ResumenComponent},
  {path:'login', component:LoginComponent},
  {path:'sveltia',component:SveltiaComponent},
  {path: 'cur1-met-agil',component:CurMetComponent},
  {path: 'cur2-altium', component:CurAltiumComponent},
  {path:'',redirectTo:'resumen',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
