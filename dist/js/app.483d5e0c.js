(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05fe":function(e,t,n){},"0b67":function(e,t,n){"use strict";n("2634")},2634:function(e,t,n){},"3aa2":function(e,t,n){"use strict";n("ebff")},"4fa6":function(e,t,n){"use strict";n("05fe")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[0==e.albumsArray.length?n("Loading"):e._e(),n("Header"),n("Main",{attrs:{albumsArray:e.filteredAlbumsArray},on:{changealbumsValue:e.albumsselect}})],1)},o=[],i=(n("4de4"),n("bc3a")),s=n.n(i),c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"container-full"},[r("img",{attrs:{src:n("93df"),width:"50",alt:""}})])}],u={name:"Header"},f=u,p=(n("0b67"),n("2877")),d=Object(p["a"])(f,c,l,!1,null,"7f50988c",null),b=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row cont-main"},[n("nav",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]},function(t){return e.$emit("changealbumsValue",e.selected)}]}},[n("option",[e._v("All")]),n("option",[e._v("Rock")]),n("option",[e._v("Pop")]),n("option",[e._v("Jazz")]),n("option",[e._v("Metal")])])]),e._l(e.albumsArray,(function(e,t){return n("cardisk",{key:t,staticClass:"col-3 cont-section-img",attrs:{poster:e.poster,title:e.title,author:e.author,year:e.year}})}))],2)},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container cont-img"},[n("img",{attrs:{src:e.poster}}),n("br"),n("div",{staticClass:"title"},[n("strong",[e._v(e._s(e.title))])]),n("br"),n("div",{staticClass:"text-grey"},[e._v(e._s(e.author))]),n("span",{staticClass:"text-grey"},[e._v(e._s(e.year))])])},h=[],y={name:"cardisk",props:{poster:String,title:String,author:String,year:String}},_=y,A=(n("4fa6"),Object(p["a"])(_,g,h,!1,null,"2a0154bc",null)),x=A.exports,O={name:"Main",components:{cardisk:x},props:{albumsArray:Array},data:function(){return{searchString:""}}},j=O,w=(n("3aa2"),Object(p["a"])(j,m,v,!1,null,"336d54d3",null)),S=w.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading"},[e._v(" Loading... ")])},C=[],M={name:"Loading"},P=M,$=(n("c7b8"),Object(p["a"])(P,k,C,!1,null,"30e2d067",null)),E=$.exports,L={name:"App",components:{Header:b,Main:S,Loading:E},data:function(){return{albumsArray:[],selectedAlbums:""}},created:function(){var e=this;s.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.albumsArray=t.data.response}))},computed:{filteredAlbumsArray:function(){var e=this;return this.albumsArray.filter((function(t){if(t.genre==e.selectedAlbums||"All"==e.selectedAlbums||" "==e.selectedAlbums)return!0}))}},methods:{albumsselect:function(e){this.selectedAlbums=e}}},H=L,J=(n("5c0b"),Object(p["a"])(H,a,o,!1,null,null,null)),T=J.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"68f0":function(e,t,n){},"93df":function(e,t,n){e.exports=n.p+"img/spotify-logo.c24917d4.png"},"9c0c":function(e,t,n){},c7b8:function(e,t,n){"use strict";n("68f0")},ebff:function(e,t,n){}});
//# sourceMappingURL=app.483d5e0c.js.map