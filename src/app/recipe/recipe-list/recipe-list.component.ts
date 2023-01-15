import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: './app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://freesvg.org/img/RecipeBook.png'),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://freesvg.org/img/RecipeBook.png')
    ];

    constructor() {}
}