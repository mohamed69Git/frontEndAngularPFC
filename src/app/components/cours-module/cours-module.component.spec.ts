import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursModuleComponent } from './cours-module.component';

describe('CoursModuleComponent', () => {
  let component: CoursModuleComponent;
  let fixture: ComponentFixture<CoursModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
