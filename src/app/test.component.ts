import { Component, Input } from '@angular/core'

@Component({
    selector: 'test-component',
    template: `
        <h1>{{title}}</h1>
        <input [(ngModel)]="testData.property1"/>
        <button (click)="toggleInput()">{{hideInput ? 'Show text' : 'Hide text'}}</button>
        <div *ngIf="!hideInput">
            {{input}}
        </div>
    `
})
export class TestComponent {
    @Input()
    testData: any;

    title = 'testcomp';
    hideInput = true;

    toggleInput(): void {
        this.hideInput = !this.hideInput;
    }
}