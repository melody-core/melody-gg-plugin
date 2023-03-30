interface PerformanceChartData {
  firstPaint: number;
  firstContentfulPaint: number;
}

interface PerformanceChartProps {
  data: PerformanceChartData;
  width: number;
  height: number;
  barWidth: number;
  barSpacing: number;
  labelColor: string;
  barColor: string;
  axisColor: string;
}

export class PerformanceChart {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  data: PerformanceChartData;
  width: number;
  height: number;
  barWidth: number;
  barSpacing: number;
  labelColor: string;
  barColor: string;
  axisColor: string;

  constructor(canvas: HTMLCanvasElement, props: PerformanceChartProps) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d")!;
    this.data = props.data;
    this.width = props.width;
    this.height = props.height;
    this.barWidth = props.barWidth;
    this.barSpacing = props.barSpacing;
    this.labelColor = props.labelColor;
    this.barColor = props.barColor;
    this.axisColor = props.axisColor;
  }

  draw() {
    const { firstPaint, firstContentfulPaint } = this.data;
    const maxTime = Math.max(firstPaint, firstContentfulPaint);
    const chartHeight = this.height - 40;
    const chartWidth = this.width - 40;

    // 绘制坐标轴
    this.context.beginPath();
    this.context.strokeStyle = this.axisColor;
    this.context.lineWidth = 2;
    this.context.moveTo(20, this.height - 20);
    this.context.lineTo(20, 20);
    this.context.lineTo(this.width - 20, 20);
    this.context.stroke();

    // 绘制 x 轴标签
    this.context.fillStyle = this.labelColor;
    this.context.font = "16px Arial";
    this.context.textAlign = "center";
    this.context.fillText("首次绘制时间", 50, this.height);
    this.context.fillText(
      "首次内容绘制时间",
      this.width - 90,
      this.height
    );

    // 绘制柱形图
    const firstPaintX = 50;
    const firstPaintY = chartHeight * (1 - firstPaint / maxTime) + 20;
    const firstContentfulPaintX = this.width - 90;
    const firstContentfulPaintY =
      chartHeight * (1 - firstContentfulPaint / maxTime) + 20;

    // 绘制柱形图标注
    this.context.fillStyle = this.labelColor;
    this.context.font = "12px Arial";
    this.context.textAlign = "center";
    this.context.fillText(
      `${firstPaint.toFixed(2)}ms`,
      firstPaintX,
      firstPaintY - 10
    );
    this.context.fillText(
      `${firstContentfulPaint.toFixed(2)}ms`,
      firstContentfulPaintX,
      firstContentfulPaintY - 10
    );

    this.context.fillStyle = this.barColor;
    this.context.fillRect(
      firstPaintX - this.barWidth / 2,
      firstPaintY,
      this.barWidth,
      chartHeight - firstPaintY + 20
    );
    this.context.fillRect(
      firstContentfulPaintX - this.barWidth / 2,
      firstContentfulPaintY,
      this.barWidth,
      chartHeight - firstContentfulPaintY + 20
    );
  }
}
