(function () {
    const inlineCss = `
* {
 	font-family: 'FZFWMaDiSiTiS Light' !important;
	font-optical-sizing: auto;
    letter-spacing: 1px;
    font-weight: bold;
}

#postBody {
	font-size: 30px;
	line-height: 1.9;
}

body {
 	max-width: 700px !important;
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
                if (url.endsWith('.js') || knownScriptUrls.includes(url)) {
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
    'https://zhaotim.github.io/方正FW马蒂斯体 简-L/result.css',
]);


