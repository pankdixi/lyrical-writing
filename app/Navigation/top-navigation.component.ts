import { Component } from '@angular/core';

@Component({
    selector: "top-nav",
    templateUrl: "app/Navigation/top-navigation.component.html"
})
export  class TopNavigationComponent {
appName: string = 'Lyrical Writing';
dropdownMenu: string[] = [ "Option1", "Option2", 'Option3'];
rightMenu:string[] = ['Search', 'Post', 'Log In'];
}