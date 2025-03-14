import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {StarComponent} from '../share/star/star.component';

@Component({
  selector: 'app-home',

  imports: [
    NgClass,
    NgStyle,
    NgForOf,
    NgIf,
    StarComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum eleifend felis. In hac habitasse platea\n" +
        "      dictumst. In hac habitasse platea dictumst. Sed molestie malesuada orci non consectetur. Proin ac quam\n" +
        "      consectetur, tempor metus id, sollicitudin leo. Nulla tellus ligula, mollis id eros a, consectetur eleifend dui.\n" +
        "      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sollicitudin\n" +
        "      ante sit amet dolor dictum ullamcorper. Nullam sed bibendum enim. Maecenas luctus sem at neque faucibus\n" +
        "      pellentesque. Morbi purus nunc, pretium id placerat vitae, ultricies rutrum ligula. Aliquam rutrum commodo erat.",
      image: "image2.jpg",
      year: "1978–1980"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum eleifend felis. In hac habitasse platea\n" +
        "      dictumst. In hac habitasse platea dictumst. Sed molestie malesuada orci non consectetur. Proin ac quam\n" +
        "      consectetur, tempor metus id, sollicitudin leo. Nulla tellus ligula, mollis id eros a, consectetur eleifend dui.\n" +
        "      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sollicitudin\n" +
        "      ante sit amet dolor dictum ullamcorper. Nullam sed bibendum enim. Maecenas luctus sem at neque faucibus\n" +
        "      pellentesque. Morbi purus nunc, pretium id placerat vitae, ultricies rutrum ligula. Aliquam rutrum commodo erat.",
      image: "image3.jpg",
      year: "1981–1985"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum eleifend felis. In hac habitasse platea\n" +
        "      dictumst. In hac habitasse platea dictumst. Sed molestie malesuada orci non consectetur. Proin ac quam\n" +
        "      consectetur, tempor metus id, sollicitudin leo. Nulla tellus ligula, mollis id eros a, consectetur eleifend dui.\n" +
        "      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sollicitudin\n" +
        "      ante sit amet dolor dictum ullamcorper. Nullam sed bibendum enim. Maecenas luctus sem at neque faucibus\n" +
        "      pellentesque. Morbi purus nunc, pretium id placerat vitae, ultricies rutrum ligula. Aliquam rutrum commodo erat.",
      image: "image4.jpg",
      year: "1986–1990"
    }
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

  testimonials = [
    {
      stars: 5,
      title: 'Loved it!',
      content: 'The product far exceeded my expectations. The team was amazing!',
      author: 'John Doe'
    },
    {
      stars: 4,
      title: 'Pretty good experience',
      content: 'Overall solid, a few issues here and there, but support was great.',
      author: 'Jane Smith'
    },
    {
      stars: 5,
      title: 'Best purchase ever',
      content: 'I can’t imagine my daily workflow without it now. 10/10 recommended!',
      author: 'David Johnson'
    }
  ];

  currentSlide = 0;

  // Move to the next testimonial
  nextTestimonial(): void {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  // Move to the previous testimonial
  prevTestimonial(): void {
    // We add `length` before the mod to avoid negative index issues
    this.currentSlide =
      (this.currentSlide + this.testimonials.length - 1) % this.testimonials.length;
  }


}


