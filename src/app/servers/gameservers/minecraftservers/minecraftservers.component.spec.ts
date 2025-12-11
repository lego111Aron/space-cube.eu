import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinecraftserversComponent } from './minecraftservers.component';

describe('MinecraftserversComponent', () => {
  let component: MinecraftserversComponent;
  let fixture: ComponentFixture<MinecraftserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinecraftserversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinecraftserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
