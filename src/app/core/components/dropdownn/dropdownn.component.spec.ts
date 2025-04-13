import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownnComponent } from './dropdownn.component';

describe('DropdownnComponent', () => {
  let component: DropdownnComponent;
  let fixture: ComponentFixture<DropdownnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
