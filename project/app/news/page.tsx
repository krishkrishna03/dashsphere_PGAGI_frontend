import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const newsArticles = [
  {
    title: "Tech Innovation Breakthrough",
    category: "Technology",
    summary: "Major advancement in quantum computing achieved by researchers.",
    source: "Tech Daily",
    time: "2 hours ago"
  },
  {
    title: "Global Market Update",
    category: "Business",
    summary: "Stock markets reach new heights amid economic recovery.",
    source: "Financial Times",
    time: "4 hours ago"
  },
  {
    title: "Sports Championship Results",
    category: "Sports",
    summary: "Unexpected victory in international tournament final.",
    source: "Sports Network",
    time: "6 hours ago"
  },
  {
    title: "Healthcare Innovation",
    category: "Health",
    summary: "New treatment method shows promising results in clinical trials.",
    source: "Medical Journal",
    time: "8 hours ago"
  }
];

export default function NewsPage() {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
      <div className="grid gap-4">
        {newsArticles.map((article, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <span className="text-sm text-muted-foreground">{article.time}</span>
              </div>
              <span className="inline-block px-2 py-1 text-sm bg-primary/10 rounded-md">
                {article.category}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{article.summary}</p>
              <p className="text-sm mt-2">Source: {article.source}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}