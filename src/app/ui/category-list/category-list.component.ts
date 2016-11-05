import { Component, Input } from '@angular/core';

@Component({
    selector: 'category-list',
    templateUrl: 'category-list.component.html', 
    styleUrls: ['category-list.component.sass']
})
export class CategoryList {
    
    @Input()
    items; 

}