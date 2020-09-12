import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializationSpreadComponent } from './initialization-spread.component';

describe('InitializationSpreadComponent', () => {
  let component: InitializationSpreadComponent;
  let fixture: ComponentFixture<InitializationSpreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitializationSpreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializationSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
