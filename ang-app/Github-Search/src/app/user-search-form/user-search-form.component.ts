import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.css']
})
export class UserSearchFormComponent implements OnInit {
searchName:string;
@Output() searchOutput=new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName="";
  }

}
