import { Component, Input,OnInit, OnChanges, SimpleChange, SimpleChanges} from "@angular/core";
@Component({
    selector: 'app-lifecycle',
    template: `<p>Lifecycle works</p>`,
    
})
export class Lifecycle implements OnInit,OnChanges{
    @Input() name: string = '';
    constructor(){
        console.log("Creando el Componente");
    }
    ngOnChanges(OnChanges: SimpleChanges):void{
    console.log("Recibiendo Cambios en los Parametros");
    }
   ngOnInit(): void{
      console.log("Inicializando el componente");
   }   
}       