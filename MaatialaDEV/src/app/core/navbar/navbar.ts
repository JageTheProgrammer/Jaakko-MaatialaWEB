import { Component, HostListener } from "@angular/core";

@Component({
    selector: 'Navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['navbar.css'],
})
export class Navigationbar {

    isScrolled = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 100;
    }

}
