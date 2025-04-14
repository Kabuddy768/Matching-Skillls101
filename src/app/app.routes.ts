import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { JobDiscoveryComponent } from './JobSeeker/job-discovery/job-discovery.component';
import { ProfileManagementComponent } from './JobSeeker/profile-management/profile-management.component';
import { TalentComponent } from './Recruiter/talent/talent.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApplicationManagementComponent } from './JobSeeker/application-management/application-management.component';
import { SavedJobsComponent } from './JobSeeker/saved-jobs/saved-jobs.component';
import { JobPostingComponent } from './Recruiter/job-posting/job-posting.component';
import { CandidateManagementComponent } from './Recruiter/candidate-management/candidate-management.component';
import { AnalyticsDashboardComponent } from './Recruiter/analytics-dashboard/analytics-dashboard.component';
import { CompanyProfileComponent } from './Recruiter/company-profile/company-profile.component';
import { SystemAnalyticsComponent } from './admin/system-analytics/system-analytics.component';
import { ContentManagementComponent } from './admin/content-management/content-management.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { SignUpComponent } from './SignUp/sign-up/sign-up.component';
import { SignInComponent } from './SignUp/sign-in/sign-in.component';
import { JobseekerDashboardComponent } from './JobSeeker/jobseeker-dashboard/jobseeker-dashboard.component';
import { RecruiterDashboardComponent } from './Recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { CandidateComponent } from './Recruiter/candidate/candidate.component';
import { InterviewComponent } from './Recruiter/interview/interview.component';
import { SkillProfileComponent } from './JobSeeker/skill-profile/skill-profile.component';
import { JobMatchesComponent } from './JobSeeker/job-matches/job-matches.component';
import { PortfolioComponent } from './JobSeeker/portfolio/portfolio.component';
import { JobInterviewComponent } from './JobSeeker/interview/interview.component';
import { CvComponent } from './JobSeeker/cv/cv.component';
import { CareerPathComponent } from './JobSeeker/career-path/career-path.component';

export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'sign-in', component:SignInComponent},
    {path:'sign-up', component:SignUpComponent},
    {path:'admin-dashboard', component:AdminDashboardComponent},
    {path:'user-management', component:UserManagementComponent},
    {
        path: 'jobseeker',
        children: [
            { path: 'dashboard', component: JobseekerDashboardComponent },
            { path: 'job-discovery', component: JobDiscoveryComponent },
            {path:'job-matches', component:JobMatchesComponent},
            {path:'portfolio',component:PortfolioComponent},
            {path:'interviews',component:JobInterviewComponent},
            {path:'Cv',component:CvComponent},
            {path:'careerPath', component:CareerPathComponent},
            {path:'skillProfile', component:SkillProfileComponent},
            { path: 'profile-management', component: ProfileManagementComponent },
            { path: 'application-management', component: ApplicationManagementComponent },
            { path: 'saved-jobs', component: SavedJobsComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    {
        path: 'recruiter',
        children: [
            {path: 'job-posting', component: JobPostingComponent},
            {path:'dashboard', component:RecruiterDashboardComponent},
            {path:'candidate', component:CandidateComponent},
            {path:'interview', component:InterviewComponent},
            {path: 'candidate-management', component: CandidateManagementComponent},
            {path: 'talent', component: TalentComponent},
            {path: 'analytics', component: AnalyticsDashboardComponent},
            {path: 'company-profile', component: CompanyProfileComponent}
        ]
    },
    {
        path: 'admin',
        children: [
            { path: 'dashboard', component: AdminDashboardComponent },
            { path: 'user-management', component: UserManagementComponent },
            { path: 'system-analytics', component: SystemAnalyticsComponent },
            { path: 'content-management', component: ContentManagementComponent },
            { path: 'profile', component: AdminProfileComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];
