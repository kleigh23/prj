import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { outputAst } from '@angular/compiler';

@Component({
    selector: './app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://freesvg.org/img/RecipeBook.png'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://freesvg.org/img/RecipeBook.png')
    ];

    constructor() {}

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}