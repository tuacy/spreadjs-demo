import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadFormComponent } from './spread-form.component';

describe('SpreadFormComponent', () => {
  let component: SpreadFormComponent;
  let fixture: ComponentFixture<SpreadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
