import{_ as c,a as ue,r as ot,J as Ke,K as Ie,e as oe,s as ct,g as lt,p as ut,q as dt,d as ft,c as ht,t as mt,l as Te,k as pe,L as kt,M as yt,N as pt,m as gt,O as vt,P as Tt,Q as bt,R as je,S as Be,T as qe,U as Ge,V as Xe,W as He,X as Ue,Y as xt,f as _t,u as wt,Z as Dt,$ as St,a0 as Ct,a1 as Et,a2 as Mt,a3 as It,a4 as At}from"./md-DDOO1ugQ.js";import"./modules/vue-BY2y9pTo.js";import"./monaco/bundled-types-BomO3YJD.js";import"./modules/file-saver-igGfcqei.js";import"./lz-string-7V7f_eN4.js";import"./index-CjUswqsu.js";import"./modules/shiki-Ib1F0Tte.js";import"./slidev/default-BKAGt7Xj.js";import"./slidev/context-Cv-l1RMc.js";var Lt=Ie({"../../node_modules/.pnpm/dayjs@1.11.12/node_modules/dayjs/plugin/isoWeek.js"(e,t){(function(s,r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define(r):(s=typeof globalThis<"u"?globalThis:s||self).dayjs_plugin_isoWeek=r()})(e,function(){var s="day";return function(r,n,m){var k=c(function(b){return b.add(4-b.isoWeekday(),s)},"a"),x=n.prototype;x.isoWeekYear=function(){return k(this).year()},x.isoWeek=function(b){if(!this.$utils().u(b))return this.add(7*(b-this.isoWeek()),s);var S,E,V,P,N=k(this),f=(S=this.isoWeekYear(),E=this.$u,V=(E?m.utc:m)().year(S).startOf("year"),P=4-V.isoWeekday(),V.isoWeekday()>4&&(P+=7),V.add(P,s));return N.diff(f,"week")+1},x.isoWeekday=function(b){return this.$utils().u(b)?this.day()||7:this.day(this.day()%7?b:b-7)};var W=x.startOf;x.startOf=function(b,S){var E=this.$utils(),V=!!E.u(S)||S;return E.p(b)==="isoweek"?V?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):W.bind(this)(b,S)}}})}}),Yt=Ie({"../../node_modules/.pnpm/dayjs@1.11.12/node_modules/dayjs/plugin/customParseFormat.js"(e,t){(function(s,r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define(r):(s=typeof globalThis<"u"?globalThis:s||self).dayjs_plugin_customParseFormat=r()})(e,function(){var s={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,m=/\d\d?/,k=/\d*[^-_:/,()\s\d]+/,x={},W=c(function(f){return(f=+f)+(f>68?1900:2e3)},"s"),b=c(function(f){return function(D){this[f]=+D}},"a"),S=[/[+-]\d\d:?(\d\d)?|Z/,function(f){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var A=D.match(/([+-]|\d\d)/g),L=60*A[1]+(+A[2]||0);return L===0?0:A[0]==="+"?-L:L}(f)}],E=c(function(f){var D=x[f];return D&&(D.indexOf?D:D.s.concat(D.f))},"h"),V=c(function(f,D){var A,L=x.meridiem;if(L){for(var j=1;j<=24;j+=1)if(f.indexOf(L(j,0,D))>-1){A=j>12;break}}else A=f===(D?"pm":"PM");return A},"u"),P={A:[k,function(f){this.afternoon=V(f,!1)}],a:[k,function(f){this.afternoon=V(f,!0)}],S:[/\d/,function(f){this.milliseconds=100*+f}],SS:[n,function(f){this.milliseconds=10*+f}],SSS:[/\d{3}/,function(f){this.milliseconds=+f}],s:[m,b("seconds")],ss:[m,b("seconds")],m:[m,b("minutes")],mm:[m,b("minutes")],H:[m,b("hours")],h:[m,b("hours")],HH:[m,b("hours")],hh:[m,b("hours")],D:[m,b("day")],DD:[n,b("day")],Do:[k,function(f){var D=x.ordinal,A=f.match(/\d+/);if(this.day=A[0],D)for(var L=1;L<=31;L+=1)D(L).replace(/\[|\]/g,"")===f&&(this.day=L)}],M:[m,b("month")],MM:[n,b("month")],MMM:[k,function(f){var D=E("months"),A=(E("monthsShort")||D.map(function(L){return L.slice(0,3)})).indexOf(f)+1;if(A<1)throw new Error;this.month=A%12||A}],MMMM:[k,function(f){var D=E("months").indexOf(f)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,b("year")],YY:[n,function(f){this.year=W(f)}],YYYY:[/\d{4}/,b("year")],Z:S,ZZ:S};function N(f){var D,A;D=f,A=x&&x.formats;for(var L=(f=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(_,T,v){var y=v&&v.toUpperCase();return T||A[v]||s[v]||A[y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(w,o,u){return o||u.slice(1)})})).match(r),j=L.length,B=0;B<j;B+=1){var Q=L[B],G=P[Q],q=G&&G[0],p=G&&G[1];L[B]=p?{regex:q,parser:p}:Q.replace(/^\[|\]$/g,"")}return function(_){for(var T={},v=0,y=0;v<j;v+=1){var w=L[v];if(typeof w=="string")y+=w.length;else{var o=w.regex,u=w.parser,h=_.slice(y),d=o.exec(h)[0];u.call(T,d),_=_.replace(d,"")}}return function(g){var i=g.afternoon;if(i!==void 0){var l=g.hours;i?l<12&&(g.hours+=12):l===12&&(g.hours=0),delete g.afternoon}}(T),T}}return c(N,"c"),function(f,D,A){A.p.customParseFormat=!0,f&&f.parseTwoDigitYear&&(W=f.parseTwoDigitYear);var L=D.prototype,j=L.parse;L.parse=function(B){var Q=B.date,G=B.utc,q=B.args;this.$u=G;var p=q[1];if(typeof p=="string"){var _=q[2]===!0,T=q[3]===!0,v=_||T,y=q[2];T&&(y=q[2]),x=this.$locale(),!_&&y&&(x=A.Ls[y]),this.$d=function(h,d,g){try{if(["x","X"].indexOf(d)>-1)return new Date((d==="X"?1e3:1)*h);var i=N(d)(h),l=i.year,a=i.month,I=i.day,C=i.hours,M=i.minutes,z=i.seconds,Y=i.milliseconds,F=i.zone,X=new Date,te=I||(l||a?1:X.getDate()),se=l||X.getFullYear(),ae=0;l&&!a||(ae=a>0?a-1:X.getMonth());var de=C||0,re=M||0,R=z||0,J=Y||0;return F?new Date(Date.UTC(se,ae,te,de,re,R,J+60*F.offset*1e3)):g?new Date(Date.UTC(se,ae,te,de,re,R,J)):new Date(se,ae,te,de,re,R,J)}catch{return new Date("")}}(Q,p,G),this.init(),y&&y!==!0&&(this.$L=this.locale(y).$L),v&&Q!=this.format(p)&&(this.$d=new Date("")),x={}}else if(p instanceof Array)for(var w=p.length,o=1;o<=w;o+=1){q[1]=p[o-1];var u=A.apply(this,q);if(u.isValid()){this.$d=u.$d,this.$L=u.$L,this.init();break}o===w&&(this.$d=new Date(""))}else j.call(this,B)}}})}}),Ft=Ie({"../../node_modules/.pnpm/dayjs@1.11.12/node_modules/dayjs/plugin/advancedFormat.js"(e,t){(function(s,r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define(r):(s=typeof globalThis<"u"?globalThis:s||self).dayjs_plugin_advancedFormat=r()})(e,function(){return function(s,r){var n=r.prototype,m=n.format;n.format=function(k){var x=this,W=this.$locale();if(!this.isValid())return m.bind(this)(k);var b=this.$utils(),S=(k||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(E){switch(E){case"Q":return Math.ceil((x.$M+1)/3);case"Do":return W.ordinal(x.$D);case"gggg":return x.weekYear();case"GGGG":return x.isoWeekYear();case"wo":return W.ordinal(x.week(),"W");case"w":case"ww":return b.s(x.week(),E==="w"?1:2,"0");case"W":case"WW":return b.s(x.isoWeek(),E==="W"?1:2,"0");case"k":case"kk":return b.s(String(x.$H===0?24:x.$H),E==="k"?1:2,"0");case"X":return Math.floor(x.$d.getTime()/1e3);case"x":return x.$d.getTime();case"z":return"["+x.offsetName()+"]";case"zzz":return"["+x.offsetName("long")+"]";default:return E}});return m.bind(this)(S)}}})}}),Se=function(){var e=c(function(w,o,u,h){for(u=u||{},h=w.length;h--;u[w[h]]=o);return u},"o"),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],s=[1,26],r=[1,27],n=[1,28],m=[1,29],k=[1,30],x=[1,31],W=[1,32],b=[1,33],S=[1,34],E=[1,9],V=[1,10],P=[1,11],N=[1,12],f=[1,13],D=[1,14],A=[1,15],L=[1,16],j=[1,19],B=[1,20],Q=[1,21],G=[1,22],q=[1,23],p=[1,25],_=[1,35],T={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(o,u,h,d,g,i,l){var a=i.length-1;switch(g){case 1:return i[a-1];case 2:this.$=[];break;case 3:i[a-1].push(i[a]),this.$=i[a-1];break;case 4:case 5:this.$=i[a];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(i[a].substr(11)),this.$=i[a].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=i[a].substr(18);break;case 19:d.TopAxis(),this.$=i[a].substr(8);break;case 20:d.setAxisFormat(i[a].substr(11)),this.$=i[a].substr(11);break;case 21:d.setTickInterval(i[a].substr(13)),this.$=i[a].substr(13);break;case 22:d.setExcludes(i[a].substr(9)),this.$=i[a].substr(9);break;case 23:d.setIncludes(i[a].substr(9)),this.$=i[a].substr(9);break;case 24:d.setTodayMarker(i[a].substr(12)),this.$=i[a].substr(12);break;case 27:d.setDiagramTitle(i[a].substr(6)),this.$=i[a].substr(6);break;case 28:this.$=i[a].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=i[a].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(i[a].substr(8)),this.$=i[a].substr(8);break;case 33:d.addTask(i[a-1],i[a]),this.$="task";break;case 34:this.$=i[a-1],d.setClickEvent(i[a-1],i[a],null);break;case 35:this.$=i[a-2],d.setClickEvent(i[a-2],i[a-1],i[a]);break;case 36:this.$=i[a-2],d.setClickEvent(i[a-2],i[a-1],null),d.setLink(i[a-2],i[a]);break;case 37:this.$=i[a-3],d.setClickEvent(i[a-3],i[a-2],i[a-1]),d.setLink(i[a-3],i[a]);break;case 38:this.$=i[a-2],d.setClickEvent(i[a-2],i[a],null),d.setLink(i[a-2],i[a-1]);break;case 39:this.$=i[a-3],d.setClickEvent(i[a-3],i[a-1],i[a]),d.setLink(i[a-3],i[a-2]);break;case 40:this.$=i[a-1],d.setLink(i[a-1],i[a]);break;case 41:case 47:this.$=i[a-1]+" "+i[a];break;case 42:case 43:case 45:this.$=i[a-2]+" "+i[a-1]+" "+i[a];break;case 44:case 46:this.$=i[a-3]+" "+i[a-2]+" "+i[a-1]+" "+i[a];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:s,13:r,14:n,15:m,16:k,17:x,18:W,19:18,20:b,21:S,22:E,23:V,24:P,25:N,26:f,27:D,28:A,29:L,30:j,31:B,33:Q,35:G,36:q,37:24,38:p,40:_},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:s,13:r,14:n,15:m,16:k,17:x,18:W,19:18,20:b,21:S,22:E,23:V,24:P,25:N,26:f,27:D,28:A,29:L,30:j,31:B,33:Q,35:G,36:q,37:24,38:p,40:_},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:c(function(o,u){if(u.recoverable)this.trace(o);else{var h=new Error(o);throw h.hash=u,h}},"parseError"),parse:c(function(o){var u=this,h=[0],d=[],g=[null],i=[],l=this.table,a="",I=0,C=0,M=2,z=1,Y=i.slice.call(arguments,1),F=Object.create(this.lexer),X={yy:{}};for(var te in this.yy)Object.prototype.hasOwnProperty.call(this.yy,te)&&(X.yy[te]=this.yy[te]);F.setInput(o,X.yy),X.yy.lexer=F,X.yy.parser=this,typeof F.yylloc>"u"&&(F.yylloc={});var se=F.yylloc;i.push(se);var ae=F.options&&F.options.ranges;typeof X.yy.parseError=="function"?this.parseError=X.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function de(U){h.length=h.length-2*U,g.length=g.length-U,i.length=i.length-U}c(de,"popStack");function re(){var U;return U=d.pop()||F.lex()||z,typeof U!="number"&&(U instanceof Array&&(d=U,U=d.pop()),U=u.symbols_[U]||U),U}c(re,"lex");for(var R,J,H,_e,ne={},ke,$,Ne,ye;;){if(J=h[h.length-1],this.defaultActions[J]?H=this.defaultActions[J]:((R===null||typeof R>"u")&&(R=re()),H=l[J]&&l[J][R]),typeof H>"u"||!H.length||!H[0]){var we="";ye=[];for(ke in l[J])this.terminals_[ke]&&ke>M&&ye.push("'"+this.terminals_[ke]+"'");F.showPosition?we="Parse error on line "+(I+1)+`:
`+F.showPosition()+`
Expecting `+ye.join(", ")+", got '"+(this.terminals_[R]||R)+"'":we="Parse error on line "+(I+1)+": Unexpected "+(R==z?"end of input":"'"+(this.terminals_[R]||R)+"'"),this.parseError(we,{text:F.match,token:this.terminals_[R]||R,line:F.yylineno,loc:se,expected:ye})}if(H[0]instanceof Array&&H.length>1)throw new Error("Parse Error: multiple actions possible at state: "+J+", token: "+R);switch(H[0]){case 1:h.push(R),g.push(F.yytext),i.push(F.yylloc),h.push(H[1]),R=null,C=F.yyleng,a=F.yytext,I=F.yylineno,se=F.yylloc;break;case 2:if($=this.productions_[H[1]][1],ne.$=g[g.length-$],ne._$={first_line:i[i.length-($||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-($||1)].first_column,last_column:i[i.length-1].last_column},ae&&(ne._$.range=[i[i.length-($||1)].range[0],i[i.length-1].range[1]]),_e=this.performAction.apply(ne,[a,C,I,X.yy,H[1],g,i].concat(Y)),typeof _e<"u")return _e;$&&(h=h.slice(0,-1*$*2),g=g.slice(0,-1*$),i=i.slice(0,-1*$)),h.push(this.productions_[H[1]][0]),g.push(ne.$),i.push(ne._$),Ne=l[h[h.length-2]][h[h.length-1]],h.push(Ne);break;case 3:return!0}}return!0},"parse")},v=function(){var w={EOF:1,parseError:c(function(u,h){if(this.yy.parser)this.yy.parser.parseError(u,h);else throw new Error(u)},"parseError"),setInput:c(function(o,u){return this.yy=u||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var u=o.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:c(function(o){var u=o.length,h=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var g=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===d.length?this.yylloc.first_column:0)+d[d.length-h.length].length-h[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[g[0],g[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(o){this.unput(this.match.slice(o))},"less"),pastInput:c(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var o=this.pastInput(),u=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:c(function(o,u){var h,d,g;if(this.options.backtrack_lexer&&(g={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(g.yylloc.range=this.yylloc.range.slice(0))),d=o[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],h=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var i in g)this[i]=g[i];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,u,h,d;this._more||(this.yytext="",this.match="");for(var g=this._currentRules(),i=0;i<g.length;i++)if(h=this._input.match(this.rules[g[i]]),h&&(!u||h[0].length>u[0].length)){if(u=h,d=i,this.options.backtrack_lexer){if(o=this.test_match(h,g[i]),o!==!1)return o;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(o=this.test_match(u,g[d]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var u=this.next();return u||this.lex()},"lex"),begin:c(function(u){this.conditionStack.push(u)},"begin"),popState:c(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:c(function(u){this.begin(u)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(u,h,d,g){switch(d){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return w}();T.lexer=v;function y(){this.yy={}}return c(y,"Parser"),y.prototype=T,T.Parser=y,new y}();Se.parser=Se;var Wt=Se,Vt=ue(ot()),Z=ue(Ke()),Ot=ue(Lt()),Pt=ue(Yt()),zt=ue(Ft());Z.default.extend(Ot.default);Z.default.extend(Pt.default);Z.default.extend(zt.default);var Ze={friday:5,saturday:6},K="",Ae="",Le=void 0,Ye="",fe=[],he=[],Fe=new Map,We=[],be=[],le="",Ve="",$e=["active","done","crit","milestone"],Oe=[],me=!1,Pe=!1,ze="sunday",xe="saturday",Ce=0,Rt=c(function(){We=[],be=[],le="",Oe=[],ge=0,Me=void 0,ve=void 0,O=[],K="",Ae="",Ve="",Le=void 0,Ye="",fe=[],he=[],me=!1,Pe=!1,Ce=0,Fe=new Map,mt(),ze="sunday",xe="saturday"},"clear"),Nt=c(function(e){Ae=e},"setAxisFormat"),jt=c(function(){return Ae},"getAxisFormat"),Bt=c(function(e){Le=e},"setTickInterval"),qt=c(function(){return Le},"getTickInterval"),Gt=c(function(e){Ye=e},"setTodayMarker"),Xt=c(function(){return Ye},"getTodayMarker"),Ht=c(function(e){K=e},"setDateFormat"),Ut=c(function(){me=!0},"enableInclusiveEndDates"),Zt=c(function(){return me},"endDatesAreInclusive"),Qt=c(function(){Pe=!0},"enableTopAxis"),Jt=c(function(){return Pe},"topAxisEnabled"),Kt=c(function(e){Ve=e},"setDisplayMode"),$t=c(function(){return Ve},"getDisplayMode"),es=c(function(){return K},"getDateFormat"),ts=c(function(e){fe=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),ss=c(function(){return fe},"getIncludes"),is=c(function(e){he=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),as=c(function(){return he},"getExcludes"),rs=c(function(){return Fe},"getLinks"),ns=c(function(e){le=e,We.push(e)},"addSection"),os=c(function(){return We},"getSections"),cs=c(function(){let e=Qe();const t=10;let s=0;for(;!e&&s<t;)e=Qe(),s++;return be=O,be},"getTasks"),et=c(function(e,t,s,r){return r.includes(e.format(t.trim()))?!1:s.includes("weekends")&&(e.isoWeekday()===Ze[xe]||e.isoWeekday()===Ze[xe]+1)||s.includes(e.format("dddd").toLowerCase())?!0:s.includes(e.format(t.trim()))},"isInvalidDate"),ls=c(function(e){ze=e},"setWeekday"),us=c(function(){return ze},"getWeekday"),ds=c(function(e){xe=e},"setWeekend"),tt=c(function(e,t,s,r){if(!s.length||e.manualEndTime)return;let n;e.startTime instanceof Date?n=(0,Z.default)(e.startTime):n=(0,Z.default)(e.startTime,t,!0),n=n.add(1,"d");let m;e.endTime instanceof Date?m=(0,Z.default)(e.endTime):m=(0,Z.default)(e.endTime,t,!0);const[k,x]=fs(n,m,t,s,r);e.endTime=k.toDate(),e.renderEndTime=x},"checkTaskDates"),fs=c(function(e,t,s,r,n){let m=!1,k=null;for(;e<=t;)m||(k=t.toDate()),m=et(e,s,r,n),m&&(t=t.add(1,"d")),e=e.add(1,"d");return[t,k]},"fixTaskDates"),Ee=c(function(e,t,s){s=s.trim();const n=/^after\s+(?<ids>[\d\w- ]+)/.exec(s);if(n!==null){let k=null;for(const W of n.groups.ids.split(" ")){let b=ie(W);b!==void 0&&(!k||b.endTime>k.endTime)&&(k=b)}if(k)return k.endTime;const x=new Date;return x.setHours(0,0,0,0),x}let m=(0,Z.default)(s,t.trim(),!0);if(m.isValid())return m.toDate();{Te.debug("Invalid date:"+s),Te.debug("With date format:"+t.trim());const k=new Date(s);if(k===void 0||isNaN(k.getTime())||k.getFullYear()<-1e4||k.getFullYear()>1e4)throw new Error("Invalid date:"+s);return k}},"getStartDate"),st=c(function(e){const t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t!==null?[Number.parseFloat(t[1]),t[2]]:[NaN,"ms"]},"parseDuration"),it=c(function(e,t,s,r=!1){s=s.trim();const m=/^until\s+(?<ids>[\d\w- ]+)/.exec(s);if(m!==null){let S=null;for(const V of m.groups.ids.split(" ")){let P=ie(V);P!==void 0&&(!S||P.startTime<S.startTime)&&(S=P)}if(S)return S.startTime;const E=new Date;return E.setHours(0,0,0,0),E}let k=(0,Z.default)(s,t.trim(),!0);if(k.isValid())return r&&(k=k.add(1,"d")),k.toDate();let x=(0,Z.default)(e);const[W,b]=st(s);if(!Number.isNaN(W)){const S=x.add(W,b);S.isValid()&&(x=S)}return x.toDate()},"getEndDate"),ge=0,ce=c(function(e){return e===void 0?(ge=ge+1,"task"+ge):e},"parseId"),hs=c(function(e,t){let s;t.substr(0,1)===":"?s=t.substr(1,t.length):s=t;const r=s.split(","),n={};Re(r,n,$e);for(let k=0;k<r.length;k++)r[k]=r[k].trim();let m="";switch(r.length){case 1:n.id=ce(),n.startTime=e.endTime,m=r[0];break;case 2:n.id=ce(),n.startTime=Ee(void 0,K,r[0]),m=r[1];break;case 3:n.id=ce(r[0]),n.startTime=Ee(void 0,K,r[1]),m=r[2];break}return m&&(n.endTime=it(n.startTime,K,m,me),n.manualEndTime=(0,Z.default)(m,"YYYY-MM-DD",!0).isValid(),tt(n,K,he,fe)),n},"compileData"),ms=c(function(e,t){let s;t.substr(0,1)===":"?s=t.substr(1,t.length):s=t;const r=s.split(","),n={};Re(r,n,$e);for(let m=0;m<r.length;m++)r[m]=r[m].trim();switch(r.length){case 1:n.id=ce(),n.startTime={type:"prevTaskEnd",id:e},n.endTime={data:r[0]};break;case 2:n.id=ce(),n.startTime={type:"getStartDate",startData:r[0]},n.endTime={data:r[1]};break;case 3:n.id=ce(r[0]),n.startTime={type:"getStartDate",startData:r[1]},n.endTime={data:r[2]};break}return n},"parseData"),Me,ve,O=[],at={},ks=c(function(e,t){const s={section:le,type:le,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},r=ms(ve,t);s.raw.startTime=r.startTime,s.raw.endTime=r.endTime,s.id=r.id,s.prevTaskId=ve,s.active=r.active,s.done=r.done,s.crit=r.crit,s.milestone=r.milestone,s.order=Ce,Ce++;const n=O.push(s);ve=s.id,at[s.id]=n-1},"addTask"),ie=c(function(e){const t=at[e];return O[t]},"findTaskById"),ys=c(function(e,t){const s={section:le,type:le,description:e,task:e,classes:[]},r=hs(Me,t);s.startTime=r.startTime,s.endTime=r.endTime,s.id=r.id,s.active=r.active,s.done=r.done,s.crit=r.crit,s.milestone=r.milestone,Me=s,be.push(s)},"addTaskOrg"),Qe=c(function(){const e=c(function(s){const r=O[s];let n="";switch(O[s].raw.startTime.type){case"prevTaskEnd":{const m=ie(r.prevTaskId);r.startTime=m.endTime;break}case"getStartDate":n=Ee(void 0,K,O[s].raw.startTime.startData),n&&(O[s].startTime=n);break}return O[s].startTime&&(O[s].endTime=it(O[s].startTime,K,O[s].raw.endTime.data,me),O[s].endTime&&(O[s].processed=!0,O[s].manualEndTime=(0,Z.default)(O[s].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tt(O[s],K,he,fe))),O[s].processed},"compileTask");let t=!0;for(const[s,r]of O.entries())e(s),t=t&&r.processed;return t},"compileTasks"),ps=c(function(e,t){let s=t;oe().securityLevel!=="loose"&&(s=(0,Vt.sanitizeUrl)(t)),e.split(",").forEach(function(r){ie(r)!==void 0&&(nt(r,()=>{window.open(s,"_self")}),Fe.set(r,s))}),rt(e,"clickable")},"setLink"),rt=c(function(e,t){e.split(",").forEach(function(s){let r=ie(s);r!==void 0&&r.classes.push(t)})},"setClass"),gs=c(function(e,t,s){if(oe().securityLevel!=="loose"||t===void 0)return;let r=[];if(typeof s=="string"){r=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let m=0;m<r.length;m++){let k=r[m].trim();k.startsWith('"')&&k.endsWith('"')&&(k=k.substr(1,k.length-2)),r[m]=k}}r.length===0&&r.push(e),ie(e)!==void 0&&nt(e,()=>{wt.runFunc(t,...r)})},"setClickFun"),nt=c(function(e,t){Oe.push(function(){const s=document.querySelector(`[id="${e}"]`);s!==null&&s.addEventListener("click",function(){t()})},function(){const s=document.querySelector(`[id="${e}-text"]`);s!==null&&s.addEventListener("click",function(){t()})})},"pushFun"),vs=c(function(e,t,s){e.split(",").forEach(function(r){gs(r,t,s)}),rt(e,"clickable")},"setClickEvent"),Ts=c(function(e){Oe.forEach(function(t){t(e)})},"bindFunctions"),bs={getConfig:c(()=>oe().gantt,"getConfig"),clear:Rt,setDateFormat:Ht,getDateFormat:es,enableInclusiveEndDates:Ut,endDatesAreInclusive:Zt,enableTopAxis:Qt,topAxisEnabled:Jt,setAxisFormat:Nt,getAxisFormat:jt,setTickInterval:Bt,getTickInterval:qt,setTodayMarker:Gt,getTodayMarker:Xt,setAccTitle:ct,getAccTitle:lt,setDiagramTitle:ut,getDiagramTitle:dt,setDisplayMode:Kt,getDisplayMode:$t,setAccDescription:ft,getAccDescription:ht,addSection:ns,getSections:os,getTasks:cs,addTask:ks,findTaskById:ie,addTaskOrg:ys,setIncludes:ts,getIncludes:ss,setExcludes:is,getExcludes:as,setClickEvent:vs,setLink:ps,getLinks:rs,bindFunctions:Ts,parseDuration:st,isInvalidDate:et,setWeekday:ls,getWeekday:us,setWeekend:ds};function Re(e,t,s){let r=!0;for(;r;)r=!1,s.forEach(function(n){const m="^\\s*"+n+"\\s*$",k=new RegExp(m);e[0].match(k)&&(t[n]=!0,e.shift(1),r=!0)})}c(Re,"getTaskTags");var De=ue(Ke()),xs=c(function(){Te.debug("Something is calling, setConf, remove the call")},"setConf"),Je={monday:Dt,tuesday:St,wednesday:Ct,thursday:Et,friday:Mt,saturday:It,sunday:At},_s=c((e,t)=>{let s=[...e].map(()=>-1/0),r=[...e].sort((m,k)=>m.startTime-k.startTime||m.order-k.order),n=0;for(const m of r)for(let k=0;k<s.length;k++)if(m.startTime>=s[k]){s[k]=m.endTime,m.order=k+t,k>n&&(n=k);break}return n},"getMaxIntersections"),ee,ws=c(function(e,t,s,r){const n=oe().gantt,m=oe().securityLevel;let k;m==="sandbox"&&(k=pe("#i"+t));const x=m==="sandbox"?pe(k.nodes()[0].contentDocument.body):pe("body"),W=m==="sandbox"?k.nodes()[0].contentDocument:document,b=W.getElementById(t);ee=b.parentElement.offsetWidth,ee===void 0&&(ee=1200),n.useWidth!==void 0&&(ee=n.useWidth);const S=r.db.getTasks();let E=[];for(const p of S)E.push(p.type);E=q(E);const V={};let P=2*n.topPadding;if(r.db.getDisplayMode()==="compact"||n.displayMode==="compact"){const p={};for(const T of S)p[T.section]===void 0?p[T.section]=[T]:p[T.section].push(T);let _=0;for(const T of Object.keys(p)){const v=_s(p[T],_)+1;_+=v,P+=v*(n.barHeight+n.barGap),V[T]=v}}else{P+=S.length*(n.barHeight+n.barGap);for(const p of E)V[p]=S.filter(_=>_.type===p).length}b.setAttribute("viewBox","0 0 "+ee+" "+P);const N=x.select(`[id="${t}"]`),f=kt().domain([yt(S,function(p){return p.startTime}),pt(S,function(p){return p.endTime})]).rangeRound([0,ee-n.leftPadding-n.rightPadding]);function D(p,_){const T=p.startTime,v=_.startTime;let y=0;return T>v?y=1:T<v&&(y=-1),y}c(D,"taskCompare"),S.sort(D),A(S,ee,P),gt(N,P,ee,n.useMaxWidth),N.append("text").text(r.db.getDiagramTitle()).attr("x",ee/2).attr("y",n.titleTopMargin).attr("class","titleText");function A(p,_,T){const v=n.barHeight,y=v+n.barGap,w=n.topPadding,o=n.leftPadding,u=vt().domain([0,E.length]).range(["#00B9FA","#F95002"]).interpolate(Tt);j(y,w,o,_,T,p,r.db.getExcludes(),r.db.getIncludes()),B(o,w,_,T),L(p,y,w,o,v,u,_),Q(y,w),G(o,w,_,T)}c(A,"makeGantt");function L(p,_,T,v,y,w,o){const h=[...new Set(p.map(l=>l.order))].map(l=>p.find(a=>a.order===l));N.append("g").selectAll("rect").data(h).enter().append("rect").attr("x",0).attr("y",function(l,a){return a=l.order,a*_+T-2}).attr("width",function(){return o-n.rightPadding/2}).attr("height",_).attr("class",function(l){for(const[a,I]of E.entries())if(l.type===I)return"section section"+a%n.numberSectionStyles;return"section section0"});const d=N.append("g").selectAll("rect").data(p).enter(),g=r.db.getLinks();if(d.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?f(l.startTime)+v+.5*(f(l.endTime)-f(l.startTime))-.5*y:f(l.startTime)+v}).attr("y",function(l,a){return a=l.order,a*_+T}).attr("width",function(l){return l.milestone?y:f(l.renderEndTime||l.endTime)-f(l.startTime)}).attr("height",y).attr("transform-origin",function(l,a){return a=l.order,(f(l.startTime)+v+.5*(f(l.endTime)-f(l.startTime))).toString()+"px "+(a*_+T+.5*y).toString()+"px"}).attr("class",function(l){const a="task";let I="";l.classes.length>0&&(I=l.classes.join(" "));let C=0;for(const[z,Y]of E.entries())l.type===Y&&(C=z%n.numberSectionStyles);let M="";return l.active?l.crit?M+=" activeCrit":M=" active":l.done?l.crit?M=" doneCrit":M=" done":l.crit&&(M+=" crit"),M.length===0&&(M=" task"),l.milestone&&(M=" milestone "+M),M+=C,M+=" "+I,a+M}),d.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",n.fontSize).attr("x",function(l){let a=f(l.startTime),I=f(l.renderEndTime||l.endTime);l.milestone&&(a+=.5*(f(l.endTime)-f(l.startTime))-.5*y),l.milestone&&(I=a+y);const C=this.getBBox().width;return C>I-a?I+C+1.5*n.leftPadding>o?a+v-5:I+v+5:(I-a)/2+a+v}).attr("y",function(l,a){return a=l.order,a*_+n.barHeight/2+(n.fontSize/2-2)+T}).attr("text-height",y).attr("class",function(l){const a=f(l.startTime);let I=f(l.endTime);l.milestone&&(I=a+y);const C=this.getBBox().width;let M="";l.classes.length>0&&(M=l.classes.join(" "));let z=0;for(const[F,X]of E.entries())l.type===X&&(z=F%n.numberSectionStyles);let Y="";return l.active&&(l.crit?Y="activeCritText"+z:Y="activeText"+z),l.done?l.crit?Y=Y+" doneCritText"+z:Y=Y+" doneText"+z:l.crit&&(Y=Y+" critText"+z),l.milestone&&(Y+=" milestoneText"),C>I-a?I+C+1.5*n.leftPadding>o?M+" taskTextOutsideLeft taskTextOutside"+z+" "+Y:M+" taskTextOutsideRight taskTextOutside"+z+" "+Y+" width-"+C:M+" taskText taskText"+z+" "+Y+" width-"+C}),oe().securityLevel==="sandbox"){let l;l=pe("#i"+t);const a=l.nodes()[0].contentDocument;d.filter(function(I){return g.has(I.id)}).each(function(I){var C=a.querySelector("#"+I.id),M=a.querySelector("#"+I.id+"-text");const z=C.parentNode;var Y=a.createElement("a");Y.setAttribute("xlink:href",g.get(I.id)),Y.setAttribute("target","_top"),z.appendChild(Y),Y.appendChild(C),Y.appendChild(M)})}}c(L,"drawRects");function j(p,_,T,v,y,w,o,u){if(o.length===0&&u.length===0)return;let h,d;for(const{startTime:C,endTime:M}of w)(h===void 0||C<h)&&(h=C),(d===void 0||M>d)&&(d=M);if(!h||!d)return;if((0,De.default)(d).diff((0,De.default)(h),"year")>5){Te.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const g=r.db.getDateFormat(),i=[];let l=null,a=(0,De.default)(h);for(;a.valueOf()<=d;)r.db.isInvalidDate(a,g,o,u)?l?l.end=a:l={start:a,end:a}:l&&(i.push(l),l=null),a=a.add(1,"d");N.append("g").selectAll("rect").data(i).enter().append("rect").attr("id",function(C){return"exclude-"+C.start.format("YYYY-MM-DD")}).attr("x",function(C){return f(C.start)+T}).attr("y",n.gridLineStartPadding).attr("width",function(C){const M=C.end.add(1,"day");return f(M)-f(C.start)}).attr("height",y-_-n.gridLineStartPadding).attr("transform-origin",function(C,M){return(f(C.start)+T+.5*(f(C.end)-f(C.start))).toString()+"px "+(M*p+.5*y).toString()+"px"}).attr("class","exclude-range")}c(j,"drawExcludeDays");function B(p,_,T,v){let y=bt(f).tickSize(-v+_+n.gridLineStartPadding).tickFormat(je(r.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));const o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||n.tickInterval);if(o!==null){const u=o[1],h=o[2],d=r.db.getWeekday()||n.weekday;switch(h){case"millisecond":y.ticks(Ue.every(u));break;case"second":y.ticks(He.every(u));break;case"minute":y.ticks(Xe.every(u));break;case"hour":y.ticks(Ge.every(u));break;case"day":y.ticks(qe.every(u));break;case"week":y.ticks(Je[d].every(u));break;case"month":y.ticks(Be.every(u));break}}if(N.append("g").attr("class","grid").attr("transform","translate("+p+", "+(v-50)+")").call(y).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||n.topAxis){let u=xt(f).tickSize(-v+_+n.gridLineStartPadding).tickFormat(je(r.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));if(o!==null){const h=o[1],d=o[2],g=r.db.getWeekday()||n.weekday;switch(d){case"millisecond":u.ticks(Ue.every(h));break;case"second":u.ticks(He.every(h));break;case"minute":u.ticks(Xe.every(h));break;case"hour":u.ticks(Ge.every(h));break;case"day":u.ticks(qe.every(h));break;case"week":u.ticks(Je[g].every(h));break;case"month":u.ticks(Be.every(h));break}}N.append("g").attr("class","grid").attr("transform","translate("+p+", "+_+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(B,"makeGrid");function Q(p,_){let T=0;const v=Object.keys(V).map(y=>[y,V[y]]);N.append("g").selectAll("text").data(v).enter().append(function(y){const w=y[0].split(_t.lineBreakRegex),o=-(w.length-1)/2,u=W.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",o+"em");for(const[h,d]of w.entries()){const g=W.createElementNS("http://www.w3.org/2000/svg","tspan");g.setAttribute("alignment-baseline","central"),g.setAttribute("x","10"),h>0&&g.setAttribute("dy","1em"),g.textContent=d,u.appendChild(g)}return u}).attr("x",10).attr("y",function(y,w){if(w>0)for(let o=0;o<w;o++)return T+=v[w-1][1],y[1]*p/2+T*p+_;else return y[1]*p/2+_}).attr("font-size",n.sectionFontSize).attr("class",function(y){for(const[w,o]of E.entries())if(y[0]===o)return"sectionTitle sectionTitle"+w%n.numberSectionStyles;return"sectionTitle"})}c(Q,"vertLabels");function G(p,_,T,v){const y=r.db.getTodayMarker();if(y==="off")return;const w=N.append("g").attr("class","today"),o=new Date,u=w.append("line");u.attr("x1",f(o)+p).attr("x2",f(o)+p).attr("y1",n.titleTopMargin).attr("y2",v-n.titleTopMargin).attr("class","today"),y!==""&&u.attr("style",y.replace(/,/g,";"))}c(G,"drawToday");function q(p){const _={},T=[];for(let v=0,y=p.length;v<y;++v)Object.prototype.hasOwnProperty.call(_,p[v])||(_[p[v]]=!0,T.push(p[v]));return T}c(q,"checkUnique")},"draw"),Ds={setConf:xs,draw:ws},Ss=c(e=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,"getStyles"),Cs=Ss,Os={parser:Wt,db:bs,renderer:Ds,styles:Cs};export{Os as diagram};
