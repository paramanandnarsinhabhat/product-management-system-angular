import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsDeleteComponent } from './all-products-delete.component';

describe('AllProductsDeleteComponent', () => {
  let component: AllProductsDeleteComponent;
  let fixture: ComponentFixture<AllProductsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllProductsDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllProductsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
