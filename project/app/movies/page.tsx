import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Clock, Calendar, Film } from "lucide-react";

const movies = [
  {
    title: "Inception",
    rating: "8.8",
    duration: "2h 28min",
    year: "2010",
    genre: "Sci-Fi, Action",
    director: "Christopher Nolan"
  },
  {
    title: "The Shawshank Redemption",
    rating: "9.3",
    duration: "2h 22min",
    year: "1994",
    genre: "Drama",
    director: "Frank Darabont"
  },
  {
    title: "Pulp Fiction",
    rating: "8.9",
    duration: "2h 34min",
    year: "1994",
    genre: "Crime, Drama",
    director: "Quentin Tarantino"
  },
  {
    title: "The Dark Knight",
    rating: "9.0",
    duration: "2h 32min",
    year: "2008",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan"
  }
];

export default function MoviesPage() {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Movie Database</h2>
      <div className="grid gap-4">
        {movies.map((movie, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{movie.title}</CardTitle>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  <span>{movie.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center">
                  <Film className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{movie.genre}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">Director:</span>
                  <span className="ml-2">{movie.director}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}