import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioPreguntesPage } from './bio-preguntes.page';

describe('BioPreguntesPage', () => {
  let component: BioPreguntesPage;
  let fixture: ComponentFixture<BioPreguntesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BioPreguntesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
