import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectComponent } from './indirect.component';

describe('IndirectComponent', () => {
  let component: IndirectComponent;
  let fixture: ComponentFixture<IndirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
