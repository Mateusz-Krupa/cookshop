import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe/recipe.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
     {path: 'recipe', component: RecipeComponent}     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
