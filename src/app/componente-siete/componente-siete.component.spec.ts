import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSieteComponent } from './componente-siete.component';

describe('ComponenteSieteComponent', () => {
  let component: ComponenteSieteComponent;
  let fixture: ComponentFixture<ComponenteSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteSieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
