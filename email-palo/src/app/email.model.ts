export class Email {
  destinatari: string[];
  oggetto: string;
  corpo: number;

  constructor(destinatari: string[], oggetto: string, corpo: number) {
    this.destinatari = destinatari;
    this.oggetto = oggetto;
    this.corpo = corpo;
  }
}
