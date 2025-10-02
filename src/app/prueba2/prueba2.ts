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
  {nombre: 'iPhone 15 Pro', precio: 1200, descripcion: 'Smartphone de Apple con chip A17 Bionic y cámara triple.'},
  {nombre: 'Samsung Galaxy S23', precio: 1100, descripcion: 'Pantalla AMOLED 6.8", cámara de 200MP y batería de larga duración.'},
  {nombre: 'Xiaomi 13 Pro', precio: 850, descripcion: 'Procesador Snapdragon 8 Gen 2 y cámara Leica de alta resolución.'},
  {nombre: 'Google Pixel 8', precio: 950, descripcion: 'Experiencia Android pura con IA avanzada y gran cámara nocturna.'},
  {nombre: 'OnePlus 11', precio: 780, descripcion: 'Pantalla fluida 120Hz y carga ultrarrápida de 100W.'}
]
}