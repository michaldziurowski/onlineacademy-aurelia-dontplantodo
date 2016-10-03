export class DontDo {
    constructor(text){
        this.text = text;
        this.finished = false;        
    }

    toggleFinished(){
        this.finished = !this.finished;
    }
}