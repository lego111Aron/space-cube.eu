import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kockulosroom202526telComponent } from './kockulosroom202526tel.component';

describe('Kockulosroom202526telComponent', () => {
  let component: Kockulosroom202526telComponent;
  let fixture: ComponentFixture<Kockulosroom202526telComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Kockulosroom202526telComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kockulosroom202526telComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
