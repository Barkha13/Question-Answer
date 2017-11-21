import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { ApiService} from './../api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  userId;
  question;

  constructor(private activatedRoute: ActivatedRoute, private _apiService : ApiService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      console.log(this.userId);
    });
    
    this.question = this._apiService.showAns(this.userId,(data)=>{
      this.question = data;
      console.log('the question got back is', this.question);
    });
  
  }
}
