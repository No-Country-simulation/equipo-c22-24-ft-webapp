import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Necesario para emitir actualizaciones

interface Cliente {
  name: string;
  email: string;
  phone: string;
  joined: string;
  role: string;
  details: string;
}

@Injectable({
  providedIn: 'root' // Hace que este servicio esté disponible en toda la aplicación
})
export class ClientService {
  private clientesSource = new BehaviorSubject<Cliente[]>([]);  // Usamos BehaviorSubject para manejar el estado
  clientes$ = this.clientesSource.asObservable();  // Observable para que otros componentes se suscriban

  constructor() {}

  // Método para agregar un nuevo cliente
  addClient(cliente: Cliente) {
    const currentClients = this.clientesSource.value;  // Obtenemos los clientes actuales
    this.clientesSource.next([...currentClients, cliente]);  // Emitimos los nuevos clientes
  }

  // Método para obtener todos los clientes
  getClients() {
    return this.clientesSource.value;
  }
}
