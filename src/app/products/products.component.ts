import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      name: 'T-Shirt',
      description: 'Description of T-Shirt',
      price: '$10',
      imageUrl:
        'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg',
    },
    {
      name: 'Jeans',
      description: 'Description of Jeans',
      price: '$20',
      imageUrl:
        'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fac%2Fc0%2Facc0bde91eba565b43d3e133ca09522f0a499a81.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    },
  ];
}
