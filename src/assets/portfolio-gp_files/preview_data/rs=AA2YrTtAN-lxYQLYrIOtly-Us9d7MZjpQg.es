this.gbar_=this.gbar_||{};(function(_){var window=this;
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ge;
_.He=function(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")};
_.K=function(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(Ge||(c={},Ge=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=Ge,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};
var Ie,Je,Ke;Ie=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};Je=function(a){return a.classList?a.classList:Ie(a).match(/\S+/g)||[]};Ke=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};_.L=function(a,b){return a.classList?a.classList.contains(b):_.pe(Je(a),b)};_.N=function(a,b){if(a.classList)a.classList.add(b);else if(!_.L(a,b)){var c=Ie(a);Ke(a,c+(0<c.length?" "+b:b))}};
_.Le=function(a,b){if(a.classList)Array.prototype.forEach.call(b,function(e){_.N(a,e)});else{var c={};Array.prototype.forEach.call(Je(a),function(e){c[e]=!0});Array.prototype.forEach.call(b,function(e){c[e]=!0});b="";for(var d in c)b+=0<b.length?" "+d:d;Ke(a,b)}};_.Me=function(a,b){a.classList?a.classList.remove(b):_.L(a,b)&&Ke(a,Array.prototype.filter.call(Je(a),function(c){return c!=b}).join(" "))};
_.Ne=function(a,b){a.classList?Array.prototype.forEach.call(b,function(c){_.Me(a,c)}):Ke(a,Array.prototype.filter.call(Je(a),function(c){return!_.pe(b,c)}).join(" "))};
var Re;_.Qe=function(a,b,c,d,e,f){if(_.Hb&&e)return _.Oe(a);if(e&&!d)return!1;if(!_.Eb){"number"===typeof b&&(b=_.Pe(b));var g=17==b||18==b||_.Hb&&91==b;if((!c||_.Hb)&&g||_.Hb&&16==b&&(d||f))return!1}if((_.Fb||_.Cb)&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(_.C&&d&&b==a)return!1;switch(a){case 13:return _.Eb?f||e?!1:!(c&&d):!0;case 27:return!(_.Fb||_.Cb||_.Eb)}return _.Eb&&(d||e||f)?!1:_.Oe(a)};
_.Oe=function(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||(_.Fb||_.Cb)&&0==a)return!0;switch(a){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:case 58:return!0;case 173:return _.Eb;default:return!1}};_.Pe=function(a){if(_.Eb)a=Re(a);else if(_.Hb&&_.Fb)switch(a){case 93:a=91}return a};
Re=function(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Se=function(a){_.G.call(this,a)};_.w(_.Se,_.G);_.Te=function(a){return _.Ed(_.Ad.j(),a)};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ve;_.Ue=function(a,b){b=(0,_.ub)(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};Ve=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};_.We=function(a,b){try{return _.Ab(a[b]),!0}catch(c){}return!1};
_.Ye=function(a,b){this.type="function"==typeof _.Xe&&a instanceof _.Xe?String(a):a;this.currentTarget=this.target=b;this.defaultPrevented=this.j=!1};_.Ye.prototype.stopPropagation=function(){this.j=!0};_.Ye.prototype.preventDefault=function(){this.defaultPrevented=!0};
_.Ze=function(a,b){_.Ye.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.Za=null;a&&this.init(a,b)};_.B(_.Ze,_.Ye);var $e={2:"touch",3:"pen",4:"mouse"};
_.Ze.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;(b=a.relatedTarget)?_.Eb&&(_.We(b,"nodeName")||(b=null)):"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.offsetX=_.Fb||void 0!==
a.offsetX?a.offsetX:a.layerX,this.offsetY=_.Fb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===
typeof a.pointerType?a.pointerType:$e[a.pointerType]||"";this.state=a.state;this.Za=a;a.defaultPrevented&&_.Ze.Y.preventDefault.call(this)};_.Ze.prototype.stopPropagation=function(){_.Ze.Y.stopPropagation.call(this);this.Za.stopPropagation?this.Za.stopPropagation():this.Za.cancelBubble=!0};_.Ze.prototype.preventDefault=function(){_.Ze.Y.preventDefault.call(this);var a=this.Za;a.preventDefault?a.preventDefault():a.returnValue=!1};
_.af="closure_listenable_"+(1E6*Math.random()|0);_.bf=function(a){return!(!a||!a[_.af])};
var cf=0;
var df;df=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Sd=e;this.key=++cf;this.Bd=this.Jd=!1};_.ef=function(a){a.Bd=!0;a.listener=null;a.proxy=null;a.src=null;a.Sd=null};
_.ff=function(a){this.src=a;this.j={};this.o=0};_.ff.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.j[f];a||(a=this.j[f]=[],this.o++);var g=gf(a,b,d,e);-1<g?(b=a[g],c||(b.Jd=!1)):(b=new df(b,this.src,f,!!d,e),b.Jd=c,a.push(b));return b};_.ff.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.j))return!1;var e=this.j[a];b=gf(e,b,c,d);return-1<b?(_.ef(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.j[a],this.o--),!0):!1};
_.hf=function(a,b){var c=b.type;if(!(c in a.j))return!1;var d=_.Ue(a.j[c],b);d&&(_.ef(b),0==a.j[c].length&&(delete a.j[c],a.o--));return d};_.ff.prototype.Pd=function(a,b){a=this.j[a.toString()];var c=[];if(a)for(var d=0;d<a.length;++d){var e=a[d];e.capture==b&&c.push(e)}return c};_.ff.prototype.ud=function(a,b,c,d){a=this.j[a.toString()];var e=-1;a&&(e=gf(a,b,c,d));return-1<e?a[e]:null};
_.ff.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return Ve(this.j,function(f){for(var g=0;g<f.length;++g)if(!(c&&f[g].type!=d||e&&f[g].capture!=b))return!0;return!1})};var gf=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Bd&&f.listener==b&&f.capture==!!c&&f.Sd==d)return e}return-1};
var jf,kf,lf,of,qf,rf,sf,vf;jf="closure_lm_"+(1E6*Math.random()|0);kf={};lf=0;_.O=function(a,b,c,d,e){if(d&&d.once)return _.mf(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)_.O(a,b[f],c,d,e);return null}c=_.nf(c);return _.bf(a)?a.listen(b,c,_.lb(d)?!!d.capture:!!d,e):of(a,b,c,!1,d,e)};
of=function(a,b,c,d,e,f){if(!b)throw Error("M");var g=_.lb(e)?!!e.capture:!!e,h=_.pf(a);h||(a[jf]=h=new _.ff(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=qf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)_.le||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(rf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("N");lf++;return c};
qf=function(){var a=sf,b=function(c){return a.call(b.src,b.listener,c)};return b};_.mf=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)_.mf(a,b[f],c,d,e);return null}c=_.nf(c);return _.bf(a)?a.Ua(b,c,_.lb(d)?!!d.capture:!!d,e):of(a,b,c,!0,d,e)};_.tf=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)_.tf(a,b[f],c,d,e);else d=_.lb(d)?!!d.capture:!!d,c=_.nf(c),_.bf(a)?a.Ja(b,c,d,e):a&&(a=_.pf(a))&&(b=a.ud(b,c,d,e))&&_.uf(b)};
_.uf=function(a){if("number"===typeof a||!a||a.Bd)return!1;var b=a.src;if(_.bf(b))return b.qf(a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(rf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);lf--;(c=_.pf(b))?(_.hf(c,a),0==c.o&&(c.src=null,b[jf]=null)):_.ef(a);return!0};rf=function(a){return a in kf?kf[a]:kf[a]="on"+a};
sf=function(a,b){if(a.Bd)a=!0;else{b=new _.Ze(b,this);var c=a.listener,d=a.Sd||a.src;a.Jd&&_.uf(a);a=c.call(d,b)}return a};_.pf=function(a){a=a[jf];return a instanceof _.ff?a:null};vf="__closure_events_fn_"+(1E9*Math.random()>>>0);_.nf=function(a){if("function"===typeof a)return a;a[vf]||(a[vf]=function(b){return a.handleEvent(b)});return a[vf]};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var wf=function(a){_.n.setTimeout(function(){throw a;},0)},xf=function(){},yf=function(a,b){this.A=a;this.B=b;this.o=0;this.j=null};yf.prototype.get=function(){if(0<this.o){this.o--;var a=this.j;this.j=a.next;a.next=null}else a=this.A();return a};var zf=function(a,b){a.B(b);100>a.o&&(a.o++,b.next=a.j,a.j=b)};
var Af,Bf=function(){var a=_.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.p("Presto")&&(a=function(){var e=_.Be("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,_.y)(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},
this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!_.fa()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Jf;c.Jf=null;e()}};return function(e){d.next={Jf:e};d=d.next;b.port2.postMessage(0)}}return function(e){_.n.setTimeout(e,0)}};
var Cf=function(){this.o=this.j=null};Cf.prototype.add=function(a,b){var c=Df.get();c.set(a,b);this.o?this.o.next=c:this.j=c;this.o=c};Cf.prototype.remove=function(){var a=null;this.j&&(a=this.j,this.j=this.j.next,this.j||(this.o=null),a.next=null);return a};var Df=new yf(function(){return new Ef},function(a){return a.reset()}),Ef=function(){this.next=this.scope=this.j=null};Ef.prototype.set=function(a,b){this.j=a;this.scope=b;this.next=null};
Ef.prototype.reset=function(){this.next=this.scope=this.j=null};
var Ff,Gf=!1,Hf=new Cf,Jf=function(a,b){Ff||If();Gf||(Ff(),Gf=!0);Hf.add(a,b)},If=function(){if(_.n.Promise&&_.n.Promise.resolve){var a=_.n.Promise.resolve(void 0);Ff=function(){a.then(Kf)}}else Ff=function(){var b=Kf;"function"!==typeof _.n.setImmediate||_.n.Window&&_.n.Window.prototype&&!_.p("Edge")&&_.n.Window.prototype.setImmediate==_.n.setImmediate?(Af||(Af=Bf()),Af(b)):_.n.setImmediate(b)}},Kf=function(){for(var a;a=Hf.remove();){try{a.j.call(a.scope)}catch(b){wf(b)}zf(Df,a)}Gf=!1};
_.Lf=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
var Of,Xf,bg,ag,cg;_.Nf=function(a){this.j=0;this.F=void 0;this.B=this.o=this.A=null;this.C=this.D=!1;if(a!=xf)try{var b=this;a.call(void 0,function(c){Mf(b,2,c)},function(c){Mf(b,3,c)})}catch(c){Mf(this,3,c)}};Of=function(){this.next=this.A=this.o=this.B=this.j=null;this.C=!1};Of.prototype.reset=function(){this.A=this.o=this.B=this.j=null;this.C=!1};var Rf=new yf(function(){return new Of},function(a){a.reset()}),Sf=function(a,b,c){var d=Rf.get();d.B=a;d.o=b;d.A=c;return d};
_.Nf.prototype.then=function(a,b,c){return Tf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};_.Nf.prototype.$goog_Thenable=!0;_.Nf.prototype.kf=function(a,b){return Tf(this,null,a,b)};_.Nf.prototype.G=_.Nf.prototype.kf;_.Nf.prototype.cancel=function(a){if(0==this.j){var b=new _.Uf(a);Jf(function(){Vf(this,b)},this)}};
var Vf=function(a,b){if(0==a.j)if(a.A){var c=a.A;if(c.o){for(var d=0,e=null,f=null,g=c.o;g&&(g.C||(d++,g.j==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.j&&1==d?Vf(c,b):(f?(d=f,d.next==c.B&&(c.B=d),d.next=d.next.next):Wf(c),Xf(c,e,3,b)))}a.A=null}else Mf(a,3,b)},Zf=function(a,b){a.o||2!=a.j&&3!=a.j||Yf(a);a.B?a.B.next=b:a.o=b;a.B=b},Tf=function(a,b,c,d){var e=Sf(null,null,null);e.j=new _.Nf(function(f,g){e.B=b?function(h){try{var l=b.call(d,h);f(l)}catch(m){g(m)}}:f;e.o=c?function(h){try{var l=
c.call(d,h);void 0===l&&h instanceof _.Uf?g(h):f(l)}catch(m){g(m)}}:g});e.j.A=a;Zf(a,e);return e.j};_.Nf.prototype.K=function(a){this.j=0;Mf(this,2,a)};_.Nf.prototype.L=function(a){this.j=0;Mf(this,3,a)};
var Mf=function(a,b,c){if(0==a.j){a===c&&(b=3,c=new TypeError("O"));a.j=1;a:{var d=c,e=a.K,f=a.L;if(d instanceof _.Nf){Zf(d,Sf(e||xf,f||null,a));var g=!0}else if(_.Lf(d))d.then(e,f,a),g=!0;else{if(_.lb(d))try{var h=d.then;if("function"===typeof h){$f(d,h,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.F=c,a.j=b,a.A=null,Yf(a),3!=b||c instanceof _.Uf||ag(a,c))}},$f=function(a,b,c,d,e){var f=!1,g=function(l){f||(f=!0,c.call(e,l))},h=function(l){f||(f=!0,d.call(e,l))};try{b.call(a,
g,h)}catch(l){h(l)}},Yf=function(a){a.D||(a.D=!0,Jf(a.H,a))},Wf=function(a){var b=null;a.o&&(b=a.o,a.o=b.next,b.next=null);a.o||(a.B=null);return b};_.Nf.prototype.H=function(){for(var a;a=Wf(this);)Xf(this,a,this.j,this.F);this.D=!1};Xf=function(a,b,c,d){if(3==c&&b.o&&!b.C)for(;a&&a.C;a=a.A)a.C=!1;if(b.j)b.j.A=null,bg(b,c,d);else try{b.C?b.B.call(b.A):bg(b,c,d)}catch(e){cg.call(null,e)}zf(Rf,b)};bg=function(a,b,c){2==b?a.B.call(a.A,c):a.o&&a.o.call(a.A,c)};
ag=function(a,b){a.C=!0;Jf(function(){a.C&&cg.call(null,b)})};cg=wf;_.Uf=function(a){_.ba.call(this,a)};_.B(_.Uf,_.ba);_.Uf.prototype.name="cancel";

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ig,jg,kg,lg,mg,ng,og,pg,rg,ug,Dg;_.dg=function(a){a&&"function"==typeof a.ua&&a.ua()};_.eg=function(a){for(var b in a)return!1;return!0};_.fg=function(a){return/^[\s\xa0]*$/.test(a)};_.gg=function(a,b){b=_.se(_.dg,b);a.Mb?b():(a.Ma||(a.Ma=[]),a.Ma.push(b))};_.hg=function(a){var b=0,c;for(c in a.j){for(var d=a.j[c],e=0;e<d.length;e++)++b,_.ef(d[e]);delete a.j[c];a.o--}};jg=/&/g;kg=/</g;lg=/>/g;mg=/"/g;ng=/'/g;og=/\x00/g;pg=/[\x00&<>"']/;
_.qg=function(a){if(!pg.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(jg,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(kg,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(lg,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(mg,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ng,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(og,"&#0;"));return a};rg=function(a,b){return a<b?-1:a>b?1:0};
_.sg=function(a,b){var c=0;a=(0,_.tb)(String(a)).split(".");b=(0,_.tb)(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=rg(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||rg(0==f[2].length,0==g[2].length)||rg(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c};
_.tg=function(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)};ug={};_.vg=function(a){return _.tg(ug,a,function(){return 0<=_.sg(_.Ub,a)})};_.wg=function(a,b){return"string"===typeof b?a.getElementById(b):b};_.xg=function(a){return"CSS1Compat"==a.compatMode};_.yg=function(a){a=a.document;a=_.xg(a)?a.documentElement:a.body;return new _.ue(a.clientWidth,a.clientHeight)};_.zg=function(a){return a?a.parentWindow||a.defaultView:window};
_.Ag=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};_.Bg=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};_.Cg=function(a){try{var b=a&&a.activeElement;return b&&b.nodeName?b:null}catch(c){return null}};Dg=function(a){this.j=a||_.n.document||document};_.k=Dg.prototype;
_.k.J=function(a){return _.wg(this.j,a)};_.k.yb=function(a,b,c){return _.Ae(this.j,arguments)};_.k.appendChild=function(a,b){a.appendChild(b)};_.k.sf=_.Ce;_.k.tf=_.Ag;_.k.Gg=_.Bg;_.Eg=function(a){return a?new Dg(_.Ee(a)):ig||(ig=new Dg)};_.P=function(){_.H.call(this);this.tb=new _.ff(this);this.rh=this;this.Ad=null};_.B(_.P,_.H);_.P.prototype[_.af]=!0;_.k=_.P.prototype;_.k.mi=function(){return this.Ad};_.k.Oc=function(a){this.Ad=a};_.k.addEventListener=function(a,b,c,d){_.O(this,a,b,c,d)};
_.k.removeEventListener=function(a,b,c,d){_.tf(this,a,b,c,d)};
_.k.dispatchEvent=function(a){var b,c=this.Ad;if(c)for(b=[];c;c=c.Ad)b.push(c);c=this.rh;var d=a.type||a;if("string"===typeof a)a=new _.Ye(a,c);else if(a instanceof _.Ye)a.target=a.target||c;else{var e=a;a=new _.Ye(d,c);_.Sa(a,e)}e=!0;if(b)for(var f=b.length-1;!a.j&&0<=f;f--){var g=a.currentTarget=b[f];e=Fg(g,d,!0,a)&&e}a.j||(g=a.currentTarget=c,e=Fg(g,d,!0,a)&&e,a.j||(e=Fg(g,d,!1,a)&&e));if(b)for(f=0;!a.j&&f<b.length;f++)g=a.currentTarget=b[f],e=Fg(g,d,!1,a)&&e;return e};
_.k.R=function(){_.P.Y.R.call(this);this.tb&&_.hg(this.tb);this.Ad=null};_.k.listen=function(a,b,c,d){return this.tb.add(String(a),b,!1,c,d)};_.k.Ua=function(a,b,c,d){return this.tb.add(String(a),b,!0,c,d)};_.k.Ja=function(a,b,c,d){this.tb.remove(String(a),b,c,d)};_.k.qf=function(a){return _.hf(this.tb,a)};
var Fg=function(a,b,c,d){b=a.tb.j[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Bd&&g.capture==c){var h=g.listener,l=g.Sd||g.src;g.Jd&&a.qf(g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented};_.P.prototype.Pd=function(a,b){return this.tb.Pd(String(a),b)};_.P.prototype.ud=function(a,b,c,d){return this.tb.ud(String(a),b,c,d)};_.P.prototype.hasListener=function(a,b){return this.tb.hasListener(void 0!==a?String(a):void 0,b)};
_.Gg=function(a,b){_.P.call(this);this.o=a||1;this.j=b||_.n;this.A=(0,_.y)(this.ek,this);this.B=Date.now()};_.B(_.Gg,_.P);_.k=_.Gg.prototype;_.k.Rb=!1;_.k.Ab=null;_.k.ek=function(){if(this.Rb){var a=Date.now()-this.B;0<a&&a<.8*this.o?this.Ab=this.j.setTimeout(this.A,this.o-a):(this.Ab&&(this.j.clearTimeout(this.Ab),this.Ab=null),this.dispatchEvent("tick"),this.Rb&&(this.stop(),this.start()))}};_.k.start=function(){this.Rb=!0;this.Ab||(this.Ab=this.j.setTimeout(this.A,this.o),this.B=Date.now())};
_.k.stop=function(){this.Rb=!1;this.Ab&&(this.j.clearTimeout(this.Ab),this.Ab=null)};_.k.R=function(){_.Gg.Y.R.call(this);this.stop();delete this.j};_.Hg=function(a,b,c){if("function"===typeof a)c&&(a=(0,_.y)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,_.y)(a.handleEvent,a);else throw Error("P");return 2147483647<Number(b)?-1:_.n.setTimeout(a,b||0)};_.Ig=function(a){_.n.clearTimeout(a)};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.R=function(a){_.H.call(this);this.T=a;this.O={}};_.B(_.R,_.H);var Jg=[];_.R.prototype.listen=function(a,b,c,d){return Kg(this,a,b,c,d)};_.R.prototype.B=function(a,b,c,d,e){return Kg(this,a,b,c,d,e)};var Kg=function(a,b,c,d,e,f){Array.isArray(c)||(c&&(Jg[0]=c.toString()),c=Jg);for(var g=0;g<c.length;g++){var h=_.O(b,c[g],d||a.handleEvent,e||!1,f||a.T||a);if(!h)break;a.O[h.key]=h}return a};_.R.prototype.Ua=function(a,b,c,d){return Lg(this,a,b,c,d)};
var Lg=function(a,b,c,d,e,f){if(Array.isArray(c))for(var g=0;g<c.length;g++)Lg(a,b,c[g],d,e,f);else{b=_.mf(b,c,d||a.handleEvent,e,f||a.T||a);if(!b)return a;a.O[b.key]=b}return a};_.R.prototype.Ja=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)this.Ja(a,b[f],c,d,e);else c=c||this.handleEvent,d=_.lb(d)?!!d.capture:!!d,e=e||this.T||this,c=_.nf(c),d=!!d,b=_.bf(a)?a.ud(b,c,d,e):a?(a=_.pf(a))?a.ud(b,c,d,e):null:null,b&&(_.uf(b),delete this.O[b.key])};
_.Mg=function(a){_.Qa(a.O,function(b,c){this.O.hasOwnProperty(c)&&_.uf(b)},a);a.O={}};_.R.prototype.R=function(){_.R.Y.R.call(this);_.Mg(this)};_.R.prototype.handleEvent=function(){throw Error("Q");};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Og,Rg,Wg,Xg;_.Ng=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};Og=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};_.Pg=function(a,b,c,d){Array.prototype.splice.apply(a,Og(arguments,1))};_.Qg=function(a){return new _.ue(a.width,a.height)};Rg=function(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};
_.Sg=function(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})};_.Tg=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};_.S=function(a,b,c){return _.Ae(document,arguments)};_.Ug=function(a){return a.contentDocument||a.contentWindow.document};
_.Vg=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else _.Ce(a),a.appendChild(_.Ee(a).createTextNode(String(b)))};Wg={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};Xg={IMG:" ",BR:"\n"};
_.Yg=function(a,b,c){if(!(a.nodeName in Wg))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Xg)b.push(Xg[a.nodeName]);else for(a=a.firstChild;a;)_.Yg(a,b,c),a=a.nextSibling};_.Zg=function(){return _.Fb?"Webkit":_.Eb?"Moz":_.C?"ms":null};
var ah,$g;_.T=function(a,b,c){if("string"===typeof b)(b=$g(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=$g(c,d);f&&(c.style[f]=e)}};ah={};$g=function(a,b){var c=ah[b];if(!c){var d=Rg(b);c=d;void 0===a.style[d]&&(d=_.Zg()+_.Sg(d),void 0!==a.style[d]&&(c=d));ah[b]=c}return c};_.bh=function(a,b){var c=a.style[Rg(b)];return"undefined"!==typeof c?c:a.style[$g(a,b)]||""};
_.ch=function(a,b){var c=_.Ee(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""};_.dh=function(a,b){return _.ch(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};_.eh=function(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}};_.fh=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
_.hh=function(a){var b=_.gh;if("none"!=_.dh(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};_.gh=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=_.Fb&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=_.eh(a),new _.ue(a.right-a.left,a.bottom-a.top)):new _.ue(b,c)};_.ih=_.Eb?"MozUserSelect":_.Fb||_.Cb?"WebkitUserSelect":null;

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var jh;jh=function(a,b){return null!==a&&b in a?a[b]:void 0};_.kh=function(){};_.kh.Ic=void 0;_.kh.j=function(){return _.kh.Ic?_.kh.Ic:_.kh.Ic=new _.kh};_.kh.prototype.j=0;_.lh=function(a){return":"+(a.j++).toString(36)};
var mh;_.nh=function(a){_.P.call(this);this.A=a||_.Eg();this.ha=mh;this.U=null;this.Fa=!1;this.j=null;this.L=void 0;this.H=this.C=this.o=this.D=null;this.Da=!1};_.B(_.nh,_.P);_.nh.prototype.Ga=_.kh.j();mh=null;_.oh=function(a){return a.U||(a.U=_.lh(a.Ga))};_.nh.prototype.J=function(){return this.j};var ph=function(a,b){if(a==b)throw Error("S");var c;if(c=b&&a.o&&a.U){c=a.o;var d=a.U;c=c.H&&d?jh(c.H,d)||null:null}if(c&&a.o!=b)throw Error("S");a.o=b;_.nh.Y.Oc.call(a,b)};
_.nh.prototype.Oc=function(a){if(this.o&&this.o!=a)throw Error("T");_.nh.Y.Oc.call(this,a)};_.nh.prototype.qc=function(){this.j=_.ye(this.A.j,"DIV")};_.nh.prototype.render=function(a){qh(this,a)};var qh=function(a,b,c){if(a.Fa)throw Error("U");a.j||a.qc();b?b.insertBefore(a.j,c||null):a.A.j.body.appendChild(a.j);a.o&&!a.o.Fa||a.Pa()};_.k=_.nh.prototype;_.k.rd=function(a){this.j=a};_.k.Pa=function(){this.Fa=!0;_.rh(this,function(a){!a.Fa&&a.J()&&a.Pa()})};
_.k.Nb=function(){_.rh(this,function(a){a.Fa&&a.Nb()});this.L&&_.Mg(this.L);this.Fa=!1};_.k.R=function(){this.Fa&&this.Nb();this.L&&(this.L.ua(),delete this.L);_.rh(this,function(a){a.ua()});!this.Da&&this.j&&_.Ag(this.j);this.o=this.D=this.j=this.H=this.C=null;_.nh.Y.R.call(this)};
_.k.Bc=function(a,b,c){if(a.Fa&&(c||!this.Fa))throw Error("U");if(0>b||b>_.sh(this))throw Error("W");this.H&&this.C||(this.H={},this.C=[]);if(a.o==this){var d=_.oh(a);this.H[d]=a;_.Ue(this.C,a)}else{d=this.H;var e=_.oh(a);if(null!==d&&e in d)throw Error("I`"+e);d[e]=a}ph(a,this);_.Pg(this.C,b,0,a);a.Fa&&this.Fa&&a.o==this?(c=this.j,(c.childNodes[b]||null)!=a.J()&&(a.J().parentElement==c&&c.removeChild(a.J()),b=c.childNodes[b]||null,c.insertBefore(a.J(),b))):c?(this.j||this.qc(),b=_.th(this,b+1),qh(a,
this.j,b?b.j:null)):this.Fa&&!a.Fa&&a.j&&a.j.parentNode&&1==a.j.parentNode.nodeType&&a.Pa()};_.sh=function(a){return a.C?a.C.length:0};_.th=function(a,b){return a.C?a.C[b]||null:null};_.rh=function(a,b,c){a.C&&a.C.forEach(b,c)};_.nh.prototype.kd=function(a,b){if(a){var c="string"===typeof a?a:_.oh(a);a=this.H&&c?jh(this.H,c)||null:null;if(c&&a){var d=this.H;c in d&&delete d[c];_.Ue(this.C,a);b&&(a.Nb(),a.j&&_.Ag(a.j));ph(a,null)}}if(!a)throw Error("X");return a};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.uh=!_.C&&!_.ja();

}catch(e){_._DumpException(e)}
try{
var vh;vh=function(a,b,c){if(a.o)return null;if(c instanceof Array){var d=null;c=_.Za(c);for(var e=c.next();!e.done;e=c.next())(e=vh(a,b,e.value))&&(d=e);return d}d=null;a.j&&a.j.type==c&&a.C==b&&(d=a.j,a.j=null);if(e=b.getAttribute("data-eqid"))b.removeAttribute("data-eqid"),(e=a.D[e])?b.removeEventListener?b.removeEventListener(c,e,!1):b.detachEvent&&b.detachEvent("on"+c,e):a.A.log(Error("H`"+b));return d};_.wh=function(a,b,c){return function(){try{return b.apply(c,arguments)}catch(d){a.log(d)}}};
_.yh=function(a,b,c,d,e,f){d=_.wh(a,d,f);a=_.O(b,c,d,e,f);_.xh(b,c);return a};_.xh=function(a,b){if(a instanceof Element&&(b=vh(_.Te("eq"),a,b||[])))if(_.C&&b instanceof MouseEvent&&a.dispatchEvent){var c=document.createEvent("MouseEvent");c.initMouseEvent(b.type,!0,!0,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);a.dispatchEvent(c)}else a.dispatchEvent&&a.dispatchEvent(b)};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Eh;_.zh=function(a){return 0==a.Za.button&&!(_.Hb&&a.ctrlKey)};_.Ah=function(a,b,c,d,e,f){c.listen(b,d,e,f||a.T||a,a)};_.Ch=function(a,b,c){_.Bh.listen(b,c,void 0,a.T||a,a)};_.Dh=function(a,b){b=b instanceof _.Wc?b:_.bd(b);a.href=_.Xc(b)};
Eh=function(a,b,c){var d;a=c||a;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className;"function"==typeof g.split&&_.pe(g.split(/\s+/),b)&&(f[d++]=a)}f.length=d;return f}return e};_.Fh=function(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Eh(document,a,b)};
_.U=function(a,b){var c=b||document;if(c.getElementsByClassName)a=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;a=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Eh(c,a,b)[0]||null}return a||null};_.Gh=function(a){return void 0!=a.children?a.children:Array.prototype.filter.call(a.childNodes,function(b){return 1==b.nodeType})};_.Hh=function(a,b){return b?_.Fe(a,function(c){return!b||"string"===typeof c.className&&_.pe(c.className.split(/\s+/),b)}):null};
var Ih,Jh;Ih=function(){};_.Bh=new Ih;Jh=["click","keydown","keyup"];Ih.prototype.listen=function(a,b,c,d,e){var f=function(g){var h=_.nf(b),l=_.De(g.target)?g.target.getAttribute("role")||null:null;"click"==g.type&&_.zh(g)?h.call(d,g):13!=g.keyCode&&3!=g.keyCode||"keyup"==g.type?32!=g.keyCode||"keyup"!=g.type||"button"!=l&&"tab"!=l&&"radio"!=l||(h.call(d,g),g.preventDefault()):(g.type="keypress",h.call(d,g))};f.Cb=b;f.Qj=d;e?e.listen(a,Jh,f,c):_.O(a,Jh,f,c)};
Ih.prototype.Ja=function(a,b,c,d,e){for(var f,g=0;f=Jh[g];g++){var h=a;var l=f;var m=!!c;l=_.bf(h)?h.Pd(l,m):h?(h=_.pf(h))?h.Pd(l,m):[]:[];for(h=0;m=l[h];h++){var r=m.listener;if(r.Cb==b&&r.Qj==d){e?e.Ja(a,f,m.listener,c,d):_.tf(a,f,m.listener,c,d);break}}}};
_.Kh=function(a,b){_.R.call(this,b);this.C=a;this.Wa=b||this};_.w(_.Kh,_.R);_.Kh.prototype.listen=function(a,b,c,d){if(c){if("function"!=typeof c)throw new TypeError("Y");c=_.wh(this.C,c,this.Wa);c=_.R.prototype.listen.call(this,a,b,c,d);_.xh(a,Lh(b));return c}return _.R.prototype.listen.call(this,a,b,c,d)};
_.Kh.prototype.B=function(a,b,c,d,e){if(c){if("function"!=typeof c)throw new TypeError("Y");c=_.wh(this.C,c,e||this.Wa);c=_.R.prototype.B.call(this,a,b,c,d,e);_.xh(a,Lh(b));return c}return _.R.prototype.B.call(this,a,b,c,d,e)};_.Kh.prototype.Ua=function(a,b,c,d){if(c){if("function"!=typeof c)throw new TypeError("Y");c=_.wh(this.C,c,this.Wa);c=_.R.prototype.Ua.call(this,a,b,c,d);_.xh(a,Lh(b));return c}return _.R.prototype.Ua.call(this,a,b,c,d)};
var Lh=function(a){return Array.isArray(a)?_.xb(a,Lh):"string"===typeof a?a:a?a.toString():a};
_.Nh=function(a,b){_.Kh.call(this,b);this.o=a};_.w(_.Nh,_.Kh);_.Nh.prototype.J=function(){return this.o};_.Nh.prototype.R=function(){this.o=null;_.Kh.prototype.R.call(this)};

}catch(e){_._DumpException(e)}
try{
_.Oh=function(a,b,c){_.Nh.call(this,a,b);this.j=c;(a=_.U("gb_uc",this.o))&&_.Ch(this,a,this.A)};_.w(_.Oh,_.Nh);_.Oh.prototype.A=function(a){var b;(a=a.currentTarget)&&(a=a.getAttributeNode("data-ved"))&&a.value&&(b={ved:a.value});this.j.log(39,b)};

}catch(e){_._DumpException(e)}
try{
var Qh,Rh,Vh;Qh=function(a){return null!=_.Fe(a,function(b){return 1==b.nodeType&&"true"==_.Ph(b,"hidden")})};_.Th=function(a){return a?Rh(a,function(b){return 1==b.nodeType&&_.Sh(b)&&!Qh(b)}):[]};_.V=function(a,b,c){c?_.N(a,b):_.Me(a,b)};_.Uh=function(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||_.Uh(a,b,c,d))return!0;a=a.nextSibling}return!1};Rh=function(a,b){var c=[];_.Uh(a,b,c,!1);return c};Vh=function(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a};
_.Sh=function(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!a.hasAttribute("tabindex")||Vh(a)):a.hasAttribute("tabindex")&&Vh(a))&&_.C){var c;"function"!==typeof a.getBoundingClientRect||_.C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
_.Ph=function(a,b){a=a.getAttribute("aria-"+b);return null==a||void 0==a?"":String(a)};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Wh=function(a){return null==a?"":String(a)};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/

}catch(e){_._DumpException(e)}
try{
var fi,hi,ii,ki,li,mi,pi,qi,ti,xi,yi,zi;_.$h=function(a,b){a&&b&&_.Dh(a,a.href.replace(/([?&](continue|followup)=)[^&]*/g,"$1"+encodeURIComponent(b)))};_.ei=function(){_.z("gbar.I",_.ai);_.ai.prototype.ia=_.ai.prototype.Hg;_.ai.prototype.ib=_.ai.prototype.J;_.ai.prototype.ic=_.ai.prototype.li;_.z("gbar.J",_.bi);_.bi.prototype.ja=_.bi.prototype.V;_.bi.prototype.jb=_.bi.prototype.W;_.z("gbar.K",_.ci);_.z("gbar.L",_.di);_.di.prototype.la=_.di.prototype.o};
fi=function(a,b){b.xa=b.type;b.xb=b.target;return a.call(this,b)};_.gi=function(a,b){return _.U(a,b)};hi=function(a){a=a.getAttribute("src");return null!=a&&""!=a};
ii=function(a,b,c){a=_.U("gb_yc",a.J());if(""!=b||""!=c)if(_.L(a,"gb_na"))""!=_.bh(a,"background-image")&&(b=""!=c?c:b,_.T(a,"background-image","url('"+b+"')"),a=_.U("gb_xc",a),null!=a&&hi(a)&&a.setAttribute("src",b));else if("IMG"==a.tagName){var d=""!=b?b:c;null!=a&&hi(a)&&a.setAttribute("src",d);b!=c&&(c=""!=c?c+" 2x ":"",""!=b&&(c=c+(""==c?"":",")+(b+" 1x")),a.setAttribute("srcset",c))}};_.ji=function(a,b,c){_.H.call(this);this.Cb=a;this.A=b||0;this.j=c;this.o=(0,_.y)(this.Pg,this)};
_.B(_.ji,_.H);_.k=_.ji.prototype;_.k.Pc=0;_.k.R=function(){_.ji.Y.R.call(this);this.stop();delete this.Cb;delete this.j};_.k.start=function(a){this.stop();this.Pc=_.Hg(this.o,void 0!==a?a:this.A)};_.k.stop=function(){0!=this.Pc&&_.Ig(this.Pc);this.Pc=0};_.k.Pg=function(){this.Pc=0;this.Cb&&this.Cb.call(this.j)};ki=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};li=function(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)};mi=function(a,b){var c=[];return _.Uh(a,b,c,!0)?c[0]:void 0};
_.ni=function(a){var b=[];_.Yg(a,b,!0);a=b.join("");a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");a=a.replace(/ +/g," ");" "!=a&&(a=a.replace(/^\s*/,""));return a};_.oi=function(a,b,c){if(_.uh&&a.dataset)a.dataset[b]=c;else{if(/-[a-z]/.test(b))throw Error("K");a.setAttribute("data-"+ki(b),c)}};
pi=function(a){if(/-[a-z]/.test("item"))return null;if(_.uh&&a.dataset){if(_.ka()&&!("item"in a.dataset))return null;a=a.dataset.item;return void 0===a?null:a}return a.getAttribute("data-"+ki("item"))};qi=function(a,b){return/-[a-z]/.test(b)?!1:_.uh&&a.dataset?b in a.dataset:a.hasAttribute?a.hasAttribute("data-"+ki(b)):!!a.getAttribute("data-"+ki(b))};_.ri=function(a){this.j=a;this.o=null};_.si=function(a){a.o||(a.o=_.O(a.j,"keydown",a.A,!1,a))};_.ui=function(a){ti(a);_.V(a.j,"gb_r",!1)};
_.ri.prototype.A=function(a){9!=a.keyCode||_.L(this.j,"gb_r")||(_.V(this.j,"gb_r",!0),ti(this))};ti=function(a){a.o&&(_.uf(a.o),a.o=null)};_.ai=function(a,b){_.P.call(this);this.C=a;b&&(this.C.id=b)};_.w(_.ai,_.P);_.k=_.ai.prototype;_.k.J=function(){return this.C};_.k.Hg=function(){return this.C.id};_.k.li=function(){var a=this.C.id;a||(a="gb$"+_.lh(_.kh.j()),this.C.id=a);return a};_.k.R=function(){_.Ag(this.C);_.P.prototype.R.call(this)};_.k.Ed=function(){return this.J()};
_.vi=function(a){return mi(a,function(b){return _.De(b)&&_.Sh(b)})};_.wi=function(a){(a=_.vi(a))&&a.focus()};xi={Bk:"gb_pa",Kk:"gb_Pd",rk:"gb_Mc"};yi=function(){var a=_.Be("LI");_.N(a,"gb_Tc");_.He(a,"menuitem");return a};zi=function(a,b){b||(b=yi(),a.Ed().appendChild(b));_.ai.call(this,b);this.D=new _.R(this);_.Ch(this.D,this.J(),this.wi)};_.w(zi,_.ai);_.k=zi.prototype;
_.k.Ig=function(a){a?_.oi(this.J(),"item",a):(a=this.J(),!/-[a-z]/.test("item")&&(_.uh&&a.dataset?qi(a,"item")&&delete a.dataset.item:a.removeAttribute("data-"+ki("item"))));return this};_.k.md=function(){return pi(this.J())};_.k.Jg=function(a){_.V(this.J(),"gb_xa",a);return this};_.k.focus=function(){_.wi(this.J())};_.k.wi=function(){this.dispatchEvent("click")};
var Ai=function(a,b){if(!b){b=yi();_.N(b,"gb_Zc");var c=_.S("A","gb_Vc");c.tabIndex=0;b.appendChild(c);var d=_.S("SPAN","gb_Wc");c.appendChild(d);a.Ed().appendChild(b)}zi.call(this,a,b);this.A=_.gi("gb_Vc",this.J());this.B=_.U("gb_Xc",this.A);this.j=null;this.o=_.U("gb_Wc",this.A)};_.w(Ai,zi);_.k=Ai.prototype;_.k.md=function(){return zi.prototype.md.call(this)||this.uf()};_.k.uf=function(){return _.ni(this.o)};_.k.Kg=function(a){_.Vg(this.o,a);return this};
_.k.Uj=function(a){if(!this.B)if(this.B=_.S("IMG","gb_Xc"),this.B.setAttribute("alt",""),this.j)li(this.B,this.j),this.j=null;else{var b=this.o;b.parentNode&&b.parentNode.insertBefore(this.B,b)}this.B.setAttribute("src",a);return this};
_.k.Tj=function(a){if(!(a instanceof Element&&"svg"==a.tagName.toLowerCase()))return this;if(this.B)li(a,this.B),this.B=null;else if(this.j)li(a,this.j);else{var b=this.o;b.parentNode&&b.parentNode.insertBefore(a,b)}(b=a.getAttribute("class"))?a.setAttribute("class",b+" gb_Xc"):a.setAttribute("class","gb_Xc");this.j=a;return this};_.k.focus=function(){this.A.focus()};_.bi=function(a){_.ai.call(this,a);this.B=[];this.K={}};_.w(_.bi,_.ai);
_.bi.prototype.V=function(a){var b=this.K[a];if(b)return b;var c=document.getElementById(a);if(c)for(var d=0,e=this.B.length;d<e;++d)if(b=this.B[d],b.J()==c)return this.K[a]=b;return null};_.bi.prototype.Eb=function(a){a.Oc(this);this.B.push(a);var b=a.C.id;b&&(this.K[b]=a)};_.bi.prototype.W=function(){for(var a=0,b=this.B.length;a<b;a++)this.B[a].ua();this.K={};this.B=[]};
var Bi=function(a,b){if(!b){b=_.Be("UL");_.N(b,"gb_Qc");var c=_.S("SPAN","gb_Uc");b.appendChild(c)}_.bi.call(this,b);this.o=a;a=this.J().getElementsByClassName("gb_Tc");for(b=0;b<a.length;b++)c=a[b],_.L(c,"gb_Zc")?this.Eb(new Ai(this,c)):this.Eb(new zi(this,c));this.j=_.U("gb_Uc",this.J())};_.w(Bi,_.bi);_.k=Bi.prototype;_.k.Eb=function(a){_.bi.prototype.Eb.call(this,a);var b=this.o,c=a.J();c=c.id||(c.id="gbm"+_.lh(_.kh.j()));b.N[c]=a};_.k.Lg=function(){return null!=this.j?_.ni(this.j):null};
_.k.Mg=function(a){return null!=this.j?(_.Vg(this.j,a),this):null};_.k.Ah=function(){var a=new zi(this);this.Eb(a);return a};_.k.Bh=function(){var a=new Ai(this);this.Eb(a);return a};
var Ci=function(a){return a instanceof HTMLElement&&qi(a,"ogobm")},Di="click mousedown scroll touchstart wheel keydown".split(" "),Ei=function(a,b){this.j=a;this.o=b},W=function(a,b,c,d,e){var f=a.get("menu");_.bi.call(this,f);this.j=b;this.U=f;this.H=a;this.X=a.get("back");this.F=_.U("gb_Bc");this.L=c;this.A=_.U("gb_Nc",this.j);this.M=new _.ri(this.A);this.D=_.U("gb_Oc",this.A);this.G=_.U("gb_Pc",this.A);this.N={};this.O=[];this.T=d||!1;this.S=e||!1;this.o=new _.R(this);Fi(this);a=this.A.getElementsByClassName("gb_Qc");
for(b=0;b<a.length;b++)this.Eb(new Bi(this,a[b]))};_.w(W,_.bi);_.k=W.prototype;_.k.R=function(){_.bi.prototype.R.call(this);Gi(this)};_.k.Ed=function(){return this.A};_.k.Ng=function(){return _.U("gb_je",this.j)};_.k.zh=function(){Hi(this);return Ii(this,this.D)};_.k.yh=function(){Hi(this);return Ii(this,this.G)};
var Ii=function(a,b){var c=new Bi(a),d=c.J();b.appendChild(d);a.Eb(c);return c},Hi=function(a){a.D||(a.D=_.Be("DIV"),_.N(a.D,"gb_Oc"),a.A.appendChild(a.D),a.G=_.Be("DIV"),_.N(a.G,"gb_Pc"),a.A.appendChild(a.G))};W.prototype.ha=function(a){_.V(this.j,"gb_Lc",1==a);this.dispatchEvent("msc")};W.prototype.getStyle=function(){return Ji(this)?0:1};var Ki=function(a,b){(a=a.H.get(b))&&_.Me(a,"gb_za")},Li=function(a){a.H.forEach(function(b){_.N(b,"gb_za")})};_.k=W.prototype;
_.k.Xj=function(a){this.F||(this.F=_.U("gb_Bc"));this.F&&a&&_.Vg(this.F,a)};_.k.isVisible=function(a){return(a=this.H.get(a))?!_.L(a,"gb_za"):!1};_.k.open=function(a){this.L||(a&&_.T(this.j,"transition","none"),this.dispatchEvent("beforeshow"),_.N(this.j,"gb_ka"),_.K(this.J(),"expanded",!0),_.wi(this.A),_.si(this.M),this.dispatchEvent("open"),this.o.B(document.body,Di,this.ag,!0,this),this.o.listen(document.body,"focusin",this.vf),a&&_.Hg(function(){_.T(this.j,"transition","")},0,this))};
_.k.Rj=function(a){this.L&&_.K(this.J(),"expanded",a)};_.k.close=function(a){this.L||(a&&_.T(this.j,"transition","none"),_.Me(this.j,"gb_ka"),_.K(this.J(),"expanded",!1),document.activeElement==this.J()&&this.J().blur(),_.ui(this.M),this.dispatchEvent("close"),Gi(this),a&&_.Hg(function(){_.T(this.j,"transition","")},0,this))};_.k.Fb=function(){return _.L(this.j,"gb_ka")};
var Fi=function(a){_.Ch(a.o,a.J(),a.Z);a.J().addEventListener("keydown",function(c){32==c.keyCode&&c.preventDefault()});_.Ch(a.o,a.A,a.Ti);a.o.listen(a.j,"keydown",a.Og);a.o.listen(a.j,"keyup",a.Oi);var b=new Map;b.set("close","cbc");b.set("back","bbc");b.forEach(function(c,d){_.Ch(a.o,a.H.get(d),function(){this.dispatchEvent(c)})});if(_.L(a.j,"gb_pa")||_.L(a.j,"gb_Pd"))a.o.listen(window,"resize",a.P),a.P();_.L(a.j,"gb_Hc")||a.o.Ua(window,"touchstart",function(){_.T(a.j,"overflow-y","auto")})};
W.prototype.P=function(){var a=window.visualViewport?window.visualViewport.height:window.innerHeight;a&&_.T(this.j,"height","calc("+a+"px - 100%)")};W.prototype.Z=function(){this.dispatchEvent("mbc");if(!this.L){if(this.Fb()){this.close();var a=!0}else this.open(),a=!1;a&&this.J().focus()}};var Ji=function(a){return!_.L(a.j,"gb_Lc")||_.L(a.j,"gb_pa")||_.L(a.j,"gb_Pd")};_.k=W.prototype;_.k.Oi=function(a){9===a.keyCode&&this.Fb()&&(a=this.M,_.V(a.j,"gb_r",!0),ti(a))};
_.k.Og=function(a){a:{if(36==a.keyCode||35==a.keyCode){var b=_.Th(this.j);if(0<b.length){var c=b[b.length-1];36==a.keyCode&&(c=!Ji(this)&&1<b.length?b[1]:b[0]);c.focus();a.preventDefault();break a}}27!=a.keyCode||this.T&&!Ji(this)||(this.close(),null!=this.U&&this.U.focus())}9===a.keyCode&&this.Fb()&&Ji(this)&&(b=a.target,c=_.Th(this.j),0<c.length&&(b==c[0]&&a.shiftKey?(c[c.length-1].focus(),a.preventDefault()):b!=c[c.length-1]||a.shiftKey||(c[0].focus(),a.preventDefault())))};
_.k.Ti=function(a){if(a.target instanceof Node){a:{a=a.target;for(var b=this.A;a&&a!==b;){var c=a.id;if(c in this.N){a=this.N[c];break a}a=a.parentNode}a=null}if(a){a=a.md();b=0;for(c=this.O.length;b<c;++b){var d=this.O[b];d.j.call(d.o,a)}this.T&&!Ji(this)||this.close()}}};
_.k.ag=function(a){this.Fb()&&a.target instanceof Node&&!(!Ji(this)||this.S&&_.Fe(a.target,Ci))&&("keydown"==a.type?27==a.keyCode&&(a.preventDefault(),a.stopPropagation(),this.close(),this.J().focus()):_.Hh(a.target,"gb_C")||_.Hh(a.target,"gb_zc")||_.Bg(this.j,a.target)||("touchstart"==a.type&&(a.preventDefault(),a.stopPropagation()),this.close()))};
_.k.vf=function(){this.Fb()&&(!Ji(this)||"IFRAME"!=document.activeElement.tagName&&(this.S&&_.Fe(document.activeElement,Ci)||_.Hh(document.activeElement,"gb_Fc")||_.Hh(document.activeElement,"gb_C")||_.wi(this.A)))};var Gi=function(a){a.o.Ja(document.body,Di,a.ag,!1,a);a.o.Ja(document.body,"focusin",a.vf)};W.prototype.ka=function(a,b){this.O.push(new Ei(a,b))};_.ci=function(a){_.ai.call(this,a);_.Bh.listen(a,this.j,!1,this)};_.w(_.ci,_.ai);
_.ci.prototype.j=function(a){this.dispatchEvent("click")||a.preventDefault()};
var Mi=function(){this.j=null};Mi.prototype.wd=function(){return this.j};
var Ni=function(a,b,c){this.j=a;this.o=b;this.A=c||_.n};
var Oi=function(a){this.j=[];this.B=a||this};Oi.prototype.o=function(a,b,c){this.C(a,b,c);this.j.push(new Ni(a,b,c))};Oi.prototype.C=function(a,b,c){c=c||_.n;for(var d=0,e=this.j.length;d<e;d++){var f=this.j[d];if(f.j==a&&f.o==b&&f.A==c){this.j.splice(d,1);break}}};Oi.prototype.A=function(a){a.j=this.B;for(var b=0,c=this.j.length;b<c;b++){var d=this.j[b];"catc"==d.j&&d.o.call(d.A,a)}};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Qi=function(a,b){_.P.call(this);this.j=a;this.A=Pi(this.j);this.F=b||100;this.B=_.O(a,"resize",this.C,!1,this)};_.B(_.Qi,_.P);_.Qi.prototype.R=function(){_.uf(this.B);_.Qi.Y.R.call(this)};_.Qi.prototype.C=function(){this.o||(this.o=new _.ji(this.D,this.F,this),_.gg(this,this.o));this.o.start()};
_.Qi.prototype.D=function(){if(!this.j.isDisposed()){var a=this.A,b=Pi(this.j);this.A=b;if(a){var c=!1;a.width!=b.width&&(this.dispatchEvent("b"),c=!0);a.height!=b.height&&(this.dispatchEvent("a"),c=!0);c&&this.dispatchEvent("resize")}else this.dispatchEvent("a"),this.dispatchEvent("b"),this.dispatchEvent("resize")}};
var Ri=function(a){_.P.call(this);this.o=a||window;this.A=_.O(this.o,"resize",this.B,!1,this);this.j=_.yg(this.o||window)},Si,Pi;_.B(Ri,_.P);_.Ti=function(){var a=window,b=_.ob(a);return Si[b]=Si[b]||new Ri(a)};Si={};Pi=function(a){return a.j?_.Qg(a.j):null};Ri.prototype.R=function(){Ri.Y.R.call(this);this.A&&(_.uf(this.A),this.A=null);this.j=this.o=null};Ri.prototype.B=function(){var a=_.yg(this.o||window);_.Tg(a,this.j)||(this.j=a,this.dispatchEvent("resize"))};
var Vi=function(a,b){this.B=new Oi(this);this.G=a;this.D=b;this.j=Ui(a.offsetWidth,this.D);this.H=new _.Qi(_.Ti(),10);_.O(this.H,"b",function(){window.requestAnimationFrame?window.requestAnimationFrame((0,_.y)(this.F,this)):this.F()},!1,this)},Ui=function(a,b){for(var c=0,d=b.length-1,e=b[0];c<d;){if(a<=e.max)return e.id;e=b[++c]}return b[d].id};Vi.prototype.F=function(){var a=Ui(this.G.offsetWidth,this.D);a!=this.j&&(this.j=a,this.A(new Mi))};Vi.prototype.o=function(a,b,c){this.B.o(a,b,c)};
Vi.prototype.C=function(a,b){this.B.C(a,b)};Vi.prototype.A=function(a){this.B.A(a)};
var Wi={id:"unlimitedProductControl",Yd:Number.MAX_SAFE_INTEGER};
_.di=function(a){_.ai.call(this,a);_.O(a,"click",this.j,!1,this)};_.w(_.di,_.ai);_.di.prototype.o=function(){var a=this.J().getAttribute("aria-pressed");return(null==a?a:"boolean"===typeof a?a:"true"==a)||!1};_.di.prototype.j=function(a){a=a.currentTarget;var b=_.Ph(a,"pressed");_.fg(_.Wh(b))||"true"==b||"false"==b?_.K(a,"pressed","true"==b?"false":"true"):a.removeAttribute("aria-pressed");this.dispatchEvent("click")};
var X=function(a,b,c,d){_.P.call(this);this.A=a;_.Me(this.A,"gb_Jd");this.o=b;this.P=c;this.La="";this.rb=d;this.H=this.j=null;this.Ha=this.S=this.O=!1;this.ma=_.t(_.E(this.o,16),!1);this.T=new _.R(this);this.Ba=_.U("gb_0c",this.A);this.X=_.U("gb_z",this.A);this.ha=_.t(_.E(b,6),!1);this.Ac=_.U("gb_4c",this.Ba);this.C=_.U("gb_Ld",this.A);this.N=_.U("gb_Sd",this.A);(this.wa=_.t(_.E(this.o,21),!1))&&this.C&&(this.Ga=_.U("gb_xe",this.A),this.zd=_.U("gb_Be",this.A),this.U=_.U("gb_ye",this.A));this.F=_.U("gb_Vd",
this.A);this.W=_.U("gb_Sc",this.A);this.uj=_.U("gb_Re",this.A);this.G=_.U("gb_2c",this.A);this.D=_.U("gb_Ud",this.A);this.na=Array.prototype.slice.call(_.Fh("gb_2d",this.A));this.V=!1;this.uc=_.t(_.E(this.o,19),!1);this.tc=_.t(_.E(this.o,20),!1);this.Vb=_.t(_.E(this.o,45),!1);this.vc=_.t(_.E(this.o,46),!1);a=Xi(this,!0);b=Xi(this,!1);this.yc=Math.max(a,b);this.ka=_.E(this.o,15);c=_.Pa(_.D(this.o,30),0);0!=c&&Yi(this,c);a=Zi(this,a,b);this.L=new Vi(this.A,$i);this.Hb=_.u(_.D(this.o,37));this.Db=_.u(_.D(this.o,
38));_.L(this.A,"gb_Xd");this.jj=_.t(_.E(this.o,39));this.wa&&this.C&&(this.Xa=new Vi(this.A,aj),this.Xa.o("catc",this.Da,this),this.Da(),_.Ch(this.T,this.Ga,function(){var e=this.zd,f=!_.L(e,"gb_za");_.V(e,"gb_za",f)}));this.xc=_.t(_.E(this.o,1),!1);this.wc=_.t(_.E(this.o,40),!1);bj(this);cj(this,this.L.j);this.L.o("catc",this.Kb,this);_.E(this.o,8)&&document.addEventListener("scroll",(0,_.y)(function(){_.V(this.A,"gb_Nd",0<window.scrollY)},this));null!=this.D&&_.E(this.o,7)&&(this.va=new Vi(this.D,
a),this.va.o("catc",this.Ie,this),this.Ie());this.K=null;if(this.Z=_.U("gb_ia",this.A))this.K=_.U("gb_na",this.Z),this.T.B(this.K,"error",this.Di,!1,this)};_.w(X,_.P);_.k=X.prototype;
_.k.Di=function(){null!=this.K&&(this.K.src="https://www.gstatic.com/images/icons/material/system/1x/broken_image_grey600_18dp.png",this.K.srcset="https://www.gstatic.com/images/icons/material/system/1x/broken_image_grey600_18dp.png 1x, https://www.gstatic.com/images/icons/material/system/2x/broken_image_grey600_18dp.png 2x",_.T(this.K,"width","auto"),_.N(this.K.parentElement,"gb_ma"),_.T(this.K.parentElement,"line-height","30px"))};_.k.J=function(){return this.A};
_.k.Vj=function(a){this.H=a;dj(this,this.O);a=ej(this);0!=a&&fj(this,a)};_.k.Wj=function(a,b){this.H&&ii(this.H,a,b)};_.k.Va=function(a){this.ob(a||this.jj?1:0);this.nb(a?this.Hb:this.Db);_.V(this.J(),"gb_4",a);var b=_.U("gb_1");null!=b&&_.V(b,"gb_4",a);this.j&&this.wc&&_.V(this.j.j,"gb_Kc",a);_.I.j().C.then(function(c){c.Va(a)},void 0,this);this.Z&&_.V(this.Z,"gb_4",a);_.Te("dd").Va(a)};_.k.Yj=function(a){this.Ba&&(_.Vg(this.Ac,a||""),_.V(this.Ba,"gb_za",!a),this.ha=!!a,cj(this,this.L.j))};
_.k.Qg=function(){return _.U("gb_je",this.C)};_.k.Ie=function(){if(null!=this.va){var a=this.va.j;3==a?gj(this,!1):1==a?gj(this,!0):gj(this,"gb_Mc"==this.L.j)}};
var gj=function(a,b){if(_.E(a.o,7)&&(!a.V||b)){if(a.ka){var c=_.U("gb_pe",a.A);if(c){var d=_.U("gb_qe",a.A),e="gb_Mc"!=a.L.j||b?"":a.yc+"px";_.T(c,"min-width",e);_.T(d,"min-width",e)}}_.L(a.D,"gb_De")!=b&&(_.V(a.D,"gb_De",b),b?a.dispatchEvent("sfi"):a.dispatchEvent("sfu"),_.V(_.U("gb_Se",a.D),"gb_De",b),b&&a.Da())}},hj=function(a){var b=_.U("gb_Fc");if(b){var c=new Map;c.set("menu",_.U("gb_zc",a.A));c.set("back",_.U("gb_Cc"));c.set("close",_.U("gb_Dc"));var d=!1;c.forEach(function(e){e||(a.P.log(Error("Z")),
d=!0)});if(!d){a.j=new W(c,b,_.t(_.E(a.o,16),!1),_.t(_.E(a.o,9),!1),_.t(_.E(a.o,33),!1));a.j.listen("open",a.Tb,!1,a);a.j.listen("close",a.Lb,!1,a);a.j.listen("msc",a.Ub,!1,a);switch(_.D(a.o,32)){case 1:a.M("back");break;case 2:a.M("close");break;case 3:a.M("none");break;default:a.M("default")}_.ei();_.z("gbar.C",W);W.prototype.ca=W.prototype.Ed;W.prototype.cb=W.prototype.zh;W.prototype.cc=W.prototype.ka;W.prototype.cd=W.prototype.ha;W.prototype.ce=W.prototype.yh;W.prototype.cf=W.prototype.open;W.prototype.cg=
W.prototype.close;W.prototype.ch=W.prototype.getStyle;W.prototype.ck=W.prototype.Fb;W.prototype.cl=W.prototype.Rj;W.prototype.cm=W.prototype.Ng;W.prototype.cn=W.prototype.Xj;_.z("gbar.D",Bi);Bi.prototype.da=Bi.prototype.Ah;Bi.prototype.db=Bi.prototype.Bh;Bi.prototype.dc=Bi.prototype.Lg;Bi.prototype.dd=Bi.prototype.Mg;_.z("gbar.E",zi);zi.prototype.ea=zi.prototype.J;zi.prototype.eb=zi.prototype.Jg;zi.prototype.ec=zi.prototype.Ig;zi.prototype.ed=zi.prototype.md;_.z("gbar.F",Ai);Ai.prototype.fa=Ai.prototype.Kg;
Ai.prototype.fb=Ai.prototype.Uj;Ai.prototype.fc=Ai.prototype.Tj;Ai.prototype.fd=Ai.prototype.uf;Ai.prototype.ed=Ai.prototype.md;_.I.j().j.resolve(a.j)}}else a.P.log(Error("$"))},bj=function(a){var b=_.I.j();a.C||b.j.reject(Error("aa"));_.t(_.E(a.o,7))||b.G.reject(Error("ba"));_.t(_.E(a.o,12))||b.D.reject(Error("ca"));_.t(_.E(a.o,13))||b.F.reject(Error("da"))},cj=function(a,b){!a.j&&a.C&&hj(a);a.j&&!a.S&&a.M("default");a.j&&a.tc&&a.M("none");ij(a);if(a.uc||a.ma)a.O=!0;else if(a.vc)a.O=!1;else if(a.ha)a.O=
!1;else{var c=_.t(_.E(a.o,5),!1),d=_.t(_.E(a.o,7),!1);a.O=!("gb_pa"===b&&(c||d))}c="gb_pa"==b;d="gb_Pd"==b;a.Vb&&a.X&&_.V(a.X,"gb_za",c||d);var e=jj(a,b);a.j&&e?_.kj(a)||null==a.W||(e=_.U("gb_Rc"),a.W.parentNode!=e&&e.insertBefore(a.W,e.childNodes[0]||null),_.N(a.F,"gb_Wd"),a.ya(),a.dispatchEvent("upi")):_.kj(a)&&a.C&&null!=a.W&&(e=a.uj,e.insertBefore(a.W,e.childNodes[0]||null),_.Me(a.F,"gb_Wd"),a.ya(),a.dispatchEvent("upo"));_.E(a.o,44)&&!a.ma&&!_.E(a.o,10)&&1<lj(a).length&&a.X&&a.F&&(_.V(a.X,"gb_za",
c),_.V(a.F,"gb_Wd",c));if(a.H&&!a.ma){e=a.H.J();var f=!a.ha;_.V(e,"gb_za",!f);f&&dj(a,a.O)}a.j&&(a.j.isVisible("menu")||a.j.isVisible("back"))&&!Ji(a.j)&&(a.Ha=a.j.Fb());e=_.Ng(xi);_.Ne(a.A,e);_.N(a.A,b);if(a.ka&&null!=a.G)if("gb_Mc"!=b)_.T(a.G,"min-width",""),_.T(a.F,"min-width","");else{f=_.hh(a.G).width;var g=_.hh(a.F).width;f=Math.max(f,g);_.T(a.G,"min-width",f+"px");_.T(a.F,"min-width",f+"px")}c?a.V||(a.V=!0,gj(a,a.V)):(a.V=!1,a.Ie());null!=a.D&&(_.V(a.D,"gb_Ke",!c&&!d),_.V(a.D,"gb_Je",c||d));
a.j&&(c=a.j.j,_.Ne(c,e),_.N(c,b),Ji(a.j)?_.U("gb_6d").appendChild(c):a.A.appendChild(c),a.j.isVisible("menu")||a.j.isVisible("back"))&&(b=!Ji(a.j),c=a.j.Fb(),b&&!c&&a.Ha?a.j.open():!b&&c&&a.j.close());mj(a)},dj=function(a,b){var c=_.U("gb_yc",a.H.J());_.V(c,"gb_za",!b);a=_.U("gb_4d",a.H.J());null!=a&&_.V(a,"gb_ie",!b)},Zi=function(a,b,c){var d=320,e=_.Pa(_.D(a.o,29),0);0<e&&(d=e);e=d+2*Math.max(b,c);b=d+b+c;return e!=b&&a.ka?[{id:1,max:b},{id:2,max:e},{id:3}]:[{id:1,max:b},{id:3}]},Xi=function(a,
b){if(a=_.U(b?"gb_pe":"gb_qe",a.A)){var c=a.offsetWidth;_.vb(a.children,function(d){_.L(d,"gb_za")&&(c-=d.offsetWidth)});return c}return 0},nj=function(a){return function(){a.click()}},lj=function(a){var b=_.U("gb_pe",a.A),c=_.U("gb_qe",a.A),d=[];b&&_.vb(b.children,function(e){d.push(e)});_.t(_.E(a.o,7),!1)&&(a=_.U("gb_De",a.D))&&(a=_.U("gb_mf",a),a.j=!0,d.push(a));c&&_.vb(c.children,function(e){d.push(e)});return d};
X.prototype.Da=function(){if(this.wa&&this.C){var a=lj(this),b=!1;a=_.wb(a,function(f){b=b||_.L(f,"gb_se");return _.L(f,"gb_8c")||_.L(f,"gb_vf")||_.L(f,"gb_mf")});var c=this.Xa.j.Yd,d=!1;if(a.length>c||b)d=!0,c--;var e=a.length-c;if(d!=!_.L(this.Ga,"gb_za")||e!=this.U.children){_.V(this.Ga,"gb_za",!d);if(d)for(;this.U.firstChild;)this.U.removeChild(this.U.firstChild);oj(this,a,c);d?this.T.B(document.body,pj,this.Wa,!0,this):this.T.Ja(document.body,pj,this.Wa,!1,this)}}};
var oj=function(a,b,c){b=_.wb(b,function(f){return _.L(f,"gb_se")?(qj(this,f),!1):!0},a);for(var d=0;d<b.length;d++){var e=b[d];d>=c?qj(a,e):_.Me(e,"gb_za")}},qj=function(a,b){_.N(b,"gb_za");var c=_.Be("LI");_.Le(c,["gb_ze","gb_Tc","gb_Zc"]);c.tabIndex=0;_.Ch(a.T,c,nj(b));var d=_.S("A","gb_Vc");c.appendChild(d);var e=_.S("SPAN","gb_Wc");d.appendChild(e);d=b.j?b.getAttribute("aria-label"):b.title;_.Vg(e,d);d=!1;_.L(b,"gb_vf")&&(d=!0);var f,g=b.children[0];d?f=g.children[0].children[0].src:b.j?f="https://www.gstatic.com/images/icons/material/system/1x/search_black_24dp.png":
f=g.src;a.B=_.S("IMG");_.Le(a.B,["gb_Xc","gb_Ae"]);a.B.setAttribute("src",f);e.parentNode&&e.parentNode.insertBefore(a.B,e);a.U.appendChild(c)};X.prototype.Wa=function(a){!_.L(this.zd,"gb_za")&&a.target instanceof Node&&("keydown"==a.type?27==a.keyCode&&(a.preventDefault(),a.stopPropagation(),_.N(this.zd,"gb_za"),this.J().focus()):_.Bg(this.zd,a.target)||("touchstart"==a.type&&(a.preventDefault(),a.stopPropagation()),_.N(this.zd,"gb_za")))};
X.prototype.Kb=function(){cj(this,this.L.j);this.j&&_.rj(this,this.j.Fb(),!1);this.dispatchEvent("ffc")};_.rj=function(a,b,c){a.j&&(Ji(a.j)&&(c=b=!1),a=document.body,_.V(a,"gb_ne",b),_.V(a,"gb_me",c))};X.prototype.Tb=function(){_.rj(this,!0,!0)};X.prototype.Lb=function(){_.rj(this,!1,!0)};X.prototype.Ub=function(){var a=Ji(this.j),b=this.j.j;a?_.U("gb_6d").appendChild(b):this.A.appendChild(b)};_.kj=function(a){return!!a.j&&_.L(a.F,"gb_Wd")};
X.prototype.M=function(a){var b=!1;switch(a){case "back":this.S=!0;Li(this.j);Ki(this.j,"back");b=!0;break;case "close":this.S=!0;Li(this.j);Ki(this.j,"close");b=!0;break;case "default":this.S=!1;jj(this,this.L.j)||this.xc?(this.j&&!this.j.isVisible("menu")&&(Li(this.j),Ki(this.j,"menu")),b=!0):(this.j&&this.j.isVisible("back")&&Li(this.j),this.j&&this.j.isVisible("menu")?(a=this.j,a.close(),_.N(a.J(),"gb_za"),!_.L(a.X,"gb_za")&&_.Me(a.J(),"gb_Ec")):(a=_.U("gb_zc",this.A))&&_.N(a,"gb_za"),b=!1);break;
case "none":this.S=!0,Li(this.j),b=!1}null!=this.G&&_.V(this.G,"gb_3c",b)};var jj=function(a,b){var c=_.t(_.E(a.o,5),!1),d=_.t(_.E(a.o,2),!1);return!(_.t(_.E(a.o,10),!1)||a.ma||_.t(_.E(a.o,44),!1))&&d&&("gb_pa"==b||"gb_Pd"==b&&(c||a.ha))};X.prototype.wb=function(){return this.A.offsetHeight};var mj=function(a){var b=a.A.offsetHeight+"px";a.La!=b&&(a.La=b,a.rb&&(a.rb.style.height=b),a.dispatchEvent("resize"))};X.prototype.zc=function(){this.N&&mj(this)};
X.prototype.Jb=function(){if(!this.N){var a=_.Be("DIV");_.Le(a,["gb_Sd","gb_2d"]);sj(a,ej(this));a.style.backgroundColor=this.A.style.backgroundColor;this.na.push(a);var b=this.C;b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling);this.N=a}return this.N};X.prototype.qd=function(){_.Ag(this.N);this.N=null;mj(this)};_.tj=function(a,b){a.C?a.C.appendChild(b):a.F?a.F.appendChild(b):a.P.log(Error("ea"))};
X.prototype.ob=function(a){2==a&&(a=0);for(var b=0;b<this.na.length;b++)sj(this.na[b],a);fj(this,a)};var fj=function(a,b){if(a.H){if(2==b){b=_.u(_.D(a.o,24),"");var c=_.u(_.D(a.o,27),"")}else 1==b?(b=_.u(_.D(a.o,23),""),c=_.u(_.D(a.o,26),"")):(b=_.u(_.D(a.o,22),""),c=_.u(_.D(a.o,25),""));""==b&&""==c||ii(a.H,b,c)}},ej=function(a){a=a.na[0];return a.classList.contains("gb_Ac")?1:a.classList.contains("gb_3d")?2:0},sj=function(a,b){_.Ne(a,["gb_3d","gb_Ac"]);1==b?_.N(a,"gb_Ac"):2==b&&_.N(a,"gb_3d")};
X.prototype.nb=function(a){this.A.style.backgroundColor=a};X.prototype.Ib=function(){return this.A.style.backgroundColor};X.prototype.ya=function(){var a=_.Te("dd");_.Yh(a)&&_.Yh(a).Gd(!1);a.ef(null)};X.prototype.nj=function(a){Yi(this,a-8-10);ij(this)};var Yi=function(a,b){null==a.D?a.P.log(Error("fa")):a.ka?a.P.log(Error("ga")):a.mb=0>b?0:b},ij=function(a){null!=a.G&&("gb_pa"==a.L.j?_.T(a.G,"min-width",""):null!=a.mb&&_.T(a.G,"min-width",a.mb+"px"))};
X.prototype.oj=function(a){_.V(_.U("gb_sc",this.C),"gb_za",!a)};X.prototype.qh=function(a){a&&(_.$h(_.U("gb_1"),a),_.I.j().o.then(function(b){return void b.Cd(a)}))};var pj="click mousedown scroll touchstart wheel keydown".split(" "),$i=[{id:"gb_pa",max:599},{id:"gb_Pd",max:1023},{id:"gb_Mc"}],aj=[{id:{id:"oneProductControl",Yd:1},max:320},{id:{id:"twoProductControl",Yd:2},max:360},{id:{id:"threeProductControl",Yd:3},max:410},{id:Wi}];
var uj;_.P.prototype.za=_.se(function(a,b,c,d,e){return a.call(this,b,_.se(fi,c),d,e)},_.P.prototype.listen);_.P.prototype.zb=_.P.prototype.mi;var vj=_.U("gb_oa");
if(null==vj)uj=null;else{var wj=_.F(_.Xd,_.Se,6)||new _.Se,xj=new X(vj,wj,_.J,_.U("gb_Od"));_.z("gbar.P",X);X.prototype.pa=X.prototype.wb;X.prototype.pb=X.prototype.Yj;X.prototype.pc=X.prototype.ob;X.prototype.pd=X.prototype.nb;X.prototype.pe=X.prototype.Jb;X.prototype.pf=X.prototype.zc;X.prototype.pg=X.prototype.qd;X.prototype.ph=X.prototype.Qg;X.prototype.pi=X.prototype.ya;X.prototype.pj=X.prototype.nj;X.prototype.pk=X.prototype.oj;X.prototype.pl=X.prototype.qh;X.prototype.pm=X.prototype.M;X.prototype.pn=
X.prototype.Ib;X.prototype.po=X.prototype.Wj;X.prototype.pp=X.prototype.Va;_.I.j().B.resolve(xj);uj=xj}_.yj=uj;

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Zj=function(a,b,c,d){c=void 0===c?!0:c;var e=_.D(a,b,d);Array.isArray(e)||(e=_.mc);if(_.wa(a.ta))c&&(_.xa(e),Object.freeze(e));else if(e===_.mc||_.wa(e))e=_.va(e.slice()),_.q(a,b,e,d);return e};
_.ak=function(a,b,c,d,e){e=void 0===e?!0:e;a.j||(a.j={});var f=_.wa(a.ta),g=a.j[c];d=_.Zj(a,c,!0,d);var h=f||_.wa(d);if(!g){g=[];f=f||h;for(var l=0;l<d.length;l++){var m=d[l];f=f||_.wa(m);m=_.Ba(m,b);void 0!==m&&(g.push(m),h&&_.xa(m.ta))}a.j[c]=g;_.ya(d,!f)}b=h||e;e=_.wa(g);b&&!e&&(Object.isFrozen(g)&&(a.j[c]=g=g.slice()),_.xa(g),Object.freeze(g));!b&&e&&(a.j[c]=g=g.slice());return g};
_.bk=function(a,b,c,d){d=void 0===d?!1:d;var e=_.wa(a.ta);b=_.ak(a,b,c,d,e);a=_.Zj(a,c,d);if(!(c=e)&&(c=a)){if(!Array.isArray(a))throw Error("y");c=!(_.ua(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&_.wa(d.ta)&&!e&&(b[c]=b[c].nf(_.kc),a[c]=b[c].ta);_.ya(a,!0)}return b};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ck;ck=function(a,b){return _.Ea(b)};_.dk=function(a){_.lc=!0;try{return JSON.stringify(a.toJSON(),ck)}finally{_.lc=!1}};_.ek=function(a){switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:return!0;default:return!1}};
_.fk=function(){};_.fk.prototype.A=null;
var hk;hk=function(){};_.B(hk,_.fk);hk.prototype.j=function(){var a=ik(this);return a?new ActiveXObject(a):new XMLHttpRequest};hk.prototype.o=function(){var a={};ik(this)&&(a[0]=!0,a[1]=!0);return a};var ik=function(a){if(!a.B&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.B=d}catch(e){}}throw Error("ma");}return a.B};
_.gk=new hk;

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.jk=function(a){return encodeURIComponent(String(a))};_.kk=function(a,b,c,d,e,f,g){var h="";a&&(h+=a+":");c&&(h+="//",b&&(h+=b+"@"),h+=c,d&&(h+=":"+d));e&&(h+=e);f&&(h+="?"+f);g&&(h+="#"+g);return h};_.lk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");_.mk=function(a){a=a.match(_.lk)[1]||null;!a&&_.n.self&&_.n.self.location&&(a=_.n.self.location.protocol.slice(0,-1));return a?a.toLowerCase():""};
_.nk=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)_.nk(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+_.jk(b)))};

}catch(e){_._DumpException(e)}
try{
var ok,pk,qk,rk,sk,tk,uk,wk,yk,zk,Bk,Ck,Dk,Ek,Gk,Hk,Ik;ok=function(a,b){b.lc&&(a.lc=b.lc.slice());var c=b.j;if(c){b=b.o;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=_.bk(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ok(f[g],e[g])}else(f=_.F(a,e.constructor,g,f))&&ok(f,e)}}}};pk=function(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});return function(c){return b[c.find(function(d){return d in b})]||""}};
qk=function(a){var b=_.ca();if("Internet Explorer"===a){if(_.fa())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);
b=pk(c);switch(a){case "Opera":if(_.da())return b(["Version","Opera"]);if(_.p("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(_.p("Edge"))return b(["Edge"]);if(_.p("Edg/"))return b(["Edg"]);break;case "Chromium":if(_.ia())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&_.ha()||"Safari"===a&&_.ja()||"Android Browser"===a&&_.ka()||"Silk"===a&&_.p("Silk")?(b=c[2])&&b[1]||"":""};rk=function(a){a=qk(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])};
sk=function(){var a=_.ca(),b="";_.p("Windows")?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):_.ma()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):_.p("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):-1!=_.ca().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):_.p("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):_.p("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1]);return 0<=_.sg(b||"",12)};tk=function(a){return _.F(a,this.Ec,this.j,!0)};
uk=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;r=m=0}function b(v){for(var A=g,x=0;64>x;x+=4)A[x/4]=v[x]<<24|v[x+1]<<16|v[x+2]<<8|v[x+3];for(x=16;80>x;x++)v=A[x-3]^A[x-8]^A[x-14]^A[x-16],A[x]=(v<<1|v>>>31)&4294967295;v=e[0];var M=e[1],Q=e[2],ea=e[3],aa=e[4];for(x=0;80>x;x++){if(40>x)if(20>x){var ra=ea^M&(Q^ea);var Gb=1518500249}else ra=M^Q^ea,Gb=1859775393;else 60>x?(ra=M&Q|ea&(M|Q),Gb=2400959708):(ra=M^Q^ea,Gb=3395469782);ra=((v<<5|v>>>27)&
4294967295)+ra+aa+Gb+A[x]&4294967295;aa=ea;ea=Q;Q=(M<<30|M>>>2)&4294967295;M=v;v=ra}e[0]=e[0]+v&4294967295;e[1]=e[1]+M&4294967295;e[2]=e[2]+Q&4294967295;e[3]=e[3]+ea&4294967295;e[4]=e[4]+aa&4294967295}function c(v,A){if("string"===typeof v){v=unescape(encodeURIComponent(v));for(var x=[],M=0,Q=v.length;M<Q;++M)x.push(v.charCodeAt(M));v=x}A||(A=v.length);x=0;if(0==m)for(;x+64<A;)b(v.slice(x,x+64)),x+=64,r+=64;for(;x<A;)if(f[m++]=v[x++],r++,64==m)for(m=0,b(f);x+64<A;)b(v.slice(x,x+64)),x+=64,r+=64}function d(){var v=
[],A=8*r;56>m?c(h,56-m):c(h,64-(m-56));for(var x=63;56<=x;x--)f[x]=A&255,A>>>=8;b(f);for(x=A=0;5>x;x++)for(var M=24;0<=M;M-=8)v[A++]=e[x]>>M&255;return v}for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,r;a();return{reset:a,update:c,digest:d,digestString:function(){for(var v=d(),A="",x=0;x<v.length;x++)A+="0123456789ABCDEF".charAt(Math.floor(v[x]/16))+"0123456789ABCDEF".charAt(v[x]%16);return A}}};
wk=function(a,b,c){_.vk(a.url,function(d){d=d.target;d.Lc()?b(d.Qd()):c(d.Xb())},a.Ag,a.body,a.Oj,a.lf,a.withCredentials)};_.xk=function(a){var b=_.Ha(a.ta);_.uc=b;b=new a.constructor(b);_.uc=null;ok(b,a);return b};yk=function(a,b){a.o=b;a.Ab&&a.Rb?(a.stop(),a.start()):a.Ab&&a.stop()};zk=function(a){return a.A||(a.A=a.o())};_.Ak=function(a,b){a=a.split(".");b=b||_.n;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b};Bk=function(a,b){return a+Math.random()*(b-a)};
Ck=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]};Dk=function(a,b){var c=[];for(b=b||0;b<a.length;b+=2)_.nk(a[b],a[b+1],c);return c.join("&")};Ek=function(a,b){var c=2==arguments.length?Dk(arguments[1],0):Dk(arguments,1);return Ck(a,c)};_.Fk=function(a,b,c){c=null!=c?"="+_.jk(c):"";return Ck(a,b+c)};
Gk=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};Hk=/#|$/;Ik=/[?&]($|#)/;_.Jk=function(a,b){for(var c=a.search(Hk),d=0,e,f=[];0<=(e=Gk(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ik,"$1")};
var Kk=function(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("na`"+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==
c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("oa`"+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a};
var Mk=function(a,b,c){var d=String(_.n.location.href);return d&&a&&b?[b,Lk(Kk(d),a,c||null)].join(" "):null},Lk=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],_.vb(d,function(h){e.push(h)}),Nk(e.join(" "));var f=[],g=[];_.vb(c,function(h){g.push(h.key);f.push(h.value)});c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];_.vb(d,function(h){e.push(h)});a=Nk(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")},Nk=function(a){var b=
uk();b.update(a);return b.digestString().toLowerCase()};
var Ok={};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Pk=function(a){this.j=a||{cookie:""}},Qk;_.k=Pk.prototype;
_.k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ll;d=c.ml||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Xd}if(/[;=\s]/.test(a))throw Error("pa`"+a);if(/[;\r\n]/.test(b))throw Error("qa`"+b);void 0===h&&(h=-1);this.j.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
_.k.get=function(a,b){for(var c=a+"=",d=(this.j.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,_.tb)(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};_.k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Xd:0,path:b,domain:c});return d};_.k.Ob=function(){return Qk(this).keys};_.k.ab=function(){return Qk(this).values};_.k.Yb=function(){return!this.j.cookie};_.k.clear=function(){for(var a=Qk(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
Qk=function(a){a=(a.j.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,_.tb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};_.Rk=new Pk("undefined"==typeof document?null:document);
var Sk,Tk;Sk=function(a){return!!Ok.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)};Tk=function(a,b,c,d){(a=_.n[a])||(a=(new Pk(document)).get(b));return a?Mk(a,c,d):null};
_.Uk=function(a,b){b=void 0===b?!1:b;var c=Kk(String(_.n.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=_.n.__SAPISID||_.n.__APISID||_.n.__3PSAPISID||_.n.__OVERRIDE_SID;Sk(e)&&(f=f||_.n.__1PSAPISID);if(f)e=!0;else{var g=new Pk(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Sk(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?_.n.__SAPISID:_.n.__APISID,e||(e=
new Pk(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Mk(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Sk(b)&&((b=Tk("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Tk("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")};
var Vk=function(a){this.o=this.j=this.A=a};Vk.prototype.reset=function(){this.o=this.j=this.A};
var Xk,Yk,Zk;_.Wk=function(a){_.P.call(this);this.headers=new Map;this.M=a||null;this.o=!1;this.L=this.j=null;this.F="";this.A=0;this.C="";this.B=this.O=this.H=this.N=!1;this.D=0;this.K=null;this.S="";this.P=this.G=!1};_.B(_.Wk,_.P);Xk=/^https?$/i;Yk=["POST","PUT"];Zk=[];_.vk=function(a,b,c,d,e,f,g){var h=new _.Wk;Zk.push(h);b&&h.listen("complete",b);h.Ua("ready",h.V);f&&(h.D=Math.max(0,f));g&&(h.G=g);h.send(a,c,d,e)};_.Wk.prototype.V=function(){this.ua();_.Ue(Zk,this)};
_.Wk.prototype.send=function(a,b,c,d){if(this.j)throw Error("ra`"+this.F+"`"+a);b=b?b.toUpperCase():"GET";this.F=a;this.C="";this.A=0;this.N=!1;this.o=!0;this.j=this.M?this.M.j():_.gk.j();this.L=this.M?zk(this.M):zk(_.gk);this.j.onreadystatechange=(0,_.y)(this.T,this);try{this.O=!0,this.j.open(b,String(a),!0),this.O=!1}catch(g){$k(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===
typeof d.get){e=_.Za(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("sa`"+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});e=_.n.FormData&&a instanceof _.n.FormData;!_.pe(Yk,b)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=_.Za(c);for(d=b.next();!d.done;d=b.next())c=_.Za(d.value),d=c.next().value,c=c.next().value,this.j.setRequestHeader(d,c);this.S&&(this.j.responseType=this.S);
"withCredentials"in this.j&&this.j.withCredentials!==this.G&&(this.j.withCredentials=this.G);try{al(this),0<this.D&&((this.P=bl(this.j))?(this.j.timeout=this.D,this.j.ontimeout=(0,_.y)(this.U,this)):this.K=_.Hg(this.U,this.D,this)),this.H=!0,this.j.send(a),this.H=!1}catch(g){$k(this,g)}};var bl=function(a){return _.C&&_.vg(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout};
_.Wk.prototype.U=function(){"undefined"!=typeof _.kb&&this.j&&(this.C="Timed out after "+this.D+"ms, aborting",this.A=8,this.dispatchEvent("timeout"),this.abort(8))};var $k=function(a,b){a.o=!1;a.j&&(a.B=!0,a.j.abort(),a.B=!1);a.C=b;a.A=5;cl(a);dl(a)},cl=function(a){a.N||(a.N=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
_.Wk.prototype.abort=function(a){this.j&&this.o&&(this.o=!1,this.B=!0,this.j.abort(),this.B=!1,this.A=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),dl(this))};_.Wk.prototype.R=function(){this.j&&(this.o&&(this.o=!1,this.B=!0,this.j.abort(),this.B=!1),dl(this,!0));_.Wk.Y.R.call(this)};_.Wk.prototype.T=function(){this.isDisposed()||(this.O||this.H||this.B?el(this):this.W())};_.Wk.prototype.W=function(){el(this)};
var el=function(a){if(a.o&&"undefined"!=typeof _.kb&&(!a.L[1]||4!=_.fl(a)||2!=a.Xb()))if(a.H&&4==_.fl(a))_.Hg(a.T,0,a);else if(a.dispatchEvent("readystatechange"),4==_.fl(a)){a.o=!1;try{if(a.Lc())a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.A=6;try{var b=2<_.fl(a)?a.j.statusText:""}catch(c){b=""}a.C=b+" ["+a.Xb()+"]";cl(a)}}finally{dl(a)}}},dl=function(a,b){if(a.j){al(a);var c=a.j,d=a.L[0]?function(){}:null;a.j=null;a.L=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},
al=function(a){a.j&&a.P&&(a.j.ontimeout=null);a.K&&(_.Ig(a.K),a.K=null)};_.Wk.prototype.Lc=function(){var a=this.Xb(),b;if(!(b=_.ek(a))){if(a=0===a)a=_.mk(String(this.F)),a=!Xk.test(a);b=a}return b};_.fl=function(a){return a.j?a.j.readyState:0};_.Wk.prototype.Xb=function(){try{return 2<_.fl(this)?this.j.status:-1}catch(a){return-1}};_.Wk.prototype.Qd=function(){try{return this.j?this.j.responseText:""}catch(a){return""}};
var gl=function(a){_.G.call(this,a)};_.w(gl,_.G);var il=function(a){_.G.call(this,a,-1,hl)};_.w(il,_.G);var hl=[1];
new il;
var jl=function(a){_.G.call(this,a)};_.w(jl,_.G);
var kl;_.ll=function(a){_.G.call(this,a,31,kl)};_.w(_.ll,_.G);_.ml=function(a,b){return _.q(a,8,b)};kl=[3,20,27];
var ol=function(a){_.G.call(this,a,17,nl)};_.w(ol,_.G);var nl=[3,5];
var ql=function(a){_.G.call(this,a,6,pl)};_.w(ql,_.G);var pl=[5];
var rl=function(a){_.G.call(this,a)};_.w(rl,_.G);
var sl=new function(a,b){this.j=a;this.Ec=b;this.o=tk}(175237375,rl);
var wl=function(a,b,c,d,e,f,g,h,l,m,r){_.P.call(this);var v=this;this.o=[];this.U="";this.X=!1;this.W=this.O=-1;this.T=!1;this.A=null;this.C=0;this.ka=1;this.lf=0;this.N=!1;_.P.call(this);this.S=b||function(){};this.M=new tl(a,f);this.ha=d;this.V=r;this.ma=_.se(Bk,0,1);this.H=e||null;this.D=c||null;this.K=g||!1;this.F=l||null;this.withCredentials=!h;this.P=f||!1;this.Z=!this.P&&(65<=rk("Chromium")||45<=rk("Firefox")||12<=rk("Safari")||_.ma()&&sk())&&!!_.zg()&&!!_.zg().navigator&&!!_.zg().navigator.sendBeacon;
a=_.q(new jl,1,1);ul(this.M,a);this.B=new Vk(1E4);this.j=new _.Gg(this.B.j);_.gg(this,this.j);m=vl(this,m);_.O(this.j,"tick",m,!1,this);this.G=new _.Gg(6E5);_.gg(this,this.G);_.O(this.G,"tick",m,!1,this);this.K||this.G.start();this.P||(_.O(document,"visibilitychange",function(){"hidden"===document.visibilityState&&v.L()}),_.O(document,"pagehide",this.L,!1,this))};_.w(wl,_.P);var vl=function(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}};
wl.prototype.R=function(){this.L();_.P.prototype.R.call(this)};var xl=function(a){a.H||(a.H=.01>a.ma()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.H};wl.prototype.td=function(a){a instanceof _.ll?this.log(a):(a=_.ml(new _.ll,_.dk(a)),this.log(a))};_.yl=function(a,b){a.B=new Vk(1>b?1:b);yk(a.j,a.B.j)};
wl.prototype.log=function(a){a=_.xk(a);var b=this.ka++;_.q(a,21,b);_.D(a,1)||_.q(a,1,Date.now().toString());_.qc(a,15)||_.q(a,15,60*(new Date).getTimezoneOffset());this.A&&(b=_.xk(this.A),_.La(a,16,b));for(;1E3<=this.o.length;)this.o.shift(),++this.C;this.o.push(a);this.dispatchEvent(new zl(a));this.K||this.j.Rb||this.j.start()};
wl.prototype.flush=function(a,b){var c=this;if(0===this.o.length)a&&a();else if(this.N)Al(this);else{var d=Date.now();if(this.W>d&&this.O<d)b&&b("throttled");else{var e=Bl(this.M,this.o,this.C);d={};var f=this.S();f&&(d.Authorization=f);var g=xl(this);this.D&&(d["X-Goog-AuthUser"]=this.D,g=_.Fk(g,"authuser",this.D));this.F&&(d["X-Goog-PageId"]=this.F,g=_.Fk(g,"pageId",this.F));if(f&&this.U===f)b&&b("stale-auth-token");else{this.o=[];this.j.Rb&&this.j.stop();this.C=0;var h=_.dk(e);d={url:g,body:h,
Rk:1,Oj:d,Ag:"POST",withCredentials:this.withCredentials,lf:this.lf};g=function(l){c.B.reset();yk(c.j,c.B.j);if(l){var m=null;try{var r=JSON.parse(l.replace(")]}'\n",""));m=new ql(r)}catch(v){}m&&(l=Number(_.rc(m,1,"-1")),0<l&&(c.O=Date.now(),c.W=c.O+l),m=sl.o(m))&&(m=_.tc(m,1,-1),-1!=m&&(c.T||_.yl(c,m)))}a&&a()};h=function(l,m){var r=_.bk(e,_.ll,3),v=c.B;v.o=Math.min(3E5,2*v.o);v.j=Math.min(3E5,v.o+Math.round(.2*(Math.random()-.5)*v.o));yk(c.j,c.B.j);401===l&&f&&(c.U=f);void 0===m&&(m=500<=l&&600>
l||401===l||0===l);m&&(c.o=r.concat(c.o),c.K||c.j.Rb||c.j.start());b&&b("net-send-failed",l)};c.V?c.V.send(d,g,h):c.ha(d,g,h)}}}};wl.prototype.L=function(){this.X&&Al(this);this.flush()};
var Al=function(a){Cl(a,function(b,c){b=_.Fk(b,"format","json");b=_.zg().navigator.sendBeacon(b,_.dk(c));a.N&&!b&&(a.N=!1);return b})},Cl=function(a,b){if(0!==a.o.length){var c=_.Jk(xl(a),"format");c=Ek(c,"auth",a.S(),"authuser",a.D||"0");for(var d=0;10>d&&a.o.length;++d){var e=a.o.slice(0,32),f=Bl(a.M,e,a.C);if(!b(c,f))break;a.C=0;a.o=a.o.slice(e.length)}a.j.Rb&&a.j.stop()}},zl=function(){_.Ye.call(this,"event-logged",void 0)};_.w(zl,_.Ye);
var tl=function(a,b){this.o=b=void 0===b?!1:b;this.locale=null;this.j=new ol;_.q(this.j,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));ul(this,new jl)},ul=function(a,b){_.La(a.j,1,b);_.D(b,1)||_.q(b,1,1);if(!a.o){b=_.F(a.j,jl,1);var c=_.F(b,gl,11);c||(c=new gl,_.La(b,11,c));b=c;_.D(b,5)||_.q(b,5,a.locale)}},Bl=function(a,b,c){c=void 0===c?0:c;a=_.xk(a.j);a=_.q(a,4,Date.now().toString());b=_.Ka(a,3,b);c&&_.q(b,14,c);return b};
_.Dl=function(a,b,c,d,e,f,g){wl.call(this,a,_.Uk,b,wk,c,d,e,void 0,f,g)};_.w(_.Dl,wl);

}catch(e){_._DumpException(e)}
try{
var Fl,Kl,Ll,Ml,Nl;_.El=function(a,b,c){_.nc(a);_.Zj(a,b).push(c);return a};Fl=function(a){_.G.call(this,a)};_.w(Fl,_.G);var Gl=function(a){_.G.call(this,a)};_.w(Gl,_.G);var Hl=[2],Il=function(a){_.G.call(this,a,-1,Hl)};_.w(Il,_.G);_.Jl=function(a){var b=Number(a);return 0==b&&_.fg(a)?NaN:b};Kl=function(a,b,c,d,e){this.j=a;this.name=b;this.A=c;this.B=d;this.o=e};
Ll=function(a){this.j=[];if(a.stack){a=a.stack.replace(/\s*$/,"").split("\n");for(var b=0;b<a.length;b++){var c,d=_.td;if(c=a[b].match(_.sd))c=new Kl(c[1]||"",c[2]||"",c[3]||"","",c[4]||c[5]||""),this.j.push(c);else if(c=a[b].match(d))c=new Kl(c[1]||"",c[2]||"","",c[3]||"",c[4]||""),this.j.push(c)}}};
Ml=function(a){return _.xb(a.j,function(b){var c=[b.j?b.j+".":"",b.name?b.name:"anonymous",b.B,b.A?" [as "+b.A+"]":""];if(b.o){c.push(" at ");b=b.o;var d="",e=b.match(/(.*?)(:\d+(:\d+)?)$/);e&&(b=e[1],d=e[2]);c.push(b.replace(window.location.href.replace(/#.*/,""),"[page]").replace(/http.*?extern_js.*?\.js/,"[xjs]"));c.push(d)}return c.join("")})};Nl=function(a,b,c,d,e){_.Oc.call(this,a,b,c,d,e);this.A=new Ll(c)};_.w(Nl,_.Oc);
Nl.prototype.o=function(){_.Oc.prototype.o.call(this);window.console&&window.console.log&&window.console.log("Stack: ",this.A)};Nl.prototype.j=function(a){var b=_.Oc.prototype.j.call(this,a)+"&jsst=";var c=this.A;a-=b.length;if(4>a)a="";else if(0==c.j.length)a="none";else{c=Ml(c);var d;var e=c.length-2;for(d=_.jk(c.join("\n"));0<e&&d.length>a;e--,d=_.jk(c.join("\n")))e==c.length-2?c[e]="[...]":c.splice(e,1);a=d.substr(0,a)}return b+a};
var Ol=function(a,b,c){_.H.call(this);this.j=a;this.o=b;this.A=c};_.w(Ol,_.H);Ol.prototype.B=function(a,b){return new Nl(this.j,this.o,a,this.A,b)};var Ql=function(a){_.G.call(this,a,-1,Pl)};_.w(Ql,_.G);var Pl=[1,2,3,4];
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Rl=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})};
var Sl=function(a,b){_.H.call(this);this.o=b;this.O=0;this.D=_.Pa(_.sc(a,2,1E-4),.001);this.G=_.Pa(_.sc(a,10,0),0);this.W=_.u(_.D(a,21),"");this.Z=_.Pa(_.D(a,26),0);this.X=_.Pa(_.D(a,27),0);this.V=_.u(_.D(a,28),"");this.ha=_.Pa(_.D(a,29),-1);this.ma=_.Pa(_.D(a,4),0);this.U=_.Pa(_.D(a,5),-1);this.S=_.u(_.D(a,7),"");this.M=_.u(_.D(a,6),"");this.L=_.u(_.D(a,8),"");this.H=_.D(a,9);this.ka=!!_.E(a,11);this.N=!!_.E(a,12);this.P=_.E(a,22);this.B=_.E(a,24);this.T=_.E(a,23);this.A=_.qc(a,17)?_.D(a,17).split(","):
[];var c=Math.random();this.C=_.t(_.E(a,1))&&c<this.D;this.F=_.t(_.E(a,1))&&c<this.G;this.K="og-"+Rl();if(this.C||this.F){a=this.j=new _.Dl(373,_.u(_.D(b,5)));a.T=!0;_.yl(a,1E3);a=this.j;a.X=a.Z;if(0!=this.A.length){a=new Ql;for(b=0;b<this.A.length;b++)c=Number(this.A[b]),isNaN(c)||0==c||_.El(a,3,c);b=this.j;a?(b.A||(b.A=new Il),a=_.dk(a),_.q(b.A,4,a)):b.A&&_.q(b.A,4,void 0,!1)}_.gg(this,this.j)}};_.w(Sl,_.H);
Sl.prototype.log=function(a,b){var c=!_.pe(Tl,a);if(c?this.C:this.F){b=(void 0===b?null:b)||new _.Ec;_.q(b,1,a);var d=++this.O;_.q(b,38,d);_.q(b,2,this.ma);_.q(b,4,c?this.D:this.G);_.q(b,6,this.W);c=_.F(b,Fl,57)||new Fl;_.q(c,1,this.Z);_.q(c,2,this.X);_.q(c,3,this.V);_.q(c,4,this.ha);_.La(b,57,c);b.Yc(this.U);this.T&&_.q(b,52,!0);_.q(b,11,this.M);_.q(b,10,this.S);_.q(b,5,this.L);window.performance&&window.performance.timing&&_.q(b,14,(new Date).getTime()-window.performance.timing.navigationStart);
_.q(b,13,this.H);_.q(b,16,this.ka);_.q(b,17,this.N);_.q(b,19,this.K);c=0;_.E(this.o,1)&&(c|=1);_.E(this.o,3)&&(c|=4);_.D(this.o,7)&&(c|=8);_.q(b,12,c);1===a&&(_.q(b,51,this.P),this.B&&_.q(b,56,this.B));_.q(b,55,self!=top);a=new _.ll;_.ml(a,_.dk(b));this.j.log(a)}};var Tl=[1,61,116,117];
var Ul,Vl,Xl,Yl,Zl;Ul=_.F(_.Xd,Gl,16)||new Gl;Vl=_.Zd()||new _.Hc;_.Wl=new Sl(Ul,Vl);Xl=_.Yd()||new _.Gc;Zl=_.F(_.Xd,_.Kc,14)||new _.Kc;Yl=_.D(Zl,9);var $l=_.sc(_.F(_.Xd,_.yd,3)||new _.yd,2,.001);_.J.A=new Ol(Xl,Yl,$l);_.J.j=_.Wl;

}catch(e){_._DumpException(e)}
try{
/*

 SPDX-License-Identifier: Apache-2.0
*/

}catch(e){_._DumpException(e)}
try{
/*

 SPDX-License-Identifier: Apache-2.0
*/
_.am=function(a){for(var b=0,c=0,d={};c<a.length;){var e=a[c++],f=_.lb(e)?"o"+_.ob(e):(typeof e).charAt(0)+e;Object.prototype.hasOwnProperty.call(d,f)||(d[f]=!0,a[b++]=e)}a.length=b};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/

}catch(e){_._DumpException(e)}
try{
/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var bm=window,cm=document,dm=bm.location,em=function(){},fm=/\[native code\]/,gm=function(a,b,c){return a[b]=a[b]||c},hm=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b},im=function(){var a;if((a=Object.create)&&fm.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},jm=gm(bm,"gapi",{});
var km={};km=gm(bm,"___jsl",im());gm(km,"I",0);gm(km,"hel",10);var lm=function(){var a=dm.href;if(km.dpo)var b=km.h;else{b=km.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b},mm=function(a){var b=gm(km,"PQ",[]);km.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},nm=function(a){return gm(gm(km,"H",im()),a,im())};
var om=gm(km,"perf",im());gm(om,"g",im());var pm=gm(om,"i",im());gm(om,"r",[]);im();im();var rm=function(a,b,c){b&&0<b.length&&(b=qm(b),c&&0<c.length&&(b+="___"+qm(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=gm(pm,"_p",im()),gm(b,c,im())[a]=(new Date).getTime(),b=om.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))},qm=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")};
var sm=im(),tm=[],um=function(a){throw Error("ta`"+a);};tm.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?km[b]=gm(km,b,[]).concat(c):gm(km,b,c)}if(b=a.u)a=gm(km,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var vm=/^(\/[a-zA-Z0-9_\-]+)+$/,wm=[/\/amp\//,/\/amp$/,/^\/amp$/],xm=/^[a-zA-Z0-9\-_\.,!]+$/,ym=/^gapi\.loaded_[0-9]+$/,zm=/^[a-zA-Z0-9,._-]+$/,Dm=function(a,b,c,d,e){var f=a.split(";"),g=f.shift(),h=sm[g],l=null;h?l=h(f,b,c,d):um("no hint processor for: "+g);l||um("failed to generate load url");b=l;c=b.match(Am);(d=b.match(Bm))&&1===d.length&&Cm.test(b)&&c&&1===c.length||um("failed sanity: "+a);try{if(a="?",e&&0<e.length&&(_.am(e),l=l+"?le="+e.join(","),a="&"),km.rol){var m=km.ol;m&&m.length&&(l=
""+l+a+"ol="+m.length)}}catch(r){}return l},Gm=function(a,b,c,d){a=Em(a);ym.test(c)||um("invalid_callback");b=Fm(b);d=d&&d.length?Fm(d):null;var e=function(f){return encodeURIComponent(f).replace(/%2C/g,",")};return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Df?"/am="+e(a.Df):"",a.Bg?"/rs="+e(a.Bg):"",a.Fg?"/t="+e(a.Fg):"","/cb=",e(c)].join("")},Em=function(a){"/"!==a.charAt(0)&&um("relative path");
for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))um("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");vm.test(b)||um("invalid_prefix");c=0;for(d=wm.length;c<d;++c)wm[c].test(b)&&um("invalid_prefix");c=Hm(a,"k",!0);d=Hm(a,"am");e=Hm(a,"rs");a=Hm(a,"t");return{pathPrefix:b,
version:c,Df:d,Bg:e,Fg:a}},Fm=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");zm.test(e)&&b.push(e)}return b.join(",")},Hm=function(a,b,c){a=a[b];!a&&c&&um("missing: "+b);if(a){if(xm.test(a))return a;um("invalid: "+b)}return null},Cm=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Bm=/\/cb=/g,Am=/\/\//g;sm.m=function(a,b,c,d){(a=a[0])||um("missing_hint");return"https://apis.google.com"+Gm(a,b,c,d)};
var Im=decodeURI("%73cript"),Jm=/^[-+_0-9\/A-Za-z]+={0,2}$/,Km=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c},Lm=function(){var a=km.nonce;return void 0!==a?a&&a===String(a)&&a.match(Jm)?a:km.nonce=null:cm.querySelector?(a=cm.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Jm)?km.nonce=a:km.nonce=null):null:null},Om=function(a){if("loading"!=cm.readyState)Mm(a);
else{var b=Lm(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+Im+' src="'+encodeURI(a)+'"'+c+"></"+Im+">";cm.write(Nm?Nm.createHTML(a):a)}},Mm=function(a){var b=cm.createElement(Im);b.setAttribute("src",Nm?Nm.createScriptURL(a):a);a=Lm();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=cm.getElementsByTagName(Im)[0])?a.parentNode.insertBefore(b,a):(cm.head||cm.body||cm.documentElement).appendChild(b)},Qm=function(a,b,c){Pm(function(){var d=b===lm()?gm(jm,"_",im()):im();d=gm(nm(b),"_",d);a(d)},c)},
Sm=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);var d=(b=c)&&b._c;if(d)for(var e=0;e<tm.length;e++){var f=tm[e][0],g=tm[e][1];g&&Object.prototype.hasOwnProperty.call(d,f)&&g(d[f],a,b)}b=[];a?b=a.split(":"):c.features&&(b=c.features);if(!(a=c.h)&&(a=lm(),!a))throw Error("ua");Rm(b||[],c,a)},Rm=function(a,b,c){a=hm(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,h=b.onerror,l=void 0;"function"==typeof h&&(l=h);var m=null,r=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";
h=gm(nm(c),"r",[]).sort();var v=gm(nm(c),"L",[]).sort(),A=km.le,x=[].concat(h),M=function(Gb,Pf){if(r)return 0;bm.clearTimeout(m);v.push.apply(v,Q);var Qf=((jm||{}).config||{}).update;Qf?Qf(e):e&&gm(km,"cu",[]).push(e);if(Pf){rm("me0",Gb,x);try{Qm(Pf,c,l)}finally{rm("me1",Gb,x)}}return 1};0<f&&(m=bm.setTimeout(function(){r=!0;g()},f));var Q=Km(a,v);if(Q.length){Q=Km(a,h);var ea=gm(km,"CP",[]),aa=ea.length;ea[aa]=function(Gb){if(!Gb)return 0;rm("ml1",Q,x);var Pf=function(Mh){ea[aa]=null;M(Q,Gb)&&mm(function(){d&&
d();Mh()})},Qf=function(){var Mh=ea[aa+1];Mh&&Mh()};0<aa&&ea[aa-1]?ea[aa]=function(){Pf(Qf)}:Pf(Qf)};if(Q.length){var ra="loaded_"+km.I++;jm[ra]=function(Gb){ea[aa](Gb);jm[ra]=null};a=Dm(c,Q,"gapi."+ra,h,A);h.push.apply(h,Q);rm("ml0",Q,x);b.sync||bm.___gapisync?Om(a):Mm(a)}else ea[aa](em)}else M(Q)&&d&&d()},Nm=_.sb("ogb-qtm#gapi"),Pm=function(a,b){if(km.hee&&0<km.hel)try{return a()}catch(c){b&&b(c),km.hel--,Sm("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&
b(c),c;}},Tm=jm.load;Tm&&gm(km,"ol",[]).push(Tm);jm.load=function(a,b){return Pm(function(){return Sm(a,b)})};

}catch(e){_._DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var gn=function(){};
/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
var sn,qn,ln,mn;_.hn=function(a,b){this.F=[];this.Ma=a;this.N=b||null;this.D=this.C=!1;this.A=void 0;this.L=this.O=this.H=!1;this.G=0;this.o=null;this.K=0};_.B(_.hn,gn);_.hn.prototype.cancel=function(a){if(this.C)this.A instanceof _.hn&&this.A.cancel();else{if(this.o){var b=this.o;delete this.o;a?b.cancel(a):(b.K--,0>=b.K&&b.cancel())}this.Ma?this.Ma.call(this.N,this):this.L=!0;this.C||this.j(new jn(this))}};_.hn.prototype.M=function(a,b){this.H=!1;kn(this,a,b)};
var kn=function(a,b,c){a.C=!0;a.A=c;a.D=!b;ln(a)},nn=function(a){if(a.C){if(!a.L)throw new mn(a);a.L=!1}};_.hn.prototype.B=function(a){nn(this);kn(this,!0,a)};_.hn.prototype.j=function(a){nn(this);kn(this,!1,a)};_.pn=function(a,b,c){return _.on(a,b,null,c)};_.on=function(a,b,c,d){a.F.push([b,c,d]);a.C&&ln(a);return a};_.hn.prototype.then=function(a,b,c){var d,e,f=new _.Nf(function(g,h){e=g;d=h});_.on(this,e,function(g){g instanceof jn?f.cancel():d(g);return qn},this);return f.then(a,b,c)};
_.hn.prototype.$goog_Thenable=!0;_.rn=function(a){var b=new _.hn;_.on(a,b.B,b.j,b);return b};_.hn.prototype.isError=function(a){return a instanceof Error};sn=function(a){return _.zb(a.F,function(b){return"function"===typeof b[1]})};qn={};
ln=function(a){if(a.G&&a.C&&sn(a)){var b=a.G,c=tn[b];c&&(_.n.clearTimeout(c.j),delete tn[b]);a.G=0}a.o&&(a.o.K--,delete a.o);b=a.A;for(var d=c=!1;a.F.length&&!a.H;){var e=a.F.shift(),f=e[0],g=e[1];e=e[2];if(f=a.D?g:f)try{var h=f.call(e||a.N,b);h===qn&&(h=void 0);void 0!==h&&(a.D=a.D&&(h==b||a.isError(h)),a.A=b=h);if(_.Lf(b)||"function"===typeof _.n.Promise&&b instanceof _.n.Promise)d=!0,a.H=!0}catch(l){b=l,a.D=!0,sn(a)||(c=!0)}}a.A=b;d&&(h=(0,_.y)(a.M,a,!0),d=(0,_.y)(a.M,a,!1),b instanceof _.hn?(_.on(b,
h,d),b.O=!0):b.then(h,d));c&&(b=new un(b),tn[b.j]=b,a.G=b.j)};_.vn=function(a){var b=new _.hn;b.B(a);return b};_.wn=function(a){var b=new _.hn;a.then(function(c){b.B(c)},function(c){b.j(c)});return b};_.xn=function(a){var b=new _.hn;b.j(a);return b};mn=function(){_.ba.call(this)};_.B(mn,_.ba);mn.prototype.message="Deferred has already fired";mn.prototype.name="AlreadyCalledError";var jn=function(){_.ba.call(this)};_.B(jn,_.ba);jn.prototype.message="Deferred was canceled";jn.prototype.name="CanceledError";
var un=function(a){this.j=_.n.setTimeout((0,_.y)(this.A,this),0);this.o=a};un.prototype.A=function(){delete tn[this.j];throw this.o;};var tn={};

}catch(e){_._DumpException(e)}
try{
var yn=function(a,b){_.Bh.listen(a,b,void 0,void 0)},zn=function(){_.ba.call(this)};_.w(zn,_.ba);var An=function(a,b){_.H.call(this);this.A=a;this.j=b;this.o=new _.hn};_.w(An,_.H);
An.prototype.init=function(a){try{if(!this.j)throw new zn("gapi-lm");var b={isPlusUser:_.u(_.D(a,4)),"googleapis.config":{signedIn:_.u(_.D(a,5))},lang:_.u(_.D(a,10))},c=_.u(_.D(a,6));c&&(b.iframes={":socialhost:":c});this.j("",{config:b});try{var d=_.Te("gs");if(!d)throw new zn("gapi-ss");this.j(d.j.join(":"),(0,_.y)(this.o.B,this.o));var e=_.na(d.o);for(a=0;a<e.length;a++)this.j(e[a].features,e[a].options)}catch(f){this.A.log(f)}}catch(f){this.A.log(f)}return this};
var Bn=function(a,b){_.H.call(this);this.j=a;this.B=b;this.o=new _.hn};_.w(Bn,_.H);Bn.prototype.C=function(a){try{var b=_.Ak("gadgets.config.update");b({"googleapis.config":{gcv:_.u(_.D(a,2)),sessionIndex:_.u(_.D(a,4)),elog:this.j.log,ilog:_.se(this.B.log,16)}});b({gwidget:{lang:_.u(_.D(a,5))}});this.o.B()}catch(c){this.j.log(c)}};Bn.prototype.A=function(a){a&&_.pn(this.o,a)};
Bn.prototype.init=function(a,b){try{_.D(a,1)?_.pn(b.o,(0,_.y)(this.C,this,a)):this.o.B(),_.z("gbar.lGC",(0,_.y)(this.A,this)),_.z("gbar.lPWF",(0,_.y)(this.A,this)),_.Ed(_.Ad.j(),"api").td()}catch(c){this.j.log(c)}return this};
(function(){var a=_.F(_.Xd,_.Kc,14)||new _.Kc,b=new An(_.J,_.Ak("gapi.load"));b.init(a);a=_.F(_.Xd,_.Lc,9)||new _.Lc;var c=new Bn(_.J,_.ae);c.init(a,b);c.A(function(){_.I.j().H.resolve(!0)});return c})();
(function(){_.Wl.log(1);var a=document.querySelector(".gb_2");a&&yn(a,function(d){var e=new _.Ec;var f=_.L(a,"gb_4");e=_.q(e,36,f);_.Wl.log(62,e);if(e=_.Ak("silk.s.sis.ca"))_.Wl.log(106),e(),d.preventDefault(),d.stopPropagation()});var b=document.querySelector(".gb_La"),c=document.querySelector("#gb.gb_Jc");b&&c&&yn(b,function(){_.Wl.log(79)})})();
var Cn=_.U("gb_Fc");if(Cn){var Dn=_.U("gb_sc",Cn);Dn&&new _.Oh(Dn,_.J,_.ae)}
;
}catch(e){_._DumpException(e)}
try{
var Np=function(){var a=_.Te("dd"),b=a.me("account");this.j=b?b.j:null;this.o=a.me("gbd4")};_.k=Np.prototype;_.k.Cd=function(a){var b;null==(b=this.o)||b.Cd(a);var c;b={};null==(c=this.j)||c.sendMessage("rcu",(b.cu=a,b))};_.k.Ug=function(a){var b;null==(b=this.o)||b.zf(a)};_.k.Tg=function(a,b,c,d){var e;null==(e=this.o)||e.Vg(a,b,c,d);var f;null==(f=this.j)||f.Db(a,b,c,d)};_.k.xh=function(){var a;null==(a=this.o)||a.yf(!0);var b;null==(b=this.j)||b.Kb()};
_.k.sh=function(a){var b;null==(b=this.j)||b.listen("pu",a,!1,this)};
var Op=function(){this.j=_.Te("dd")};Op.prototype.o=function(){this.j.Dg("aw");this.j.Dg("app")};
var Pp=_.F(_.Xd,_.Se,6);_.E(Pp,41)?(_.z("gbar.R",Op),Op.prototype.ra=Op.prototype.o,_.I.j().A.resolve(new Op)):_.I.j().A.reject(Error("Ha"));_.z("gbar.S",Np);Np.prototype.sa=Np.prototype.Cd;Np.prototype.sb=Np.prototype.Ug;Np.prototype.sc=Np.prototype.Tg;Np.prototype.sd=Np.prototype.xh;Np.prototype.se=Np.prototype.sh;_.I.j().o.resolve(new Np);

}catch(e){_._DumpException(e)}
})(this.gbar_);
// Google Inc.
