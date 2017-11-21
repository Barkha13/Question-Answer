import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from './../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  login_name;
  questions = [];

  constructor(private _apiService : ApiService, private router: Router) { }

  ngOnInit() {
    this.login_name = this._apiService.getName();
    this._apiService.allQues((data)=>{
      console.log(data);
      this.questions = data;
    });
  }

}
