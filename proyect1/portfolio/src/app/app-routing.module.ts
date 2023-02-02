import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SveltiaComponent } from './components/detalles/sveltia/sveltia.component';
import { LoginComponent } from './components/login/login.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  {path:'resumen', component:ResumenComponent},
  {path:'login', component:LoginComponent},
  {path:'sveltia',component:SveltiaComponent},
  {path:'',redirectTo:'resumen',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
