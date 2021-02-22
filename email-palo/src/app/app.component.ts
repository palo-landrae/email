import { Component, ViewChild, ElementRef } from '@angular/core';
import { Email } from './email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = new Array<Email>();
  @ViewChild('destinatario') destinatarioInput: ElementRef;
  @ViewChild('oggetto') oggettoInput: ElementRef;
  @ViewChild('corpo') corpoInput: ElementRef;
  invia(destinatari: HTMLInputElement, oggetto: HTMLInputElement, corpo: HTMLInputElement): boolean {
    if ((destinatari.value && oggetto.value && corpo.value) != "") {
      var x = destinatari.value.split(',');
      let y = oggetto.value;
      let z = corpo.value;
      this.emails.push(new Email(x, y, z))
      console.log(x, y, z)
      this.destinatarioInput.nativeElement.value = "";
      this.oggettoInput.nativeElement.value = "";
      this.corpoInput.nativeElement.value = "";
    }
    return false;
  }

}
