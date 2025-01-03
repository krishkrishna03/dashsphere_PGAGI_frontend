"use client";

import { BarChartComponent } from "@/components/charts/BarChartComponent";
import { generateChartData } from "@/lib/data/chart-data";

export function Overview() {
  const data = generateChartData();
  return <BarChartComponent data={data} />;
}