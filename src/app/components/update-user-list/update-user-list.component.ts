import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName } from '@angular/forms';
import { DataService } from '../../data.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-user-list',
  templateUrl: './update-user-list.component.html',
  styleUrls: ['./update-user-list.component.css']
})
export class UpdateUserListComponent implements OnInit {

  form:FormGroup;
  user:any=[];
  id:number;

  update()
  {
    this.dataservice.updateData(this.id,this.form.value).subscribe((res)=>{
      alert("Data updated successfully");
      this.router.navigateByUrl("/list");
    })
  }

  constructor(private dataservice:DataService, private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"];
      this.dataservice.getDataById(this.id).subscribe((data)=>{
        this.user=data;
        this.form=new FormGroup({
          user_name:new FormControl(this.user.user_name),
        user_password:new FormControl(this.user.user_password),
        user_email:new FormControl(this.user.user_email),
        user_number:new FormControl(this.user.user_number),
        user_city:new FormControl(this.user.user_city),
        })
      })
    })
  }

}
