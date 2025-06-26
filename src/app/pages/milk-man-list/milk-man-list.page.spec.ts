import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilkManListPage } from './milk-man-list.page';

describe('MilkManListPage', () => {
  let component: MilkManListPage;
  let fixture: ComponentFixture<MilkManListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkManListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
