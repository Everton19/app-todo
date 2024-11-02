import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputItemComponent } from './todo-input-item.component';

describe('TodoInputItemComponent', () => {
  let component: TodoInputItemComponent;
  let fixture: ComponentFixture<TodoInputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoInputItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
