import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum eleifend felis. In hac habitasse platea\n" +
        "      dictumst. In hac habitasse platea dictumst. Sed molestie malesuada orci non consectetur. Proin ac quam\n" +
        "      consectetur, tempor metus id, sollicitudin leo. Nulla tellus ligula, mollis id eros a, consectetur eleifend dui.\n" +
        "      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sollicitudin\n" +
        "      ante sit amet dolor dictum ullamcorper. Nullam sed bibendum enim. Maecenas luctus sem at neque faucibus\n" +
        "      pellentesque. Morbi purus nunc, pretium id placerat vitae, ultricies rutrum ligula. Aliquam rutrum commodo erat.", image: "image2.jpg", year: "1978–1980" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum eleifend felis. In hac habitasse platea\n" +
        "      dictumst. In hac habitasse platea dictumst. Sed molestie malesuada orci non consectetur. Proin ac quam\n" +
        "      consectetur, tempor metus id, sollicitudin leo. Nulla tellus ligula, mollis id eros a, consectetur eleifend dui.\n" +
        "      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sollicitudin\n" +
        "      ante sit amet dolor dictum ullamcorper. Nullam sed bibendum enim. Maecenas luctus sem at neque faucibus\n" +
        "      pellentesque. Morbi purus nunc, pretium id placerat vitae, ultricies rutrum ligula. Aliquam rutrum commodo erat.", image: "image3.jpg", year: "1981–1985" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum eleifend felis. In hac habitasse platea\n" +
        "      dictumst. In hac habitasse platea dictumst. Sed molestie malesuada orci non consectetur. Proin ac quam\n" +
        "      consectetur, tempor metus id, sollicitudin leo. Nulla tellus ligula, mollis id eros a, consectetur eleifend dui.\n" +
        "      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sollicitudin\n" +
        "      ante sit amet dolor dictum ullamcorper. Nullam sed bibendum enim. Maecenas luctus sem at neque faucibus\n" +
        "      pellentesque. Morbi purus nunc, pretium id placerat vitae, ultricies rutrum ligula. Aliquam rutrum commodo erat.", image: "image4.jpg", year: "1986–1990" }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}

