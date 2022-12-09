import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class LoggerService {
	mensagens: Array<string> = [];

	logar(mensagem: string) {
		console.log(mensagem);
		this.mensagens.push(mensagem);
	}

	exibeListaLogs() {
		console.log(this.mensagens);
	}
}
