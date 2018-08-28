import { Component, AfterViewInit ,OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
    name:string;
    loggedUser:Object;
  	constructor(private modalService: NgbModal) {
    	
    }
     ngOnInit(){
        this.loggedUser=JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.loggedUser);
     } 
    ngAfterViewInit() {
        
        var set = function() {
            var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            var topOffset = 0;
            if (width < 1170) {
                $("#main-wrapper").addClass("mini-sidebar");
            } else {
                $("#main-wrapper").removeClass("mini-sidebar");
            }
        };
        $(window).ready(set);
        $(window).on("resize", set);

        
        $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
            $(".app-search").toggle(200);
        });
        
        
        $("body").trigger("resize");
    }
}
