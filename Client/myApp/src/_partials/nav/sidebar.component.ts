import { OnInit,Component } from '@angular/core';


@Component({
    templateUrl:'sidebar.component.html',
    selector:'sidebar'
})
export class SideBarComponent implements OnInit{

    sideBar:HTMLElement = null;

    sideBarBtn:HTMLElement;

    classList:any={
        sideBar:{
            open:'open',closed:'closed'
        }
    };

    ToggleMenu(){
        this.sideBar.className==this.classList.sideBar.closed?
            this.sideBar.className = this.classList.sideBar.open
            :this.sideBar.className = this.classList.sideBar.closed;
    }

    constructor(){
        
        
    }

    ngOnInit(){
        this.sideBar = document.getElementById('sidebar');
        this.sideBarBtn = document.getElementById('sidebar-button');
    }
}