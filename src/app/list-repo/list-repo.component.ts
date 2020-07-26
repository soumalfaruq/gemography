import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-list-repo',
  templateUrl: './list-repo.component.html',
  styleUrls: ['./list-repo.component.css']
})
export class ListRepoComponent implements OnInit {
  //url and options
  private url="https://api.github.com/search/repositories?q=created:>";
  private option="&sort=stars&order=desc&page=";
  
  //for date of today, and date for opration
  private dateToday= new Date();
  private date:any;

  //initialization of page's number
  page: number=1;
  
  //for data from repositories
  repo:any;

  constructor(private http: HttpClient,private datePipe: DatePipe) { }
 
  ngOnInit(): void {
    //To calculate the last 30 days
    this.dateToday.setDate( this.dateToday.getDate() - 30 );
    this.date=this.datePipe.transform(this.dateToday,"yyyy-MM-dd");

  //to call webservices et catch data
    this.http.get(this.url+this.date+this.option+this.page)
    .subscribe(data => {
        this.repo = data;
      });
    };

    //For next page
    pageNext(){
      this.page=this.page + 1; 
      this.ngOnInit(); 
    }
    //For previous page
    pagePrevious(){
      if (this.page>=1) {
        this.page=this.page - 1;
      }
      this.ngOnInit(); 
    }
  }
