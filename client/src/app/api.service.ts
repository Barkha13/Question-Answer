import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
export class ApiService {

  private name;

  constructor(private _http: Http, private router: Router, private route: ActivatedRoute) { }

  setName(name){
    this.name = name;
    // return this.name;
  }

  getName(){
    return this.name;
  }

  addQue(que, desc){
    console.log('inside services...',que,desc);
    // console.log(`/add_que/${que}/${desc}`);
    this._http.post('/add_que',{question: que, description:desc})
    .subscribe(
      (response) => {
        console.log('added que...');
      },
      (err) => {
        console.log('Error in adding...');
      }
    )
  }

  allQues(callback){
    return this._http.get('/all')
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log('error is..',err);
      }
    )
  }


}
