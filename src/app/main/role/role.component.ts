import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NotificationService } from '../../core/services/notification.service';
import {MessageConstants} from '../../core/common/message.constants';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  public pageIndex: number = 1;
  public pageSize: number = 2;
  public pageDisplay: number = 10;
  public totalRow: number;
  public filter: string = '';
  public roles: any[];
  public entity: any;
  @ViewChild('modalAddEdit') public modalAddEdit:ModalDirective;
  constructor(private _dataService: DataService, private _notificationService:NotificationService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._dataService.get(`/api/appRole/getlistpaging?page=${this.pageIndex}&pageSize=${this.pageSize}&filter=${this.filter}`)
      .subscribe((response: any) => {
        this.roles = response.Items;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
        this.totalRow = response.TotalRows;
      });
  }

  pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.loadData();
  }

  showAddModal(){
    this.entity = {};
    this.modalAddEdit.show();
  }

  saveChange(valid:Boolean){
    if(valid){
      if(this.entity.Id == undefined){
        this._dataService.post('/api/appRole/add',JSON.stringify(this.entity)).subscribe((response:any)=>{
          this.loadData();
          this.modalAddEdit.hide();
          this._notificationService.printSuccessMessage(MessageConstants.CREATED_OK_MSG);
        },error=>this._dataService.handleError(error));
      }
      else{

      }
    }
  }

}
