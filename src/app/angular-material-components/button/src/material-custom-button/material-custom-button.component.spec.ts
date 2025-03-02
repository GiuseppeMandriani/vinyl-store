import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCustomButtonComponent } from './material-custom-button.component';

describe('MaterialCustomButtonComponent', () => {
  let component: MaterialCustomButtonComponent;
  let fixture: ComponentFixture<MaterialCustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialCustomButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialCustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
