(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(47)},31:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(13),r=a.n(s),i=(a(31),a(33),a(7)),l=a(6),o=a(9),u=a(8),d=a(10),h=(a(35),a(50)),m=a(49),b=a(4),p=a(48),g=a(3),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).toggle=e.toggle.bind(Object(b.a)(Object(b.a)(e))),e.state={isOpen:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}}]),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(g.l,{color:"dark",dark:!0,expand:"sm"},c.a.createElement(g.m,{href:"/"},"L A V A D O"),c.a.createElement(g.n,{onClick:this.toggle}),c.a.createElement(g.c,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(g.i,{className:"ml-auto",navbar:!0},c.a.createElement(g.j,null,c.a.createElement(g.k,null,c.a.createElement(p.a,{to:"/stock"},"Stoc"))),c.a.createElement(g.j,null,c.a.createElement(g.k,null,c.a.createElement(p.a,{to:"/orders"},"Comenzi"))),c.a.createElement(g.j,null,c.a.createElement(g.k,null,c.a.createElement(p.a,{to:"/statistics"},"Statistici"))))))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Pagina principala"),c.a.createElement("h2",null,"Inca nu stiu ce sa pun aici. Momentan e implementat doar pagina de stocuri"))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Orders Page!"),c.a.createElement("span",null,"Meow"))}}]),t}(n.Component),j=a(14),O=a.n(j),f=a(16),y=a(15),S=a.n(y),C=(a(42),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={target:{},disabled:!1},a.editStock=a.editStock.bind(Object(b.a)(Object(b.a)(a))),a.handleChange=a.handleChangeFn.bind(Object(b.a)(Object(b.a)(a))),a.saveStock=a.saveStock.bind(Object(b.a)(Object(b.a)(a))),a.cancelChanges=a.cancelChanges.bind(Object(b.a)(Object(b.a)(a))),a.initTarget=e.obj,a.handleEmptyTarget=e.handleEmptyTarget,a.state.disabled=!!e.obj.id&&"disabled",a.state.target=a.initTarget,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"editStock",value:function(){this.initTarget=Object.assign({},this.state.target),this.setState({disabled:!1,target:this.state.target})}},{key:"cancelChanges",value:function(){this.setState({disabled:"disabled",target:this.initTarget}),this.initTarget.id||this.handleEmptyTarget()}},{key:"saveStock",value:function(){var e=Object(f.a)(O.a.mark(function e(){var t,a,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.target.id,e.next=3,fetch("https://lvd-api.appspot.com/lvd/api/stocks/"+(t?t.toString():""),{method:t?"PUT":"POST",body:JSON.stringify(this.state.target),headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,this.setState({disabled:"disabled",target:n});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),Object(l.a)(t,[{key:"handleChangeFn",value:function(e){return function(t){var a=this.state.target;a[e]=t.target.value,this.setState({disabled:!1,target:a})}.bind(this)}},{key:"render",value:function(){return c.a.createElement(g.e,{in:!0},c.a.createElement(g.o,{className:"stockItemRow"},c.a.createElement(g.b,{xs:"10",sm:"10",md:"11",lg:"5"},c.a.createElement("label",null,"Produs"),c.a.createElement(g.f,{onChange:this.handleChangeFn("productName"),disabled:this.state.disabled,type:"text",value:this.state.target.productName})),c.a.createElement(g.b,{xs:"6",sm:"6",md:"3",lg:"1"},c.a.createElement("label",null,"Cantitate"),c.a.createElement(g.f,{disabled:this.state.disabled,onChange:this.handleChangeFn("quantity"),type:"text",value:this.state.target.quantity})),c.a.createElement(g.b,{xs:"6",sm:"6",md:"3",lg:"2"},c.a.createElement("label",null,"Data Actualizare"),c.a.createElement(g.f,{disabled:this.state.disabled,onChange:this.handleChangeFn("modificationDate"),type:"text",value:this.state.target.modificationDate})),c.a.createElement(g.b,{xs:"6",sm:"6",md:"3",lg:"2"},c.a.createElement("label",null,"Status"),c.a.createElement(g.f,{disabled:this.state.disabled,onChange:this.handleChangeFn("stockStatus"),type:"text",value:this.state.target.stockStatus})),c.a.createElement(g.b,{xs:"6",sm:"6",md:"3",lg:"1"},c.a.createElement("label",null,"Pret"),c.a.createElement(g.f,{disabled:this.state.disabled,onChange:this.handleChangeFn("price"),type:"text",value:this.state.target.price})),c.a.createElement("div",{className:"buttonsContainer"},c.a.createElement(g.a,{hidden:this.state.disabled,color:"secondary",onClick:this.cancelChanges},S.a.crossHeavy),c.a.createElement(g.a,{hidden:this.state.disabled,color:"secondary",onClick:this.saveStock},S.a.checkHeavy),c.a.createElement(g.a,{hidden:!this.state.disabled,color:"secondary",onClick:this.editStock},S.a.pencil))))}}]),t}(n.Component)),w=(a(44),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={stocks:[]},e.addNewStock=e.addNewStock.bind(Object(b.a)(Object(b.a)(e))),e.removeEmptyStock=e.removeEmptyStock.bind(Object(b.a)(Object(b.a)(e))),e.getStocks(),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement(g.d,{className:"stockPage"},c.a.createElement("h2",null,"Stocul Curent:",c.a.createElement(g.a,{className:"addButton",onClick:this.addNewStock},S.a.plus," Adauga nou")),c.a.createElement(g.g,null,this.state.stocks.map(function(t){return c.a.createElement(g.h,{key:t.id?t.id:"0"},c.a.createElement(C,{obj:t,handleEmptyTarget:e.removeEmptyStock}))}))))}},{key:"removeEmptyStock",value:function(){this.state.stocks.shift(),this.setState(this.state)}},{key:"addNewStock",value:function(){this.state.stocks.unshift({}),this.setState(this.state)}},{key:"getStocks",value:function(){var e=Object(f.a)(O.a.mark(function e(){var t,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://lvd-api.appspot.com/lvd/api/stocks");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",this.setState({stocks:a}));case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component)),x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(h.a,{basename:"/lvd-manager-gui"},c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement(m.a,{exact:!0,path:"/",component:k}),c.a.createElement(m.a,{exact:!0,path:"/stock",component:w}),c.a.createElement(m.a,{exact:!0,path:"/orders",componen:v}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(h.a,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.9872ba24.chunk.js.map