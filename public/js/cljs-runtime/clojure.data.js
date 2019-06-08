goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__27854){
var vec__27855 = p__27854;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27855,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27855,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__27859 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__27875 = arguments.length;
switch (G__27875) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__27893_27923 = clojure.data.equality_partition;
var G__27894_27924 = "null";
var G__27895_27925 = ((function (G__27893_27923,G__27894_27924){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27893_27923,G__27894_27924))
;
goog.object.set(G__27893_27923,G__27894_27924,G__27895_27925);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__27896_27929 = clojure.data.equality_partition;
var G__27897_27930 = "string";
var G__27898_27931 = ((function (G__27896_27929,G__27897_27930){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27896_27929,G__27897_27930))
;
goog.object.set(G__27896_27929,G__27897_27930,G__27898_27931);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__27899_27932 = clojure.data.equality_partition;
var G__27900_27933 = "number";
var G__27901_27934 = ((function (G__27899_27932,G__27900_27933){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27899_27932,G__27900_27933))
;
goog.object.set(G__27899_27932,G__27900_27933,G__27901_27934);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__27902_27935 = clojure.data.equality_partition;
var G__27903_27936 = "array";
var G__27904_27937 = ((function (G__27902_27935,G__27903_27936){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__27902_27935,G__27903_27936))
;
goog.object.set(G__27902_27935,G__27903_27936,G__27904_27937);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__27905_27941 = clojure.data.equality_partition;
var G__27906_27942 = "function";
var G__27907_27943 = ((function (G__27905_27941,G__27906_27942){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27905_27941,G__27906_27942))
;
goog.object.set(G__27905_27941,G__27906_27942,G__27907_27943);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__27908_27944 = clojure.data.equality_partition;
var G__27909_27945 = "boolean";
var G__27910_27946 = ((function (G__27908_27944,G__27909_27945){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27908_27944,G__27909_27945))
;
goog.object.set(G__27908_27944,G__27909_27945,G__27910_27946);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__27911_27947 = clojure.data.equality_partition;
var G__27912_27948 = "_";
var G__27913_27949 = ((function (G__27911_27947,G__27912_27948){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__27911_27947,G__27912_27948))
;
goog.object.set(G__27911_27947,G__27912_27948,G__27913_27949);
goog.object.set(clojure.data.Diff,"null",true);

var G__27956_27992 = clojure.data.diff_similar;
var G__27957_27993 = "null";
var G__27958_27994 = ((function (G__27956_27992,G__27957_27993){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27956_27992,G__27957_27993))
;
goog.object.set(G__27956_27992,G__27957_27993,G__27958_27994);

goog.object.set(clojure.data.Diff,"string",true);

var G__27962_27997 = clojure.data.diff_similar;
var G__27963_27998 = "string";
var G__27964_27999 = ((function (G__27962_27997,G__27963_27998){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27962_27997,G__27963_27998))
;
goog.object.set(G__27962_27997,G__27963_27998,G__27964_27999);

goog.object.set(clojure.data.Diff,"number",true);

var G__27965_28000 = clojure.data.diff_similar;
var G__27966_28001 = "number";
var G__27967_28002 = ((function (G__27965_28000,G__27966_28001){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27965_28000,G__27966_28001))
;
goog.object.set(G__27965_28000,G__27966_28001,G__27967_28002);

goog.object.set(clojure.data.Diff,"array",true);

var G__27968_28006 = clojure.data.diff_similar;
var G__27969_28007 = "array";
var G__27970_28008 = ((function (G__27968_28006,G__27969_28007){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__27968_28006,G__27969_28007))
;
goog.object.set(G__27968_28006,G__27969_28007,G__27970_28008);

goog.object.set(clojure.data.Diff,"function",true);

var G__27971_28009 = clojure.data.diff_similar;
var G__27972_28010 = "function";
var G__27973_28011 = ((function (G__27971_28009,G__27972_28010){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27971_28009,G__27972_28010))
;
goog.object.set(G__27971_28009,G__27972_28010,G__27973_28011);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__27977_28012 = clojure.data.diff_similar;
var G__27978_28013 = "boolean";
var G__27979_28014 = ((function (G__27977_28012,G__27978_28013){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27977_28012,G__27978_28013))
;
goog.object.set(G__27977_28012,G__27978_28013,G__27979_28014);

goog.object.set(clojure.data.Diff,"_",true);

var G__27980_28017 = clojure.data.diff_similar;
var G__27981_28018 = "_";
var G__27982_28019 = ((function (G__27980_28017,G__27981_28018){
return (function (a,b){
var fexpr__27990 = (function (){var G__27991 = clojure.data.equality_partition(a);
var G__27991__$1 = (((G__27991 instanceof cljs.core.Keyword))?G__27991.fqn:null);
switch (G__27991__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27991__$1)].join('')));

}
})();
return (fexpr__27990.cljs$core$IFn$_invoke$arity$2 ? fexpr__27990.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__27990.call(null,a,b));
});})(G__27980_28017,G__27981_28018))
;
goog.object.set(G__27980_28017,G__27981_28018,G__27982_28019);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
