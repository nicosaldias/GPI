import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsairComponent } from './corsair.component';

describe('CorsairComponent', () => {
  let component: CorsairComponent;
  let fixture: ComponentFixture<CorsairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
