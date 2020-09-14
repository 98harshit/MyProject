import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup;
  student:any=[];
  register()
  {
    this.dataservice.saveData(this.form.value).subscribe((res)=>
    {
      this.student=res;
      alert("Data store successfully")});
      this.router.navigateByUrl("/");
  }

  constructor( private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      user_name:new FormControl("",Validators.required),
      user_password:new FormControl("",Validators.required),
      user_email:new FormControl("",Validators.required),
      user_number:new FormControl("",Validators.required),
      user_city:new FormControl("",Validators.required)
    })


  }
}

