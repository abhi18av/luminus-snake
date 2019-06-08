(ns snake.core
  (:require [reagent.core :as r]
            [goog.dom :as dom]
            [goog.events.EventType]
            [goog.events :as events]
            [goog.events.KeyCodes]
            [clojure.test :as t]))


(def game-state
  (r/atom {;; canvas object
         :canvas/element  (dom/getElement "canvas")
         :canvas/ctx      (-> (dom/getElement "canvas") (.getContext "2d"))
         :canvas/background-color "white" ; default canvas color (background)
         :canvas/width  640
         :canvas/height 480
         ;; snake object
         :snake/body '([0 0] [1 0] [2 0]) ; [x y]
         :snake/direction [0 1]           ; default direction, see `keycode->direction`
         :snake/width  32                 ; 640 / 20
         :snake/height 24                 ; 480 / 20
         :snake/border 2                  ; border size
         :snake/body-color "lime"         ; snake's body color
         :snake/alive true                ; when `false`, stop game loop
         ;; snake food
         :snake/food nil                  ; when `nil`, regenerate it
         :snake/food-color "red"          ; the color of food
         }))



(defn app
  []
  [:div.container ])

(defn ^:export main
  []
  (r/render
    [app]
    (.getElementById js/document "app")))
