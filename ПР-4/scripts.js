document.addEventListener("DOMContentLoaded", function () {
  const profitData = {
    performance: {
      series: [
        { name: "React", data: [75, 78, 82, 85, 90, 92] },
        { name: "Vue", data: [70, 73, 77, 80, 83, 85] },
        { name: "Angular", data: [65, 66, 68, 70, 72, 73] },
        { name: "Svelte", data: [60, 65, 70, 78, 85, 90] },
      ],
      info: "React в 2025 году демонстрирует производительность 92 благодаря оптимизациям SSR. <a href='#'>State of JS 2025</a>",
      additional: "Дополнительно: Компонентная архитектура React идеальна для сложных интерфейсов."
    },
    complexity: {
      series: [
        { name: "React", data: [60, 58, 55, 53, 50, 48] },
        { name: "Vue", data: [80, 82, 85, 87, 90, 92] },
        { name: "Angular", data: [50, 52, 54, 55, 56, 57] },
        { name: "Svelte", data: [70, 72, 75, 78, 80, 85] },
      ],
      info: "Vue проще всего освоить, среднее время обучения — 10 часов для задач верстки. <a href='#'>JavaScript Frameworks 2025</a>",
      additional: "Дополнительно: Высокая читаемость кода делает Vue популярным среди новичков."
    },
    popularity: {
      series: [
        { name: "React", data: [40, 42, 45, 48, 50, 52] },
        { name: "Vue", data: [20, 22, 25, 28, 30, 32] },
        { name: "Angular", data: [25, 24, 22, 20, 18, 16] },
        { name: "Svelte", data: [5, 7, 10, 12, 15, 18] },
      ],
      info: "Svelte набирает популярность в 2025 году, занимая 18% рынка верстки. <a href='#'>npm Trends 2025</a>",
      additional: "Дополнительно: Минимальный размер бандла делает Svelte идеальным для легких сайтов."
    }
  };

  let profitOptions = {
    series: profitData.performance.series, 
    chart: {
      type: "bar",
      height: 450,
      offsetY: 10,
      toolbar: { show: false } 
    },
    grid: { show: true, strokeDashArray: 3, borderColor: "rgba(0,0,0,.1)" },
    colors: ["#1e88e5", "#21c1d6", "#fc4b6c", "#ffb22b"], 
    plotOptions: { bar: { horizontal: false, columnWidth: "60%", endingShape: "flat" } },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 5, colors: ["transparent"] },
    xaxis: {
      categories: ["2020", "2021", "2022", "2023", "2024", "2025"],
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { style: { colors: "#a1aab2" } }
    },
    yaxis: { labels: { style: { colors: "#a1aab2" } } },
    fill: { opacity: 1 },
    tooltip: { theme: "dark" },
    legend: { position: "top" }
  };
  let profitChart = new ApexCharts(document.querySelector("#profit"), profitOptions);
  profitChart.render();


  let buttons = document.querySelectorAll(".aspect-buttons .btn");
  let infoText = document.getElementById("info-text");
  let additionalText = document.getElementById("additional-info");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      let aspect = this.getAttribute("data-aspect");
      buttons.forEach(btn => btn.classList.remove("active")); 
      this.classList.add("active"); 
      profitChart.updateSeries(profitData[aspect].series); 
      infoText.innerHTML = profitData[aspect].info;
      additionalText.innerHTML = profitData[aspect].additional; 
    });
  });

  let gradeData = {
    default: { series: [45, 25, 20, 10], labels: ["React", "Vue", "Angular", "Svelte"], info: "React доминирует в общем использовании с долей 45%. <a href='#'>State of JS 2025</a>" },
    frontend: { series: [50, 30, 15, 5], labels: ["React", "Vue", "Angular", "Svelte"], info: "React занимает 50% в верстке фронтенда благодаря гибкости компонентов. <a href='#'>Frontend Trends 2025</a>" },
    fullstack: { series: [30, 20, 40, 10], labels: ["React", "Vue", "Angular", "Svelte"], info: "Angular лидирует в full-stack разработке с долей 40%. <a href='#'>Full-Stack Report 2025</a>" }
  };

  let gradeOptions = {
    series: gradeData.default.series,
    labels: gradeData.default.labels,
    chart: { height: 450, type: "donut", fontFamily: "Poppins, sans-serif" },
    colors: ["#1e88e5", "#21c1d6", "#fc4b6c", "#ffb22b"],
    dataLabels: {
      enabled: true,
      formatter: function(val, opts) {
        let name = opts.w.config.labels[opts.seriesIndex];
        return [name, val + "%"];
      },
      style: { fontSize: "14px", colors: ["#333"] }
    },
    legend: { position: "bottom" },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: { fontSize: "20px", color: "#333", offsetY: -20 },
            value: { fontSize: "24px", color: "#666", offsetY: 20 },
            total: { show: true, label: "Всего", fontSize: "20px", color: "#666" }
          }
        }
      }
    }
  };
  let gradeChart = new ApexCharts(document.querySelector("#grade"), gradeOptions);
  gradeChart.render();

  let gradeSelect = document.getElementById("category-select");
  let gradeText = document.getElementById("grade-text");
  gradeSelect.addEventListener("change", function(e) {
    let value = e.target.value;
    gradeChart.updateOptions({
      series: gradeData[value].series,
      labels: gradeData[value].labels
    });
    gradeText.innerHTML = gradeData[value].info; 
  });

  let earningData = [
    { name: "React", data: [10, 20, 30, 35, 40, 42, 45, 48, 50, 52] },
    { name: "Vue", data: [5, 10, 15, 18, 20, 22, 25, 28, 30, 32] },
    { name: "Angular", data: [30, 35, 33, 30, 28, 25, 22, 20, 18, 16] },
    { name: "Svelte", data: [0, 0, 0, 2, 5, 7, 10, 12, 15, 18] }
  ];

  let earningOptions = {
    chart: { type: "area", height: 450 },
    series: earningData,
    stroke: { curve: "smooth", width: 2 },
    colors: ["#1e88e5", "#21c1d6", "#fc4b6c", "#ffb22b"],
    fill: { type: "solid", opacity: 0.1 },
    xaxis: { categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"] },
    tooltip: { theme: "dark" },
    legend: { position: "top" }
  };
  let earningChart = new ApexCharts(document.querySelector("#earning"), earningOptions);
  earningChart.render();

  let slider = document.getElementById("time-range");
  let rangeValue = document.getElementById("range-value");
  slider.addEventListener("input", function() {
    let value = parseInt(slider.value);
    rangeValue.textContent = value + " лет"; 
    let newSeries = earningData.map(function(series) {
      return { name: series.name, data: series.data.slice(0, value) };
    });
    earningChart.updateSeries(newSeries); 
  });
});