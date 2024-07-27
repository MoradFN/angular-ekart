import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css',
})
export class TopHeaderComponent {
  today: Date = new Date();
}
