(function() {
            const inlineCss = `
                * {
                    font-family: 'GuanKiapTsingKhai' !important;
                }
                #postBody {
                    font-size: 22px;
                    line-height: 1.9;
                }
            `;

            const styleElement = document.createElement('style');
            styleElement.textContent = inlineCss;
            document.head.appendChild(styleElement);
        })();
document.addEventListener('DOMContentLoaded', () => {
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

                <link rel='stylesheet' href='' /><script src=''></script><script src=''></script><link rel='stylesheet' href=''><style>*{font-family:'GuanKiapTsingKhai' !important;}#postBody{font-size: 22px;line-height: 1.9;}</style><script src=''></script><script src=''></script><script src=''></script><script src=''></script>

            loadResources([
                'https://chinese-fonts-cdn.deno.dev/packages/GuanKiapTsingKhai/dist/GuanKiapTsingKhai/result.css',
                'https://d3js.org/d3.v7.min.js',
                'https://unpkg.com/cal-heatmap/dist/cal-heatmap.min.js',
                'https://unpkg.com/cal-heatmap/dist/plugins/Tooltip.min.js',
                'https://unpkg.com/cal-heatmap/dist/plugins/CalendarLabel.min.js',
                'https://unpkg.com/cal-heatmap/dist/plugins/LegendLite.min.js'      
            ]).then(() => {
                console.log('All resources loaded successfully.');
            }).catch((error) => {
                console.error(error);
            });
        });
  
