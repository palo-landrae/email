export class Email {
  destinatari: string[];
  oggetto: string;
  corpo: string;
  espanso : boolean;
  lblEspandi : string;

  constructor(destinatari: string[], oggetto: string, corpo: string) {
    this.destinatari = destinatari;
    this.oggetto = oggetto;
    this.corpo = corpo;
    this.espanso = false;
    this.lblEspandi = "Espandi";
  }

  espandi() : void {
    if (this.espanso) {
      this.lblEspandi = "Espandi";
    }else{
      this.lblEspandi = "Chiudi";
    }
    this.espanso = !this.espanso;
  }
}
