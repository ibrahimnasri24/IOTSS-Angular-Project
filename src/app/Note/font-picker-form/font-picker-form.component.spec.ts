import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontPickerFormComponent } from './font-picker-form.component';

describe('ColorPickerFormComponent', () => {
  let component: FontPickerFormComponent;
  let fixture: ComponentFixture<FontPickerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontPickerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontPickerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
