"use strict";(self.webpackChunkportalMeli=self.webpackChunkportalMeli||[]).push([[687],{3009:(U,b,m)=>{m.d(b,{W:()=>Z});class Z{}},1687:(U,b,m)=>{m.r(b),m.d(b,{SagaModule:()=>St});var Z=m(9808),p=m(9224),y=m(1083);class D{}var k=m(3009),l=m(2340),u=m(8966),t=m(5e3),z=m(387),E=m(520);let A=(()=>{class o{constructor(e){this.http=e}CommonFormData(){this.formData=new FormData,this.formData.append("token",z.m.GetInstance().GetToken().token)}GetAtualizacao(e){return this.CommonFormData(),this.formData.append("robo",e.robo),this.formData.append("cad",e.cad),this.http.post(l.N.endpoint+"lms/GetAtualizacao",this.formData)}GetSaga(){return this.CommonFormData(),this.formData.append("cad",l.N.cad),this.formData.append("inicio",l.N.flowrackInicio),this.formData.append("fim",l.N.flowrackFim),this.formData.append("dtInicio",l.N.dtInicio),this.formData.append("dtfim",l.N.dtfim),this.formData.append("etd",l.N.etd),this.http.post(l.N.endpoint+"saga/GetDados2",this.formData)}GetETD(){return this.CommonFormData(),this.formData.append("cad",l.N.cad),this.http.post(l.N.endpoint+"saga/GetETds",this.formData)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(E.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var c=m(3075),g=m(7322),v=m(4107),x=m(508),h=m(7423);function Y(o,n){if(1&o&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function R(o,n){if(1&o&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}let J=(()=>{class o{constructor(e,a,i,r){this.data=e,this.dialogRef=a,this.service=i,this.formBuilder=r,this.objetos=[]}ngOnInit(){for(let e=1;e<=103;e++)this.objetos.push(e);this.CreateForm(),this.onChanges()}CreateForm(){this.form=this.formBuilder.group({flowrackInicio:[""],flowrackFim:[""]})}onChanges(){this.form.get("flowrackInicio").valueChanges.subscribe(e=>{l.N.flowrackInicio=e,console.log(e)}),this.form.get("flowrackFim").valueChanges.subscribe(e=>{l.N.flowrackFim=e,console.log(e)})}Filtrar(){this.dialogRef.close()}limparFiltrar(){l.N.flowrackInicio="1",l.N.flowrackFim="100",this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.WI),t.Y36(u.so),t.Y36(A),t.Y36(c.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-filtertoboga"]],features:[t._Bn([D])],decls:22,vars:3,consts:[[1,"container-fluid"],[1,"row"],[3,"formGroup"],[1,"col"],["appearance","fill"],["formControlName","flowrackInicio"],[3,"value",4,"ngFor","ngForOf"],["formControlName","flowrackFim"],["mat-flat-button","","color","primary",3,"click"],["mat-flat-button","","color","Red",2,"background-color","red","color","white",3,"click"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t.TgZ(4,"mat-form-field",4),t.TgZ(5,"mat-label"),t._uU(6,"Tobog\xe3 Inicio"),t.qZA(),t.TgZ(7,"mat-select",5),t.YNc(8,Y,2,2,"mat-option",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",3),t.TgZ(10,"mat-form-field",4),t.TgZ(11,"mat-label"),t._uU(12,"Tobog\xe3 Fim"),t.qZA(),t.TgZ(13,"mat-select",7),t.YNc(14,R,2,2,"mat-option",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",1),t.TgZ(16,"div",3),t.TgZ(17,"button",8),t.NdJ("click",function(){return a.Filtrar()}),t._uU(18,"Filtrar"),t.qZA(),t.qZA(),t.TgZ(19,"div",3),t.TgZ(20,"button",9),t.NdJ("click",function(){return a.limparFiltrar()}),t._uU(21,"Limpar Filtrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(6),t.Q6J("ngForOf",a.objetos),t.xp6(6),t.Q6J("ngForOf",a.objetos))},directives:[c._Y,c.JL,c.sg,g.KE,g.hX,v.gD,c.JJ,c.u,Z.sg,x.ey,h.lW],styles:[""]}),o})();var _=m(6087),f=m(4847),s=m(8279),T=m(7877),w=m(65),F=m(7531),C=m(3874);function S(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1,"Pedido"),t.qZA())}function I(o,n){if(1&o&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.group_id," ")}}function j(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1,"Qtde"),t.qZA())}function Q(o,n){if(1&o&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.qtdeRegistros," ")}}function G(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1,"Data ETD"),t.qZA())}function P(o,n){if(1&o&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.dataEtdCompleta," ")}}function H(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1,"Rampa"),t.qZA())}function O(o,n){if(1&o&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.rampa," ")}}function B(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1,"Hora decida"),t.qZA())}function L(o,n){if(1&o&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.EndDate," ")}}function V(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1,"\xdaltima Atualiza\xe7\xe3o"),t.qZA())}function W(o,n){if(1&o&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.dataAtulizacaoCompleta," ")}}function $(o,n){1&o&&t._UZ(0,"tr",22)}function X(o,n){1&o&&t._UZ(0,"tr",23)}const K=function(){return[5,20,50,100]};let tt=(()=>{class o{constructor(e,a,i){this.dialogRef=e,this.data=a,this.dialog=i,this.displayedColumns=["group_id","qtdeRegistros","dataEtdCompleta","rampa","EndDate","dataAtulizacaoCompleta"]}ngOnInit(){console.log(this.data),this.ListaArray=this.data,this.dataSource=new s.by(this.ListaArray),this.ngAfterViewInit()}exportIt(){this.exporter.exportTable(w.tM.CSV,{fileName:"Mercado Livre",Props:{Author:"Felix"}})}applyFilter(){this.pesquisar=this.pesquisar.toLowerCase(),this.dataSource.filter=this.pesquisar}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.so),t.Y36(u.WI),t.Y36(u.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-filtrorelatorio"]],viewQuery:function(e,a){if(1&e&&(t.Gf(_.NW,5),t.Gf(f.YE,5),t.Gf(T.jt,7)),2&e){let i;t.iGM(i=t.CRH())&&(a.paginator=i.first),t.iGM(i=t.CRH())&&(a.sort=i.first),t.iGM(i=t.CRH())&&(a.exporter=i.first)}},decls:46,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col"],["matInput","","placeholder","Procurar",3,"ngModel","keyup","ngModelChange"],["mat-button","","matPrefix","","mat-icon-button",""],["mat-raised-button","",3,"click"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8","w-100",3,"dataSource"],["exporter","matTableExporter"],["matColumnDef","group_id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","qtdeRegistros"],["matColumnDef","dataEtdCompleta"],["matColumnDef","rampa"],["matColumnDef","EndDate"],["matColumnDef","dataAtulizacaoCompleta"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],["paginator",""],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"mat-card"),t.TgZ(2,"mat-card-title"),t.TgZ(3,"div",1),t.TgZ(4,"div",2),t._uU(5," Relat\xf3rio "),t.qZA(),t.qZA(),t.TgZ(6,"div",1),t.TgZ(7,"div",2),t.TgZ(8,"mat-form-field"),t.TgZ(9,"input",3),t.NdJ("keyup",function(){return a.applyFilter()})("ngModelChange",function(d){return a.pesquisar=d}),t.qZA(),t.TgZ(10,"button",4),t.TgZ(11,"mat-icon"),t._uU(12,"search"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"div",2),t.TgZ(15,"button",5),t.NdJ("click",function(){return a.exportIt()}),t._uU(16,"CSV"),t.qZA(),t.TgZ(17,"button",5),t.NdJ("click",function(){return t.CHM(i),t.MAs(23).exportTable("xlsx")}),t._uU(18,"EXCEL"),t.qZA(),t.TgZ(19,"button",5),t.NdJ("click",function(){return t.CHM(i),t.MAs(23).exportTable("txt")}),t._uU(20,"TXT"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"mat-card-content"),t.TgZ(22,"table",6,7),t.ynx(24,8),t.YNc(25,S,2,0,"th",9),t.YNc(26,I,2,1,"td",10),t.BQk(),t.ynx(27,11),t.YNc(28,j,2,0,"th",9),t.YNc(29,Q,2,1,"td",10),t.BQk(),t.ynx(30,12),t.YNc(31,G,2,0,"th",9),t.YNc(32,P,2,1,"td",10),t.BQk(),t.ynx(33,13),t.YNc(34,H,2,0,"th",9),t.YNc(35,O,2,1,"td",10),t.BQk(),t.ynx(36,14),t.YNc(37,B,2,0,"th",9),t.YNc(38,L,2,1,"td",10),t.BQk(),t.ynx(39,15),t.YNc(40,V,2,0,"th",9),t.YNc(41,W,2,1,"td",10),t.BQk(),t.YNc(42,$,1,0,"tr",16),t.YNc(43,X,1,0,"tr",17),t.qZA(),t._UZ(44,"mat-paginator",18,19),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(9),t.Q6J("ngModel",a.pesquisar),t.xp6(13),t.Q6J("dataSource",a.dataSource),t.xp6(20),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(6,K))("pageSize",5))},directives:[p.a8,p.n5,g.KE,F.Nt,c.Fj,c.JJ,c.On,h.lW,g.qo,C.Hw,p.dn,s.BZ,T.jt,f.YE,s.w1,s.fO,s.ge,f.nU,s.Dz,s.ev,s.as,s.XQ,s.nj,s.Gk,_.NW],styles:[""]}),o})();function et(o,n){if(1&o&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.dataEtdCompleta," ")}}let ot=(()=>{class o{constructor(e,a,i,r){this.data=e,this.dialogRef=a,this.service=i,this.formBuilder=r,this.objetos=[]}ngOnInit(){this.service.GetETD().subscribe(e=>{this.objetos=e,console.log(e)}),this.CreateForm(),this.onChanges()}CreateForm(){this.form=this.formBuilder.group({etd:[""]})}onChanges(){this.form.get("etd").valueChanges.subscribe(e=>{l.N.etd=e.dataEtdCompleta,console.log(e)})}Filtrar(){this.dialogRef.close()}limparFiltrar(){l.N.etd="",this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.WI),t.Y36(u.so),t.Y36(A),t.Y36(c.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-filtros-etd"]],decls:16,vars:2,consts:[[1,"container-fluid"],[1,"row"],[3,"formGroup"],[1,"col"],["appearance","fill"],["formControlName","etd"],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary",3,"click"],["mat-flat-button","","color","Red",2,"background-color","red","color","white",3,"click"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t.TgZ(4,"mat-form-field",4),t.TgZ(5,"mat-label"),t._uU(6,"ETD"),t.qZA(),t.TgZ(7,"mat-select",5),t.YNc(8,et,2,2,"mat-option",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",1),t.TgZ(10,"div",3),t.TgZ(11,"button",7),t.NdJ("click",function(){return a.Filtrar()}),t._uU(12,"Filtrar"),t.qZA(),t.qZA(),t.TgZ(13,"div",3),t.TgZ(14,"button",8),t.NdJ("click",function(){return a.limparFiltrar()}),t._uU(15,"Limpar Filtrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(6),t.Q6J("ngForOf",a.objetos))},directives:[c._Y,c.JL,c.sg,g.KE,g.hX,v.gD,c.JJ,c.u,Z.sg,x.ey,h.lW],styles:[""]}),o})();function at(o,n){if(1&o&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}let it=(()=>{class o{constructor(e,a,i,r){this.data=e,this.dialogRef=a,this.service=i,this.formBuilder=r,this.objetos=["15 min a 30 min","15 min a 1 Hr","hoje"]}ngOnInit(){this.CreateForm(),this.onChanges()}CreateForm(){this.form=this.formBuilder.group({Vencimento:[""]})}verificaPedido(e){const a=new Date;if(l.N.selecionado=e,"15 min a 30 min"===e){const i=new Date,r=new Date;i.setMinutes(a.getMinutes()-30),r.setMinutes(a.getMinutes()-15),l.N.dtInicio=this.formatardate(i,"hora"),l.N.dtfim=this.formatardate(r,"hora")}else if("15 min a 1 Hr"===e){const i=new Date,r=new Date;i.setMinutes(a.getMinutes()-60),r.setMinutes(a.getMinutes()-15),l.N.dtInicio=this.formatardate(i,"hora"),l.N.dtfim=this.formatardate(r,"hora")}else if("hoje"===e)l.N.dtInicio=this.formatardate(a,"")+" 00:00:00",l.N.dtfim=this.formatardate(a,"")+" 23:59:00",console.log(l.N.dtInicio),console.log(l.N.dtfim);else{const i=new Date;i.setHours(a.getHours()-24),l.N.dtInicio=this.formatardate(i,"")+" 00:00:00",l.N.dtfim=this.formatardate(a,"")+" 23:59:00"}}formatardate(e,a){let i,r,d,q;return i=e.getDate()>9?e.getDate():"0"+e.getDate(),r=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),d=e.getFullYear(),q=e.toLocaleTimeString(),""===a?d+"-"+r+"-"+i:d+"-"+r+"-"+i+" "+q}onChanges(){this.form.get("Vencimento").valueChanges.subscribe(e=>{this.verificaPedido(e),console.log(e)})}Filtrar(){this.dialogRef.close()}limparFiltrar(){const e=new Date,a=new Date;l.N.selecionado="",a.setHours(e.getHours()-24),l.N.dtInicio=this.formatardate(a,"")+" 00:00:00",l.N.dtfim=this.formatardate(e,"")+" 23:59:59",this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.WI),t.Y36(u.so),t.Y36(A),t.Y36(c.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-filtros-venc"]],decls:16,vars:2,consts:[[1,"container-fluid"],[1,"row"],[3,"formGroup"],[1,"col"],["appearance","fill"],["formControlName","Vencimento"],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary",3,"click"],["mat-flat-button","","color","Red",2,"background-color","red","color","white",3,"click"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t.TgZ(4,"mat-form-field",4),t.TgZ(5,"mat-label"),t._uU(6,"Per\xedodo"),t.qZA(),t.TgZ(7,"mat-select",5),t.YNc(8,at,2,2,"mat-option",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",1),t.TgZ(10,"div",3),t.TgZ(11,"button",7),t.NdJ("click",function(){return a.Filtrar()}),t._uU(12,"Filtrar"),t.qZA(),t.qZA(),t.TgZ(13,"div",3),t.TgZ(14,"button",8),t.NdJ("click",function(){return a.limparFiltrar()}),t._uU(15,"Limpar Filtrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(6),t.Q6J("ngForOf",a.objetos))},directives:[c._Y,c.JL,c.sg,g.KE,g.hX,v.gD,c.JJ,c.u,Z.sg,x.ey,h.lW],styles:[""]}),o})();function nt(o,n){1&o&&(t.TgZ(0,"th",18),t._uU(1,"Pedido"),t.qZA())}function rt(o,n){if(1&o&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.group_id," ")}}function lt(o,n){1&o&&(t.TgZ(0,"th",18),t._uU(1,"Data ETD"),t.qZA())}function st(o,n){if(1&o&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.dataEtdCompleta," ")}}function mt(o,n){1&o&&(t.TgZ(0,"th",18),t._uU(1,"Canalization"),t.qZA())}function ct(o,n){if(1&o&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.Canalization," ")}}function dt(o,n){1&o&&(t.TgZ(0,"th",18),t._uU(1,"\xdaltima Atualiza\xe7\xe3o"),t.qZA())}function ut(o,n){if(1&o&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.dataAtulizacaoCompleta," ")}}function pt(o,n){1&o&&t._UZ(0,"tr",20)}function gt(o,n){1&o&&t._UZ(0,"tr",21)}const ft=function(){return[5,20,50,100]};let ht=(()=>{class o{constructor(e,a,i){this.dialogRef=e,this.data=a,this.dialog=i,this.displayedColumns=["group_id","dataEtdCompleta","Canalization","dataAtulizacaoCompleta"]}ngOnInit(){console.log(this.data),this.ListaArray=this.data,this.dataSource=new s.by(this.ListaArray),this.ngAfterViewInit()}exportIt(){this.exporter.exportTable(w.tM.CSV,{fileName:"Mercado Livre",Props:{Author:"Felix"}})}applyFilter(){this.pesquisar=this.pesquisar.toLowerCase(),this.dataSource.filter=this.pesquisar}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.so),t.Y36(u.WI),t.Y36(u.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-filtrosemrampa"]],viewQuery:function(e,a){if(1&e&&(t.Gf(_.NW,5),t.Gf(f.YE,5),t.Gf(T.jt,7)),2&e){let i;t.iGM(i=t.CRH())&&(a.paginator=i.first),t.iGM(i=t.CRH())&&(a.sort=i.first),t.iGM(i=t.CRH())&&(a.exporter=i.first)}},decls:40,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col"],["matInput","","placeholder","Procurar",3,"ngModel","keyup","ngModelChange"],["mat-button","","matPrefix","","mat-icon-button",""],["mat-raised-button","",3,"click"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8","w-100",3,"dataSource"],["exporter","matTableExporter"],["matColumnDef","group_id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","dataEtdCompleta"],["matColumnDef","Canalization"],["matColumnDef","dataAtulizacaoCompleta"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],["paginator",""],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"mat-card"),t.TgZ(2,"mat-card-title"),t.TgZ(3,"div",1),t.TgZ(4,"div",2),t._uU(5," Relat\xf3rio "),t.qZA(),t.qZA(),t.TgZ(6,"div",1),t.TgZ(7,"div",2),t.TgZ(8,"mat-form-field"),t.TgZ(9,"input",3),t.NdJ("keyup",function(){return a.applyFilter()})("ngModelChange",function(d){return a.pesquisar=d}),t.qZA(),t.TgZ(10,"button",4),t.TgZ(11,"mat-icon"),t._uU(12,"search"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"div",2),t.TgZ(15,"button",5),t.NdJ("click",function(){return a.exportIt()}),t._uU(16,"CSV"),t.qZA(),t.TgZ(17,"button",5),t.NdJ("click",function(){return t.CHM(i),t.MAs(23).exportTable("xlsx")}),t._uU(18,"EXCEL"),t.qZA(),t.TgZ(19,"button",5),t.NdJ("click",function(){return t.CHM(i),t.MAs(23).exportTable("txt")}),t._uU(20,"TXT"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"mat-card-content"),t.TgZ(22,"table",6,7),t.ynx(24,8),t.YNc(25,nt,2,0,"th",9),t.YNc(26,rt,2,1,"td",10),t.BQk(),t.ynx(27,11),t.YNc(28,lt,2,0,"th",9),t.YNc(29,st,2,1,"td",10),t.BQk(),t.ynx(30,12),t.YNc(31,mt,2,0,"th",9),t.YNc(32,ct,2,1,"td",10),t.BQk(),t.ynx(33,13),t.YNc(34,dt,2,0,"th",9),t.YNc(35,ut,2,1,"td",10),t.BQk(),t.YNc(36,pt,1,0,"tr",14),t.YNc(37,gt,1,0,"tr",15),t.qZA(),t._UZ(38,"mat-paginator",16,17),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(9),t.Q6J("ngModel",a.pesquisar),t.xp6(13),t.Q6J("dataSource",a.dataSource),t.xp6(14),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(6,ft))("pageSize",5))},directives:[p.a8,p.n5,g.KE,F.Nt,c.Fj,c.JJ,c.On,h.lW,g.qo,C.Hw,p.dn,s.BZ,T.jt,f.YE,s.w1,s.fO,s.ge,f.nU,s.Dz,s.ev,s.as,s.XQ,s.nj,s.Gk,_.NW],styles:[""]}),o})();class M{}function Zt(o,n){1&o&&(t.TgZ(0,"th",19),t._uU(1,"Pedido"),t.qZA())}function _t(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.group_id," ")}}function Tt(o,n){1&o&&(t.TgZ(0,"th",19),t._uU(1,"Rampa"),t.qZA())}function At(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.rampa," ")}}function Ct(o,n){1&o&&(t.TgZ(0,"th",19),t._uU(1,"Descida na Rampa"),t.qZA())}function qt(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.EndDate," ")}}function bt(o,n){1&o&&(t.TgZ(0,"th",19),t._uU(1,"Canalization"),t.qZA())}function vt(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.Canalization," ")}}function Ft(o,n){1&o&&(t.TgZ(0,"th",19),t._uU(1,"\xdaltima Atualiza\xe7\xe3o"),t.qZA())}function Nt(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.dataAtulizacaoCompleta," ")}}function Dt(o,n){1&o&&t._UZ(0,"tr",21)}function xt(o,n){1&o&&t._UZ(0,"tr",22)}const wt=function(){return[10,20,50,100]};let yt=(()=>{class o{constructor(e,a,i,r){this.service=e,this.dialogRef=a,this.data=i,this.dialog=r,this.displayedColumns=["group_id","rampa","EndDate","Canalization","dataAtulizacaoCompleta"]}ngOnInit(){for(var e in console.log(this.data),this.ListaArray=[],this.data)this.pedidounico=new M,this.pedidounico=this.data[e],this.ListaArray.push(this.pedidounico);console.log(this.ListaArray),this.dataSource=new s.by(this.ListaArray),this.ngAfterViewInit()}exportIt(){this.exporter.exportTable(w.tM.CSV,{fileName:"Mercado Livre",Props:{Author:"saga"}})}applyFilter(){this.pesquisar=this.pesquisar.toLowerCase(),this.dataSource.filter=this.pesquisar}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(A),t.Y36(u.so),t.Y36(u.WI),t.Y36(u.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-pedidos"]],viewQuery:function(e,a){if(1&e&&(t.Gf(_.NW,5),t.Gf(f.YE,5),t.Gf(T.jt,7)),2&e){let i;t.iGM(i=t.CRH())&&(a.paginator=i.first),t.iGM(i=t.CRH())&&(a.sort=i.first),t.iGM(i=t.CRH())&&(a.exporter=i.first)}},features:[t._Bn([M])],decls:45,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col"],["matInput","","placeholder","Procurar",3,"ngModel","keyup","ngModelChange"],["mat-button","","matPrefix","","mat-icon-button",""],["mat-raised-button","",3,"click"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8","w-100",3,"dataSource"],["exporter","matTableExporter"],["matColumnDef","group_id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","rampa"],["matColumnDef","EndDate"],["matColumnDef","Canalization"],["matColumnDef","dataAtulizacaoCompleta"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],["paginator",""],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"mat-card"),t.TgZ(2,"mat-card-title"),t.TgZ(3,"div",1),t.TgZ(4,"div",2),t._uU(5," Gerenciamento de Bases "),t.qZA(),t.qZA(),t.TgZ(6,"div",1),t.TgZ(7,"div",2),t.TgZ(8,"mat-form-field"),t.TgZ(9,"input",3),t.NdJ("keyup",function(){return a.applyFilter()})("ngModelChange",function(d){return a.pesquisar=d}),t.qZA(),t.TgZ(10,"button",4),t.TgZ(11,"mat-icon"),t._uU(12,"search"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"div",2),t.TgZ(15,"button",5),t.NdJ("click",function(){return a.exportIt()}),t._uU(16,"CSV"),t.qZA(),t.TgZ(17,"button",5),t.NdJ("click",function(){return t.CHM(i),t.MAs(25).exportTable("json")}),t._uU(18,"JSON"),t.qZA(),t.TgZ(19,"button",5),t.NdJ("click",function(){return t.CHM(i),t.MAs(25).exportTable("xlsx")}),t._uU(20,"EXCEL"),t.qZA(),t.TgZ(21,"button",5),t.NdJ("click",function(){return t.CHM(i),t.MAs(25).exportTable("txt")}),t._uU(22,"TXT"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"mat-card-content"),t.TgZ(24,"table",6,7),t.ynx(26,8),t.YNc(27,Zt,2,0,"th",9),t.YNc(28,_t,2,1,"td",10),t.BQk(),t.ynx(29,11),t.YNc(30,Tt,2,0,"th",9),t.YNc(31,At,2,1,"td",10),t.BQk(),t.ynx(32,12),t.YNc(33,Ct,2,0,"th",9),t.YNc(34,qt,2,1,"td",10),t.BQk(),t.ynx(35,13),t.YNc(36,bt,2,0,"th",9),t.YNc(37,vt,2,1,"td",10),t.BQk(),t.ynx(38,14),t.YNc(39,Ft,2,0,"th",9),t.YNc(40,Nt,2,1,"td",10),t.BQk(),t.YNc(41,Dt,1,0,"tr",15),t.YNc(42,xt,1,0,"tr",16),t.qZA(),t._UZ(43,"mat-paginator",17,18),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(9),t.Q6J("ngModel",a.pesquisar),t.xp6(15),t.Q6J("dataSource",a.dataSource),t.xp6(17),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(6,wt))("pageSize",10))},directives:[p.a8,p.n5,g.KE,F.Nt,c.Fj,c.JJ,c.On,h.lW,g.qo,C.Hw,p.dn,s.BZ,T.jt,f.YE,s.w1,s.fO,s.ge,f.nU,s.Dz,s.ev,s.as,s.XQ,s.nj,s.Gk,_.NW],styles:[""]}),o})();var N=m(2181);function Mt(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"button",18),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).AbrirRelatorio(r.Itens)}),t._uU(2),t.qZA(),t.qZA()}if(2&o){const e=n.$implicit;t.xp6(1),t.Udp("background",e.tempoParaETDMinutos>0?"red":e.tempoParaETDMinutos>-60?"orange":"green"),t.Q6J("hidden",""==e.dataedttexto),t.xp6(1),t.AsE("",e.dataedttexto," ",e.QtdePedidos,"")}}function Ut(o,n){if(1&o&&(t.TgZ(0,"div",12),t.TgZ(1,"mat-card",13),t.TgZ(2,"mat-card-title",14),t.TgZ(3,"div",15),t.TgZ(4,"b"),t.TgZ(5,"a",16),t._uU(6),t.qZA(),t.qZA(),t.qZA(),t.YNc(7,Mt,3,5,"div",17),t.qZA(),t.qZA(),t.qZA()),2&o){const e=n.$implicit;t.Q6J("hidden",""==e.Pedidos[0].dataedt),t.xp6(6),t.hij("Tobog\xe3 ",e.rampa,""),t.xp6(1),t.Q6J("ngForOf",e.Pedidos)}}const kt=[{path:"Gerenciamento",component:(()=>{class o{constructor(e,a,i){this.service=e,this.dialog=a,this.filter=i,this.serverInfo=0,this.ListaAtualizacao=[],this.dataatualizacao="",this.dataatualizacaoRetorno="",this.dataatualizacaoFormatada=""}ngOnInit(){l.N.flowrackInicio="1",l.N.flowrackFim="103";const e=new Date,a=new Date;a.setHours(e.getHours()-24),l.N.dtInicio=this.formatardate(a,"")+" 00:00:00",l.N.dtfim=this.formatardate(e,"")+" 23:59:59",l.N.etd="",console.log(l.N.dtInicio),console.log(l.N.dtfim),this.pesquisarNobanco(),this.serverInfo=window.setInterval(()=>{this.pesquisarAtualizacao()},3e4)}pesquisarAtualizacao(){var e=new k.W;e.robo="saga",e.cad=l.N.cad,this.service.GetAtualizacao(e).subscribe(a=>{this.ListaAtualizacao=a;let i=new Date(this.ListaAtualizacao[0].data);""==this.dataatualizacao?(this.dataatualizacao=this.convertedataString(i,"titulo")+" "+this.ListaAtualizacao[0].data.substr(11,5),this.dataatualizacaoRetorno=this.dataatualizacao):(this.dataatualizacaoRetorno=this.convertedataString(i,"titulo")+" "+this.ListaAtualizacao[0].data.substr(11,5),this.dataatualizacaoRetorno!=this.dataatualizacao&&(this.pesquisarNobanco(),this.dataatualizacao=this.dataatualizacaoRetorno))})}convertedataString(e,a){let i,r,d;return i=e.getDate()>9?e.getDate():"0"+e.getDate(),r=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),d=e.getFullYear(),"titulo"==a?i+"/"+r+"/"+d:d+"-"+r+"-"+i}formatardate(e,a){let i,r,d,q;return i=e.getDate()>9?e.getDate():"0"+e.getDate(),r=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),d=e.getFullYear(),q=e.toLocaleTimeString(),""===a?d+"-"+r+"-"+i:d+"-"+r+"-"+i+" "+q}pesquisarNobanco(){this.verificaPedido(l.N.selecionado),this.service.GetSaga().subscribe(e=>{this.objetos=e,console.log(this.objetos),console.log(this.objetos.dataAtualizacao),this.dataatualizacaoFormatada=this.objetos.dataAtualizacao})}verificaPedido(e){const a=new Date;if("15 min a 30 min"===e){const i=new Date,r=new Date;i.setMinutes(a.getMinutes()-30),r.setMinutes(a.getMinutes()-15),l.N.dtInicio=this.formatardate(i,"hora"),l.N.dtfim=this.formatardate(r,"hora")}else if("15 min a 1 Hr"===e){const i=new Date,r=new Date;i.setMinutes(a.getMinutes()-60),r.setMinutes(a.getMinutes()-15),l.N.dtInicio=this.formatardate(i,"hora"),l.N.dtfim=this.formatardate(r,"hora")}else if("hoje"===e)l.N.dtInicio=this.formatardate(a,"")+" 00:00:00",l.N.dtfim=this.formatardate(a,"")+" 23:59:00",console.log(l.N.dtInicio),console.log(l.N.dtfim);else{const i=new Date;i.setHours(a.getHours()-24),l.N.dtInicio=this.formatardate(i,"")+" 00:00:00",l.N.dtfim=this.formatardate(a,"")+" 23:59:00"}console.log(l.N.dtInicio),console.log(l.N.dtfim)}filtro(){this.dialog.open(J,{data:this.objetos}).beforeClosed().subscribe(e=>{console.log(e),this.pesquisarNobanco()})}filtroVenc(){this.dialog.open(it,{data:this.objetos}).beforeClosed().subscribe(e=>{console.log(e),this.pesquisarNobanco()})}filtroETD(){this.dialog.open(ot,{data:this.objetos}).beforeClosed().subscribe(e=>{console.log(e),this.pesquisarNobanco()})}AbrirRelatorio(e){console.log(e),this.dialog.open(yt,{data:e}).beforeClosed().subscribe(a=>{console.log(a),this.pesquisarNobanco()})}RelatorioGeral(){this.dialog.open(tt,{data:this.objetos.ListaGeral}).beforeClosed().subscribe(e=>{console.log(e),this.pesquisarNobanco()})}RelatorioSemRAmpa(){this.dialog.open(ht,{data:this.objetos.ListaSemRampa}).beforeClosed().subscribe(e=>{console.log(e),this.pesquisarNobanco()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(A),t.Y36(u.uw),t.Y36(D))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-gerenciamentosaga"]],features:[t._Bn([D])],decls:52,vars:4,consts:[[1,"row"],[1,"col-md-3","card","text-center",2,"height","50px","background-color","#AADB1D"],[1,"w-100",2,"font-size","15px"],[1,"w-100",2,"font-size","20px"],[1,"col-md-6","card","text-center",2,"height","50px","background-color","#AADB1D","text-align","center"],[1,"w-100",2,"font-size","35px","margin-top","0px"],[1,"row","h-100"],["class","card-w","style","margin-top:5px;",3,"hidden",4,"ngFor","ngForOf"],[1,"button-container"],["mat-mini-fab","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"card-w",2,"margin-top","5px",3,"hidden"],[2,"height","200px"],[2,"text-align","center"],[1,"row",2,"font-size","12px"],["text-align","center"],[4,"ngFor","ngForOf"],["type","button",1,"float-right","btn","btn-primary",2,"border-color","black","margin","0,15,0,5","font-size","9px",3,"hidden","click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",0),t.TgZ(4,"p",2),t._uU(5,"\xdaltima atualiza\xe7\xe3o"),t.qZA(),t.qZA(),t.TgZ(6,"div",0),t.TgZ(7,"p",3),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"p",5),t._uU(11,"F\xeanix"),t.qZA(),t.qZA(),t.TgZ(12,"div",1),t.TgZ(13,"div",0),t.TgZ(14,"p",2),t._uU(15,"\xdaltima atualiza\xe7\xe3o"),t.qZA(),t.qZA(),t.TgZ(16,"div",0),t.TgZ(17,"p",3),t._uU(18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",6),t.YNc(20,Ut,8,3,"div",7),t.TgZ(21,"div",8),t.TgZ(22,"button",9),t.TgZ(23,"mat-icon"),t._uU(24,"filter_list"),t.qZA(),t.qZA(),t.TgZ(25,"mat-menu",null,10),t.TgZ(27,"button",11),t.NdJ("click",function(){return a.filtro()}),t.TgZ(28,"mat-icon"),t._uU(29,"dialpad"),t.qZA(),t.TgZ(30,"span"),t._uU(31,"Tobog\xe3"),t.qZA(),t.qZA(),t.TgZ(32,"button",11),t.NdJ("click",function(){return a.filtroVenc()}),t.TgZ(33,"mat-icon"),t._uU(34,"dialpad"),t.qZA(),t.TgZ(35,"span"),t._uU(36,"Per\xedodo"),t.qZA(),t.qZA(),t.TgZ(37,"button",11),t.NdJ("click",function(){return a.filtroETD()}),t.TgZ(38,"mat-icon"),t._uU(39,"dialpad"),t.qZA(),t.TgZ(40,"span"),t._uU(41,"ETD"),t.qZA(),t.qZA(),t.TgZ(42,"button",11),t.NdJ("click",function(){return a.RelatorioGeral()}),t.TgZ(43,"mat-icon"),t._uU(44,"dialpad"),t.qZA(),t.TgZ(45,"span"),t._uU(46,"Rel\xe1torio Rampas"),t.qZA(),t.qZA(),t.TgZ(47,"button",11),t.NdJ("click",function(){return a.RelatorioSemRAmpa()}),t.TgZ(48,"mat-icon"),t._uU(49,"dialpad"),t.qZA(),t.TgZ(50,"span"),t._uU(51,"Rel\xe1torio Sem Rampas"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const i=t.MAs(26);t.xp6(8),t.Oqu(a.objetos.dataAtualizacao.substring(10,19)),t.xp6(10),t.Oqu(a.objetos.dataAtualizacao.substring(10,19)),t.xp6(2),t.Q6J("ngForOf",a.objetos.ListaRampas),t.xp6(2),t.Q6J("matMenuTriggerFor",i)}},directives:[Z.sg,p.a8,p.n5,h.lW,N.p6,C.Hw,N.VK,N.OP],styles:[".blink_me[_ngcontent-%COMP%]{animation:blinker 1s linear infinite}@keyframes blinker{50%{opacity:0}}p[_ngcontent-%COMP%]{padding:0;margin:0}@media only screen and (max-width: 1200px){.card-title[_ngcontent-%COMP%]{font-size:1.2vw}.card-info[_ngcontent-%COMP%]{font-size:.7vw}.card-volume[_ngcontent-%COMP%]{font-size:1.1vw}}.button-container[_ngcontent-%COMP%]{position:fixed;left:92%;top:92%}.card-w[_ngcontent-%COMP%]{width:10%}"]}),o})()}];let zt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[y.Bz.forChild(kt)],y.Bz]}),o})();var Et=m(4623),Yt=m(3954),Rt=m(7446),Jt=m(6853);let St=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[Z.ez,zt,p.QW,h.ot,Et.ie,C.Ps,s.p0,Yt.N6,N.Tx,g.lN,v.LD,u.Is,c.UX,_.TU,f.JX,T.JB,c.u5,F.c,Jt.e4,Rt.p9]]}),o})()}}]);