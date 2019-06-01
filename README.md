# luminus-snake

This repo is home to a `snake` ( no - not a big one like an `anaconda` - a small one like in `Nokia-3310` ).

Tools I've used 

- iTerm
- Fish shell
- git-flow-avh
- gitkraken
- neovim
- lumo-cljs
- firefox-developer-edition



I wanted to create a very simple snake game using `nodejs` - only in `ClojureScript`. I chose [`lumo-cljs`](https://github.com/anmonteiro/lumo)  which embeds a `nodejs` runtime with `clojurescript`.

For example, a simple hello-world server and response in `JavaScript` like the one mentioned below

```javascript
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 

```

... gets transformed ( or rather wrapped ) into the following `cljs` code

```clojure
(require '[http :as http])

(def a-server
  (http/createServer
   (fn [req res]
    (.write res "Hello, Lumo!")
     (.end res))))

(.listen a-server 8080)

```


And `nodejs main.js` becomes `lumo main.cljs` 



