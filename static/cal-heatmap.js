const cal = new CalHeatmap();
cal.paint({});
const contentContainer = document.querySelector('#content');
const container = document.createElement('div');
container.id = 'cal-heatmap'
contentContainer.append(container);
