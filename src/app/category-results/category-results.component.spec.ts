import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CategoryResultsComponent } from './category-results.component'

describe('CategoryResultsComponent', () => {
    let component: CategoryResultsComponent
    let fixture: ComponentFixture<CategoryResultsComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ CategoryResultsComponent ]
        }).compileComponents()

        fixture = TestBed.createComponent(CategoryResultsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
