goog.provide('shadow.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
shadow.util.console_friendly = (function shadow$util$console_friendly(a){
if((a == null)){
return "nil";
} else {
if((a instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');
} else {
if(typeof a === 'string'){
return a;
} else {
if(typeof a === 'number'){
return a;
} else {
if(((!((a == null)))?(((((a.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IPrintWithWriter$))))?true:(((!a.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,a))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
} else {
return a;

}
}
}
}
}
});
shadow.util.go_BANG_ = (function shadow$util$go_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34896 = arguments.length;
var i__4500__auto___34897 = (0);
while(true){
if((i__4500__auto___34897 < len__4499__auto___34896)){
args__4502__auto__.push((arguments[i__4500__auto___34897]));

var G__34900 = (i__4500__auto___34897 + (1));
i__4500__auto___34897 = G__34900;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return shadow.util.go_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

shadow.util.go_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (body){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("go! is a macro",cljs.core.PersistentArrayMap.EMPTY);
});

shadow.util.go_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.util.go_BANG_.cljs$lang$applyTo = (function (seq34892){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34892));
});

shadow.util.console_QMARK_ = typeof console !== 'undefined';
shadow.util.log = (function shadow$util$log(var_args){
var G__34916 = arguments.length;
switch (G__34916) {
case 1:
return shadow.util.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.util.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.util.log.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.util.log.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.util.log.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.util.log.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___34918 = arguments.length;
var i__4500__auto___34919 = (0);
while(true){
if((i__4500__auto___34919 < len__4499__auto___34918)){
args_arr__4514__auto__.push((arguments[i__4500__auto___34919]));

var G__34920 = (i__4500__auto___34919 + (1));
i__4500__auto___34919 = G__34920;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((6)),(0),null));
return shadow.util.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4515__auto__);

}
});

shadow.util.log.cljs$core$IFn$_invoke$arity$1 = (function (a1){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1));
} else {
return null;
}
});

shadow.util.log.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2));
} else {
return null;
}
});

shadow.util.log.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3));
} else {
return null;
}
});

shadow.util.log.cljs$core$IFn$_invoke$arity$4 = (function (a1,a2,a3,a4){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3),shadow.util.console_friendly(a4));
} else {
return null;
}
});

shadow.util.log.cljs$core$IFn$_invoke$arity$5 = (function (a1,a2,a3,a4,a5){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3),shadow.util.console_friendly(a4),shadow.util.console_friendly(a5));
} else {
return null;
}
});

shadow.util.log.cljs$core$IFn$_invoke$arity$6 = (function (a1,a2,a3,a4,a5,a6){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3),shadow.util.console_friendly(a4),shadow.util.console_friendly(a5),shadow.util.console_friendly(a6));
} else {
return null;
}
});

shadow.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (a1,a2,a3,a4,a5,a6,more){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3),shadow.util.console_friendly(a4),shadow.util.console_friendly(a5),shadow.util.console_friendly(a6),"more:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
} else {
return null;
}
});

/** @this {Function} */
shadow.util.log.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first(seq34909);
var seq34909__$1 = cljs.core.next(seq34909);
var G__34911 = cljs.core.first(seq34909__$1);
var seq34909__$2 = cljs.core.next(seq34909__$1);
var G__34912 = cljs.core.first(seq34909__$2);
var seq34909__$3 = cljs.core.next(seq34909__$2);
var G__34913 = cljs.core.first(seq34909__$3);
var seq34909__$4 = cljs.core.next(seq34909__$3);
var G__34914 = cljs.core.first(seq34909__$4);
var seq34909__$5 = cljs.core.next(seq34909__$4);
var G__34915 = cljs.core.first(seq34909__$5);
var seq34909__$6 = cljs.core.next(seq34909__$5);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34910,G__34911,G__34912,G__34913,G__34914,G__34915,seq34909__$6);
});

shadow.util.log.cljs$lang$maxFixedArity = (6);

shadow.util.remove_from_vector = (function shadow$util$remove_from_vector(coll,key){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,p__34923){
var vec__34924 = p__34923;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34924,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34924,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,key)){
return v;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,item);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll)));
});
shadow.util.remove_item_from_coll = (function shadow$util$remove_item_from_coll(coll,key,value){
if(((!((coll == null)))?(((((coll.cljs$lang$protocol_mask$partition0$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IVector$))))?true:(((!coll.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IVector,coll):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IVector,coll))){
return shadow.util.remove_from_vector(coll,key);
} else {
if(((!((coll == null)))?(((((coll.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IMap$))))?true:(((!coll.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,coll):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,coll))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(coll,key);
} else {
if(((!((coll == null)))?(((((coll.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$ISet$))))?true:(((!coll.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,coll):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,coll))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(coll,value);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unknown coll type",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null));

}
}
}
});

//# sourceMappingURL=shadow.util.js.map
