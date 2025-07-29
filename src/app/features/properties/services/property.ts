import { Injectable, signal } from '@angular/core';
import { Property } from '../model/property.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private properties = signal<Property[]>([
    {
      id: 1,
      adress: '456 Avenida del Sol',
      city: 'Madrid',
      price: 250000,
      bedrooms: 4,
      bathrooms: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      description:
        'Amplio piso luminoso en el centro de Madrid, cerca de todos los servicios.',
    },
    {
      id: 2,
      adress: '789 Calle Luna',
      city: 'Barcelona',
      price: 320000,
      bedrooms: 3,
      bathrooms: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      description: 'Moderno apartamento con vistas al mar y terraza privada.',
    },
    {
      id: 3,
      adress: '1011 Camino Verde',
      city: 'Valencia',
      price: 180000,
      bedrooms: 2,
      bathrooms: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
      description: 'Acogedora casa rural rodeada de naturaleza y tranquilidad.',
    },
    {
      id: 4,
      adress: '1213 Plaza Mayor',
      city: 'Sevilla',
      price: 275000,
      bedrooms: 5,
      bathrooms: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
      description:
        'Chalet familiar con jardín y piscina privada en zona exclusiva.',
    },
    {
      id: 5,
      adress: '1415 Paseo del Río',
      city: 'Bilbao',
      price: 210000,
      bedrooms: 3,
      bathrooms: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80',
      description:
        'Piso reformado con excelentes vistas al río y garaje incluido.',
    },
    {
      id: 6,
      adress: '1617 Avenida del Sol',
      city: 'Granada',
      price: 195000,
      bedrooms: 2,
      bathrooms: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      description:
        'Apartamento luminoso cerca de la Alhambra, ideal para parejas o inversión turística.',
    },
    {
      id: 7,
      adress: '1819 Calle del Mar',
      city: 'Málaga',
      price: 340000,
      bedrooms: 4,
      bathrooms: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      description:
        'Ático con gran terraza y vistas al mar, a pocos minutos de la playa.',
    },
    {
      id: 8,
      adress: '2021 Camino de los Olivos',
      city: 'Córdoba',
      price: 160000,
      bedrooms: 3,
      bathrooms: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      description:
        'Casa tradicional andaluza con patio interior y encanto histórico.',
    },
    {
      id: 9,
      adress: '2223 Calle Real',
      city: 'Zaragoza',
      price: 230000,
      bedrooms: 3,
      bathrooms: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1466301588506-1a4b7f3c5a38?auto=format&fit=crop&w=400&q=80',
      description:
        'Piso céntrico con balcón, cerca de comercios y transporte público.',
    },
    {
      id: 10,
      adress: '2425 Plaza de la Paz',
      city: 'Santander',
      price: 285000,
      bedrooms: 4,
      bathrooms: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=400&q=80',
      description:
        'Dúplex moderno con garaje y trastero, en zona tranquila y bien comunicada.',
    },
  ]);
  constructor() {}
  getAllProperties(): Promise<Property[]> {
    console.log('Entrando al metodo getAllProperties');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Devolviendo la lista de Propiedades');
        resolve(this.properties());
      }, 1500);
    });
  }
  getProperty(id: number): Promise<Property> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const property = this.properties().filter((p) => p.id == id);
        if (property.length == 0) {
          reject('No se ha encontrado la propiedad con id ' + id);
        } else {
          resolve(property[0]);
        }
      }, 1500);
    });
  }
}
