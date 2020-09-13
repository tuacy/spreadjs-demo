import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFunctionComponent } from './basic-function.component';

describe('BasicFunctionComponent', () => {
  let component: BasicFunctionComponent;
  let fixture: ComponentFixture<BasicFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
