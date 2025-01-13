setTimeout(() => {
const contentContainer = document.querySelector('#content');
const container = document.createElement('div');
container.id = 'cal-heatmap'
contentContainer.append(container);
const cal = new CalHeatmap();

  const data = [
  { date: '2012-01-01', value: 3 },
  { date: '2012-01-02', value: 6 },
];
cal.paint(
  {
    data: {
      source: data,
      x: 'date',
      y: d => +d['value'],
      groupY: 'max',
    },
    date: { start: new Date('2024-01-01') },
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
}, 3000)
