import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProductosComponent } from './registrar-productos.component';

describe('RegistrarProductosComponent', () => {
  let component: RegistrarProductosComponent;
  let fixture: ComponentFixture<RegistrarProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
