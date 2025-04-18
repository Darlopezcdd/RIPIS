import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import {InicioComponent} from './inicio/inicio.component';
import {SobreNosotrosComponent} from './sobre-nosotros/sobre-nosotros.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';


export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'beneficios', component: BeneficiosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {


}
