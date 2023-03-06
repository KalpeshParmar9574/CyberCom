import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverthingProductComponent } from './everthing-product.component';

describe('EverthingProductComponent', () => {
  let component: EverthingProductComponent;
  let fixture: ComponentFixture<EverthingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverthingProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EverthingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
