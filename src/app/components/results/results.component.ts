import { Component, OnInit } from '@angular/core';
import { surveyResults } from '../../../assets/fakeData';

import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { CommunicationGraphComponent } from '../communication-graph/communication-graph.component';

import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { SatisfactionGraphComponent } from '../satisfaction-graph/satisfaction-graph.component';
import { StressLevelGraphComponent } from '../stress-level-graph/stress-level-graph.component';
import { WorkloadGraphComponent } from '../workload-graph/workload-graph.component';
import { TeamworkGraphComponent } from '../teamwork-graph/teamwork-graph.component';
import { JobSecurityGraphComponent } from '../job-security-graph/job-security-graph.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [SatisfactionGraphComponent, BarChartComponent, CommunicationGraphComponent, StressLevelGraphComponent, WorkloadGraphComponent, TeamworkGraphComponent, JobSecurityGraphComponent, DoughnutChartComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
   satisfactionData = surveyResults.satisfaction;
  workloadData = surveyResults.workload;
  stressLevelData = surveyResults.stressLevel;
  teamworkData = surveyResults.teamwork;
  jobSecurityData = surveyResults.jobSecurity;
  communicationData = surveyResults.communication;
}
