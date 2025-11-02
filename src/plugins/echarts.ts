let echartsPromise: Promise<any> | null = null;

export async function loadEcharts() {
  if (echartsPromise) return echartsPromise;

  echartsPromise = (async () => {
    const [echarts, { LineChart, BarChart, PieChart }] = await Promise.all([
      import("echarts/core"),
      import("echarts/charts"),
    ]);

    const { TitleComponent, TooltipComponent, GridComponent, LegendComponent } =
      await import("echarts/components");

    const { CanvasRenderer } = await import("echarts/renderers");

    // 注册
    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      LegendComponent,
      LineChart,
      BarChart,
      PieChart,
      CanvasRenderer,
    ]);

    return echarts;
  })();

  return echartsPromise;
}
