goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_from$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_from["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_to$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_to["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_toggles["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_timings["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_delays["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__36001){
var vec__36002 = p__36001;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36002,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36002,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__3911__auto__ = delay;
if(cljs.core.truth_(and__3911__auto__)){
return (delay > (0));
} else {
return and__3911__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})())].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.get_duration["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.init_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.start_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.finish_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__34866__auto__ = (0);
while(true){
if((i__34866__auto__ < n__4376__auto__)){
var map__36016_36027 = (self__.items[i__34866__auto__]);
var map__36016_36028__$1 = ((((!((map__36016_36027 == null)))?(((((map__36016_36027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36016_36027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36016_36027):map__36016_36027);
var el_36029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016_36028__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_36030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016_36028__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_36029,from_36030);

var G__36034 = (i__34866__auto__ + (1));
i__34866__auto__ = G__36034;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__34866__auto__ = (0);
while(true){
if((i__34866__auto__ < n__4376__auto__)){
var map__36018_36035 = (self__.items[i__34866__auto__]);
var map__36018_36036__$1 = ((((!((map__36018_36035 == null)))?(((((map__36018_36035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36018_36035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36018_36035):map__36018_36035);
var el_36037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018_36036__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_36038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018_36036__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_36039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018_36036__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_36038["transition"] = transition_36039);

goog.style.setStyle(el_36037,to_36038);

var G__36040 = (i__34866__auto__ + (1));
i__34866__auto__ = G__36040;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__34866__auto__ = (0);
while(true){
if((i__34866__auto__ < n__4376__auto__)){
var map__36020_36043 = (self__.items[i__34866__auto__]);
var map__36020_36044__$1 = ((((!((map__36020_36043 == null)))?(((((map__36020_36043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36020_36043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36020_36043):map__36020_36043);
var el_36045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36020_36044__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_36046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36020_36044__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_36046["transition"] = null);

goog.style.setStyle(el_36045,toggles_36046);

var G__36047 = (i__34866__auto__ + (1));
i__34866__auto__ = G__36047;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/Animator");
});

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12143__auto__,k__12144__auto__){
var self__ = this;
var this__12143__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12143__auto____$1,k__12144__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12145__auto__,k36050,else__12146__auto__){
var self__ = this;
var this__12145__auto____$1 = this;
var G__36054 = k36050;
var G__36054__$1 = (((G__36054 instanceof cljs.core.Keyword))?G__36054.fqn:null);
switch (G__36054__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36050,else__12146__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12157__auto__,writer__12158__auto__,opts__12159__auto__){
var self__ = this;
var this__12157__auto____$1 = this;
var pr_pair__12160__auto__ = ((function (this__12157__auto____$1){
return (function (keyval__12161__auto__){
return cljs.core.pr_sequential_writer(writer__12158__auto__,cljs.core.pr_writer,""," ","",opts__12159__auto__,keyval__12161__auto__);
});})(this__12157__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12158__auto__,pr_pair__12160__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__12159__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36049){
var self__ = this;
var G__36049__$1 = this;
return (new cljs.core.RecordIter((0),G__36049__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12141__auto__){
var self__ = this;
var this__12141__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12138__auto__){
var self__ = this;
var this__12138__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12147__auto__){
var self__ = this;
var this__12147__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12139__auto__){
var self__ = this;
var this__12139__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__36056 = ((function (h__4030__auto__,this__12139__auto____$1){
return (function (coll__12140__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__12140__auto__));
});})(h__4030__auto__,this__12139__auto____$1))
;
return fexpr__36056(this__12139__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36051,other36052){
var self__ = this;
var this36051__$1 = this;
return ((!((other36052 == null))) && ((this36051__$1.constructor === other36052.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36051__$1.el,other36052.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36051__$1.from,other36052.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36051__$1.to,other36052.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36051__$1.toggles,other36052.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36051__$1.transition,other36052.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36051__$1.__extmap,other36052.__extmap)));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12152__auto__,k__12153__auto__){
var self__ = this;
var this__12152__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__12153__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12152__auto____$1),self__.__meta),k__12153__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12153__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12150__auto__,k__12151__auto__,G__36049){
var self__ = this;
var this__12150__auto____$1 = this;
var pred__36057 = cljs.core.keyword_identical_QMARK_;
var expr__36058 = k__12151__auto__;
if(cljs.core.truth_((function (){var G__36061 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__36062 = expr__36058;
return (pred__36057.cljs$core$IFn$_invoke$arity$2 ? pred__36057.cljs$core$IFn$_invoke$arity$2(G__36061,G__36062) : pred__36057.call(null,G__36061,G__36062));
})())){
return (new shadow.animate.AnimationStep(G__36049,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36064 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__36065 = expr__36058;
return (pred__36057.cljs$core$IFn$_invoke$arity$2 ? pred__36057.cljs$core$IFn$_invoke$arity$2(G__36064,G__36065) : pred__36057.call(null,G__36064,G__36065));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__36049,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36066 = new cljs.core.Keyword(null,"to","to",192099007);
var G__36067 = expr__36058;
return (pred__36057.cljs$core$IFn$_invoke$arity$2 ? pred__36057.cljs$core$IFn$_invoke$arity$2(G__36066,G__36067) : pred__36057.call(null,G__36066,G__36067));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__36049,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36068 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__36069 = expr__36058;
return (pred__36057.cljs$core$IFn$_invoke$arity$2 ? pred__36057.cljs$core$IFn$_invoke$arity$2(G__36068,G__36069) : pred__36057.call(null,G__36068,G__36069));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__36049,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36070 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__36071 = expr__36058;
return (pred__36057.cljs$core$IFn$_invoke$arity$2 ? pred__36057.cljs$core$IFn$_invoke$arity$2(G__36070,G__36071) : pred__36057.call(null,G__36070,G__36071));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__36049,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12151__auto__,G__36049),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12155__auto__){
var self__ = this;
var this__12155__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12142__auto__,G__36049){
var self__ = this;
var this__12142__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__36049,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12148__auto__,entry__12149__auto__){
var self__ = this;
var this__12148__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12149__auto__)){
return cljs.core._assoc(this__12148__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12149__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12149__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12148__auto____$1,entry__12149__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.animate/AnimationStep");
});

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__36053){
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__36053),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__36053),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__36053),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__36053),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__36053),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36053,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0))),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function shadow$animate$setup_$_iter__36127(s__36128){
return (new cljs.core.LazySeq(null,(function (){
var s__36128__$1 = s__36128;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__36128__$1);
if(temp__5457__auto__){
var s__36128__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36128__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__36128__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__36130 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__36129 = (0);
while(true){
if((i__36129 < size__4291__auto__)){
var vec__36131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__36129);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(1),null);
cljs.core.chunk_append(b__36130,(function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__36139 = (i__36129 + (1));
i__36129 = G__36139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36130),shadow$animate$setup_$_iter__36127(cljs.core.chunk_rest(s__36128__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36130),null);
}
} else {
var vec__36135 = cljs.core.first(s__36128__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(1),null);
return cljs.core.cons((function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__36127(cljs.core.rest(s__36128__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__32906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto__){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto__){
return (function (state_36146){
var state_val_36147 = (state_36146[(1)]);
if((state_val_36147 === (1))){
var inst_36140 = shadow.animate.get_duration(animator);
var inst_36141 = cljs.core.async.timeout(inst_36140);
var state_36146__$1 = state_36146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36146__$1,(2),inst_36141);
} else {
if((state_val_36147 === (2))){
var inst_36143 = (state_36146[(2)]);
var inst_36144 = shadow.animate.finish_BANG_(animator);
var state_36146__$1 = (function (){var statearr_36148 = state_36146;
(statearr_36148[(7)] = inst_36143);

(statearr_36148[(8)] = inst_36144);

return statearr_36148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36146__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__32906__auto__))
;
return ((function (switch__32732__auto__,c__32906__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__32733__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__32733__auto____0 = (function (){
var statearr_36149 = [null,null,null,null,null,null,null,null,null];
(statearr_36149[(0)] = shadow$animate$continue_BANG__$_state_machine__32733__auto__);

(statearr_36149[(1)] = (1));

return statearr_36149;
});
var shadow$animate$continue_BANG__$_state_machine__32733__auto____1 = (function (state_36146){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_36146);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e36150){if((e36150 instanceof Object)){
var ex__32736__auto__ = e36150;
var statearr_36151_36153 = state_36146;
(statearr_36151_36153[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36154 = state_36146;
state_36146 = G__36154;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__32733__auto__ = function(state_36146){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__32733__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__32733__auto____1.call(this,state_36146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$animate$continue_BANG__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__32733__auto____0;
shadow$animate$continue_BANG__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__32733__auto____1;
return shadow$animate$continue_BANG__$_state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto__))
})();
var state__32908__auto__ = (function (){var statearr_36152 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_36152[(6)] = c__32906__auto__);

return statearr_36152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto__))
);

return c__32906__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
shadow.animate.init_BANG_(animator);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__36156 = arguments.length;
switch (G__36156) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate36157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36157 = (function (attr,from,to,timing,delay,meta36158){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta36158 = meta36158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate36157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36159,meta36158__$1){
var self__ = this;
var _36159__$1 = this;
return (new shadow.animate.t_shadow$animate36157(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta36158__$1));
});

shadow.animate.t_shadow$animate36157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36159){
var self__ = this;
var _36159__$1 = this;
return self__.meta36158;
});

shadow.animate.t_shadow$animate36157.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate36157.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate36157.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate36157.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36157.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate36157.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate36157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta36158","meta36158",-626328086,null)], null);
});

shadow.animate.t_shadow$animate36157.cljs$lang$type = true;

shadow.animate.t_shadow$animate36157.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36157";

shadow.animate.t_shadow$animate36157.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate36157");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate36157.
 */
shadow.animate.__GT_t_shadow$animate36157 = (function shadow$animate$__GT_t_shadow$animate36157(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta36158){
return (new shadow.animate.t_shadow$animate36157(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta36158));
});

}

return (new shadow.animate.t_shadow$animate36157(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if(typeof shadow.animate.t_shadow$animate36161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36161 = (function (attr,from,to,meta36162){
this.attr = attr;
this.from = from;
this.to = to;
this.meta36162 = meta36162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate36161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36163,meta36162__$1){
var self__ = this;
var _36163__$1 = this;
return (new shadow.animate.t_shadow$animate36161(self__.attr,self__.from,self__.to,meta36162__$1));
});

shadow.animate.t_shadow$animate36161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36163){
var self__ = this;
var _36163__$1 = this;
return self__.meta36162;
});

shadow.animate.t_shadow$animate36161.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate36161.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36161.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate36161.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate36161.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36161.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta36162","meta36162",2029266815,null)], null);
});

shadow.animate.t_shadow$animate36161.cljs$lang$type = true;

shadow.animate.t_shadow$animate36161.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36161";

shadow.animate.t_shadow$animate36161.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate36161");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate36161.
 */
shadow.animate.__GT_t_shadow$animate36161 = (function shadow$animate$toggle_$___GT_t_shadow$animate36161(attr__$1,from__$1,to__$1,meta36162){
return (new shadow.animate.t_shadow$animate36161(attr__$1,from__$1,to__$1,meta36162));
});

}

return (new shadow.animate.t_shadow$animate36161(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__36165 = arguments.length;
switch (G__36165) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if(typeof shadow.animate.t_shadow$animate36166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36166 = (function (attrs,meta36167){
this.attrs = attrs;
this.meta36167 = meta36167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate36166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36168,meta36167__$1){
var self__ = this;
var _36168__$1 = this;
return (new shadow.animate.t_shadow$animate36166(self__.attrs,meta36167__$1));
});

shadow.animate.t_shadow$animate36166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36168){
var self__ = this;
var _36168__$1 = this;
return self__.meta36167;
});

shadow.animate.t_shadow$animate36166.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate36166.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36166.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate36166.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36166.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36166.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36167","meta36167",937164420,null)], null);
});

shadow.animate.t_shadow$animate36166.cljs$lang$type = true;

shadow.animate.t_shadow$animate36166.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36166";

shadow.animate.t_shadow$animate36166.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate36166");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate36166.
 */
shadow.animate.__GT_t_shadow$animate36166 = (function shadow$animate$__GT_t_shadow$animate36166(attrs__$1,meta36167){
return (new shadow.animate.t_shadow$animate36166(attrs__$1,meta36167));
});

}

return (new shadow.animate.t_shadow$animate36166(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if(typeof shadow.animate.t_shadow$animate36170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36170 = (function (attr,meta36171){
this.attr = attr;
this.meta36171 = meta36171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate36170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36172,meta36171__$1){
var self__ = this;
var _36172__$1 = this;
return (new shadow.animate.t_shadow$animate36170(self__.attr,meta36171__$1));
});

shadow.animate.t_shadow$animate36170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36172){
var self__ = this;
var _36172__$1 = this;
return self__.meta36171;
});

shadow.animate.t_shadow$animate36170.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate36170.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36170.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36170.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate36170.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36170.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta36171","meta36171",904461971,null)], null);
});

shadow.animate.t_shadow$animate36170.cljs$lang$type = true;

shadow.animate.t_shadow$animate36170.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36170";

shadow.animate.t_shadow$animate36170.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate36170");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate36170.
 */
shadow.animate.__GT_t_shadow$animate36170 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate36170(attr__$1,meta36171){
return (new shadow.animate.t_shadow$animate36170(attr__$1,meta36171));
});

}

return (new shadow.animate.t_shadow$animate36170(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36177 = arguments.length;
var i__4500__auto___36178 = (0);
while(true){
if((i__4500__auto___36178 < len__4499__auto___36177)){
args__4502__auto__.push((arguments[i__4500__auto___36178]));

var G__36179 = (i__4500__auto___36178 + (1));
i__4500__auto___36178 = G__36179;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5455__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var adef = temp__5455__auto__;
var G__36180 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__36181 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__36182 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__36183 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__36184 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__36185 = cljs.core.rest(transitions__$1);
to = G__36180;
from = G__36181;
toggles = G__36182;
timings = G__36183;
delays = G__36184;
transitions__$1 = G__36185;
continue;
} else {
if(typeof shadow.animate.t_shadow$animate36174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36174 = (function (transitions,to,from,toggles,timings,delays,temp__5455__auto__,meta36175){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5455__auto__ = temp__5455__auto__;
this.meta36175 = meta36175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate36174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_36176,meta36175__$1){
var self__ = this;
var _36176__$1 = this;
return (new shadow.animate.t_shadow$animate36174(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5455__auto__,meta36175__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate36174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_36176){
var self__ = this;
var _36176__$1 = this;
return self__.meta36175;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate36174.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate36174.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate36174.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate36174.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate36174.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate36174.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate36174.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"meta36175","meta36175",-885442709,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate36174.cljs$lang$type = true;

shadow.animate.t_shadow$animate36174.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36174";

shadow.animate.t_shadow$animate36174.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate36174");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

/**
 * Positional factory function for shadow.animate/t_shadow$animate36174.
 */
shadow.animate.__GT_t_shadow$animate36174 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function shadow$animate$__GT_t_shadow$animate36174(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta36175){
return (new shadow.animate.t_shadow$animate36174(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta36175));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

}

return (new shadow.animate.t_shadow$animate36174(transitions__$1,to,from,toggles,timings,delays,temp__5455__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.animate.combine.cljs$lang$applyTo = (function (seq36173){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36173));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__36187 = arguments.length;
switch (G__36187) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__36190 = arguments.length;
switch (G__36190) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__36193 = arguments.length;
switch (G__36193) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate36194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36194 = (function (from,to,timing,delay,meta36195){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta36195 = meta36195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate36194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36196,meta36195__$1){
var self__ = this;
var _36196__$1 = this;
return (new shadow.animate.t_shadow$animate36194(self__.from,self__.to,self__.timing,self__.delay,meta36195__$1));
});

shadow.animate.t_shadow$animate36194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36196){
var self__ = this;
var _36196__$1 = this;
return self__.meta36195;
});

shadow.animate.t_shadow$animate36194.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate36194.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate36194.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate36194.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate36194.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36194.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate36194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta36195","meta36195",1279014102,null)], null);
});

shadow.animate.t_shadow$animate36194.cljs$lang$type = true;

shadow.animate.t_shadow$animate36194.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36194";

shadow.animate.t_shadow$animate36194.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate36194");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate36194.
 */
shadow.animate.__GT_t_shadow$animate36194 = (function shadow$animate$__GT_t_shadow$animate36194(from__$1,to__$1,timing__$1,delay__$1,meta36195){
return (new shadow.animate.t_shadow$animate36194(from__$1,to__$1,timing__$1,delay__$1,meta36195));
});

}

return (new shadow.animate.t_shadow$animate36194(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__36199 = arguments.length;
switch (G__36199) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate36200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36200 = (function (from,to,timing,delay,meta36201){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta36201 = meta36201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate36200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36202,meta36201__$1){
var self__ = this;
var _36202__$1 = this;
return (new shadow.animate.t_shadow$animate36200(self__.from,self__.to,self__.timing,self__.delay,meta36201__$1));
});

shadow.animate.t_shadow$animate36200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36202){
var self__ = this;
var _36202__$1 = this;
return self__.meta36201;
});

shadow.animate.t_shadow$animate36200.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate36200.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate36200.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate36200.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate36200.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate36200.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate36200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta36201","meta36201",-1158549768,null)], null);
});

shadow.animate.t_shadow$animate36200.cljs$lang$type = true;

shadow.animate.t_shadow$animate36200.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36200";

shadow.animate.t_shadow$animate36200.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate36200");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate36200.
 */
shadow.animate.__GT_t_shadow$animate36200 = (function shadow$animate$__GT_t_shadow$animate36200(from__$1,to__$1,timing__$1,delay__$1,meta36201){
return (new shadow.animate.t_shadow$animate36200(from__$1,to__$1,timing__$1,delay__$1,meta36201));
});

}

return (new shadow.animate.t_shadow$animate36200(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map
