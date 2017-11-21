import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from './../api.service';

@Component({
  selector: 'app-add-que',
  templateUrl: './add-que.component.html',
  styleUrls: ['./add-que.component.css']
})
export class AddQueComponent implements OnInit {

  _question = {
    quest : '',
    desc : ''
  }

  constructor(private _apiService : ApiService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this._question.quest,'--------',this._question.desc);
    this._apiService.addQue(this._question.quest, this._question.desc);
    this.router.navigate(['dashboard']);
  //   this._question = {
  //     quest : '',
  //     desc : ''
  //   }
  // }
  }
}
