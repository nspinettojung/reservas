import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDepto } from './lista-depto';

describe('ListaDepto', () => {
  let component: ListaDepto;
  let fixture: ComponentFixture<ListaDepto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDepto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDepto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
