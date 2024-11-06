import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlossariDefPage } from './glossari-def.page';

describe('GlossariDefPage', () => {
  let component: GlossariDefPage;
  let fixture: ComponentFixture<GlossariDefPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossariDefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
