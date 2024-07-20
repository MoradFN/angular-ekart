import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
})
export class ProductsComponent {
  products = [
    {
      name: 'T-Shirt',
      description: 'Description of T-Shirt',
      price: '$10',
      imageUrl: 'path/to/image1.jpg',
    },
    {
      name: 'Jeans',
      description: 'Description of Jeans',
      price: '$20',
      imageUrl: 'path/to/image2.jpg',
    },
  ];
}
