import { Category } from "./category";

export class CategoryRepository{

  private categories: Category[] = [
    {id: 1, name: "Category 1"},
    {id: 2, name: "Category 2"},
    {id: 3, name: "Category 3"}
  ]

  getCategories():Category[]{
    return this.categories;
  }

}
