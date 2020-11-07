import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.css']
})
export class UserSearchFormComponent implements OnInit {
userName:string;
@Output() submitrepo=new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  search(){
    this.submitrepo.emit(this.userName);
    this.userName="";
  }

}
