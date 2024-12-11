import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para *ngIf y *ngFor
import { FormsModule } from '@angular/forms';    // Para formularios

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent {
  // Lista de clientes con correos reales y teléfonos reales, además de roles como 'Cliente'
  clientes = [
    {
      name: 'HP',
      email: 'contacto@hp.com',
      phone: '+54123456789',
      joined: '01/01/2022',
      role: 'Cliente',
      details: 'PC HP Pavilion, 16GB RAM, i7-10700K, 512GB SSD',
    },
    {
      name: 'MERCADOLIBRE',
      email: 'atencion@mercadolibre.com',
      phone: '+5491123456789',
      joined: '02/02/2023',
      role: 'Cliente',
      details: 'PC Dell XPS, 32GB RAM, i9-11900K, 1TB SSD',
    },
    {
      name: 'DISNEYLATAM',
      email: 'contacto@disneylatam.com',
      phone: '+521234567890',
      joined: '03/03/2024',
      role: 'Cliente',
      details: 'PC Lenovo ThinkPad, 8GB RAM, i5-10300U, 256GB SSD',
    },
    {
      name: 'NIVEA',
      email: 'soporte@nivea.com',
      phone: '+34123456789',
      joined: '04/04/2024',
      role: 'Cliente',
      details: 'PC ASUS ROG, 16GB RAM, Ryzen 7 5800X, 1TB SSD',
    },
    {
      name: 'SAMSUNG',
      email: 'contacto@samsung.com',
      phone: '+56912345678',
      joined: '05/05/2024',
      role: 'Cliente',
      details: 'PC MSI GE76 Raider, 64GB RAM, i9-12900K, 2TB SSD',
    },
  ];

  // Variable para gestionar la apertura del modal
  selectedClient: any = null;

  // Método para seleccionar un cliente y abrir el modal
  selectClient(client: any) {
    this.selectedClient = client;
  }

  // Método para cerrar el modal
  closeClientDetail() {
    this.selectedClient = null;
  }
}
