import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'AK-Hair';

    constructor(private router: Router) {  
       
        // this.router.navigate(['/login']);
    }

}
