import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() dataRow: User = new User(); 
  @Output() selectClick_row: EventEmitter<User> = new EventEmitter()
  @Output() updateClick_row: EventEmitter<User> = new EventEmitter()
  @Output() deleteClick_row: EventEmitter<User> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSelectClicked(): void {
    this.selectClick_row.emit(this.dataRow);
  }

  onUpdateClicked(): void {
    this.updateClick_row.emit(this.dataRow);
  }

  onDeleteClicked(): void {
    this.deleteClick_row.emit(this.dataRow);
  }

}
