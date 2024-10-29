import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManualUsuariPage } from './manual-usuari.page';

describe('ManualUsuariPage', () => {
  let component: ManualUsuariPage;
  let fixture: ComponentFixture<ManualUsuariPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualUsuariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
