import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'; // Importa NavController
import { Capacitor } from '@capacitor/core';
import { BarcodeScanner} from '@capacitor-community/barcode-scanner';  // Importa BarcodeScanner
import { Plugins } from '@capacitor/core';

import { NavigationExtras } from '@angular/router';
const { TextToSpeech } = Plugins as any;

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  public username: string = ''; // Inicializa username con un valor predeterminado

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.username = params.get('username') ?? ''; // Asigna un valor predeterminado si es null
    });
  }

  async escanearQR() {
    if (Capacitor.isPluginAvailable('BarcodeScanner')) {
      try {
        const result = await BarcodeScanner.startScan();
        if (result.hasContent) {
          // Maneja el resultado del escaneo como desees,
          // en este caso, abre la URL escaneada en una nueva ventana.
          window.open(result.content, '_blank');
        }
      } catch (error) {
        console.error('Error al escanear:', error);
      }
    } else {
      console.warn('La funcionalidad de escaneo de QR solo está disponible en dispositivos nativos.');
    }
  }
}
  
  
  
  
  
