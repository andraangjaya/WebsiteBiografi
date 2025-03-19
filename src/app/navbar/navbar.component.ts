import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgClass,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false; // Tracks mobile menu state

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}

