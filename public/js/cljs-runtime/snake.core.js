goog.provide('snake.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.events.KeyCodes');
goog.require('cljs.test');
snake.core.game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("canvas","ctx","canvas/ctx",-1810717598),new cljs.core.Keyword("canvas","background-color","canvas/background-color",-880158942),new cljs.core.Keyword("canvas","width","canvas/width",-1716125853),new cljs.core.Keyword("canvas","height","canvas/height",-341473626),new cljs.core.Keyword("snake","alive","snake/alive",1332124362),new cljs.core.Keyword("snake","width","snake/width",-240913525),new cljs.core.Keyword("canvas","element","canvas/element",2268429),new cljs.core.Keyword("snake","food","snake/food",-1801089391),new cljs.core.Keyword("snake","food-color","snake/food-color",-277421869),new cljs.core.Keyword("snake","border","snake/border",1336458363),new cljs.core.Keyword("snake","body","snake/body",2086900507),new cljs.core.Keyword("snake","direction","snake/direction",-659051107),new cljs.core.Keyword("snake","height","snake/height",865277118),new cljs.core.Keyword("snake","body-color","snake/body-color",-1014631874)],[goog.dom.getElement("canvas").getContext("2d"),"white",(640),(480),true,(32),goog.dom.getElement("canvas"),null,"red",(2),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(24),"lime"]));
snake.core.app = (function snake$core$app(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955)], null);
});
snake.core.main = (function snake$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('snake.core.main', snake.core.main);

//# sourceMappingURL=snake.core.js.map
