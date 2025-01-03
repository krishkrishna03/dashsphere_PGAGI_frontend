import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitFork, Star, GitPullRequest, GitCommit } from "lucide-react";

const repositories = [
  {
    name: "next-analytics",
    description: "Analytics dashboard built with Next.js",
    stars: 245,
    forks: 45,
    prs: 12,
    commits: 523
  },
  {
    name: "react-components",
    description: "Reusable React component library",
    stars: 189,
    forks: 34,
    prs: 8,
    commits: 342
  },
  {
    name: "typescript-utils",
    description: "Collection of TypeScript utilities",
    stars: 156,
    forks: 23,
    prs: 5,
    commits: 234
  }
];

export default function GitHubPage() {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">GitHub Activity</h2>
      <div className="grid gap-4">
        {repositories.map((repo, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{repo.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{repo.description}</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Star className="h-4 w-4 mb-1 text-yellow-500" />
                  <span className="text-lg font-bold">{repo.stars}</span>
                  <span className="text-xs text-muted-foreground">Stars</span>
                </div>
                <div className="flex flex-col items-center">
                  <GitFork className="h-4 w-4 mb-1 text-blue-500" />
                  <span className="text-lg font-bold">{repo.forks}</span>
                  <span className="text-xs text-muted-foreground">Forks</span>
                </div>
                <div className="flex flex-col items-center">
                  <GitPullRequest className="h-4 w-4 mb-1 text-green-500" />
                  <span className="text-lg font-bold">{repo.prs}</span>
                  <span className="text-xs text-muted-foreground">Pull Requests</span>
                </div>
                <div className="flex flex-col items-center">
                  <GitCommit className="h-4 w-4 mb-1 text-purple-500" />
                  <span className="text-lg font-bold">{repo.commits}</span>
                  <span className="text-xs text-muted-foreground">Commits</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}