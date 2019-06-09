// Compiled by ClojureScript 1.10.520 {}
goog.provide('snake.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.EventType');
goog.require('cljs.test');
snake.core.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("canvas","ctx","canvas/ctx",(-1810717598)),new cljs.core.Keyword("canvas","background-color","canvas/background-color",(-880158942)),new cljs.core.Keyword("canvas","width","canvas/width",(-1716125853)),new cljs.core.Keyword("canvas","height","canvas/height",(-341473626)),new cljs.core.Keyword("snake","alive","snake/alive",(1332124362)),new cljs.core.Keyword("snake","width","snake/width",(-240913525)),new cljs.core.Keyword("canvas","element","canvas/element",(2268429)),new cljs.core.Keyword("snake","food","snake/food",(-1801089391)),new cljs.core.Keyword("snake","food-color","snake/food-color",(-277421869)),new cljs.core.Keyword("snake","border","snake/border",(1336458363)),new cljs.core.Keyword("snake","body","snake/body",(2086900507)),new cljs.core.Keyword("snake","direction","snake/direction",(-659051107)),new cljs.core.Keyword("snake","height","snake/height",(865277118)),new cljs.core.Keyword("snake","body-color","snake/body-color",(-1014631874))],[goog.dom.getElement("canvas").getContext("2d"),"white",(640),(480),true,(32),goog.dom.getElement("canvas"),null,"red",(2),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(24),"lime"]));
snake.core.add_coordinates = (function snake$core$add_coordinates(p__1231,p__1232){
var vec__1233 = p__1231;
var x1 = cljs.core.nth.call(null,vec__1233,(0),null);
var y1 = cljs.core.nth.call(null,vec__1233,(1),null);
var vec__1236 = p__1232;
var x2 = cljs.core.nth.call(null,vec__1236,(0),null);
var y2 = cljs.core.nth.call(null,vec__1236,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
snake.core.add_coordinates_test = (function snake$core$add_coordinates_test(){
return cljs.test.test_var.call(null,snake.core.add_coordinates_test.cljs$lang$var);
});
snake.core.add_coordinates_test.cljs$lang$test = (function (){
try{var values__182__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),(new cljs.core.List(null,snake.core.add_coordinates.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),cljs.core.list(new cljs.core.Symbol(null,"add-coordinates","add-coordinates",(-118079818),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),cljs.core.list(new cljs.core.Symbol(null,"add-coordinates","add-coordinates",(-118079818),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e1239){var t__191__auto__ = e1239;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),cljs.core.list(new cljs.core.Symbol(null,"add-coordinates","add-coordinates",(-118079818),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});

snake.core.add_coordinates_test.cljs$lang$var = new cljs.core.Var(function(){return snake.core.add_coordinates_test;},new cljs.core.Symbol("snake.core","add-coordinates-test","snake.core/add-coordinates-test",(1650127632),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"add-coordinates-test","add-coordinates-test",(73157507),null),null,(32),(1),(43),(43),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.add_coordinates_test)?snake.core.add_coordinates_test.cljs$lang$test:null)]));
snake.core.coordinates_equal_QMARK_ = (function snake$core$coordinates_equal_QMARK_(p__1240,p__1241){
var vec__1242 = p__1240;
var x1 = cljs.core.nth.call(null,vec__1242,(0),null);
var y1 = cljs.core.nth.call(null,vec__1242,(1),null);
var vec__1245 = p__1241;
var x2 = cljs.core.nth.call(null,vec__1245,(0),null);
var y2 = cljs.core.nth.call(null,vec__1245,(1),null);
return ((cljs.core._EQ_.call(null,x1,x2)) && (cljs.core._EQ_.call(null,y1,y2)));
});
snake.core.coordinates_equal_QMARK__test = (function snake$core$coordinates_equal_QMARK__test(){
return cljs.test.test_var.call(null,snake.core.coordinates_equal_QMARK__test.cljs$lang$var);
});
snake.core.coordinates_equal_QMARK__test.cljs$lang$test = (function (){
try{var values__182__auto__ = (new cljs.core.List(null,false,(new cljs.core.List(null,snake.core.coordinates_equal_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),false,cljs.core.list(new cljs.core.Symbol(null,"coordinates-equal?","coordinates-equal?",(-127781251),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),false,cljs.core.list(new cljs.core.Symbol(null,"coordinates-equal?","coordinates-equal?",(-127781251),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e1248){var t__191__auto__ = e1248;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),false,cljs.core.list(new cljs.core.Symbol(null,"coordinates-equal?","coordinates-equal?",(-127781251),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});

snake.core.coordinates_equal_QMARK__test.cljs$lang$var = new cljs.core.Var(function(){return snake.core.coordinates_equal_QMARK__test;},new cljs.core.Symbol("snake.core","coordinates-equal?-test","snake.core/coordinates-equal?-test",(1059467545),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"coordinates-equal?-test","coordinates-equal?-test",(-651859548),null),null,(35),(1),(51),(51),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.coordinates_equal_QMARK__test)?snake.core.coordinates_equal_QMARK__test.cljs$lang$test:null)]));
/**
 * Draw the point on canvas according to snake's width/height.
 */
snake.core.draw = (function snake$core$draw(p__1249,color){
var vec__1250 = p__1249;
var x = cljs.core.nth.call(null,vec__1250,(0),null);
var y = cljs.core.nth.call(null,vec__1250,(1),null);
var map__1253 = cljs.core.deref.call(null,snake.core.state);
var map__1253__$1 = (((((!((map__1253 == null))))?(((((map__1253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1253):map__1253);
var ctx = cljs.core.get.call(null,map__1253__$1,new cljs.core.Keyword("canvas","ctx","canvas/ctx",(-1810717598)));
var width = cljs.core.get.call(null,map__1253__$1,new cljs.core.Keyword("snake","width","snake/width",(-240913525)));
var height = cljs.core.get.call(null,map__1253__$1,new cljs.core.Keyword("snake","height","snake/height",(865277118)));
var border = cljs.core.get.call(null,map__1253__$1,new cljs.core.Keyword("snake","border","snake/border",(1336458363)));
ctx.fillStyle = color;

return ctx.fillRect((x * width),(y * height),(width - border),(height - border));
});
snake.core.draw_test = (function snake$core$draw_test(){
return cljs.test.test_var.call(null,snake.core.draw_test.cljs$lang$var);
});
snake.core.draw_test.cljs$lang$test = (function (){
try{var values__182__auto__ = (new cljs.core.List(null,"green",(new cljs.core.List(null,new cljs.core.Keyword("canvas","ctx","canvas/ctx",(-1810717598)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)).fillStyle,null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),"green",cljs.core.list(new cljs.core.Symbol(null,".-fillStyle",".-fillStyle",(-1788548302),null),cljs.core.list(new cljs.core.Keyword("canvas","ctx","canvas/ctx",(-1810717598)),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",(188719157),null),new cljs.core.Symbol(null,"state","state",(-348086572),null))))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),"green",cljs.core.list(new cljs.core.Symbol(null,".-fillStyle",".-fillStyle",(-1788548302),null),cljs.core.list(new cljs.core.Keyword("canvas","ctx","canvas/ctx",(-1810717598)),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",(188719157),null),new cljs.core.Symbol(null,"state","state",(-348086572),null))))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e1255){var t__191__auto__ = e1255;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),"green",cljs.core.list(new cljs.core.Symbol(null,".-fillStyle",".-fillStyle",(-1788548302),null),cljs.core.list(new cljs.core.Keyword("canvas","ctx","canvas/ctx",(-1810717598)),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",(188719157),null),new cljs.core.Symbol(null,"state","state",(-348086572),null))))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});

snake.core.draw_test.cljs$lang$var = new cljs.core.Var(function(){return snake.core.draw_test;},new cljs.core.Symbol("snake.core","draw-test","snake.core/draw-test",(-651553965),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"draw-test","draw-test",(2133830622),null),null,(21),(1),(73),(73),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.draw_test)?snake.core.draw_test.cljs$lang$test:null)]));
/**
 * Resize the canvas according to state.
 */
snake.core.resize_canvas = (function snake$core$resize_canvas(){
var map__1256 = cljs.core.deref.call(null,snake.core.state);
var map__1256__$1 = (((((!((map__1256 == null))))?(((((map__1256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1256):map__1256);
var element = cljs.core.get.call(null,map__1256__$1,new cljs.core.Keyword("canvas","element","canvas/element",(2268429)));
var width = cljs.core.get.call(null,map__1256__$1,new cljs.core.Keyword("canvas","width","canvas/width",(-1716125853)));
var height = cljs.core.get.call(null,map__1256__$1,new cljs.core.Keyword("canvas","height","canvas/height",(-341473626)));
element.setAttribute("width",width);

return element.setAttribute("height",height);
});
snake.core.resize_canvas_test = (function snake$core$resize_canvas_test(){
return cljs.test.test_var.call(null,snake.core.resize_canvas_test.cljs$lang$var);
});
snake.core.resize_canvas_test.cljs$lang$test = (function (){
try{var values__182__auto__ = (new cljs.core.List(null,(640),(new cljs.core.List(null,goog.dom.getElement("canvas").width,null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),(640),cljs.core.list(new cljs.core.Symbol(null,".-width",".-width",(-398940329),null),cljs.core.list(new cljs.core.Symbol("dom","getElement","dom/getElement",(572337720),null),"canvas"))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),(640),cljs.core.list(new cljs.core.Symbol(null,".-width",".-width",(-398940329),null),cljs.core.list(new cljs.core.Symbol("dom","getElement","dom/getElement",(572337720),null),"canvas"))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e1258){var t__191__auto__ = e1258;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),(640),cljs.core.list(new cljs.core.Symbol(null,".-width",".-width",(-398940329),null),cljs.core.list(new cljs.core.Symbol("dom","getElement","dom/getElement",(572337720),null),"canvas"))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});

snake.core.resize_canvas_test.cljs$lang$var = new cljs.core.Var(function(){return snake.core.resize_canvas_test;},new cljs.core.Symbol("snake.core","resize-canvas-test","snake.core/resize-canvas-test",(-377530868),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"resize-canvas-test","resize-canvas-test",(394129823),null),null,(30),(1),(95),(95),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.resize_canvas_test)?snake.core.resize_canvas_test.cljs$lang$test:null)]));
/**
 * Convert javascript's keycode to direction array.
 */
snake.core.keycode__GT_direction = (function snake$core$keycode__GT_direction(keycode){
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.UP,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),goog.events.KeyCodes.DOWN,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),goog.events.KeyCodes.LEFT,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),goog.events.KeyCodes.RIGHT,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)]),keycode,null);
});
snake.core.keycode__GT_direction_test = (function snake$core$keycode__GT_direction_test(){
return cljs.test.test_var.call(null,snake.core.keycode__GT_direction_test.cljs$lang$var);
});
snake.core.keycode__GT_direction_test.cljs$lang$test = (function (){
try{var values__182__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(new cljs.core.List(null,snake.core.keycode__GT_direction.call(null,(39)),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"keycode->direction","keycode->direction",(1581875513),null),(39))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"keycode->direction","keycode->direction",(1581875513),null),(39))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e1259){var t__191__auto__ = e1259;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"keycode->direction","keycode->direction",(1581875513),null),(39))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});

snake.core.keycode__GT_direction_test.cljs$lang$var = new cljs.core.Var(function(){return snake.core.keycode__GT_direction_test;},new cljs.core.Symbol("snake.core","keycode->direction-test","snake.core/keycode->direction-test",(355785229),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"keycode->direction-test","keycode->direction-test",(-1288195432),null),null,(35),(1),(113),(113),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.keycode__GT_direction_test)?snake.core.keycode__GT_direction_test.cljs$lang$test:null)]));
/**
 * Detect two direction array are opposite direction or not.
 */
snake.core.opposite_direction_QMARK_ = (function snake$core$opposite_direction_QMARK_(dir1,dir2){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),snake.core.add_coordinates.call(null,dir1,dir2));
});
/**
 * The keydown event handler.
 */
snake.core.on_keydown = (function snake$core$on_keydown(event){
var map__1260 = cljs.core.deref.call(null,snake.core.state);
var map__1260__$1 = (((((!((map__1260 == null))))?(((((map__1260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1260):map__1260);
var direction = cljs.core.get.call(null,map__1260__$1,new cljs.core.Keyword("snake","direction","snake/direction",(-659051107)));
var new_direction = snake.core.keycode__GT_direction.call(null,event.keyCode);
if(cljs.core.truth_(new_direction)){
if(snake.core.opposite_direction_QMARK_.call(null,new_direction,direction)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","direction","snake/direction",(-659051107))], null),new_direction);
}
} else {
return null;
}
});
/**
 * Check if axis is exceed the game board boundary.
 */
snake.core.out_of_boundary_QMARK_ = (function snake$core$out_of_boundary_QMARK_(p__1262){
var vec__1263 = p__1262;
var x = cljs.core.nth.call(null,vec__1263,(0),null);
var y = cljs.core.nth.call(null,vec__1263,(1),null);
var max_x = (new cljs.core.Keyword("canvas","width","canvas/width",(-1716125853)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)) / new cljs.core.Keyword("snake","width","snake/width",(-240913525)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)));
var max_y = (new cljs.core.Keyword("canvas","height","canvas/height",(-341473626)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)) / new cljs.core.Keyword("snake","height","snake/height",(865277118)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)));
return (((y >= max_y)) || ((y < (0))) || ((x >= max_x)) || ((x < (0))));
});
/**
 * Check if axis is collission with snake's body.
 */
snake.core.self_collission_QMARK_ = (function snake$core$self_collission_QMARK_(p__1266){
var vec__1267 = p__1266;
var x = cljs.core.nth.call(null,vec__1267,(0),null);
var y = cljs.core.nth.call(null,vec__1267,(1),null);
var map__1270 = cljs.core.deref.call(null,snake.core.state);
var map__1270__$1 = (((((!((map__1270 == null))))?(((((map__1270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1270):map__1270);
var body = cljs.core.get.call(null,map__1270__$1,new cljs.core.Keyword("snake","body","snake/body",(2086900507)));
return cljs.core.some.call(null,((function (map__1270,map__1270__$1,body,vec__1267,x,y){
return (function (p1__65_SHARP_){
return snake.core.coordinates_equal_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p1__65_SHARP_);
});})(map__1270,map__1270__$1,body,vec__1267,x,y))
,body);
});
/**
 * Check if axis is equal the food's axis.
 */
snake.core.eat_food_QMARK_ = (function snake$core$eat_food_QMARK_(p__1272){
var vec__1273 = p__1272;
var x = cljs.core.nth.call(null,vec__1273,(0),null);
var y = cljs.core.nth.call(null,vec__1273,(1),null);
var map__1276 = cljs.core.deref.call(null,snake.core.state);
var map__1276__$1 = (((((!((map__1276 == null))))?(((((map__1276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1276):map__1276);
var food = cljs.core.get.call(null,map__1276__$1,new cljs.core.Keyword("snake","food","snake/food",(-1801089391)));
return snake.core.coordinates_equal_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),food);
});
/**
 * Generate the food on a random coordinate.
 */
snake.core.generate_food = (function snake$core$generate_food(){
var map__1278 = cljs.core.deref.call(null,snake.core.state);
var map__1278__$1 = (((((!((map__1278 == null))))?(((((map__1278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1278):map__1278);
var body = cljs.core.get.call(null,map__1278__$1,new cljs.core.Keyword("snake","body","snake/body",(2086900507)));
var food = cljs.core.get.call(null,map__1278__$1,new cljs.core.Keyword("snake","food","snake/food",(-1801089391)));
var food_color = cljs.core.get.call(null,map__1278__$1,new cljs.core.Keyword("snake","food-color","snake/food-color",(-277421869)));
var max_x = (new cljs.core.Keyword("canvas","width","canvas/width",(-1716125853)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)) / new cljs.core.Keyword("snake","width","snake/width",(-240913525)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)));
var max_y = (new cljs.core.Keyword("canvas","height","canvas/height",(-341473626)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)) / new cljs.core.Keyword("snake","height","snake/height",(865277118)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)));
if((food == null)){
var food__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,max_x),cljs.core.rand_int.call(null,max_y)], null);
while(true){
if(cljs.core.not.call(null,snake.core.self_collission_QMARK_.call(null,food__$1))){
cljs.core.swap_BANG_.call(null,snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","food","snake/food",(-1801089391))], null),food__$1);

snake.core.draw.call(null,food__$1,food_color);

return food__$1;
} else {
var G__1280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,max_x),cljs.core.rand_int.call(null,max_y)], null);
food__$1 = G__1280;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * The main game-loop.
 */
snake.core.game_loop = (function snake$core$game_loop(){
var map__1281 = cljs.core.deref.call(null,snake.core.state);
var map__1281__$1 = (((((!((map__1281 == null))))?(((((map__1281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1281):map__1281);
var background_color = cljs.core.get.call(null,map__1281__$1,new cljs.core.Keyword("canvas","background-color","canvas/background-color",(-880158942)));
var body = cljs.core.get.call(null,map__1281__$1,new cljs.core.Keyword("snake","body","snake/body",(2086900507)));
var body_color = cljs.core.get.call(null,map__1281__$1,new cljs.core.Keyword("snake","body-color","snake/body-color",(-1014631874)));
var direction = cljs.core.get.call(null,map__1281__$1,new cljs.core.Keyword("snake","direction","snake/direction",(-659051107)));
var head = snake.core.add_coordinates.call(null,cljs.core.nth.call(null,body,(0)),direction);
var tail = cljs.core.last.call(null,body);
snake.core.generate_food.call(null);

if(cljs.core.truth_(snake.core.self_collission_QMARK_.call(null,head))){
alert(["Snake is collission with itself at : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(head)].join(''));

cljs.core.swap_BANG_.call(null,snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","alive","snake/alive",(1332124362))], null),false);
} else {
}

if(snake.core.out_of_boundary_QMARK_.call(null,head)){
alert(["Snake is out of boundary at :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(head)].join(''));

cljs.core.swap_BANG_.call(null,snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","alive","snake/alive",(1332124362))], null),false);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword("snake","alive","snake/alive",(1332124362)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.core.state)))){
snake.core.draw.call(null,head,body_color);

if(snake.core.eat_food_QMARK_.call(null,head)){
cljs.core.swap_BANG_.call(null,snake.core.state,cljs.core.assoc,new cljs.core.Keyword("snake","food","snake/food",(-1801089391)),null,new cljs.core.Keyword("snake","body","snake/body",(2086900507)),cljs.core.conj.call(null,body,head));
} else {
snake.core.draw.call(null,tail,background_color);

cljs.core.swap_BANG_.call(null,snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","body","snake/body",(2086900507))], null),cljs.core.drop_last.call(null,cljs.core.conj.call(null,body,head)));
}

return window.setTimeout(((function (map__1281,map__1281__$1,background_color,body,body_color,direction,head,tail){
return (function (){
return snake.core.game_loop.call(null);
});})(map__1281,map__1281__$1,background_color,body,body_color,direction,head,tail))
,(150));
} else {
return null;
}
});
snake.core.init = (function snake$core$init(){
console.log("init");

snake.core.resize_canvas.call(null);

goog.events.removeAll(document);

goog.events.listen(document,goog.events.EventType.KEYDOWN,snake.core.on_keydown);

return snake.core.game_loop.call(null);
});
cljs.test.run_block.call(null,(function (){var env1283 = cljs.test.empty_env.call(null);
var summary1284 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",(577538877)),(0),new cljs.core.Keyword(null,"pass","pass",(1574159993)),(0),new cljs.core.Keyword(null,"fail","fail",(1706214930)),(0),new cljs.core.Keyword(null,"error","error",(-978969032)),(0),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"summary","summary",(380847952))], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env1283,summary1284){
return (function (){
cljs.test.set_env_BANG_.call(null,env1283);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null)], null));

return cljs.test.block.call(null,(function (){var env__194__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env1283,summary1284){
return (function (){
if((env__194__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__194__auto__,env1283,summary1284))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return snake.core.add_coordinates_test;},new cljs.core.Symbol("snake.core","add-coordinates-test","snake.core/add-coordinates-test",(1650127632),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"add-coordinates-test","add-coordinates-test",(73157507),null),null,(32),(1),(43),(43),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.add_coordinates_test)?snake.core.add_coordinates_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return snake.core.coordinates_equal_QMARK__test;},new cljs.core.Symbol("snake.core","coordinates-equal?-test","snake.core/coordinates-equal?-test",(1059467545),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"coordinates-equal?-test","coordinates-equal?-test",(-651859548),null),null,(35),(1),(51),(51),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.coordinates_equal_QMARK__test)?snake.core.coordinates_equal_QMARK__test.cljs$lang$test:null)])),new cljs.core.Var(function(){return snake.core.draw_test;},new cljs.core.Symbol("snake.core","draw-test","snake.core/draw-test",(-651553965),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"draw-test","draw-test",(2133830622),null),null,(21),(1),(73),(73),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.draw_test)?snake.core.draw_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return snake.core.resize_canvas_test;},new cljs.core.Symbol("snake.core","resize-canvas-test","snake.core/resize-canvas-test",(-377530868),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"resize-canvas-test","resize-canvas-test",(394129823),null),null,(30),(1),(95),(95),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.resize_canvas_test)?snake.core.resize_canvas_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return snake.core.keycode__GT_direction_test;},new cljs.core.Symbol("snake.core","keycode->direction-test","snake.core/keycode->direction-test",(355785229),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null),new cljs.core.Symbol(null,"keycode->direction-test","keycode->direction-test",(-1288195432),null),null,(35),(1),(113),(113),cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.keycode__GT_direction_test)?snake.core.keycode__GT_direction_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env1283,summary1284){
return (function (){
if((env__194__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__194__auto__,env1283,summary1284))
], null));
})());
});})(env1283,summary1284))
,((function (env1283,summary1284){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"snake.core","snake.core",(-378275309),null)], null));
});})(env1283,summary1284))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env1283,summary1284){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary1284,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary1284),new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env1283,summary1284))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env1283,summary1284){
return (function (){
cljs.test.set_env_BANG_.call(null,env1283);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary1284));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary1284),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563))));

return cljs.test.clear_env_BANG_.call(null);
});})(env1283,summary1284))
], null));
})());
