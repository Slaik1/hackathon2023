import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlayersComponent } from './best-players.component';

describe('BestPlayersComponent', () => {
  let component: BestPlayersComponent;
  let fixture: ComponentFixture<BestPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestPlayersComponent]
    });
    fixture = TestBed.createComponent(BestPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
