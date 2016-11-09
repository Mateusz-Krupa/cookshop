import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../store.service';
import { removeCharacter, insertCharacter } from '../action-creators';


@Component({
  selector: 'recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.sass']
})
export class RecipeComponent {
  title = 'Single Reciples'; 
  store = null;
  canselSubscription = null;

  constructor(private StoreService: StoreService){

  }

  ngOnInit() {
    this.onCharacter = this.onCharacter.bind(this)
    this.store = this.StoreService.getStore();
    this.canselSubscription = this.store.subscribe(() => this.title = this.store.getState());
    document.addEventListener('keydown', this.onCharacter);
  }

  ngOnDestroy(){
    this.canselSubscription();
    document.removeEventListener('keydown', this.onCharacter);

  }

  getKey(event){
    const isSpace = event.code === "Space";
    if(isSpace){
      return ' ';
    }
    const isAlpaKey = !!event.code.match(/Key([A-Z])/);
    if(isAlpaKey){
      const key = String.fromCharCode(event.keyCode);
      return event.shiftKey ? key.toUpperCase(): key.toLocaleLowerCase();
    }
  }


  onCharacter(event){
    console.log("click click");
    if(event.code === "Backspace"){
      // this.store.dispatch(removeCharacter());
    } else {
      const key = this.getKey(event);
      console.log()
      if(key){
        this.store.dispatch(insertCharacter(key));
      }
    }

  }

}
