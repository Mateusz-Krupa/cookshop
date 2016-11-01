import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'bottom-navigaton',
    templateUrl: 'bottom-navigation.component.html',
    styleUrls: ['bottom-navigation.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class BottomNavigtion { 
    navigationItems = [
        {
            name: 'My List', 
            icon: 'assets/svg/interface.svg',
            link: 'my-list'
        },
        {
            name: 'Active Recipes', 
            icon: 'assets/svg/list.svg',
            link: 'recipes?active=true'
        }, 
        {
            name: 'My Fridge', 
            icon: 'assets/svg/internet.svg',
            link: 'my-fridge'
        },
        {
            name: 'User', 
            icon: 'assets/svg/social.svg',
            link: 'user'
        }
    ]
}