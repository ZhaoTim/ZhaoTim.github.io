
        document.addEventListener('DOMContentLoaded', () => {
            function loadResources(urls) {
                return Promise.all(
                    urls.map((url) => {
                        return new Promise((resolve, reject) => {
                            let element;
                            if (url.endsWith('.js')) {
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
                'https://example.com/script1.js',
                'https://example.com/style1.css'
            ]).then(() => {
                console.log('All resources loaded successfully.');
            }).catch((error) => {
                console.error(error);
            });
        });
  
