import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationManagementComponent } from './application-management.component';

describe('ApplicationManagementComponent', () => {
  let component: ApplicationManagementComponent;
  let fixture: ComponentFixture<ApplicationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter applications by status', () => {
    component.filterApplications('Interview');
    expect(component.activeStatus).toEqual('Interview');
    expect(component.filteredApplications.length).toEqual(
      component.applications.filter(app => app.status === 'Interview').length
    );
  });

  it('should sort applications by company name', () => {
    component.sortApplications('Company');
    expect(component.activeSort).toEqual('Company');
    // Check if the first company alphabetically is first in the list
    const sortedCompanies = [...component.applications]
      .sort((a, b) => a.company.localeCompare(b.company))
      .map(app => app.company);
    expect(component.filteredApplications[0].company).toEqual(sortedCompanies[0]);
  });
}); 