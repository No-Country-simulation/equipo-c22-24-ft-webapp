import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with two controls: usuario and password', () => {
    expect(component.form.contains('usuario')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('should invalidate the form when fields are empty', () => {
    component.form.controls['usuario'].setValue('');
    component.form.controls['password'].setValue('');
    expect(component.form.invalid).toBeTrue();
  });

  it('should display an error message if usuario is invalid', () => {
    component.form.controls['usuario'].setValue('');
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.query(By.css('mat-error'));
    expect(errorMessage.nativeElement.textContent).toContain('El usuario es requerido.');
  });

  it('should call ingresar method on form submit', () => {
    spyOn(component, 'ingresar');
    component.form.controls['usuario'].setValue('admin');
    component.form.controls['password'].setValue('admin123');
    fixture.debugElement.query(By.css('button')).nativeElement.click();
    expect(component.ingresar).toHaveBeenCalled();
  });
});
