import { Component } from '@angular/core';
import { AuthService } from '../Servicio/auth.service';
import { User } from '../Servicio/user.model'; // Importa la interfaz User
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  user: User = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {} // Inyecta el Router

  enviarLogin() {
    this.authService.authenticate(this.user.username, this.user.password).subscribe((result: User[]) => {
      if (result.length > 0) {
        // Usuario autenticado con éxito, redirige a la página "bienvenida"
        const username = result[0].username;
        console.log('Usuario autenticado con éxito');
        this.router.navigate(['/bienvenida', { username: username }]);

      } else {
        // Usuario no autenticado, muestra un mensaje de error
        console.log('Error de autenticación');
      }
    });
  }
}








