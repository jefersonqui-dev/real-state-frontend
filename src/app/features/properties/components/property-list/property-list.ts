import { Component } from '@angular/core';
import { Property } from '../../model/property.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-property-list',
  imports: [CurrencyPipe],
  templateUrl: './property-list.html',
  styleUrl: './property-list.css'
})
export class PropertyList {
  properties: Property[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(){
    this.loadProperties(); 
  }


  loadProperties(): void{
    this.loading = true;
    this.error = null;
  
  setTimeout(() => {
    this.properties = [
  
      {
        id: 1,
        adress: '456 Avenida del Sol',
        city: 'Madrid',
        price: 250000,
        bedrooms: 4,
        bathrooms: 3,
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        description: 'Amplio piso luminoso en el centro de Madrid, cerca de todos los servicios.'
      },
      {
        id: 2,
        adress: '789 Calle Luna',
        city: 'Barcelona',
        price: 320000,
        bedrooms: 3,
        bathrooms: 2,
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        description: 'Moderno apartamento con vistas al mar y terraza privada.'
      },
      {
        id: 3,
        adress: '1011 Camino Verde',
        city: 'Valencia',
        price: 180000,
        bedrooms: 2,
        bathrooms: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
        description: 'Acogedora casa rural rodeada de naturaleza y tranquilidad.'
      },
      {
        id: 4,
        adress: '1213 Plaza Mayor',
        city: 'Sevilla',
        price: 275000,
        bedrooms: 5,
        bathrooms: 3,
        imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
        description: 'Chalet familiar con jardín y piscina privada en zona exclusiva.'
      },
      {
        id: 5,
        adress: '1415 Paseo del Río',
        city: 'Bilbao',
        price: 210000,
        bedrooms: 3,
        bathrooms: 2,
        imageUrl: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80',
        description: 'Piso reformado con excelentes vistas al río y garaje incluido.'
      },

    ]
    this.loading = false;
  },1500);
}}
