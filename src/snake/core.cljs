(ns snake.core
  (:require [reagent.core :as r]
            [goog.dom :as dom]
            [goog.events.EventType]
            [goog.events :as events]
            [goog.events.KeyCodes]
            [clojure.test :as t]))


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



;; ------------------------------
;; Helper functions


(defn add-coordinates [[x1 y1] [x2 y2]]
  [(+ x1 x2) (+ y1 y2)])

(t/deftest add-coordinates-test
  (t/is
    (= [4 6] (add-coordinates [1 2] [3 4]) )))


(defn coordinates-equal? [[x1 y1] [x2 y2]]
  (and (= x1 x2) (= y1 y2)))

(t/deftest coordinates-equal?-test
  (t/is
   (= false (coordinates-equal? [1 2] [3 4]) )))


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


;; snake.core.draw([2,1], "green")
(t/deftest draw-test
 (t/is
  (= [32 24 30 22]
   (draw [1 1] "green")))
 (t/is
  (= "#008000"
    (.-fillStyle (:canvas/ctx @state)))))




(defn resize-canvas
  "Resize the canvas according to state."
  []
  (let [{:keys [:canvas/element :canvas/width :canvas/height]} @state]
    (.setAttribute element "width"  width)
    (.setAttribute element "height" height)))

;; snake.core.resize_canvas()
(t/deftest resize-canvas-test
 (t/is
  (= 300 (.-width (dom/getElement "canvas")))))



;; ------------------------------
;; Game functions

(defn keycode->direction
  "Convert javascript's keycode to direction array."
  [keycode]
  (get {goog.events.KeyCodes.UP    [0 -1]  ; code: 38
        goog.events.KeyCodes.DOWN  [0  1]  ; code: 40
        goog.events.KeyCodes.LEFT  [-1 0] ; code: 37
        goog.events.KeyCodes.RIGHT [1 0]} ; code: 39
       keycode nil))

(t/deftest keycode->direction-test
  (t/is
    (= [1 0] (keycode->direction 39))))


(defn opposite-direction?
  "Detect two direction array are opposite direction or not."
  [dir1 dir2]
  (= [0 0] (add-coordinates dir1 dir2)))

(defn on-keydown
  "The keydown event handler."
  [event]
  (let [{:keys [:snake/direction]} @state
        new-direction (keycode->direction (.-keyCode event))]
    ;; We only handle direction exist condition
    (when new-direction
      ;; When two direction are not opposite direction, save new direction
      (when-not (opposite-direction? new-direction direction)
        (swap! state assoc-in [:snake/direction] new-direction)))))

(defn out-of-boundary?
  "Check if axis is exceed the game board boundary."
  [[x y]]
  (let [max-x (/ (:canvas/width @state)  (:snake/width @state))
        max-y (/ (:canvas/height @state) (:snake/height @state))]
    (or (>= y max-y) (< y 0) (>= x max-x) (< x 0))))

(defn self-collission?
  "Check if axis is collision with snake's body."
  [[x y]]
  (let [{:keys [:snake/body]} @state]
    (some #(coordinates-equal? [x y] %) body)))

(defn eat-food?
  "Check if axis is equal the food's axis."
  [[x y]]
  (let [{:keys [:snake/food]} @state]
    (coordinates-equal? [x y] food)))

(defn generate-food
  "Generate the food on a random coordinate."
  []
  (let [{:keys [:snake/body :snake/food :snake/food-color]} @state
        max-x (/ (:canvas/width @state)  (:snake/width @state))
        max-y (/ (:canvas/height @state) (:snake/height @state))]
    ;; skip when current food exist
    (when (nil? food)
      ;; generate food axis
      (loop [food [(rand-int max-x) (rand-int max-y)]]
        (if-not (self-collission? food)
          (do
            (swap! state assoc-in [:snake/food] food)
            (draw food food-color)
            food)
          (recur [(rand-int max-x) (rand-int max-y)]))))))


(defn update-game-score []
  (let [{:keys [:snake/score]}  @state]
    (set! (.-innerHTML (document.getElementById "score")) score )))


(defn game-loop
  "The main game-loop."
  []
  (let [{:keys [:canvas/background-color :snake/score :snake/body :snake/body-color :snake/direction :snake/speed]}  @state
        head (add-coordinates (nth body 0) direction)
        tail (last body)]

    ;; Update the game scores
    (update-game-score)

    ;; Every time we enter the game-loop, check if we need to generate new food or not
    (generate-food)

    ;; Detect if snake collided with it's own body
    (when (self-collission? head)
      (js/alert (str "Snake is collission with itself at : " head))
      ;(js/console.log (str "Snake is collission with itself at : " head))
      (swap! state assoc-in [:snake/alive] false))

    ;; Detect if snake exceeded the boundary
    (when (out-of-boundary? head)
      (js/alert (str "Snake is out of boundary at :" head))
      ;(js/console.log (str "Snake is out of boundary at :" head))
      (swap! state assoc-in [:snake/alive] false))

    ;; When snake is alive, draw the snake and switch next game-loop
    (when (:snake/alive @state)
      ;; Draw head
      (draw  head body-color)
      ;; Detect if food eat by snake or not
      (if (eat-food? head)
        ;; When food was eaten by snake, just increase it's head and not remove tail
        (swap! state assoc
               :snake/food nil
               :snake/score (inc score)
               :snake/body (conj body head))
        (do
          ;; Remove tail by draw canvas's background-color
          (draw  tail background-color)
          ;; Add head and remove tail
          (swap! state assoc-in [:snake/body] (-> (conj body head) drop-last))))

      ;; next move, you can modify the :snake/speed to change different speed
      (js/window.setTimeout (fn [] (game-loop)) speed))))

;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;


(defn  ^:export  init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  ;(js/console.log "init")

 ;; Resize canvas object
 (resize-canvas)
  ;; Remove all listen events
 (events/removeAll js/document)
  ;; Register event listener `on-keydown` event
 (events/listen js/document goog.events.EventType.KEYDOWN on-keydown)
  ;; Start the game loop
 (game-loop))

(defn app
  [] )

(defn ^:export main
  []
  (r/render
    [app]
    (.getElementById js/document "app")))

;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;


;; NOTE run all tests on browser


(t/run-tests)
