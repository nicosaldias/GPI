import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharkoonComponent } from './sharkoon.component';

describe('SharkoonComponent', () => {
  let component: SharkoonComponent;
  let fixture: ComponentFixture<SharkoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharkoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharkoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
