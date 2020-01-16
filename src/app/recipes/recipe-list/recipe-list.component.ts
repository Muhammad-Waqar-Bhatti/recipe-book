import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe ', 'This is simple test', 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'),
    new Recipe('A Test Recipe ', 'This is simple test', 'https://images.unsplash.com/photo-1552914343-54bcc3ba07f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80'),
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
