import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  constructor(private router:Router, private activatedRouter: ActivatedRoute) {}

  public user = {
    user: "",
    password: ""}
    ngOnInit() {
      this.activatedRouter.queryParams.subscribe(() => {
        let state = this.router.getCurrentNavigation()?.extras.state;
        if (state) {
          this.user.user = state['user'].user;
          this.user.password = state['user'].password;
          console.log(this.user);
  
        }
  
  
      })

  
  
  
  
  
  
  
  }

}
