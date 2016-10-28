import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipeList.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
     {path: 'recipe', component: RecipeComponent}, 
     {path: 'recipeList', component: RecipeListComponent}    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
