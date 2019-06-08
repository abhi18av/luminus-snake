goog.provide('snake.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.events.KeyCodes');
goog.require('cljs.test');
snake.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("canvas","ctx","canvas/ctx",-1810717598),new cljs.core.Keyword("canvas","background-color","canvas/background-color",-880158942),new cljs.core.Keyword("canvas","width","canvas/width",-1716125853),new cljs.core.Keyword("snake","food-count","snake/food-count",-1629228157),new cljs.core.Keyword("canvas","height","canvas/height",-341473626),new cljs.core.Keyword("snake","speed","snake/speed",1096680391),new cljs.core.Keyword("snake","alive","snake/alive",1332124362),new cljs.core.Keyword("snake","width","snake/width",-240913525),new cljs.core.Keyword("canvas","element","canvas/element",2268429),new cljs.core.Keyword("snake","food","snake/food",-1801089391),new cljs.core.Keyword("snake","food-color","snake/food-color",-277421869),new cljs.core.Keyword("snake","score","snake/score",-2007099372),new cljs.core.Keyword("snake","border","snake/border",1336458363),new cljs.core.Keyword("snake","body","snake/body",2086900507),new cljs.core.Keyword("snake","direction","snake/direction",-659051107),new cljs.core.Keyword("snake","height","snake/height",865277118),new cljs.core.Keyword("snake","body-color","snake/body-color",-1014631874)],[goog.dom.getElement("canvas").getContext("2d"),"white",(640),null,(480),(150),true,(32),goog.dom.getElement("canvas"),null,"red",(0),(2),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(24),"lime"]));
snake.core.add_coordinates = (function snake$core$add_coordinates(p__26055,p__26056){
var vec__26057 = p__26055;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26057,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26057,(1),null);
var vec__26060 = p__26056;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26060,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26060,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
snake.core.add_coordinates_test = (function snake$core$add_coordinates_test(){
return cljs.test.test_var(snake.core.add_coordinates_test.cljs$lang$var);
});
snake.core.add_coordinates_test.cljs$lang$test = (function (){
try{var values__11811__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),(new cljs.core.List(null,snake.core.add_coordinates(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)),null,(1),null)),(2),null));
var result__11812__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11811__auto__);
if(cljs.core.truth_(result__11812__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),cljs.core.list(new cljs.core.Symbol(null,"add-coordinates","add-coordinates",-118079818,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11811__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),cljs.core.list(new cljs.core.Symbol(null,"add-coordinates","add-coordinates",-118079818,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11811__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11812__auto__;
}catch (e26063){var t__11856__auto__ = e26063;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),cljs.core.list(new cljs.core.Symbol(null,"add-coordinates","add-coordinates",-118079818,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11856__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

var the_var__12224__auto___26064 = new cljs.core.Var(function(){return snake.core.add_coordinates_test;},new cljs.core.Symbol("snake.core","add-coordinates-test","snake.core/add-coordinates-test",1650127632,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"add-coordinates-test","add-coordinates-test",73157507,null),"snake/core.cljs",32,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.add_coordinates_test)?snake.core.add_coordinates_test.cljs$lang$test:null)]));
snake.core.add_coordinates_test.cljs$lang$var = the_var__12224__auto___26064;

shadow.test.env.register_test(new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"add-coordinates-test","add-coordinates-test",73157507,null),the_var__12224__auto___26064);
snake.core.coordinates_equal_QMARK_ = (function snake$core$coordinates_equal_QMARK_(p__26065,p__26066){
var vec__26067 = p__26065;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26067,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26067,(1),null);
var vec__26070 = p__26066;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26070,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26070,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2)));
});
snake.core.coordinates_equal_QMARK__test = (function snake$core$coordinates_equal_QMARK__test(){
return cljs.test.test_var(snake.core.coordinates_equal_QMARK__test.cljs$lang$var);
});
snake.core.coordinates_equal_QMARK__test.cljs$lang$test = (function (){
try{var values__11811__auto__ = (new cljs.core.List(null,false,(new cljs.core.List(null,snake.core.coordinates_equal_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)),null,(1),null)),(2),null));
var result__11812__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11811__auto__);
if(cljs.core.truth_(result__11812__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"coordinates-equal?","coordinates-equal?",-127781251,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11811__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"coordinates-equal?","coordinates-equal?",-127781251,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11811__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11812__auto__;
}catch (e26073){var t__11856__auto__ = e26073;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"coordinates-equal?","coordinates-equal?",-127781251,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11856__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

var the_var__12224__auto___26074 = new cljs.core.Var(function(){return snake.core.coordinates_equal_QMARK__test;},new cljs.core.Symbol("snake.core","coordinates-equal?-test","snake.core/coordinates-equal?-test",1059467545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"coordinates-equal?-test","coordinates-equal?-test",-651859548,null),"snake/core.cljs",35,1,51,51,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.coordinates_equal_QMARK__test)?snake.core.coordinates_equal_QMARK__test.cljs$lang$test:null)]));
snake.core.coordinates_equal_QMARK__test.cljs$lang$var = the_var__12224__auto___26074;

shadow.test.env.register_test(new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"coordinates-equal?-test","coordinates-equal?-test",-651859548,null),the_var__12224__auto___26074);
/**
 * Draw the point on canvas according to snake's width/height.
 */
snake.core.draw = (function snake$core$draw(p__26075,color){
var vec__26076 = p__26075;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26076,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26076,(1),null);
var map__26079 = cljs.core.deref(snake.core.state);
var map__26079__$1 = ((((!((map__26079 == null)))?(((((map__26079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26079):map__26079);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26079__$1,new cljs.core.Keyword("canvas","ctx","canvas/ctx",-1810717598));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26079__$1,new cljs.core.Keyword("snake","width","snake/width",-240913525));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26079__$1,new cljs.core.Keyword("snake","height","snake/height",865277118));
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26079__$1,new cljs.core.Keyword("snake","border","snake/border",1336458363));
ctx.fillStyle = color;

return ctx.fillRect((x * width),(y * height),(width - border),(height - border));
});
snake.core.draw_test = (function snake$core$draw_test(){
return cljs.test.test_var(snake.core.draw_test.cljs$lang$var);
});
snake.core.draw_test.cljs$lang$test = (function (){
try{var values__11811__auto___26083 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(24),(30),(22)], null),(new cljs.core.List(null,snake.core.draw(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),"green"),null,(1),null)),(2),null));
var result__11812__auto___26084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11811__auto___26083);
if(cljs.core.truth_(result__11812__auto___26084)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(24),(30),(22)], null),cljs.core.list(new cljs.core.Symbol(null,"draw","draw",-1296104095,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),"green")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11811__auto___26083),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(24),(30),(22)], null),cljs.core.list(new cljs.core.Symbol(null,"draw","draw",-1296104095,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),"green")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11811__auto___26083),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26081){var t__11856__auto___26085 = e26081;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(24),(30),(22)], null),cljs.core.list(new cljs.core.Symbol(null,"draw","draw",-1296104095,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),"green")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11856__auto___26085,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11811__auto__ = (new cljs.core.List(null,"#008000",(new cljs.core.List(null,new cljs.core.Keyword("canvas","ctx","canvas/ctx",-1810717598).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)).fillStyle,null,(1),null)),(2),null));
var result__11812__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11811__auto__);
if(cljs.core.truth_(result__11812__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"#008000",cljs.core.list(new cljs.core.Symbol(null,".-fillStyle",".-fillStyle",-1788548302,null),cljs.core.list(new cljs.core.Keyword("canvas","ctx","canvas/ctx",-1810717598),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"state","state",-348086572,null))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11811__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"#008000",cljs.core.list(new cljs.core.Symbol(null,".-fillStyle",".-fillStyle",-1788548302,null),cljs.core.list(new cljs.core.Keyword("canvas","ctx","canvas/ctx",-1810717598),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"state","state",-348086572,null))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11811__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11812__auto__;
}catch (e26082){var t__11856__auto__ = e26082;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"#008000",cljs.core.list(new cljs.core.Symbol(null,".-fillStyle",".-fillStyle",-1788548302,null),cljs.core.list(new cljs.core.Keyword("canvas","ctx","canvas/ctx",-1810717598),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"state","state",-348086572,null))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11856__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

var the_var__12224__auto___26086 = new cljs.core.Var(function(){return snake.core.draw_test;},new cljs.core.Symbol("snake.core","draw-test","snake.core/draw-test",-651553965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"draw-test","draw-test",2133830622,null),"snake/core.cljs",21,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.draw_test)?snake.core.draw_test.cljs$lang$test:null)]));
snake.core.draw_test.cljs$lang$var = the_var__12224__auto___26086;

shadow.test.env.register_test(new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"draw-test","draw-test",2133830622,null),the_var__12224__auto___26086);
/**
 * Resize the canvas according to state.
 */
snake.core.resize_canvas = (function snake$core$resize_canvas(){
var map__26087 = cljs.core.deref(snake.core.state);
var map__26087__$1 = ((((!((map__26087 == null)))?(((((map__26087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26087):map__26087);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26087__$1,new cljs.core.Keyword("canvas","element","canvas/element",2268429));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26087__$1,new cljs.core.Keyword("canvas","width","canvas/width",-1716125853));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26087__$1,new cljs.core.Keyword("canvas","height","canvas/height",-341473626));
element.setAttribute("width",width);

return element.setAttribute("height",height);
});
snake.core.resize_canvas_test = (function snake$core$resize_canvas_test(){
return cljs.test.test_var(snake.core.resize_canvas_test.cljs$lang$var);
});
snake.core.resize_canvas_test.cljs$lang$test = (function (){
try{var values__11811__auto__ = (new cljs.core.List(null,(300),(new cljs.core.List(null,goog.dom.getElement("canvas").width,null,(1),null)),(2),null));
var result__11812__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11811__auto__);
if(cljs.core.truth_(result__11812__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(300),cljs.core.list(new cljs.core.Symbol(null,".-width",".-width",-398940329,null),cljs.core.list(new cljs.core.Symbol("dom","getElement","dom/getElement",572337720,null),"canvas"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11811__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(300),cljs.core.list(new cljs.core.Symbol(null,".-width",".-width",-398940329,null),cljs.core.list(new cljs.core.Symbol("dom","getElement","dom/getElement",572337720,null),"canvas"))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11811__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11812__auto__;
}catch (e26089){var t__11856__auto__ = e26089;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(300),cljs.core.list(new cljs.core.Symbol(null,".-width",".-width",-398940329,null),cljs.core.list(new cljs.core.Symbol("dom","getElement","dom/getElement",572337720,null),"canvas"))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11856__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

var the_var__12224__auto___26090 = new cljs.core.Var(function(){return snake.core.resize_canvas_test;},new cljs.core.Symbol("snake.core","resize-canvas-test","snake.core/resize-canvas-test",-377530868,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"resize-canvas-test","resize-canvas-test",394129823,null),"snake/core.cljs",30,1,91,91,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.resize_canvas_test)?snake.core.resize_canvas_test.cljs$lang$test:null)]));
snake.core.resize_canvas_test.cljs$lang$var = the_var__12224__auto___26090;

shadow.test.env.register_test(new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"resize-canvas-test","resize-canvas-test",394129823,null),the_var__12224__auto___26090);
/**
 * Convert javascript's keycode to direction array.
 */
snake.core.keycode__GT_direction = (function snake$core$keycode__GT_direction(keycode){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.UP,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),goog.events.KeyCodes.DOWN,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),goog.events.KeyCodes.LEFT,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),goog.events.KeyCodes.RIGHT,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)]),keycode,null);
});
snake.core.keycode__GT_direction_test = (function snake$core$keycode__GT_direction_test(){
return cljs.test.test_var(snake.core.keycode__GT_direction_test.cljs$lang$var);
});
snake.core.keycode__GT_direction_test.cljs$lang$test = (function (){
try{var values__11811__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(new cljs.core.List(null,snake.core.keycode__GT_direction((39)),null,(1),null)),(2),null));
var result__11812__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11811__auto__);
if(cljs.core.truth_(result__11812__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"keycode->direction","keycode->direction",1581875513,null),(39))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11811__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"keycode->direction","keycode->direction",1581875513,null),(39))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11811__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11812__auto__;
}catch (e26091){var t__11856__auto__ = e26091;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"keycode->direction","keycode->direction",1581875513,null),(39))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11856__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

var the_var__12224__auto___26092 = new cljs.core.Var(function(){return snake.core.keycode__GT_direction_test;},new cljs.core.Symbol("snake.core","keycode->direction-test","snake.core/keycode->direction-test",355785229,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"keycode->direction-test","keycode->direction-test",-1288195432,null),"snake/core.cljs",35,1,109,109,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.keycode__GT_direction_test)?snake.core.keycode__GT_direction_test.cljs$lang$test:null)]));
snake.core.keycode__GT_direction_test.cljs$lang$var = the_var__12224__auto___26092;

shadow.test.env.register_test(new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"keycode->direction-test","keycode->direction-test",-1288195432,null),the_var__12224__auto___26092);
/**
 * Detect two direction array are opposite direction or not.
 */
snake.core.opposite_direction_QMARK_ = (function snake$core$opposite_direction_QMARK_(dir1,dir2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),snake.core.add_coordinates(dir1,dir2));
});
/**
 * The keydown event handler.
 */
snake.core.on_keydown = (function snake$core$on_keydown(event){
var map__26093 = cljs.core.deref(snake.core.state);
var map__26093__$1 = ((((!((map__26093 == null)))?(((((map__26093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26093):map__26093);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26093__$1,new cljs.core.Keyword("snake","direction","snake/direction",-659051107));
var new_direction = snake.core.keycode__GT_direction(event.keyCode);
if(cljs.core.truth_(new_direction)){
if(cljs.core.truth_(snake.core.opposite_direction_QMARK_(new_direction,direction))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","direction","snake/direction",-659051107)], null),new_direction);
}
} else {
return null;
}
});
/**
 * Check if axis is exceed the game board boundary.
 */
snake.core.out_of_boundary_QMARK_ = (function snake$core$out_of_boundary_QMARK_(p__26095){
var vec__26096 = p__26095;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(1),null);
var max_x = (new cljs.core.Keyword("canvas","width","canvas/width",-1716125853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)) / new cljs.core.Keyword("snake","width","snake/width",-240913525).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)));
var max_y = (new cljs.core.Keyword("canvas","height","canvas/height",-341473626).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)) / new cljs.core.Keyword("snake","height","snake/height",865277118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)));
return (((y >= max_y)) || ((y < (0))) || ((x >= max_x)) || ((x < (0))));
});
/**
 * Check if axis is collision with snake's body.
 */
snake.core.self_collission_QMARK_ = (function snake$core$self_collission_QMARK_(p__26100){
var vec__26101 = p__26100;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26101,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26101,(1),null);
var map__26104 = cljs.core.deref(snake.core.state);
var map__26104__$1 = ((((!((map__26104 == null)))?(((((map__26104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26104):map__26104);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26104__$1,new cljs.core.Keyword("snake","body","snake/body",2086900507));
return cljs.core.some(((function (map__26104,map__26104__$1,body,vec__26101,x,y){
return (function (p1__26099_SHARP_){
return snake.core.coordinates_equal_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p1__26099_SHARP_);
});})(map__26104,map__26104__$1,body,vec__26101,x,y))
,body);
});
/**
 * Check if axis is equal the food's axis.
 */
snake.core.eat_food_QMARK_ = (function snake$core$eat_food_QMARK_(p__26106){
var vec__26107 = p__26106;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26107,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26107,(1),null);
var map__26110 = cljs.core.deref(snake.core.state);
var map__26110__$1 = ((((!((map__26110 == null)))?(((((map__26110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26110):map__26110);
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26110__$1,new cljs.core.Keyword("snake","food","snake/food",-1801089391));
return snake.core.coordinates_equal_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),food);
});
/**
 * Generate the food on a random coordinate.
 */
snake.core.generate_food = (function snake$core$generate_food(){
var map__26112 = cljs.core.deref(snake.core.state);
var map__26112__$1 = ((((!((map__26112 == null)))?(((((map__26112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26112):map__26112);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26112__$1,new cljs.core.Keyword("snake","body","snake/body",2086900507));
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26112__$1,new cljs.core.Keyword("snake","food","snake/food",-1801089391));
var food_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26112__$1,new cljs.core.Keyword("snake","food-color","snake/food-color",-277421869));
var max_x = (new cljs.core.Keyword("canvas","width","canvas/width",-1716125853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)) / new cljs.core.Keyword("snake","width","snake/width",-240913525).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)));
var max_y = (new cljs.core.Keyword("canvas","height","canvas/height",-341473626).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)) / new cljs.core.Keyword("snake","height","snake/height",865277118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)));
if((food == null)){
var food__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(max_x),cljs.core.rand_int(max_y)], null);
while(true){
if(cljs.core.not(snake.core.self_collission_QMARK_(food__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","food","snake/food",-1801089391)], null),food__$1);

snake.core.draw(food__$1,food_color);

return food__$1;
} else {
var G__26114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(max_x),cljs.core.rand_int(max_y)], null);
food__$1 = G__26114;
continue;
}
break;
}
} else {
return null;
}
});
snake.core.update_game_score = (function snake$core$update_game_score(){
var map__26115 = cljs.core.deref(snake.core.state);
var map__26115__$1 = ((((!((map__26115 == null)))?(((((map__26115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26115):map__26115);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26115__$1,new cljs.core.Keyword("snake","score","snake/score",-2007099372));
return document.getElementById("score").innerHTML = score;
});
/**
 * The main game-loop.
 */
snake.core.game_loop = (function snake$core$game_loop(){
var map__26117 = cljs.core.deref(snake.core.state);
var map__26117__$1 = ((((!((map__26117 == null)))?(((((map__26117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26117):map__26117);
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26117__$1,new cljs.core.Keyword("canvas","background-color","canvas/background-color",-880158942));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26117__$1,new cljs.core.Keyword("snake","score","snake/score",-2007099372));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26117__$1,new cljs.core.Keyword("snake","body","snake/body",2086900507));
var body_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26117__$1,new cljs.core.Keyword("snake","body-color","snake/body-color",-1014631874));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26117__$1,new cljs.core.Keyword("snake","direction","snake/direction",-659051107));
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26117__$1,new cljs.core.Keyword("snake","speed","snake/speed",1096680391));
var head = snake.core.add_coordinates(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(body,(0)),direction);
var tail = cljs.core.last(body);
snake.core.update_game_score();

snake.core.generate_food();

if(cljs.core.truth_(snake.core.self_collission_QMARK_(head))){
alert(["Snake is collission with itself at : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(head)].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","alive","snake/alive",1332124362)], null),false);
} else {
}

if(cljs.core.truth_(snake.core.out_of_boundary_QMARK_(head))){
alert(["Snake is out of boundary at :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(head)].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","alive","snake/alive",1332124362)], null),false);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword("snake","alive","snake/alive",1332124362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.core.state)))){
snake.core.draw(head,body_color);

if(cljs.core.truth_(snake.core.eat_food_QMARK_(head))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(snake.core.state,cljs.core.assoc,new cljs.core.Keyword("snake","food","snake/food",-1801089391),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("snake","score","snake/score",-2007099372),(score + (1)),new cljs.core.Keyword("snake","body","snake/body",2086900507),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,head)], 0));
} else {
snake.core.draw(tail,background_color);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","body","snake/body",2086900507)], null),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,head)));
}

return window.setTimeout(((function (map__26117,map__26117__$1,background_color,score,body,body_color,direction,speed,head,tail){
return (function (){
return (snake.core.game_loop.cljs$core$IFn$_invoke$arity$0 ? snake.core.game_loop.cljs$core$IFn$_invoke$arity$0() : snake.core.game_loop.call(null));
});})(map__26117,map__26117__$1,background_color,score,body,body_color,direction,speed,head,tail))
,speed);
} else {
return null;
}
});
snake.core.init = (function snake$core$init(){
snake.core.resize_canvas();

goog.events.removeAll(document);

goog.events.listen(document,goog.events.EventType.KEYDOWN,snake.core.on_keydown);

return snake.core.game_loop();
});
snake.core.app = (function snake$core$app(){
return null;
});
snake.core.main = (function snake$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('snake.core.main', snake.core.main);
cljs.test.run_block((function (){var env26119 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary26120 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env26119,summary26120){
return (function (){
cljs.test.set_env_BANG_(env26119);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block((function (){var env__11924__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11924__auto__,env26119,summary26120){
return (function (){
if((env__11924__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return null;
});})(env__11924__auto__,env26119,summary26120))
], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return snake.core.add_coordinates_test;},new cljs.core.Symbol("snake.core","add-coordinates-test","snake.core/add-coordinates-test",1650127632,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"add-coordinates-test","add-coordinates-test",73157507,null),"snake/core.cljs",32,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.add_coordinates_test)?snake.core.add_coordinates_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return snake.core.coordinates_equal_QMARK__test;},new cljs.core.Symbol("snake.core","coordinates-equal?-test","snake.core/coordinates-equal?-test",1059467545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"coordinates-equal?-test","coordinates-equal?-test",-651859548,null),"snake/core.cljs",35,1,51,51,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.coordinates_equal_QMARK__test)?snake.core.coordinates_equal_QMARK__test.cljs$lang$test:null)])),new cljs.core.Var(function(){return snake.core.draw_test;},new cljs.core.Symbol("snake.core","draw-test","snake.core/draw-test",-651553965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"draw-test","draw-test",2133830622,null),"snake/core.cljs",21,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.draw_test)?snake.core.draw_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return snake.core.resize_canvas_test;},new cljs.core.Symbol("snake.core","resize-canvas-test","snake.core/resize-canvas-test",-377530868,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"resize-canvas-test","resize-canvas-test",394129823,null),"snake/core.cljs",30,1,91,91,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.resize_canvas_test)?snake.core.resize_canvas_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return snake.core.keycode__GT_direction_test;},new cljs.core.Symbol("snake.core","keycode->direction-test","snake.core/keycode->direction-test",355785229,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Symbol(null,"keycode->direction-test","keycode->direction-test",-1288195432,null),"snake/core.cljs",35,1,109,109,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core.keycode__GT_direction_test)?snake.core.keycode__GT_direction_test.cljs$lang$test:null)]))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11924__auto__,env26119,summary26120){
return (function (){
if((env__11924__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
});})(env__11924__auto__,env26119,summary26120))
], null)], 0));
})());
});})(env26119,summary26120))
,((function (env26119,summary26120){
return (function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"snake.core","snake.core",-378275309,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env26119,summary26120))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env26119,summary26120){
return (function (){
return cljs.core._vreset_BANG_(summary26120,(function (){var G__26122 = cljs.core._deref(summary26120);
var G__26123 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_());
var fexpr__26121 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_);
return (fexpr__26121.cljs$core$IFn$_invoke$arity$2 ? fexpr__26121.cljs$core$IFn$_invoke$arity$2(G__26122,G__26123) : fexpr__26121.call(null,G__26122,G__26123));
})());
});})(env26119,summary26120))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env26119,summary26120){
return (function (){
cljs.test.set_env_BANG_(env26119);

cljs.test.do_report(cljs.core.deref(summary26120));

var G__26124_26125 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(summary26120),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563));
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__26124_26125) : cljs.test.report.call(null,G__26124_26125));

return cljs.test.clear_env_BANG_();
});})(env26119,summary26120))
], null));
})());

//# sourceMappingURL=snake.core.js.map
