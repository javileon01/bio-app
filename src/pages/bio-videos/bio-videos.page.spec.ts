import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioVideosPage } from './bio-videos.page';

describe('BioVideosPage', () => {
  let component: BioVideosPage;
  let fixture: ComponentFixture<BioVideosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BioVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
