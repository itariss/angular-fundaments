import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../logger.service";

@Component({
	selector: "app-teste-servico2",
	templateUrl: "./teste-servico2.component.html",
	styleUrls: ["./teste-servico2.component.css"]
})
export class TesteServico2Component {
	constructor(public logger: LoggerService) {}
	produto: string = "";

	adicionarProduto() {
		this.logger.logar(
			`O Produto ${this.produto} foi adicionado com sucesso`
		);
	}
}
