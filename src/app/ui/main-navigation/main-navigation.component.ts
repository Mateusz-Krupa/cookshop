import { Component, Input } from '@angular/core';

@Component({
    selector: 'main-navigaton',
    templateUrl: 'main-navigation.component.html',
    styleUrls: ['main-navigation.component.sass']
})
export class MainNavigation {
    @Input()
    items;
}