import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadorsenhaComponent } from './validadorsenha.component';

describe('ValidadorsenhaComponent', () => {
  let component: ValidadorsenhaComponent;
  let fixture: ComponentFixture<ValidadorsenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidadorsenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidadorsenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
