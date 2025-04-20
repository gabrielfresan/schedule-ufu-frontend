import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEspacosComponent } from './table-espacos.component';

describe('TableEspacosComponent', () => {
  let component: TableEspacosComponent;
  let fixture: ComponentFixture<TableEspacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEspacosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEspacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
