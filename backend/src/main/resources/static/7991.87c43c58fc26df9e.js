"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7991],{7423:(J,_,r)=>{r.d(_,{Uw:()=>l,fo:()=>I});var f=r(5861);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;var a=(()=>{return(o=a||(a={})).Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",a;var o})();class O extends Error{constructor(t,n){super(t),this.message=t,this.code=n}}const d=o=>{var t,n,c,S,m;const R=o.CapacitorCustomPlatform||null,u=o.Capacitor||{},K=u.Plugins=u.Plugins||{},P=o.CapacitorPlatforms,Q=(null===(t=null==P?void 0:P.currentPlatform)||void 0===t?void 0:t.getPlatform)||(()=>null!==R?R.name:(o=>{var t,n;return(null==o?void 0:o.androidBridge)?"android":(null===(n=null===(t=null==o?void 0:o.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(o)),ee=(null===(n=null==P?void 0:P.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==Q()),oe=(null===(c=null==P?void 0:P.currentPlatform)||void 0===c?void 0:c.isPluginAvailable)||(g=>{const h=Y.get(g);return!(!(null==h?void 0:h.platforms.has(Q()))&&!V(g))}),V=(null===(S=null==P?void 0:P.currentPlatform)||void 0===S?void 0:S.getPluginHeader)||(g=>{var h;return null===(h=u.PluginHeaders)||void 0===h?void 0:h.find(B=>B.name===g)}),Y=new Map,ae=(null===(m=null==P?void 0:P.currentPlatform)||void 0===m?void 0:m.registerPlugin)||((g,h={})=>{const B=Y.get(g);if(B)return console.warn(`Capacitor plugin "${g}" already registered. Cannot register plugins twice.`),B.proxy;const W=Q(),G=V(g);let A;const le=function(){var p=(0,f.Z)(function*(){return!A&&W in h?A=A="function"==typeof h[W]?yield h[W]():h[W]:null!==R&&!A&&"web"in h&&(A=A="function"==typeof h.web?yield h.web():h.web),A});return function(){return p.apply(this,arguments)}}(),N=p=>{let b;const C=(...D)=>{const F=le().then(L=>{const x=((p,b)=>{var C,D;if(!G){if(p)return null===(D=p[b])||void 0===D?void 0:D.bind(p);throw new O(`"${g}" plugin is not implemented on ${W}`,a.Unimplemented)}{const F=null==G?void 0:G.methods.find(L=>b===L.name);if(F)return"promise"===F.rtype?L=>u.nativePromise(g,b.toString(),L):(L,x)=>u.nativeCallback(g,b.toString(),L,x);if(p)return null===(C=p[b])||void 0===C?void 0:C.bind(p)}})(L,p);if(x){const $=x(...D);return b=null==$?void 0:$.remove,$}throw new O(`"${g}.${p}()" is not implemented on ${W}`,a.Unimplemented)});return"addListener"===p&&(F.remove=(0,f.Z)(function*(){return b()})),F};return C.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(C,"name",{value:p,writable:!1,configurable:!1}),C},k=N("addListener"),z=N("removeListener"),ue=(p,b)=>{const C=k({eventName:p},b),D=function(){var L=(0,f.Z)(function*(){const x=yield C;z({eventName:p,callbackId:x},b)});return function(){return L.apply(this,arguments)}}(),F=new Promise(L=>C.then(()=>L({remove:D})));return F.remove=(0,f.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield D()}),F},j=new Proxy({},{get(p,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return G?ue:k;case"removeListener":return z;default:return N(b)}}});return K[g]=j,Y.set(g,{name:g,proxy:j,platforms:new Set([...Object.keys(h),...G?[W]:[]])}),j});return u.convertFileSrc||(u.convertFileSrc=g=>g),u.getPlatform=Q,u.handleError=g=>o.console.error(g),u.isNativePlatform=ee,u.isPluginAvailable=oe,u.pluginMethodNoop=(g,h,B)=>Promise.reject(`${B} does not have an implementation of "${h}".`),u.registerPlugin=ae,u.Exception=O,u.DEBUG=!!u.DEBUG,u.isLoggingEnabled=!!u.isLoggingEnabled,u.platform=u.getPlatform(),u.isNative=u.isNativePlatform(),u},Z=(o=>o.Capacitor=d(o))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),I=Z.registerPlugin;class l{constructor(t){this.listeners={},this.windowListeners={},t&&(console.warn(`Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=t)}addListener(t,n){var c=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n);const m=this.windowListeners[t];m&&!m.registered&&this.addWindowListener(m);const R=function(){var K=(0,f.Z)(function*(){return c.removeListener(t,n)});return function(){return K.apply(this,arguments)}}(),u=Promise.resolve({remove:R});return Object.defineProperty(u,"remove",{value:(K=(0,f.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield R()}),function(){return K.apply(this,arguments)})}),u;var K}removeAllListeners(){var t=this;return(0,f.Z)(function*(){t.listeners={};for(const n in t.windowListeners)t.removeWindowListener(t.windowListeners[n]);t.windowListeners={}})()}notifyListeners(t,n){const c=this.listeners[t];c&&c.forEach(S=>S(n))}hasListeners(t){return!!this.listeners[t].length}registerWindowListener(t,n){this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:c=>{this.notifyListeners(n,c)}}}unimplemented(t="not implemented"){return new Z.Exception(t,a.Unimplemented)}unavailable(t="not available"){return new Z.Exception(t,a.Unavailable)}removeListener(t,n){var c=this;return(0,f.Z)(function*(){const S=c.listeners[t];if(!S)return;const m=S.indexOf(n);c.listeners[t].splice(m,1),c.listeners[t].length||c.removeWindowListener(c.windowListeners[t])})()}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){!t||(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}}},6052:(J,_,r)=>{r.d(_,{K:()=>y});const y=(0,r(7423).fo)("Storage",{web:()=>r.e(8913).then(r.bind(r,8913)).then(i=>new i.StorageWeb)})},6244:(J,_,r)=>{r.d(_,{Q:()=>w});var f=r(655),y=r(6052),i=r(1269),E=r(5546);let w=(()=>{class T{constructor(a){this.globalService=a,this.defaultQuestionTab=this.globalService.globalQuestion}localSave(a,O){return(0,f.mG)(this,void 0,void 0,function*(){if(O){for(var s=[],d=0,v=0;v<a.length;v++)a[v].favourite&&(s[d]=v,d++);for(v=0;v<a.length;v++)v==s[v]&&(this.defaultQuestionTab[v]=a[v]);this.save(this.defaultQuestionTab)}else this.save(a)})}save(a){this.globalService.globalQuestion=a,y.K.set({key:"questions",value:JSON.stringify(a)})}}return T.\u0275fac=function(a){return new(a||T)(i.LFG(E.U))},T.\u0275prov=i.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"}),T})()},6386:(J,_,r)=>{r.d(_,{Y:()=>e});var f=r(655),y=r(6052),i=r(1269),E=r(5546),w=r(6244),T=r(8779);let e=(()=>{class a{constructor(s,d,v){this.gloabalService=s,this.localSaveQuestion=d,this.toast=v,this.countQustnDonne=0,this.realScore=0,this.tabIndex=[],this.loadScore()}countQuestionDonne(){this.countQustnDonne++}generateScore(){this.realScore=0,this.tabIndex.forEach((d,v)=>{d.nbrTrouve>d.nbrRate&&d.nbrFoisJoue-d.nbrRate>=2||1===d.nbrTrouve&&0===d.nbrRate?this.realScore++:1===d.nbrTrouve&&3===d.nbrRate?this.realScore=this.realScore+1/3:1===d.nbrTrouve&&2===d.nbrRate&&(this.realScore=this.realScore+.5)});let s=Math.round(this.realScore);return this.saveScore(),s}questionDone(s,d,v,Z){let I=0;s++,this.tabIndex.forEach(U=>{U.indexQuestion===s&&(v&&(U.nbrRate++,U.nbrFoisJoue++),d&&(U.nbrTrouve++,U.nbrFoisJoue++),Z&&(U.nbrFoisJoue++,U.nbrFoisIgnore++),I++)}),0==I&&d?this.tabIndex.push({indexQuestion:s,nbrTrouve:1,nbrRate:0,nbrFoisJoue:1,nbrFoisIgnore:0}):0==I&&v?this.tabIndex.push({indexQuestion:s,nbrTrouve:0,nbrRate:1,nbrFoisJoue:1,nbrFoisIgnore:0}):0==I&&Z&&this.tabIndex.push({indexQuestion:s,nbrTrouve:0,nbrRate:0,nbrFoisJoue:1,nbrFoisIgnore:1}),this.saveScore()}saveScore(){y.K.set({key:"Score",value:JSON.stringify(this.tabIndex)})}loadScore(){return(0,f.mG)(this,void 0,void 0,function*(){const{value:s}=yield y.K.get({key:"Score"});s&&0!==s.length&&"[]"!==s?(this.tabIndex=JSON.parse(s),this.realScore=this.generateScore(),this.saveScore()):yield(yield this.toast.create({message:"Chargement...!",duration:2e3,position:"top"})).present()})}renitialise(){this.questions=this.gloabalService.globalQuestion,this.questions.forEach(s=>{""!=s.rep1&&(s.rep1=""),""!=s.rep2&&(s.rep2=""),""!=s.rep3&&(s.rep3="")}),this.localSaveQuestion.localSave(this.questions),this.tabIndex.length=0,this.realScore=0,this.saveScore()}}return a.\u0275fac=function(s){return new(s||a)(i.LFG(E.U),i.LFG(w.Q),i.LFG(T.yF))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},5546:(J,_,r)=>{r.d(_,{U:()=>y});var f=r(1269);let y=(()=>{class i{}return i.\u0275fac=function(w){return new(w||i)},i.\u0275prov=f.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},7991:(J,_,r)=>{r.r(_),r.d(_,{ScoreStatPageModule:()=>H});var f=r(9808),y=r(3075),i=r(8779),E=r(4030),w=r(655),T=r(6052),e=r(1269),a=r(6386),O=r(5546);function s(l,M){1&l&&(e.TgZ(0,"div",8)(1,"h4")(2,"em"),e._uU(3,"No Score yet..."),e.qZA()()())}function d(l,M){if(1&l&&(e.TgZ(0,"div")(1,"ion-item")(2,"ion-label",9)(3,"p")(4,"em")(5,"strong"),e._uU(6),e.qZA()()(),e._UZ(7,"br"),e.TgZ(8,"p"),e._uU(9,"Nombre de fois Jou\xe9es : "),e.TgZ(10,"strong"),e._uU(11),e.qZA()(),e.TgZ(12,"p"),e._uU(13,"Nombre de fois Trouv\xe9es : "),e.TgZ(14,"span",10),e._uU(15),e.qZA()(),e.TgZ(16,"p"),e._uU(17,"Nombre de fois Rat\xe9es : "),e.TgZ(18,"span",11),e._uU(19),e.qZA()(),e.TgZ(20,"p"),e._uU(21,"Nombre de fois Ignor\xe9es : "),e.TgZ(22,"span",12),e._uU(23),e.qZA()()()()()),2&l){const o=M.$implicit;e.xp6(6),e.hij(" Quizz N\xb0: ",o.indexQuestion," "),e.xp6(5),e.hij(" ",o.nbrFoisJoue," "),e.xp6(4),e.hij(" ",o.nbrTrouve," "),e.xp6(4),e.hij(" ",o.nbrRate," "),e.xp6(4),e.hij(" ",o.nbrFoisIgnore," ")}}const v=function(l){return{color:l}},I=[{path:"",component:(()=>{class l{constructor(o,t,n){this.scoreService=o,this.toast=t,this.listOfquestion=n,this.score=0,this.scoreStat=[],this.question=[]}ngOnInit(){this.loadScore(),console.log(this.scoreService.tabIndex),this.question=this.listOfquestion.globalQuestion}loadScore(){return(0,w.mG)(this,void 0,void 0,function*(){const{value:o}=yield T.K.get({key:"Score"});o&&0!==o.length&&"[]"!==o?(this.scoreStat=JSON.parse(o),this.score=this.scoreService.generateScore()):yield(yield this.toast.create({message:"Veuillez Repondre \xe0 au moins 5 quizz !",duration:2e3,position:"top"})).present()})}renit(){return(0,w.mG)(this,void 0,void 0,function*(){this.scoreService.renitialise(),this.scoreStat.length=0,this.score=0,yield(yield this.toast.create({message:"Score et statisque renitialise avec succes !",duration:2e3,position:"top"})).present()})}renitFav(){return(0,w.mG)(this,void 0,void 0,function*(){this.question.forEach((t,n)=>{t.favourite&&(this.question[n].favourite=!1)}),yield(yield this.toast.create({message:"Favorites renitialise avec succes !",duration:2e3,position:"top"})).present()})}refresh(){return(0,w.mG)(this,void 0,void 0,function*(){this.loadScore(),yield(yield this.toast.create({message:"Actualiser avec succes !",duration:2e3,position:"top"})).present()})}getScoreColor(){return this.score>=this.scoreStat.length/2?"greenyellow":"red"}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(a.Y),e.Y36(i.yF),e.Y36(O.U))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-score-stat"]],decls:25,vars:6,consts:[["color","tertiary"],["slot","start"],[1,"ion-padding"],["class","ion-margin",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"ngStyle"],["expand","block","type","submit","color","danger",3,"click"],["expand","block","type","submit","color","primary",3,"click"],[1,"ion-margin"],["text-wrap",""],[1,"nbrTrouve"],[1,"nbrRate"],[1,"nbrIgnorer"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0),e._UZ(2,"ion-back-button",1),e.TgZ(3,"ion-title"),e._uU(4,"Score-Statistic"),e.qZA()()(),e.TgZ(5,"ion-content")(6,"div",2)(7,"ion-list"),e.YNc(8,s,4,0,"div",3),e.YNc(9,d,24,5,"div",4),e.qZA()(),e.TgZ(10,"div",2)(11,"p")(12,"span"),e._uU(13,"Score Total : "),e.qZA(),e.TgZ(14,"span",5)(15,"em"),e._uU(16),e.qZA()()(),e.TgZ(17,"ion-button",6),e.NdJ("click",function(){return t.renit()}),e._uU(18," Renitialise Tout "),e.qZA(),e.TgZ(19,"p")(20,"ion-button",6),e.NdJ("click",function(){return t.renitFav()}),e._uU(21," Renitialise tous mes favorites "),e.qZA()(),e.TgZ(22,"p")(23,"ion-button",7),e.NdJ("click",function(){return t.refresh()}),e._uU(24," Actualise "),e.qZA()()()()),2&o&&(e.xp6(8),e.Q6J("ngIf",0===t.scoreStat.length),e.xp6(1),e.Q6J("ngForOf",t.scoreStat),e.xp6(5),e.Q6J("ngStyle",e.VKq(4,v,t.getScoreColor())),e.xp6(2),e.hij(" ",t.score," "))},directives:[i.Gu,i.sr,i.oU,i.cs,i.wd,i.W2,i.q_,f.O5,f.sg,i.Ie,i.Q$,f.PC,i.YG],styles:[".nbrTrouve[_ngcontent-%COMP%]{color:#adff2f}.nbrRate[_ngcontent-%COMP%]{color:red}"]}),l})()}];let U=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[E.Bz.forChild(I)],E.Bz]}),l})(),H=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[f.ez,y.u5,i.Pc,U]]}),l})()}}]);