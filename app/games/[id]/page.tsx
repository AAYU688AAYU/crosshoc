import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { basePriceByGenre, games } from "@/constants/catalog";
import { genreIconComponents } from "@/constants/sidebar";
import { GameDeckControls } from "@/components/game-deck-controls";

type PageProps = {
  params: Promise<{ id: string }>;
};

function getGameImage(id: number) {
  return `https://picsum.photos/seed/crosshoc-${id}/1200/675`;
}

function getPrice(genre: (typeof games)[number]["genre"], id: number, year: number) {
  const base = basePriceByGenre[genre];
  const recencyAdjustment = year === 2025 ? 0 : -8;
  const parityAdjustment = id % 2 === 0 ? 2 : 0;
  const value = Math.max(
    12,
    Math.floor((base + recencyAdjustment + parityAdjustment) * 0.35),
  );

  return `${value}.99`;
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

      <div className="space-y-4">
        <Card className="overflow-hidden border-border/80 bg-card/70">
          <div className="relative aspect-video w-full max-h-80 border-b border-border/70 bg-muted">
            <Image
              src={getGameImage(game.id)}
              alt={`${game.title} cover art`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
          </div>

          <CardHeader className="space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <CardTitle className="text-2xl tracking-tight">{game.title}</CardTitle>
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

          <CardContent>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-border/70 bg-background/70 p-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Average rating</p>
                <p className="mt-1 inline-flex items-center gap-1 text-lg font-semibold text-foreground">
                  <StarIcon className="size-4" />
                  {game.rating.toFixed(1)}
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background/70 p-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Release year</p>
                <p className="mt-1 text-lg font-semibold text-foreground">{game.year}</p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background/70 p-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Lease price</p>
                <p className="mt-1 text-lg font-semibold text-foreground">${getPrice(game.genre, game.id, game.year)}/mo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <GameDeckControls game={game} />
      </div>
    </div>
  );
}
