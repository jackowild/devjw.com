import { Component } from '@angular/core'

@Component({
    selector: 'devjw-app',
    template: `
        <test-component [testData]="testData"></test-component>
    `
})
export class AppComponent {
    testData = { 
        property1: "hello",
        property2: 1
    };
}