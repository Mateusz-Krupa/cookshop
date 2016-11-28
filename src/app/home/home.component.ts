import { Component } from '@angular/core'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.sass']
})
export class HomeComponent {
  title = "home component";

  categories = [{
    name: "Breakfast",
    image: "assets/img/1breakfast.jpg",
    id: "123",
    link: "recipeList/123"

  },
    {
      name: "Second Breakfast",
      image: "assets/img/2breakfast.jpg",
      id: "1234",
      link: "recipeList/123"
    },
    {
      name: "Lunch",
      image: "assets/img/lunch.jpeg",
      id: "1234",
      link: "recipeList/123"
    },
    {
      name: "Afternoon Snack",
      image: "assets/img/afternoonsnack.jpeg",
      id: "1234",
      link: "recipeList/123"
    },
    {
      name: "Dinner",
      image: "assets/img/afternoonsnack.jpeg",
      id: "1234",
      link: "recipeList/123"
    },
    {
      name: "Dessert",
      image: "assets/img/2breakfast.jpg",
      id: "1234",
      link: "recipeList/123"
    }
  ];
}
