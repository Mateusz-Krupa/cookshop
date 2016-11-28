import { Component } from '@angular/core';

@Component({
  selector: 'recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.sass']
})
export class RecipeComponent {

  model = {
    image: 'assets/img/Burgertajski.jpg',
    title: 'Tajski burger drobiowy',
    description: 'Kotleciki z indyka lub kurczaka doprawione imbirem, sosem sojowym, chili i kolendrą.',
    components: [
      {
        amount: "500g",
        name: "chicken",
        id: ""
      },
      {
        amount: "2 pieces",
        name: "garlic",
        id: ""
      },
      {
        amount: "1",
        name: "chili pepper",
        id: ""
      },
      {
        amount: "2 tbs",
        name: "vegetable oil",
        id: ""
      }
    ],
    steps: [
      {
        order: 1,
        description: "Mielone mięso włożyć do miski, dodać starty na drobnej tarce imbir oraz rozdrobnione w melakserze lub drobno posiekane: chili bez pestek, czosnek, cebulę, kolendrę i bazylię."
      },
      {
        order: 2,
        description: "Dodać olej roślinny, doprawić solą, pieprzem i opcjonalnie sosem rybnym. Dokładnie wymieszać. Zwilżając dłonie zimną wodą uformować 6 kotletów o grubości 2 cm. Obtoczyć w oleju roślinnym."
      },
      {
        order: 3,
        description: "Grillować przez 8 minut na średnim ogniu na jednej stronie, przewrócić na drugą stronę i grillować przez 5 minut."
      }
    ]

  };



//{{model.description }}

}
