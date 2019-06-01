(ns snake.main 
  (:require 'http))


;(println "Hello, Lumo!")

(def snake-server 
  (http/createServer
   (fn [req res]
    (.write res "Hello, Lumo!")
     (.end res))))

(.listen snake-server 8080)

