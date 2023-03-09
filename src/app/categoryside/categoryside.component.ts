import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-categoryside',
  templateUrl: './categoryside.component.html',
  styleUrls: ['./categoryside.component.css']
})
export class CategorysideComponent {

  categories: Category[];
  categoryRepository: CategoryRepository;
  selectedCategory: Category | null;
  isActiveAllCategories: boolean = true;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.getAllCategories();
  }

  getAllCategories():Category[]{
    return this.categoryRepository.getCategories();
  }

  selectCategory(category: Category){
    this.isActiveAllCategories = false;
    if(category != this.selectedCategory)
      this.selectedCategory = category;
  }

  selectAllCategories(){
    this.isActiveAllCategories = true;
    this.selectedCategory = null;
  }
}
