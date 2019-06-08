goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = ((typeof window !== 'undefined')?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34921 = coll;
var G__34922 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34921,G__34922) : shadow.dom.lazy_native_coll_seq.call(null,G__34921,G__34922));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3922__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34932 = arguments.length;
switch (G__34932) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34935 = arguments.length;
switch (G__34935) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34938 = arguments.length;
switch (G__34938) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34941 = arguments.length;
switch (G__34941) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34944 = arguments.length;
switch (G__34944) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__34945 = document;
var G__34946 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34945,G__34946);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__34947 = shadow.dom.dom_node(parent);
var G__34948 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34947,G__34948);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__34950 = shadow.dom.dom_node(el);
var G__34951 = cls;
return goog.dom.classlist.add(G__34950,G__34951);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__34952 = shadow.dom.dom_node(el);
var G__34953 = cls;
return goog.dom.classlist.remove(G__34952,G__34953);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34955 = arguments.length;
switch (G__34955) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__34956 = shadow.dom.dom_node(el);
var G__34957 = cls;
return goog.dom.classlist.toggle(G__34956,G__34957);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34959){if((e34959 instanceof Object)){
var e = e34959;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34959;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34960 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34961 = null;
var count__34962 = (0);
var i__34963 = (0);
while(true){
if((i__34963 < count__34962)){
var el = chunk__34961.cljs$core$IIndexed$_nth$arity$2(null,i__34963);
var handler_34970__$1 = ((function (seq__34960,chunk__34961,count__34962,i__34963,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34960,chunk__34961,count__34962,i__34963,el))
;
var G__34964_34971 = el;
var G__34965_34972 = cljs.core.name(ev);
var G__34966_34973 = handler_34970__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34964_34971,G__34965_34972,G__34966_34973) : shadow.dom.dom_listen.call(null,G__34964_34971,G__34965_34972,G__34966_34973));


var G__34974 = seq__34960;
var G__34975 = chunk__34961;
var G__34976 = count__34962;
var G__34977 = (i__34963 + (1));
seq__34960 = G__34974;
chunk__34961 = G__34975;
count__34962 = G__34976;
i__34963 = G__34977;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34960);
if(temp__5457__auto__){
var seq__34960__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34960__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__34960__$1);
var G__34978 = cljs.core.chunk_rest(seq__34960__$1);
var G__34979 = c__4319__auto__;
var G__34980 = cljs.core.count(c__4319__auto__);
var G__34981 = (0);
seq__34960 = G__34978;
chunk__34961 = G__34979;
count__34962 = G__34980;
i__34963 = G__34981;
continue;
} else {
var el = cljs.core.first(seq__34960__$1);
var handler_34982__$1 = ((function (seq__34960,chunk__34961,count__34962,i__34963,el,seq__34960__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34960,chunk__34961,count__34962,i__34963,el,seq__34960__$1,temp__5457__auto__))
;
var G__34967_34983 = el;
var G__34968_34984 = cljs.core.name(ev);
var G__34969_34985 = handler_34982__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34967_34983,G__34968_34984,G__34969_34985) : shadow.dom.dom_listen.call(null,G__34967_34983,G__34968_34984,G__34969_34985));


var G__34986 = cljs.core.next(seq__34960__$1);
var G__34987 = null;
var G__34988 = (0);
var G__34989 = (0);
seq__34960 = G__34986;
chunk__34961 = G__34987;
count__34962 = G__34988;
i__34963 = G__34989;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34991 = arguments.length;
switch (G__34991) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__34992 = shadow.dom.dom_node(el);
var G__34993 = cljs.core.name(ev);
var G__34994 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34992,G__34993,G__34994) : shadow.dom.dom_listen.call(null,G__34992,G__34993,G__34994));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__34996 = shadow.dom.dom_node(el);
var G__34997 = cljs.core.name(ev);
var G__34998 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__34996,G__34997,G__34998) : shadow.dom.dom_listen_remove.call(null,G__34996,G__34997,G__34998));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34999 = cljs.core.seq(events);
var chunk__35000 = null;
var count__35001 = (0);
var i__35002 = (0);
while(true){
if((i__35002 < count__35001)){
var vec__35003 = chunk__35000.cljs$core$IIndexed$_nth$arity$2(null,i__35002);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35003,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35003,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35009 = seq__34999;
var G__35010 = chunk__35000;
var G__35011 = count__35001;
var G__35012 = (i__35002 + (1));
seq__34999 = G__35009;
chunk__35000 = G__35010;
count__35001 = G__35011;
i__35002 = G__35012;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34999);
if(temp__5457__auto__){
var seq__34999__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34999__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__34999__$1);
var G__35013 = cljs.core.chunk_rest(seq__34999__$1);
var G__35014 = c__4319__auto__;
var G__35015 = cljs.core.count(c__4319__auto__);
var G__35016 = (0);
seq__34999 = G__35013;
chunk__35000 = G__35014;
count__35001 = G__35015;
i__35002 = G__35016;
continue;
} else {
var vec__35006 = cljs.core.first(seq__34999__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35017 = cljs.core.next(seq__34999__$1);
var G__35018 = null;
var G__35019 = (0);
var G__35020 = (0);
seq__34999 = G__35017;
chunk__35000 = G__35018;
count__35001 = G__35019;
i__35002 = G__35020;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35021 = cljs.core.seq(styles);
var chunk__35022 = null;
var count__35023 = (0);
var i__35024 = (0);
while(true){
if((i__35024 < count__35023)){
var vec__35025 = chunk__35022.cljs$core$IIndexed$_nth$arity$2(null,i__35024);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025,(1),null);
var G__35028_35037 = dom;
var G__35029_35038 = cljs.core.name(k);
var G__35030_35039 = (((v == null))?"":v);
goog.style.setStyle(G__35028_35037,G__35029_35038,G__35030_35039);


var G__35040 = seq__35021;
var G__35041 = chunk__35022;
var G__35042 = count__35023;
var G__35043 = (i__35024 + (1));
seq__35021 = G__35040;
chunk__35022 = G__35041;
count__35023 = G__35042;
i__35024 = G__35043;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35021);
if(temp__5457__auto__){
var seq__35021__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35021__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35021__$1);
var G__35044 = cljs.core.chunk_rest(seq__35021__$1);
var G__35045 = c__4319__auto__;
var G__35046 = cljs.core.count(c__4319__auto__);
var G__35047 = (0);
seq__35021 = G__35044;
chunk__35022 = G__35045;
count__35023 = G__35046;
i__35024 = G__35047;
continue;
} else {
var vec__35031 = cljs.core.first(seq__35021__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031,(1),null);
var G__35034_35048 = dom;
var G__35035_35049 = cljs.core.name(k);
var G__35036_35050 = (((v == null))?"":v);
goog.style.setStyle(G__35034_35048,G__35035_35049,G__35036_35050);


var G__35051 = cljs.core.next(seq__35021__$1);
var G__35052 = null;
var G__35053 = (0);
var G__35054 = (0);
seq__35021 = G__35051;
chunk__35022 = G__35052;
count__35023 = G__35053;
i__35024 = G__35054;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35055_35056 = key;
var G__35055_35057__$1 = (((G__35055_35056 instanceof cljs.core.Keyword))?G__35055_35056.fqn:null);
switch (G__35055_35057__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35059 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3922__auto__ = goog.string.startsWith(ks_35059,"data-");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.string.startsWith(ks_35059,"aria-");
}
})())){
el.setAttribute(ks_35059,value);
} else {
(el[ks_35059] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35060 = shadow.dom.dom_node(el);
var G__35061 = cls;
return goog.dom.classlist.contains(G__35060,G__35061);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35062){
var map__35063 = p__35062;
var map__35063__$1 = ((((!((map__35063 == null)))?(((((map__35063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35063):map__35063);
var props = map__35063__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35063__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35065 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35068 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35068,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35068;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35070 = arguments.length;
switch (G__35070) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35072){
var vec__35073 = p__35072;
var seq__35074 = cljs.core.seq(vec__35073);
var first__35075 = cljs.core.first(seq__35074);
var seq__35074__$1 = cljs.core.next(seq__35074);
var nn = first__35075;
var first__35075__$1 = cljs.core.first(seq__35074__$1);
var seq__35074__$2 = cljs.core.next(seq__35074__$1);
var np = first__35075__$1;
var nc = seq__35074__$2;
var node = vec__35073;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35076 = nn;
var G__35077 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35076,G__35077) : create_fn.call(null,G__35076,G__35077));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35078 = nn;
var G__35079 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35078,G__35079) : create_fn.call(null,G__35078,G__35079));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35080 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080,(1),null);
var seq__35083_35099 = cljs.core.seq(node_children);
var chunk__35084_35100 = null;
var count__35085_35101 = (0);
var i__35086_35102 = (0);
while(true){
if((i__35086_35102 < count__35085_35101)){
var child_struct_35103 = chunk__35084_35100.cljs$core$IIndexed$_nth$arity$2(null,i__35086_35102);
var children_35104 = shadow.dom.dom_node(child_struct_35103);
if(cljs.core.seq_QMARK_(children_35104)){
var seq__35087_35105 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35104));
var chunk__35089_35106 = null;
var count__35090_35107 = (0);
var i__35091_35108 = (0);
while(true){
if((i__35091_35108 < count__35090_35107)){
var child_35109 = chunk__35089_35106.cljs$core$IIndexed$_nth$arity$2(null,i__35091_35108);
if(cljs.core.truth_(child_35109)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35109);


var G__35110 = seq__35087_35105;
var G__35111 = chunk__35089_35106;
var G__35112 = count__35090_35107;
var G__35113 = (i__35091_35108 + (1));
seq__35087_35105 = G__35110;
chunk__35089_35106 = G__35111;
count__35090_35107 = G__35112;
i__35091_35108 = G__35113;
continue;
} else {
var G__35114 = seq__35087_35105;
var G__35115 = chunk__35089_35106;
var G__35116 = count__35090_35107;
var G__35117 = (i__35091_35108 + (1));
seq__35087_35105 = G__35114;
chunk__35089_35106 = G__35115;
count__35090_35107 = G__35116;
i__35091_35108 = G__35117;
continue;
}
} else {
var temp__5457__auto___35118 = cljs.core.seq(seq__35087_35105);
if(temp__5457__auto___35118){
var seq__35087_35119__$1 = temp__5457__auto___35118;
if(cljs.core.chunked_seq_QMARK_(seq__35087_35119__$1)){
var c__4319__auto___35120 = cljs.core.chunk_first(seq__35087_35119__$1);
var G__35121 = cljs.core.chunk_rest(seq__35087_35119__$1);
var G__35122 = c__4319__auto___35120;
var G__35123 = cljs.core.count(c__4319__auto___35120);
var G__35124 = (0);
seq__35087_35105 = G__35121;
chunk__35089_35106 = G__35122;
count__35090_35107 = G__35123;
i__35091_35108 = G__35124;
continue;
} else {
var child_35125 = cljs.core.first(seq__35087_35119__$1);
if(cljs.core.truth_(child_35125)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35125);


var G__35126 = cljs.core.next(seq__35087_35119__$1);
var G__35127 = null;
var G__35128 = (0);
var G__35129 = (0);
seq__35087_35105 = G__35126;
chunk__35089_35106 = G__35127;
count__35090_35107 = G__35128;
i__35091_35108 = G__35129;
continue;
} else {
var G__35130 = cljs.core.next(seq__35087_35119__$1);
var G__35131 = null;
var G__35132 = (0);
var G__35133 = (0);
seq__35087_35105 = G__35130;
chunk__35089_35106 = G__35131;
count__35090_35107 = G__35132;
i__35091_35108 = G__35133;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35104);
}


var G__35134 = seq__35083_35099;
var G__35135 = chunk__35084_35100;
var G__35136 = count__35085_35101;
var G__35137 = (i__35086_35102 + (1));
seq__35083_35099 = G__35134;
chunk__35084_35100 = G__35135;
count__35085_35101 = G__35136;
i__35086_35102 = G__35137;
continue;
} else {
var temp__5457__auto___35138 = cljs.core.seq(seq__35083_35099);
if(temp__5457__auto___35138){
var seq__35083_35139__$1 = temp__5457__auto___35138;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35139__$1)){
var c__4319__auto___35140 = cljs.core.chunk_first(seq__35083_35139__$1);
var G__35141 = cljs.core.chunk_rest(seq__35083_35139__$1);
var G__35142 = c__4319__auto___35140;
var G__35143 = cljs.core.count(c__4319__auto___35140);
var G__35144 = (0);
seq__35083_35099 = G__35141;
chunk__35084_35100 = G__35142;
count__35085_35101 = G__35143;
i__35086_35102 = G__35144;
continue;
} else {
var child_struct_35145 = cljs.core.first(seq__35083_35139__$1);
var children_35146 = shadow.dom.dom_node(child_struct_35145);
if(cljs.core.seq_QMARK_(children_35146)){
var seq__35093_35147 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35146));
var chunk__35095_35148 = null;
var count__35096_35149 = (0);
var i__35097_35150 = (0);
while(true){
if((i__35097_35150 < count__35096_35149)){
var child_35151 = chunk__35095_35148.cljs$core$IIndexed$_nth$arity$2(null,i__35097_35150);
if(cljs.core.truth_(child_35151)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35151);


var G__35152 = seq__35093_35147;
var G__35153 = chunk__35095_35148;
var G__35154 = count__35096_35149;
var G__35155 = (i__35097_35150 + (1));
seq__35093_35147 = G__35152;
chunk__35095_35148 = G__35153;
count__35096_35149 = G__35154;
i__35097_35150 = G__35155;
continue;
} else {
var G__35156 = seq__35093_35147;
var G__35157 = chunk__35095_35148;
var G__35158 = count__35096_35149;
var G__35159 = (i__35097_35150 + (1));
seq__35093_35147 = G__35156;
chunk__35095_35148 = G__35157;
count__35096_35149 = G__35158;
i__35097_35150 = G__35159;
continue;
}
} else {
var temp__5457__auto___35160__$1 = cljs.core.seq(seq__35093_35147);
if(temp__5457__auto___35160__$1){
var seq__35093_35161__$1 = temp__5457__auto___35160__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35093_35161__$1)){
var c__4319__auto___35162 = cljs.core.chunk_first(seq__35093_35161__$1);
var G__35163 = cljs.core.chunk_rest(seq__35093_35161__$1);
var G__35164 = c__4319__auto___35162;
var G__35165 = cljs.core.count(c__4319__auto___35162);
var G__35166 = (0);
seq__35093_35147 = G__35163;
chunk__35095_35148 = G__35164;
count__35096_35149 = G__35165;
i__35097_35150 = G__35166;
continue;
} else {
var child_35167 = cljs.core.first(seq__35093_35161__$1);
if(cljs.core.truth_(child_35167)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35167);


var G__35168 = cljs.core.next(seq__35093_35161__$1);
var G__35169 = null;
var G__35170 = (0);
var G__35171 = (0);
seq__35093_35147 = G__35168;
chunk__35095_35148 = G__35169;
count__35096_35149 = G__35170;
i__35097_35150 = G__35171;
continue;
} else {
var G__35172 = cljs.core.next(seq__35093_35161__$1);
var G__35173 = null;
var G__35174 = (0);
var G__35175 = (0);
seq__35093_35147 = G__35172;
chunk__35095_35148 = G__35173;
count__35096_35149 = G__35174;
i__35097_35150 = G__35175;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35146);
}


var G__35176 = cljs.core.next(seq__35083_35139__$1);
var G__35177 = null;
var G__35178 = (0);
var G__35179 = (0);
seq__35083_35099 = G__35176;
chunk__35084_35100 = G__35177;
count__35085_35101 = G__35178;
i__35086_35102 = G__35179;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35180 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35180);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35182 = cljs.core.seq(node);
var chunk__35183 = null;
var count__35184 = (0);
var i__35185 = (0);
while(true){
if((i__35185 < count__35184)){
var n = chunk__35183.cljs$core$IIndexed$_nth$arity$2(null,i__35185);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35186 = seq__35182;
var G__35187 = chunk__35183;
var G__35188 = count__35184;
var G__35189 = (i__35185 + (1));
seq__35182 = G__35186;
chunk__35183 = G__35187;
count__35184 = G__35188;
i__35185 = G__35189;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35182);
if(temp__5457__auto__){
var seq__35182__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35182__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35182__$1);
var G__35190 = cljs.core.chunk_rest(seq__35182__$1);
var G__35191 = c__4319__auto__;
var G__35192 = cljs.core.count(c__4319__auto__);
var G__35193 = (0);
seq__35182 = G__35190;
chunk__35183 = G__35191;
count__35184 = G__35192;
i__35185 = G__35193;
continue;
} else {
var n = cljs.core.first(seq__35182__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35194 = cljs.core.next(seq__35182__$1);
var G__35195 = null;
var G__35196 = (0);
var G__35197 = (0);
seq__35182 = G__35194;
chunk__35183 = G__35195;
count__35184 = G__35196;
i__35185 = G__35197;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35198 = shadow.dom.dom_node(new$);
var G__35199 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35198,G__35199);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35201 = arguments.length;
switch (G__35201) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35204 = arguments.length;
switch (G__35204) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35207 = arguments.length;
switch (G__35207) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3922__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35214 = arguments.length;
var i__4500__auto___35215 = (0);
while(true){
if((i__4500__auto___35215 < len__4499__auto___35214)){
args__4502__auto__.push((arguments[i__4500__auto___35215]));

var G__35216 = (i__4500__auto___35215 + (1));
i__4500__auto___35215 = G__35216;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35210_35217 = cljs.core.seq(nodes);
var chunk__35211_35218 = null;
var count__35212_35219 = (0);
var i__35213_35220 = (0);
while(true){
if((i__35213_35220 < count__35212_35219)){
var node_35221 = chunk__35211_35218.cljs$core$IIndexed$_nth$arity$2(null,i__35213_35220);
fragment.appendChild(shadow.dom._to_dom(node_35221));


var G__35222 = seq__35210_35217;
var G__35223 = chunk__35211_35218;
var G__35224 = count__35212_35219;
var G__35225 = (i__35213_35220 + (1));
seq__35210_35217 = G__35222;
chunk__35211_35218 = G__35223;
count__35212_35219 = G__35224;
i__35213_35220 = G__35225;
continue;
} else {
var temp__5457__auto___35226 = cljs.core.seq(seq__35210_35217);
if(temp__5457__auto___35226){
var seq__35210_35227__$1 = temp__5457__auto___35226;
if(cljs.core.chunked_seq_QMARK_(seq__35210_35227__$1)){
var c__4319__auto___35228 = cljs.core.chunk_first(seq__35210_35227__$1);
var G__35229 = cljs.core.chunk_rest(seq__35210_35227__$1);
var G__35230 = c__4319__auto___35228;
var G__35231 = cljs.core.count(c__4319__auto___35228);
var G__35232 = (0);
seq__35210_35217 = G__35229;
chunk__35211_35218 = G__35230;
count__35212_35219 = G__35231;
i__35213_35220 = G__35232;
continue;
} else {
var node_35233 = cljs.core.first(seq__35210_35227__$1);
fragment.appendChild(shadow.dom._to_dom(node_35233));


var G__35234 = cljs.core.next(seq__35210_35227__$1);
var G__35235 = null;
var G__35236 = (0);
var G__35237 = (0);
seq__35210_35217 = G__35234;
chunk__35211_35218 = G__35235;
count__35212_35219 = G__35236;
i__35213_35220 = G__35237;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35209){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35209));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35238_35252 = cljs.core.seq(scripts);
var chunk__35239_35253 = null;
var count__35240_35254 = (0);
var i__35241_35255 = (0);
while(true){
if((i__35241_35255 < count__35240_35254)){
var vec__35242_35256 = chunk__35239_35253.cljs$core$IIndexed$_nth$arity$2(null,i__35241_35255);
var script_tag_35257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242_35256,(0),null);
var script_body_35258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242_35256,(1),null);
eval(script_body_35258);


var G__35259 = seq__35238_35252;
var G__35260 = chunk__35239_35253;
var G__35261 = count__35240_35254;
var G__35262 = (i__35241_35255 + (1));
seq__35238_35252 = G__35259;
chunk__35239_35253 = G__35260;
count__35240_35254 = G__35261;
i__35241_35255 = G__35262;
continue;
} else {
var temp__5457__auto___35263 = cljs.core.seq(seq__35238_35252);
if(temp__5457__auto___35263){
var seq__35238_35264__$1 = temp__5457__auto___35263;
if(cljs.core.chunked_seq_QMARK_(seq__35238_35264__$1)){
var c__4319__auto___35265 = cljs.core.chunk_first(seq__35238_35264__$1);
var G__35266 = cljs.core.chunk_rest(seq__35238_35264__$1);
var G__35267 = c__4319__auto___35265;
var G__35268 = cljs.core.count(c__4319__auto___35265);
var G__35269 = (0);
seq__35238_35252 = G__35266;
chunk__35239_35253 = G__35267;
count__35240_35254 = G__35268;
i__35241_35255 = G__35269;
continue;
} else {
var vec__35245_35270 = cljs.core.first(seq__35238_35264__$1);
var script_tag_35271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35245_35270,(0),null);
var script_body_35272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35245_35270,(1),null);
eval(script_body_35272);


var G__35273 = cljs.core.next(seq__35238_35264__$1);
var G__35274 = null;
var G__35275 = (0);
var G__35276 = (0);
seq__35238_35252 = G__35273;
chunk__35239_35253 = G__35274;
count__35240_35254 = G__35275;
i__35241_35255 = G__35276;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35248){
var vec__35249 = p__35248;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35249,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35249,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35277 = shadow.dom.dom_node(el);
var G__35278 = cls;
return goog.dom.getAncestorByClass(G__35277,G__35278);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35280 = arguments.length;
switch (G__35280) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35281 = shadow.dom.dom_node(el);
var G__35282 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35281,G__35282);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35283 = shadow.dom.dom_node(el);
var G__35284 = cljs.core.name(tag);
var G__35285 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35283,G__35284,G__35285);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35287 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35287);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35288 = shadow.dom.dom_node(dom);
var G__35289 = value;
return goog.dom.forms.setValue(G__35288,G__35289);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35290 = cljs.core.seq(style_keys);
var chunk__35291 = null;
var count__35292 = (0);
var i__35293 = (0);
while(true){
if((i__35293 < count__35292)){
var it = chunk__35291.cljs$core$IIndexed$_nth$arity$2(null,i__35293);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35294 = seq__35290;
var G__35295 = chunk__35291;
var G__35296 = count__35292;
var G__35297 = (i__35293 + (1));
seq__35290 = G__35294;
chunk__35291 = G__35295;
count__35292 = G__35296;
i__35293 = G__35297;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35290);
if(temp__5457__auto__){
var seq__35290__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35290__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35290__$1);
var G__35298 = cljs.core.chunk_rest(seq__35290__$1);
var G__35299 = c__4319__auto__;
var G__35300 = cljs.core.count(c__4319__auto__);
var G__35301 = (0);
seq__35290 = G__35298;
chunk__35291 = G__35299;
count__35292 = G__35300;
i__35293 = G__35301;
continue;
} else {
var it = cljs.core.first(seq__35290__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35302 = cljs.core.next(seq__35290__$1);
var G__35303 = null;
var G__35304 = (0);
var G__35305 = (0);
seq__35290 = G__35302;
chunk__35291 = G__35303;
count__35292 = G__35304;
i__35293 = G__35305;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12143__auto__,k__12144__auto__){
var self__ = this;
var this__12143__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12143__auto____$1,k__12144__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12145__auto__,k35307,else__12146__auto__){
var self__ = this;
var this__12145__auto____$1 = this;
var G__35311 = k35307;
var G__35311__$1 = (((G__35311 instanceof cljs.core.Keyword))?G__35311.fqn:null);
switch (G__35311__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35307,else__12146__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12157__auto__,writer__12158__auto__,opts__12159__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
var pr_pair__12160__auto__ = ((function (this__12157__auto____$1){
return (function (keyval__12161__auto__){
return cljs.core.pr_sequential_writer(writer__12158__auto__,cljs.core.pr_writer,""," ","",opts__12159__auto__,keyval__12161__auto__);
});})(this__12157__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12158__auto__,pr_pair__12160__auto__,"#shadow.dom.Coordinate{",", ","}",opts__12159__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35306){
var self__ = this;
var G__35306__$1 = this;
return (new cljs.core.RecordIter((0),G__35306__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12141__auto__){
var self__ = this;
var this__12141__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12138__auto__){
var self__ = this;
var this__12138__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12147__auto__){
var self__ = this;
var this__12147__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12139__auto__){
var self__ = this;
var this__12139__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__35312 = ((function (h__4030__auto__,this__12139__auto____$1){
return (function (coll__12140__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__12140__auto__));
});})(h__4030__auto__,this__12139__auto____$1))
;
return fexpr__35312(this__12139__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35308,other35309){
var self__ = this;
var this35308__$1 = this;
return ((!((other35309 == null))) && ((this35308__$1.constructor === other35309.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35308__$1.x,other35309.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35308__$1.y,other35309.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35308__$1.__extmap,other35309.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12152__auto__,k__12153__auto__){
var self__ = this;
var this__12152__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__12153__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12152__auto____$1),self__.__meta),k__12153__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12153__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12150__auto__,k__12151__auto__,G__35306){
var self__ = this;
var this__12150__auto____$1 = this;
var pred__35313 = cljs.core.keyword_identical_QMARK_;
var expr__35314 = k__12151__auto__;
if(cljs.core.truth_((function (){var G__35316 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35317 = expr__35314;
return (pred__35313.cljs$core$IFn$_invoke$arity$2 ? pred__35313.cljs$core$IFn$_invoke$arity$2(G__35316,G__35317) : pred__35313.call(null,G__35316,G__35317));
})())){
return (new shadow.dom.Coordinate(G__35306,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35318 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35319 = expr__35314;
return (pred__35313.cljs$core$IFn$_invoke$arity$2 ? pred__35313.cljs$core$IFn$_invoke$arity$2(G__35318,G__35319) : pred__35313.call(null,G__35318,G__35319));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35306,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12151__auto__,G__35306),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12142__auto__,G__35306){
var self__ = this;
var this__12142__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35306,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12148__auto__,entry__12149__auto__){
var self__ = this;
var this__12148__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12149__auto__)){
return cljs.core._assoc(this__12148__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12149__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12149__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12148__auto____$1,entry__12149__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35310){
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35310),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35310),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35310,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0))),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35321 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35321);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35322 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35322);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35323 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35323);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12143__auto__,k__12144__auto__){
var self__ = this;
var this__12143__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12143__auto____$1,k__12144__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12145__auto__,k35325,else__12146__auto__){
var self__ = this;
var this__12145__auto____$1 = this;
var G__35329 = k35325;
var G__35329__$1 = (((G__35329 instanceof cljs.core.Keyword))?G__35329.fqn:null);
switch (G__35329__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35325,else__12146__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12157__auto__,writer__12158__auto__,opts__12159__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
var pr_pair__12160__auto__ = ((function (this__12157__auto____$1){
return (function (keyval__12161__auto__){
return cljs.core.pr_sequential_writer(writer__12158__auto__,cljs.core.pr_writer,""," ","",opts__12159__auto__,keyval__12161__auto__);
});})(this__12157__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12158__auto__,pr_pair__12160__auto__,"#shadow.dom.Size{",", ","}",opts__12159__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35324){
var self__ = this;
var G__35324__$1 = this;
return (new cljs.core.RecordIter((0),G__35324__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12141__auto__){
var self__ = this;
var this__12141__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12138__auto__){
var self__ = this;
var this__12138__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12147__auto__){
var self__ = this;
var this__12147__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12139__auto__){
var self__ = this;
var this__12139__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__35330 = ((function (h__4030__auto__,this__12139__auto____$1){
return (function (coll__12140__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__12140__auto__));
});})(h__4030__auto__,this__12139__auto____$1))
;
return fexpr__35330(this__12139__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35326,other35327){
var self__ = this;
var this35326__$1 = this;
return ((!((other35327 == null))) && ((this35326__$1.constructor === other35327.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35326__$1.w,other35327.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35326__$1.h,other35327.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35326__$1.__extmap,other35327.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12152__auto__,k__12153__auto__){
var self__ = this;
var this__12152__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__12153__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12152__auto____$1),self__.__meta),k__12153__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12153__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12150__auto__,k__12151__auto__,G__35324){
var self__ = this;
var this__12150__auto____$1 = this;
var pred__35331 = cljs.core.keyword_identical_QMARK_;
var expr__35332 = k__12151__auto__;
if(cljs.core.truth_((function (){var G__35334 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35335 = expr__35332;
return (pred__35331.cljs$core$IFn$_invoke$arity$2 ? pred__35331.cljs$core$IFn$_invoke$arity$2(G__35334,G__35335) : pred__35331.call(null,G__35334,G__35335));
})())){
return (new shadow.dom.Size(G__35324,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35336 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35337 = expr__35332;
return (pred__35331.cljs$core$IFn$_invoke$arity$2 ? pred__35331.cljs$core$IFn$_invoke$arity$2(G__35336,G__35337) : pred__35331.call(null,G__35336,G__35337));
})())){
return (new shadow.dom.Size(self__.w,G__35324,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12151__auto__,G__35324),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12142__auto__,G__35324){
var self__ = this;
var this__12142__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35324,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12148__auto__,entry__12149__auto__){
var self__ = this;
var this__12148__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12149__auto__)){
return cljs.core._assoc(this__12148__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12149__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12149__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12148__auto____$1,entry__12149__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35328){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35328),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35328),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35328,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0))),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35339 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35339);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4373__auto__ = opts;
var l__4374__auto__ = a__4373__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4374__auto__)){
var G__35340 = (i + (1));
var G__35341 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35340;
ret = G__35341;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35342){
var vec__35343 = p__35342;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35343,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35347 = arguments.length;
switch (G__35347) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35349_35351 = new_node;
var G__35350_35352 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35349_35351,G__35350_35352);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35353_35355 = new_node;
var G__35354_35356 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35353_35355,G__35354_35356);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35357 = ps;
var G__35358 = (i + (1));
el__$1 = G__35357;
i = G__35358;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35359 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35359);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35360 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35360);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35361 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35361);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35362 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35365_35375 = cljs.core.seq(props);
var chunk__35366_35376 = null;
var count__35367_35377 = (0);
var i__35368_35378 = (0);
while(true){
if((i__35368_35378 < count__35367_35377)){
var vec__35369_35379 = chunk__35366_35376.cljs$core$IIndexed$_nth$arity$2(null,i__35368_35378);
var k_35380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369_35379,(0),null);
var v_35381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369_35379,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_35380);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35380),v_35381);


var G__35382 = seq__35365_35375;
var G__35383 = chunk__35366_35376;
var G__35384 = count__35367_35377;
var G__35385 = (i__35368_35378 + (1));
seq__35365_35375 = G__35382;
chunk__35366_35376 = G__35383;
count__35367_35377 = G__35384;
i__35368_35378 = G__35385;
continue;
} else {
var temp__5457__auto___35386 = cljs.core.seq(seq__35365_35375);
if(temp__5457__auto___35386){
var seq__35365_35387__$1 = temp__5457__auto___35386;
if(cljs.core.chunked_seq_QMARK_(seq__35365_35387__$1)){
var c__4319__auto___35388 = cljs.core.chunk_first(seq__35365_35387__$1);
var G__35389 = cljs.core.chunk_rest(seq__35365_35387__$1);
var G__35390 = c__4319__auto___35388;
var G__35391 = cljs.core.count(c__4319__auto___35388);
var G__35392 = (0);
seq__35365_35375 = G__35389;
chunk__35366_35376 = G__35390;
count__35367_35377 = G__35391;
i__35368_35378 = G__35392;
continue;
} else {
var vec__35372_35393 = cljs.core.first(seq__35365_35387__$1);
var k_35394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372_35393,(0),null);
var v_35395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372_35393,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_35394);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35394),v_35395);


var G__35396 = cljs.core.next(seq__35365_35387__$1);
var G__35397 = null;
var G__35398 = (0);
var G__35399 = (0);
seq__35365_35375 = G__35396;
chunk__35366_35376 = G__35397;
count__35367_35377 = G__35398;
i__35368_35378 = G__35399;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35401 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(1),null);
var seq__35404_35422 = cljs.core.seq(node_children);
var chunk__35406_35423 = null;
var count__35407_35424 = (0);
var i__35408_35425 = (0);
while(true){
if((i__35408_35425 < count__35407_35424)){
var child_struct_35426 = chunk__35406_35423.cljs$core$IIndexed$_nth$arity$2(null,i__35408_35425);
if(!((child_struct_35426 == null))){
if(typeof child_struct_35426 === 'string'){
var text_35427 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35427),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_35426)].join(''));
} else {
var children_35428 = shadow.dom.svg_node(child_struct_35426);
if(cljs.core.seq_QMARK_(children_35428)){
var seq__35410_35429 = cljs.core.seq(children_35428);
var chunk__35412_35430 = null;
var count__35413_35431 = (0);
var i__35414_35432 = (0);
while(true){
if((i__35414_35432 < count__35413_35431)){
var child_35433 = chunk__35412_35430.cljs$core$IIndexed$_nth$arity$2(null,i__35414_35432);
if(cljs.core.truth_(child_35433)){
node.appendChild(child_35433);


var G__35434 = seq__35410_35429;
var G__35435 = chunk__35412_35430;
var G__35436 = count__35413_35431;
var G__35437 = (i__35414_35432 + (1));
seq__35410_35429 = G__35434;
chunk__35412_35430 = G__35435;
count__35413_35431 = G__35436;
i__35414_35432 = G__35437;
continue;
} else {
var G__35438 = seq__35410_35429;
var G__35439 = chunk__35412_35430;
var G__35440 = count__35413_35431;
var G__35441 = (i__35414_35432 + (1));
seq__35410_35429 = G__35438;
chunk__35412_35430 = G__35439;
count__35413_35431 = G__35440;
i__35414_35432 = G__35441;
continue;
}
} else {
var temp__5457__auto___35442 = cljs.core.seq(seq__35410_35429);
if(temp__5457__auto___35442){
var seq__35410_35443__$1 = temp__5457__auto___35442;
if(cljs.core.chunked_seq_QMARK_(seq__35410_35443__$1)){
var c__4319__auto___35444 = cljs.core.chunk_first(seq__35410_35443__$1);
var G__35445 = cljs.core.chunk_rest(seq__35410_35443__$1);
var G__35446 = c__4319__auto___35444;
var G__35447 = cljs.core.count(c__4319__auto___35444);
var G__35448 = (0);
seq__35410_35429 = G__35445;
chunk__35412_35430 = G__35446;
count__35413_35431 = G__35447;
i__35414_35432 = G__35448;
continue;
} else {
var child_35449 = cljs.core.first(seq__35410_35443__$1);
if(cljs.core.truth_(child_35449)){
node.appendChild(child_35449);


var G__35450 = cljs.core.next(seq__35410_35443__$1);
var G__35451 = null;
var G__35452 = (0);
var G__35453 = (0);
seq__35410_35429 = G__35450;
chunk__35412_35430 = G__35451;
count__35413_35431 = G__35452;
i__35414_35432 = G__35453;
continue;
} else {
var G__35454 = cljs.core.next(seq__35410_35443__$1);
var G__35455 = null;
var G__35456 = (0);
var G__35457 = (0);
seq__35410_35429 = G__35454;
chunk__35412_35430 = G__35455;
count__35413_35431 = G__35456;
i__35414_35432 = G__35457;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35428);
}
}


var G__35458 = seq__35404_35422;
var G__35459 = chunk__35406_35423;
var G__35460 = count__35407_35424;
var G__35461 = (i__35408_35425 + (1));
seq__35404_35422 = G__35458;
chunk__35406_35423 = G__35459;
count__35407_35424 = G__35460;
i__35408_35425 = G__35461;
continue;
} else {
var G__35462 = seq__35404_35422;
var G__35463 = chunk__35406_35423;
var G__35464 = count__35407_35424;
var G__35465 = (i__35408_35425 + (1));
seq__35404_35422 = G__35462;
chunk__35406_35423 = G__35463;
count__35407_35424 = G__35464;
i__35408_35425 = G__35465;
continue;
}
} else {
var temp__5457__auto___35466 = cljs.core.seq(seq__35404_35422);
if(temp__5457__auto___35466){
var seq__35404_35467__$1 = temp__5457__auto___35466;
if(cljs.core.chunked_seq_QMARK_(seq__35404_35467__$1)){
var c__4319__auto___35468 = cljs.core.chunk_first(seq__35404_35467__$1);
var G__35469 = cljs.core.chunk_rest(seq__35404_35467__$1);
var G__35470 = c__4319__auto___35468;
var G__35471 = cljs.core.count(c__4319__auto___35468);
var G__35472 = (0);
seq__35404_35422 = G__35469;
chunk__35406_35423 = G__35470;
count__35407_35424 = G__35471;
i__35408_35425 = G__35472;
continue;
} else {
var child_struct_35473 = cljs.core.first(seq__35404_35467__$1);
if(!((child_struct_35473 == null))){
if(typeof child_struct_35473 === 'string'){
var text_35474 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35474),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_35473)].join(''));
} else {
var children_35475 = shadow.dom.svg_node(child_struct_35473);
if(cljs.core.seq_QMARK_(children_35475)){
var seq__35416_35476 = cljs.core.seq(children_35475);
var chunk__35418_35477 = null;
var count__35419_35478 = (0);
var i__35420_35479 = (0);
while(true){
if((i__35420_35479 < count__35419_35478)){
var child_35480 = chunk__35418_35477.cljs$core$IIndexed$_nth$arity$2(null,i__35420_35479);
if(cljs.core.truth_(child_35480)){
node.appendChild(child_35480);


var G__35481 = seq__35416_35476;
var G__35482 = chunk__35418_35477;
var G__35483 = count__35419_35478;
var G__35484 = (i__35420_35479 + (1));
seq__35416_35476 = G__35481;
chunk__35418_35477 = G__35482;
count__35419_35478 = G__35483;
i__35420_35479 = G__35484;
continue;
} else {
var G__35485 = seq__35416_35476;
var G__35486 = chunk__35418_35477;
var G__35487 = count__35419_35478;
var G__35488 = (i__35420_35479 + (1));
seq__35416_35476 = G__35485;
chunk__35418_35477 = G__35486;
count__35419_35478 = G__35487;
i__35420_35479 = G__35488;
continue;
}
} else {
var temp__5457__auto___35489__$1 = cljs.core.seq(seq__35416_35476);
if(temp__5457__auto___35489__$1){
var seq__35416_35490__$1 = temp__5457__auto___35489__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35416_35490__$1)){
var c__4319__auto___35491 = cljs.core.chunk_first(seq__35416_35490__$1);
var G__35492 = cljs.core.chunk_rest(seq__35416_35490__$1);
var G__35493 = c__4319__auto___35491;
var G__35494 = cljs.core.count(c__4319__auto___35491);
var G__35495 = (0);
seq__35416_35476 = G__35492;
chunk__35418_35477 = G__35493;
count__35419_35478 = G__35494;
i__35420_35479 = G__35495;
continue;
} else {
var child_35496 = cljs.core.first(seq__35416_35490__$1);
if(cljs.core.truth_(child_35496)){
node.appendChild(child_35496);


var G__35497 = cljs.core.next(seq__35416_35490__$1);
var G__35498 = null;
var G__35499 = (0);
var G__35500 = (0);
seq__35416_35476 = G__35497;
chunk__35418_35477 = G__35498;
count__35419_35478 = G__35499;
i__35420_35479 = G__35500;
continue;
} else {
var G__35501 = cljs.core.next(seq__35416_35490__$1);
var G__35502 = null;
var G__35503 = (0);
var G__35504 = (0);
seq__35416_35476 = G__35501;
chunk__35418_35477 = G__35502;
count__35419_35478 = G__35503;
i__35420_35479 = G__35504;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35475);
}
}


var G__35505 = cljs.core.next(seq__35404_35467__$1);
var G__35506 = null;
var G__35507 = (0);
var G__35508 = (0);
seq__35404_35422 = G__35505;
chunk__35406_35423 = G__35506;
count__35407_35424 = G__35507;
i__35408_35425 = G__35508;
continue;
} else {
var G__35509 = cljs.core.next(seq__35404_35467__$1);
var G__35510 = null;
var G__35511 = (0);
var G__35512 = (0);
seq__35404_35422 = G__35509;
chunk__35406_35423 = G__35510;
count__35407_35424 = G__35511;
i__35408_35425 = G__35512;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35513_35519 = shadow.dom._to_svg;
var G__35514_35520 = "string";
var G__35515_35521 = ((function (G__35513_35519,G__35514_35520){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35513_35519,G__35514_35520))
;
goog.object.set(G__35513_35519,G__35514_35520,G__35515_35521);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35516_35522 = shadow.dom._to_svg;
var G__35517_35523 = "null";
var G__35518_35524 = ((function (G__35516_35522,G__35517_35523){
return (function (_){
return null;
});})(G__35516_35522,G__35517_35523))
;
goog.object.set(G__35516_35522,G__35517_35523,G__35518_35524);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35527 = arguments.length;
var i__4500__auto___35528 = (0);
while(true){
if((i__4500__auto___35528 < len__4499__auto___35527)){
args__4502__auto__.push((arguments[i__4500__auto___35528]));

var G__35529 = (i__4500__auto___35528 + (1));
i__4500__auto___35528 = G__35529;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35525){
var G__35526 = cljs.core.first(seq35525);
var seq35525__$1 = cljs.core.next(seq35525);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35526,seq35525__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35531 = arguments.length;
switch (G__35531) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35532_35547 = shadow.dom.dom_node(el);
var G__35533_35548 = cljs.core.name(event);
var G__35534_35549 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35532_35547,G__35533_35548,G__35534_35549) : shadow.dom.dom_listen.call(null,G__35532_35547,G__35533_35548,G__35534_35549));

if(cljs.core.truth_((function (){var and__3911__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3911__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3911__auto__;
}
})())){
var c__32906__auto___35550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___35550,buf,chan,event_fn){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___35550,buf,chan,event_fn){
return (function (state_35539){
var state_val_35540 = (state_35539[(1)]);
if((state_val_35540 === (1))){
var state_35539__$1 = state_35539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35539__$1,(2),once_or_cleanup);
} else {
if((state_val_35540 === (2))){
var inst_35536 = (state_35539[(2)]);
var inst_35537 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35539__$1 = (function (){var statearr_35541 = state_35539;
(statearr_35541[(7)] = inst_35536);

return statearr_35541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35539__$1,inst_35537);
} else {
return null;
}
}
});})(c__32906__auto___35550,buf,chan,event_fn))
;
return ((function (switch__32732__auto__,c__32906__auto___35550,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__32733__auto__ = null;
var shadow$dom$state_machine__32733__auto____0 = (function (){
var statearr_35542 = [null,null,null,null,null,null,null,null];
(statearr_35542[(0)] = shadow$dom$state_machine__32733__auto__);

(statearr_35542[(1)] = (1));

return statearr_35542;
});
var shadow$dom$state_machine__32733__auto____1 = (function (state_35539){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_35539);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e35543){if((e35543 instanceof Object)){
var ex__32736__auto__ = e35543;
var statearr_35544_35551 = state_35539;
(statearr_35544_35551[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35552 = state_35539;
state_35539 = G__35552;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
shadow$dom$state_machine__32733__auto__ = function(state_35539){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32733__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32733__auto____1.call(this,state_35539);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$dom$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32733__auto____0;
shadow$dom$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32733__auto____1;
return shadow$dom$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___35550,buf,chan,event_fn))
})();
var state__32908__auto__ = (function (){var statearr_35545 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_35545[(6)] = c__32906__auto___35550);

return statearr_35545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___35550,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
