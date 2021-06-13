import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CudrangularComponent } from './cudrangular.component';

describe('CudrangularComponent', () => {
  let component: CudrangularComponent;
  let fixture: ComponentFixture<CudrangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CudrangularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CudrangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
