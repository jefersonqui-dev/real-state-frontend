import { Component, OnInit} from "@angular/core";
@Component({
    selector: 'app-lifecycle',
    template: `<p>Lifecycle works</p>`,
    
})
export class Lifecycle implements OnInit{

    constructor(){
        console.log("Creando el Componente");
    }
   ngOnInit(): void{
      console.log("Inicializando el componente");
   }
}