"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8553],{8553:(M,l,i)=>{i.r(l),i.d(l,{GenerateUsersPageModule:()=>j});var f=i(9808),v=i(3075),s=i(8779),u=i(4030);class A{constructor(n,a,r,o,c,d,p,U,g,Z,h,m,G){this.id=n||null,this.login=a||null,this.firstName=r||null,this.lastName=o||null,this.email=c||null,this.activated=d||!1,this.langKey=p||null,this.authorities=U||null,this.createdBy=g||null,this.createdDate=Z||null,this.lastModifiedBy=h||null,this.lastModifiedDate=m||null,this.password=G||null}}var e=i(1269),y=i(5146);let T=(()=>{class t{constructor(a){this.api=a}getDataUserGenerate(){return this.api.post("admin/users/generate","")}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(y.s))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const b=[{path:"",component:(()=>{class t{constructor(a){this.apiGenerateService=a}ngOnInit(){this.data=new A}generateUser(){this.apiGenerateService.getDataUserGenerate().subscribe(a=>{this.data=a,console.log(this.data)},a=>{console.log("error",a.message)})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(T))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-generate-users"]],decls:44,vars:11,consts:[["color","tertiary "],["slot","start"],[1,"ion-padding"],["expand","block","type","submit","color","primary",3,"click"]],template:function(a,r){1&a&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0),e._UZ(2,"ion-back-button",1),e.TgZ(3,"ion-title"),e._uU(4,"Generate Users"),e.qZA()()(),e.TgZ(5,"ion-content",2)(6,"ion-list")(7,"ion-item")(8,"ion-label")(9,"p"),e._uU(10),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"p"),e._uU(13),e.qZA(),e._UZ(14,"br"),e.TgZ(15,"p"),e._uU(16),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"p"),e._uU(19),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"p"),e._uU(22),e.qZA(),e._UZ(23,"br"),e.TgZ(24,"p"),e._uU(25),e.qZA(),e._UZ(26,"br"),e.TgZ(27,"p"),e._uU(28),e.qZA(),e._UZ(29,"br"),e.TgZ(30,"p"),e._uU(31),e.qZA(),e._UZ(32,"br"),e.TgZ(33,"p"),e._uU(34),e.qZA(),e._UZ(35,"br"),e.TgZ(36,"p"),e._uU(37),e.qZA(),e._UZ(38,"br"),e.TgZ(39,"p"),e._uU(40),e.qZA(),e._UZ(41,"p"),e.qZA()()(),e.TgZ(42,"ion-button",3),e.NdJ("click",function(){return r.generateUser()}),e._uU(43," Generate "),e.qZA()()),2&a&&(e.xp6(10),e.hij("ID : ",r.data.id," "),e.xp6(3),e.hij("Login : ",r.data.login," "),e.xp6(3),e.hij("Firstname : ",r.data.firstName," "),e.xp6(3),e.hij("Lastname : ",r.data.lastName," "),e.xp6(3),e.hij("Email : ",r.data.email," "),e.xp6(3),e.hij("Activated : ",r.data.activated," "),e.xp6(3),e.hij("CreateBy : ",r.data.createdBy," "),e.xp6(3),e.hij("Authorities : ",r.data.authorities," "),e.xp6(3),e.hij("Created Date : ",r.data.createdDate," "),e.xp6(3),e.hij("last Modified By : ",r.data.lastModifiedBy," "),e.xp6(3),e.hij("last Modified Date : ",r.data.lastModifiedDate," "))},directives:[s.Gu,s.sr,s.oU,s.cs,s.wd,s.W2,s.q_,s.Ie,s.Q$,s.YG],styles:[""]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(b)],u.Bz]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.ez,v.u5,s.Pc,P]]}),t})()}}]);