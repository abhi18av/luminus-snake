goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32964 = arguments.length;
switch (G__32964) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32965 = (function (f,blockable,meta32966){
this.f = f;
this.blockable = blockable;
this.meta32966 = meta32966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32967,meta32966__$1){
var self__ = this;
var _32967__$1 = this;
return (new cljs.core.async.t_cljs$core$async32965(self__.f,self__.blockable,meta32966__$1));
});

cljs.core.async.t_cljs$core$async32965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32967){
var self__ = this;
var _32967__$1 = this;
return self__.meta32966;
});

cljs.core.async.t_cljs$core$async32965.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32965.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32966","meta32966",-29762057,null)], null);
});

cljs.core.async.t_cljs$core$async32965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32965";

cljs.core.async.t_cljs$core$async32965.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32965");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32965.
 */
cljs.core.async.__GT_t_cljs$core$async32965 = (function cljs$core$async$__GT_t_cljs$core$async32965(f__$1,blockable__$1,meta32966){
return (new cljs.core.async.t_cljs$core$async32965(f__$1,blockable__$1,meta32966));
});

}

return (new cljs.core.async.t_cljs$core$async32965(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32971 = arguments.length;
switch (G__32971) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32974 = arguments.length;
switch (G__32974) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32977 = arguments.length;
switch (G__32977) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32979 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32979) : fn1.call(null,val_32979));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32979,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32979) : fn1.call(null,val_32979));
});})(val_32979,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32981 = arguments.length;
switch (G__32981) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___32983 = n;
var x_32984 = (0);
while(true){
if((x_32984 < n__4376__auto___32983)){
(a[x_32984] = (0));

var G__32985 = (x_32984 + (1));
x_32984 = G__32985;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__32986 = (i + (1));
i = G__32986;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async32987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32987 = (function (flag,meta32988){
this.flag = flag;
this.meta32988 = meta32988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32989,meta32988__$1){
var self__ = this;
var _32989__$1 = this;
return (new cljs.core.async.t_cljs$core$async32987(self__.flag,meta32988__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32989){
var self__ = this;
var _32989__$1 = this;
return self__.meta32988;
});})(flag))
;

cljs.core.async.t_cljs$core$async32987.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32987.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32987.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32988","meta32988",1848409525,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32987";

cljs.core.async.t_cljs$core$async32987.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32987");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32987.
 */
cljs.core.async.__GT_t_cljs$core$async32987 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32987(flag__$1,meta32988){
return (new cljs.core.async.t_cljs$core$async32987(flag__$1,meta32988));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32987(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32990 = (function (flag,cb,meta32991){
this.flag = flag;
this.cb = cb;
this.meta32991 = meta32991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32992,meta32991__$1){
var self__ = this;
var _32992__$1 = this;
return (new cljs.core.async.t_cljs$core$async32990(self__.flag,self__.cb,meta32991__$1));
});

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32992){
var self__ = this;
var _32992__$1 = this;
return self__.meta32991;
});

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32991","meta32991",-327746590,null)], null);
});

cljs.core.async.t_cljs$core$async32990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32990";

cljs.core.async.t_cljs$core$async32990.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async32990");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32990.
 */
cljs.core.async.__GT_t_cljs$core$async32990 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32990(flag__$1,cb__$1,meta32991){
return (new cljs.core.async.t_cljs$core$async32990(flag__$1,cb__$1,meta32991));
});

}

return (new cljs.core.async.t_cljs$core$async32990(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32993_SHARP_){
var G__32995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32993_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32995) : fret.call(null,G__32995));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32994_SHARP_){
var G__32996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32994_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32996) : fret.call(null,G__32996));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32997 = (i + (1));
i = G__32997;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33003 = arguments.length;
var i__4500__auto___33004 = (0);
while(true){
if((i__4500__auto___33004 < len__4499__auto___33003)){
args__4502__auto__.push((arguments[i__4500__auto___33004]));

var G__33005 = (i__4500__auto___33004 + (1));
i__4500__auto___33004 = G__33005;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33000){
var map__33001 = p__33000;
var map__33001__$1 = ((((!((map__33001 == null)))?(((((map__33001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33001):map__33001);
var opts = map__33001__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32998){
var G__32999 = cljs.core.first(seq32998);
var seq32998__$1 = cljs.core.next(seq32998);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32999,seq32998__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33007 = arguments.length;
switch (G__33007) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32906__auto___33053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___33053){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___33053){
return (function (state_33031){
var state_val_33032 = (state_33031[(1)]);
if((state_val_33032 === (7))){
var inst_33027 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33033_33054 = state_33031__$1;
(statearr_33033_33054[(2)] = inst_33027);

(statearr_33033_33054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (1))){
var state_33031__$1 = state_33031;
var statearr_33034_33055 = state_33031__$1;
(statearr_33034_33055[(2)] = null);

(statearr_33034_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (4))){
var inst_33010 = (state_33031[(7)]);
var inst_33010__$1 = (state_33031[(2)]);
var inst_33011 = (inst_33010__$1 == null);
var state_33031__$1 = (function (){var statearr_33035 = state_33031;
(statearr_33035[(7)] = inst_33010__$1);

return statearr_33035;
})();
if(cljs.core.truth_(inst_33011)){
var statearr_33036_33056 = state_33031__$1;
(statearr_33036_33056[(1)] = (5));

} else {
var statearr_33037_33057 = state_33031__$1;
(statearr_33037_33057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (13))){
var state_33031__$1 = state_33031;
var statearr_33038_33058 = state_33031__$1;
(statearr_33038_33058[(2)] = null);

(statearr_33038_33058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (6))){
var inst_33010 = (state_33031[(7)]);
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33031__$1,(11),to,inst_33010);
} else {
if((state_val_33032 === (3))){
var inst_33029 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33031__$1,inst_33029);
} else {
if((state_val_33032 === (12))){
var state_33031__$1 = state_33031;
var statearr_33039_33059 = state_33031__$1;
(statearr_33039_33059[(2)] = null);

(statearr_33039_33059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (2))){
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33031__$1,(4),from);
} else {
if((state_val_33032 === (11))){
var inst_33020 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
if(cljs.core.truth_(inst_33020)){
var statearr_33040_33060 = state_33031__$1;
(statearr_33040_33060[(1)] = (12));

} else {
var statearr_33041_33061 = state_33031__$1;
(statearr_33041_33061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (9))){
var state_33031__$1 = state_33031;
var statearr_33042_33062 = state_33031__$1;
(statearr_33042_33062[(2)] = null);

(statearr_33042_33062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (5))){
var state_33031__$1 = state_33031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33043_33063 = state_33031__$1;
(statearr_33043_33063[(1)] = (8));

} else {
var statearr_33044_33064 = state_33031__$1;
(statearr_33044_33064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (14))){
var inst_33025 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33045_33065 = state_33031__$1;
(statearr_33045_33065[(2)] = inst_33025);

(statearr_33045_33065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (10))){
var inst_33017 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33046_33066 = state_33031__$1;
(statearr_33046_33066[(2)] = inst_33017);

(statearr_33046_33066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (8))){
var inst_33014 = cljs.core.async.close_BANG_(to);
var state_33031__$1 = state_33031;
var statearr_33047_33067 = state_33031__$1;
(statearr_33047_33067[(2)] = inst_33014);

(statearr_33047_33067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__32906__auto___33053))
;
return ((function (switch__32732__auto__,c__32906__auto___33053){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_33048 = [null,null,null,null,null,null,null,null];
(statearr_33048[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_33048[(1)] = (1));

return statearr_33048;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_33031){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33031);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33049){if((e33049 instanceof Object)){
var ex__32736__auto__ = e33049;
var statearr_33050_33068 = state_33031;
(statearr_33050_33068[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33049;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33069 = state_33031;
state_33031 = G__33069;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_33031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_33031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___33053))
})();
var state__32908__auto__ = (function (){var statearr_33051 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33051[(6)] = c__32906__auto___33053);

return statearr_33051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___33053))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33070){
var vec__33071 = p__33070;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33071,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33071,(1),null);
var job = vec__33071;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32906__auto___33242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___33242,res,vec__33071,v,p,job,jobs,results){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___33242,res,vec__33071,v,p,job,jobs,results){
return (function (state_33078){
var state_val_33079 = (state_33078[(1)]);
if((state_val_33079 === (1))){
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33078__$1,(2),res,v);
} else {
if((state_val_33079 === (2))){
var inst_33075 = (state_33078[(2)]);
var inst_33076 = cljs.core.async.close_BANG_(res);
var state_33078__$1 = (function (){var statearr_33080 = state_33078;
(statearr_33080[(7)] = inst_33075);

return statearr_33080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33078__$1,inst_33076);
} else {
return null;
}
}
});})(c__32906__auto___33242,res,vec__33071,v,p,job,jobs,results))
;
return ((function (switch__32732__auto__,c__32906__auto___33242,res,vec__33071,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_33081 = [null,null,null,null,null,null,null,null];
(statearr_33081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_33081[(1)] = (1));

return statearr_33081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_33078){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33078);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33082){if((e33082 instanceof Object)){
var ex__32736__auto__ = e33082;
var statearr_33083_33243 = state_33078;
(statearr_33083_33243[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33244 = state_33078;
state_33078 = G__33244;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_33078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_33078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___33242,res,vec__33071,v,p,job,jobs,results))
})();
var state__32908__auto__ = (function (){var statearr_33084 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33084[(6)] = c__32906__auto___33242);

return statearr_33084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___33242,res,vec__33071,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33085){
var vec__33086 = p__33085;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(1),null);
var job = vec__33086;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___33245 = n;
var __33246 = (0);
while(true){
if((__33246 < n__4376__auto___33245)){
var G__33089_33247 = type;
var G__33089_33248__$1 = (((G__33089_33247 instanceof cljs.core.Keyword))?G__33089_33247.fqn:null);
switch (G__33089_33248__$1) {
case "compute":
var c__32906__auto___33250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33246,c__32906__auto___33250,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (__33246,c__32906__auto___33250,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async){
return (function (state_33102){
var state_val_33103 = (state_33102[(1)]);
if((state_val_33103 === (1))){
var state_33102__$1 = state_33102;
var statearr_33104_33251 = state_33102__$1;
(statearr_33104_33251[(2)] = null);

(statearr_33104_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (2))){
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33102__$1,(4),jobs);
} else {
if((state_val_33103 === (3))){
var inst_33100 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33102__$1,inst_33100);
} else {
if((state_val_33103 === (4))){
var inst_33092 = (state_33102[(2)]);
var inst_33093 = process(inst_33092);
var state_33102__$1 = state_33102;
if(cljs.core.truth_(inst_33093)){
var statearr_33105_33252 = state_33102__$1;
(statearr_33105_33252[(1)] = (5));

} else {
var statearr_33106_33253 = state_33102__$1;
(statearr_33106_33253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (5))){
var state_33102__$1 = state_33102;
var statearr_33107_33254 = state_33102__$1;
(statearr_33107_33254[(2)] = null);

(statearr_33107_33254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (6))){
var state_33102__$1 = state_33102;
var statearr_33108_33255 = state_33102__$1;
(statearr_33108_33255[(2)] = null);

(statearr_33108_33255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (7))){
var inst_33098 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33109_33256 = state_33102__$1;
(statearr_33109_33256[(2)] = inst_33098);

(statearr_33109_33256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33246,c__32906__auto___33250,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async))
;
return ((function (__33246,switch__32732__auto__,c__32906__auto___33250,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_33110 = [null,null,null,null,null,null,null];
(statearr_33110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_33110[(1)] = (1));

return statearr_33110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_33102){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33102);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33111){if((e33111 instanceof Object)){
var ex__32736__auto__ = e33111;
var statearr_33112_33257 = state_33102;
(statearr_33112_33257[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33258 = state_33102;
state_33102 = G__33258;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_33102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_33102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
;})(__33246,switch__32732__auto__,c__32906__auto___33250,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async))
})();
var state__32908__auto__ = (function (){var statearr_33113 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33113[(6)] = c__32906__auto___33250);

return statearr_33113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(__33246,c__32906__auto___33250,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async))
);


break;
case "async":
var c__32906__auto___33259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33246,c__32906__auto___33259,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (__33246,c__32906__auto___33259,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async){
return (function (state_33126){
var state_val_33127 = (state_33126[(1)]);
if((state_val_33127 === (1))){
var state_33126__$1 = state_33126;
var statearr_33128_33260 = state_33126__$1;
(statearr_33128_33260[(2)] = null);

(statearr_33128_33260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (2))){
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33126__$1,(4),jobs);
} else {
if((state_val_33127 === (3))){
var inst_33124 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33126__$1,inst_33124);
} else {
if((state_val_33127 === (4))){
var inst_33116 = (state_33126[(2)]);
var inst_33117 = async(inst_33116);
var state_33126__$1 = state_33126;
if(cljs.core.truth_(inst_33117)){
var statearr_33129_33261 = state_33126__$1;
(statearr_33129_33261[(1)] = (5));

} else {
var statearr_33130_33262 = state_33126__$1;
(statearr_33130_33262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (5))){
var state_33126__$1 = state_33126;
var statearr_33131_33263 = state_33126__$1;
(statearr_33131_33263[(2)] = null);

(statearr_33131_33263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (6))){
var state_33126__$1 = state_33126;
var statearr_33132_33264 = state_33126__$1;
(statearr_33132_33264[(2)] = null);

(statearr_33132_33264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (7))){
var inst_33122 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33133_33265 = state_33126__$1;
(statearr_33133_33265[(2)] = inst_33122);

(statearr_33133_33265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33246,c__32906__auto___33259,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async))
;
return ((function (__33246,switch__32732__auto__,c__32906__auto___33259,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_33134 = [null,null,null,null,null,null,null];
(statearr_33134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_33134[(1)] = (1));

return statearr_33134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_33126){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33126);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33135){if((e33135 instanceof Object)){
var ex__32736__auto__ = e33135;
var statearr_33136_33266 = state_33126;
(statearr_33136_33266[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33267 = state_33126;
state_33126 = G__33267;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_33126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_33126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
;})(__33246,switch__32732__auto__,c__32906__auto___33259,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async))
})();
var state__32908__auto__ = (function (){var statearr_33137 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33137[(6)] = c__32906__auto___33259);

return statearr_33137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(__33246,c__32906__auto___33259,G__33089_33247,G__33089_33248__$1,n__4376__auto___33245,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33089_33248__$1)].join('')));

}

var G__33268 = (__33246 + (1));
__33246 = G__33268;
continue;
} else {
}
break;
}

var c__32906__auto___33269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___33269,jobs,results,process,async){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___33269,jobs,results,process,async){
return (function (state_33159){
var state_val_33160 = (state_33159[(1)]);
if((state_val_33160 === (1))){
var state_33159__$1 = state_33159;
var statearr_33161_33270 = state_33159__$1;
(statearr_33161_33270[(2)] = null);

(statearr_33161_33270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (2))){
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33159__$1,(4),from);
} else {
if((state_val_33160 === (3))){
var inst_33157 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33159__$1,inst_33157);
} else {
if((state_val_33160 === (4))){
var inst_33140 = (state_33159[(7)]);
var inst_33140__$1 = (state_33159[(2)]);
var inst_33141 = (inst_33140__$1 == null);
var state_33159__$1 = (function (){var statearr_33162 = state_33159;
(statearr_33162[(7)] = inst_33140__$1);

return statearr_33162;
})();
if(cljs.core.truth_(inst_33141)){
var statearr_33163_33271 = state_33159__$1;
(statearr_33163_33271[(1)] = (5));

} else {
var statearr_33164_33272 = state_33159__$1;
(statearr_33164_33272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (5))){
var inst_33143 = cljs.core.async.close_BANG_(jobs);
var state_33159__$1 = state_33159;
var statearr_33165_33273 = state_33159__$1;
(statearr_33165_33273[(2)] = inst_33143);

(statearr_33165_33273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (6))){
var inst_33145 = (state_33159[(8)]);
var inst_33140 = (state_33159[(7)]);
var inst_33145__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33146 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33147 = [inst_33140,inst_33145__$1];
var inst_33148 = (new cljs.core.PersistentVector(null,2,(5),inst_33146,inst_33147,null));
var state_33159__$1 = (function (){var statearr_33166 = state_33159;
(statearr_33166[(8)] = inst_33145__$1);

return statearr_33166;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33159__$1,(8),jobs,inst_33148);
} else {
if((state_val_33160 === (7))){
var inst_33155 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33167_33274 = state_33159__$1;
(statearr_33167_33274[(2)] = inst_33155);

(statearr_33167_33274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (8))){
var inst_33145 = (state_33159[(8)]);
var inst_33150 = (state_33159[(2)]);
var state_33159__$1 = (function (){var statearr_33168 = state_33159;
(statearr_33168[(9)] = inst_33150);

return statearr_33168;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33159__$1,(9),results,inst_33145);
} else {
if((state_val_33160 === (9))){
var inst_33152 = (state_33159[(2)]);
var state_33159__$1 = (function (){var statearr_33169 = state_33159;
(statearr_33169[(10)] = inst_33152);

return statearr_33169;
})();
var statearr_33170_33275 = state_33159__$1;
(statearr_33170_33275[(2)] = null);

(statearr_33170_33275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__32906__auto___33269,jobs,results,process,async))
;
return ((function (switch__32732__auto__,c__32906__auto___33269,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_33171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_33171[(1)] = (1));

return statearr_33171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_33159){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33159);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33172){if((e33172 instanceof Object)){
var ex__32736__auto__ = e33172;
var statearr_33173_33276 = state_33159;
(statearr_33173_33276[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33277 = state_33159;
state_33159 = G__33277;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_33159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_33159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___33269,jobs,results,process,async))
})();
var state__32908__auto__ = (function (){var statearr_33174 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33174[(6)] = c__32906__auto___33269);

return statearr_33174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___33269,jobs,results,process,async))
);


var c__32906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto__,jobs,results,process,async){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto__,jobs,results,process,async){
return (function (state_33212){
var state_val_33213 = (state_33212[(1)]);
if((state_val_33213 === (7))){
var inst_33208 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33214_33278 = state_33212__$1;
(statearr_33214_33278[(2)] = inst_33208);

(statearr_33214_33278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (20))){
var state_33212__$1 = state_33212;
var statearr_33215_33279 = state_33212__$1;
(statearr_33215_33279[(2)] = null);

(statearr_33215_33279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (1))){
var state_33212__$1 = state_33212;
var statearr_33216_33280 = state_33212__$1;
(statearr_33216_33280[(2)] = null);

(statearr_33216_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (4))){
var inst_33177 = (state_33212[(7)]);
var inst_33177__$1 = (state_33212[(2)]);
var inst_33178 = (inst_33177__$1 == null);
var state_33212__$1 = (function (){var statearr_33217 = state_33212;
(statearr_33217[(7)] = inst_33177__$1);

return statearr_33217;
})();
if(cljs.core.truth_(inst_33178)){
var statearr_33218_33281 = state_33212__$1;
(statearr_33218_33281[(1)] = (5));

} else {
var statearr_33219_33282 = state_33212__$1;
(statearr_33219_33282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (15))){
var inst_33190 = (state_33212[(8)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33212__$1,(18),to,inst_33190);
} else {
if((state_val_33213 === (21))){
var inst_33203 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33220_33283 = state_33212__$1;
(statearr_33220_33283[(2)] = inst_33203);

(statearr_33220_33283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (13))){
var inst_33205 = (state_33212[(2)]);
var state_33212__$1 = (function (){var statearr_33221 = state_33212;
(statearr_33221[(9)] = inst_33205);

return statearr_33221;
})();
var statearr_33222_33284 = state_33212__$1;
(statearr_33222_33284[(2)] = null);

(statearr_33222_33284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (6))){
var inst_33177 = (state_33212[(7)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33212__$1,(11),inst_33177);
} else {
if((state_val_33213 === (17))){
var inst_33198 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
if(cljs.core.truth_(inst_33198)){
var statearr_33223_33285 = state_33212__$1;
(statearr_33223_33285[(1)] = (19));

} else {
var statearr_33224_33286 = state_33212__$1;
(statearr_33224_33286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (3))){
var inst_33210 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33212__$1,inst_33210);
} else {
if((state_val_33213 === (12))){
var inst_33187 = (state_33212[(10)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33212__$1,(14),inst_33187);
} else {
if((state_val_33213 === (2))){
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33212__$1,(4),results);
} else {
if((state_val_33213 === (19))){
var state_33212__$1 = state_33212;
var statearr_33225_33287 = state_33212__$1;
(statearr_33225_33287[(2)] = null);

(statearr_33225_33287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (11))){
var inst_33187 = (state_33212[(2)]);
var state_33212__$1 = (function (){var statearr_33226 = state_33212;
(statearr_33226[(10)] = inst_33187);

return statearr_33226;
})();
var statearr_33227_33288 = state_33212__$1;
(statearr_33227_33288[(2)] = null);

(statearr_33227_33288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (9))){
var state_33212__$1 = state_33212;
var statearr_33228_33289 = state_33212__$1;
(statearr_33228_33289[(2)] = null);

(statearr_33228_33289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (5))){
var state_33212__$1 = state_33212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33229_33290 = state_33212__$1;
(statearr_33229_33290[(1)] = (8));

} else {
var statearr_33230_33291 = state_33212__$1;
(statearr_33230_33291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (14))){
var inst_33192 = (state_33212[(11)]);
var inst_33190 = (state_33212[(8)]);
var inst_33190__$1 = (state_33212[(2)]);
var inst_33191 = (inst_33190__$1 == null);
var inst_33192__$1 = cljs.core.not(inst_33191);
var state_33212__$1 = (function (){var statearr_33231 = state_33212;
(statearr_33231[(11)] = inst_33192__$1);

(statearr_33231[(8)] = inst_33190__$1);

return statearr_33231;
})();
if(inst_33192__$1){
var statearr_33232_33292 = state_33212__$1;
(statearr_33232_33292[(1)] = (15));

} else {
var statearr_33233_33293 = state_33212__$1;
(statearr_33233_33293[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (16))){
var inst_33192 = (state_33212[(11)]);
var state_33212__$1 = state_33212;
var statearr_33234_33294 = state_33212__$1;
(statearr_33234_33294[(2)] = inst_33192);

(statearr_33234_33294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (10))){
var inst_33184 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33235_33295 = state_33212__$1;
(statearr_33235_33295[(2)] = inst_33184);

(statearr_33235_33295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (18))){
var inst_33195 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33236_33296 = state_33212__$1;
(statearr_33236_33296[(2)] = inst_33195);

(statearr_33236_33296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (8))){
var inst_33181 = cljs.core.async.close_BANG_(to);
var state_33212__$1 = state_33212;
var statearr_33237_33297 = state_33212__$1;
(statearr_33237_33297[(2)] = inst_33181);

(statearr_33237_33297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__32906__auto__,jobs,results,process,async))
;
return ((function (switch__32732__auto__,c__32906__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_33238 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__);

(statearr_33238[(1)] = (1));

return statearr_33238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1 = (function (state_33212){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33212);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33239){if((e33239 instanceof Object)){
var ex__32736__auto__ = e33239;
var statearr_33240_33298 = state_33212;
(statearr_33240_33298[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33299 = state_33212;
state_33212 = G__33299;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__ = function(state_33212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1.call(this,state_33212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto__,jobs,results,process,async))
})();
var state__32908__auto__ = (function (){var statearr_33241 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33241[(6)] = c__32906__auto__);

return statearr_33241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto__,jobs,results,process,async))
);

return c__32906__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33301 = arguments.length;
switch (G__33301) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33304 = arguments.length;
switch (G__33304) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33307 = arguments.length;
switch (G__33307) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32906__auto___33356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___33356,tc,fc){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___33356,tc,fc){
return (function (state_33333){
var state_val_33334 = (state_33333[(1)]);
if((state_val_33334 === (7))){
var inst_33329 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33335_33357 = state_33333__$1;
(statearr_33335_33357[(2)] = inst_33329);

(statearr_33335_33357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (1))){
var state_33333__$1 = state_33333;
var statearr_33336_33358 = state_33333__$1;
(statearr_33336_33358[(2)] = null);

(statearr_33336_33358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (4))){
var inst_33310 = (state_33333[(7)]);
var inst_33310__$1 = (state_33333[(2)]);
var inst_33311 = (inst_33310__$1 == null);
var state_33333__$1 = (function (){var statearr_33337 = state_33333;
(statearr_33337[(7)] = inst_33310__$1);

return statearr_33337;
})();
if(cljs.core.truth_(inst_33311)){
var statearr_33338_33359 = state_33333__$1;
(statearr_33338_33359[(1)] = (5));

} else {
var statearr_33339_33360 = state_33333__$1;
(statearr_33339_33360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (13))){
var state_33333__$1 = state_33333;
var statearr_33340_33361 = state_33333__$1;
(statearr_33340_33361[(2)] = null);

(statearr_33340_33361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (6))){
var inst_33310 = (state_33333[(7)]);
var inst_33316 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33310) : p.call(null,inst_33310));
var state_33333__$1 = state_33333;
if(cljs.core.truth_(inst_33316)){
var statearr_33341_33362 = state_33333__$1;
(statearr_33341_33362[(1)] = (9));

} else {
var statearr_33342_33363 = state_33333__$1;
(statearr_33342_33363[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (3))){
var inst_33331 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33333__$1,inst_33331);
} else {
if((state_val_33334 === (12))){
var state_33333__$1 = state_33333;
var statearr_33343_33364 = state_33333__$1;
(statearr_33343_33364[(2)] = null);

(statearr_33343_33364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (2))){
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33333__$1,(4),ch);
} else {
if((state_val_33334 === (11))){
var inst_33310 = (state_33333[(7)]);
var inst_33320 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33333__$1,(8),inst_33320,inst_33310);
} else {
if((state_val_33334 === (9))){
var state_33333__$1 = state_33333;
var statearr_33344_33365 = state_33333__$1;
(statearr_33344_33365[(2)] = tc);

(statearr_33344_33365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (5))){
var inst_33313 = cljs.core.async.close_BANG_(tc);
var inst_33314 = cljs.core.async.close_BANG_(fc);
var state_33333__$1 = (function (){var statearr_33345 = state_33333;
(statearr_33345[(8)] = inst_33313);

return statearr_33345;
})();
var statearr_33346_33366 = state_33333__$1;
(statearr_33346_33366[(2)] = inst_33314);

(statearr_33346_33366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (14))){
var inst_33327 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33347_33367 = state_33333__$1;
(statearr_33347_33367[(2)] = inst_33327);

(statearr_33347_33367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (10))){
var state_33333__$1 = state_33333;
var statearr_33348_33368 = state_33333__$1;
(statearr_33348_33368[(2)] = fc);

(statearr_33348_33368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (8))){
var inst_33322 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
if(cljs.core.truth_(inst_33322)){
var statearr_33349_33369 = state_33333__$1;
(statearr_33349_33369[(1)] = (12));

} else {
var statearr_33350_33370 = state_33333__$1;
(statearr_33350_33370[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__32906__auto___33356,tc,fc))
;
return ((function (switch__32732__auto__,c__32906__auto___33356,tc,fc){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_33351 = [null,null,null,null,null,null,null,null,null];
(statearr_33351[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_33351[(1)] = (1));

return statearr_33351;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_33333){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33333);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33352){if((e33352 instanceof Object)){
var ex__32736__auto__ = e33352;
var statearr_33353_33371 = state_33333;
(statearr_33353_33371[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33352;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33372 = state_33333;
state_33333 = G__33372;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_33333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_33333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___33356,tc,fc))
})();
var state__32908__auto__ = (function (){var statearr_33354 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33354[(6)] = c__32906__auto___33356);

return statearr_33354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___33356,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto__){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto__){
return (function (state_33393){
var state_val_33394 = (state_33393[(1)]);
if((state_val_33394 === (7))){
var inst_33389 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
var statearr_33395_33413 = state_33393__$1;
(statearr_33395_33413[(2)] = inst_33389);

(statearr_33395_33413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (1))){
var inst_33373 = init;
var state_33393__$1 = (function (){var statearr_33396 = state_33393;
(statearr_33396[(7)] = inst_33373);

return statearr_33396;
})();
var statearr_33397_33414 = state_33393__$1;
(statearr_33397_33414[(2)] = null);

(statearr_33397_33414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (4))){
var inst_33376 = (state_33393[(8)]);
var inst_33376__$1 = (state_33393[(2)]);
var inst_33377 = (inst_33376__$1 == null);
var state_33393__$1 = (function (){var statearr_33398 = state_33393;
(statearr_33398[(8)] = inst_33376__$1);

return statearr_33398;
})();
if(cljs.core.truth_(inst_33377)){
var statearr_33399_33415 = state_33393__$1;
(statearr_33399_33415[(1)] = (5));

} else {
var statearr_33400_33416 = state_33393__$1;
(statearr_33400_33416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (6))){
var inst_33373 = (state_33393[(7)]);
var inst_33376 = (state_33393[(8)]);
var inst_33380 = (state_33393[(9)]);
var inst_33380__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33373,inst_33376) : f.call(null,inst_33373,inst_33376));
var inst_33381 = cljs.core.reduced_QMARK_(inst_33380__$1);
var state_33393__$1 = (function (){var statearr_33401 = state_33393;
(statearr_33401[(9)] = inst_33380__$1);

return statearr_33401;
})();
if(inst_33381){
var statearr_33402_33417 = state_33393__$1;
(statearr_33402_33417[(1)] = (8));

} else {
var statearr_33403_33418 = state_33393__$1;
(statearr_33403_33418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (3))){
var inst_33391 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33393__$1,inst_33391);
} else {
if((state_val_33394 === (2))){
var state_33393__$1 = state_33393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33393__$1,(4),ch);
} else {
if((state_val_33394 === (9))){
var inst_33380 = (state_33393[(9)]);
var inst_33373 = inst_33380;
var state_33393__$1 = (function (){var statearr_33404 = state_33393;
(statearr_33404[(7)] = inst_33373);

return statearr_33404;
})();
var statearr_33405_33419 = state_33393__$1;
(statearr_33405_33419[(2)] = null);

(statearr_33405_33419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (5))){
var inst_33373 = (state_33393[(7)]);
var state_33393__$1 = state_33393;
var statearr_33406_33420 = state_33393__$1;
(statearr_33406_33420[(2)] = inst_33373);

(statearr_33406_33420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (10))){
var inst_33387 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
var statearr_33407_33421 = state_33393__$1;
(statearr_33407_33421[(2)] = inst_33387);

(statearr_33407_33421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (8))){
var inst_33380 = (state_33393[(9)]);
var inst_33383 = cljs.core.deref(inst_33380);
var state_33393__$1 = state_33393;
var statearr_33408_33422 = state_33393__$1;
(statearr_33408_33422[(2)] = inst_33383);

(statearr_33408_33422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__32906__auto__))
;
return ((function (switch__32732__auto__,c__32906__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32733__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32733__auto____0 = (function (){
var statearr_33409 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33409[(0)] = cljs$core$async$reduce_$_state_machine__32733__auto__);

(statearr_33409[(1)] = (1));

return statearr_33409;
});
var cljs$core$async$reduce_$_state_machine__32733__auto____1 = (function (state_33393){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33393);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33410){if((e33410 instanceof Object)){
var ex__32736__auto__ = e33410;
var statearr_33411_33423 = state_33393;
(statearr_33411_33423[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33424 = state_33393;
state_33393 = G__33424;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32733__auto__ = function(state_33393){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32733__auto____1.call(this,state_33393);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32733__auto____0;
cljs$core$async$reduce_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32733__auto____1;
return cljs$core$async$reduce_$_state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto__))
})();
var state__32908__auto__ = (function (){var statearr_33412 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33412[(6)] = c__32906__auto__);

return statearr_33412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto__))
);

return c__32906__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto__,f__$1){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto__,f__$1){
return (function (state_33430){
var state_val_33431 = (state_33430[(1)]);
if((state_val_33431 === (1))){
var inst_33425 = cljs.core.async.reduce(f__$1,init,ch);
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33430__$1,(2),inst_33425);
} else {
if((state_val_33431 === (2))){
var inst_33427 = (state_33430[(2)]);
var inst_33428 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33427) : f__$1.call(null,inst_33427));
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33430__$1,inst_33428);
} else {
return null;
}
}
});})(c__32906__auto__,f__$1))
;
return ((function (switch__32732__auto__,c__32906__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32733__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32733__auto____0 = (function (){
var statearr_33432 = [null,null,null,null,null,null,null];
(statearr_33432[(0)] = cljs$core$async$transduce_$_state_machine__32733__auto__);

(statearr_33432[(1)] = (1));

return statearr_33432;
});
var cljs$core$async$transduce_$_state_machine__32733__auto____1 = (function (state_33430){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33430);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33433){if((e33433 instanceof Object)){
var ex__32736__auto__ = e33433;
var statearr_33434_33436 = state_33430;
(statearr_33434_33436[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33437 = state_33430;
state_33430 = G__33437;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32733__auto__ = function(state_33430){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32733__auto____1.call(this,state_33430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32733__auto____0;
cljs$core$async$transduce_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32733__auto____1;
return cljs$core$async$transduce_$_state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto__,f__$1))
})();
var state__32908__auto__ = (function (){var statearr_33435 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33435[(6)] = c__32906__auto__);

return statearr_33435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto__,f__$1))
);

return c__32906__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33439 = arguments.length;
switch (G__33439) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto__){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto__){
return (function (state_33464){
var state_val_33465 = (state_33464[(1)]);
if((state_val_33465 === (7))){
var inst_33446 = (state_33464[(2)]);
var state_33464__$1 = state_33464;
var statearr_33466_33487 = state_33464__$1;
(statearr_33466_33487[(2)] = inst_33446);

(statearr_33466_33487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (1))){
var inst_33440 = cljs.core.seq(coll);
var inst_33441 = inst_33440;
var state_33464__$1 = (function (){var statearr_33467 = state_33464;
(statearr_33467[(7)] = inst_33441);

return statearr_33467;
})();
var statearr_33468_33488 = state_33464__$1;
(statearr_33468_33488[(2)] = null);

(statearr_33468_33488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (4))){
var inst_33441 = (state_33464[(7)]);
var inst_33444 = cljs.core.first(inst_33441);
var state_33464__$1 = state_33464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33464__$1,(7),ch,inst_33444);
} else {
if((state_val_33465 === (13))){
var inst_33458 = (state_33464[(2)]);
var state_33464__$1 = state_33464;
var statearr_33469_33489 = state_33464__$1;
(statearr_33469_33489[(2)] = inst_33458);

(statearr_33469_33489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (6))){
var inst_33449 = (state_33464[(2)]);
var state_33464__$1 = state_33464;
if(cljs.core.truth_(inst_33449)){
var statearr_33470_33490 = state_33464__$1;
(statearr_33470_33490[(1)] = (8));

} else {
var statearr_33471_33491 = state_33464__$1;
(statearr_33471_33491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (3))){
var inst_33462 = (state_33464[(2)]);
var state_33464__$1 = state_33464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33464__$1,inst_33462);
} else {
if((state_val_33465 === (12))){
var state_33464__$1 = state_33464;
var statearr_33472_33492 = state_33464__$1;
(statearr_33472_33492[(2)] = null);

(statearr_33472_33492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (2))){
var inst_33441 = (state_33464[(7)]);
var state_33464__$1 = state_33464;
if(cljs.core.truth_(inst_33441)){
var statearr_33473_33493 = state_33464__$1;
(statearr_33473_33493[(1)] = (4));

} else {
var statearr_33474_33494 = state_33464__$1;
(statearr_33474_33494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (11))){
var inst_33455 = cljs.core.async.close_BANG_(ch);
var state_33464__$1 = state_33464;
var statearr_33475_33495 = state_33464__$1;
(statearr_33475_33495[(2)] = inst_33455);

(statearr_33475_33495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (9))){
var state_33464__$1 = state_33464;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33476_33496 = state_33464__$1;
(statearr_33476_33496[(1)] = (11));

} else {
var statearr_33477_33497 = state_33464__$1;
(statearr_33477_33497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (5))){
var inst_33441 = (state_33464[(7)]);
var state_33464__$1 = state_33464;
var statearr_33478_33498 = state_33464__$1;
(statearr_33478_33498[(2)] = inst_33441);

(statearr_33478_33498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (10))){
var inst_33460 = (state_33464[(2)]);
var state_33464__$1 = state_33464;
var statearr_33479_33499 = state_33464__$1;
(statearr_33479_33499[(2)] = inst_33460);

(statearr_33479_33499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33465 === (8))){
var inst_33441 = (state_33464[(7)]);
var inst_33451 = cljs.core.next(inst_33441);
var inst_33441__$1 = inst_33451;
var state_33464__$1 = (function (){var statearr_33480 = state_33464;
(statearr_33480[(7)] = inst_33441__$1);

return statearr_33480;
})();
var statearr_33481_33500 = state_33464__$1;
(statearr_33481_33500[(2)] = null);

(statearr_33481_33500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__32906__auto__))
;
return ((function (switch__32732__auto__,c__32906__auto__){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_33482 = [null,null,null,null,null,null,null,null];
(statearr_33482[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_33482[(1)] = (1));

return statearr_33482;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_33464){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33464);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33483){if((e33483 instanceof Object)){
var ex__32736__auto__ = e33483;
var statearr_33484_33501 = state_33464;
(statearr_33484_33501[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33502 = state_33464;
state_33464 = G__33502;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_33464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_33464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto__))
})();
var state__32908__auto__ = (function (){var statearr_33485 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33485[(6)] = c__32906__auto__);

return statearr_33485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto__))
);

return c__32906__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33503 = (function (ch,cs,meta33504){
this.ch = ch;
this.cs = cs;
this.meta33504 = meta33504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33505,meta33504__$1){
var self__ = this;
var _33505__$1 = this;
return (new cljs.core.async.t_cljs$core$async33503(self__.ch,self__.cs,meta33504__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33505){
var self__ = this;
var _33505__$1 = this;
return self__.meta33504;
});})(cs))
;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33503.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33504","meta33504",927872549,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33503";

cljs.core.async.t_cljs$core$async33503.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async33503");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33503.
 */
cljs.core.async.__GT_t_cljs$core$async33503 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33503(ch__$1,cs__$1,meta33504){
return (new cljs.core.async.t_cljs$core$async33503(ch__$1,cs__$1,meta33504));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33503(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32906__auto___33725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___33725,cs,m,dchan,dctr,done){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___33725,cs,m,dchan,dctr,done){
return (function (state_33640){
var state_val_33641 = (state_33640[(1)]);
if((state_val_33641 === (7))){
var inst_33636 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33642_33726 = state_33640__$1;
(statearr_33642_33726[(2)] = inst_33636);

(statearr_33642_33726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (20))){
var inst_33539 = (state_33640[(7)]);
var inst_33551 = cljs.core.first(inst_33539);
var inst_33552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33551,(0),null);
var inst_33553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33551,(1),null);
var state_33640__$1 = (function (){var statearr_33643 = state_33640;
(statearr_33643[(8)] = inst_33552);

return statearr_33643;
})();
if(cljs.core.truth_(inst_33553)){
var statearr_33644_33727 = state_33640__$1;
(statearr_33644_33727[(1)] = (22));

} else {
var statearr_33645_33728 = state_33640__$1;
(statearr_33645_33728[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (27))){
var inst_33583 = (state_33640[(9)]);
var inst_33508 = (state_33640[(10)]);
var inst_33588 = (state_33640[(11)]);
var inst_33581 = (state_33640[(12)]);
var inst_33588__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33581,inst_33583);
var inst_33589 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33588__$1,inst_33508,done);
var state_33640__$1 = (function (){var statearr_33646 = state_33640;
(statearr_33646[(11)] = inst_33588__$1);

return statearr_33646;
})();
if(cljs.core.truth_(inst_33589)){
var statearr_33647_33729 = state_33640__$1;
(statearr_33647_33729[(1)] = (30));

} else {
var statearr_33648_33730 = state_33640__$1;
(statearr_33648_33730[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (1))){
var state_33640__$1 = state_33640;
var statearr_33649_33731 = state_33640__$1;
(statearr_33649_33731[(2)] = null);

(statearr_33649_33731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (24))){
var inst_33539 = (state_33640[(7)]);
var inst_33558 = (state_33640[(2)]);
var inst_33559 = cljs.core.next(inst_33539);
var inst_33517 = inst_33559;
var inst_33518 = null;
var inst_33519 = (0);
var inst_33520 = (0);
var state_33640__$1 = (function (){var statearr_33650 = state_33640;
(statearr_33650[(13)] = inst_33518);

(statearr_33650[(14)] = inst_33519);

(statearr_33650[(15)] = inst_33558);

(statearr_33650[(16)] = inst_33517);

(statearr_33650[(17)] = inst_33520);

return statearr_33650;
})();
var statearr_33651_33732 = state_33640__$1;
(statearr_33651_33732[(2)] = null);

(statearr_33651_33732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (39))){
var state_33640__$1 = state_33640;
var statearr_33655_33733 = state_33640__$1;
(statearr_33655_33733[(2)] = null);

(statearr_33655_33733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (4))){
var inst_33508 = (state_33640[(10)]);
var inst_33508__$1 = (state_33640[(2)]);
var inst_33509 = (inst_33508__$1 == null);
var state_33640__$1 = (function (){var statearr_33656 = state_33640;
(statearr_33656[(10)] = inst_33508__$1);

return statearr_33656;
})();
if(cljs.core.truth_(inst_33509)){
var statearr_33657_33734 = state_33640__$1;
(statearr_33657_33734[(1)] = (5));

} else {
var statearr_33658_33735 = state_33640__$1;
(statearr_33658_33735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (15))){
var inst_33518 = (state_33640[(13)]);
var inst_33519 = (state_33640[(14)]);
var inst_33517 = (state_33640[(16)]);
var inst_33520 = (state_33640[(17)]);
var inst_33535 = (state_33640[(2)]);
var inst_33536 = (inst_33520 + (1));
var tmp33652 = inst_33518;
var tmp33653 = inst_33519;
var tmp33654 = inst_33517;
var inst_33517__$1 = tmp33654;
var inst_33518__$1 = tmp33652;
var inst_33519__$1 = tmp33653;
var inst_33520__$1 = inst_33536;
var state_33640__$1 = (function (){var statearr_33659 = state_33640;
(statearr_33659[(13)] = inst_33518__$1);

(statearr_33659[(14)] = inst_33519__$1);

(statearr_33659[(18)] = inst_33535);

(statearr_33659[(16)] = inst_33517__$1);

(statearr_33659[(17)] = inst_33520__$1);

return statearr_33659;
})();
var statearr_33660_33736 = state_33640__$1;
(statearr_33660_33736[(2)] = null);

(statearr_33660_33736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (21))){
var inst_33562 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33664_33737 = state_33640__$1;
(statearr_33664_33737[(2)] = inst_33562);

(statearr_33664_33737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (31))){
var inst_33588 = (state_33640[(11)]);
var inst_33592 = done(null);
var inst_33593 = cljs.core.async.untap_STAR_(m,inst_33588);
var state_33640__$1 = (function (){var statearr_33665 = state_33640;
(statearr_33665[(19)] = inst_33592);

return statearr_33665;
})();
var statearr_33666_33738 = state_33640__$1;
(statearr_33666_33738[(2)] = inst_33593);

(statearr_33666_33738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (32))){
var inst_33583 = (state_33640[(9)]);
var inst_33582 = (state_33640[(20)]);
var inst_33581 = (state_33640[(12)]);
var inst_33580 = (state_33640[(21)]);
var inst_33595 = (state_33640[(2)]);
var inst_33596 = (inst_33583 + (1));
var tmp33661 = inst_33582;
var tmp33662 = inst_33581;
var tmp33663 = inst_33580;
var inst_33580__$1 = tmp33663;
var inst_33581__$1 = tmp33662;
var inst_33582__$1 = tmp33661;
var inst_33583__$1 = inst_33596;
var state_33640__$1 = (function (){var statearr_33667 = state_33640;
(statearr_33667[(9)] = inst_33583__$1);

(statearr_33667[(20)] = inst_33582__$1);

(statearr_33667[(22)] = inst_33595);

(statearr_33667[(12)] = inst_33581__$1);

(statearr_33667[(21)] = inst_33580__$1);

return statearr_33667;
})();
var statearr_33668_33739 = state_33640__$1;
(statearr_33668_33739[(2)] = null);

(statearr_33668_33739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (40))){
var inst_33608 = (state_33640[(23)]);
var inst_33612 = done(null);
var inst_33613 = cljs.core.async.untap_STAR_(m,inst_33608);
var state_33640__$1 = (function (){var statearr_33669 = state_33640;
(statearr_33669[(24)] = inst_33612);

return statearr_33669;
})();
var statearr_33670_33740 = state_33640__$1;
(statearr_33670_33740[(2)] = inst_33613);

(statearr_33670_33740[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (33))){
var inst_33599 = (state_33640[(25)]);
var inst_33601 = cljs.core.chunked_seq_QMARK_(inst_33599);
var state_33640__$1 = state_33640;
if(inst_33601){
var statearr_33671_33741 = state_33640__$1;
(statearr_33671_33741[(1)] = (36));

} else {
var statearr_33672_33742 = state_33640__$1;
(statearr_33672_33742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (13))){
var inst_33529 = (state_33640[(26)]);
var inst_33532 = cljs.core.async.close_BANG_(inst_33529);
var state_33640__$1 = state_33640;
var statearr_33673_33743 = state_33640__$1;
(statearr_33673_33743[(2)] = inst_33532);

(statearr_33673_33743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (22))){
var inst_33552 = (state_33640[(8)]);
var inst_33555 = cljs.core.async.close_BANG_(inst_33552);
var state_33640__$1 = state_33640;
var statearr_33674_33744 = state_33640__$1;
(statearr_33674_33744[(2)] = inst_33555);

(statearr_33674_33744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (36))){
var inst_33599 = (state_33640[(25)]);
var inst_33603 = cljs.core.chunk_first(inst_33599);
var inst_33604 = cljs.core.chunk_rest(inst_33599);
var inst_33605 = cljs.core.count(inst_33603);
var inst_33580 = inst_33604;
var inst_33581 = inst_33603;
var inst_33582 = inst_33605;
var inst_33583 = (0);
var state_33640__$1 = (function (){var statearr_33675 = state_33640;
(statearr_33675[(9)] = inst_33583);

(statearr_33675[(20)] = inst_33582);

(statearr_33675[(12)] = inst_33581);

(statearr_33675[(21)] = inst_33580);

return statearr_33675;
})();
var statearr_33676_33745 = state_33640__$1;
(statearr_33676_33745[(2)] = null);

(statearr_33676_33745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (41))){
var inst_33599 = (state_33640[(25)]);
var inst_33615 = (state_33640[(2)]);
var inst_33616 = cljs.core.next(inst_33599);
var inst_33580 = inst_33616;
var inst_33581 = null;
var inst_33582 = (0);
var inst_33583 = (0);
var state_33640__$1 = (function (){var statearr_33677 = state_33640;
(statearr_33677[(9)] = inst_33583);

(statearr_33677[(27)] = inst_33615);

(statearr_33677[(20)] = inst_33582);

(statearr_33677[(12)] = inst_33581);

(statearr_33677[(21)] = inst_33580);

return statearr_33677;
})();
var statearr_33678_33746 = state_33640__$1;
(statearr_33678_33746[(2)] = null);

(statearr_33678_33746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (43))){
var state_33640__$1 = state_33640;
var statearr_33679_33747 = state_33640__$1;
(statearr_33679_33747[(2)] = null);

(statearr_33679_33747[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (29))){
var inst_33624 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33680_33748 = state_33640__$1;
(statearr_33680_33748[(2)] = inst_33624);

(statearr_33680_33748[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (44))){
var inst_33633 = (state_33640[(2)]);
var state_33640__$1 = (function (){var statearr_33681 = state_33640;
(statearr_33681[(28)] = inst_33633);

return statearr_33681;
})();
var statearr_33682_33749 = state_33640__$1;
(statearr_33682_33749[(2)] = null);

(statearr_33682_33749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (6))){
var inst_33572 = (state_33640[(29)]);
var inst_33571 = cljs.core.deref(cs);
var inst_33572__$1 = cljs.core.keys(inst_33571);
var inst_33573 = cljs.core.count(inst_33572__$1);
var inst_33574 = cljs.core.reset_BANG_(dctr,inst_33573);
var inst_33579 = cljs.core.seq(inst_33572__$1);
var inst_33580 = inst_33579;
var inst_33581 = null;
var inst_33582 = (0);
var inst_33583 = (0);
var state_33640__$1 = (function (){var statearr_33683 = state_33640;
(statearr_33683[(9)] = inst_33583);

(statearr_33683[(20)] = inst_33582);

(statearr_33683[(29)] = inst_33572__$1);

(statearr_33683[(12)] = inst_33581);

(statearr_33683[(30)] = inst_33574);

(statearr_33683[(21)] = inst_33580);

return statearr_33683;
})();
var statearr_33684_33750 = state_33640__$1;
(statearr_33684_33750[(2)] = null);

(statearr_33684_33750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (28))){
var inst_33580 = (state_33640[(21)]);
var inst_33599 = (state_33640[(25)]);
var inst_33599__$1 = cljs.core.seq(inst_33580);
var state_33640__$1 = (function (){var statearr_33685 = state_33640;
(statearr_33685[(25)] = inst_33599__$1);

return statearr_33685;
})();
if(inst_33599__$1){
var statearr_33686_33751 = state_33640__$1;
(statearr_33686_33751[(1)] = (33));

} else {
var statearr_33687_33752 = state_33640__$1;
(statearr_33687_33752[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (25))){
var inst_33583 = (state_33640[(9)]);
var inst_33582 = (state_33640[(20)]);
var inst_33585 = (inst_33583 < inst_33582);
var inst_33586 = inst_33585;
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33586)){
var statearr_33688_33753 = state_33640__$1;
(statearr_33688_33753[(1)] = (27));

} else {
var statearr_33689_33754 = state_33640__$1;
(statearr_33689_33754[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (34))){
var state_33640__$1 = state_33640;
var statearr_33690_33755 = state_33640__$1;
(statearr_33690_33755[(2)] = null);

(statearr_33690_33755[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (17))){
var state_33640__$1 = state_33640;
var statearr_33691_33756 = state_33640__$1;
(statearr_33691_33756[(2)] = null);

(statearr_33691_33756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (3))){
var inst_33638 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33640__$1,inst_33638);
} else {
if((state_val_33641 === (12))){
var inst_33567 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33692_33757 = state_33640__$1;
(statearr_33692_33757[(2)] = inst_33567);

(statearr_33692_33757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (2))){
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33640__$1,(4),ch);
} else {
if((state_val_33641 === (23))){
var state_33640__$1 = state_33640;
var statearr_33693_33758 = state_33640__$1;
(statearr_33693_33758[(2)] = null);

(statearr_33693_33758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (35))){
var inst_33622 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33694_33759 = state_33640__$1;
(statearr_33694_33759[(2)] = inst_33622);

(statearr_33694_33759[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (19))){
var inst_33539 = (state_33640[(7)]);
var inst_33543 = cljs.core.chunk_first(inst_33539);
var inst_33544 = cljs.core.chunk_rest(inst_33539);
var inst_33545 = cljs.core.count(inst_33543);
var inst_33517 = inst_33544;
var inst_33518 = inst_33543;
var inst_33519 = inst_33545;
var inst_33520 = (0);
var state_33640__$1 = (function (){var statearr_33695 = state_33640;
(statearr_33695[(13)] = inst_33518);

(statearr_33695[(14)] = inst_33519);

(statearr_33695[(16)] = inst_33517);

(statearr_33695[(17)] = inst_33520);

return statearr_33695;
})();
var statearr_33696_33760 = state_33640__$1;
(statearr_33696_33760[(2)] = null);

(statearr_33696_33760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (11))){
var inst_33539 = (state_33640[(7)]);
var inst_33517 = (state_33640[(16)]);
var inst_33539__$1 = cljs.core.seq(inst_33517);
var state_33640__$1 = (function (){var statearr_33697 = state_33640;
(statearr_33697[(7)] = inst_33539__$1);

return statearr_33697;
})();
if(inst_33539__$1){
var statearr_33698_33761 = state_33640__$1;
(statearr_33698_33761[(1)] = (16));

} else {
var statearr_33699_33762 = state_33640__$1;
(statearr_33699_33762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (9))){
var inst_33569 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33700_33763 = state_33640__$1;
(statearr_33700_33763[(2)] = inst_33569);

(statearr_33700_33763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (5))){
var inst_33515 = cljs.core.deref(cs);
var inst_33516 = cljs.core.seq(inst_33515);
var inst_33517 = inst_33516;
var inst_33518 = null;
var inst_33519 = (0);
var inst_33520 = (0);
var state_33640__$1 = (function (){var statearr_33701 = state_33640;
(statearr_33701[(13)] = inst_33518);

(statearr_33701[(14)] = inst_33519);

(statearr_33701[(16)] = inst_33517);

(statearr_33701[(17)] = inst_33520);

return statearr_33701;
})();
var statearr_33702_33764 = state_33640__$1;
(statearr_33702_33764[(2)] = null);

(statearr_33702_33764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (14))){
var state_33640__$1 = state_33640;
var statearr_33703_33765 = state_33640__$1;
(statearr_33703_33765[(2)] = null);

(statearr_33703_33765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (45))){
var inst_33630 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33704_33766 = state_33640__$1;
(statearr_33704_33766[(2)] = inst_33630);

(statearr_33704_33766[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (26))){
var inst_33572 = (state_33640[(29)]);
var inst_33626 = (state_33640[(2)]);
var inst_33627 = cljs.core.seq(inst_33572);
var state_33640__$1 = (function (){var statearr_33705 = state_33640;
(statearr_33705[(31)] = inst_33626);

return statearr_33705;
})();
if(inst_33627){
var statearr_33706_33767 = state_33640__$1;
(statearr_33706_33767[(1)] = (42));

} else {
var statearr_33707_33768 = state_33640__$1;
(statearr_33707_33768[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (16))){
var inst_33539 = (state_33640[(7)]);
var inst_33541 = cljs.core.chunked_seq_QMARK_(inst_33539);
var state_33640__$1 = state_33640;
if(inst_33541){
var statearr_33708_33769 = state_33640__$1;
(statearr_33708_33769[(1)] = (19));

} else {
var statearr_33709_33770 = state_33640__$1;
(statearr_33709_33770[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (38))){
var inst_33619 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33710_33771 = state_33640__$1;
(statearr_33710_33771[(2)] = inst_33619);

(statearr_33710_33771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (30))){
var state_33640__$1 = state_33640;
var statearr_33711_33772 = state_33640__$1;
(statearr_33711_33772[(2)] = null);

(statearr_33711_33772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (10))){
var inst_33518 = (state_33640[(13)]);
var inst_33520 = (state_33640[(17)]);
var inst_33528 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33518,inst_33520);
var inst_33529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33528,(0),null);
var inst_33530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33528,(1),null);
var state_33640__$1 = (function (){var statearr_33712 = state_33640;
(statearr_33712[(26)] = inst_33529);

return statearr_33712;
})();
if(cljs.core.truth_(inst_33530)){
var statearr_33713_33773 = state_33640__$1;
(statearr_33713_33773[(1)] = (13));

} else {
var statearr_33714_33774 = state_33640__$1;
(statearr_33714_33774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (18))){
var inst_33565 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33715_33775 = state_33640__$1;
(statearr_33715_33775[(2)] = inst_33565);

(statearr_33715_33775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (42))){
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33640__$1,(45),dchan);
} else {
if((state_val_33641 === (37))){
var inst_33508 = (state_33640[(10)]);
var inst_33608 = (state_33640[(23)]);
var inst_33599 = (state_33640[(25)]);
var inst_33608__$1 = cljs.core.first(inst_33599);
var inst_33609 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33608__$1,inst_33508,done);
var state_33640__$1 = (function (){var statearr_33716 = state_33640;
(statearr_33716[(23)] = inst_33608__$1);

return statearr_33716;
})();
if(cljs.core.truth_(inst_33609)){
var statearr_33717_33776 = state_33640__$1;
(statearr_33717_33776[(1)] = (39));

} else {
var statearr_33718_33777 = state_33640__$1;
(statearr_33718_33777[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (8))){
var inst_33519 = (state_33640[(14)]);
var inst_33520 = (state_33640[(17)]);
var inst_33522 = (inst_33520 < inst_33519);
var inst_33523 = inst_33522;
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33523)){
var statearr_33719_33778 = state_33640__$1;
(statearr_33719_33778[(1)] = (10));

} else {
var statearr_33720_33779 = state_33640__$1;
(statearr_33720_33779[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__32906__auto___33725,cs,m,dchan,dctr,done))
;
return ((function (switch__32732__auto__,c__32906__auto___33725,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32733__auto__ = null;
var cljs$core$async$mult_$_state_machine__32733__auto____0 = (function (){
var statearr_33721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33721[(0)] = cljs$core$async$mult_$_state_machine__32733__auto__);

(statearr_33721[(1)] = (1));

return statearr_33721;
});
var cljs$core$async$mult_$_state_machine__32733__auto____1 = (function (state_33640){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33640);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33722){if((e33722 instanceof Object)){
var ex__32736__auto__ = e33722;
var statearr_33723_33780 = state_33640;
(statearr_33723_33780[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33781 = state_33640;
state_33640 = G__33781;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32733__auto__ = function(state_33640){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32733__auto____1.call(this,state_33640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32733__auto____0;
cljs$core$async$mult_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32733__auto____1;
return cljs$core$async$mult_$_state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___33725,cs,m,dchan,dctr,done))
})();
var state__32908__auto__ = (function (){var statearr_33724 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33724[(6)] = c__32906__auto___33725);

return statearr_33724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___33725,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33783 = arguments.length;
switch (G__33783) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33795 = arguments.length;
var i__4500__auto___33796 = (0);
while(true){
if((i__4500__auto___33796 < len__4499__auto___33795)){
args__4502__auto__.push((arguments[i__4500__auto___33796]));

var G__33797 = (i__4500__auto___33796 + (1));
i__4500__auto___33796 = G__33797;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33789){
var map__33790 = p__33789;
var map__33790__$1 = ((((!((map__33790 == null)))?(((((map__33790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33790):map__33790);
var opts = map__33790__$1;
var statearr_33792_33798 = state;
(statearr_33792_33798[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__33790,map__33790__$1,opts){
return (function (val){
var statearr_33793_33799 = state;
(statearr_33793_33799[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33790,map__33790__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_33794_33800 = state;
(statearr_33794_33800[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33785){
var G__33786 = cljs.core.first(seq33785);
var seq33785__$1 = cljs.core.next(seq33785);
var G__33787 = cljs.core.first(seq33785__$1);
var seq33785__$2 = cljs.core.next(seq33785__$1);
var G__33788 = cljs.core.first(seq33785__$2);
var seq33785__$3 = cljs.core.next(seq33785__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33786,G__33787,G__33788,seq33785__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33801 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33802){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33802 = meta33802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33803,meta33802__$1){
var self__ = this;
var _33803__$1 = this;
return (new cljs.core.async.t_cljs$core$async33801(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33802__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33803){
var self__ = this;
var _33803__$1 = this;
return self__.meta33802;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33801.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33801.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33802","meta33802",-1567864231,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33801";

cljs.core.async.t_cljs$core$async33801.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async33801");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33801.
 */
cljs.core.async.__GT_t_cljs$core$async33801 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33801(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33802){
return (new cljs.core.async.t_cljs$core$async33801(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33802));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33801(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32906__auto___33965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___33965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___33965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33905){
var state_val_33906 = (state_33905[(1)]);
if((state_val_33906 === (7))){
var inst_33820 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33907_33966 = state_33905__$1;
(statearr_33907_33966[(2)] = inst_33820);

(statearr_33907_33966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (20))){
var inst_33832 = (state_33905[(7)]);
var state_33905__$1 = state_33905;
var statearr_33908_33967 = state_33905__$1;
(statearr_33908_33967[(2)] = inst_33832);

(statearr_33908_33967[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (27))){
var state_33905__$1 = state_33905;
var statearr_33909_33968 = state_33905__$1;
(statearr_33909_33968[(2)] = null);

(statearr_33909_33968[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (1))){
var inst_33807 = (state_33905[(8)]);
var inst_33807__$1 = calc_state();
var inst_33809 = (inst_33807__$1 == null);
var inst_33810 = cljs.core.not(inst_33809);
var state_33905__$1 = (function (){var statearr_33910 = state_33905;
(statearr_33910[(8)] = inst_33807__$1);

return statearr_33910;
})();
if(inst_33810){
var statearr_33911_33969 = state_33905__$1;
(statearr_33911_33969[(1)] = (2));

} else {
var statearr_33912_33970 = state_33905__$1;
(statearr_33912_33970[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (24))){
var inst_33856 = (state_33905[(9)]);
var inst_33865 = (state_33905[(10)]);
var inst_33879 = (state_33905[(11)]);
var inst_33879__$1 = (inst_33856.cljs$core$IFn$_invoke$arity$1 ? inst_33856.cljs$core$IFn$_invoke$arity$1(inst_33865) : inst_33856.call(null,inst_33865));
var state_33905__$1 = (function (){var statearr_33913 = state_33905;
(statearr_33913[(11)] = inst_33879__$1);

return statearr_33913;
})();
if(cljs.core.truth_(inst_33879__$1)){
var statearr_33914_33971 = state_33905__$1;
(statearr_33914_33971[(1)] = (29));

} else {
var statearr_33915_33972 = state_33905__$1;
(statearr_33915_33972[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (4))){
var inst_33823 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33823)){
var statearr_33916_33973 = state_33905__$1;
(statearr_33916_33973[(1)] = (8));

} else {
var statearr_33917_33974 = state_33905__$1;
(statearr_33917_33974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (15))){
var inst_33850 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33850)){
var statearr_33918_33975 = state_33905__$1;
(statearr_33918_33975[(1)] = (19));

} else {
var statearr_33919_33976 = state_33905__$1;
(statearr_33919_33976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (21))){
var inst_33855 = (state_33905[(12)]);
var inst_33855__$1 = (state_33905[(2)]);
var inst_33856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33855__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33855__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33855__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33905__$1 = (function (){var statearr_33920 = state_33905;
(statearr_33920[(9)] = inst_33856);

(statearr_33920[(13)] = inst_33857);

(statearr_33920[(12)] = inst_33855__$1);

return statearr_33920;
})();
return cljs.core.async.ioc_alts_BANG_(state_33905__$1,(22),inst_33858);
} else {
if((state_val_33906 === (31))){
var inst_33887 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33887)){
var statearr_33921_33977 = state_33905__$1;
(statearr_33921_33977[(1)] = (32));

} else {
var statearr_33922_33978 = state_33905__$1;
(statearr_33922_33978[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (32))){
var inst_33864 = (state_33905[(14)]);
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33905__$1,(35),out,inst_33864);
} else {
if((state_val_33906 === (33))){
var inst_33855 = (state_33905[(12)]);
var inst_33832 = inst_33855;
var state_33905__$1 = (function (){var statearr_33923 = state_33905;
(statearr_33923[(7)] = inst_33832);

return statearr_33923;
})();
var statearr_33924_33979 = state_33905__$1;
(statearr_33924_33979[(2)] = null);

(statearr_33924_33979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (13))){
var inst_33832 = (state_33905[(7)]);
var inst_33839 = inst_33832.cljs$lang$protocol_mask$partition0$;
var inst_33840 = (inst_33839 & (64));
var inst_33841 = inst_33832.cljs$core$ISeq$;
var inst_33842 = (cljs.core.PROTOCOL_SENTINEL === inst_33841);
var inst_33843 = ((inst_33840) || (inst_33842));
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33843)){
var statearr_33925_33980 = state_33905__$1;
(statearr_33925_33980[(1)] = (16));

} else {
var statearr_33926_33981 = state_33905__$1;
(statearr_33926_33981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (22))){
var inst_33865 = (state_33905[(10)]);
var inst_33864 = (state_33905[(14)]);
var inst_33863 = (state_33905[(2)]);
var inst_33864__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33863,(0),null);
var inst_33865__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33863,(1),null);
var inst_33866 = (inst_33864__$1 == null);
var inst_33867 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33865__$1,change);
var inst_33868 = ((inst_33866) || (inst_33867));
var state_33905__$1 = (function (){var statearr_33927 = state_33905;
(statearr_33927[(10)] = inst_33865__$1);

(statearr_33927[(14)] = inst_33864__$1);

return statearr_33927;
})();
if(cljs.core.truth_(inst_33868)){
var statearr_33928_33982 = state_33905__$1;
(statearr_33928_33982[(1)] = (23));

} else {
var statearr_33929_33983 = state_33905__$1;
(statearr_33929_33983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (36))){
var inst_33855 = (state_33905[(12)]);
var inst_33832 = inst_33855;
var state_33905__$1 = (function (){var statearr_33930 = state_33905;
(statearr_33930[(7)] = inst_33832);

return statearr_33930;
})();
var statearr_33931_33984 = state_33905__$1;
(statearr_33931_33984[(2)] = null);

(statearr_33931_33984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (29))){
var inst_33879 = (state_33905[(11)]);
var state_33905__$1 = state_33905;
var statearr_33932_33985 = state_33905__$1;
(statearr_33932_33985[(2)] = inst_33879);

(statearr_33932_33985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (6))){
var state_33905__$1 = state_33905;
var statearr_33933_33986 = state_33905__$1;
(statearr_33933_33986[(2)] = false);

(statearr_33933_33986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (28))){
var inst_33875 = (state_33905[(2)]);
var inst_33876 = calc_state();
var inst_33832 = inst_33876;
var state_33905__$1 = (function (){var statearr_33934 = state_33905;
(statearr_33934[(7)] = inst_33832);

(statearr_33934[(15)] = inst_33875);

return statearr_33934;
})();
var statearr_33935_33987 = state_33905__$1;
(statearr_33935_33987[(2)] = null);

(statearr_33935_33987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (25))){
var inst_33901 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33936_33988 = state_33905__$1;
(statearr_33936_33988[(2)] = inst_33901);

(statearr_33936_33988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (34))){
var inst_33899 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33937_33989 = state_33905__$1;
(statearr_33937_33989[(2)] = inst_33899);

(statearr_33937_33989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (17))){
var state_33905__$1 = state_33905;
var statearr_33938_33990 = state_33905__$1;
(statearr_33938_33990[(2)] = false);

(statearr_33938_33990[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (3))){
var state_33905__$1 = state_33905;
var statearr_33939_33991 = state_33905__$1;
(statearr_33939_33991[(2)] = false);

(statearr_33939_33991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (12))){
var inst_33903 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33905__$1,inst_33903);
} else {
if((state_val_33906 === (2))){
var inst_33807 = (state_33905[(8)]);
var inst_33812 = inst_33807.cljs$lang$protocol_mask$partition0$;
var inst_33813 = (inst_33812 & (64));
var inst_33814 = inst_33807.cljs$core$ISeq$;
var inst_33815 = (cljs.core.PROTOCOL_SENTINEL === inst_33814);
var inst_33816 = ((inst_33813) || (inst_33815));
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33816)){
var statearr_33940_33992 = state_33905__$1;
(statearr_33940_33992[(1)] = (5));

} else {
var statearr_33941_33993 = state_33905__$1;
(statearr_33941_33993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (23))){
var inst_33864 = (state_33905[(14)]);
var inst_33870 = (inst_33864 == null);
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33870)){
var statearr_33942_33994 = state_33905__$1;
(statearr_33942_33994[(1)] = (26));

} else {
var statearr_33943_33995 = state_33905__$1;
(statearr_33943_33995[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (35))){
var inst_33890 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33890)){
var statearr_33944_33996 = state_33905__$1;
(statearr_33944_33996[(1)] = (36));

} else {
var statearr_33945_33997 = state_33905__$1;
(statearr_33945_33997[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (19))){
var inst_33832 = (state_33905[(7)]);
var inst_33852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33832);
var state_33905__$1 = state_33905;
var statearr_33946_33998 = state_33905__$1;
(statearr_33946_33998[(2)] = inst_33852);

(statearr_33946_33998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (11))){
var inst_33832 = (state_33905[(7)]);
var inst_33836 = (inst_33832 == null);
var inst_33837 = cljs.core.not(inst_33836);
var state_33905__$1 = state_33905;
if(inst_33837){
var statearr_33947_33999 = state_33905__$1;
(statearr_33947_33999[(1)] = (13));

} else {
var statearr_33948_34000 = state_33905__$1;
(statearr_33948_34000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (9))){
var inst_33807 = (state_33905[(8)]);
var state_33905__$1 = state_33905;
var statearr_33949_34001 = state_33905__$1;
(statearr_33949_34001[(2)] = inst_33807);

(statearr_33949_34001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (5))){
var state_33905__$1 = state_33905;
var statearr_33950_34002 = state_33905__$1;
(statearr_33950_34002[(2)] = true);

(statearr_33950_34002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (14))){
var state_33905__$1 = state_33905;
var statearr_33951_34003 = state_33905__$1;
(statearr_33951_34003[(2)] = false);

(statearr_33951_34003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (26))){
var inst_33865 = (state_33905[(10)]);
var inst_33872 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33865);
var state_33905__$1 = state_33905;
var statearr_33952_34004 = state_33905__$1;
(statearr_33952_34004[(2)] = inst_33872);

(statearr_33952_34004[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (16))){
var state_33905__$1 = state_33905;
var statearr_33953_34005 = state_33905__$1;
(statearr_33953_34005[(2)] = true);

(statearr_33953_34005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (38))){
var inst_33895 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33954_34006 = state_33905__$1;
(statearr_33954_34006[(2)] = inst_33895);

(statearr_33954_34006[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (30))){
var inst_33856 = (state_33905[(9)]);
var inst_33857 = (state_33905[(13)]);
var inst_33865 = (state_33905[(10)]);
var inst_33882 = cljs.core.empty_QMARK_(inst_33856);
var inst_33883 = (inst_33857.cljs$core$IFn$_invoke$arity$1 ? inst_33857.cljs$core$IFn$_invoke$arity$1(inst_33865) : inst_33857.call(null,inst_33865));
var inst_33884 = cljs.core.not(inst_33883);
var inst_33885 = ((inst_33882) && (inst_33884));
var state_33905__$1 = state_33905;
var statearr_33955_34007 = state_33905__$1;
(statearr_33955_34007[(2)] = inst_33885);

(statearr_33955_34007[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (10))){
var inst_33807 = (state_33905[(8)]);
var inst_33828 = (state_33905[(2)]);
var inst_33829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33828,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33828,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33828,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33832 = inst_33807;
var state_33905__$1 = (function (){var statearr_33956 = state_33905;
(statearr_33956[(16)] = inst_33829);

(statearr_33956[(7)] = inst_33832);

(statearr_33956[(17)] = inst_33830);

(statearr_33956[(18)] = inst_33831);

return statearr_33956;
})();
var statearr_33957_34008 = state_33905__$1;
(statearr_33957_34008[(2)] = null);

(statearr_33957_34008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (18))){
var inst_33847 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33958_34009 = state_33905__$1;
(statearr_33958_34009[(2)] = inst_33847);

(statearr_33958_34009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (37))){
var state_33905__$1 = state_33905;
var statearr_33959_34010 = state_33905__$1;
(statearr_33959_34010[(2)] = null);

(statearr_33959_34010[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (8))){
var inst_33807 = (state_33905[(8)]);
var inst_33825 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33807);
var state_33905__$1 = state_33905;
var statearr_33960_34011 = state_33905__$1;
(statearr_33960_34011[(2)] = inst_33825);

(statearr_33960_34011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__32906__auto___33965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32732__auto__,c__32906__auto___33965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32733__auto__ = null;
var cljs$core$async$mix_$_state_machine__32733__auto____0 = (function (){
var statearr_33961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33961[(0)] = cljs$core$async$mix_$_state_machine__32733__auto__);

(statearr_33961[(1)] = (1));

return statearr_33961;
});
var cljs$core$async$mix_$_state_machine__32733__auto____1 = (function (state_33905){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_33905);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e33962){if((e33962 instanceof Object)){
var ex__32736__auto__ = e33962;
var statearr_33963_34012 = state_33905;
(statearr_33963_34012[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34013 = state_33905;
state_33905 = G__34013;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32733__auto__ = function(state_33905){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32733__auto____1.call(this,state_33905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32733__auto____0;
cljs$core$async$mix_$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32733__auto____1;
return cljs$core$async$mix_$_state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___33965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32908__auto__ = (function (){var statearr_33964 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_33964[(6)] = c__32906__auto___33965);

return statearr_33964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___33965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34015 = arguments.length;
switch (G__34015) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34019 = arguments.length;
switch (G__34019) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__34017_SHARP_){
if(cljs.core.truth_((p1__34017_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34017_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34017_SHARP_.call(null,topic)))){
return p1__34017_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34017_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34020 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34021){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34021 = meta34021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34022,meta34021__$1){
var self__ = this;
var _34022__$1 = this;
return (new cljs.core.async.t_cljs$core$async34020(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34021__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34020.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34022){
var self__ = this;
var _34022__$1 = this;
return self__.meta34021;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34020.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34020.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34020.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34020.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34020.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34020.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34020.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34020.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34021","meta34021",1830698249,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34020";

cljs.core.async.t_cljs$core$async34020.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async34020");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34020.
 */
cljs.core.async.__GT_t_cljs$core$async34020 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34020(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34021){
return (new cljs.core.async.t_cljs$core$async34020(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34021));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34020(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32906__auto___34140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___34140,mults,ensure_mult,p){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___34140,mults,ensure_mult,p){
return (function (state_34094){
var state_val_34095 = (state_34094[(1)]);
if((state_val_34095 === (7))){
var inst_34090 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34096_34141 = state_34094__$1;
(statearr_34096_34141[(2)] = inst_34090);

(statearr_34096_34141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (20))){
var state_34094__$1 = state_34094;
var statearr_34097_34142 = state_34094__$1;
(statearr_34097_34142[(2)] = null);

(statearr_34097_34142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (1))){
var state_34094__$1 = state_34094;
var statearr_34098_34143 = state_34094__$1;
(statearr_34098_34143[(2)] = null);

(statearr_34098_34143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (24))){
var inst_34073 = (state_34094[(7)]);
var inst_34082 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34073);
var state_34094__$1 = state_34094;
var statearr_34099_34144 = state_34094__$1;
(statearr_34099_34144[(2)] = inst_34082);

(statearr_34099_34144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (4))){
var inst_34025 = (state_34094[(8)]);
var inst_34025__$1 = (state_34094[(2)]);
var inst_34026 = (inst_34025__$1 == null);
var state_34094__$1 = (function (){var statearr_34100 = state_34094;
(statearr_34100[(8)] = inst_34025__$1);

return statearr_34100;
})();
if(cljs.core.truth_(inst_34026)){
var statearr_34101_34145 = state_34094__$1;
(statearr_34101_34145[(1)] = (5));

} else {
var statearr_34102_34146 = state_34094__$1;
(statearr_34102_34146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (15))){
var inst_34067 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34103_34147 = state_34094__$1;
(statearr_34103_34147[(2)] = inst_34067);

(statearr_34103_34147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (21))){
var inst_34087 = (state_34094[(2)]);
var state_34094__$1 = (function (){var statearr_34104 = state_34094;
(statearr_34104[(9)] = inst_34087);

return statearr_34104;
})();
var statearr_34105_34148 = state_34094__$1;
(statearr_34105_34148[(2)] = null);

(statearr_34105_34148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (13))){
var inst_34049 = (state_34094[(10)]);
var inst_34051 = cljs.core.chunked_seq_QMARK_(inst_34049);
var state_34094__$1 = state_34094;
if(inst_34051){
var statearr_34106_34149 = state_34094__$1;
(statearr_34106_34149[(1)] = (16));

} else {
var statearr_34107_34150 = state_34094__$1;
(statearr_34107_34150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (22))){
var inst_34079 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
if(cljs.core.truth_(inst_34079)){
var statearr_34108_34151 = state_34094__$1;
(statearr_34108_34151[(1)] = (23));

} else {
var statearr_34109_34152 = state_34094__$1;
(statearr_34109_34152[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (6))){
var inst_34075 = (state_34094[(11)]);
var inst_34073 = (state_34094[(7)]);
var inst_34025 = (state_34094[(8)]);
var inst_34073__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34025) : topic_fn.call(null,inst_34025));
var inst_34074 = cljs.core.deref(mults);
var inst_34075__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34074,inst_34073__$1);
var state_34094__$1 = (function (){var statearr_34110 = state_34094;
(statearr_34110[(11)] = inst_34075__$1);

(statearr_34110[(7)] = inst_34073__$1);

return statearr_34110;
})();
if(cljs.core.truth_(inst_34075__$1)){
var statearr_34111_34153 = state_34094__$1;
(statearr_34111_34153[(1)] = (19));

} else {
var statearr_34112_34154 = state_34094__$1;
(statearr_34112_34154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (25))){
var inst_34084 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34113_34155 = state_34094__$1;
(statearr_34113_34155[(2)] = inst_34084);

(statearr_34113_34155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (17))){
var inst_34049 = (state_34094[(10)]);
var inst_34058 = cljs.core.first(inst_34049);
var inst_34059 = cljs.core.async.muxch_STAR_(inst_34058);
var inst_34060 = cljs.core.async.close_BANG_(inst_34059);
var inst_34061 = cljs.core.next(inst_34049);
var inst_34035 = inst_34061;
var inst_34036 = null;
var inst_34037 = (0);
var inst_34038 = (0);
var state_34094__$1 = (function (){var statearr_34114 = state_34094;
(statearr_34114[(12)] = inst_34035);

(statearr_34114[(13)] = inst_34060);

(statearr_34114[(14)] = inst_34036);

(statearr_34114[(15)] = inst_34037);

(statearr_34114[(16)] = inst_34038);

return statearr_34114;
})();
var statearr_34115_34156 = state_34094__$1;
(statearr_34115_34156[(2)] = null);

(statearr_34115_34156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (3))){
var inst_34092 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34094__$1,inst_34092);
} else {
if((state_val_34095 === (12))){
var inst_34069 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34116_34157 = state_34094__$1;
(statearr_34116_34157[(2)] = inst_34069);

(statearr_34116_34157[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (2))){
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34094__$1,(4),ch);
} else {
if((state_val_34095 === (23))){
var state_34094__$1 = state_34094;
var statearr_34117_34158 = state_34094__$1;
(statearr_34117_34158[(2)] = null);

(statearr_34117_34158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (19))){
var inst_34075 = (state_34094[(11)]);
var inst_34025 = (state_34094[(8)]);
var inst_34077 = cljs.core.async.muxch_STAR_(inst_34075);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34094__$1,(22),inst_34077,inst_34025);
} else {
if((state_val_34095 === (11))){
var inst_34035 = (state_34094[(12)]);
var inst_34049 = (state_34094[(10)]);
var inst_34049__$1 = cljs.core.seq(inst_34035);
var state_34094__$1 = (function (){var statearr_34118 = state_34094;
(statearr_34118[(10)] = inst_34049__$1);

return statearr_34118;
})();
if(inst_34049__$1){
var statearr_34119_34159 = state_34094__$1;
(statearr_34119_34159[(1)] = (13));

} else {
var statearr_34120_34160 = state_34094__$1;
(statearr_34120_34160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (9))){
var inst_34071 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34121_34161 = state_34094__$1;
(statearr_34121_34161[(2)] = inst_34071);

(statearr_34121_34161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (5))){
var inst_34032 = cljs.core.deref(mults);
var inst_34033 = cljs.core.vals(inst_34032);
var inst_34034 = cljs.core.seq(inst_34033);
var inst_34035 = inst_34034;
var inst_34036 = null;
var inst_34037 = (0);
var inst_34038 = (0);
var state_34094__$1 = (function (){var statearr_34122 = state_34094;
(statearr_34122[(12)] = inst_34035);

(statearr_34122[(14)] = inst_34036);

(statearr_34122[(15)] = inst_34037);

(statearr_34122[(16)] = inst_34038);

return statearr_34122;
})();
var statearr_34123_34162 = state_34094__$1;
(statearr_34123_34162[(2)] = null);

(statearr_34123_34162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (14))){
var state_34094__$1 = state_34094;
var statearr_34127_34163 = state_34094__$1;
(statearr_34127_34163[(2)] = null);

(statearr_34127_34163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (16))){
var inst_34049 = (state_34094[(10)]);
var inst_34053 = cljs.core.chunk_first(inst_34049);
var inst_34054 = cljs.core.chunk_rest(inst_34049);
var inst_34055 = cljs.core.count(inst_34053);
var inst_34035 = inst_34054;
var inst_34036 = inst_34053;
var inst_34037 = inst_34055;
var inst_34038 = (0);
var state_34094__$1 = (function (){var statearr_34128 = state_34094;
(statearr_34128[(12)] = inst_34035);

(statearr_34128[(14)] = inst_34036);

(statearr_34128[(15)] = inst_34037);

(statearr_34128[(16)] = inst_34038);

return statearr_34128;
})();
var statearr_34129_34164 = state_34094__$1;
(statearr_34129_34164[(2)] = null);

(statearr_34129_34164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (10))){
var inst_34035 = (state_34094[(12)]);
var inst_34036 = (state_34094[(14)]);
var inst_34037 = (state_34094[(15)]);
var inst_34038 = (state_34094[(16)]);
var inst_34043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34036,inst_34038);
var inst_34044 = cljs.core.async.muxch_STAR_(inst_34043);
var inst_34045 = cljs.core.async.close_BANG_(inst_34044);
var inst_34046 = (inst_34038 + (1));
var tmp34124 = inst_34035;
var tmp34125 = inst_34036;
var tmp34126 = inst_34037;
var inst_34035__$1 = tmp34124;
var inst_34036__$1 = tmp34125;
var inst_34037__$1 = tmp34126;
var inst_34038__$1 = inst_34046;
var state_34094__$1 = (function (){var statearr_34130 = state_34094;
(statearr_34130[(12)] = inst_34035__$1);

(statearr_34130[(14)] = inst_34036__$1);

(statearr_34130[(17)] = inst_34045);

(statearr_34130[(15)] = inst_34037__$1);

(statearr_34130[(16)] = inst_34038__$1);

return statearr_34130;
})();
var statearr_34131_34165 = state_34094__$1;
(statearr_34131_34165[(2)] = null);

(statearr_34131_34165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (18))){
var inst_34064 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34132_34166 = state_34094__$1;
(statearr_34132_34166[(2)] = inst_34064);

(statearr_34132_34166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (8))){
var inst_34037 = (state_34094[(15)]);
var inst_34038 = (state_34094[(16)]);
var inst_34040 = (inst_34038 < inst_34037);
var inst_34041 = inst_34040;
var state_34094__$1 = state_34094;
if(cljs.core.truth_(inst_34041)){
var statearr_34133_34167 = state_34094__$1;
(statearr_34133_34167[(1)] = (10));

} else {
var statearr_34134_34168 = state_34094__$1;
(statearr_34134_34168[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__32906__auto___34140,mults,ensure_mult,p))
;
return ((function (switch__32732__auto__,c__32906__auto___34140,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34135[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34135[(1)] = (1));

return statearr_34135;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34094){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34094);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34136){if((e34136 instanceof Object)){
var ex__32736__auto__ = e34136;
var statearr_34137_34169 = state_34094;
(statearr_34137_34169[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34170 = state_34094;
state_34094 = G__34170;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___34140,mults,ensure_mult,p))
})();
var state__32908__auto__ = (function (){var statearr_34138 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_34138[(6)] = c__32906__auto___34140);

return statearr_34138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___34140,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34172 = arguments.length;
switch (G__34172) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34175 = arguments.length;
switch (G__34175) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34178 = arguments.length;
switch (G__34178) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32906__auto___34245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___34245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___34245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34217){
var state_val_34218 = (state_34217[(1)]);
if((state_val_34218 === (7))){
var state_34217__$1 = state_34217;
var statearr_34219_34246 = state_34217__$1;
(statearr_34219_34246[(2)] = null);

(statearr_34219_34246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (1))){
var state_34217__$1 = state_34217;
var statearr_34220_34247 = state_34217__$1;
(statearr_34220_34247[(2)] = null);

(statearr_34220_34247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (4))){
var inst_34181 = (state_34217[(7)]);
var inst_34183 = (inst_34181 < cnt);
var state_34217__$1 = state_34217;
if(cljs.core.truth_(inst_34183)){
var statearr_34221_34248 = state_34217__$1;
(statearr_34221_34248[(1)] = (6));

} else {
var statearr_34222_34249 = state_34217__$1;
(statearr_34222_34249[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (15))){
var inst_34213 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34223_34250 = state_34217__$1;
(statearr_34223_34250[(2)] = inst_34213);

(statearr_34223_34250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (13))){
var inst_34206 = cljs.core.async.close_BANG_(out);
var state_34217__$1 = state_34217;
var statearr_34224_34251 = state_34217__$1;
(statearr_34224_34251[(2)] = inst_34206);

(statearr_34224_34251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (6))){
var state_34217__$1 = state_34217;
var statearr_34225_34252 = state_34217__$1;
(statearr_34225_34252[(2)] = null);

(statearr_34225_34252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (3))){
var inst_34215 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34217__$1,inst_34215);
} else {
if((state_val_34218 === (12))){
var inst_34203 = (state_34217[(8)]);
var inst_34203__$1 = (state_34217[(2)]);
var inst_34204 = cljs.core.some(cljs.core.nil_QMARK_,inst_34203__$1);
var state_34217__$1 = (function (){var statearr_34226 = state_34217;
(statearr_34226[(8)] = inst_34203__$1);

return statearr_34226;
})();
if(cljs.core.truth_(inst_34204)){
var statearr_34227_34253 = state_34217__$1;
(statearr_34227_34253[(1)] = (13));

} else {
var statearr_34228_34254 = state_34217__$1;
(statearr_34228_34254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (2))){
var inst_34180 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34181 = (0);
var state_34217__$1 = (function (){var statearr_34229 = state_34217;
(statearr_34229[(9)] = inst_34180);

(statearr_34229[(7)] = inst_34181);

return statearr_34229;
})();
var statearr_34230_34255 = state_34217__$1;
(statearr_34230_34255[(2)] = null);

(statearr_34230_34255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (11))){
var inst_34181 = (state_34217[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34217,(10),Object,null,(9));
var inst_34190 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34181) : chs__$1.call(null,inst_34181));
var inst_34191 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34181) : done.call(null,inst_34181));
var inst_34192 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34190,inst_34191);
var state_34217__$1 = state_34217;
var statearr_34231_34256 = state_34217__$1;
(statearr_34231_34256[(2)] = inst_34192);


cljs.core.async.impl.ioc_helpers.process_exception(state_34217__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (9))){
var inst_34181 = (state_34217[(7)]);
var inst_34194 = (state_34217[(2)]);
var inst_34195 = (inst_34181 + (1));
var inst_34181__$1 = inst_34195;
var state_34217__$1 = (function (){var statearr_34232 = state_34217;
(statearr_34232[(10)] = inst_34194);

(statearr_34232[(7)] = inst_34181__$1);

return statearr_34232;
})();
var statearr_34233_34257 = state_34217__$1;
(statearr_34233_34257[(2)] = null);

(statearr_34233_34257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (5))){
var inst_34201 = (state_34217[(2)]);
var state_34217__$1 = (function (){var statearr_34234 = state_34217;
(statearr_34234[(11)] = inst_34201);

return statearr_34234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34217__$1,(12),dchan);
} else {
if((state_val_34218 === (14))){
var inst_34203 = (state_34217[(8)]);
var inst_34208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34203);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34217__$1,(16),out,inst_34208);
} else {
if((state_val_34218 === (16))){
var inst_34210 = (state_34217[(2)]);
var state_34217__$1 = (function (){var statearr_34235 = state_34217;
(statearr_34235[(12)] = inst_34210);

return statearr_34235;
})();
var statearr_34236_34258 = state_34217__$1;
(statearr_34236_34258[(2)] = null);

(statearr_34236_34258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (10))){
var inst_34185 = (state_34217[(2)]);
var inst_34186 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34217__$1 = (function (){var statearr_34237 = state_34217;
(statearr_34237[(13)] = inst_34185);

return statearr_34237;
})();
var statearr_34238_34259 = state_34217__$1;
(statearr_34238_34259[(2)] = inst_34186);


cljs.core.async.impl.ioc_helpers.process_exception(state_34217__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (8))){
var inst_34199 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34239_34260 = state_34217__$1;
(statearr_34239_34260[(2)] = inst_34199);

(statearr_34239_34260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__32906__auto___34245,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32732__auto__,c__32906__auto___34245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34240[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34240[(1)] = (1));

return statearr_34240;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34217){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34217);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34241){if((e34241 instanceof Object)){
var ex__32736__auto__ = e34241;
var statearr_34242_34261 = state_34217;
(statearr_34242_34261[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34262 = state_34217;
state_34217 = G__34262;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___34245,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32908__auto__ = (function (){var statearr_34243 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_34243[(6)] = c__32906__auto___34245);

return statearr_34243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___34245,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34265 = arguments.length;
switch (G__34265) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32906__auto___34319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___34319,out){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___34319,out){
return (function (state_34297){
var state_val_34298 = (state_34297[(1)]);
if((state_val_34298 === (7))){
var inst_34277 = (state_34297[(7)]);
var inst_34276 = (state_34297[(8)]);
var inst_34276__$1 = (state_34297[(2)]);
var inst_34277__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34276__$1,(0),null);
var inst_34278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34276__$1,(1),null);
var inst_34279 = (inst_34277__$1 == null);
var state_34297__$1 = (function (){var statearr_34299 = state_34297;
(statearr_34299[(9)] = inst_34278);

(statearr_34299[(7)] = inst_34277__$1);

(statearr_34299[(8)] = inst_34276__$1);

return statearr_34299;
})();
if(cljs.core.truth_(inst_34279)){
var statearr_34300_34320 = state_34297__$1;
(statearr_34300_34320[(1)] = (8));

} else {
var statearr_34301_34321 = state_34297__$1;
(statearr_34301_34321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34298 === (1))){
var inst_34266 = cljs.core.vec(chs);
var inst_34267 = inst_34266;
var state_34297__$1 = (function (){var statearr_34302 = state_34297;
(statearr_34302[(10)] = inst_34267);

return statearr_34302;
})();
var statearr_34303_34322 = state_34297__$1;
(statearr_34303_34322[(2)] = null);

(statearr_34303_34322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34298 === (4))){
var inst_34267 = (state_34297[(10)]);
var state_34297__$1 = state_34297;
return cljs.core.async.ioc_alts_BANG_(state_34297__$1,(7),inst_34267);
} else {
if((state_val_34298 === (6))){
var inst_34293 = (state_34297[(2)]);
var state_34297__$1 = state_34297;
var statearr_34304_34323 = state_34297__$1;
(statearr_34304_34323[(2)] = inst_34293);

(statearr_34304_34323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34298 === (3))){
var inst_34295 = (state_34297[(2)]);
var state_34297__$1 = state_34297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34297__$1,inst_34295);
} else {
if((state_val_34298 === (2))){
var inst_34267 = (state_34297[(10)]);
var inst_34269 = cljs.core.count(inst_34267);
var inst_34270 = (inst_34269 > (0));
var state_34297__$1 = state_34297;
if(cljs.core.truth_(inst_34270)){
var statearr_34306_34324 = state_34297__$1;
(statearr_34306_34324[(1)] = (4));

} else {
var statearr_34307_34325 = state_34297__$1;
(statearr_34307_34325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34298 === (11))){
var inst_34267 = (state_34297[(10)]);
var inst_34286 = (state_34297[(2)]);
var tmp34305 = inst_34267;
var inst_34267__$1 = tmp34305;
var state_34297__$1 = (function (){var statearr_34308 = state_34297;
(statearr_34308[(11)] = inst_34286);

(statearr_34308[(10)] = inst_34267__$1);

return statearr_34308;
})();
var statearr_34309_34326 = state_34297__$1;
(statearr_34309_34326[(2)] = null);

(statearr_34309_34326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34298 === (9))){
var inst_34277 = (state_34297[(7)]);
var state_34297__$1 = state_34297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34297__$1,(11),out,inst_34277);
} else {
if((state_val_34298 === (5))){
var inst_34291 = cljs.core.async.close_BANG_(out);
var state_34297__$1 = state_34297;
var statearr_34310_34327 = state_34297__$1;
(statearr_34310_34327[(2)] = inst_34291);

(statearr_34310_34327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34298 === (10))){
var inst_34289 = (state_34297[(2)]);
var state_34297__$1 = state_34297;
var statearr_34311_34328 = state_34297__$1;
(statearr_34311_34328[(2)] = inst_34289);

(statearr_34311_34328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34298 === (8))){
var inst_34278 = (state_34297[(9)]);
var inst_34277 = (state_34297[(7)]);
var inst_34267 = (state_34297[(10)]);
var inst_34276 = (state_34297[(8)]);
var inst_34281 = (function (){var cs = inst_34267;
var vec__34272 = inst_34276;
var v = inst_34277;
var c = inst_34278;
return ((function (cs,vec__34272,v,c,inst_34278,inst_34277,inst_34267,inst_34276,state_val_34298,c__32906__auto___34319,out){
return (function (p1__34263_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34263_SHARP_);
});
;})(cs,vec__34272,v,c,inst_34278,inst_34277,inst_34267,inst_34276,state_val_34298,c__32906__auto___34319,out))
})();
var inst_34282 = cljs.core.filterv(inst_34281,inst_34267);
var inst_34267__$1 = inst_34282;
var state_34297__$1 = (function (){var statearr_34312 = state_34297;
(statearr_34312[(10)] = inst_34267__$1);

return statearr_34312;
})();
var statearr_34313_34329 = state_34297__$1;
(statearr_34313_34329[(2)] = null);

(statearr_34313_34329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__32906__auto___34319,out))
;
return ((function (switch__32732__auto__,c__32906__auto___34319,out){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34314 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34314[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34314[(1)] = (1));

return statearr_34314;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34297){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34297);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34315){if((e34315 instanceof Object)){
var ex__32736__auto__ = e34315;
var statearr_34316_34330 = state_34297;
(statearr_34316_34330[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34331 = state_34297;
state_34297 = G__34331;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___34319,out))
})();
var state__32908__auto__ = (function (){var statearr_34317 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_34317[(6)] = c__32906__auto___34319);

return statearr_34317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___34319,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34333 = arguments.length;
switch (G__34333) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32906__auto___34378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___34378,out){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___34378,out){
return (function (state_34357){
var state_val_34358 = (state_34357[(1)]);
if((state_val_34358 === (7))){
var inst_34339 = (state_34357[(7)]);
var inst_34339__$1 = (state_34357[(2)]);
var inst_34340 = (inst_34339__$1 == null);
var inst_34341 = cljs.core.not(inst_34340);
var state_34357__$1 = (function (){var statearr_34359 = state_34357;
(statearr_34359[(7)] = inst_34339__$1);

return statearr_34359;
})();
if(inst_34341){
var statearr_34360_34379 = state_34357__$1;
(statearr_34360_34379[(1)] = (8));

} else {
var statearr_34361_34380 = state_34357__$1;
(statearr_34361_34380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (1))){
var inst_34334 = (0);
var state_34357__$1 = (function (){var statearr_34362 = state_34357;
(statearr_34362[(8)] = inst_34334);

return statearr_34362;
})();
var statearr_34363_34381 = state_34357__$1;
(statearr_34363_34381[(2)] = null);

(statearr_34363_34381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (4))){
var state_34357__$1 = state_34357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34357__$1,(7),ch);
} else {
if((state_val_34358 === (6))){
var inst_34352 = (state_34357[(2)]);
var state_34357__$1 = state_34357;
var statearr_34364_34382 = state_34357__$1;
(statearr_34364_34382[(2)] = inst_34352);

(statearr_34364_34382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (3))){
var inst_34354 = (state_34357[(2)]);
var inst_34355 = cljs.core.async.close_BANG_(out);
var state_34357__$1 = (function (){var statearr_34365 = state_34357;
(statearr_34365[(9)] = inst_34354);

return statearr_34365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34357__$1,inst_34355);
} else {
if((state_val_34358 === (2))){
var inst_34334 = (state_34357[(8)]);
var inst_34336 = (inst_34334 < n);
var state_34357__$1 = state_34357;
if(cljs.core.truth_(inst_34336)){
var statearr_34366_34383 = state_34357__$1;
(statearr_34366_34383[(1)] = (4));

} else {
var statearr_34367_34384 = state_34357__$1;
(statearr_34367_34384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (11))){
var inst_34334 = (state_34357[(8)]);
var inst_34344 = (state_34357[(2)]);
var inst_34345 = (inst_34334 + (1));
var inst_34334__$1 = inst_34345;
var state_34357__$1 = (function (){var statearr_34368 = state_34357;
(statearr_34368[(10)] = inst_34344);

(statearr_34368[(8)] = inst_34334__$1);

return statearr_34368;
})();
var statearr_34369_34385 = state_34357__$1;
(statearr_34369_34385[(2)] = null);

(statearr_34369_34385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (9))){
var state_34357__$1 = state_34357;
var statearr_34370_34386 = state_34357__$1;
(statearr_34370_34386[(2)] = null);

(statearr_34370_34386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (5))){
var state_34357__$1 = state_34357;
var statearr_34371_34387 = state_34357__$1;
(statearr_34371_34387[(2)] = null);

(statearr_34371_34387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (10))){
var inst_34349 = (state_34357[(2)]);
var state_34357__$1 = state_34357;
var statearr_34372_34388 = state_34357__$1;
(statearr_34372_34388[(2)] = inst_34349);

(statearr_34372_34388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (8))){
var inst_34339 = (state_34357[(7)]);
var state_34357__$1 = state_34357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34357__$1,(11),out,inst_34339);
} else {
return null;
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
}
});})(c__32906__auto___34378,out))
;
return ((function (switch__32732__auto__,c__32906__auto___34378,out){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34373[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34373[(1)] = (1));

return statearr_34373;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34357){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34357);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34374){if((e34374 instanceof Object)){
var ex__32736__auto__ = e34374;
var statearr_34375_34389 = state_34357;
(statearr_34375_34389[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34390 = state_34357;
state_34357 = G__34390;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___34378,out))
})();
var state__32908__auto__ = (function (){var statearr_34376 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_34376[(6)] = c__32906__auto___34378);

return statearr_34376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___34378,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34392 = (function (f,ch,meta34393){
this.f = f;
this.ch = ch;
this.meta34393 = meta34393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34394,meta34393__$1){
var self__ = this;
var _34394__$1 = this;
return (new cljs.core.async.t_cljs$core$async34392(self__.f,self__.ch,meta34393__$1));
});

cljs.core.async.t_cljs$core$async34392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34394){
var self__ = this;
var _34394__$1 = this;
return self__.meta34393;
});

cljs.core.async.t_cljs$core$async34392.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34392.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34392.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34395 = (function (f,ch,meta34393,_,fn1,meta34396){
this.f = f;
this.ch = ch;
this.meta34393 = meta34393;
this._ = _;
this.fn1 = fn1;
this.meta34396 = meta34396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34397,meta34396__$1){
var self__ = this;
var _34397__$1 = this;
return (new cljs.core.async.t_cljs$core$async34395(self__.f,self__.ch,self__.meta34393,self__._,self__.fn1,meta34396__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34397){
var self__ = this;
var _34397__$1 = this;
return self__.meta34396;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34391_SHARP_){
var G__34398 = (((p1__34391_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34391_SHARP_) : self__.f.call(null,p1__34391_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34398) : f1.call(null,G__34398));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34395.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34393","meta34393",2019103793,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34392","cljs.core.async/t_cljs$core$async34392",-621589013,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34396","meta34396",-1293751021,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34395";

cljs.core.async.t_cljs$core$async34395.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async34395");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34395.
 */
cljs.core.async.__GT_t_cljs$core$async34395 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34395(f__$1,ch__$1,meta34393__$1,___$2,fn1__$1,meta34396){
return (new cljs.core.async.t_cljs$core$async34395(f__$1,ch__$1,meta34393__$1,___$2,fn1__$1,meta34396));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34395(self__.f,self__.ch,self__.meta34393,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34399 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34399) : self__.f.call(null,G__34399));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34392.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34393","meta34393",2019103793,null)], null);
});

cljs.core.async.t_cljs$core$async34392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34392";

cljs.core.async.t_cljs$core$async34392.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async34392");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34392.
 */
cljs.core.async.__GT_t_cljs$core$async34392 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34392(f__$1,ch__$1,meta34393){
return (new cljs.core.async.t_cljs$core$async34392(f__$1,ch__$1,meta34393));
});

}

return (new cljs.core.async.t_cljs$core$async34392(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34400 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34400 = (function (f,ch,meta34401){
this.f = f;
this.ch = ch;
this.meta34401 = meta34401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34402,meta34401__$1){
var self__ = this;
var _34402__$1 = this;
return (new cljs.core.async.t_cljs$core$async34400(self__.f,self__.ch,meta34401__$1));
});

cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34402){
var self__ = this;
var _34402__$1 = this;
return self__.meta34401;
});

cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34401","meta34401",-733804561,null)], null);
});

cljs.core.async.t_cljs$core$async34400.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34400";

cljs.core.async.t_cljs$core$async34400.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async34400");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34400.
 */
cljs.core.async.__GT_t_cljs$core$async34400 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34400(f__$1,ch__$1,meta34401){
return (new cljs.core.async.t_cljs$core$async34400(f__$1,ch__$1,meta34401));
});

}

return (new cljs.core.async.t_cljs$core$async34400(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34403 = (function (p,ch,meta34404){
this.p = p;
this.ch = ch;
this.meta34404 = meta34404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34405,meta34404__$1){
var self__ = this;
var _34405__$1 = this;
return (new cljs.core.async.t_cljs$core$async34403(self__.p,self__.ch,meta34404__$1));
});

cljs.core.async.t_cljs$core$async34403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34405){
var self__ = this;
var _34405__$1 = this;
return self__.meta34404;
});

cljs.core.async.t_cljs$core$async34403.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34403.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34403.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34404","meta34404",1485708569,null)], null);
});

cljs.core.async.t_cljs$core$async34403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34403";

cljs.core.async.t_cljs$core$async34403.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async34403");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34403.
 */
cljs.core.async.__GT_t_cljs$core$async34403 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34403(p__$1,ch__$1,meta34404){
return (new cljs.core.async.t_cljs$core$async34403(p__$1,ch__$1,meta34404));
});

}

return (new cljs.core.async.t_cljs$core$async34403(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34407 = arguments.length;
switch (G__34407) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32906__auto___34447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___34447,out){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___34447,out){
return (function (state_34428){
var state_val_34429 = (state_34428[(1)]);
if((state_val_34429 === (7))){
var inst_34424 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34430_34448 = state_34428__$1;
(statearr_34430_34448[(2)] = inst_34424);

(statearr_34430_34448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (1))){
var state_34428__$1 = state_34428;
var statearr_34431_34449 = state_34428__$1;
(statearr_34431_34449[(2)] = null);

(statearr_34431_34449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (4))){
var inst_34410 = (state_34428[(7)]);
var inst_34410__$1 = (state_34428[(2)]);
var inst_34411 = (inst_34410__$1 == null);
var state_34428__$1 = (function (){var statearr_34432 = state_34428;
(statearr_34432[(7)] = inst_34410__$1);

return statearr_34432;
})();
if(cljs.core.truth_(inst_34411)){
var statearr_34433_34450 = state_34428__$1;
(statearr_34433_34450[(1)] = (5));

} else {
var statearr_34434_34451 = state_34428__$1;
(statearr_34434_34451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (6))){
var inst_34410 = (state_34428[(7)]);
var inst_34415 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34410) : p.call(null,inst_34410));
var state_34428__$1 = state_34428;
if(cljs.core.truth_(inst_34415)){
var statearr_34435_34452 = state_34428__$1;
(statearr_34435_34452[(1)] = (8));

} else {
var statearr_34436_34453 = state_34428__$1;
(statearr_34436_34453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (3))){
var inst_34426 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34428__$1,inst_34426);
} else {
if((state_val_34429 === (2))){
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34428__$1,(4),ch);
} else {
if((state_val_34429 === (11))){
var inst_34418 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34437_34454 = state_34428__$1;
(statearr_34437_34454[(2)] = inst_34418);

(statearr_34437_34454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (9))){
var state_34428__$1 = state_34428;
var statearr_34438_34455 = state_34428__$1;
(statearr_34438_34455[(2)] = null);

(statearr_34438_34455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (5))){
var inst_34413 = cljs.core.async.close_BANG_(out);
var state_34428__$1 = state_34428;
var statearr_34439_34456 = state_34428__$1;
(statearr_34439_34456[(2)] = inst_34413);

(statearr_34439_34456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (10))){
var inst_34421 = (state_34428[(2)]);
var state_34428__$1 = (function (){var statearr_34440 = state_34428;
(statearr_34440[(8)] = inst_34421);

return statearr_34440;
})();
var statearr_34441_34457 = state_34428__$1;
(statearr_34441_34457[(2)] = null);

(statearr_34441_34457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (8))){
var inst_34410 = (state_34428[(7)]);
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34428__$1,(11),out,inst_34410);
} else {
return null;
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
}
});})(c__32906__auto___34447,out))
;
return ((function (switch__32732__auto__,c__32906__auto___34447,out){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34442 = [null,null,null,null,null,null,null,null,null];
(statearr_34442[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34442[(1)] = (1));

return statearr_34442;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34428){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34428);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34443){if((e34443 instanceof Object)){
var ex__32736__auto__ = e34443;
var statearr_34444_34458 = state_34428;
(statearr_34444_34458[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34443;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34459 = state_34428;
state_34428 = G__34459;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___34447,out))
})();
var state__32908__auto__ = (function (){var statearr_34445 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_34445[(6)] = c__32906__auto___34447);

return statearr_34445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___34447,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34461 = arguments.length;
switch (G__34461) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto__){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto__){
return (function (state_34524){
var state_val_34525 = (state_34524[(1)]);
if((state_val_34525 === (7))){
var inst_34520 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34526_34564 = state_34524__$1;
(statearr_34526_34564[(2)] = inst_34520);

(statearr_34526_34564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (20))){
var inst_34490 = (state_34524[(7)]);
var inst_34501 = (state_34524[(2)]);
var inst_34502 = cljs.core.next(inst_34490);
var inst_34476 = inst_34502;
var inst_34477 = null;
var inst_34478 = (0);
var inst_34479 = (0);
var state_34524__$1 = (function (){var statearr_34527 = state_34524;
(statearr_34527[(8)] = inst_34501);

(statearr_34527[(9)] = inst_34478);

(statearr_34527[(10)] = inst_34476);

(statearr_34527[(11)] = inst_34477);

(statearr_34527[(12)] = inst_34479);

return statearr_34527;
})();
var statearr_34528_34565 = state_34524__$1;
(statearr_34528_34565[(2)] = null);

(statearr_34528_34565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (1))){
var state_34524__$1 = state_34524;
var statearr_34529_34566 = state_34524__$1;
(statearr_34529_34566[(2)] = null);

(statearr_34529_34566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (4))){
var inst_34465 = (state_34524[(13)]);
var inst_34465__$1 = (state_34524[(2)]);
var inst_34466 = (inst_34465__$1 == null);
var state_34524__$1 = (function (){var statearr_34530 = state_34524;
(statearr_34530[(13)] = inst_34465__$1);

return statearr_34530;
})();
if(cljs.core.truth_(inst_34466)){
var statearr_34531_34567 = state_34524__$1;
(statearr_34531_34567[(1)] = (5));

} else {
var statearr_34532_34568 = state_34524__$1;
(statearr_34532_34568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (15))){
var state_34524__$1 = state_34524;
var statearr_34536_34569 = state_34524__$1;
(statearr_34536_34569[(2)] = null);

(statearr_34536_34569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (21))){
var state_34524__$1 = state_34524;
var statearr_34537_34570 = state_34524__$1;
(statearr_34537_34570[(2)] = null);

(statearr_34537_34570[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (13))){
var inst_34478 = (state_34524[(9)]);
var inst_34476 = (state_34524[(10)]);
var inst_34477 = (state_34524[(11)]);
var inst_34479 = (state_34524[(12)]);
var inst_34486 = (state_34524[(2)]);
var inst_34487 = (inst_34479 + (1));
var tmp34533 = inst_34478;
var tmp34534 = inst_34476;
var tmp34535 = inst_34477;
var inst_34476__$1 = tmp34534;
var inst_34477__$1 = tmp34535;
var inst_34478__$1 = tmp34533;
var inst_34479__$1 = inst_34487;
var state_34524__$1 = (function (){var statearr_34538 = state_34524;
(statearr_34538[(9)] = inst_34478__$1);

(statearr_34538[(10)] = inst_34476__$1);

(statearr_34538[(11)] = inst_34477__$1);

(statearr_34538[(12)] = inst_34479__$1);

(statearr_34538[(14)] = inst_34486);

return statearr_34538;
})();
var statearr_34539_34571 = state_34524__$1;
(statearr_34539_34571[(2)] = null);

(statearr_34539_34571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (22))){
var state_34524__$1 = state_34524;
var statearr_34540_34572 = state_34524__$1;
(statearr_34540_34572[(2)] = null);

(statearr_34540_34572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (6))){
var inst_34465 = (state_34524[(13)]);
var inst_34474 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34465) : f.call(null,inst_34465));
var inst_34475 = cljs.core.seq(inst_34474);
var inst_34476 = inst_34475;
var inst_34477 = null;
var inst_34478 = (0);
var inst_34479 = (0);
var state_34524__$1 = (function (){var statearr_34541 = state_34524;
(statearr_34541[(9)] = inst_34478);

(statearr_34541[(10)] = inst_34476);

(statearr_34541[(11)] = inst_34477);

(statearr_34541[(12)] = inst_34479);

return statearr_34541;
})();
var statearr_34542_34573 = state_34524__$1;
(statearr_34542_34573[(2)] = null);

(statearr_34542_34573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (17))){
var inst_34490 = (state_34524[(7)]);
var inst_34494 = cljs.core.chunk_first(inst_34490);
var inst_34495 = cljs.core.chunk_rest(inst_34490);
var inst_34496 = cljs.core.count(inst_34494);
var inst_34476 = inst_34495;
var inst_34477 = inst_34494;
var inst_34478 = inst_34496;
var inst_34479 = (0);
var state_34524__$1 = (function (){var statearr_34543 = state_34524;
(statearr_34543[(9)] = inst_34478);

(statearr_34543[(10)] = inst_34476);

(statearr_34543[(11)] = inst_34477);

(statearr_34543[(12)] = inst_34479);

return statearr_34543;
})();
var statearr_34544_34574 = state_34524__$1;
(statearr_34544_34574[(2)] = null);

(statearr_34544_34574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (3))){
var inst_34522 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34524__$1,inst_34522);
} else {
if((state_val_34525 === (12))){
var inst_34510 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34545_34575 = state_34524__$1;
(statearr_34545_34575[(2)] = inst_34510);

(statearr_34545_34575[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (2))){
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34524__$1,(4),in$);
} else {
if((state_val_34525 === (23))){
var inst_34518 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34546_34576 = state_34524__$1;
(statearr_34546_34576[(2)] = inst_34518);

(statearr_34546_34576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (19))){
var inst_34505 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34547_34577 = state_34524__$1;
(statearr_34547_34577[(2)] = inst_34505);

(statearr_34547_34577[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (11))){
var inst_34490 = (state_34524[(7)]);
var inst_34476 = (state_34524[(10)]);
var inst_34490__$1 = cljs.core.seq(inst_34476);
var state_34524__$1 = (function (){var statearr_34548 = state_34524;
(statearr_34548[(7)] = inst_34490__$1);

return statearr_34548;
})();
if(inst_34490__$1){
var statearr_34549_34578 = state_34524__$1;
(statearr_34549_34578[(1)] = (14));

} else {
var statearr_34550_34579 = state_34524__$1;
(statearr_34550_34579[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (9))){
var inst_34512 = (state_34524[(2)]);
var inst_34513 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34524__$1 = (function (){var statearr_34551 = state_34524;
(statearr_34551[(15)] = inst_34512);

return statearr_34551;
})();
if(cljs.core.truth_(inst_34513)){
var statearr_34552_34580 = state_34524__$1;
(statearr_34552_34580[(1)] = (21));

} else {
var statearr_34553_34581 = state_34524__$1;
(statearr_34553_34581[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (5))){
var inst_34468 = cljs.core.async.close_BANG_(out);
var state_34524__$1 = state_34524;
var statearr_34554_34582 = state_34524__$1;
(statearr_34554_34582[(2)] = inst_34468);

(statearr_34554_34582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (14))){
var inst_34490 = (state_34524[(7)]);
var inst_34492 = cljs.core.chunked_seq_QMARK_(inst_34490);
var state_34524__$1 = state_34524;
if(inst_34492){
var statearr_34555_34583 = state_34524__$1;
(statearr_34555_34583[(1)] = (17));

} else {
var statearr_34556_34584 = state_34524__$1;
(statearr_34556_34584[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (16))){
var inst_34508 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34557_34585 = state_34524__$1;
(statearr_34557_34585[(2)] = inst_34508);

(statearr_34557_34585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (10))){
var inst_34477 = (state_34524[(11)]);
var inst_34479 = (state_34524[(12)]);
var inst_34484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34477,inst_34479);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34524__$1,(13),out,inst_34484);
} else {
if((state_val_34525 === (18))){
var inst_34490 = (state_34524[(7)]);
var inst_34499 = cljs.core.first(inst_34490);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34524__$1,(20),out,inst_34499);
} else {
if((state_val_34525 === (8))){
var inst_34478 = (state_34524[(9)]);
var inst_34479 = (state_34524[(12)]);
var inst_34481 = (inst_34479 < inst_34478);
var inst_34482 = inst_34481;
var state_34524__$1 = state_34524;
if(cljs.core.truth_(inst_34482)){
var statearr_34558_34586 = state_34524__$1;
(statearr_34558_34586[(1)] = (10));

} else {
var statearr_34559_34587 = state_34524__$1;
(statearr_34559_34587[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__32906__auto__))
;
return ((function (switch__32732__auto__,c__32906__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____0 = (function (){
var statearr_34560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34560[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__);

(statearr_34560[(1)] = (1));

return statearr_34560;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____1 = (function (state_34524){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34524);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34561){if((e34561 instanceof Object)){
var ex__32736__auto__ = e34561;
var statearr_34562_34588 = state_34524;
(statearr_34562_34588[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34561;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34589 = state_34524;
state_34524 = G__34589;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__ = function(state_34524){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____1.call(this,state_34524);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32733__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto__))
})();
var state__32908__auto__ = (function (){var statearr_34563 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_34563[(6)] = c__32906__auto__);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto__))
);

return c__32906__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34591 = arguments.length;
switch (G__34591) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34594 = arguments.length;
switch (G__34594) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34597 = arguments.length;
switch (G__34597) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32906__auto___34644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___34644,out){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___34644,out){
return (function (state_34621){
var state_val_34622 = (state_34621[(1)]);
if((state_val_34622 === (7))){
var inst_34616 = (state_34621[(2)]);
var state_34621__$1 = state_34621;
var statearr_34623_34645 = state_34621__$1;
(statearr_34623_34645[(2)] = inst_34616);

(statearr_34623_34645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (1))){
var inst_34598 = null;
var state_34621__$1 = (function (){var statearr_34624 = state_34621;
(statearr_34624[(7)] = inst_34598);

return statearr_34624;
})();
var statearr_34625_34646 = state_34621__$1;
(statearr_34625_34646[(2)] = null);

(statearr_34625_34646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (4))){
var inst_34601 = (state_34621[(8)]);
var inst_34601__$1 = (state_34621[(2)]);
var inst_34602 = (inst_34601__$1 == null);
var inst_34603 = cljs.core.not(inst_34602);
var state_34621__$1 = (function (){var statearr_34626 = state_34621;
(statearr_34626[(8)] = inst_34601__$1);

return statearr_34626;
})();
if(inst_34603){
var statearr_34627_34647 = state_34621__$1;
(statearr_34627_34647[(1)] = (5));

} else {
var statearr_34628_34648 = state_34621__$1;
(statearr_34628_34648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (6))){
var state_34621__$1 = state_34621;
var statearr_34629_34649 = state_34621__$1;
(statearr_34629_34649[(2)] = null);

(statearr_34629_34649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (3))){
var inst_34618 = (state_34621[(2)]);
var inst_34619 = cljs.core.async.close_BANG_(out);
var state_34621__$1 = (function (){var statearr_34630 = state_34621;
(statearr_34630[(9)] = inst_34618);

return statearr_34630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34621__$1,inst_34619);
} else {
if((state_val_34622 === (2))){
var state_34621__$1 = state_34621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34621__$1,(4),ch);
} else {
if((state_val_34622 === (11))){
var inst_34601 = (state_34621[(8)]);
var inst_34610 = (state_34621[(2)]);
var inst_34598 = inst_34601;
var state_34621__$1 = (function (){var statearr_34631 = state_34621;
(statearr_34631[(7)] = inst_34598);

(statearr_34631[(10)] = inst_34610);

return statearr_34631;
})();
var statearr_34632_34650 = state_34621__$1;
(statearr_34632_34650[(2)] = null);

(statearr_34632_34650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (9))){
var inst_34601 = (state_34621[(8)]);
var state_34621__$1 = state_34621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34621__$1,(11),out,inst_34601);
} else {
if((state_val_34622 === (5))){
var inst_34601 = (state_34621[(8)]);
var inst_34598 = (state_34621[(7)]);
var inst_34605 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34601,inst_34598);
var state_34621__$1 = state_34621;
if(inst_34605){
var statearr_34634_34651 = state_34621__$1;
(statearr_34634_34651[(1)] = (8));

} else {
var statearr_34635_34652 = state_34621__$1;
(statearr_34635_34652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (10))){
var inst_34613 = (state_34621[(2)]);
var state_34621__$1 = state_34621;
var statearr_34636_34653 = state_34621__$1;
(statearr_34636_34653[(2)] = inst_34613);

(statearr_34636_34653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (8))){
var inst_34598 = (state_34621[(7)]);
var tmp34633 = inst_34598;
var inst_34598__$1 = tmp34633;
var state_34621__$1 = (function (){var statearr_34637 = state_34621;
(statearr_34637[(7)] = inst_34598__$1);

return statearr_34637;
})();
var statearr_34638_34654 = state_34621__$1;
(statearr_34638_34654[(2)] = null);

(statearr_34638_34654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__32906__auto___34644,out))
;
return ((function (switch__32732__auto__,c__32906__auto___34644,out){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34639[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34639[(1)] = (1));

return statearr_34639;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34621){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34621);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34640){if((e34640 instanceof Object)){
var ex__32736__auto__ = e34640;
var statearr_34641_34655 = state_34621;
(statearr_34641_34655[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34640;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34656 = state_34621;
state_34621 = G__34656;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___34644,out))
})();
var state__32908__auto__ = (function (){var statearr_34642 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_34642[(6)] = c__32906__auto___34644);

return statearr_34642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___34644,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34658 = arguments.length;
switch (G__34658) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32906__auto___34724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___34724,out){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___34724,out){
return (function (state_34696){
var state_val_34697 = (state_34696[(1)]);
if((state_val_34697 === (7))){
var inst_34692 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34698_34725 = state_34696__$1;
(statearr_34698_34725[(2)] = inst_34692);

(statearr_34698_34725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (1))){
var inst_34659 = (new Array(n));
var inst_34660 = inst_34659;
var inst_34661 = (0);
var state_34696__$1 = (function (){var statearr_34699 = state_34696;
(statearr_34699[(7)] = inst_34660);

(statearr_34699[(8)] = inst_34661);

return statearr_34699;
})();
var statearr_34700_34726 = state_34696__$1;
(statearr_34700_34726[(2)] = null);

(statearr_34700_34726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (4))){
var inst_34664 = (state_34696[(9)]);
var inst_34664__$1 = (state_34696[(2)]);
var inst_34665 = (inst_34664__$1 == null);
var inst_34666 = cljs.core.not(inst_34665);
var state_34696__$1 = (function (){var statearr_34701 = state_34696;
(statearr_34701[(9)] = inst_34664__$1);

return statearr_34701;
})();
if(inst_34666){
var statearr_34702_34727 = state_34696__$1;
(statearr_34702_34727[(1)] = (5));

} else {
var statearr_34703_34728 = state_34696__$1;
(statearr_34703_34728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (15))){
var inst_34686 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34704_34729 = state_34696__$1;
(statearr_34704_34729[(2)] = inst_34686);

(statearr_34704_34729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (13))){
var state_34696__$1 = state_34696;
var statearr_34705_34730 = state_34696__$1;
(statearr_34705_34730[(2)] = null);

(statearr_34705_34730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (6))){
var inst_34661 = (state_34696[(8)]);
var inst_34682 = (inst_34661 > (0));
var state_34696__$1 = state_34696;
if(cljs.core.truth_(inst_34682)){
var statearr_34706_34731 = state_34696__$1;
(statearr_34706_34731[(1)] = (12));

} else {
var statearr_34707_34732 = state_34696__$1;
(statearr_34707_34732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (3))){
var inst_34694 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34696__$1,inst_34694);
} else {
if((state_val_34697 === (12))){
var inst_34660 = (state_34696[(7)]);
var inst_34684 = cljs.core.vec(inst_34660);
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34696__$1,(15),out,inst_34684);
} else {
if((state_val_34697 === (2))){
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34696__$1,(4),ch);
} else {
if((state_val_34697 === (11))){
var inst_34676 = (state_34696[(2)]);
var inst_34677 = (new Array(n));
var inst_34660 = inst_34677;
var inst_34661 = (0);
var state_34696__$1 = (function (){var statearr_34708 = state_34696;
(statearr_34708[(7)] = inst_34660);

(statearr_34708[(10)] = inst_34676);

(statearr_34708[(8)] = inst_34661);

return statearr_34708;
})();
var statearr_34709_34733 = state_34696__$1;
(statearr_34709_34733[(2)] = null);

(statearr_34709_34733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (9))){
var inst_34660 = (state_34696[(7)]);
var inst_34674 = cljs.core.vec(inst_34660);
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34696__$1,(11),out,inst_34674);
} else {
if((state_val_34697 === (5))){
var inst_34660 = (state_34696[(7)]);
var inst_34664 = (state_34696[(9)]);
var inst_34669 = (state_34696[(11)]);
var inst_34661 = (state_34696[(8)]);
var inst_34668 = (inst_34660[inst_34661] = inst_34664);
var inst_34669__$1 = (inst_34661 + (1));
var inst_34670 = (inst_34669__$1 < n);
var state_34696__$1 = (function (){var statearr_34710 = state_34696;
(statearr_34710[(12)] = inst_34668);

(statearr_34710[(11)] = inst_34669__$1);

return statearr_34710;
})();
if(cljs.core.truth_(inst_34670)){
var statearr_34711_34734 = state_34696__$1;
(statearr_34711_34734[(1)] = (8));

} else {
var statearr_34712_34735 = state_34696__$1;
(statearr_34712_34735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (14))){
var inst_34689 = (state_34696[(2)]);
var inst_34690 = cljs.core.async.close_BANG_(out);
var state_34696__$1 = (function (){var statearr_34714 = state_34696;
(statearr_34714[(13)] = inst_34689);

return statearr_34714;
})();
var statearr_34715_34736 = state_34696__$1;
(statearr_34715_34736[(2)] = inst_34690);

(statearr_34715_34736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (10))){
var inst_34680 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34716_34737 = state_34696__$1;
(statearr_34716_34737[(2)] = inst_34680);

(statearr_34716_34737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (8))){
var inst_34660 = (state_34696[(7)]);
var inst_34669 = (state_34696[(11)]);
var tmp34713 = inst_34660;
var inst_34660__$1 = tmp34713;
var inst_34661 = inst_34669;
var state_34696__$1 = (function (){var statearr_34717 = state_34696;
(statearr_34717[(7)] = inst_34660__$1);

(statearr_34717[(8)] = inst_34661);

return statearr_34717;
})();
var statearr_34718_34738 = state_34696__$1;
(statearr_34718_34738[(2)] = null);

(statearr_34718_34738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__32906__auto___34724,out))
;
return ((function (switch__32732__auto__,c__32906__auto___34724,out){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34719[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34719[(1)] = (1));

return statearr_34719;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34696){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34696);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34720){if((e34720 instanceof Object)){
var ex__32736__auto__ = e34720;
var statearr_34721_34739 = state_34696;
(statearr_34721_34739[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34740 = state_34696;
state_34696 = G__34740;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___34724,out))
})();
var state__32908__auto__ = (function (){var statearr_34722 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_34722[(6)] = c__32906__auto___34724);

return statearr_34722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___34724,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34742 = arguments.length;
switch (G__34742) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32906__auto___34812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32906__auto___34812,out){
return (function (){
var f__32907__auto__ = (function (){var switch__32732__auto__ = ((function (c__32906__auto___34812,out){
return (function (state_34784){
var state_val_34785 = (state_34784[(1)]);
if((state_val_34785 === (7))){
var inst_34780 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34786_34813 = state_34784__$1;
(statearr_34786_34813[(2)] = inst_34780);

(statearr_34786_34813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (1))){
var inst_34743 = [];
var inst_34744 = inst_34743;
var inst_34745 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34784__$1 = (function (){var statearr_34787 = state_34784;
(statearr_34787[(7)] = inst_34745);

(statearr_34787[(8)] = inst_34744);

return statearr_34787;
})();
var statearr_34788_34814 = state_34784__$1;
(statearr_34788_34814[(2)] = null);

(statearr_34788_34814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (4))){
var inst_34748 = (state_34784[(9)]);
var inst_34748__$1 = (state_34784[(2)]);
var inst_34749 = (inst_34748__$1 == null);
var inst_34750 = cljs.core.not(inst_34749);
var state_34784__$1 = (function (){var statearr_34789 = state_34784;
(statearr_34789[(9)] = inst_34748__$1);

return statearr_34789;
})();
if(inst_34750){
var statearr_34790_34815 = state_34784__$1;
(statearr_34790_34815[(1)] = (5));

} else {
var statearr_34791_34816 = state_34784__$1;
(statearr_34791_34816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (15))){
var inst_34774 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34792_34817 = state_34784__$1;
(statearr_34792_34817[(2)] = inst_34774);

(statearr_34792_34817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (13))){
var state_34784__$1 = state_34784;
var statearr_34793_34818 = state_34784__$1;
(statearr_34793_34818[(2)] = null);

(statearr_34793_34818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (6))){
var inst_34744 = (state_34784[(8)]);
var inst_34769 = inst_34744.length;
var inst_34770 = (inst_34769 > (0));
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34770)){
var statearr_34794_34819 = state_34784__$1;
(statearr_34794_34819[(1)] = (12));

} else {
var statearr_34795_34820 = state_34784__$1;
(statearr_34795_34820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (3))){
var inst_34782 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34784__$1,inst_34782);
} else {
if((state_val_34785 === (12))){
var inst_34744 = (state_34784[(8)]);
var inst_34772 = cljs.core.vec(inst_34744);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34784__$1,(15),out,inst_34772);
} else {
if((state_val_34785 === (2))){
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34784__$1,(4),ch);
} else {
if((state_val_34785 === (11))){
var inst_34748 = (state_34784[(9)]);
var inst_34752 = (state_34784[(10)]);
var inst_34762 = (state_34784[(2)]);
var inst_34763 = [];
var inst_34764 = inst_34763.push(inst_34748);
var inst_34744 = inst_34763;
var inst_34745 = inst_34752;
var state_34784__$1 = (function (){var statearr_34796 = state_34784;
(statearr_34796[(11)] = inst_34764);

(statearr_34796[(7)] = inst_34745);

(statearr_34796[(12)] = inst_34762);

(statearr_34796[(8)] = inst_34744);

return statearr_34796;
})();
var statearr_34797_34821 = state_34784__$1;
(statearr_34797_34821[(2)] = null);

(statearr_34797_34821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (9))){
var inst_34744 = (state_34784[(8)]);
var inst_34760 = cljs.core.vec(inst_34744);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34784__$1,(11),out,inst_34760);
} else {
if((state_val_34785 === (5))){
var inst_34748 = (state_34784[(9)]);
var inst_34752 = (state_34784[(10)]);
var inst_34745 = (state_34784[(7)]);
var inst_34752__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34748) : f.call(null,inst_34748));
var inst_34753 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34752__$1,inst_34745);
var inst_34754 = cljs.core.keyword_identical_QMARK_(inst_34745,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34755 = ((inst_34753) || (inst_34754));
var state_34784__$1 = (function (){var statearr_34798 = state_34784;
(statearr_34798[(10)] = inst_34752__$1);

return statearr_34798;
})();
if(cljs.core.truth_(inst_34755)){
var statearr_34799_34822 = state_34784__$1;
(statearr_34799_34822[(1)] = (8));

} else {
var statearr_34800_34823 = state_34784__$1;
(statearr_34800_34823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (14))){
var inst_34777 = (state_34784[(2)]);
var inst_34778 = cljs.core.async.close_BANG_(out);
var state_34784__$1 = (function (){var statearr_34802 = state_34784;
(statearr_34802[(13)] = inst_34777);

return statearr_34802;
})();
var statearr_34803_34824 = state_34784__$1;
(statearr_34803_34824[(2)] = inst_34778);

(statearr_34803_34824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (10))){
var inst_34767 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34804_34825 = state_34784__$1;
(statearr_34804_34825[(2)] = inst_34767);

(statearr_34804_34825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (8))){
var inst_34748 = (state_34784[(9)]);
var inst_34752 = (state_34784[(10)]);
var inst_34744 = (state_34784[(8)]);
var inst_34757 = inst_34744.push(inst_34748);
var tmp34801 = inst_34744;
var inst_34744__$1 = tmp34801;
var inst_34745 = inst_34752;
var state_34784__$1 = (function (){var statearr_34805 = state_34784;
(statearr_34805[(14)] = inst_34757);

(statearr_34805[(7)] = inst_34745);

(statearr_34805[(8)] = inst_34744__$1);

return statearr_34805;
})();
var statearr_34806_34826 = state_34784__$1;
(statearr_34806_34826[(2)] = null);

(statearr_34806_34826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__32906__auto___34812,out))
;
return ((function (switch__32732__auto__,c__32906__auto___34812,out){
return (function() {
var cljs$core$async$state_machine__32733__auto__ = null;
var cljs$core$async$state_machine__32733__auto____0 = (function (){
var statearr_34807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34807[(0)] = cljs$core$async$state_machine__32733__auto__);

(statearr_34807[(1)] = (1));

return statearr_34807;
});
var cljs$core$async$state_machine__32733__auto____1 = (function (state_34784){
while(true){
var ret_value__32734__auto__ = (function (){try{while(true){
var result__32735__auto__ = switch__32732__auto__(state_34784);
if(cljs.core.keyword_identical_QMARK_(result__32735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32735__auto__;
}
break;
}
}catch (e34808){if((e34808 instanceof Object)){
var ex__32736__auto__ = e34808;
var statearr_34809_34827 = state_34784;
(statearr_34809_34827[(5)] = ex__32736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34828 = state_34784;
state_34784 = G__34828;
continue;
} else {
return ret_value__32734__auto__;
}
break;
}
});
cljs$core$async$state_machine__32733__auto__ = function(state_34784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32733__auto____1.call(this,state_34784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32733__auto____0;
cljs$core$async$state_machine__32733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32733__auto____1;
return cljs$core$async$state_machine__32733__auto__;
})()
;})(switch__32732__auto__,c__32906__auto___34812,out))
})();
var state__32908__auto__ = (function (){var statearr_34810 = (f__32907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32907__auto__.cljs$core$IFn$_invoke$arity$0() : f__32907__auto__.call(null));
(statearr_34810[(6)] = c__32906__auto___34812);

return statearr_34810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32908__auto__);
});})(c__32906__auto___34812,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
