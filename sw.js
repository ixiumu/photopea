
var list = [
	   "",
       "index.html",
	   "manifest.json",
	   
	   "code/pp/pp.js",
	   "code/dbs/DBS.js",
	   "code/ext/ext.js",
	   "code/ext/hb.wasm",
	   "code/ext/fribidi.wasm",
	   
	   "rsrc/basic/basic.zip",
	   "rsrc/basic/fa_basic.csh",
	   "rsrc/fonts/fs/DejaVuSans.otf",
	   "rsrc/fonts/fonts.png",
	   
	   "plugins/gallery.json",
	   
	   "style/all.css",
	   "promo/icon512.png",
	   
	   "rsrc/fonts/ex/opensans/mem8YaGs126MiZpBA-UFVZ0b.woff2",
	   "rsrc/fonts/ex/opensans/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2",
	   "https://fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFVZ0b.woff2",
	   "https://fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2"
];
alert()

self.addEventListener("fetch", function (event) {
	event.respondWith(
		fetch(event.request)
			.catch(function() {
				return caches.match(event.request)
			})
			.then(function (response) {
				var url=event.request.url;
                console.log(url)
				var fnd=false;
				for(var i=0; i<list.length; i++) if(  list[i]==url  ||
					window.location.origin+window.location.pathname+list[i]==url) fnd=true;
				
				for(var i=0; i<=40; i++) if(url.endsWith("code/lang/"+i+".js")) fnd=true;
				
				if(fnd) {
					var rcl = response.clone();
					caches.open("photopea").then(function(cache) {
						cache.put(event.request, rcl);
                        console.log('cache')
					});
				}
				return response;
			})
	)
})

