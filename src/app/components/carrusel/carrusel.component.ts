import { Component } from '@angular/core';
import { IMAGES } from '../../../assets/images.db';

@Component({
    selector: 'app-carrusel',
    imports: [],
    templateUrl: './carrusel.component.html',
    styleUrl: './carrusel.component.css',
})
export class CarruselComponent {

    //Creamos un array de Strings en el cargaremos las rutas de laS imagenes
    images: string[];

    constructor() {
        //cargamos las rutas de las imagenes del fichero que esta en assets images.db.ts
        this.images = IMAGES;
    }

}
