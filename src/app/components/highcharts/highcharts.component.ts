import { Component, OnInit } from '@angular/core';
import { Rayons } from 'app/models/Rayon.model';
import { StatBestProd } from 'app/models/StatBestProd.model';
import { HighchartsService } from 'app/services/highcharts.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {

  constructor(private highchartService: HighchartsService) { }

  public loading: boolean;
  chartOptions: {};
  Highcharts = Highcharts;
  rayons : StatBestProd[];

  ngOnInit(): void {
    this.highchartService.getBestProduit().then(

        (r: StatBestProd[]) => {
    this.rayons = r;
    this.chartOptions = {
        chart: {
          type: 'column'
      },
      title: {
          text: 'Meilleur Produit Vendu Pour Chaque Rayon'
      },
      subtitle: {
          text: "Meilleur Produit Vendu Pour Chaque Rayon"
      },
      xAxis: {
          categories: [
             this.rayons.map(a=>a.libelleProdVentMax)
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Valeur'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
        name: 'nombre vente produit',
        data: this.rayons.map(a=>a.nbrCmdProd)
  
    },]
    }
    });
    
    }
}

