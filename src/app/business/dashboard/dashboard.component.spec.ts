import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Inicializa la vista del componente
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display total tickets correctly', () => {
    const ticketCountElement = fixture.debugElement.query(By.css('.total-tickets .ticket-count')).nativeElement;
    expect(ticketCountElement.textContent).toContain(component.totalTickets.toString());
  });

  it('should display resolved tickets correctly', () => {
    const ticketCountElement = fixture.debugElement.query(By.css('.resolved-tickets .ticket-count')).nativeElement;
    expect(ticketCountElement.textContent).toContain(component.resolvedTickets.toString());
  });

  it('should display pending tickets correctly', () => {
    const ticketCountElement = fixture.debugElement.query(By.css('.pending-tickets .ticket-count')).nativeElement;
    expect(ticketCountElement.textContent).toContain(component.pendingTickets.toString());
  });

  it('should display high priority tickets correctly', () => {
    const ticketCountElement = fixture.debugElement.query(By.css('.high-priority-tickets .ticket-count')).nativeElement;
    expect(ticketCountElement.textContent).toContain(component.highPriorityTickets.toString());
  });

  it('should show the correct change for total tickets', () => {
    const changeElement = fixture.debugElement.query(By.css('.total-tickets .ticket-change')).nativeElement;
    expect(changeElement.textContent).toContain('+5% que la semana pasada');
  });

  // Puedes añadir más pruebas según sea necesario
});
