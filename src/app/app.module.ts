import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SmallXComponent } from './small-x/small-x.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddIngredientPageComponent } from './add-ingredient-page/add-ingredient-page.component';
import { ReciepieSearchPageComponent } from './reciepie-search-page/reciepie-search-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { MealsListComponent } from './meals-list/meals-list.component';
import { RecipeSearchResultListComponent } from './recipe-search-result-list/recipe-search-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    SmallXComponent,
    HomePageComponent,
    AddIngredientPageComponent,
    ReciepieSearchPageComponent,
    ShoppingListPageComponent,
    IngredientsListComponent,
    MealsListComponent,
    RecipeSearchResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
