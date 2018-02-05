import {Component,OnInit} from '@angular/core'

@Component({
    template:`nav first component`
})

class NavFirstComponent {



    constructor(){
        alert();
    }

    private alertFn = () => {
        alert('component initialized');

    }

    OnInit:()=>{
        alertFn();
    }
}

export { NavFirstComponent }