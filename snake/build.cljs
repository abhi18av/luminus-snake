(require 'lumo.build.api)

;(lumo.build.api/build "hello-world.cljs" {:output-to "out/output.js"})


(lumo.build.api/build "hello-lumo.cljs" {
                ;:target :browser
                :optimizations :simple
                :output-to "./out/output.js"
                :asset-path "out"
                ;:source-map "output.js.map"
                ;:main 'birch.core}
                :output-dir "out"})
