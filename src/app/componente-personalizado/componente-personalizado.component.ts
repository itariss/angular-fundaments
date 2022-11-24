import { Component, Input } from "@angular/core";

@Component({
	selector: "app-componente-personalizado",
	templateUrl: "./componente-personalizado.component.html",
	styleUrls: ["./componente-personalizado.component.css"]
})
export class ComponentePersonalizadoComponent {
	@Input()
	sobrenome = "";
	@Input()
	nome = "";

	// public set nome(value) {
	// 	this._nome = value;
	// }

	// public set sobrenome(value) {
	// 	this._sobrenome = value;
	// }

	// public get sobrenome() {
	// 	return this._sobrenome;
	// }

	// public get nome() {
	// 	return this._nome;
	// }
}
