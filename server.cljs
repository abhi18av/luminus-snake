;(require '[os :as os])
;(println (.cpus os))


(require '[http :as http])

(def server 
  (http/createServer
   (fn [req res]
    (.write res "Hello, Lumo!")
     (.end res))))

(.listen server 8080)

