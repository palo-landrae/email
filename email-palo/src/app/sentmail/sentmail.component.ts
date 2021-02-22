import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sentmail',
  templateUrl: './sentmail.component.html',
  styleUrls: ['./sentmail.component.css']
})
export class SentmailComponent implements OnInit {

  @Input() email;

  constructor() { }

  ngOnInit(): void {
  }

  espandi() : boolean {
    this.email.espandi();
    return false;
  }
}
