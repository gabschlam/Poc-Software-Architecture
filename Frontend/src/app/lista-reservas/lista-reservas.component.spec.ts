import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReservasComponent } from './lista-reservas.component';

describe('ListaReservasComponent', () => {
  let component: ListaReservasComponent;
  let fixture: ComponentFixture<ListaReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
