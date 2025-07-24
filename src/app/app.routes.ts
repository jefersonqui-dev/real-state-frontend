import { Routes } from '@angular/router';
import { PropertyList } from './features/properties/components/property-list/property-list';
import { Signal } from './features/samples/signal/signal';

export const routes: Routes = [
{
    path: '',
    component: PropertyList
},
{
    path: 'signal',
    component: Signal
}

];
