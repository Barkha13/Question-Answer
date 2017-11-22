import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { ApiService} from './../api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  questions;
  userId;
  question;

  constructor(private activatedRoute: ActivatedRoute, private _apiService : ApiService, private router: Router) { 
    
  }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      console.log(this.userId);
    });
    
    this.question = this._apiService.showAns(this.userId,(data)=>{
      this.question = data;
      console.log('the question is', this.question);
    });

    this._apiService.allQues((data)=>{
      console.log(data);
      this.questions = data;
    });
  }

  onClick(answer_id){
   
    this._apiService.like(answer_id);
    this.ngOnInit();
    
  }
}
