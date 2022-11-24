import { Component } from "@angular/core";
import { Celular } from "../types/Celular";

@Component({
	selector: "app-renderizando-listas",
	templateUrl: "./renderizando-listas.component.html",
	styleUrls: ["./renderizando-listas.component.css"]
})
export class RenderizandoListasComponent {
	celulares: Array<Celular> = [
		{ id: 1, nome: "Celular XL", descricao: "Smartphone", emEstoque: true },
		{ id: 2, nome: "Celular GL", descricao: "Phonesmart", emEstoque: true },
		{
			id: 3,
			nome: "Celular SL",
			descricao: "Sphartmone",
			emEstoque: false
		},
		{
			id: 4,
			nome: "Celular VL",
			descricao: "Moartstone",
			emEstoque: false
		},
		{ id: 5, nome: "Celular WL", descricao: "Quá", emEstoque: true }
	];
}
