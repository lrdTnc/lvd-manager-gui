(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(44)},28:function(e,t,a){},32:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(19),r=a.n(s),i=(a(18),a(26),a(28),a(30),a(5)),l=a(4),o=a(7),u=a(6),d=a(8),m=(a(32),a(47)),h=a(46),b=a(2),p=a(45),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).toggle=e.toggle.bind(Object(b.a)(Object(b.a)(e))),e.state={isOpen:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}}]),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(p.a,{className:"navbar-brand",to:"/"},"L A V A D O"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item "},c.a.createElement(p.a,{className:"nav-link",to:"/stock"},"Stoc")),c.a.createElement("li",{className:"nav-item "},c.a.createElement(p.a,{className:"nav-link",to:"/orders"},"Comenzi")),c.a.createElement("li",{className:"nav-item "},c.a.createElement(p.a,{className:"nav-link",to:"/statistics"},"Statistici")))))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Pagina principala"),c.a.createElement("h2",null,"Inca nu stiu ce sa pun aici. Momentan e implementat doar pagina de stocuri"))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Orders Page!"),c.a.createElement("span",null,"Meow"))}}]),t}(n.Component),f=a(10),E=a.n(f),O=a(12),j=a(13),y=a.n(j),S=(a(39),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={target:{},disabled:!1},a.editStock=a.editStock.bind(Object(b.a)(Object(b.a)(a))),a.handleChange=a.handleChangeFn.bind(Object(b.a)(Object(b.a)(a))),a.saveStock=a.saveStock.bind(Object(b.a)(Object(b.a)(a))),a.cancelChanges=a.cancelChanges.bind(Object(b.a)(Object(b.a)(a))),a.initTarget=e.obj,a.service=e.service,a.handleEmptyTarget=e.handleEmptyTarget,a.state.disabled=!!e.obj.id&&"disabled",a.state.target=a.initTarget,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"editStock",value:function(){this.initTarget=Object.assign({},this.state.target),this.setState({disabled:!1,target:this.state.target})}},{key:"cancelChanges",value:function(){this.setState({disabled:"disabled",target:this.initTarget}),this.initTarget.id||this.handleEmptyTarget()}},{key:"saveStock",value:function(){var e=Object(O.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.service.saveStock(this.state.target);case 3:e.t1=e.sent,e.t2={disabled:"disabled",target:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),Object(l.a)(t,[{key:"handleChangeFn",value:function(e){return function(t){var a=this.state.target;a[e]=t.target.value,this.setState({disabled:!1,target:a})}.bind(this)}},{key:"render",value:function(){return c.a.createElement("div",{className:"row stockItemRow"},c.a.createElement("div",{className:"col-xs-10 col-sm-10 col-md-11 col-lg-5"},c.a.createElement("label",null,"Produs"),c.a.createElement("input",{className:"form-control",onChange:this.handleChangeFn("productName"),disabled:this.state.disabled,type:"text",value:this.state.target.productName})),c.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-3 col-lg-1"},c.a.createElement("label",null,"Cantitate"),c.a.createElement("input",{className:"form-control",disabled:this.state.disabled,onChange:this.handleChangeFn("quantity"),type:"text",value:this.state.target.quantity})),c.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-3 col-lg-2"},c.a.createElement("label",null,"Data Actualizare"),c.a.createElement("input",{className:"form-control",disabled:this.state.disabled,onChange:this.handleChangeFn("modificationDate"),type:"text",value:this.state.target.modificationDate})),c.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-3 col-lg-2"},c.a.createElement("label",null,"Status"),c.a.createElement("input",{className:"form-control",disabled:this.state.disabled,onChange:this.handleChangeFn("stockStatus"),type:"text",value:this.state.target.stockStatus})),c.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-3 col-lg-1"},c.a.createElement("label",null,"Pret"),c.a.createElement("input",{className:"form-control",disabled:this.state.disabled,onChange:this.handleChangeFn("price"),type:"text",value:this.state.target.price})),c.a.createElement("div",{className:"buttonsContainer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary",hidden:this.state.disabled,onClick:this.cancelChanges},y.a.crossHeavy),c.a.createElement("button",{type:"button",className:"btn btn-secondary",hidden:this.state.disabled,onClick:this.saveStock},y.a.checkHeavy),c.a.createElement("button",{type:"button",className:"btn btn-secondary",hidden:!this.state.disabled,onClick:this.editStock},y.a.pencil)))}}]),t}(n.Component)),N=(a(41),function(){function e(){Object(i.a)(this,e),this.url="https://lvd-api.appspot.com/lvd/api/stocks/"}return Object(l.a)(e,[{key:"getStocks",value:function(){var e=Object(O.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.url);case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveStock",value:function(){var e=Object(O.a)(E.a.mark(function e(t){var a,n,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.next=3,fetch(this.url+(a?a.toString():""),{method:a?"PUT":"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,200===n.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={stocks:[]},e.addNewStock=e.addNewStock.bind(Object(b.a)(Object(b.a)(e))),e.removeEmptyStock=e.removeEmptyStock.bind(Object(b.a)(Object(b.a)(e))),e.service=new N,e.getStocks(),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("div",{className:"container stockPage"},c.a.createElement("h2",null,"Stocul Curent:",c.a.createElement("button",{type:"button",className:"btn btn-secondary addButton",onClick:this.addNewStock},y.a.plus," Adauga nou")),c.a.createElement("ul",{className:"list-group"},this.state.stocks.map(function(t){return c.a.createElement("li",{className:"list-group-item",key:t.id?t.id+"":"0",order:t.id?t.id+"":"0"},c.a.createElement(S,{service:e.service,obj:t,handleEmptyTarget:e.removeEmptyStock}))}))))}},{key:"removeEmptyStock",value:function(){this.state.stocks.shift(),this.setState(this.state)}},{key:"getStocks",value:function(){var e=Object(O.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.service.getStocks();case 3:e.t1=e.sent,e.t2={stocks:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"addNewStock",value:function(){this.state.stocks.unshift({productName:"",quantity:"",modificationDate:"",stockStatus:"",price:""}),this.setState(this.state)}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(m.a,{basename:"/lvd-manager-gui"},c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement(h.a,{exact:!0,path:"/",component:g}),c.a.createElement(h.a,{exact:!0,path:"/stock",component:C}),c.a.createElement(h.a,{exact:!0,path:"/orders",componen:k}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(m.a,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.981025d9.chunk.js.map