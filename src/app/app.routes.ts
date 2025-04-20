import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import {InicioComponent} from './inicio/inicio.component';
import {SobreNosotrosComponent} from './sobre-nosotros/sobre-nosotros.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { UnialiadasComponent } from './unialiadas/unialiadas.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'unialiadas', component: UnialiadasComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {


}
