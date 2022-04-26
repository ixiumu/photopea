
var list = [
		"/",
		"index.html",
		"manifest.json",
		"custom.js",

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

self.addEventListener("fetch", function(event) {
	event.respondWith(
	  caches.match(event.request).then(function(resp) {
		return resp || fetch(event.request).then(function(response) {
			var url=event.request.url;
			var fnd=false;
			for(var i=0; i<list.length; i++) if( list[i]==url || url.endsWith(list[i]) ) fnd=true;
			for(var i=0; i<=40; i++) if(url.endsWith("code/lang/"+i+".js")) fnd=true;
			if (!fnd) return response;
			return caches.open('cache-v1').then(function(cache) {
				cache.put(event.request, response.clone());
				return response;
			});
		});
	  })
	);
});

