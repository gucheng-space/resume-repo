export default {
  title: { text: "一周销量" },
  tooltip: {},
  xAxis: { data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  yAxis: {},
  series: [
    {
      type: "bar",
      data: [120, 200, 150, 80, 70, 110, 130],
    },
  ],
};
