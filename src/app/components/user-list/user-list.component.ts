import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user:any=[];

  constructor(private dataservice:DataService) { }

  getUserData()
  {
    this.dataservice.getData().subscribe((res)=>{
      this.user=res;
    })
  }

  delete(id){
    this.dataservice.deleteData(id).subscribe((res)=>{
      alert("Data delete successfully")
      this.getUserData()
    })
  }

  ngOnInit(): void {
    this.getUserData();
  }

}
