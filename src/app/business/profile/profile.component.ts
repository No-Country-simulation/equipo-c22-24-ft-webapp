import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  // Lista de tickets
  tickets = [
    {
      title: 'Ayuda con PC',
      description: 'Juan Pérez',
      time: '2 horas',
      assigned: 'ernestogomez@gmail.com',
      status: 'Abierto',
    },
    {
      title: 'Problema con impresora',
      description: 'María García',
      time: '1 hora',
      assigned: 'tecnico2@example.com',
      status: 'Cerrado',
    },
    {
      title: 'Error al conectar a la red',
      description: 'Carlos Díaz',
      time: '30 minutos',
      assigned: 'carlosdiaz@example.com',
      status: 'Abierto',
    },
    {
      title: 'Pantalla negra en laptop',
      description: 'Ana López',
      time: '3 horas',
      assigned: 'analopez@example.com',
      status: 'Abierto',
    },
    {
      title: 'Instalación de software',
      description: 'Luis Fernández',
      time: '1.5 horas',
      assigned: 'luisfernandez@example.com',
      status: 'Cerrado',
    },
    {
      title: 'Mantenimiento de servidor',
      description: 'Sofía Ruiz',
      time: '4 horas',
      assigned: 'sofiaruiz@example.com',
      status: 'Abierto',
    },
    {
      title: 'Actualización de sistema operativo',
      description: 'Martín Torres',
      time: '2 horas',
      assigned: 'martintorres@example.com',
      status: 'Cerrado',
    },
    {
      title: 'Configuración de red Wi-Fi',
      description: 'Patricia González',
      time: '1 hora',
      assigned: 'patriciagonzalez@example.com',
      status: 'Abierto',
    },
  ];

  // Formulario de nuevo ticket
  newTicket = {
    title: '',
    description: '',
    time: '',
    assigned: '',
    status: 'Abierto',
  };

  // Variable para controlar la visibilidad del modal
  isModalOpen = false;

  // Método para agregar tickets
  addTicket() {
    if (this.isFormValid()) {
      this.tickets.push({ ...this.newTicket });
      this.resetForm();
      this.closeModal();  // Cerrar el modal después de agregar el ticket
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }

  // Verifica si el formulario es válido
  private isFormValid(): boolean {
    return !!this.newTicket.title && !!this.newTicket.description && !!this.newTicket.assigned;
  }

  // Método para eliminar un ticket
  deleteTicket(index: number) {
    const confirmDelete = confirm('¿Estás seguro de eliminar este ticket?');
    if (confirmDelete) {
      this.tickets.splice(index, 1);
    }
  }

  // Resetear el formulario
  resetForm() {
    this.newTicket = {
      title: '',
      description: '',
      time: '',
      assigned: '',
      status: 'Abierto',
    };
  }

  // Método para abrir el modal
  openModal() {
    this.isModalOpen = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Método para cambiar el estado del ticket
  toggleStatus(ticket: any) {
    ticket.status = ticket.status === 'Abierto' ? 'Cerrado' : 'Abierto';
  }
}
