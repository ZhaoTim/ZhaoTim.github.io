setTimeout(() => {
const contentContainer = document.querySelector('#content');
const container = document.createElement('div');
container.id = 'cal-heatmap'
contentContainer.append(container);
const cal = new CalHeatmap();
cal.paint({});
}, 3000)
