// aqui estamos importando o component do pacote angular core
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//  Aqui decoramos a classe do component App Header
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// Aqui exportamos a classe HeaderComponent
export class HeaderComponent implements OnInit {
  formLogin
  // aqui definimos o constructor da aplicacao
  constructor(private fb: FormBuilder) { }

  
  ngOnInit() {
    console.log('Component app-header inciado...');
    this.formLogin = this.fb.group({
      cpf: ['']
    });
    
  }

}
