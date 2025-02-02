import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylDetailComponent } from './vinyl-detail.component';

describe('VinylDetailComponent', () => {
  let component: VinylDetailComponent;
  let fixture: ComponentFixture<VinylDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinylDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinylDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
