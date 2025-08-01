import { Component, effect, input, OnInit, signal } from '@angular/core';
import { Property } from '../../model/property.model';
import { CurrencyPipe } from '@angular/common';
import { PropertyService } from '../../services/property';
import { Router } from '@angular/router';
@Component({
  selector: 'app-property-detail',
  imports: [CurrencyPipe],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.css',
})
export class PropertyDetail {
  propertyId = input<string | undefined>();

  loading = signal<boolean>(true);
  error = signal<String | undefined>(undefined);
  propertyDetail = signal<Property | undefined>(undefined);

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {
    effect(() => {
      const id = this.propertyId();
      if (id) {
        const IdNum = parseInt(id);
        if (!isNaN(IdNum)) {
          //NaN: Not a Number
          //cargar el detalle de la propiedad
          this.getPropertyDetail(IdNum);
        } else {
          this.error.set('Id de propiedad Invalida');
          this.loading.set(false);
        }
      } else {
        this.error.set('Id de la propiedad no fue dado');
        this.loading.set(false);
      }
    });
  }

  private getPropertyDetail(id: number) {
    this.propertyDetail.set(undefined);
    this.error.set(undefined);
    this.loading.set(true);
    this.propertyService
      .getProperty(id)
      .then((p) => {
        this.propertyDetail.set(p);
        this.loading.set(false);
      })
      .catch((error) => {
        this.error.set('Error al cargar los detalles de la propiedad');
        this.loading.set(false);
      });
  }
  goBack(): void {
    //TODO: Crear el codigo
    this.router.navigateByUrl('/properties');
  }
}
