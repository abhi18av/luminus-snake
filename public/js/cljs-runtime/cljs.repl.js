goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31333){
var map__31334 = p__31333;
var map__31334__$1 = ((((!((map__31334 == null)))?(((((map__31334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31334):map__31334);
var m = map__31334__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31334__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31336_31381 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31337_31382 = null;
var count__31338_31383 = (0);
var i__31339_31384 = (0);
while(true){
if((i__31339_31384 < count__31338_31383)){
var f_31385 = chunk__31337_31382.cljs$core$IIndexed$_nth$arity$2(null,i__31339_31384);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31385], 0));


var G__31390 = seq__31336_31381;
var G__31391 = chunk__31337_31382;
var G__31392 = count__31338_31383;
var G__31393 = (i__31339_31384 + (1));
seq__31336_31381 = G__31390;
chunk__31337_31382 = G__31391;
count__31338_31383 = G__31392;
i__31339_31384 = G__31393;
continue;
} else {
var temp__5457__auto___31394 = cljs.core.seq(seq__31336_31381);
if(temp__5457__auto___31394){
var seq__31336_31396__$1 = temp__5457__auto___31394;
if(cljs.core.chunked_seq_QMARK_(seq__31336_31396__$1)){
var c__4319__auto___31397 = cljs.core.chunk_first(seq__31336_31396__$1);
var G__31402 = cljs.core.chunk_rest(seq__31336_31396__$1);
var G__31403 = c__4319__auto___31397;
var G__31404 = cljs.core.count(c__4319__auto___31397);
var G__31405 = (0);
seq__31336_31381 = G__31402;
chunk__31337_31382 = G__31403;
count__31338_31383 = G__31404;
i__31339_31384 = G__31405;
continue;
} else {
var f_31408 = cljs.core.first(seq__31336_31396__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31408], 0));


var G__31414 = cljs.core.next(seq__31336_31396__$1);
var G__31415 = null;
var G__31416 = (0);
var G__31417 = (0);
seq__31336_31381 = G__31414;
chunk__31337_31382 = G__31415;
count__31338_31383 = G__31416;
i__31339_31384 = G__31417;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31419 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31419], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31419)))?cljs.core.second(arglists_31419):arglists_31419)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31348_31424 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31349_31425 = null;
var count__31350_31426 = (0);
var i__31351_31427 = (0);
while(true){
if((i__31351_31427 < count__31350_31426)){
var vec__31356_31428 = chunk__31349_31425.cljs$core$IIndexed$_nth$arity$2(null,i__31351_31427);
var name_31429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31356_31428,(0),null);
var map__31359_31430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31356_31428,(1),null);
var map__31359_31431__$1 = ((((!((map__31359_31430 == null)))?(((((map__31359_31430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31359_31430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31359_31430):map__31359_31430);
var doc_31432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31359_31431__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31359_31431__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31429], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31433], 0));

if(cljs.core.truth_(doc_31432)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31432], 0));
} else {
}


var G__31438 = seq__31348_31424;
var G__31439 = chunk__31349_31425;
var G__31440 = count__31350_31426;
var G__31441 = (i__31351_31427 + (1));
seq__31348_31424 = G__31438;
chunk__31349_31425 = G__31439;
count__31350_31426 = G__31440;
i__31351_31427 = G__31441;
continue;
} else {
var temp__5457__auto___31442 = cljs.core.seq(seq__31348_31424);
if(temp__5457__auto___31442){
var seq__31348_31443__$1 = temp__5457__auto___31442;
if(cljs.core.chunked_seq_QMARK_(seq__31348_31443__$1)){
var c__4319__auto___31444 = cljs.core.chunk_first(seq__31348_31443__$1);
var G__31445 = cljs.core.chunk_rest(seq__31348_31443__$1);
var G__31446 = c__4319__auto___31444;
var G__31447 = cljs.core.count(c__4319__auto___31444);
var G__31448 = (0);
seq__31348_31424 = G__31445;
chunk__31349_31425 = G__31446;
count__31350_31426 = G__31447;
i__31351_31427 = G__31448;
continue;
} else {
var vec__31362_31449 = cljs.core.first(seq__31348_31443__$1);
var name_31450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31362_31449,(0),null);
var map__31365_31451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31362_31449,(1),null);
var map__31365_31452__$1 = ((((!((map__31365_31451 == null)))?(((((map__31365_31451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31365_31451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31365_31451):map__31365_31451);
var doc_31453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31365_31452__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31365_31452__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31450], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31454], 0));

if(cljs.core.truth_(doc_31453)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31453], 0));
} else {
}


var G__31456 = cljs.core.next(seq__31348_31443__$1);
var G__31457 = null;
var G__31458 = (0);
var G__31459 = (0);
seq__31348_31424 = G__31456;
chunk__31349_31425 = G__31457;
count__31350_31426 = G__31458;
i__31351_31427 = G__31459;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31370 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31371 = null;
var count__31372 = (0);
var i__31373 = (0);
while(true){
if((i__31373 < count__31372)){
var role = chunk__31371.cljs$core$IIndexed$_nth$arity$2(null,i__31373);
var temp__5457__auto___31460__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31460__$1)){
var spec_31461 = temp__5457__auto___31460__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_31461)], 0));
} else {
}


var G__31462 = seq__31370;
var G__31463 = chunk__31371;
var G__31464 = count__31372;
var G__31465 = (i__31373 + (1));
seq__31370 = G__31462;
chunk__31371 = G__31463;
count__31372 = G__31464;
i__31373 = G__31465;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__31370);
if(temp__5457__auto____$1){
var seq__31370__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31370__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__31370__$1);
var G__31466 = cljs.core.chunk_rest(seq__31370__$1);
var G__31467 = c__4319__auto__;
var G__31468 = cljs.core.count(c__4319__auto__);
var G__31469 = (0);
seq__31370 = G__31466;
chunk__31371 = G__31467;
count__31372 = G__31468;
i__31373 = G__31469;
continue;
} else {
var role = cljs.core.first(seq__31370__$1);
var temp__5457__auto___31470__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31470__$2)){
var spec_31471 = temp__5457__auto___31470__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_31471)], 0));
} else {
}


var G__31472 = cljs.core.next(seq__31370__$1);
var G__31473 = null;
var G__31474 = (0);
var G__31475 = (0);
seq__31370 = G__31472;
chunk__31371 = G__31473;
count__31372 = G__31474;
i__31373 = G__31475;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
