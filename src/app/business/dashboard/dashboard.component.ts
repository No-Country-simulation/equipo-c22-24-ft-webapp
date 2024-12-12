// dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,  // Si prefieres usar componentes standalone
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalTickets: number = 1250;
  resolvedTickets: number = 980;
  pendingTickets: number = 270;
}
