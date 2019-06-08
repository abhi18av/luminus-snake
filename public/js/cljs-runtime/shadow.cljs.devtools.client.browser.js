goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if(typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if(typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if(typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36550 = arguments.length;
var i__4500__auto___36551 = (0);
while(true){
if((i__4500__auto___36551 < len__4499__auto___36550)){
args__4502__auto__.push((arguments[i__4500__auto___36551]));

var G__36552 = (i__4500__auto___36551 + (1));
i__4500__auto___36551 = G__36552;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36546){
var G__36547 = cljs.core.first(seq36546);
var seq36546__$1 = cljs.core.next(seq36546);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36547,seq36546__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if(typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__36556){
var map__36557 = p__36556;
var map__36557__$1 = ((((!((map__36557 == null)))?(((((map__36557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36557):map__36557);
var src = map__36557__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36559 = cljs.core.seq(sources);
var chunk__36560 = null;
var count__36561 = (0);
var i__36562 = (0);
while(true){
if((i__36562 < count__36561)){
var map__36563 = chunk__36560.cljs$core$IIndexed$_nth$arity$2(null,i__36562);
var map__36563__$1 = ((((!((map__36563 == null)))?(((((map__36563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36563):map__36563);
var src = map__36563__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"js","js",1768080579));
SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__36567 = seq__36559;
var G__36568 = chunk__36560;
var G__36569 = count__36561;
var G__36570 = (i__36562 + (1));
seq__36559 = G__36567;
chunk__36560 = G__36568;
count__36561 = G__36569;
i__36562 = G__36570;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36559);
if(temp__5457__auto__){
var seq__36559__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36559__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36559__$1);
var G__36571 = cljs.core.chunk_rest(seq__36559__$1);
var G__36572 = c__4319__auto__;
var G__36573 = cljs.core.count(c__4319__auto__);
var G__36574 = (0);
seq__36559 = G__36571;
chunk__36560 = G__36572;
count__36561 = G__36573;
i__36562 = G__36574;
continue;
} else {
var map__36565 = cljs.core.first(seq__36559__$1);
var map__36565__$1 = ((((!((map__36565 == null)))?(((((map__36565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36565):map__36565);
var src = map__36565__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"js","js",1768080579));
SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__36575 = cljs.core.next(seq__36559__$1);
var G__36576 = null;
var G__36577 = (0);
var G__36578 = (0);
seq__36559 = G__36575;
chunk__36560 = G__36576;
count__36561 = G__36577;
i__36562 = G__36578;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36580 = cljs.core.seq(js_requires);
var chunk__36581 = null;
var count__36582 = (0);
var i__36583 = (0);
while(true){
if((i__36583 < count__36582)){
var js_ns = chunk__36581.cljs$core$IIndexed$_nth$arity$2(null,i__36583);
var require_str_36587 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36587);


var G__36588 = seq__36580;
var G__36589 = chunk__36581;
var G__36590 = count__36582;
var G__36591 = (i__36583 + (1));
seq__36580 = G__36588;
chunk__36581 = G__36589;
count__36582 = G__36590;
i__36583 = G__36591;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36580);
if(temp__5457__auto__){
var seq__36580__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36580__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36580__$1);
var G__36593 = cljs.core.chunk_rest(seq__36580__$1);
var G__36594 = c__4319__auto__;
var G__36595 = cljs.core.count(c__4319__auto__);
var G__36596 = (0);
seq__36580 = G__36593;
chunk__36581 = G__36594;
count__36582 = G__36595;
i__36583 = G__36596;
continue;
} else {
var js_ns = cljs.core.first(seq__36580__$1);
var require_str_36599 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36599);


var G__36600 = cljs.core.next(seq__36580__$1);
var G__36601 = null;
var G__36602 = (0);
var G__36603 = (0);
seq__36580 = G__36600;
chunk__36581 = G__36601;
count__36582 = G__36602;
i__36583 = G__36603;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36604 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36604) : callback.call(null,G__36604));
} else {
var G__36606 = shadow.cljs.devtools.client.env.files_url();
var G__36607 = ((function (G__36606){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__36606))
;
var G__36608 = "POST";
var G__36609 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__36610 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36606,G__36607,G__36608,G__36609,G__36610);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36615){
var map__36616 = p__36615;
var map__36616__$1 = ((((!((map__36616 == null)))?(((((map__36616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36616):map__36616);
var msg = map__36616__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36616__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36616__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__36621 = info;
var map__36621__$1 = ((((!((map__36621 == null)))?(((((map__36621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36621):map__36621);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36621__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36621__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__36621,map__36621__$1,sources,compiled,map__36616,map__36616__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36623(s__36624){
return (new cljs.core.LazySeq(null,((function (map__36621,map__36621__$1,sources,compiled,map__36616,map__36616__$1,msg,info,reload_info){
return (function (){
var s__36624__$1 = s__36624;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__36624__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__36629 = cljs.core.first(xs__6012__auto__);
var map__36629__$1 = ((((!((map__36629 == null)))?(((((map__36629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36629):map__36629);
var src = map__36629__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36629__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36629__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__36624__$1,map__36629,map__36629__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__36621,map__36621__$1,sources,compiled,map__36616,map__36616__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36623_$_iter__36625(s__36626){
return (new cljs.core.LazySeq(null,((function (s__36624__$1,map__36629,map__36629__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__36621,map__36621__$1,sources,compiled,map__36616,map__36616__$1,msg,info,reload_info){
return (function (){
var s__36626__$1 = s__36626;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__36626__$1);
if(temp__5457__auto____$1){
var s__36626__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36626__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__36626__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__36628 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__36627 = (0);
while(true){
if((i__36627 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__36627);
cljs.core.chunk_append(b__36628,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36655 = (i__36627 + (1));
i__36627 = G__36655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36628),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36623_$_iter__36625(cljs.core.chunk_rest(s__36626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36628),null);
}
} else {
var warning = cljs.core.first(s__36626__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36623_$_iter__36625(cljs.core.rest(s__36626__$2)));
}
} else {
return null;
}
break;
}
});})(s__36624__$1,map__36629,map__36629__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__36621,map__36621__$1,sources,compiled,map__36616,map__36616__$1,msg,info,reload_info))
,null,null));
});})(s__36624__$1,map__36629,map__36629__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__36621,map__36621__$1,sources,compiled,map__36616,map__36616__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36623(cljs.core.rest(s__36624__$1)));
} else {
var G__36659 = cljs.core.rest(s__36624__$1);
s__36624__$1 = G__36659;
continue;
}
} else {
var G__36660 = cljs.core.rest(s__36624__$1);
s__36624__$1 = G__36660;
continue;
}
} else {
return null;
}
break;
}
});})(map__36621,map__36621__$1,sources,compiled,map__36616,map__36616__$1,msg,info,reload_info))
,null,null));
});})(map__36621,map__36621__$1,sources,compiled,map__36616,map__36616__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
var seq__36633_36661 = cljs.core.seq(warnings);
var chunk__36634_36662 = null;
var count__36635_36663 = (0);
var i__36636_36664 = (0);
while(true){
if((i__36636_36664 < count__36635_36663)){
var map__36637_36665 = chunk__36634_36662.cljs$core$IIndexed$_nth$arity$2(null,i__36636_36664);
var map__36637_36666__$1 = ((((!((map__36637_36665 == null)))?(((((map__36637_36665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36637_36665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36637_36665):map__36637_36665);
var w_36667 = map__36637_36666__$1;
var msg_36668__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637_36666__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637_36666__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637_36666__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637_36666__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36671)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36669),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36670),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36668__$1)].join(''));


var G__36674 = seq__36633_36661;
var G__36675 = chunk__36634_36662;
var G__36676 = count__36635_36663;
var G__36677 = (i__36636_36664 + (1));
seq__36633_36661 = G__36674;
chunk__36634_36662 = G__36675;
count__36635_36663 = G__36676;
i__36636_36664 = G__36677;
continue;
} else {
var temp__5457__auto___36678 = cljs.core.seq(seq__36633_36661);
if(temp__5457__auto___36678){
var seq__36633_36679__$1 = temp__5457__auto___36678;
if(cljs.core.chunked_seq_QMARK_(seq__36633_36679__$1)){
var c__4319__auto___36680 = cljs.core.chunk_first(seq__36633_36679__$1);
var G__36681 = cljs.core.chunk_rest(seq__36633_36679__$1);
var G__36682 = c__4319__auto___36680;
var G__36683 = cljs.core.count(c__4319__auto___36680);
var G__36684 = (0);
seq__36633_36661 = G__36681;
chunk__36634_36662 = G__36682;
count__36635_36663 = G__36683;
i__36636_36664 = G__36684;
continue;
} else {
var map__36639_36685 = cljs.core.first(seq__36633_36679__$1);
var map__36639_36686__$1 = ((((!((map__36639_36685 == null)))?(((((map__36639_36685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36639_36685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36639_36685):map__36639_36685);
var w_36687 = map__36639_36686__$1;
var msg_36688__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36639_36686__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36639_36686__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36639_36686__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36639_36686__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36691)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36689),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36690),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36688__$1)].join(''));


var G__36695 = cljs.core.next(seq__36633_36679__$1);
var G__36696 = null;
var G__36697 = (0);
var G__36698 = (0);
seq__36633_36661 = G__36695;
chunk__36634_36662 = G__36696;
count__36635_36663 = G__36697;
i__36636_36664 = G__36698;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__36621,map__36621__$1,sources,compiled,warnings,map__36616,map__36616__$1,msg,info,reload_info){
return (function (p__36641){
var map__36642 = p__36641;
var map__36642__$1 = ((((!((map__36642 == null)))?(((((map__36642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36642):map__36642);
var src = map__36642__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36642__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36642__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__36621,map__36621__$1,sources,compiled,warnings,map__36616,map__36616__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__36621,map__36621__$1,sources,compiled,warnings,map__36616,map__36616__$1,msg,info,reload_info){
return (function (p__36644){
var map__36645 = p__36644;
var map__36645__$1 = ((((!((map__36645 == null)))?(((((map__36645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36645):map__36645);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36645__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__36621,map__36621__$1,sources,compiled,warnings,map__36616,map__36616__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__36621,map__36621__$1,sources,compiled,warnings,map__36616,map__36616__$1,msg,info,reload_info){
return (function (p__36647){
var map__36648 = p__36647;
var map__36648__$1 = ((((!((map__36648 == null)))?(((((map__36648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36648):map__36648);
var rc = map__36648__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36648__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__36621,map__36621__$1,sources,compiled,warnings,map__36616,map__36616__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__36621,map__36621__$1,sources,compiled,warnings,map__36616,map__36616__$1,msg,info,reload_info){
return (function (p1__36614_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36614_SHARP_,shadow.cljs.devtools.client.hud.load_end_success);
});})(sources_to_get,map__36621,map__36621__$1,sources,compiled,warnings,map__36616,map__36616__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36701){
var map__36702 = p__36701;
var map__36702__$1 = ((((!((map__36702 == null)))?(((((map__36702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36702):map__36702);
var msg = map__36702__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36702__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36705 = cljs.core.seq(updates);
var chunk__36707 = null;
var count__36708 = (0);
var i__36709 = (0);
while(true){
if((i__36709 < count__36708)){
var path = chunk__36707.cljs$core$IIndexed$_nth$arity$2(null,i__36709);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___36719 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___36719)){
var node_36720 = temp__5457__auto___36719;
var new_link_36721 = (function (){var G__36713 = document.createElement("link");
G__36713.setAttribute("rel","stylesheet");

G__36713.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36713;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_36721,node_36720);

goog.dom.removeNode(node_36720);
} else {
}


var G__36722 = seq__36705;
var G__36723 = chunk__36707;
var G__36724 = count__36708;
var G__36725 = (i__36709 + (1));
seq__36705 = G__36722;
chunk__36707 = G__36723;
count__36708 = G__36724;
i__36709 = G__36725;
continue;
} else {
var G__36726 = seq__36705;
var G__36727 = chunk__36707;
var G__36728 = count__36708;
var G__36729 = (i__36709 + (1));
seq__36705 = G__36726;
chunk__36707 = G__36727;
count__36708 = G__36728;
i__36709 = G__36729;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36705);
if(temp__5457__auto__){
var seq__36705__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36705__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36705__$1);
var G__36730 = cljs.core.chunk_rest(seq__36705__$1);
var G__36731 = c__4319__auto__;
var G__36732 = cljs.core.count(c__4319__auto__);
var G__36733 = (0);
seq__36705 = G__36730;
chunk__36707 = G__36731;
count__36708 = G__36732;
i__36709 = G__36733;
continue;
} else {
var path = cljs.core.first(seq__36705__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___36734__$1 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___36734__$1)){
var node_36735 = temp__5457__auto___36734__$1;
var new_link_36736 = (function (){var G__36717 = document.createElement("link");
G__36717.setAttribute("rel","stylesheet");

G__36717.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36717;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_36736,node_36735);

goog.dom.removeNode(node_36735);
} else {
}


var G__36737 = cljs.core.next(seq__36705__$1);
var G__36738 = null;
var G__36739 = (0);
var G__36740 = (0);
seq__36705 = G__36737;
chunk__36707 = G__36738;
count__36708 = G__36739;
i__36709 = G__36740;
continue;
} else {
var G__36741 = cljs.core.next(seq__36705__$1);
var G__36742 = null;
var G__36743 = (0);
var G__36744 = (0);
seq__36705 = G__36741;
chunk__36707 = G__36742;
count__36708 = G__36743;
i__36709 = G__36744;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36745){
var map__36746 = p__36745;
var map__36746__$1 = ((((!((map__36746 == null)))?(((((map__36746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36746):map__36746);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36746__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36746__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__36746,map__36746__$1,id,js){
return (function (){
return eval(js);
});})(map__36746,map__36746__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36748){
var map__36749 = p__36748;
var map__36749__$1 = ((((!((map__36749 == null)))?(((((map__36749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36749):map__36749);
var msg = map__36749__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36749__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36749__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36749__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36749__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__36749,map__36749__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__36751){
var map__36752 = p__36751;
var map__36752__$1 = ((((!((map__36752 == null)))?(((((map__36752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36752):map__36752);
var src = map__36752__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3911__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3911__auto__;
}
});})(map__36749,map__36749__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__36749,map__36749__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__36749,map__36749__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36756){
var map__36757 = p__36756;
var map__36757__$1 = ((((!((map__36757 == null)))?(((((map__36757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36757):map__36757);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36757__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36757__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__36757,map__36757__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__36757,map__36757__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36759){
var map__36760 = p__36759;
var map__36760__$1 = ((((!((map__36760 == null)))?(((((map__36760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36760):map__36760);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36762){
var map__36763 = p__36762;
var map__36763__$1 = ((((!((map__36763 == null)))?(((((map__36763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36763):map__36763);
var msg = map__36763__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36763__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__36765 = type;
var G__36765__$1 = (((G__36765 instanceof cljs.core.Keyword))?G__36765.fqn:null);
switch (G__36765__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__36768 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__36769 = ((function (G__36768){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__36768))
;
var G__36770 = "POST";
var G__36771 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__36772 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36768,G__36769,G__36770,G__36771,G__36772);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3922__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___36790 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___36790)){
var s_36791 = temp__5457__auto___36790;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_36791.onclose = ((function (s_36791,temp__5457__auto___36790){
return (function (e){
return null;
});})(s_36791,temp__5457__auto___36790))
;

s_36791.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
