(this.webpackJsonpthe_way_of_social_network=this.webpackJsonpthe_way_of_social_network||[]).push([[4],{290:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(33),s=t(34),i=t(37),o=t(36),r=t(0),c=t.n(r),l=t(13),u=t(9),m=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var a=function(a){Object(i.a)(r,a);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),r}(c.a.Component);return Object(l.b)(m)(a)}},291:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",dialog:"Dialogs_dialog__lk_cw",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},296:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(10),i=t(124),o=t(290),r=t(0),c=t.n(r),l=t(12),u=t(291),m=t.n(u),g=function(e){return c.a.createElement("div",{className:m.a.dialog},c.a.createElement(l.b,{to:"/dialogs/"+e.id}," ",e.name," "))},d=function(e){return c.a.createElement("div",{className:m.a.message}," ",e.text," ")},_=t(125),f=t(126),b=t(70),p=t(69),h=Object(b.a)(20),E=Object(f.a)({form:"dialogAddMessageForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(_.a,{component:p.b,name:"MessageText",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[b.b,h]})),c.a.createElement("button",null," \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c "))})),v=function(e){var a=e.messages.map((function(e){return c.a.createElement(d,{text:e.text})})),t=e.dialogs.map((function(e){return c.a.createElement(g,{name:e.name,id:e.id})}));return c.a.createElement("div",{className:m.a.dialogs},c.a.createElement("div",{className:m.a.dialogsItems},t),c.a.createElement("div",{className:m.a.messages},c.a.createElement(E,{onSubmit:function(a){e.sendMessage(a.MessageText)}}),a))};a.default=Object(s.d)(Object(n.b)((function(e){return{messages:e.dialogsPage.messages,dialogs:e.dialogsPage.dialogs,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),o.a)(v)}}]);
//# sourceMappingURL=4.672168ce.chunk.js.map