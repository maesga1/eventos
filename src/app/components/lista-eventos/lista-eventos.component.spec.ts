import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosComponent } from './lista-eventos.component';

describe('ListaEventosComponent', () => {
  let component: ListaEventosComponent;
  let fixture: ComponentFixture<ListaEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEventosComponent]
    });
    fixture = TestBed.createComponent(ListaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
