import {DontDo} from 'dontdo'

export class DontDoList {
    constructor(){
        this.dontDoText = '';
        this.dontDos = [];        
    }

    add(){
        if(this.dontDoText){
            let dontDo = new DontDo(this.dontDoText);
            this.dontDos.push(dontDo);
            this.dontDoText = '';
        }   
    }
}