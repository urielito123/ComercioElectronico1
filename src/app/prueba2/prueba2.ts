import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-prueba2',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './prueba2.html',
  styleUrl: './prueba2.css'
})
export class Prueba2 {
  productos = [
    {
      nombre: 'MacBook Pro M3',
      precio: 2199,
      descripcion: 'Laptop de alto rendimiento de Apple con chip M3 Pro y pantalla Liquid Retina XDR.',
    },
    {
      nombre: 'Dell XPS 15',
      precio: 1850,
      descripcion: 'Diseño premium con pantalla OLED, ideal para creadores de contenido.',
    },
    {
      nombre: 'Lenovo ThinkPad X1 Carbon',
      precio: 1699,
      descripcion: 'Laptop ultraligera y duradera, enfocada en productividad empresarial.',
    },
    {
      nombre: 'Asus ROG Zephyrus G14',
      precio: 1550,
      descripcion: 'Laptop gamer compacta con procesador AMD Ryzen y gráficos NVIDIA RTX.',
    },
    {
      nombre: 'Microsoft Surface Laptop 5',
      precio: 1299,
      descripcion: 'Diseño elegante con pantalla táctil y excelente rendimiento para el uso diario.',
    },
  ];
}