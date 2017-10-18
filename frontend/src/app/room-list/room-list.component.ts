import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor() { }

  RoomList : object[] = [{'name' : 'Room 100', 'available' : true}];

  ngOnInit() {
    
  }

  GetData(){
    var newList : object[] = [];
    
        for (var i = 0; i < this.RoomList.length; i++) {
          var room = this.RoomList[i];
          if ( room["available"] == true) {
            newList.push(room);
          }
        }
        
        return newList;
    }  
  
    Booking(id) : void {
          
          for (var i = 0; i < this.RoomList.length; i++) {
             if (this.RoomList[i]["name"] == id) {
              this.RoomList[i]['available'] = false;
              break;
            }
         }
        }
  }
