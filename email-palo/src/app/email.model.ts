export class Email {
  destinatari: string[];
  oggetto: string;
  corpo: string;
  espanso : boolean = false;

  constructor(destinatari: string[], oggetto: string, corpo: string) {
    this.destinatari = destinatari;
    this.oggetto = oggetto;
    this.corpo = corpo;
  }

  espandi() : void {
   this.espanso = !this.espanso;
  }
}
