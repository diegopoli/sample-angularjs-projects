import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Summery Zucchini-Basil Soup',
      'This is simply a test', 'http://www.seriouseats.com/recipes/assets_c/2017/04/20170426-zucchini-pesto-soup-3-thumb-1500xauto-437445.jpg'),
    new Recipe('Fava Bean and Carrot Salad With Ricotta',
      'This is simply a test', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
