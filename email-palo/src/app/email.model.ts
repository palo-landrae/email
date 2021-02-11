export class Email {
  destinatari: string[];
  oggetto: string;
  corpo: string;

  constructor(destinatari: string[], oggetto: string, corpo: string) {
    this.destinatari = destinatari;
    this.oggetto = oggetto;
    this.corpo = corpo;
  }
}
