"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{4940:function(n,t,e){e.d(t,{Df:function(){return p},Fb:function(){return u},Jh:function(){return v},bp:function(){return f},gW:function(){return d}});var r=e(5861),a=e(7757),i=e.n(a),c=e(3263),o="https://api.themoviedb.org/3",s="0f09f0e29eb26a1e28b4809ac59dbd60",p=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function u(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t,"page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9257:function(n,t,e){e.r(t),e.d(t,{MovieDetails:function(){return U}});var r,a,i,c,o,s,p,u=e(5861),l=e(9439),d=e(7757),h=e.n(d),f=e(7689),x=e(2791),v=e(924),m=e(2134),g=e(168),w=e(6444),b=e(1087),Z=w.ZP.main(r||(r=(0,g.Z)(["\n    padding: 0 20px;\n"]))),k=(0,w.ZP)(b.rU)(a||(a=(0,g.Z)(["\n    display: flex;\n    gap: 10px;\n    width: 120px;\n    align-items: center;\n    padding: 4px 8px;\n    border-radius: 5px;\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n    margin-bottom: 20px;\n    :hover {\n        color: white;\n        background-color: blue;\n    }\n    p {\n        margin: 0;\n    }\n"]))),y=w.ZP.div(i||(i=(0,g.Z)(["\n    display: flex;\n    gap: 20px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n    div{\n        width: 600px;\n    }\n"]))),j=w.ZP.p(c||(c=(0,g.Z)(["\n    margin: 0;\n    font-weight: 700;\n"]))),_=w.ZP.p(o||(o=(0,g.Z)(["\n    margin: 0;\n    margin-bottom: 20px\n"]))),P=w.ZP.ul(s||(s=(0,g.Z)(["\n    display: flex;\n    gap: 10px;\n    padding: 0;\n    list-style: none;\n"]))),S=(0,w.ZP)(b.rU)(p||(p=(0,g.Z)(["\n    color: black;\n    font-weight: 700;\n    padding: 4px 12px;\n    border-radius: 5px;\n    :hover {\n        color: blue;\n    }\n"]))),C=e(4940),F=e(184),U=function(){var n=(0,f.UO)().movieId,t=(0,f.TH)(),e=(0,x.useState)(""),r=(0,l.Z)(e,2),a=r[0],i=r[1],c=(0,x.useState)([]),o=(0,l.Z)(c,2),s=o[0],p=o[1],d=(0,x.useState)(""),g=(0,l.Z)(d,2),w=g[0],b=g[1],U=(0,x.useState)(""),D=(0,l.Z)(U,2),O=D[0],q=D[1];return(0,v.Z)((function(){var e,r;function a(){return a=(0,u.Z)(h().mark((function t(){var e,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,C.Fb)(n);case 3:if(e=t.sent,r=[],e.data.genres.map((function(n){return r.push(" "+n.name)})),e.data){t.next=8;break}throw new Error("Sory, no result!");case 8:i(e.data),p(r.toString().split("").slice(1).join("")),b(e.data.release_date.split("-")[0]),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),a.apply(this,arguments)}q(null!==(e=null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),function(){a.apply(this,arguments)}()})),(0,F.jsxs)(Z,{children:[(0,F.jsxs)(k,{to:O,children:[(0,F.jsx)(m.FtK,{}),(0,F.jsx)("p",{children:"Come Back"})]}),a&&(0,F.jsxs)(y,{children:[a.poster_path&&(0,F.jsx)("img",{width:250,src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:""}),!a.poster_path&&(0,F.jsx)("img",{width:250,src:"https://sitysun.ru/wp-content/uploads/oboi-vertikalnye-krasivye_74.jpg",alt:""}),(0,F.jsxs)("div",{children:[(0,F.jsxs)("h2",{children:[a.original_title," (",w,")"]}),(0,F.jsx)(j,{children:"Overview"}),(0,F.jsx)(_,{children:a.overview}),(0,F.jsx)(j,{children:"Genres"}),(0,F.jsx)(_,{children:s})]})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("p",{children:"Additional information"}),(0,F.jsxs)(P,{children:[(0,F.jsx)("li",{children:(0,F.jsx)(S,{to:"cast",filmid:n,children:"Cast"})}),(0,F.jsx)("li",{children:(0,F.jsx)(S,{to:"reviews",filmid:n,children:"Reviews"})})]})]}),(0,F.jsx)(x.Suspense,{children:(0,F.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=257.5c95345e.chunk.js.map