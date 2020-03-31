import { Component, OnInit } from '@angular/core';
import { Role } from '../models/Role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  listRole : Role[]=[]
  constructor(private roleservice : RoleService) { }

  ngOnInit(): void {
    this.roleservice.getAll().subscribe(
      data=>{
        this.listRole=data;
      }
     )
  }

}
