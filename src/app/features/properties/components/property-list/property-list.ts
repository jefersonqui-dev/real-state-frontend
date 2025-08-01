import { Component, OnInit, signal, effect , inject} from '@angular/core';
import { Property } from '../../model/property.model';
import { PropertyCard } from '../property-card/property-card';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../services/property';
import { Router } from '@angular/router';
@Component({
  selector: 'app-property-list',
  imports: [PropertyCard, FormsModule],
  templateUrl: './property-list.html',
  styleUrl: './property-list.css',
})
export class PropertyList implements OnInit {
  allProperties = signal<Property[]>([]);
  properties = signal<Property[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | undefined>(undefined);

  filterCity = signal<string>('');

  constructor(private service: PropertyService, private router: Router) {
    effect(() => {
      if (!this.filterCity()) {
        this.properties.set(this.allProperties());
      } else {
        this.properties.set(
          this.allProperties().filter((p) =>
            p.city.toLowerCase().includes(this.filterCity().toLowerCase())
          )
        );
      }
    });
  }
  ngOnInit(): void {
    this.loadProperties();
  }
  showDetail(id: number) {
  this.router.navigate(['properties',id]);     
  }
  searchProperties() {
    // if(!this.filterCity){
    //   this.properties = this.allProperties;
    // }else{
    //   this.properties = this.allProperties
    //     .filter(p => p.city.toLowerCase().includes(this.filterCity.toLowerCase()))
    // }
  }
  private loadProperties(): void {
    console.log("cargando informacion de propiedades");
    this.loading.set(true);
    this.error.set(undefined);
    this.service.getAllProperties().then(data => {
      console.log("Datos recibidos");
      this.allProperties.set(data);
      this.properties.set(this.allProperties());
      this.loading.set(false);
      console.log("Fin de recepcion de datos");
    }).catch(error => this.error.set(error));

    
  }
}
