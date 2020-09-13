import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicApplicationComponent } from './basic-application.component';

describe('BasicApplicationComponent', () => {
  let component: BasicApplicationComponent;
  let fixture: ComponentFixture<BasicApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
