import { Component } from '@angular/core';
import { Email } from './email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = new Array<Email>();

  invia(destinatari: HTMLInputElement, oggetto: HTMLInputElement, corpo: HTMLInputElement): boolean {
    let x = new Array<string>();
    if (destinatari.value.indexOf(',') === -1){
      x = destinatari.value.split(',');
    }else{
      x[0] = destinatari.value;
    }
    let y = oggetto.value;
    let z = corpo.value;
    this.emails.push(new Email(x,y,z))
    console.log(x,y,z)
    return false;
  }

}
