import { Routes } from "@angular/router"
import { PropertyList } from "./components/property-list/property-list"
import { PropertyDetail } from "./components/property-detail/property-detail"
export const properties_route: Routes = [
    {
        path: "",
        loadComponent: () => import('./components/property-list/property-list').then(c => c.PropertyList)
    },
    {
        path: ":propertyId",
        loadComponent: ()=> import('./components/property-detail/property-detail').then(c => c.PropertyDetail)
    }
]