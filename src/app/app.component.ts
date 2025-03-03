import { ProductBemModule } from './product-bem/product-bem.module';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './product/product.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductModule, ProductBemModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17-course-for-work';
}
