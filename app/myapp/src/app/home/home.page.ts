import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutentificarService } from '../Servicio/autentificacion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private auth:AutentificarService) {


  }
  user = {user:"", password:""}

  public mensaje ="";

  

  enviarLogin() {
    this.auth.login(this.user.user, this.user.password).then(() => {
      if (this.auth.autentificado) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user }
        }
        this.router.navigate(['/mapa'], navigationExtras);
      } else {
        this.mensaje = "Debe ingresar sus credenciales";
      }
    });
  }










}
