import { Component } from '@angular/core'

@Component({
    selector: 'devjw-app',
    template: `
        <h1>{{title}}</h1>
    `
})
export class AppComponent {
    title = 'DevJW';
}