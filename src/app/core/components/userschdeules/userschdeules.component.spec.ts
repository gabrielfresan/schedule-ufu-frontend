import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserschdeulesComponent } from './userschdeules.component';

describe('UserschdeulesComponent', () => {
  let component: UserschdeulesComponent;
  let fixture: ComponentFixture<UserschdeulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserschdeulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserschdeulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
