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

  isValidEmail(variable: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(variable).toLowerCase());
  }

  validate(): void {    
    if(this.isValidEmail(this.login) && this.message.length != 0){
      this.logger.log('Login : ' + this.login);
      this.logger.log('message : ' + this.message);
      alert('Your message has been sent ! \n\n login : ' + this.login + '\n message : ' + this.message)
    }
    else{
      alert('Your message has not been sent ! \n\nPlease enter valid email and message!')
    }
  }

  

}