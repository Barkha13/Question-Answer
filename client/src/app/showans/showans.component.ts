import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { ApiService} from './../api.service';

@Component({
  selector: 'app-showans',
  templateUrl: './showans.component.html',
  styleUrls: ['./showans.component.css']
})
export class ShowansComponent implements OnInit {
  q_id;
  questions;
  _answer = {
    ans : '',
    detail : ''
  }
  constructor(private activatedRoute: ActivatedRoute, private _apiService : ApiService, private router: Router) { }

  ngOnInit() {
    

  }

  onSubmit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      this.q_id = params['q_id'];
      console.log(this.q_id);
    });

    console.log(this._answer.ans,'--------',this._answer.detail,this._apiService.getName(), this.q_id);
    this._apiService.addAns(this._answer.ans, this._answer.detail,this._apiService.getName(), this.q_id);
    this._apiService.allQues((data)=>{
      console.log(data);
      this.questions = data;
    });
    
    this.router.navigate(['dashboard']);
  }
}
