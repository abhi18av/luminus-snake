(require 'lumo.build.api)


(lumo.build.api/build "snake.cljs" {;:target :browser
                                    :optimizations :simple
                                    :output-to "./out/snake.js"
                                    :asset-path "out"
                ;:source-map "output.js.map"
                ;:main 'birch.core}
                                    :output-dir "out"})
