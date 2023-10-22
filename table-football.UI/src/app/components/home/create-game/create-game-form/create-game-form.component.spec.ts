import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameFormComponent } from './create-game-form.component';

describe('CreateGameFormComponent', () => {
  let component: CreateGameFormComponent;
  let fixture: ComponentFixture<CreateGameFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGameFormComponent]
    });
    fixture = TestBed.createComponent(CreateGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
