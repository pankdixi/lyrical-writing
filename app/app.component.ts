import { Component } from '@angular/core';
import {TopNavigationComponent} from './Navigation/top-navigation.component';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
    ,
    directives: [TopNavigationComponent]
})
export class AppComponent {

 }
