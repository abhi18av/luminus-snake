(ns v3.core
  (:require [rum.core :as rum]
            [goog.dom :as dom]
            [goog.events.EventType]
            [goog.events :as events]
            [goog.events.KeyCodes]
            [clojure.test :as t]))

(enable-console-print!)

(println "This text is printed from src/v3/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(def state
  (atom {;; canvas object
         :canvas/element  (dom/getElement "canvas")
         :canvas/ctx      (-> (dom/getElement "canvas") (.getContext "2d"))
         :canvas/background-color "white" ; default canvas color (background)
         :canvas/width  640
         :canvas/height 480
         ;; game score
         :snake/score 0
         ;; snake object
         :snake/body '([0 0] [1 0] [2 0]) ; [x y]
         :snake/direction [0 1]           ; default direction, see `keycode->direction`
         :snake/width  32                 ; 640 / 20
         :snake/height 24                 ; 480 / 20
         :snake/border 2                  ; border size
         :snake/body-color "lime"         ; snake's body color
         :snake/alive true                ; when `false`, stop game loop
         :snake/speed 150                 ; the initial speed of the snake
         ;; snake food
         :snake/food nil                  ; when `nil`, regenerate it
         :snake/food-color "red"          ; the color of food
         :snake/food-count nil            ; the number of food items snake already ate
         }))



;; -----------------------------
;; Canvas functions

(defn draw
  "Draw the point on canvas according to snake's width/height."
  [[x y] color]
  (let [{:keys [:canvas/ctx :snake/width :snake/height :snake/border]} (deref state )]
    (set! (.-fillStyle ctx) color)
    (.fillRect  ctx
                (* x width)
                (* y height)
                (- width border)
                (- height border))))



(rum/defc hello-world []
  [:div
   #_[:h1 (:text @app-state)]
   [:canvas {:id "canvas" :width 300 :height 300}]

   [:hr]])

(rum/mount (hello-world)
           (. js/document (getElementById "app")))

(defn on-js-reload []
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
