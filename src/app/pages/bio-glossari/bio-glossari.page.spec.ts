import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioGlossariPage } from './bio-glossari.page';

describe('BioGlossariPage', () => {
  let component: BioGlossariPage;
  let fixture: ComponentFixture<BioGlossariPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioGlossariPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agregado aquí
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioGlossariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
