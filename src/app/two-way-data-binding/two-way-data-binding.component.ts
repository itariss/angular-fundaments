import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-two-way-data-binding",
	templateUrl: "./two-way-data-binding.component.html",
	styleUrls: ["./two-way-data-binding.component.css"]
})
export class TwoWayDataBindingComponent {
	private _nome: string = "";

	get nome(): string {
		return this._nome;
	}

	set nome(nome: string) {
		this._nome = nome;
	}
}
