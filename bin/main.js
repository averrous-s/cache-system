(()=>{"use strict";const e=require("http");var t=function(e,t){t.writeHead(200,{"Content-Type":"text/html"}),t.write("<h1>Test</h1>"),t.end()};(new function(){var n=this;this.run=function(e){n.server.listen(e),console.log("Server is running in port ".concat(e))},this.server=(0,e.createServer)((function(e,n){return new t(e,n)}))}).run(3e3)})();