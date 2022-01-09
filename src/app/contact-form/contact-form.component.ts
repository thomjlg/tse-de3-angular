import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  login: string = ''
  message: string = ''
  
  constructor(private logger: LoggerService){ }

  ngOnInit(): void{
    this.logger.log('page initialized')
  }

  validate(): void {
    this.logger.log('Login : ' + this.login);
    this.logger.log('message : ' + this.message);
    

    alert('Your message has been sent ! \n\n login : ' + this.login + '\n\n message : ' + this.message)
  }

  

}