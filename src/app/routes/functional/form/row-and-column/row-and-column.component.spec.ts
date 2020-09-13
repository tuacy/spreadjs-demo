import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowAndColumnComponent } from './row-and-column.component';

describe('RowAndColumnComponent', () => {
  let component: RowAndColumnComponent;
  let fixture: ComponentFixture<RowAndColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowAndColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowAndColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
