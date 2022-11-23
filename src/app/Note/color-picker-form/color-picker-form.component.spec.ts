import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerFormComponent } from './color-picker-form.component';

describe('ColorPickerComponent', () => {
  let component: ColorPickerFormComponent;
  let fixture: ComponentFixture<ColorPickerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPickerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
