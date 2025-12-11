import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameserversComponent } from './gameservers.component';

describe('GameserversComponent', () => {
  let component: GameserversComponent;
  let fixture: ComponentFixture<GameserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameserversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
