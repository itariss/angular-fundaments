import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PrimeiroComponentComponent } from "./primeiro-componente/primeiro-component.component";
import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";
import { MultiplicaPorPipe } from "./multiplica-por.pipe";
import { PipeCustomizadoComponent } from "./pipe-customizado/pipe-customizado.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { FormsModule } from "@angular/forms";
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { TesteServicoComponent } from './teste-servico/teste-servico.component';
import { TesteServico2Component } from './teste-servico2/teste-servico2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
	declarations: [
		AppComponent,
		PrimeiroComponentComponent,
		SegundoComponenteComponent,
		MultiplicaPorPipe,
		PipeCustomizadoComponent,
		TwoWayDataBindingComponent,
  ComponentePersonalizadoComponent,
  RenderizandoListasComponent,
  ComponentePaiComponent,
  ComponenteFilhoComponent,
  TesteServicoComponent,
  TesteServico2Component,
  CicloDeVidaComponent,
  CicloDeVidaPaiComponent,
  CardComponent
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
