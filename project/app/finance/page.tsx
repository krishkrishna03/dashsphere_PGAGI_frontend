import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, DollarSign, TrendingUp } from "lucide-react";

const stocks = [
  {
    symbol: "AAPL",
    price: "175.84",
    change: "+2.34",
    percentage: "+1.35%",
    positive: true
  },
  {
    symbol: "MSFT",
    price: "338.11",
    change: "-1.23",
    percentage: "-0.36%",
    positive: false
  },
  {
    symbol: "GOOGL",
    price: "125.23",
    change: "+3.45",
    percentage: "+2.83%",
    positive: true
  },
  {
    symbol: "AMZN",
    price: "127.12",
    change: "-0.98",
    percentage: "-0.76%",
    positive: false
  }
];

export default function FinancePage() {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Financial Markets</h2>
      <div className="grid gap-4">
        {stocks.map((stock, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stock.symbol}</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">${stock.price}</div>
                <div className={`flex items-center ${stock.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.positive ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
                  <span>{stock.change}</span>
                  <span className="ml-1">({stock.percentage})</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}