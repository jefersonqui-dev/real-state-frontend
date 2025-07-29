import { Routes } from "@angular/router"
import { PropertyList } from "./components/property-list/property-list"
import { PropertyDetail } from "./components/property-detail/property-detail"
export const properties_route: Routes = [
    {
        path: "",
        component: PropertyList
    },
    {
        path: ":propertyId",
        component: PropertyDetail
    }
]