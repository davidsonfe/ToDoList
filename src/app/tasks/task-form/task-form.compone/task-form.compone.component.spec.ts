import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponeComponent } from './task-form.compone.component';

describe('TaskFormComponeComponent', () => {
    let component: TaskFormComponeComponent;
    let fixture: ComponentFixture<TaskFormComponeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TaskFormComponeComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskFormComponeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
