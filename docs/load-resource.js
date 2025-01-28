(function() {
            const inlineCss = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&family=Roboto+Slab:wght@100..900&display=swap');

* {
 	font-family: "HYZiKuTangYiShanKaiW" !important;
	font-optical-sizing: auto;
}

#postBody {
	font-size: 26px;
	line-height: 1.9;
}

video {
	border-radius: 8px;
	width: 100%;
}
            `;

            const styleElement = document.createElement('style');
            styleElement.textContent = inlineCss;
            document.head.appendChild(styleElement);
        })();

            function loadResources(urls) {
                return Promise.all(
                    urls.map((url) => {
                        return new Promise((resolve, reject) => {
                            let element;
                                const knownScriptUrls = [
                            'https://unpkg.com/@popperjs/core@2'
                        ];
                            if (url.endsWith('.js')  || knownScriptUrls.includes(url)) {
                                element = document.createElement('script');
                                element.src = url;
                                element.async = true; // Use async for non-blocking
                                element.onload = () => resolve(url);
                                element.onerror = () => reject(new Error(`Failed to load script: ${url}`));
                            } else if (url.endsWith('.css')) {
                                element = document.createElement('link');
                                element.href = url;
                                element.rel = 'stylesheet';
                                element.onload = () => resolve(url);
                                element.onerror = () => reject(new Error(`Failed to load stylesheet: ${url}`));
                            } else {
                                reject(new Error(`Unsupported file type: ${url}`));
                                return;
                            }
                            document.head.appendChild(element);
                        });
                    })
                );
            }


            loadResources([
     'https://chinese-fonts-cdn.deno.dev/packages/hwmct/dist/%E6%B1%87%E6%96%87%E6%98%8E%E6%9C%9D%E4%BD%93/result.css',
		    'https://zhaotim.github.io/fonts/font.css'
            ]);
 
  
