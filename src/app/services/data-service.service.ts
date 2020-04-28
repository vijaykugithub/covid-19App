import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
private covidDataUrl="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-26-2020.csv";
  constructor(private httpClient:HttpClient) { }
  getGlobalData()
  {
    return this.httpClient.get(this.covidDataUrl,{responseType:'text'}).pipe(
  map(result=>{
    let rows=result.split('\n');
    rows.forEach(element => {
     let cols=element.split(/,(?=\S)/)
     console.log(cols);
   });
    return [];
  })
)
  }
}
