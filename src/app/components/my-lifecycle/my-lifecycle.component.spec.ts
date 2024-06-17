import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLifecycleComponent } from './my-lifecycle.component';

describe('MyLifecycleComponent', () => {
  let component: MyLifecycleComponent;
  let fixture: ComponentFixture<MyLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLifecycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
