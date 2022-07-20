import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrajsonComponent } from './extrajson.component';

describe('ExtrajsonComponent', () => {
  let component: ExtrajsonComponent;
  let fixture: ComponentFixture<ExtrajsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrajsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrajsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
