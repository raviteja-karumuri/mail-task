import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBox } from './mail-box';

describe('MailBox', () => {
  let component: MailBox;
  let fixture: ComponentFixture<MailBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
