import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../logger.service";

@Component({
	selector: "app-teste-servico",
	templateUrl: "./teste-servico.component.html",
	styleUrls: ["./teste-servico.component.css"]
})
export class TesteServicoComponent {
	nome: string = "";

	constructor(private logger: LoggerService) {}

	adicionarNome() {
		this.logger.logar(`O nome ${this.nome} foi adicionado`);
	}
}
