(function(t){function n(n){for(var r,s,o=n[0],u=n[1],c=n[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);a&&a(n);while(p.length)p.shift()();return l.push.apply(l,c||[]),e()}function e(){for(var t,n=0;n<l.length;n++){for(var e=l[n],r=!0,o=1;o<e.length;o++){var u=e[o];0!==i[u]&&(r=!1)}r&&(l.splice(n--,1),t=s(s.s=e[0]))}return t}var r={},i={app:0},l=[];function s(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)s.d(e,r,function(n){return t[n]}.bind(null,r));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var a=u;l.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),i=e.n(r);i.a},"07e1":function(t,n,e){"use strict";var r=e("969d"),i=e.n(r);i.a},1:function(t,n){},2:function(t,n){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"chess"},[e("div",{staticClass:"tip"},[t._v("现在是第"+t._s(t.n+1)+"手")]),e("div",{staticClass:"row"},[e("Cell",{attrs:{s:t.n,p:t.finished},on:{click:function(n){return t.greet(0,n)}}}),e("Cell",{attrs:{s:t.n,p:t.finished},on:{click:function(n){return t.greet(1,n)}}}),e("Cell",{attrs:{s:t.n,p:t.finished},on:{click:function(n){return t.greet(2,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{s:t.n,p:t.finished},on:{click:function(n){return t.greet(3,n)}}}),e("Cell",{attrs:{s:t.n,p:t.finished},on:{click:function(n){return t.greet(4,n)}}}),e("Cell",{attrs:{s:t.n,p:t.finished},on:{click:function(n){return t.greet(5,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{s:t.n,p:t.finished},on:{click:function(n){return t.greet(6,n)}}}),e("Cell",{attrs:{s:t.n,p:t.finished},on:{click:function(n){return t.greet(7,n)}}}),e("Cell",{attrs:{s:t.n,p:t.finished},on:{click:function(n){return t.greet(8,n)}}})],1),e("div",{staticClass:"tipp"},[t._v("结果："+t._s(""==t.result?"胜负未分":"胜方为"+t.result))])])])},l=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"one",on:{click:t.y}},[t.a?[t._v(t._s(t.text))]:void 0],2)])},o=[],u=(e("9490"),{props:["s","p"],data:function(){return{a:!1,text:""}},methods:{y:function(){""==this.text&&(this.p||(this.a=!0,this.text=this.s%2===0?"X":"O",this.$emit("click",this.text)))}}}),c=u,a=(e("07e1"),e("2877")),f=Object(a["a"])(c,s,o,!1,null,null,null),p=f.exports,d={components:{Cell:p},methods:{greet:function(t,n){console.log("".concat(t,"号被点击，内容是：").concat(n)),this.n++,this.map[Math.floor(t/3)][t%3]=n,this.tell()},tell:function(){for(var t=this.map,n=0;n<2;n++)t[n][0]==t[n][1]&&t[n][1]==t[n][2]&&null!=t[n][0]&&(this.result=t[n][0],this.finished=!0);for(var e=0;e<2;e++)t[0][e]==t[1][e]&&t[1][e]==t[2][e]&&null!=t[0][e]&&(this.result=t[0][e],this.finished=!0);t[0][0]==t[1][1]&&t[1][1]==t[2][2]&&null!=t[1][1]&&(this.result=t[0][0],this.finished=!0),t[0][2]==t[1][1]&&t[1][1]==t[2][0]&&null!=t[1][1]&&(this.result=t[0][2],this.finished=!0)}},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:"",finished:!1}}},h=d,v=(e("034f"),Object(a["a"])(h,i,l,!1,null,null,null)),g=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,n,e){},"969d":function(t,n,e){}});
//# sourceMappingURL=app.0b1d1e73.js.map