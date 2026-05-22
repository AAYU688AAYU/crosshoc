import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  CalendarIcon,
  MessageSquareTextIcon,
  StarIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { games } from "@/constants/catalog";
import { getReviewsForGame } from "@/constants/reviews";
import { genreIconComponents } from "@/constants/sidebar";
import { GameDeckControls } from "@/components/game-deck-controls";

type PageProps = {
  params: Promise<{ id: string }>;
};

function getGameImage(id: number) {
  return `https://picsum.photos/seed/crosshoc-${id}/1200/675`;
}

export default async function GameDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const gameId = Number(id);

  if (!Number.isFinite(gameId)) {
    notFound();
  }

  const game = games.find((item) => item.id === gameId);

  if (!game) {
    notFound();
  }

  const GenreIcon = genreIconComponents[game.genre];
  const reviews = getReviewsForGame(game);

  return (
    <div className="px-6 pb-10 pt-2 md:px-10">
      <div className="mb-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" />
          Back to listings
        </Link>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(360px,1fr)] xl:items-stretch">
        <Card className="overflow-hidden border-border/80 bg-card/70 gap-0 py-0">
          <div className="relative aspect-video w-full max-h-64 border-b border-border/70 bg-muted md:max-h-72">
            <Image
              src={getGameImage(game.id)}
              alt={`${game.title} cover art`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
          </div>

          <CardHeader className="space-y-3 pt-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <CardTitle className="text-2xl tracking-tight">
                {game.title}
              </CardTitle>
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-1 font-medium text-foreground/80"
              >
                <GenreIcon className="size-3.5" />
                <span>{game.genre}</span>
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{game.description}</p>
          </CardHeader>

          <CardContent className="pb-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border/70 bg-background/70 p-4">
                <p className="inline-flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground">
                  <StarIcon className="size-3" />
                  Average rating
                </p>
                <p className="mt-2 text-3xl font-semibold leading-none text-foreground md:text-4xl">
                  {game.rating.toFixed(1)}
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background/70 p-4">
                <p className="inline-flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground">
                  <CalendarIcon className="size-3" />
                  Release year
                </p>
                <p className="mt-2 text-3xl font-semibold leading-none text-foreground md:text-4xl">
                  {game.year}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="xl:h-full">
          <GameDeckControls game={game} className="xl:h-full" />
        </div>
      </div>

      <Card className="mt-4 border-border/80 bg-card/70">
        <CardHeader className="space-y-2">
          <CardTitle className="inline-flex items-center gap-2 text-lg">
            <MessageSquareTextIcon className="size-4" />
            Reviews
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            What players are saying about {game.title}.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-lg border border-border/70 bg-background/70 p-4"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div className="inline-flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarImage
                        src={review.avatar}
                        alt={`${review.author} avatar`}
                      />
                      <AvatarFallback>
                        {review.author.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium text-foreground">
                      {review.author}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <StarIcon className="size-3" />
                    {review.rating.toFixed(1)}
                  </span>
                </div>
                <p className="mb-2 text-xs text-muted-foreground">
                  {review.postedOn}
                </p>
                <p className="text-sm text-foreground/90">{review.comment}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
