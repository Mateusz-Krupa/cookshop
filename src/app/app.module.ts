import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipeList.component';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { MainNavigation } from './ui/main-navigation/main-navigation.component';
import { BottomNavigtion } from './ui/bottom-navigation/bottom-navigation.component';
import { CategoryList } from './ui/category-list/category-list.component'

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    BasketComponent,
    HomeComponent,
    MainNavigation,
    BottomNavigtion,
    CategoryList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'recipe/:id', component: RecipeComponent },
      { path: 'recipeList/:id', component: RecipeListComponent },
      { path: 'basket', component: BasketComponent },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
