import { Component } from '@angular/core';

@Component({
    selector: 'recipe-list',
    templateUrl: 'recipeList.component.html',
    styleUrls: ['recipeList.component.sass']
})
export class RecipeListComponent {

  item = {
    name: "Schabowe w wciescie",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image: "assets/img/ramen.jpg",
    kcal: "300",
    allergens: {
      gluten: true,
      lactose: true
    }

  }

  items = (function(item){
    let items = [];
    for(let i = 0; i < 30; i++){
      let tmp = Object.create(item);
      tmp.name = item.name + i;
      items.push(tmp)
    }
    return items;
  })(this.item)

  title = this.items;

}
