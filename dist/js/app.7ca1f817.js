(function(t){function e(e){for(var n,c,s=e[0],o=e[1],u=e[2],f=0,p=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"05fe":function(t,e,r){},"4fa6":function(t,e,r){"use strict";r("05fe")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("7b17"),r("ab8b");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[0==t.albumsArray.length?r("Loading"):t._e(),r("Header",{on:{search:t.searchcardisk}}),r("Main",{attrs:{albumsArray:t.filteredAlbumsArray}})],1)},i=[],c=(r("4de4"),r("caad"),r("2532"),r("bc3a")),s=r.n(c),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"container-full"},[n("img",{attrs:{src:r("93df"),width:"50",alt:""}}),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchString},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("search",t.searchString)},input:function(e){e.target.composing||(t.searchString=e.target.value)}}})])])},u=[],l={name:"Header",data:function(){return{searchString:""}}},f=l,p=(r("bb87"),r("2877")),d=Object(p["a"])(f,o,u,!1,null,"7664b3a4",null),b=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row cont-main"},[r("nav"),t._l(t.albumsArray,(function(t,e){return r("cardisk",{key:e,staticClass:"col-3 cont-section-img",attrs:{poster:t.poster,title:t.title,author:t.author,year:t.year}})}))],2)},m=[],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container cont-img"},[r("img",{attrs:{src:t.poster}}),r("br"),r("div",{staticClass:"title"},[r("strong",[t._v(t._s(t.title))])]),r("br"),r("div",{staticClass:"text-grey"},[t._v(t._s(t.author))]),r("span",{staticClass:"text-grey"},[t._v(t._s(t.year))])])},g=[],v={name:"cardisk",props:{poster:String,title:String,author:String,year:String}},_=v,S=(r("4fa6"),Object(p["a"])(_,y,g,!1,null,"2a0154bc",null)),x=S.exports,O={name:"Main",components:{cardisk:x},props:{albumsArray:Array}},k=O,j=(r("6637"),Object(p["a"])(k,h,m,!1,null,"4be173bd",null)),w=j.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"},[t._v(" Loading... ")])},C=[],P={name:"Loading"},M=P,$=(r("c7b8"),Object(p["a"])(M,A,C,!1,null,"30e2d067",null)),E=$.exports,L={name:"App",components:{Header:b,Main:w,Loading:E},data:function(){return{albumsArray:[],inputSearch:""}},created:function(){var t=this;s.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.albumsArray=e.data.response,t.searchcardisk("")}))},computed:{filteredAlbumsArray:function(){var t=this;return this.albumsArray.filter((function(e){return e.title.includes(t.inputSearch)}))}},methods:{searchcardisk:function(t){this.inputSearch=t}}},H=L,T=(r("5c0b"),Object(p["a"])(H,a,i,!1,null,null,null)),J=T.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},6637:function(t,e,r){"use strict";r("c0e5")},"68f0":function(t,e,r){},"6b26":function(t,e,r){},"93df":function(t,e,r){t.exports=r.p+"img/spotify-logo.c24917d4.png"},"9c0c":function(t,e,r){},bb87:function(t,e,r){"use strict";r("6b26")},c0e5:function(t,e,r){},c7b8:function(t,e,r){"use strict";r("68f0")}});
//# sourceMappingURL=app.7ca1f817.js.map