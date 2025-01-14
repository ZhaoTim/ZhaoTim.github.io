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
                'https://chinese-fonts-cdn.deno.dev/packages/GuanKiapTsingKhai/dist/GuanKiapTsingKhai/result.css',
                'https://d3js.org/d3.v7.min.js',
                'https://unpkg.com/cal-heatmap/dist/cal-heatmap.min.js',
            'https://unpkg.com/@popperjs/core@2',
                'https://unpkg.com/cal-heatmap/dist/plugins/Tooltip.min.js',
                'https://unpkg.com/cal-heatmap/dist/plugins/CalendarLabel.min.js',
                'https://unpkg.com/cal-heatmap/dist/plugins/LegendLite.min.js'
            ]).then(() => {
                
const contentContainer = document.querySelector('#content');
const container = document.createElement('div');
container.id = 'cal-heatmap'
contentContainer.append(container);
const cal = new CalHeatmap();

  const data = [
  { date: '2024-01-01', value: 3 },
  { date: '2024-03-14', value: 60 },
  { date: '2024-06-02', value: 10 },
  { date: '2024-09-23', value: 100 },
  { date: '2024-10-31', value: 200 },
  { date: '2024-12-31', value: 10 },
];
cal.paint(
  {
    data: {
      source: data,
      x: 'date',
      y: d => +d['value'],
      groupY: 'max',
    },
    date: { start: new Date('2024-01-01'), locale: 'zh' },
    range: 12,
    scale: {
      color: {
        type: 'threshold',
        range: ['#14432a', '#166b34', '#37a446', '#4dd05a'],
        domain: [10, 20, 30],
      },
    },
    domain: {
      type: 'month',
      gutter: 4,
      label: { text: 'MMM', textAlign: 'start', position: 'top' },
    },
    subDomain: { type: 'ghDay', radius: 2, width: 11, height: 11, gutter: 4 },
  },
  [
    [
      Tooltip,
      {
        text: function (date, value, dayjsDate) {
          return (
            (value ? value : 'No') +
            ' contributions on ' +
            dayjsDate.format('dddd, MMMM D, YYYY')
          );
        },
      },
    ],
    [
      LegendLite,
      {
        includeBlank: true,
        itemSelector: '#ex-ghDay-legend',
        radius: 2,
        width: 11,
        height: 11,
        gutter: 4,
      },
    ],
    [
      CalendarLabel,
      {
        width: 30,
        textAlign: 'start',
        text: () => dayjs.weekdaysShort().map((d, i) => (i % 2 == 0 ? '' : d)),
        padding: [25, 0, 0, 0],
      },
    ],
  ]
);

            }).catch((error) => {
                console.error(error);
            });
 
  
