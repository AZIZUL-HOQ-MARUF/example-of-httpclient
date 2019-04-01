import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user';
import { ModelService } from '../../models/model.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  public user: User;
  id: any;
  firstName: any;
  lastName: any;

  constructor(public apiService: ApiService,
    public model: ModelService) { }

  ngOnInit() { }
  getData() {
    this.apiService.getUser().subscribe(data => {
      this.model.id = data['data']['id'];
      this.model.firstName = data['data']['first_name'];
      this.model.lastName = data['data']['last_name'];
    })

    this.apiService.getLocalJsonData().subscribe(data => {
      console.log(data['message']);
    })
  }
}