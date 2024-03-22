import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTotalCountComponent } from './products-total-count.component';

describe('ProductsTotalCountComponent', () => {
  let component: ProductsTotalCountComponent;
  let fixture: ComponentFixture<ProductsTotalCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsTotalCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsTotalCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
