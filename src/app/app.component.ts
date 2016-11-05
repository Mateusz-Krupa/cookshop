import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';


  // TODO move it to mongo and node 
  navigationItems = [{
    name: 'home',
    link: ''
  }, {
    name: 'recipes',
    link: 'recipeList'
  }, {
    name: 'basket',
    link: 'basket'
  }];

  bottomNavigationItems = [
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
  ];

}
