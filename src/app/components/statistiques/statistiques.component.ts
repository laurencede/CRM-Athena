import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }],
      yAxes: [{
        ticks: {
          min: 1,
          max: 12,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 11, y: 5, r: 10 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['BtoB'], ['Internet'], 'Catalogue'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public doughnutChartLabels = ['Ventes T1', 'Ventes T2', 'Ventes T3', 'Ventes T4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Clients'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Prospect'}
  ];
  public radarChartLabels = ['T1', 'T2', 'T3', 'T4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [330, 600, 260, 700], label: 'Client A' },
    { data: [120, 455, 100, 340], label: 'Client B' },
    { data: [45, 67, 800, 500], label: 'Client C' }
  ];
  chartLabels = ['Janvier', 'Février', 'Mars', 'Avril'];
  scatterChartType: any;
  onChartClick(event) {
    console.log(event);
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Athéna'
    }).addTo(myfrugalmap);
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
      data.records.forEach(podotactile => {
        L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], {icon: myIcon}).addTo(myfrugalmap);
      });
    });
  }

}
