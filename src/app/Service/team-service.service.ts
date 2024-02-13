import { Injectable, inject } from '@angular/core';
import { Team } from '../../Models/team.class';
import {Firestore, addDoc, collection, onSnapshot, query, where } from '@angular/fire/firestore';
import { User } from '../../Models/user.class';



@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  firestore: Firestore = inject(Firestore);
  teamList: any = [];
  userList: any = [];
  team: Team = new Team();
  user: User = new User();
  unsubList;
  unsubListP;
  db;
  dbu;
 

  constructor() { 
    this.unsubList = this.subTeamList();
    this.db = collection(this.firestore, 'teams');
    this.unsubListP = this.subUserList();
    this.dbu = collection(this.firestore, 'user');
  }

  subTeamList() {
    return onSnapshot(this.getTeamRef(), (list) => {
      this.teamList = [];
      list.forEach(element => {
        this.teamList.push(this.setTeamObject(element.data(), element.id));
        console.log(this.teamList);
      });
    })
  };

  subUserList() {
    return onSnapshot(this.getUserRef(), (list) => {
      this.userList = [];
      list.forEach(element => {
        this.userList.push(this.setUserObject(element.data(), element.id));
        console.log(this.userList);
      });
    })
  };

  getTeamRef() {
    return collection(this.firestore, 'teams');
  }

  getUserRef() {
    return collection(this.firestore, 'user');
  }

  setTeamObject(obj: any, id:string) {
    return {
      id: id || "",
      teamName: obj. teamName || "",
    }
  }

  setUserObject(obj: any, id:string) {
    return {
      playerId: id || "",
      playerName: obj. PlayerName || "",
      teamId: obj. teamId || ""
    }
  }

  saveTeam() {
    addDoc(this.db, this.team.toJSON());
  }

  saveUser() {
    addDoc(this.dbu, this.user.toJSON());
  }

  ngOnDestroy() {
    this.subTeamList();
    this.subUserList();
  }

  getTeamByPlayerId(teamId: string) {
    const playerCollRef = collection(this.firestore, 'user');
    const q = query(playerCollRef, where("teamId", "==", teamId));
    return q;
  }



}
