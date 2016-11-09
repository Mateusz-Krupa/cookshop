import { Injectable } from '@angular/core';
import { createStore, applyMiddleware, compose } from 'redux'
const thunk = require('redux-thunk').default;  

@Injectable()
export class StoreService {

 
  private store; 

  constructor() {
    const finalCreateStore = compose(  
      applyMiddleware(thunk)
    )(createStore);
    this.store = finalCreateStore(this.getReducer());
 }

  getReducer() {
    return (state = '', action) => {
      switch (action.type){
        case 'CHARACTER_TYPED': 
          return state + action.character;
        case 'BACKSPACE': 
          return state.slice(0, -1);
        default: 
          return state;  
      }
    }
  }

  getStore(){
    return this.store;
  }

}
