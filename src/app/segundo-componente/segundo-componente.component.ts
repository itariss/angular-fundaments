import { Component } from "@angular/core";

@Component({
	selector: "app-segundo-componente",
	templateUrl: "./segundo-componente.component.html",
	styleUrls: ["./segundo-componente.component.css"]
})
export class SegundoComponenteComponent {
	private _nome: string = "João";
	private _dataNascimento: Date = new Date("1992-09-28");

	get nome(): string {
		return this._nome;
	}

	get dataNascimento(): Date {
		return this._dataNascimento;
	}
}
