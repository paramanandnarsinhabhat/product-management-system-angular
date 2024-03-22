import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductDeleteComponent } from './single-product-delete.component';

describe('SingleProductDeleteComponent', () => {
  let component: SingleProductDeleteComponent;
  let fixture: ComponentFixture<SingleProductDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProductDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProductDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
