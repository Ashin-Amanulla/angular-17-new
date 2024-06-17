import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHostComponent } from './my-host.component';

describe('MyHostComponent', () => {
  let component: MyHostComponent;
  let fixture: ComponentFixture<MyHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
