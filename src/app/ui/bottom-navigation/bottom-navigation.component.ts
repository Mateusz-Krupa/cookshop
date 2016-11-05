import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'bottom-navigaton',
    templateUrl: 'bottom-navigation.component.html',
    styleUrls: ['bottom-navigation.component.sass'],
    encapsulation: ViewEncapsulation.Native
})
export class BottomNavigtion {

    @Input()
    items;

}