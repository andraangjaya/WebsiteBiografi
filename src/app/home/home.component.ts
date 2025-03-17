import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {StarComponent} from '../share/star/star.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',

  imports: [
    NgClass,
    NgStyle,
    NgForOf,
    NgIf,
    StarComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    {
      text: "Dahulu, sebelum Pak Yudi memulai karirnya sebagai seorang guru, beliau pernah bekerja sebagai sales marketing di sebuah perusahaan variasi motor. Pengalaman ini memberikannya wawasan dan keterampilan dalam bidang penjualan serta komunikasi, yang mungkin turut membentuk karakter dan pendekatannya dalam mengajar. Meskipun kini beliau telah beralih profesi menjadi pendidik, latar belakangnya di dunia marketing motor menunjukkan perjalanan karir yang beragam sebelum akhirnya memilih untuk berdedikasi di bidang pendidikan.",
      image: "image2.jpg",
      year: "1978–1980"
    },
    {
      text: "Sekarang, Pak Yudi telah menjalani profesi sebagai guru selama kurang lebih 4 tahun. Beliau tertarik menjadi guru karena merasa bakatnya memang ada di bidang ini, dan sama sekali tidak keberatan menjalaninya. Selain itu, motivasinya untuk mengamalkan ilmu yang dimiliki menjadi salah satu alasan utamanya, karena ia ingin menjadikan profesinya sebagai investasi untuk akhirat. Dedikasinya dalam dunia pendidikan mencerminkan komitmennya untuk berkontribusi dan berbagi pengetahuan dengan generasi penerus.",
      image: "image3.jpg",
      year: "1981–1985"
    },
    {
      text: "Lalu keinginan Pak Yudi dalam 5 tahun kedepan adalah selalu lebih baik dari sekarang. Tidak ada spesifikasi yang harus ia capai, agar tidak menjadi beban dan beliau lakukan hanya ikhtiar untuk berusaha menjadi lebih baik dari sekarang dalam berbagai hal. Beliau juga selalu menikmati apapun dalan profesinya, sehingga setiap momen selalu punya kesannya sendiri.",
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
      title: 'Lorem Ipsum Dolor',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat\n' +
        '        harum porro optio fugit a culpa sunt id!',
      author: 'John Doe'
    },
    {
      stars: 4,
      title: 'Lorem Ipsum Dolor Sit',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat\n' +
        '        harum porro optio fugit a culpa sunt id!',
      author: 'Jane Smith'
    },
    {
      stars: 5,
      title: 'Lorem Ipsum Dolor Sit Amet',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat\n' +
        '        harum porro optio fugit a culpa sunt id!',
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


