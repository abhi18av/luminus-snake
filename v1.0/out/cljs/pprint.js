// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__10338__auto__ = [];
var len__10335__auto___56 = arguments.length;
var i__10336__auto___57 = (0);
while(true){
if((i__10336__auto___57 < len__10335__auto___56)){
args__10338__auto__.push((arguments[i__10336__auto___57]));

var G__58 = (i__10336__auto___57 + (1));
i__10336__auto___57 = G__58;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq55){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__10338__auto__ = [];
var len__10335__auto___60 = arguments.length;
var i__10336__auto___61 = (0);
while(true){
if((i__10336__auto___61 < len__10335__auto___60)){
args__10338__auto__.push((arguments[i__10336__auto___61]));

var G__62 = (i__10336__auto___61 + (1));
i__10336__auto___61 = G__62;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq59){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__63 = cljs.core._EQ_;
var expr__64 = c;
if(cljs.core.truth_(pred__63.call(null,"\b",expr__64))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__63.call(null,"\t",expr__64))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__63.call(null,"\n",expr__64))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__63.call(null,"\f",expr__64))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__63.call(null,"\r",expr__64))){
return "\\return";
} else {
if(cljs.core.truth_(pred__63.call(null,"\"",expr__64))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__63.call(null,"\\",expr__64))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__10338__auto__ = [];
var len__10335__auto___67 = arguments.length;
var i__10336__auto___68 = (0);
while(true){
if((i__10336__auto___68 < len__10335__auto___67)){
args__10338__auto__.push((arguments[i__10336__auto___68]));

var G__69 = (i__10336__auto___68 + (1));
i__10336__auto___68 = G__69;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq66){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__10338__auto__ = [];
var len__10335__auto___71 = arguments.length;
var i__10336__auto___72 = (0);
while(true){
if((i__10336__auto___72 < len__10335__auto___71)){
args__10338__auto__.push((arguments[i__10336__auto___72]));

var G__73 = (i__10336__auto___72 + (1));
i__10336__auto___72 = G__73;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq70){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__77 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__77,(0),null);
var new_context = cljs.core.nth.call(null,vec__77,(1),null);
var G__80 = new_context;
var G__81 = remainder;
var G__82 = cljs.core.conj.call(null,acc,result);
context = G__80;
lis__$1 = G__81;
acc = G__82;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__86 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__86,(0),null);
var new_context = cljs.core.nth.call(null,vec__86,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__89 = new_context;
var G__90 = cljs.core.conj.call(null,acc,result);
context = G__89;
acc = G__90;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__94 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__94,(0),null);
var continue$ = cljs.core.nth.call(null,vec__94,(1),null);
var new_context = cljs.core.nth.call(null,vec__94,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__97 = new_context;
var G__98 = cljs.core.conj.call(null,acc,result);
context = G__97;
acc = G__98;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9992__auto__ = (function cljs$pprint$unzip_map_$_iter__99(s__100){
return (new cljs.core.LazySeq(null,(function (){
var s__100__$1 = s__100;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__100__$1);
if(temp__9015__auto__){
var s__100__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__100__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__100__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__102 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__101 = (0);
while(true){
if((i__101 < size__9991__auto__)){
var vec__103 = cljs.core._nth.call(null,c__9990__auto__,i__101);
var k = cljs.core.nth.call(null,vec__103,(0),null);
var vec__106 = cljs.core.nth.call(null,vec__103,(1),null);
var v1 = cljs.core.nth.call(null,vec__106,(0),null);
var v2 = cljs.core.nth.call(null,vec__106,(1),null);
cljs.core.chunk_append.call(null,b__102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__131 = (i__101 + (1));
i__101 = G__131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__102),cljs$pprint$unzip_map_$_iter__99.call(null,cljs.core.chunk_rest.call(null,s__100__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__102),null);
}
} else {
var vec__109 = cljs.core.first.call(null,s__100__$2);
var k = cljs.core.nth.call(null,vec__109,(0),null);
var vec__112 = cljs.core.nth.call(null,vec__109,(1),null);
var v1 = cljs.core.nth.call(null,vec__112,(0),null);
var v2 = cljs.core.nth.call(null,vec__112,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__99.call(null,cljs.core.rest.call(null,s__100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9992__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9992__auto__ = (function cljs$pprint$unzip_map_$_iter__115(s__116){
return (new cljs.core.LazySeq(null,(function (){
var s__116__$1 = s__116;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__116__$1);
if(temp__9015__auto__){
var s__116__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__116__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__116__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__118 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__117 = (0);
while(true){
if((i__117 < size__9991__auto__)){
var vec__119 = cljs.core._nth.call(null,c__9990__auto__,i__117);
var k = cljs.core.nth.call(null,vec__119,(0),null);
var vec__122 = cljs.core.nth.call(null,vec__119,(1),null);
var v1 = cljs.core.nth.call(null,vec__122,(0),null);
var v2 = cljs.core.nth.call(null,vec__122,(1),null);
cljs.core.chunk_append.call(null,b__118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__132 = (i__117 + (1));
i__117 = G__132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__118),cljs$pprint$unzip_map_$_iter__115.call(null,cljs.core.chunk_rest.call(null,s__116__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__118),null);
}
} else {
var vec__125 = cljs.core.first.call(null,s__116__$2);
var k = cljs.core.nth.call(null,vec__125,(0),null);
var vec__128 = cljs.core.nth.call(null,vec__125,(1),null);
var v1 = cljs.core.nth.call(null,vec__128,(0),null);
var v2 = cljs.core.nth.call(null,vec__128,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__115.call(null,cljs.core.rest.call(null,s__116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9992__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9992__auto__ = (function cljs$pprint$tuple_map_$_iter__133(s__134){
return (new cljs.core.LazySeq(null,(function (){
var s__134__$1 = s__134;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__134__$1);
if(temp__9015__auto__){
var s__134__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__134__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__134__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__136 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__135 = (0);
while(true){
if((i__135 < size__9991__auto__)){
var vec__137 = cljs.core._nth.call(null,c__9990__auto__,i__135);
var k = cljs.core.nth.call(null,vec__137,(0),null);
var v = cljs.core.nth.call(null,vec__137,(1),null);
cljs.core.chunk_append.call(null,b__136,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__143 = (i__135 + (1));
i__135 = G__143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136),cljs$pprint$tuple_map_$_iter__133.call(null,cljs.core.chunk_rest.call(null,s__134__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__136),null);
}
} else {
var vec__140 = cljs.core.first.call(null,s__134__$2);
var k = cljs.core.nth.call(null,vec__140,(0),null);
var v = cljs.core.nth.call(null,vec__140,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__133.call(null,cljs.core.rest.call(null,s__134__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9992__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__144 = (n - (1));
n = G__144;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.call(null,n,len)) || ((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))))){
return cljs.core.subs.call(null,s,n);
} else {
var G__145 = (n + (1));
n = G__145;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos)))))){
return pos;
} else {
var G__146 = (pos + (1));
pos = G__146;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__9839__auto__ = (((pp == null))?null:pp);
var m__9840__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__9839__auto__)]);
if((!((m__9840__auto__ == null)))){
return m__9840__auto__.call(null,pp);
} else {
var m__9837__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__9837__auto__ == null)))){
return m__9837__auto__.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",(1153190599)));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",(212345235)));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",(61366548)));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",(61366548)),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",(185279322)));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",(212345235)),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",(212345235))) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",(1153190599))) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",(185279322))),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__148 = arguments.length;
switch (G__148) {
case (1):
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",(61366548)),max_columns,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(0),new cljs.core.Keyword(null,"line","line",(212345235)),(0),new cljs.core.Keyword(null,"base","base",(185279322)),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint149 = (function (writer,max_columns,fields,meta150){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta150 = meta150;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_151,meta150__$1){
var self__ = this;
var _151__$1 = this;
return (new cljs.pprint.t_cljs$pprint149(self__.writer,self__.max_columns,self__.fields,meta150__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_151){
var self__ = this;
var _151__$1 = this;
return self__.meta150;
});})(fields))
;

cljs.pprint.t_cljs$pprint149.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint149.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint149.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__152 = cljs.core._EQ_;
var expr__153 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__152.call(null,String,expr__153))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",(1153190599))) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",(1153190599)),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",(212345235)),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",(212345235))) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__152,expr__153,this$__$1,fields){
return (function (p1__1_SHARP_){
return cljs.core._EQ_.call(null,p1__1_SHARP_,"\n");
});})(s,nl,pred__152,expr__153,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",(185279322))),s);
} else {
if(cljs.core.truth_(pred__152.call(null,Number,expr__153))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__153)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint149.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null),new cljs.core.Symbol(null,"meta150","meta150",(-68263203),null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint149.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint149.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint149";

cljs.pprint.t_cljs$pprint149.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.pprint/t_cljs$pprint149");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint149.
 */
cljs.pprint.__GT_t_cljs$pprint149 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint149(writer__$1,max_columns__$1,fields__$1,meta150){
return (new cljs.pprint.t_cljs$pprint149(writer__$1,max_columns__$1,fields__$1,meta150));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint149(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = (2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k157,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__161 = k157;
var G__161__$1 = (((G__161 instanceof cljs.core.Keyword))?G__161.fqn:null);
switch (G__161__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k157,else__9800__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__162){
var vec__163 = p__162;
var k__9820__auto__ = cljs.core.nth.call(null,vec__163,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__163,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.pprint.logical-block{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",(-878878779)),self__.parent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",(-300141526)),self__.section],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",(668080143)),self__.start_col],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",(-148200125)),self__.indent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),self__.done_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),self__.prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",(367373057)),self__.suffix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__156){
var self__ = this;
var G__156__$1 = this;
return (new cljs.core.RecordIter((0),G__156__$1,(10),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",(-878878779)),new cljs.core.Keyword(null,"section","section",(-300141526)),new cljs.core.Keyword(null,"start-col","start-col",(668080143)),new cljs.core.Keyword(null,"indent","indent",(-148200125)),new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),new cljs.core.Keyword(null,"suffix","suffix",(367373057)),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((10) + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((1977012399) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this158,other159){
var self__ = this;
var this158__$1 = this;
return (((!((other159 == null)))) && ((this158__$1.constructor === other159.constructor)) && (cljs.core._EQ_.call(null,this158__$1.parent,other159.parent)) && (cljs.core._EQ_.call(null,this158__$1.section,other159.section)) && (cljs.core._EQ_.call(null,this158__$1.start_col,other159.start_col)) && (cljs.core._EQ_.call(null,this158__$1.indent,other159.indent)) && (cljs.core._EQ_.call(null,this158__$1.done_nl,other159.done_nl)) && (cljs.core._EQ_.call(null,this158__$1.intra_block_nl,other159.intra_block_nl)) && (cljs.core._EQ_.call(null,this158__$1.prefix,other159.prefix)) && (cljs.core._EQ_.call(null,this158__$1.per_line_prefix,other159.per_line_prefix)) && (cljs.core._EQ_.call(null,this158__$1.suffix,other159.suffix)) && (cljs.core._EQ_.call(null,this158__$1.logical_block_callback,other159.logical_block_callback)) && (cljs.core._EQ_.call(null,this158__$1.__extmap,other159.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",(367373057)),null,new cljs.core.Keyword(null,"indent","indent",(-148200125)),null,new cljs.core.Keyword(null,"parent","parent",(-878878779)),null,new cljs.core.Keyword(null,"section","section",(-300141526)),null,new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),null,new cljs.core.Keyword(null,"start-col","start-col",(668080143)),null,new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__156){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__166 = cljs.core.keyword_identical_QMARK_;
var expr__167 = k__9805__auto__;
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"parent","parent",(-878878779)),expr__167))){
return (new cljs.pprint.logical_block(G__156,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"section","section",(-300141526)),expr__167))){
return (new cljs.pprint.logical_block(self__.parent,G__156,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"start-col","start-col",(668080143)),expr__167))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__156,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"indent","indent",(-148200125)),expr__167))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__156,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),expr__167))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__156,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),expr__167))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__156,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),expr__167))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__156,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),expr__167))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__156,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"suffix","suffix",(367373057)),expr__167))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__156,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__166.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),expr__167))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__156,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__156),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",(-878878779)),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",(-300141526)),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",(668080143)),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",(-148200125)),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",(367373057)),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__156){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__156,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",(761652748),null),new cljs.core.Symbol(null,"section","section",(1340390001),null),new cljs.core.Symbol(null,"start-col","start-col",(-1986355626),null),new cljs.core.Symbol(null,"indent","indent",(1492331402),null),new cljs.core.Symbol(null,"done-nl","done-nl",(1259507187),null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",(-845608894),null),new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",(-1807493956),null),new cljs.core.Symbol(null,"suffix","suffix",(2007904584),null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",(-1041744575),null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__160){
var extmap__9825__auto__ = (function (){var G__169 = cljs.core.dissoc.call(null,G__160,new cljs.core.Keyword(null,"parent","parent",(-878878779)),new cljs.core.Keyword(null,"section","section",(-300141526)),new cljs.core.Keyword(null,"start-col","start-col",(668080143)),new cljs.core.Keyword(null,"indent","indent",(-148200125)),new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),new cljs.core.Keyword(null,"suffix","suffix",(367373057)),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)));
if(cljs.core.record_QMARK_.call(null,G__160)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__169);
} else {
return G__169;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(G__160),new cljs.core.Keyword(null,"section","section",(-300141526)).cljs$core$IFn$_invoke$arity$1(G__160),new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(G__160),new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(G__160),new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(G__160),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(G__160),new cljs.core.Keyword(null,"prefix","prefix",(-265908465)).cljs$core$IFn$_invoke$arity$1(G__160),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(G__160),new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(G__160),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(G__160),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__171 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__171;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k173,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__177 = k173;
var G__177__$1 = (((G__177 instanceof cljs.core.Keyword))?G__177.fqn:null);
switch (G__177__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k173,else__9800__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__178){
var vec__179 = p__178;
var k__9820__auto__ = cljs.core.nth.call(null,vec__179,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__179,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",(-232669377)),self__.data],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__172){
var self__ = this;
var G__172__$1 = this;
return (new cljs.core.RecordIter((0),G__172__$1,(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((5) + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((1809113693) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this174,other175){
var self__ = this;
var this174__$1 = this;
return (((!((other175 == null)))) && ((this174__$1.constructor === other175.constructor)) && (cljs.core._EQ_.call(null,this174__$1.type_tag,other175.type_tag)) && (cljs.core._EQ_.call(null,this174__$1.data,other175.data)) && (cljs.core._EQ_.call(null,this174__$1.trailing_white_space,other175.trailing_white_space)) && (cljs.core._EQ_.call(null,this174__$1.start_pos,other175.start_pos)) && (cljs.core._EQ_.call(null,this174__$1.end_pos,other175.end_pos)) && (cljs.core._EQ_.call(null,this174__$1.__extmap,other175.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"data","data",(-232669377)),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__172){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__182 = cljs.core.keyword_identical_QMARK_;
var expr__183 = k__9805__auto__;
if(cljs.core.truth_(pred__182.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),expr__183))){
return (new cljs.pprint.buffer_blob(G__172,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__182.call(null,new cljs.core.Keyword(null,"data","data",(-232669377)),expr__183))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__172,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__182.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),expr__183))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__172,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__182.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),expr__183))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__172,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__182.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),expr__183))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__172,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__172),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",(-232669377)),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__172){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__172,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",(-1158428773),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__176){
var extmap__9825__auto__ = (function (){var G__185 = cljs.core.dissoc.call(null,G__176,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)));
if(cljs.core.record_QMARK_.call(null,G__176)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__185);
} else {
return G__185;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__176),new cljs.core.Keyword(null,"data","data",(-232669377)).cljs$core$IFn$_invoke$arity$1(G__176),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(G__176),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__176),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__176),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",(-1830112173)),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__105__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__105__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",(-1830112173)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k188,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__192 = k188;
var G__192__$1 = (((G__192 instanceof cljs.core.Keyword))?G__192.fqn:null);
switch (G__192__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k188,else__9800__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__193){
var vec__194 = p__193;
var k__9820__auto__ = cljs.core.nth.call(null,vec__194,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__194,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.pprint.nl-t{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",(1174270348)),self__.type],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__187){
var self__ = this;
var G__187__$1 = this;
return (new cljs.core.RecordIter((0),G__187__$1,(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((5) + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-1640656800) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this189,other190){
var self__ = this;
var this189__$1 = this;
return (((!((other190 == null)))) && ((this189__$1.constructor === other190.constructor)) && (cljs.core._EQ_.call(null,this189__$1.type_tag,other190.type_tag)) && (cljs.core._EQ_.call(null,this189__$1.type,other190.type)) && (cljs.core._EQ_.call(null,this189__$1.logical_block,other190.logical_block)) && (cljs.core._EQ_.call(null,this189__$1.start_pos,other190.start_pos)) && (cljs.core._EQ_.call(null,this189__$1.end_pos,other190.end_pos)) && (cljs.core._EQ_.call(null,this189__$1.__extmap,other190.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"type","type",(1174270348)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__187){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__197 = cljs.core.keyword_identical_QMARK_;
var expr__198 = k__9805__auto__;
if(cljs.core.truth_(pred__197.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),expr__198))){
return (new cljs.pprint.nl_t(G__187,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__197.call(null,new cljs.core.Keyword(null,"type","type",(1174270348)),expr__198))){
return (new cljs.pprint.nl_t(self__.type_tag,G__187,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__197.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),expr__198))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__187,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__197.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),expr__198))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__187,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__197.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),expr__198))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__187,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__187),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",(1174270348)),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__187){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__187,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__191){
var extmap__9825__auto__ = (function (){var G__200 = cljs.core.dissoc.call(null,G__191,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)));
if(cljs.core.record_QMARK_.call(null,G__191)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__200);
} else {
return G__200;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__191),new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(G__191),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__191),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__191),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__191),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__105__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__105__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k203,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__207 = k203;
var G__207__$1 = (((G__207 instanceof cljs.core.Keyword))?G__207.fqn:null);
switch (G__207__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k203,else__9800__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__208){
var vec__209 = p__208;
var k__9820__auto__ = cljs.core.nth.call(null,vec__209,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__209,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__202){
var self__ = this;
var G__202__$1 = this;
return (new cljs.core.RecordIter((0),G__202__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((4) + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-414877272) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this204,other205){
var self__ = this;
var this204__$1 = this;
return (((!((other205 == null)))) && ((this204__$1.constructor === other205.constructor)) && (cljs.core._EQ_.call(null,this204__$1.type_tag,other205.type_tag)) && (cljs.core._EQ_.call(null,this204__$1.logical_block,other205.logical_block)) && (cljs.core._EQ_.call(null,this204__$1.start_pos,other205.start_pos)) && (cljs.core._EQ_.call(null,this204__$1.end_pos,other205.end_pos)) && (cljs.core._EQ_.call(null,this204__$1.__extmap,other205.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__202){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__212 = cljs.core.keyword_identical_QMARK_;
var expr__213 = k__9805__auto__;
if(cljs.core.truth_(pred__212.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),expr__213))){
return (new cljs.pprint.start_block_t(G__202,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__212.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),expr__213))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__202,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__212.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),expr__213))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__202,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__212.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),expr__213))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__202,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__202),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__202){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__202,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__206){
var extmap__9825__auto__ = (function (){var G__215 = cljs.core.dissoc.call(null,G__206,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)));
if(cljs.core.record_QMARK_.call(null,G__206)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__215);
} else {
return G__215;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__206),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__206),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__206),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__206),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",(-373430594)),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__105__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__105__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",(-373430594)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k218,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__222 = k218;
var G__222__$1 = (((G__222 instanceof cljs.core.Keyword))?G__222.fqn:null);
switch (G__222__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k218,else__9800__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__223){
var vec__224 = p__223;
var k__9820__auto__ = cljs.core.nth.call(null,vec__224,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__224,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__217){
var self__ = this;
var G__217__$1 = this;
return (new cljs.core.RecordIter((0),G__217__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((4) + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((1365867980) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this219,other220){
var self__ = this;
var this219__$1 = this;
return (((!((other220 == null)))) && ((this219__$1.constructor === other220.constructor)) && (cljs.core._EQ_.call(null,this219__$1.type_tag,other220.type_tag)) && (cljs.core._EQ_.call(null,this219__$1.logical_block,other220.logical_block)) && (cljs.core._EQ_.call(null,this219__$1.start_pos,other220.start_pos)) && (cljs.core._EQ_.call(null,this219__$1.end_pos,other220.end_pos)) && (cljs.core._EQ_.call(null,this219__$1.__extmap,other220.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__217){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__227 = cljs.core.keyword_identical_QMARK_;
var expr__228 = k__9805__auto__;
if(cljs.core.truth_(pred__227.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),expr__228))){
return (new cljs.pprint.end_block_t(G__217,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__227.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),expr__228))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__217,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__227.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),expr__228))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__217,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__227.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),expr__228))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__217,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__217),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__217){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__217,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__221){
var extmap__9825__auto__ = (function (){var G__230 = cljs.core.dissoc.call(null,G__221,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)));
if(cljs.core.record_QMARK_.call(null,G__221)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__230);
} else {
return G__230;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__221),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__221),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__221),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__221),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",(1544648735)),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__105__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__105__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",(1544648735)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k233,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__237 = k233;
var G__237__$1 = (((G__237 instanceof cljs.core.Keyword))?G__237.fqn:null);
switch (G__237__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k233,else__9800__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__238){
var vec__239 = p__238;
var k__9820__auto__ = cljs.core.nth.call(null,vec__239,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__239,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.pprint.indent-t{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),self__.relative_to],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__232){
var self__ = this;
var G__232__$1 = this;
return (new cljs.core.RecordIter((0),G__232__$1,(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((6) + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-1602780238) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this234,other235){
var self__ = this;
var this234__$1 = this;
return (((!((other235 == null)))) && ((this234__$1.constructor === other235.constructor)) && (cljs.core._EQ_.call(null,this234__$1.type_tag,other235.type_tag)) && (cljs.core._EQ_.call(null,this234__$1.logical_block,other235.logical_block)) && (cljs.core._EQ_.call(null,this234__$1.relative_to,other235.relative_to)) && (cljs.core._EQ_.call(null,this234__$1.offset,other235.offset)) && (cljs.core._EQ_.call(null,this234__$1.start_pos,other235.start_pos)) && (cljs.core._EQ_.call(null,this234__$1.end_pos,other235.end_pos)) && (cljs.core._EQ_.call(null,this234__$1.__extmap,other235.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),null,new cljs.core.Keyword(null,"offset","offset",(296498311)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__232){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__242 = cljs.core.keyword_identical_QMARK_;
var expr__243 = k__9805__auto__;
if(cljs.core.truth_(pred__242.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),expr__243))){
return (new cljs.pprint.indent_t(G__232,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__242.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),expr__243))){
return (new cljs.pprint.indent_t(self__.type_tag,G__232,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__242.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),expr__243))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__232,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__242.call(null,new cljs.core.Keyword(null,"offset","offset",(296498311)),expr__243))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__232,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__242.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),expr__243))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__232,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__242.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),expr__243))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__232,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__232),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__232){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__232,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"relative-to","relative-to",(1170431476),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__236){
var extmap__9825__auto__ = (function (){var G__245 = cljs.core.dissoc.call(null,G__236,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)));
if(cljs.core.record_QMARK_.call(null,G__236)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__245);
} else {
return G__245;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__236),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__236),new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)).cljs$core$IFn$_invoke$arity$1(G__236),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(G__236),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__236),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__236),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",(528318969)),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__105__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__105__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",(528318969)));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__10166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10168__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10169__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10170__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__,hierarchy__10170__auto__){
return (function (p1__3_SHARP_,p2__2_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(p2__2_SHARP_);
});})(method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__,hierarchy__10170__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__10170__auto__,method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",(-373430594)),(function (this$,token){
var temp__9015__auto___247 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__9015__auto___247)){
var cb_248 = temp__9015__auto___247;
cb_248.call(null,new cljs.core.Keyword(null,"start","start",(-355208981)));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token);
var temp__9015__auto___249 = new cljs.core.Keyword(null,"prefix","prefix",(-265908465)).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__9015__auto___249)){
var prefix_250 = temp__9015__auto___249;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_250);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",(1544648735)),(function (this$,token){
var temp__9015__auto___251 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__9015__auto___251)){
var cb_252 = temp__9015__auto___251;
cb_252.call(null,new cljs.core.Keyword(null,"end","end",(-268185958)));
} else {
}

var temp__9015__auto__ = new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__9015__auto__)){
var suffix = temp__9015__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",(528318969)),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__253 = cljs.core._EQ_;
var expr__254 = new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__253.call(null,new cljs.core.Keyword(null,"block","block",(664686210)),expr__254))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__253.call(null,new cljs.core.Keyword(null,"current","current",(-1088038603)),expr__254))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__254)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",(-1830112173)),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",(-232669377)).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)),(function (this$,token){
if(cljs.core.truth_((function (){var or__9218__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)));
if(or__9218__auto__){
return or__9218__auto__;
} else {
var and__9199__auto__ = (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",(883462889)))));
if(and__9199__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__9199__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__8960__auto___256 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__8960__auto___256)){
var tws_257 = temp__8960__auto___256;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_257);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__258 = cljs.core.seq.call(null,tokens);
var chunk__259 = null;
var count__260 = (0);
var i__261 = (0);
while(true){
if((i__261 < count__260)){
var token = cljs.core._nth.call(null,chunk__259,i__261);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)))))){
var temp__8960__auto___262 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__8960__auto___262)){
var tws_263 = temp__8960__auto___262;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_263);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(token));

var tws_264 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__9199__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__9199__auto__)){
return tws_264;
} else {
return and__9199__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_264);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
} else {
}


var G__265 = seq__258;
var G__266 = chunk__259;
var G__267 = count__260;
var G__268 = (i__261 + (1));
seq__258 = G__265;
chunk__259 = G__266;
count__260 = G__267;
i__261 = G__268;
continue;
} else {
var temp__9015__auto__ = cljs.core.seq.call(null,seq__258);
if(temp__9015__auto__){
var seq__258__$1 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__258__$1)){
var c__10028__auto__ = cljs.core.chunk_first.call(null,seq__258__$1);
var G__269 = cljs.core.chunk_rest.call(null,seq__258__$1);
var G__270 = c__10028__auto__;
var G__271 = cljs.core.count.call(null,c__10028__auto__);
var G__272 = (0);
seq__258 = G__269;
chunk__259 = G__270;
count__260 = G__271;
i__261 = G__272;
continue;
} else {
var token = cljs.core.first.call(null,seq__258__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)))))){
var temp__8960__auto___273 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__8960__auto___273)){
var tws_274 = temp__8960__auto___273;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_274);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(token));

var tws_275 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__9199__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__9199__auto__)){
return tws_275;
} else {
return and__9199__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_275);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
} else {
}


var G__276 = cljs.core.next.call(null,seq__258__$1);
var G__277 = null;
var G__278 = (0);
var G__279 = (0);
seq__258 = G__276;
chunk__259 = G__277;
count__260 = G__278;
i__261 = G__279;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__9218__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__9199__auto__ = miser_width;
if(cljs.core.truth_(and__9199__auto__)){
var and__9199__auto____$1 = maxcol;
if(cljs.core.truth_(and__9199__auto____$1)){
var and__9199__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__9199__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__9199__auto____$2;
}
} else {
return and__9199__auto____$1;
}
} else {
return and__9199__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__10166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10168__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10169__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10170__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__,hierarchy__10170__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__,hierarchy__10170__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__10170__auto__,method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",(872268697)),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",(-556060186)),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",(883462889)),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(newl);
var or__9218__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
var or__9218__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection)));
if(or__9218__auto____$1){
return or__9218__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__4_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__4_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(p1__4_SHARP_),lb)))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__5_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(p1__5_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__5_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__280 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__280;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_281 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_281);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__6_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__6_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__282 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__282,(0),null);
var b = cljs.core.nth.call(null,vec__282,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__285 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__285,(0),null);
var remainder = cljs.core.nth.call(null,vec__285,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if((!((buffer === new_buffer)))){
var G__288 = new_buffer;
buffer = G__288;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__8960__auto__ = new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__8960__auto__)){
var buf = temp__8960__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__9015__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__9015__auto__)){
var tws = temp__9015__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",(-876713613)),new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_293 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_294 = (oldpos_293 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos_294);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_293,newpos_294));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__289_295 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__290_296 = null;
var count__291_297 = (0);
var i__292_298 = (0);
while(true){
if((i__292_298 < count__291_297)){
var l_299__$1 = cljs.core._nth.call(null,chunk__290_296,i__292_298);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_299__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__300 = seq__289_295;
var G__301 = chunk__290_296;
var G__302 = count__291_297;
var G__303 = (i__292_298 + (1));
seq__289_295 = G__300;
chunk__290_296 = G__301;
count__291_297 = G__302;
i__292_298 = G__303;
continue;
} else {
var temp__9015__auto___304 = cljs.core.seq.call(null,seq__289_295);
if(temp__9015__auto___304){
var seq__289_305__$1 = temp__9015__auto___304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289_305__$1)){
var c__10028__auto___306 = cljs.core.chunk_first.call(null,seq__289_305__$1);
var G__307 = cljs.core.chunk_rest.call(null,seq__289_305__$1);
var G__308 = c__10028__auto___306;
var G__309 = cljs.core.count.call(null,c__10028__auto___306);
var G__310 = (0);
seq__289_295 = G__307;
chunk__290_296 = G__308;
count__291_297 = G__309;
i__292_298 = G__310;
continue;
} else {
var l_311__$1 = cljs.core.first.call(null,seq__289_305__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_311__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__312 = cljs.core.next.call(null,seq__289_305__$1);
var G__313 = null;
var G__314 = (0);
var G__315 = (0);
seq__289_295 = G__312;
chunk__290_296 = G__313;
count__291_297 = G__314;
i__292_298 = G__315;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",(-876713613)),new cljs.core.Keyword(null,"writing","writing",(-1486865108)));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)),new cljs.core.Keyword(null,"miser-width","miser-width",(-1310049437)),new cljs.core.Keyword(null,"buffer-block","buffer-block",(-10937307)),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",(-1222834267)),new cljs.core.Keyword(null,"sections","sections",(-886710106)),new cljs.core.Keyword(null,"mode","mode",(654403691)),new cljs.core.Keyword(null,"pos","pos",(-864607220)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"base","base",(185279322)),new cljs.core.Keyword(null,"buffer-level","buffer-level",(928864731)),new cljs.core.Keyword(null,"buffer","buffer",(617295198))],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",(-1486865108)),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWriter}
 * @implements {cljs.pprint.IPrettyFlush}
*/
cljs.pprint.t_cljs$pprint316 = (function (writer,max_columns,miser_width,lb,fields,meta317){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta317 = meta317;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_318,meta317__$1){
var self__ = this;
var _318__$1 = this;
return (new cljs.pprint.t_cljs$pprint316(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta317__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_318){
var self__ = this;
var _318__$1 = this;
return self__.meta317;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint316.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint316.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__319 = cljs.core._EQ_;
var expr__320 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__319.call(null,String,expr__320))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__319.call(null,Number,expr__320))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__320)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint316.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint316.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint316.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",(-876713613)))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint316.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null),new cljs.core.Symbol(null,"miser-width","miser-width",(330482090),null),new cljs.core.Symbol(null,"lb","lb",(950310490),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null),new cljs.core.Symbol(null,"meta317","meta317",(1715192967),null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint316.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint316.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint316";

cljs.pprint.t_cljs$pprint316.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.pprint/t_cljs$pprint316");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint316.
 */
cljs.pprint.__GT_t_cljs$pprint316 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint316(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta317){
return (new cljs.pprint.t_cljs$pprint316(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta317));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint316(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space.call(null,this$);

var temp__9015__auto___322 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__9015__auto___322)){
var cb_323 = temp__9015__auto___322;
cb_323.call(null,new cljs.core.Keyword(null,"start","start",(-355208981)));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__9015__auto___324 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__9015__auto___324)){
var cb_325 = temp__9015__auto___324;
cb_325.call(null,new cljs.core.Keyword(null,"end","end",(-268185958)));
} else {
}
} else {
var oldpos_326 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_327 = (oldpos_326 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos_327);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_326,newpos_327));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)),new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",(654403691)),new cljs.core.Keyword(null,"buffering","buffering",(-876713613)));

var pos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__328 = cljs.core._EQ_;
var expr__329 = relative_to;
if(cljs.core.truth_(pred__328.call(null,new cljs.core.Keyword(null,"block","block",(664686210)),expr__329))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__328.call(null,new cljs.core.Keyword(null,"current","current",(-1088038603)),expr__329))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__329)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",(-1310049437)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__7_SHARP_){
var temp__9015__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__7_SHARP_));
if(cljs.core.truth_(temp__9015__auto__)){
var v = temp__9015__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__7_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__9199__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__9199__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",(-1222834267)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__9199__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__9199__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__9199__auto__)){
var and__9199__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__9199__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__9199__auto____$1;
}
} else {
return and__9199__auto__;
}
})();
if((!(cljs.pprint._STAR_print_pretty_STAR_))){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__10338__auto__ = [];
var len__10335__auto___363 = arguments.length;
var i__10336__auto___364 = (0);
while(true){
if((i__10336__auto___364 < len__10335__auto___363)){
args__10338__auto__.push((arguments[i__10336__auto___364]));

var G__365 = (i__10336__auto___364 + (1));
i__10336__auto___364 = G__365;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((1) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10339__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",(1534941648)),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR__orig_val__335 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__336 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__337 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__338 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__339 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__340 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__341 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__342 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__343 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__344 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__345 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__346 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__347 = new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__348 = new cljs.core.Keyword(null,"circle","circle",(1903212362)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__349 = new cljs.core.Keyword(null,"length","length",(588987862)).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__350 = new cljs.core.Keyword(null,"level","level",(1290497552)).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__351 = new cljs.core.Keyword(null,"lines","lines",(-700165781)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__352 = new cljs.core.Keyword(null,"miser-width","miser-width",(-1310049437)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__353 = new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__354 = new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__355 = new cljs.core.Keyword(null,"radix","radix",(857016463)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__356 = new cljs.core.Keyword(null,"readably","readably",(1129599760)).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__357 = new cljs.core.Keyword(null,"right-margin","right-margin",(-810413306)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__358 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",(2130686956)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__347;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__348;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__349;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__350;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__351;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__352;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__353;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__354;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__355;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__356;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__357;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__358;

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",(1534941648))))?new cljs.core.Keyword(null,"stream","stream",(1534941648)).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__103__auto___366 = base_writer;
var new_writer__104__auto___367 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__103__auto___366));
var _STAR_out_STAR__orig_val__359_368 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__360_369 = ((new_writer__104__auto___367)?cljs.pprint.make_pretty_writer.call(null,base_writer__103__auto___366,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__103__auto___366);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__360_369;

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__359_368;
}} else {
var _STAR_out_STAR__orig_val__361_370 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__362_371 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__362_371;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__361_370;
}}

if(optval === true){
cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__346;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__345;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__344;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__343;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__342;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__341;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__340;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__339;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__338;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__337;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__336;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__335;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq333){
var G__334 = cljs.core.first.call(null,seq333);
var seq333__$1 = cljs.core.next.call(null,seq333);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__334,seq333__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__373 = arguments.length;
switch (G__373) {
case (1):
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__374 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__375 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__375;

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__374;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__103__auto__ = writer;
var new_writer__104__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__103__auto__));
var _STAR_out_STAR__orig_val__376 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__377 = ((new_writer__104__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__103__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__103__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__377;

try{var _STAR_print_pretty_STAR__orig_val__378_381 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__379_382 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__379_382;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__378_381;
}
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_))))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__376;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = (2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__9199__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__9199__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__9199__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"linear","linear",(872268697)),null,new cljs.core.Keyword(null,"miser","miser",(-556060186)),null,new cljs.core.Keyword(null,"fill","fill",(883462889)),null,new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",(664686210)),null,new cljs.core.Keyword(null,"current","current",(-1088038603)),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",(212345235)),null,new cljs.core.Keyword(null,"section","section",(-300141526)),null,new cljs.core.Keyword(null,"line-relative","line-relative",(1149548219)),null,new cljs.core.Keyword(null,"section-relative","section-relative",(-658298724)),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__10338__auto__ = [];
var len__10335__auto___386 = arguments.length;
var i__10336__auto___387 = (0);
while(true){
if((i__10336__auto___387 < len__10335__auto___386)){
args__10338__auto__.push((arguments[i__10336__auto___387]));

var G__388 = (i__10336__auto___387 + (1));
i__10336__auto___387 = G__388;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((2) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10339__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq383){
var G__384 = cljs.core.first.call(null,seq383);
var seq383__$1 = cljs.core.next.call(null,seq383);
var G__385 = cljs.core.first.call(null,seq383__$1);
var seq383__$2 = cljs.core.next.call(null,seq383__$1);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__384,G__385,seq383__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.pprint._STAR_format_str_STAR_,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k390,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__394 = k390;
var G__394__$1 = (((G__394 instanceof cljs.core.Keyword))?G__394.fqn:null);
switch (G__394__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k390,else__9800__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__395){
var vec__396 = p__395;
var k__9820__auto__ = cljs.core.nth.call(null,vec__396,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__396,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",(-1817803783)),self__.seq],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",(-1241696419)),self__.rest],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",(-864607220)),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__389){
var self__ = this;
var G__389__$1 = this;
return (new cljs.core.RecordIter((0),G__389__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",(-1817803783)),new cljs.core.Keyword(null,"rest","rest",(-1241696419)),new cljs.core.Keyword(null,"pos","pos",(-864607220))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-402038447) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this391,other392){
var self__ = this;
var this391__$1 = this;
return (((!((other392 == null)))) && ((this391__$1.constructor === other392.constructor)) && (cljs.core._EQ_.call(null,this391__$1.seq,other392.seq)) && (cljs.core._EQ_.call(null,this391__$1.rest,other392.rest)) && (cljs.core._EQ_.call(null,this391__$1.pos,other392.pos)) && (cljs.core._EQ_.call(null,this391__$1.__extmap,other392.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"seq","seq",(-1817803783)),null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)),null,new cljs.core.Keyword(null,"pos","pos",(-864607220)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__389){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__399 = cljs.core.keyword_identical_QMARK_;
var expr__400 = k__9805__auto__;
if(cljs.core.truth_(pred__399.call(null,new cljs.core.Keyword(null,"seq","seq",(-1817803783)),expr__400))){
return (new cljs.pprint.arg_navigator(G__389,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__399.call(null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)),expr__400))){
return (new cljs.pprint.arg_navigator(self__.seq,G__389,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__399.call(null,new cljs.core.Keyword(null,"pos","pos",(-864607220)),expr__400))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__389,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__389),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",(-1817803783)),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",(-1241696419)),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",(-864607220)),self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__389){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__389,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",(-177272256),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null),new cljs.core.Symbol(null,"pos","pos",(775924307),null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__393){
var extmap__9825__auto__ = (function (){var G__402 = cljs.core.dissoc.call(null,G__393,new cljs.core.Keyword(null,"seq","seq",(-1817803783)),new cljs.core.Keyword(null,"rest","rest",(-1241696419)),new cljs.core.Keyword(null,"pos","pos",(-864607220)));
if(cljs.core.record_QMARK_.call(null,G__393)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__402);
} else {
return G__402;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(G__393),new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(G__393),new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(G__393),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__404 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__404,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__404,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9797__auto__,k__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
return this__9797__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9798__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9799__auto__,k408,else__9800__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
var G__412 = k408;
var G__412__$1 = (((G__412 instanceof cljs.core.Keyword))?G__412.fqn:null);
switch (G__412__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k408,else__9800__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__9816__auto__,f__9817__auto__,init__9818__auto__){
var self__ = this;
var this__9816__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__9816__auto____$1){
return (function (ret__9819__auto__,p__413){
var vec__414 = p__413;
var k__9820__auto__ = cljs.core.nth.call(null,vec__414,(0),null);
var v__9821__auto__ = cljs.core.nth.call(null,vec__414,(1),null);
return f__9817__auto__.call(null,ret__9819__auto__,k__9820__auto__,v__9821__auto__);
});})(this__9816__auto____$1))
,init__9818__auto__,this__9816__auto____$1);
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9811__auto__,writer__9812__auto__,opts__9813__auto__){
var self__ = this;
var this__9811__auto____$1 = this;
var pr_pair__9814__auto__ = ((function (this__9811__auto____$1){
return (function (keyval__9815__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,cljs.core.pr_writer,""," ","",opts__9813__auto__,keyval__9815__auto__);
});})(this__9811__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9812__auto__,pr_pair__9814__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__9813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",(-238706040)),self__.func],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",(-1043430536)),self__.def],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",(710516235)),self__.params],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__407){
var self__ = this;
var G__407__$1 = this;
return (new cljs.core.RecordIter((0),G__407__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",(-238706040)),new cljs.core.Keyword(null,"def","def",(-1043430536)),new cljs.core.Keyword(null,"params","params",(710516235)),new cljs.core.Keyword(null,"offset","offset",(296498311))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9795__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9792__auto__){
var self__ = this;
var this__9792__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9801__auto__){
var self__ = this;
var this__9801__auto____$1 = this;
return ((4) + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
var h__9592__auto__ = self__.__hash;
if((!((h__9592__auto__ == null)))){
return h__9592__auto__;
} else {
var h__9592__auto____$1 = ((function (h__9592__auto__,this__9793__auto____$1){
return (function (coll__9794__auto__){
return ((-829256337) ^ cljs.core.hash_unordered_coll.call(null,coll__9794__auto__));
});})(h__9592__auto__,this__9793__auto____$1))
.call(null,this__9793__auto____$1);
self__.__hash = h__9592__auto____$1;

return h__9592__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this409,other410){
var self__ = this;
var this409__$1 = this;
return (((!((other410 == null)))) && ((this409__$1.constructor === other410.constructor)) && (cljs.core._EQ_.call(null,this409__$1.func,other410.func)) && (cljs.core._EQ_.call(null,this409__$1.def,other410.def)) && (cljs.core._EQ_.call(null,this409__$1.params,other410.params)) && (cljs.core._EQ_.call(null,this409__$1.offset,other410.offset)) && (cljs.core._EQ_.call(null,this409__$1.__extmap,other410.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9806__auto__,k__9807__auto__){
var self__ = this;
var this__9806__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"func","func",(-238706040)),null,new cljs.core.Keyword(null,"def","def",(-1043430536)),null,new cljs.core.Keyword(null,"params","params",(710516235)),null,new cljs.core.Keyword(null,"offset","offset",(296498311)),null], null), null),k__9807__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9806__auto____$1),self__.__meta),k__9807__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9807__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9804__auto__,k__9805__auto__,G__407){
var self__ = this;
var this__9804__auto____$1 = this;
var pred__417 = cljs.core.keyword_identical_QMARK_;
var expr__418 = k__9805__auto__;
if(cljs.core.truth_(pred__417.call(null,new cljs.core.Keyword(null,"func","func",(-238706040)),expr__418))){
return (new cljs.pprint.compiled_directive(G__407,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__417.call(null,new cljs.core.Keyword(null,"def","def",(-1043430536)),expr__418))){
return (new cljs.pprint.compiled_directive(self__.func,G__407,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__417.call(null,new cljs.core.Keyword(null,"params","params",(710516235)),expr__418))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__407,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__417.call(null,new cljs.core.Keyword(null,"offset","offset",(296498311)),expr__418))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__407,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9805__auto__,G__407),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9809__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",(-238706040)),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",(-1043430536)),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",(710516235)),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9796__auto__,G__407){
var self__ = this;
var this__9796__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__407,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9802__auto__,entry__9803__auto__){
var self__ = this;
var this__9802__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9803__auto__)){
return this__9802__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9803__auto__,(0)),cljs.core._nth.call(null,entry__9803__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9802__auto____$1,entry__9803__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",(1401825487),null),new cljs.core.Symbol(null,"def","def",(597100991),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__9826__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__9826__auto__,writer__9827__auto__){
return cljs.core._write.call(null,writer__9827__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__411){
var extmap__9825__auto__ = (function (){var G__420 = cljs.core.dissoc.call(null,G__411,new cljs.core.Keyword(null,"func","func",(-238706040)),new cljs.core.Keyword(null,"def","def",(-1043430536)),new cljs.core.Keyword(null,"params","params",(710516235)),new cljs.core.Keyword(null,"offset","offset",(296498311)));
if(cljs.core.record_QMARK_.call(null,G__411)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__420);
} else {
return G__420;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(G__411),new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(G__411),new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(G__411),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(G__411),null,cljs.core.not_empty.call(null,extmap__9825__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__422,navigator){
var vec__423 = p__422;
var param = cljs.core.nth.call(null,vec__423,(0),null);
var vec__426 = cljs.core.nth.call(null,vec__423,(1),null);
var raw_val = cljs.core.nth.call(null,vec__426,(0),null);
var offset = cljs.core.nth.call(null,vec__426,(1),null);
var vec__429 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",(-758446196))))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",(-1216589335))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__429,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__429,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__432 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__432,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__432,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__9218__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__435 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__435,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__435,(1),null);
var base_output = (function (){var or__9218__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",(323570901)).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__8_SHARP_){
if((p1__8_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__8_SHARP_,base),cljs.core.quot.call(null,p1__8_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__9_SHARP_){
if((p1__9_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__9_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__9_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__438 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__438,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__438,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_441 = (arg < (0));
var pos_arg_442 = ((neg_441)?(- arg):arg);
var raw_str_443 = cljs.pprint.opt_base_str.call(null,base,pos_arg_442);
var group_str_444 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_441,pos_arg_442,raw_str_443,vec__438,arg,arg_navigator__$1){
return (function (p1__10_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__10_SHARP_);
});})(neg_441,pos_arg_442,raw_str_443,vec__438,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)).cljs$core$IFn$_invoke$arity$1(params),raw_str_443));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",(652859327)).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_443);
var signed_str_445 = ((neg_441)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_444)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_444)].join(''):group_str_444
));
var padded_str_446 = (((signed_str_445.length < new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params) - signed_str_445.length),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_445)].join(''):signed_str_445);
cljs.pprint.print.call(null,padded_str_446);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),(1),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",(1476951349)),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && ((!(cljs.core.empty_QMARK_.call(null,acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__447 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__448 = (pos - (1));
var G__449 = cljs.core.first.call(null,remainder);
var G__450 = cljs.core.next.call(null,remainder);
acc = G__447;
pos = G__448;
this$ = G__449;
remainder = G__450;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__451 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__451,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__451,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_454 = (((arg < (0)))?(- arg):arg);
var parts_455 = cljs.pprint.remainders.call(null,(1000),abs_arg_454);
if((cljs.core.count.call(null,parts_455) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_456 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_455);
var full_str_457 = cljs.pprint.add_english_scales.call(null,parts_strs_456,(0));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),full_str_457].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530))," ",new cljs.core.Keyword(null,"commachar","commachar",(652859327)),",",new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(3),new cljs.core.Keyword(null,"colon","colon",(-965200945)),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),(0),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),(0),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__458 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__458,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__458,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_461 = (((arg < (0)))?(- arg):arg);
var parts_462 = cljs.pprint.remainders.call(null,(1000),abs_arg_461);
if((cljs.core.count.call(null,parts_462) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_463 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_462));
var head_str_464 = cljs.pprint.add_english_scales.call(null,parts_strs_463,(1));
var tail_str_465 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_462));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_.call(null,head_str_464)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_465))))))?[head_str_464,", ",tail_str_465].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_464))))?[head_str_464,"th"].join(''):tail_str_465
))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530))," ",new cljs.core.Keyword(null,"commachar","commachar",(652859327)),",",new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(3),new cljs.core.Keyword(null,"colon","colon",(-965200945)),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),(0),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),(0),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(0)], null));

var low_two_digits_466 = cljs.core.rem.call(null,arg,(100));
var not_teens_467 = ((((11) < low_two_digits_466)) || (((19) > low_two_digits_466)));
var low_digit_468 = cljs.core.rem.call(null,low_two_digits_466,(10));
cljs.pprint.print.call(null,(((((low_digit_468 === (1))) && (not_teens_467)))?"st":(((((low_digit_468 === (2))) && (not_teens_467)))?"nd":(((((low_digit_468 === (3))) && (not_teens_467)))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__469 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__469,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__469,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_472 = cljs.pprint.remainders.call(null,(10),arg);
var acc_473 = cljs.core.PersistentVector.EMPTY;
var pos_474 = (cljs.core.count.call(null,digits_472) - (1));
var digits_475__$1 = digits_472;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_475__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_473));
} else {
var digit_476 = cljs.core.first.call(null,digits_475__$1);
var G__477 = ((cljs.core._EQ_.call(null,(0),digit_476))?acc_473:cljs.core.conj.call(null,acc_473,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_474),(digit_476 - (1)))));
var G__478 = (pos_474 - (1));
var G__479 = cljs.core.next.call(null,digits_475__$1);
acc_473 = G__477;
pos_474 = G__478;
digits_475__$1 = G__479;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530))," ",new cljs.core.Keyword(null,"commachar","commachar",(652859327)),",",new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(3),new cljs.core.Keyword(null,"colon","colon",(-965200945)),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),(0),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),(0),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__480 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__480,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__480,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__483 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__483,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__483,(1),null);
var pred__486_489 = cljs.core._EQ_;
var expr__487_490 = new cljs.core.Keyword(null,"char-format","char-format",(-1016499218)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__486_489.call(null,"o",expr__487_490))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__486_489.call(null,"u",expr__487_490))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__486_489.call(null,null,expr__487_490))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__487_490)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__491 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__491,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__491,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__494 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__494,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__494,(1),null);
var vec__497 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__497,(0),null);
var offsets = cljs.core.nth.call(null,vec__497,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__500 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__500,(0),null);
var e = cljs.core.nth.call(null,vec__500,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = (((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+"))))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__503 = (i - (1));
i = G__503;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__9218__auto__ = d;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__9491__auto__ = (2);
var y__9492__auto__ = w;
return ((x__9491__auto__ > y__9492__auto__) ? x__9491__auto__ : y__9492__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__9491__auto__ = (e + (1));
var y__9492__auto__ = (w__$1 - (1));
return ((x__9491__auto__ > y__9492__auto__) ? x__9491__auto__ : y__9492__auto__);
})():(w__$1 + e)
));
var vec__504 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__504,(0),null);
var e1 = cljs.core.nth.call(null,vec__504,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__504,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__504,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__507 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__507,(0),null);
var e1 = cljs.core.nth.call(null,vec__507,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var vec__510 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__510,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__510,(1),null);
var vec__513 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__513,(0),null);
var abs = cljs.core.nth.call(null,vec__513,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__516 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__516,(0),null);
var exp = cljs.core.nth.call(null,vec__516,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",(-2146297393)).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__9218__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
var vec__519 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__519,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__519,(1),null);
var expanded = cljs.core.nth.call(null,vec__519,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__9199__auto__ = w;
if(cljs.core.truth_(and__9199__auto__)){
var and__9199__auto____$1 = d;
if(cljs.core.truth_(and__9199__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__9199__auto____$1;
}
} else {
return and__9199__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_522 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_523 = (cljs.core.truth_(add_sign)?(len_522 + (1)):len_522);
var prepend_zero_524__$1 = ((prepend_zero) && ((!((signed_len_523 >= w)))));
var append_zero_525__$1 = ((append_zero) && ((!((signed_len_523 >= w)))));
var full_len_526 = ((((prepend_zero_524__$1) || (append_zero_525__$1)))?(signed_len_523 + (1)):signed_len_523);
if(cljs.core.truth_((function (){var and__9199__auto__ = (full_len_526 > w);
if(and__9199__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__9199__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_526),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_524__$1)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero_525__$1)?"0":null)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero)?"0":null)].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__527 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__527,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__527,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__533_543 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__534_544 = G__533_543;
var mantissa_545 = cljs.core.nth.call(null,vec__534_544,(0),null);
var exp_546 = cljs.core.nth.call(null,vec__534_544,(1),null);
var G__533_547__$1 = G__533_543;
while(true){
var vec__537_548 = G__533_547__$1;
var mantissa_549__$1 = cljs.core.nth.call(null,vec__537_548,(0),null);
var exp_550__$1 = cljs.core.nth.call(null,vec__537_548,(1),null);
var w_551 = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var d_552 = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var e_553 = new cljs.core.Keyword(null,"e","e",(1381269198)).cljs$core$IFn$_invoke$arity$1(params);
var k_554 = new cljs.core.Keyword(null,"k","k",(-2146297393)).cljs$core$IFn$_invoke$arity$1(params);
var expchar_555 = (function (){var or__9218__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",(1986664222)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return "E";
}
})();
var add_sign_556 = (function (){var or__9218__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_557 = (k_554 <= (0));
var scaled_exp_558 = (exp_550__$1 - (k_554 - (1)));
var scaled_exp_str_559 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_558));
var scaled_exp_str_560__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_555),(((scaled_exp_558 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_553)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_553 - cljs.core.count.call(null,scaled_exp_str_559)),"0")):null)),scaled_exp_str_559].join('');
var exp_width_561 = cljs.core.count.call(null,scaled_exp_str_560__$1);
var base_mantissa_width_562 = cljs.core.count.call(null,mantissa_549__$1);
var scaled_mantissa_563 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_554),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_549__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_552)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_552 - (base_mantissa_width_562 - (1))) - (((k_554 < (0)))?(- k_554):(0))),"0")):null))].join('');
var w_mantissa_564 = (cljs.core.truth_(w_551)?(w_551 - exp_width_561):null);
var vec__540_565 = cljs.pprint.round_str.call(null,scaled_mantissa_563,(0),((cljs.core._EQ_.call(null,k_554,(0)))?(d_552 - (1)):(((k_554 > (0)))?d_552:(((k_554 < (0)))?(d_552 - (1)):null))),(cljs.core.truth_(w_mantissa_564)?(w_mantissa_564 - (cljs.core.truth_(add_sign_556)?(1):(0))):null));
var rounded_mantissa_566 = cljs.core.nth.call(null,vec__540_565,(0),null);
var __567 = cljs.core.nth.call(null,vec__540_565,(1),null);
var incr_exp_568 = cljs.core.nth.call(null,vec__540_565,(2),null);
var full_mantissa_569 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_566,k_554);
var append_zero_570 = ((cljs.core._EQ_.call(null,k_554,cljs.core.count.call(null,rounded_mantissa_566))) && ((d_552 == null)));
if(cljs.core.not.call(null,incr_exp_568)){
if(cljs.core.truth_(w_551)){
var len_571 = (cljs.core.count.call(null,full_mantissa_569) + exp_width_561);
var signed_len_572 = (cljs.core.truth_(add_sign_556)?(len_571 + (1)):len_571);
var prepend_zero_573__$1 = ((prepend_zero_557) && ((!(cljs.core._EQ_.call(null,signed_len_572,w_551)))));
var full_len_574 = ((prepend_zero_573__$1)?(signed_len_572 + (1)):signed_len_572);
var append_zero_575__$1 = ((append_zero_570) && ((full_len_574 < w_551)));
if(cljs.core.truth_((function (){var and__9199__auto__ = (function (){var or__9218__auto__ = (full_len_574 > w_551);
if(or__9218__auto__){
return or__9218__auto__;
} else {
var and__9199__auto__ = e_553;
if(cljs.core.truth_(and__9199__auto__)){
return ((exp_width_561 - (2)) > e_553);
} else {
return and__9199__auto__;
}
}
})();
if(cljs.core.truth_(and__9199__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__9199__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_551,new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_551 - full_len_574) - ((append_zero_575__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_556)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_573__$1)?"0":null),full_mantissa_569,((append_zero_575__$1)?"0":null),scaled_exp_str_560__$1].join(''));
}
} else {
cljs.pprint.print.call(null,[(cljs.core.truth_(add_sign_556)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_557)?"0":null),full_mantissa_569,((append_zero_570)?"0":null),scaled_exp_str_560__$1].join(''));
}
} else {
var G__576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_566,(exp_550__$1 + (1))], null);
G__533_547__$1 = G__576;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__577 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__577,(0),null);
var _ = cljs.core.nth.call(null,vec__577,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__580 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__580,(0),null);
var exp = cljs.core.nth.call(null,vec__580,(1),null);
var w = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",(1381269198)).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,(0)))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__9491__auto__ = cljs.core.count.call(null,mantissa);
var y__9492__auto__ = (function (){var x__9505__auto__ = n;
var y__9506__auto__ = (7);
return ((x__9505__auto__ < y__9506__auto__) ? x__9505__auto__ : y__9506__auto__);
})();
return ((x__9491__auto__ > y__9492__auto__) ? x__9491__auto__ : y__9492__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",(354169001)),ww,new cljs.core.Keyword(null,"d","d",(1972142424)),dd,new cljs.core.Keyword(null,"k","k",(-2146297393)),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",(1476951349)),new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__583 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__583,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__583,(1),null);
var vec__586 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__586,(0),null);
var exp = cljs.core.nth.call(null,vec__586,(1),null);
var d = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__9218__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return (arg < (0));
}
})();
var vec__589 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__589,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__589,(1),null);
var expanded = cljs.core.nth.call(null,vec__589,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[(cljs.core.truth_((function (){var and__9199__auto__ = new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__9199__auto__)){
return add_sign;
} else {
return and__9199__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_((function (){var and__9199__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params));
if(and__9199__auto__){
return add_sign;
} else {
return and__9199__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),full_repr].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",(762528866)).cljs$core$IFn$_invoke$arity$1(params);
var vec__592 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__592,(0),null);
var navigator = cljs.core.nth.call(null,vec__592,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__595 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__595,(0),null);
var navigator = cljs.core.nth.call(null,vec__595,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__598 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__598,(0),null);
var navigator = cljs.core.nth.call(null,vec__598,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__601 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__601,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__601,(1),null);
var vec__604 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__604,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__604,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__9218__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__9218__auto__){
return or__9218__auto__;
} else {
var and__9199__auto__ = max_count;
if(cljs.core.truth_(and__9199__auto__)){
return (count >= max_count);
} else {
return and__9199__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__607 = (count + (1));
var G__608 = iter_result;
var G__609 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__607;
args__$1 = G__608;
last_pos = G__609;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__610 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__610,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__610,(1),null);
var vec__613 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__613,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__613,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__9218__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__9218__auto__){
return or__9218__auto__;
} else {
var and__9199__auto__ = max_count;
if(cljs.core.truth_(and__9199__auto__)){
return (count >= max_count);
} else {
return and__9199__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__616 = (count + (1));
var G__617 = cljs.core.next.call(null,arg_list__$1);
count = G__616;
arg_list__$1 = G__617;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__618 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__618,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__618,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__9218__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__9218__auto__){
return or__9218__auto__;
} else {
var and__9199__auto__ = max_count;
if(cljs.core.truth_(and__9199__auto__)){
return (count >= max_count);
} else {
return and__9199__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__621 = (count + (1));
var G__622 = iter_result;
var G__623 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__621;
navigator__$2 = G__622;
last_pos = G__623;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__624 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__624,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__624,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__9218__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__9218__auto__){
return or__9218__auto__;
} else {
var and__9199__auto__ = max_count;
if(cljs.core.truth_(and__9199__auto__)){
return (count >= max_count);
} else {
return and__9199__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__630 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__630,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__630,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__633 = (count + (1));
var G__634 = navigator__$3;
count = G__633;
navigator__$2 = G__634;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__640 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__643 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__644 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__644;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__643;
}})();
var iter_result = cljs.core.nth.call(null,vec__640,(0),null);
var result_str = cljs.core.nth.call(null,vec__640,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__645 = cljs.core.next.call(null,clauses__$1);
var G__646 = cljs.core.conj.call(null,acc,result_str);
var G__647 = iter_result;
clauses__$1 = G__645;
acc = G__646;
navigator__$1 = G__647;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__648 = (function (){var temp__9015__auto__ = new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__9015__auto__)){
var else$ = temp__9015__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__651 = cljs.core.nth.call(null,vec__648,(0),null);
var eol_str = cljs.core.nth.call(null,vec__651,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__648,(1),null);
var navigator__$1 = (function (){var or__9218__auto__ = new_navigator;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return navigator;
}
})();
var vec__654 = (function (){var temp__9015__auto__ = new cljs.core.Keyword(null,"else-params","else-params",(-832171646)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__9015__auto__)){
var p = temp__9015__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__654,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__654,(1),null);
var navigator__$2 = (function (){var or__9218__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__9218__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",(962687677)).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__9218__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",(1742323262)).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var vec__657 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__657,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__657,(1),null);
var slots = (function (){var x__9491__auto__ = (1);
var y__9492__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__9491__auto__ > y__9492__auto__) ? x__9491__auto__ : y__9492__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",(323570901)).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__9491__auto__ = minpad;
var y__9492__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__9491__auto__ > y__9492__auto__) ? x__9491__auto__ : y__9492__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__9199__auto__ = eol_str;
if(cljs.core.truth_(and__9199__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__9199__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_660__$1 = slots;
var extra_pad_661__$1 = extra_pad;
var strs_662__$1 = strs;
var pad_only_663 = (function (){var or__9218__auto__ = new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_662__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_662__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_663))?cljs.core.first.call(null,strs_662__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__9218__auto__ = pad_only_663;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
var or__9218__auto____$1 = cljs.core.next.call(null,strs_662__$1);
if(or__9218__auto____$1){
return or__9218__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_661__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__664 = (slots_660__$1 - (1));
var G__665 = (extra_pad_661__$1 - (1));
var G__666 = (cljs.core.truth_(pad_only_663)?strs_662__$1:cljs.core.next.call(null,strs_662__$1));
var G__667 = false;
slots_660__$1 = G__664;
extra_pad_661__$1 = G__665;
strs_662__$1 = G__666;
pad_only_663 = G__667;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint668 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint668 = (function (writer,meta669){
this.writer = writer;
this.meta669 = meta669;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_670,meta669__$1){
var self__ = this;
var _670__$1 = this;
return (new cljs.pprint.t_cljs$pprint668(self__.writer,meta669__$1));
});

cljs.pprint.t_cljs$pprint668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_670){
var self__ = this;
var _670__$1 = this;
return self__.meta669;
});

cljs.pprint.t_cljs$pprint668.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint668.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__671 = cljs.core._EQ_;
var expr__672 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__671.call(null,String,expr__672))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__671.call(null,Number,expr__672))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__672)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"meta669","meta669",(1313915940),null)], null);
});

cljs.pprint.t_cljs$pprint668.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint668.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint668";

cljs.pprint.t_cljs$pprint668.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.pprint/t_cljs$pprint668");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint668.
 */
cljs.pprint.__GT_t_cljs$pprint668 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint668(writer__$1,meta669){
return (new cljs.pprint.t_cljs$pprint668(writer__$1,meta669));
});

}

return (new cljs.pprint.t_cljs$pprint668(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint674 = (function (writer,meta675){
this.writer = writer;
this.meta675 = meta675;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_676,meta675__$1){
var self__ = this;
var _676__$1 = this;
return (new cljs.pprint.t_cljs$pprint674(self__.writer,meta675__$1));
});

cljs.pprint.t_cljs$pprint674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_676){
var self__ = this;
var _676__$1 = this;
return self__.meta675;
});

cljs.pprint.t_cljs$pprint674.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint674.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__677 = cljs.core._EQ_;
var expr__678 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__677.call(null,String,expr__678))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__677.call(null,Number,expr__678))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__678)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"meta675","meta675",(-1852760566),null)], null);
});

cljs.pprint.t_cljs$pprint674.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint674.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint674";

cljs.pprint.t_cljs$pprint674.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.pprint/t_cljs$pprint674");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint674.
 */
cljs.pprint.__GT_t_cljs$pprint674 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint674(writer__$1,meta675){
return (new cljs.pprint.t_cljs$pprint674(writer__$1,meta675));
});

}

return (new cljs.pprint.t_cljs$pprint674(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__9199__auto__ = first_QMARK_;
if(cljs.core.truth_(and__9199__auto__)){
var and__9199__auto____$1 = f;
if(cljs.core.truth_(and__9199__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__9199__auto____$1;
}
} else {
return and__9199__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__9199__auto__ = m;
if(cljs.core.truth_(and__9199__auto__)){
return (m.index + (1));
} else {
return and__9199__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint680 = (function (writer,last_was_whitespace_QMARK_,meta681){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta681 = meta681;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_682,meta681__$1){
var self__ = this;
var _682__$1 = this;
return (new cljs.pprint.t_cljs$pprint680(self__.writer,self__.last_was_whitespace_QMARK_,meta681__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_682){
var self__ = this;
var _682__$1 = this;
return self__.meta681;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint680.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint680.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__683 = cljs.core._EQ_;
var expr__684 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__683.call(null,String,expr__684))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__683.call(null,Number,expr__684))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__684)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint680.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",(-1073928093),null),new cljs.core.Symbol(null,"meta681","meta681",(2071243540),null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint680.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint680.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint680";

cljs.pprint.t_cljs$pprint680.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.pprint/t_cljs$pprint680");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint680.
 */
cljs.pprint.__GT_t_cljs$pprint680 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint680(writer__$1,last_was_whitespace_QMARK___$1,meta681){
return (new cljs.pprint.t_cljs$pprint680(writer__$1,last_was_whitespace_QMARK___$1,meta681));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint680(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint686 = (function (writer,capped,meta687){
this.writer = writer;
this.capped = capped;
this.meta687 = meta687;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_688,meta687__$1){
var self__ = this;
var _688__$1 = this;
return (new cljs.pprint.t_cljs$pprint686(self__.writer,self__.capped,meta687__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_688){
var self__ = this;
var _688__$1 = this;
return self__.meta687;
});})(capped))
;

cljs.pprint.t_cljs$pprint686.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint686.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__689 = cljs.core._EQ_;
var expr__690 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__689.call(null,String,expr__690))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__9199__auto__ = m;
if(cljs.core.truth_(and__9199__auto__)){
return m.index;
} else {
return and__9199__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__689.call(null,Number,expr__690))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__9199__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__9199__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__9199__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__690)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint686.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"capped","capped",(-1650988402),null),new cljs.core.Symbol(null,"meta687","meta687",(2060554234),null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint686.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint686.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint686";

cljs.pprint.t_cljs$pprint686.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"cljs.pprint/t_cljs$pprint686");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint686.
 */
cljs.pprint.__GT_t_cljs$pprint686 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint686(writer__$1,capped__$1,meta687){
return (new cljs.pprint.t_cljs$pprint686(writer__$1,capped__$1,meta687));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint686(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__692 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__693 = make_writer.call(null,cljs.core._STAR_out_STAR_);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__693;

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__692;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_695 = new cljs.core.Keyword(null,"colnum","colnum",(2023796854)).cljs$core$IFn$_invoke$arity$1(params);
var colinc_696 = new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params);
var current_697 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_698 = (((current_697 < colnum_695))?(colnum_695 - current_697):((cljs.core._EQ_.call(null,colinc_696,(0)))?(0):(colinc_696 - cljs.core.rem.call(null,(current_697 - colnum_695),colinc_696))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_698," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_699 = new cljs.core.Keyword(null,"colnum","colnum",(2023796854)).cljs$core$IFn$_invoke$arity$1(params);
var colinc_700 = new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params);
var start_col_701 = (colrel_699 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_702 = (((colinc_700 > (0)))?cljs.core.rem.call(null,start_col_701,colinc_700):(0));
var space_count_703 = (colrel_699 + ((cljs.core._EQ_.call(null,(0),offset_702))?(0):(colinc_700 - offset_702)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_703," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",(-1989541586)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",(-1989541586)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__704 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__704,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__704,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__707_711 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__708_712 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__709_713 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__710_714 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__709_713;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__710_714;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__708_712;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__707_711;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",(-1088038603)):new cljs.core.Keyword(null,"block","block",(664686210)));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)):new cljs.core.Keyword(null,"fill","fill",(883462889))):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",(-556060186)):new cljs.core.Keyword(null,"linear","linear",(872268697))));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"A",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__11_SHARP_,p2__12_SHARP_,p3__13_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__11_SHARP_,p2__12_SHARP_,p3__13_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"S",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__14_SHARP_,p2__15_SHARP_,p3__16_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__14_SHARP_,p2__15_SHARP_,p3__16_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"D",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__17_SHARP_,p2__18_SHARP_,p3__19_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__17_SHARP_,p2__18_SHARP_,p3__19_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"B",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__20_SHARP_,p2__21_SHARP_,p3__22_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__20_SHARP_,p2__21_SHARP_,p3__22_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"O",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__23_SHARP_,p2__24_SHARP_,p3__25_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__23_SHARP_,p2__24_SHARP_,p3__25_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"X",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__26_SHARP_,p2__27_SHARP_,p3__28_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__26_SHARP_,p2__27_SHARP_,p3__28_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"R",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",(185279322)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__29_SHARP_,p2__30_SHARP_,p3__31_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(p1__29_SHARP_),p1__29_SHARP_,p2__30_SHARP_,p3__31_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__9199__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__9199__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__9199__auto__;
}
})())){
return (function (p1__32_SHARP_,p2__33_SHARP_,p3__34_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__32_SHARP_,p2__33_SHARP_,p3__34_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35_SHARP_,p2__36_SHARP_,p3__37_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__35_SHARP_,p2__36_SHARP_,p3__37_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__38_SHARP_,p2__39_SHARP_,p3__40_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__38_SHARP_,p2__39_SHARP_,p3__40_SHARP_);
});
} else {
return (function (p1__41_SHARP_,p2__42_SHARP_,p3__43_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__41_SHARP_,p2__42_SHARP_,p3__43_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"P",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__715 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__715,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__715,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"C",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",(-1016499218)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"F",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",(-2146297393)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"E",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",(1381269198)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",(-2146297393)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",(1986664222)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"G",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",(1381269198)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",(-2146297393)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",(1986664222)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"$",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"%",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",(2139924085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__10151__auto___733 = new cljs.core.Keyword(null,"count","count",(2139924085)).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_734 = (0);
while(true){
if((i_734 < n__10151__auto___733)){
cljs.pprint.prn.call(null);

var G__735 = (i_734 + (1));
i_734 = G__735;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"&",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",(2139924085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_736 = new cljs.core.Keyword(null,"count","count",(2139924085)).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_736 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__10151__auto___737 = (cnt_736 - (1));
var i_738 = (0);
while(true){
if((i_738 < n__10151__auto___737)){
cljs.pprint.prn.call(null);

var G__739 = (i_738 + (1));
i_738 = G__739;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"|",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",(2139924085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__10151__auto___740 = new cljs.core.Keyword(null,"count","count",(2139924085)).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_741 = (0);
while(true){
if((i_741 < n__10151__auto___740)){
cljs.pprint.print.call(null,"\f");

var G__742 = (i_741 + (1));
i_741 = G__742;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"~",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"\n",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"T",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",(2023796854)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__44_SHARP_,p2__45_SHARP_,p3__46_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__44_SHARP_,p2__45_SHARP_,p3__46_SHARP_);
});
} else {
return (function (p1__47_SHARP_,p2__48_SHARP_,p3__49_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__47_SHARP_,p2__48_SHARP_,p3__49_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"*",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"?",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__718 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__718,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__718,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__721 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__721,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__721,(1),null);
var vec__724 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__724,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__724,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"(",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",(-452581833)),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),null,new cljs.core.Keyword(null,"else","else",(-1508377146)),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__9199__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__9199__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__9199__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__50_SHARP_,p2__51_SHARP_,p3__52_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__50_SHARP_,p2__51_SHARP_,p3__52_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),")",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"[",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",(762528866)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",(-452581833)),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),true,new cljs.core.Keyword(null,"else","else",(-1508377146)),new cljs.core.Keyword(null,"last","last",(1105735132))], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),";",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",(962687677)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",(1742323262)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",(-1628749125)),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"]",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"{",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",(-452581833)),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_((function (){var and__9199__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__9199__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__9199__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"}",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"<",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null,new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",(-452581833)),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),true,new cljs.core.Keyword(null,"else","else",(-1508377146)),new cljs.core.Keyword(null,"first","first",(-644103046))], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),">",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"^",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",(951899358)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",(1729550917)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",(-1486822496)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",(951899358)).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",(1729550917)).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",(-1486822496)).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)):new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)));
if(cljs.core.truth_((function (){var and__9199__auto__ = arg1;
if(cljs.core.truth_(and__9199__auto__)){
var and__9199__auto____$1 = arg2;
if(cljs.core.truth_(and__9199__auto____$1)){
return arg3;
} else {
return and__9199__auto____$1;
}
} else {
return and__9199__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__9199__auto__ = arg1;
if(cljs.core.truth_(and__9199__auto__)){
return arg2;
} else {
return and__9199__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"W",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null,new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_((function (){var or__9218__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",(1290497552)),null,new cljs.core.Keyword(null,"length","length",(588987862)),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__727 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__727,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__727,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__730 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__730,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__730,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"_",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"I",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",(-758446196)),null,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",(-1216589335)),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__743){
var vec__744 = p__743;
var s = cljs.core.nth.call(null,vec__744,(0),null);
var offset = cljs.core.nth.call(null,vec__744,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__744,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__747){
var vec__748 = p__747;
var p = cljs.core.nth.call(null,vec__748,(0),null);
var offset = cljs.core.nth.call(null,vec__748,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["v",null,"V",null], null), null),cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",(-758446196)):((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",(-1216589335)):((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",(-965200945)),"@",new cljs.core.Keyword(null,"at","at",(1476951349))], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__751){
var vec__752 = p__751;
var s__$1 = cljs.core.nth.call(null,vec__752,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__752,(1),null);
var flags = cljs.core.nth.call(null,vec__752,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",(1775418075)).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__9199__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__9199__auto__){
return new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__9199__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__9199__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__9199__auto__){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__9199__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__9199__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",(-393648840)).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__9199__auto__){
var and__9199__auto____$1 = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__9199__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__9199__auto____$1;
}
} else {
return and__9199__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__9505__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__9506__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__9505__auto__ < y__9506__auto__) ? x__9505__auto__ : y__9506__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__53_SHARP_,p2__54_SHARP_){
var val = cljs.core.first.call(null,p1__53_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__54_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.name.call(null,cljs.core.first.call(null,p2__54_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__53_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__9992__auto__ = (function cljs$pprint$map_params_$_iter__755(s__756){
return (new cljs.core.LazySeq(null,(function (){
var s__756__$1 = s__756;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__756__$1);
if(temp__9015__auto__){
var s__756__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__756__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__756__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__758 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__757 = (0);
while(true){
if((i__757 < size__9991__auto__)){
var vec__759 = cljs.core._nth.call(null,c__9990__auto__,i__757);
var name = cljs.core.nth.call(null,vec__759,(0),null);
var vec__762 = cljs.core.nth.call(null,vec__759,(1),null);
var default$ = cljs.core.nth.call(null,vec__762,(0),null);
cljs.core.chunk_append.call(null,b__758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__771 = (i__757 + (1));
i__757 = G__771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__758),cljs$pprint$map_params_$_iter__755.call(null,cljs.core.chunk_rest.call(null,s__756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__758),null);
}
} else {
var vec__765 = cljs.core.first.call(null,s__756__$2);
var name = cljs.core.nth.call(null,vec__765,(0),null);
var vec__768 = cljs.core.nth.call(null,vec__765,(1),null);
var default$ = cljs.core.nth.call(null,vec__768,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__755.call(null,cljs.core.rest.call(null,s__756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9992__auto__.call(null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__55_SHARP_,p2__56_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__55_SHARP_,p2__56_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__57_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__57_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__772 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__772,(0),null);
var vec__775 = cljs.core.nth.call(null,vec__772,(1),null);
var rest = cljs.core.nth.call(null,vec__775,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__775,(1),null);
var vec__778 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__778,(0),null);
var vec__781 = cljs.core.nth.call(null,vec__778,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__781,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__781,(1),null);
var flags = cljs.core.nth.call(null,vec__781,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",(-1989541586)),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",(-452581833)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",(-1628749125)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__9199__auto__ = new cljs.core.Keyword(null,"separator","separator",(-1628749125)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__9199__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__9199__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__784 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__784,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__784,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",(-452581833)).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",(951856080)),new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",(-1508377146)),null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",(-1628749125)),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__787){
var vec__788 = p__787;
var clause_map = cljs.core.nth.call(null,vec__788,(0),null);
var saw_else = cljs.core.nth.call(null,vec__788,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__788,(2),null);
var vec__791 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__791,(0),null);
var vec__794 = cljs.core.nth.call(null,vec__791,(1),null);
var type = cljs.core.nth.call(null,vec__794,(0),null);
var right_params = cljs.core.nth.call(null,vec__794,(1),null);
var else_params = cljs.core.nth.call(null,vec__794,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__794,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",(951856080)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",(-1508377146)):new cljs.core.Keyword(null,"clauses","clauses",(1454841241))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",(-1508377146)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",(-644103046)),new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",(-644103046)),new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",(-1508377146)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",(-832171646)),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",(-1628749125)))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",(-452581833)).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__797 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__798 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__798;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR__orig_val__797,_STAR_format_str_STAR__temp_val__798){
return (function (p__799){
var vec__800 = p__799;
var s = cljs.core.nth.call(null,vec__800,(0),null);
var offset = cljs.core.nth.call(null,vec__800,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR__orig_val__797,_STAR_format_str_STAR__temp_val__798))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__797;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__9218__auto__ = new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",(1775418075)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
var or__9218__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__9218__auto____$1)){
return or__9218__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__803 = cljs.core.next.call(null,format__$1);
format__$1 = G__803;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__805 = arguments.length;
switch (G__805) {
case (3):
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not.call(null,stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty.call(null,format)) && (cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream)))))?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR__orig_val__806 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__807 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__807;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__806;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__808 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__808,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__808,(1),null);
var vec__811 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__811,(0),null);
var offsets = cljs.core.nth.call(null,vec__811,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = (3);

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),"'",new cljs.core.Symbol(null,"var","var",(870848730),null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",(188719157),null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",(843087510),null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",(1013085760),null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__9199__auto__ = macro_char;
if(cljs.core.truth_(and__9199__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__9199__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__815_820 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__816_821 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__817_822 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__818_823 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__817_822;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__818_823;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count819_824 = (0);
var alis_825__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count819_824 < cljs.core._STAR_print_length_STAR_)))){
if(alis_825__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_825__$1));

if(cljs.core.next.call(null,alis_825__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__826 = (length_count819_824 + (1));
var G__827 = cljs.core.next.call(null,alis_825__$1);
length_count819_824 = G__826;
alis_825__$1 = G__827;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__816_821;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__815_820;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__828_833 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__829_834 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__830_835 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__831_836 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__830_835;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__831_836;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count832_837 = (0);
var aseq_838 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count832_837 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_838){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_838));

if(cljs.core.next.call(null,aseq_838)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__839 = (length_count832_837 + (1));
var G__840 = cljs.core.next.call(null,aseq_838);
length_count832_837 = G__839;
aseq_838 = G__840;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__829_834;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__828_833;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__114__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__){
return (function() { 
var G__841__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__841 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__842__i = 0, G__842__a = new Array(arguments.length -  0);
while (G__842__i < G__842__a.length) {G__842__a[G__842__i] = arguments[G__842__i + 0]; ++G__842__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__842__a,0,null);
} 
return G__841__delegate.call(this,args__116__auto__);};
G__841.cljs$lang$maxFixedArity = 0;
G__841.cljs$lang$applyTo = (function (arglist__843){
var args__116__auto__ = cljs.core.seq(arglist__843);
return G__841__delegate(args__116__auto__);
});
G__841.cljs$core$IFn$_invoke$arity$variadic = G__841__delegate;
return G__841;
})()
;
;})(format_in__114__auto__,cf__115__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__844 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",(463499081),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",(770546058),null),new cljs.core.Symbol(null,"lift-ns","lift-ns",(602311926),null),"cljs/core.cljs",(15),(1),(10284),(10284),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__844,(0),null);
var lift_map = cljs.core.nth.call(null,vec__844,(1),null);
var amap__$1 = (function (){var or__9218__auto__ = lift_map;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__847_856 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__848_857 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__849_858 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__850_859 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__849_858;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__850_859;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count851_860 = (0);
var aseq_861 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count851_860 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_861){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__852_862 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__853_863 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__854_864 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__855_865 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__854_864;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__855_865;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_861));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_861)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__853_863;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__852_862;
}}


if(cljs.core.next.call(null,aseq_861)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__866 = (length_count851_860 + (1));
var G__867 = cljs.core.next.call(null,aseq_861);
length_count851_860 = G__866;
aseq_861 = G__867;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__848_857;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__847_856;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__114__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__){
return (function() { 
var G__868__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__868 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__869__i = 0, G__869__a = new Array(arguments.length -  0);
while (G__869__i < G__869__a.length) {G__869__a[G__869__i] = arguments[G__869__i + 0]; ++G__869__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__869__a,0,null);
} 
return G__868__delegate.call(this,args__116__auto__);};
G__868.cljs$lang$maxFixedArity = 0;
G__868.cljs$lang$applyTo = (function (arglist__870){
var args__116__auto__ = cljs.core.seq(arglist__870);
return G__868__delegate(args__116__auto__);
});
G__868.cljs$core$IFn$_invoke$arity$variadic = G__868__delegate;
return G__868;
})()
;
;})(format_in__114__auto__,cf__115__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__9218__auto__ = (function (){var temp__9015__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__9015__auto__)){
var match = temp__9015__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__871_877 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__872_878 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__873_879 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__874_880 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__873_879;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__874_880;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",(664686210)),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

cljs.pprint.write_out.call(null,(((function (){var and__9199__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__9199__auto__){
return (!(cljs.core._realized_QMARK_.call(null,o)));
} else {
return and__9199__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",(1599158697)):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__872_878;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__871_877;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__114__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__){
return (function() { 
var G__881__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__881 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__882__i = 0, G__882__a = new Array(arguments.length -  0);
while (G__882__i < G__882__a.length) {G__882__a[G__882__i] = arguments[G__882__i + 0]; ++G__882__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__882__a,0,null);
} 
return G__881__delegate.call(this,args__116__auto__);};
G__881.cljs$lang$maxFixedArity = 0;
G__881.cljs$lang$applyTo = (function (arglist__883){
var args__116__auto__ = cljs.core.seq(arglist__883);
return G__881__delegate(args__116__auto__);
});
G__881.cljs$core$IFn$_invoke$arity$variadic = G__881__delegate;
return G__881;
})()
;
;})(format_in__114__auto__,cf__115__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",(1455835879));
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",(-145586795));
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",(-1038572696));
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",(765357683));
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",(1371690461));
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",(1902966158));
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",(304602554));
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",(-1987822328));

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__10166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10168__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10169__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10170__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__10170__auto__,method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",(765357683)),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",(1902966158)),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",(1371690461)),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",(304602554)),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",(-1987822328)),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__885 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__885,(0),null);
var end = cljs.core.nth.call(null,vec__885,(1),null);
var vec__888 = reference;
var seq__889 = cljs.core.seq.call(null,vec__888);
var first__890 = cljs.core.first.call(null,seq__889);
var seq__889__$1 = cljs.core.next.call(null,seq__889);
var keyw = first__890;
var args = seq__889__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__891_905 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__892_906 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__893_907 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__894_908 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__893_907;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__894_908;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__114__auto__ = "~w~:i";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args){
return (function() { 
var G__909__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__909 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__910__i = 0, G__910__a = new Array(arguments.length -  0);
while (G__910__i < G__910__a.length) {G__910__a[G__910__i] = arguments[G__910__i + 0]; ++G__910__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__910__a,0,null);
} 
return G__909__delegate.call(this,args__116__auto__);};
G__909.cljs$lang$maxFixedArity = 0;
G__909.cljs$lang$applyTo = (function (arglist__911){
var args__116__auto__ = cljs.core.seq(arglist__911);
return G__909__delegate(args__116__auto__);
});
G__909.cljs$core$IFn$_invoke$arity$variadic = G__909__delegate;
return G__909;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args))
})().call(null,keyw);

var args_912__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_912__$1)){
(function (){var format_in__114__auto__ = " ";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (args_912__$1,format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args){
return (function() { 
var G__913__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__913 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__914__i = 0, G__914__a = new Array(arguments.length -  0);
while (G__914__i < G__914__a.length) {G__914__a[G__914__i] = arguments[G__914__i + 0]; ++G__914__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__914__a,0,null);
} 
return G__913__delegate.call(this,args__116__auto__);};
G__913.cljs$lang$maxFixedArity = 0;
G__913.cljs$lang$applyTo = (function (arglist__915){
var args__116__auto__ = cljs.core.seq(arglist__915);
return G__913__delegate(args__116__auto__);
});
G__913.cljs$core$IFn$_invoke$arity$variadic = G__913__delegate;
return G__913;
})()
;
;})(args_912__$1,format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args))
})().call(null);

var arg_916 = cljs.core.first.call(null,args_912__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_916)){
var vec__895_917 = cljs.pprint.brackets.call(null,arg_916);
var start_918__$1 = cljs.core.nth.call(null,vec__895_917,(0),null);
var end_919__$1 = cljs.core.nth.call(null,vec__895_917,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__898_920 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__899_921 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__900_922 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__901_923 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__900_922;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__901_923;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_918__$1,null,end_919__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_916),(3))) && ((cljs.core.second.call(null,arg_916) instanceof cljs.core.Keyword)))){
var vec__902_924 = arg_916;
var ns_925 = cljs.core.nth.call(null,vec__902_924,(0),null);
var kw_926 = cljs.core.nth.call(null,vec__902_924,(1),null);
var lis_927 = cljs.core.nth.call(null,vec__902_924,(2),null);
(function (){var format_in__114__auto__ = "~w ~w ";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (args_912__$1,format_in__114__auto__,cf__115__auto__,vec__902_924,ns_925,kw_926,lis_927,_STAR_current_level_STAR__orig_val__898_920,_STAR_current_length_STAR__orig_val__899_921,_STAR_current_level_STAR__temp_val__900_922,_STAR_current_length_STAR__temp_val__901_923,vec__895_917,start_918__$1,end_919__$1,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args){
return (function() { 
var G__928__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__928 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__929__i = 0, G__929__a = new Array(arguments.length -  0);
while (G__929__i < G__929__a.length) {G__929__a[G__929__i] = arguments[G__929__i + 0]; ++G__929__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__929__a,0,null);
} 
return G__928__delegate.call(this,args__116__auto__);};
G__928.cljs$lang$maxFixedArity = 0;
G__928.cljs$lang$applyTo = (function (arglist__930){
var args__116__auto__ = cljs.core.seq(arglist__930);
return G__928__delegate(args__116__auto__);
});
G__928.cljs$core$IFn$_invoke$arity$variadic = G__928__delegate;
return G__928;
})()
;
;})(args_912__$1,format_in__114__auto__,cf__115__auto__,vec__902_924,ns_925,kw_926,lis_927,_STAR_current_level_STAR__orig_val__898_920,_STAR_current_length_STAR__orig_val__899_921,_STAR_current_level_STAR__temp_val__900_922,_STAR_current_length_STAR__temp_val__901_923,vec__895_917,start_918__$1,end_919__$1,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args))
})().call(null,ns_925,kw_926);

if(cljs.core.sequential_QMARK_.call(null,lis_927)){
(function (){var format_in__114__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_927))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (args_912__$1,format_in__114__auto__,cf__115__auto__,vec__902_924,ns_925,kw_926,lis_927,_STAR_current_level_STAR__orig_val__898_920,_STAR_current_length_STAR__orig_val__899_921,_STAR_current_level_STAR__temp_val__900_922,_STAR_current_length_STAR__temp_val__901_923,vec__895_917,start_918__$1,end_919__$1,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args){
return (function() { 
var G__931__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__931 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__932__i = 0, G__932__a = new Array(arguments.length -  0);
while (G__932__i < G__932__a.length) {G__932__a[G__932__i] = arguments[G__932__i + 0]; ++G__932__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__932__a,0,null);
} 
return G__931__delegate.call(this,args__116__auto__);};
G__931.cljs$lang$maxFixedArity = 0;
G__931.cljs$lang$applyTo = (function (arglist__933){
var args__116__auto__ = cljs.core.seq(arglist__933);
return G__931__delegate(args__116__auto__);
});
G__931.cljs$core$IFn$_invoke$arity$variadic = G__931__delegate;
return G__931;
})()
;
;})(args_912__$1,format_in__114__auto__,cf__115__auto__,vec__902_924,ns_925,kw_926,lis_927,_STAR_current_level_STAR__orig_val__898_920,_STAR_current_length_STAR__orig_val__899_921,_STAR_current_level_STAR__temp_val__900_922,_STAR_current_length_STAR__temp_val__901_923,vec__895_917,start_918__$1,end_919__$1,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args))
})().call(null,lis_927);
} else {
cljs.pprint.write_out.call(null,lis_927);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__114__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (args_912__$1,format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__898_920,_STAR_current_length_STAR__orig_val__899_921,_STAR_current_level_STAR__temp_val__900_922,_STAR_current_length_STAR__temp_val__901_923,vec__895_917,start_918__$1,end_919__$1,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args){
return (function() { 
var G__934__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__934 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__935__i = 0, G__935__a = new Array(arguments.length -  0);
while (G__935__i < G__935__a.length) {G__935__a[G__935__i] = arguments[G__935__i + 0]; ++G__935__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__935__a,0,null);
} 
return G__934__delegate.call(this,args__116__auto__);};
G__934.cljs$lang$maxFixedArity = 0;
G__934.cljs$lang$applyTo = (function (arglist__936){
var args__116__auto__ = cljs.core.seq(arglist__936);
return G__934__delegate(args__116__auto__);
});
G__934.cljs$core$IFn$_invoke$arity$variadic = G__934__delegate;
return G__934;
})()
;
;})(args_912__$1,format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__898_920,_STAR_current_length_STAR__orig_val__899_921,_STAR_current_level_STAR__temp_val__900_922,_STAR_current_length_STAR__temp_val__901_923,vec__895_917,start_918__$1,end_919__$1,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args))
})(),arg_916);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__899_921;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__898_920;
}}


if(cljs.core.next.call(null,args_912__$1)){
(function (){var format_in__114__auto__ = "~_";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (args_912__$1,format_in__114__auto__,cf__115__auto__,vec__895_917,start_918__$1,end_919__$1,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args){
return (function() { 
var G__937__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__937 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__938__i = 0, G__938__a = new Array(arguments.length -  0);
while (G__938__i < G__938__a.length) {G__938__a[G__938__i] = arguments[G__938__i + 0]; ++G__938__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__938__a,0,null);
} 
return G__937__delegate.call(this,args__116__auto__);};
G__937.cljs$lang$maxFixedArity = 0;
G__937.cljs$lang$applyTo = (function (arglist__939){
var args__116__auto__ = cljs.core.seq(arglist__939);
return G__937__delegate(args__116__auto__);
});
G__937.cljs$core$IFn$_invoke$arity$variadic = G__937__delegate;
return G__937;
})()
;
;})(args_912__$1,format_in__114__auto__,cf__115__auto__,vec__895_917,start_918__$1,end_919__$1,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_916);

if(cljs.core.next.call(null,args_912__$1)){
(function (){var format_in__114__auto__ = "~:_";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (args_912__$1,format_in__114__auto__,cf__115__auto__,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args){
return (function() { 
var G__940__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__940 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__941__i = 0, G__941__a = new Array(arguments.length -  0);
while (G__941__i < G__941__a.length) {G__941__a[G__941__i] = arguments[G__941__i + 0]; ++G__941__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__941__a,0,null);
} 
return G__940__delegate.call(this,args__116__auto__);};
G__940.cljs$lang$maxFixedArity = 0;
G__940.cljs$lang$applyTo = (function (arglist__942){
var args__116__auto__ = cljs.core.seq(arglist__942);
return G__940__delegate(args__116__auto__);
});
G__940.cljs$core$IFn$_invoke$arity$variadic = G__940__delegate;
return G__940;
})()
;
;})(args_912__$1,format_in__114__auto__,cf__115__auto__,arg_916,_STAR_current_level_STAR__orig_val__891_905,_STAR_current_length_STAR__orig_val__892_906,_STAR_current_level_STAR__temp_val__893_907,_STAR_current_length_STAR__temp_val__894_908,vec__885,start,end,vec__888,seq__889,first__890,seq__889__$1,keyw,args))
})().call(null);
} else {
}
}

var G__943 = cljs.core.next.call(null,args_912__$1);
args_912__$1 = G__943;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__892_906;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__891_905;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__944 = alis;
var seq__945 = cljs.core.seq.call(null,vec__944);
var first__946 = cljs.core.first.call(null,seq__945);
var seq__945__$1 = cljs.core.next.call(null,seq__945);
var ns_sym = first__946;
var first__946__$1 = cljs.core.first.call(null,seq__945__$1);
var seq__945__$2 = cljs.core.next.call(null,seq__945__$1);
var ns_name = first__946__$1;
var stuff = seq__945__$2;
var vec__947 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__947,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__947,(1),null);
var vec__950 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__950,(0),null);
var references = cljs.core.nth.call(null,vec__950,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__953_957 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__954_958 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__955_959 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__956_960 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__955_959;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__956_960;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__114__auto__ = "~w ~1I~@_~w";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__953_957,_STAR_current_length_STAR__orig_val__954_958,_STAR_current_level_STAR__temp_val__955_959,_STAR_current_length_STAR__temp_val__956_960,vec__944,seq__945,first__946,seq__945__$1,ns_sym,first__946__$1,seq__945__$2,ns_name,stuff,vec__947,doc_str,stuff__$1,vec__950,attr_map,references){
return (function() { 
var G__961__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__961 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__962__i = 0, G__962__a = new Array(arguments.length -  0);
while (G__962__i < G__962__a.length) {G__962__a[G__962__i] = arguments[G__962__i + 0]; ++G__962__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__962__a,0,null);
} 
return G__961__delegate.call(this,args__116__auto__);};
G__961.cljs$lang$maxFixedArity = 0;
G__961.cljs$lang$applyTo = (function (arglist__963){
var args__116__auto__ = cljs.core.seq(arglist__963);
return G__961__delegate(args__116__auto__);
});
G__961.cljs$core$IFn$_invoke$arity$variadic = G__961__delegate;
return G__961;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__953_957,_STAR_current_length_STAR__orig_val__954_958,_STAR_current_level_STAR__temp_val__955_959,_STAR_current_length_STAR__temp_val__956_960,vec__944,seq__945,first__946,seq__945__$1,ns_sym,first__946__$1,seq__945__$2,ns_name,stuff,vec__947,doc_str,stuff__$1,vec__950,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__9218__auto__ = doc_str;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
var or__9218__auto____$1 = attr_map;
if(cljs.core.truth_(or__9218__auto____$1)){
return or__9218__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__114__auto__ = "~@:_";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__953_957,_STAR_current_length_STAR__orig_val__954_958,_STAR_current_level_STAR__temp_val__955_959,_STAR_current_length_STAR__temp_val__956_960,vec__944,seq__945,first__946,seq__945__$1,ns_sym,first__946__$1,seq__945__$2,ns_name,stuff,vec__947,doc_str,stuff__$1,vec__950,attr_map,references){
return (function() { 
var G__964__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__964 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__965__i = 0, G__965__a = new Array(arguments.length -  0);
while (G__965__i < G__965__a.length) {G__965__a[G__965__i] = arguments[G__965__i + 0]; ++G__965__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__965__a,0,null);
} 
return G__964__delegate.call(this,args__116__auto__);};
G__964.cljs$lang$maxFixedArity = 0;
G__964.cljs$lang$applyTo = (function (arglist__966){
var args__116__auto__ = cljs.core.seq(arglist__966);
return G__964__delegate(args__116__auto__);
});
G__964.cljs$core$IFn$_invoke$arity$variadic = G__964__delegate;
return G__964;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__953_957,_STAR_current_length_STAR__orig_val__954_958,_STAR_current_level_STAR__temp_val__955_959,_STAR_current_length_STAR__temp_val__956_960,vec__944,seq__945,first__946,seq__945__$1,ns_sym,first__946__$1,seq__945__$2,ns_name,stuff,vec__947,doc_str,stuff__$1,vec__950,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__9218__auto__ = attr_map;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__114__auto__ = "~w~:[~;~:@_~]";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__953_957,_STAR_current_length_STAR__orig_val__954_958,_STAR_current_level_STAR__temp_val__955_959,_STAR_current_length_STAR__temp_val__956_960,vec__944,seq__945,first__946,seq__945__$1,ns_sym,first__946__$1,seq__945__$2,ns_name,stuff,vec__947,doc_str,stuff__$1,vec__950,attr_map,references){
return (function() { 
var G__967__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__967 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__968__i = 0, G__968__a = new Array(arguments.length -  0);
while (G__968__i < G__968__a.length) {G__968__a[G__968__i] = arguments[G__968__i + 0]; ++G__968__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__968__a,0,null);
} 
return G__967__delegate.call(this,args__116__auto__);};
G__967.cljs$lang$maxFixedArity = 0;
G__967.cljs$lang$applyTo = (function (arglist__969){
var args__116__auto__ = cljs.core.seq(arglist__969);
return G__967__delegate(args__116__auto__);
});
G__967.cljs$core$IFn$_invoke$arity$variadic = G__967__delegate;
return G__967;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__953_957,_STAR_current_length_STAR__orig_val__954_958,_STAR_current_level_STAR__temp_val__955_959,_STAR_current_length_STAR__temp_val__956_960,vec__944,seq__945,first__946,seq__945__$1,ns_sym,first__946__$1,seq__945__$2,ns_name,stuff,vec__947,doc_str,stuff__$1,vec__950,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_970__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_970__$1));

var temp__9015__auto___971 = cljs.core.next.call(null,references_970__$1);
if(temp__9015__auto___971){
var references_972__$2 = temp__9015__auto___971;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__973 = references_972__$2;
references_970__$1 = G__973;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__954_958;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__953_957;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__114__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__){
return (function() { 
var G__974__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__974 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__975__i = 0, G__975__a = new Array(arguments.length -  0);
while (G__975__i < G__975__a.length) {G__975__a[G__975__i] = arguments[G__975__i + 0]; ++G__975__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__975__a,0,null);
} 
return G__974__delegate.call(this,args__116__auto__);};
G__974.cljs$lang$maxFixedArity = 0;
G__974.cljs$lang$applyTo = (function (arglist__976){
var args__116__auto__ = cljs.core.seq(arglist__976);
return G__974__delegate(args__116__auto__);
});
G__974.cljs$core$IFn$_invoke$arity$variadic = G__974__delegate;
return G__974;
})()
;
;})(format_in__114__auto__,cf__115__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__114__auto__ = " ~_";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__){
return (function() { 
var G__977__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__977 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__978__i = 0, G__978__a = new Array(arguments.length -  0);
while (G__978__i < G__978__a.length) {G__978__a[G__978__i] = arguments[G__978__i + 0]; ++G__978__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__978__a,0,null);
} 
return G__977__delegate.call(this,args__116__auto__);};
G__977.cljs$lang$maxFixedArity = 0;
G__977.cljs$lang$applyTo = (function (arglist__979){
var args__116__auto__ = cljs.core.seq(arglist__979);
return G__977__delegate(args__116__auto__);
});
G__977.cljs$core$IFn$_invoke$arity$variadic = G__977__delegate;
return G__977;
})()
;
;})(format_in__114__auto__,cf__115__auto__))
})().call(null);
} else {
(function (){var format_in__114__auto__ = " ~@_";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__){
return (function() { 
var G__980__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__980 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__981__i = 0, G__981__a = new Array(arguments.length -  0);
while (G__981__i < G__981__a.length) {G__981__a[G__981__i] = arguments[G__981__i + 0]; ++G__981__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__981__a,0,null);
} 
return G__980__delegate.call(this,args__116__auto__);};
G__980.cljs$lang$maxFixedArity = 0;
G__980.cljs$lang$applyTo = (function (arglist__982){
var args__116__auto__ = cljs.core.seq(arglist__982);
return G__980__delegate(args__116__auto__);
});
G__980.cljs$core$IFn$_invoke$arity$variadic = G__980__delegate;
return G__980;
})()
;
;})(format_in__114__auto__,cf__115__auto__))
})().call(null);
}

return (function (){var format_in__114__auto__ = "~{~w~^ ~_~}";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__){
return (function() { 
var G__983__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__983 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__984__i = 0, G__984__a = new Array(arguments.length -  0);
while (G__984__i < G__984__a.length) {G__984__a[G__984__i] = arguments[G__984__i + 0]; ++G__984__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__984__a,0,null);
} 
return G__983__delegate.call(this,args__116__auto__);};
G__983.cljs$lang$maxFixedArity = 0;
G__983.cljs$lang$applyTo = (function (arglist__985){
var args__116__auto__ = cljs.core.seq(arglist__985);
return G__983__delegate(args__116__auto__);
});
G__983.cljs$core$IFn$_invoke$arity$variadic = G__983__delegate;
return G__983;
})()
;
;})(format_in__114__auto__,cf__115__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__114__auto__ = " ~_~{~w~^ ~_~}";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__){
return (function() { 
var G__986__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__986 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__987__i = 0, G__987__a = new Array(arguments.length -  0);
while (G__987__i < G__987__a.length) {G__987__a[G__987__i] = arguments[G__987__i + 0]; ++G__987__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__987__a,0,null);
} 
return G__986__delegate.call(this,args__116__auto__);};
G__986.cljs$lang$maxFixedArity = 0;
G__986.cljs$lang$applyTo = (function (arglist__988){
var args__116__auto__ = cljs.core.seq(arglist__988);
return G__986__delegate(args__116__auto__);
});
G__986.cljs$core$IFn$_invoke$arity$variadic = G__986__delegate;
return G__986;
})()
;
;})(format_in__114__auto__,cf__115__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__989 = alis;
var seq__990 = cljs.core.seq.call(null,vec__989);
var first__991 = cljs.core.first.call(null,seq__990);
var seq__990__$1 = cljs.core.next.call(null,seq__990);
var defn_sym = first__991;
var first__991__$1 = cljs.core.first.call(null,seq__990__$1);
var seq__990__$2 = cljs.core.next.call(null,seq__990__$1);
var defn_name = first__991__$1;
var stuff = seq__990__$2;
var vec__992 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__992,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__992,(1),null);
var vec__995 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__995,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__995,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__998_1002 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__999_1003 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__1000_1004 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__1001_1005 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__1000_1004;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__1001_1005;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__114__auto__ = "~w ~1I~@_~w";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__998_1002,_STAR_current_length_STAR__orig_val__999_1003,_STAR_current_level_STAR__temp_val__1000_1004,_STAR_current_length_STAR__temp_val__1001_1005,vec__989,seq__990,first__991,seq__990__$1,defn_sym,first__991__$1,seq__990__$2,defn_name,stuff,vec__992,doc_str,stuff__$1,vec__995,attr_map,stuff__$2){
return (function() { 
var G__1006__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__1006 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__1007__i = 0, G__1007__a = new Array(arguments.length -  0);
while (G__1007__i < G__1007__a.length) {G__1007__a[G__1007__i] = arguments[G__1007__i + 0]; ++G__1007__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__1007__a,0,null);
} 
return G__1006__delegate.call(this,args__116__auto__);};
G__1006.cljs$lang$maxFixedArity = 0;
G__1006.cljs$lang$applyTo = (function (arglist__1008){
var args__116__auto__ = cljs.core.seq(arglist__1008);
return G__1006__delegate(args__116__auto__);
});
G__1006.cljs$core$IFn$_invoke$arity$variadic = G__1006__delegate;
return G__1006;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__998_1002,_STAR_current_length_STAR__orig_val__999_1003,_STAR_current_level_STAR__temp_val__1000_1004,_STAR_current_length_STAR__temp_val__1001_1005,vec__989,seq__990,first__991,seq__990__$1,defn_sym,first__991__$1,seq__990__$2,defn_name,stuff,vec__992,doc_str,stuff__$1,vec__995,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__114__auto__ = " ~_~w";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__998_1002,_STAR_current_length_STAR__orig_val__999_1003,_STAR_current_level_STAR__temp_val__1000_1004,_STAR_current_length_STAR__temp_val__1001_1005,vec__989,seq__990,first__991,seq__990__$1,defn_sym,first__991__$1,seq__990__$2,defn_name,stuff,vec__992,doc_str,stuff__$1,vec__995,attr_map,stuff__$2){
return (function() { 
var G__1009__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__1009 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__1010__i = 0, G__1010__a = new Array(arguments.length -  0);
while (G__1010__i < G__1010__a.length) {G__1010__a[G__1010__i] = arguments[G__1010__i + 0]; ++G__1010__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__1010__a,0,null);
} 
return G__1009__delegate.call(this,args__116__auto__);};
G__1009.cljs$lang$maxFixedArity = 0;
G__1009.cljs$lang$applyTo = (function (arglist__1011){
var args__116__auto__ = cljs.core.seq(arglist__1011);
return G__1009__delegate(args__116__auto__);
});
G__1009.cljs$core$IFn$_invoke$arity$variadic = G__1009__delegate;
return G__1009;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__998_1002,_STAR_current_length_STAR__orig_val__999_1003,_STAR_current_level_STAR__temp_val__1000_1004,_STAR_current_length_STAR__temp_val__1001_1005,vec__989,seq__990,first__991,seq__990__$1,defn_sym,first__991__$1,seq__990__$2,defn_name,stuff,vec__992,doc_str,stuff__$1,vec__995,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__114__auto__ = " ~_~w";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__998_1002,_STAR_current_length_STAR__orig_val__999_1003,_STAR_current_level_STAR__temp_val__1000_1004,_STAR_current_length_STAR__temp_val__1001_1005,vec__989,seq__990,first__991,seq__990__$1,defn_sym,first__991__$1,seq__990__$2,defn_name,stuff,vec__992,doc_str,stuff__$1,vec__995,attr_map,stuff__$2){
return (function() { 
var G__1012__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__1012 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__1013__i = 0, G__1013__a = new Array(arguments.length -  0);
while (G__1013__i < G__1013__a.length) {G__1013__a[G__1013__i] = arguments[G__1013__i + 0]; ++G__1013__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__1013__a,0,null);
} 
return G__1012__delegate.call(this,args__116__auto__);};
G__1012.cljs$lang$maxFixedArity = 0;
G__1012.cljs$lang$applyTo = (function (arglist__1014){
var args__116__auto__ = cljs.core.seq(arglist__1014);
return G__1012__delegate(args__116__auto__);
});
G__1012.cljs$core$IFn$_invoke$arity$variadic = G__1012__delegate;
return G__1012;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__998_1002,_STAR_current_length_STAR__orig_val__999_1003,_STAR_current_level_STAR__temp_val__1000_1004,_STAR_current_length_STAR__temp_val__1001_1005,vec__989,seq__990,first__991,seq__990__$1,defn_sym,first__991__$1,seq__990__$2,defn_name,stuff,vec__992,doc_str,stuff__$1,vec__995,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__9218__auto__ = doc_str;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__9218__auto__ = doc_str;
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__999_1003;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__998_1002;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__1015_1024 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__1016_1025 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__1017_1026 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__1018_1027 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__1017_1026;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__1018_1027;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count1019_1028 = (0);
var binding_1029 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count1019_1028 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_1029)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__1020_1030 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__1021_1031 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__1022_1032 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__1023_1033 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__1022_1032;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__1023_1033;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_1029));

if(cljs.core.next.call(null,binding_1029)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",(-556060186)));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_1029));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__1021_1031;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__1020_1030;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_1029))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__1034 = (length_count1019_1028 + (1));
var G__1035 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_1029));
length_count1019_1028 = G__1034;
binding_1029 = G__1035;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__1016_1025;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__1015_1024;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__1036_1040 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__1037_1041 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__1038_1042 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__1039_1043 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__1038_1042;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__1039_1043;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
(function (){var format_in__114__auto__ = "~w ~1I~@_";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__1036_1040,_STAR_current_length_STAR__orig_val__1037_1041,_STAR_current_level_STAR__temp_val__1038_1042,_STAR_current_length_STAR__temp_val__1039_1043,base_sym){
return (function() { 
var G__1044__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__1044 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__1045__i = 0, G__1045__a = new Array(arguments.length -  0);
while (G__1045__i < G__1045__a.length) {G__1045__a[G__1045__i] = arguments[G__1045__i + 0]; ++G__1045__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__1045__a,0,null);
} 
return G__1044__delegate.call(this,args__116__auto__);};
G__1044.cljs$lang$maxFixedArity = 0;
G__1044.cljs$lang$applyTo = (function (arglist__1046){
var args__116__auto__ = cljs.core.seq(arglist__1046);
return G__1044__delegate(args__116__auto__);
});
G__1044.cljs$core$IFn$_invoke$arity$variadic = G__1044__delegate;
return G__1044;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__1036_1040,_STAR_current_length_STAR__orig_val__1037_1041,_STAR_current_level_STAR__temp_val__1038_1042,_STAR_current_length_STAR__temp_val__1039_1043,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__114__auto__ = " ~_~{~w~^ ~_~}";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__1036_1040,_STAR_current_length_STAR__orig_val__1037_1041,_STAR_current_level_STAR__temp_val__1038_1042,_STAR_current_length_STAR__temp_val__1039_1043,base_sym){
return (function() { 
var G__1047__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__1047 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__1048__i = 0, G__1048__a = new Array(arguments.length -  0);
while (G__1048__i < G__1048__a.length) {G__1048__a[G__1048__i] = arguments[G__1048__i + 0]; ++G__1048__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__1048__a,0,null);
} 
return G__1047__delegate.call(this,args__116__auto__);};
G__1047.cljs$lang$maxFixedArity = 0;
G__1047.cljs$lang$applyTo = (function (arglist__1049){
var args__116__auto__ = cljs.core.seq(arglist__1049);
return G__1047__delegate(args__116__auto__);
});
G__1047.cljs$core$IFn$_invoke$arity$variadic = G__1047__delegate;
return G__1047;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__1036_1040,_STAR_current_length_STAR__orig_val__1037_1041,_STAR_current_level_STAR__temp_val__1038_1042,_STAR_current_length_STAR__temp_val__1039_1043,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__1037_1041;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__1036_1040;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__114__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__){
return (function() { 
var G__1050__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__1050 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__1051__i = 0, G__1051__a = new Array(arguments.length -  0);
while (G__1051__i < G__1051__a.length) {G__1051__a[G__1051__i] = arguments[G__1051__i + 0]; ++G__1051__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__1051__a,0,null);
} 
return G__1050__delegate.call(this,args__116__auto__);};
G__1050.cljs$lang$maxFixedArity = 0;
G__1050.cljs$lang$applyTo = (function (arglist__1052){
var args__116__auto__ = cljs.core.seq(arglist__1052);
return G__1050__delegate(args__116__auto__);
});
G__1050.cljs$core$IFn$_invoke$arity$variadic = G__1050__delegate;
return G__1050;
})()
;
;})(format_in__114__auto__,cf__115__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__1053_1062 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__1054_1063 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__1055_1064 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__1056_1065 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__1055_1064;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__1056_1065;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",(664686210)),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

var length_count1057_1066 = (0);
var alis_1067__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count1057_1066 < cljs.core._STAR_print_length_STAR_)))){
if(alis_1067__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__1058_1068 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__1059_1069 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__1060_1070 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__1061_1071 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__1060_1070;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__1061_1071;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_1067__$1));

if(cljs.core.next.call(null,alis_1067__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",(-556060186)));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_1067__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__1059_1069;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__1058_1068;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_1067__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__1072 = (length_count1057_1066 + (1));
var G__1073 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_1067__$1));
length_count1057_1066 = G__1072;
alis_1067__$1 = G__1073;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__1054_1063;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__1053_1062;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__1074_1083 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__1075_1084 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__1076_1085 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__1077_1086 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__1076_1085;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__1077_1086;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",(664686210)),(1));

cljs.core.apply.call(null,(function (){var format_in__114__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__1074_1083,_STAR_current_length_STAR__orig_val__1075_1084,_STAR_current_level_STAR__temp_val__1076_1085,_STAR_current_length_STAR__temp_val__1077_1086){
return (function() { 
var G__1087__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__1087 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__1088__i = 0, G__1088__a = new Array(arguments.length -  0);
while (G__1088__i < G__1088__a.length) {G__1088__a[G__1088__i] = arguments[G__1088__i + 0]; ++G__1088__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__1088__a,0,null);
} 
return G__1087__delegate.call(this,args__116__auto__);};
G__1087.cljs$lang$maxFixedArity = 0;
G__1087.cljs$lang$applyTo = (function (arglist__1089){
var args__116__auto__ = cljs.core.seq(arglist__1089);
return G__1087__delegate(args__116__auto__);
});
G__1087.cljs$core$IFn$_invoke$arity$variadic = G__1087__delegate;
return G__1087;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_current_level_STAR__orig_val__1074_1083,_STAR_current_length_STAR__orig_val__1075_1084,_STAR_current_level_STAR__temp_val__1076_1085,_STAR_current_length_STAR__temp_val__1077_1086))
})(),alis);

var length_count1078_1090 = (0);
var alis_1091__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count1078_1090 < cljs.core._STAR_print_length_STAR_)))){
if(alis_1091__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__1079_1092 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__1080_1093 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__1081_1094 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__1082_1095 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__1081_1094;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__1082_1095;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_1091__$1));

if(cljs.core.next.call(null,alis_1091__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",(-556060186)));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_1091__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__1080_1093;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__1079_1092;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_1091__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__1096 = (length_count1078_1090 + (1));
var G__1097 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_1091__$1));
length_count1078_1090 = G__1096;
alis_1091__$1 = G__1097;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__1075_1084;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__1074_1083;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR__orig_val__1098 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__1099 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR__orig_val__1098,args,nlis){
return (function (p1__58_SHARP_,p2__59_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__59_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__1098,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__1099;

try{return (function (){var format_in__114__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__115__auto__ = ((typeof format_in__114__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__114__auto__):format_in__114__auto__);
return ((function (format_in__114__auto__,cf__115__auto__,_STAR_symbol_map_STAR__orig_val__1098,_STAR_symbol_map_STAR__temp_val__1099,args,nlis){
return (function() { 
var G__1100__delegate = function (args__116__auto__){
var navigator__117__auto__ = cljs.pprint.init_navigator.call(null,args__116__auto__);
return cljs.pprint.execute_format.call(null,cf__115__auto__,navigator__117__auto__);
};
var G__1100 = function (var_args){
var args__116__auto__ = null;
if (arguments.length > 0) {
var G__1101__i = 0, G__1101__a = new Array(arguments.length -  0);
while (G__1101__i < G__1101__a.length) {G__1101__a[G__1101__i] = arguments[G__1101__i + 0]; ++G__1101__i;}
  args__116__auto__ = new cljs.core.IndexedSeq(G__1101__a,0,null);
} 
return G__1100__delegate.call(this,args__116__auto__);};
G__1100.cljs$lang$maxFixedArity = 0;
G__1100.cljs$lang$applyTo = (function (arglist__1102){
var args__116__auto__ = cljs.core.seq(arglist__1102);
return G__1100__delegate(args__116__auto__);
});
G__1100.cljs$core$IFn$_invoke$arity$variadic = G__1100__delegate;
return G__1100;
})()
;
;})(format_in__114__auto__,cf__115__auto__,_STAR_symbol_map_STAR__orig_val__1098,_STAR_symbol_map_STAR__temp_val__1099,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__1098;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__1103_1108 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__1104_1109 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__1105_1110 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__1106_1111 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__1105_1110;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__1106_1111;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",(664686210)),(1));

var length_count1107_1112 = (0);
var alis_1113__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count1107_1112 < cljs.core._STAR_print_length_STAR_)))){
if(alis_1113__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_1113__$1));

if(cljs.core.next.call(null,alis_1113__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__1114 = (length_count1107_1112 + (1));
var G__1115 = cljs.core.next.call(null,alis_1113__$1);
length_count1107_1112 = G__1114;
alis_1113__$1 = G__1115;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__1104_1109;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__1103_1108;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__9992__auto__ = (function cljs$pprint$two_forms_$_iter__1116(s__1117){
return (new cljs.core.LazySeq(null,(function (){
var s__1117__$1 = s__1117;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__1117__$1);
if(temp__9015__auto__){
var s__1117__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1117__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__1117__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__1119 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__1118 = (0);
while(true){
if((i__1118 < size__9991__auto__)){
var x = cljs.core._nth.call(null,c__9990__auto__,i__1118);
cljs.core.chunk_append.call(null,b__1119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__1120 = (i__1118 + (1));
i__1118 = G__1120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1119),cljs$pprint$two_forms_$_iter__1116.call(null,cljs.core.chunk_rest.call(null,s__1117__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1119),null);
}
} else {
var x = cljs.core.first.call(null,s__1117__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__1116.call(null,cljs.core.rest.call(null,s__1117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9992__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__60_SHARP_){
var vec__1121 = p1__60_SHARP_;
var s = cljs.core.nth.call(null,vec__1121,(0),null);
var f = cljs.core.nth.call(null,vec__1121,(1),null);
if(cljs.core.not.call(null,(function (){var or__9218__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__60_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",(1975675962),null),new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.Symbol(null,"when-first","when-first",(821699168),null),new cljs.core.Symbol(null,"if","if",(1181717262),null),new cljs.core.Symbol(null,"condp","condp",(1054325175),null),new cljs.core.Symbol(null,"..","..",(-300507420),null),new cljs.core.Symbol(null,"defmacro","defmacro",(2054157304),null),new cljs.core.Symbol(null,"defn","defn",(-126010802),null),new cljs.core.Symbol(null,"loop","loop",(1244978678),null),new cljs.core.Symbol(null,"struct","struct",(325972931),null),new cljs.core.Symbol(null,"doseq","doseq",(221164135),null),new cljs.core.Symbol(null,"if-not","if-not",(-265415609),null),new cljs.core.Symbol(null,"when-not","when-not",(-1223136340),null),new cljs.core.Symbol(null,"def","def",(597100991),null),new cljs.core.Symbol(null,"when","when",(1064114221),null),new cljs.core.Symbol(null,"with-open","with-open",(172119667),null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",(837642072),null),new cljs.core.Symbol(null,"defonce","defonce",(-1681484013),null),new cljs.core.Symbol(null,"when-let","when-let",(-1383043480),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"dotimes","dotimes",(-818708397),null),new cljs.core.Symbol(null,"cond","cond",(1606708055),null),new cljs.core.Symbol(null,"let","let",(358118826),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"defn-","defn-",(1097765044),null),new cljs.core.Symbol(null,"locking","locking",(1542862874),null),new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"if-let","if-let",(1803593690),null),new cljs.core.Symbol(null,"binding","binding",(-2114503176),null),new cljs.core.Symbol(null,"struct-map","struct-map",(-1387540878),null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__8960__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__8960__auto__)){
var special_form = temp__8960__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__8960__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__8960__auto__)){
var arg_num = temp__8960__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__10166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10168__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10169__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10170__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__10170__auto__,method_table__10166__auto__,prefer_table__10167__auto__,method_cache__10168__auto__,cached_hierarchy__10169__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",(765357683)),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",(1902966158)),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",(1371690461)),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",(304602554)),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",(1455835879)),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",(-145586795)),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",(-1987822328)),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__9491__auto__ = (0);
var y__9492__auto__ = (width - cljs.core.count.call(null,s));
return ((x__9491__auto__ > y__9492__auto__) ? x__9491__auto__ : y__9492__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__1125 = arguments.length;
switch (G__1125) {
case (2):
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,(function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.call(null,(function (p1__61_SHARP_){
return cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__61_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,((function (widths){
return (function (p1__62_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__62_SHARP_,"-"));
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__9992__auto__ = ((function (widths,spacers){
return (function cljs$pprint$iter__1136(s__1137){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__1137__$1 = s__1137;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__1137__$1);
if(temp__9015__auto__){
var s__1137__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1137__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__1137__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__1139 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__1138 = (0);
while(true){
if((i__1138 < size__9991__auto__)){
var vec__1140 = cljs.core._nth.call(null,c__9990__auto__,i__1138);
var col = cljs.core.nth.call(null,vec__1140,(0),null);
var width = cljs.core.nth.call(null,vec__1140,(1),null);
cljs.core.chunk_append.call(null,b__1139,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__1151 = (i__1138 + (1));
i__1138 = G__1151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1139),cljs$pprint$iter__1136.call(null,cljs.core.chunk_rest.call(null,s__1137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1139),null);
}
} else {
var vec__1143 = cljs.core.first.call(null,s__1137__$2);
var col = cljs.core.nth.call(null,vec__1143,(0),null);
var width = cljs.core.nth.call(null,vec__1143,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__1136.call(null,cljs.core.rest.call(null,s__1137__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers))
,null,null));
});})(widths,spacers))
;
return iter__9992__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__9992__auto__,widths,spacers){
return (function (p1__63_SHARP_){
return cljs.core.get.call(null,row,p1__63_SHARP_);
});})(iter__9992__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__1146 = cljs.core.seq.call(null,rows);
var chunk__1147 = null;
var count__1148 = (0);
var i__1149 = (0);
while(true){
if((i__1149 < count__1148)){
var row = cljs.core._nth.call(null,chunk__1147,i__1149);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__1152 = seq__1146;
var G__1153 = chunk__1147;
var G__1154 = count__1148;
var G__1155 = (i__1149 + (1));
seq__1146 = G__1152;
chunk__1147 = G__1153;
count__1148 = G__1154;
i__1149 = G__1155;
continue;
} else {
var temp__9015__auto__ = cljs.core.seq.call(null,seq__1146);
if(temp__9015__auto__){
var seq__1146__$1 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1146__$1)){
var c__10028__auto__ = cljs.core.chunk_first.call(null,seq__1146__$1);
var G__1156 = cljs.core.chunk_rest.call(null,seq__1146__$1);
var G__1157 = c__10028__auto__;
var G__1158 = cljs.core.count.call(null,c__10028__auto__);
var G__1159 = (0);
seq__1146 = G__1156;
chunk__1147 = G__1157;
count__1148 = G__1158;
i__1149 = G__1159;
continue;
} else {
var row = cljs.core.first.call(null,seq__1146__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__1160 = cljs.core.next.call(null,seq__1146__$1);
var G__1161 = null;
var G__1162 = (0);
var G__1163 = (0);
seq__1146 = G__1160;
chunk__1147 = G__1161;
count__1148 = G__1162;
i__1149 = G__1163;
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
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = (2);

