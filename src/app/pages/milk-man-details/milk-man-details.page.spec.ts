import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilkManDetailsPage } from './milk-man-details.page';

describe('MilkManDetailsPage', () => {
  let component: MilkManDetailsPage;
  let fixture: ComponentFixture<MilkManDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkManDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
