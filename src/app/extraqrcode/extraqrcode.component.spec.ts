import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraqrcodeComponent } from './extraqrcode.component';

describe('ExtraqrcodeComponent', () => {
  let component: ExtraqrcodeComponent;
  let fixture: ComponentFixture<ExtraqrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraqrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
