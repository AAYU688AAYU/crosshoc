import { StarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Game = {
  id: number;
  title: string;
  genre:
    | "Action"
    | "Strategy"
    | "RPG"
    | "Shooter"
    | "Adventure"
    | "Puzzle"
    | "Racing"
    | "Sports";
  rating: number;
  year: number;
  gradient: string;
  badge?: "New" | "Top Rated" | "Trending" | "Editor's Pick";
  description: string;
};

const basePriceByGenre: Record<Game["genre"], number> = {
  Action: 59,
  Strategy: 49,
  RPG: 69,
  Shooter: 59,
  Adventure: 44,
  Puzzle: 29,
  Racing: 54,
  Sports: 59,
};

const games: Game[] = [
  // Action
  {
    id: 1,
    title: "Blade Covenant",
    genre: "Action",
    rating: 9.2,
    year: 2025,
    gradient: "from-red-600 via-orange-500 to-yellow-400",
    badge: "Top Rated",
    description: "Fast-paced melee combat across fractured worlds.",
  },
  {
    id: 2,
    title: "Neon Strike",
    genre: "Action",
    rating: 8.7,
    year: 2025,
    gradient: "from-rose-700 to-red-400",
    badge: "Trending",
    description: "Hack through a cyberpunk cityscape at breakneck speed.",
  },
  {
    id: 3,
    title: "Iron Vanguard",
    genre: "Action",
    rating: 8.4,
    year: 2024,
    gradient: "from-orange-700 to-amber-400",
    description: "Lead the charge in gritty urban warfare.",
  },
  {
    id: 4,
    title: "Phantom Edge",
    genre: "Action",
    rating: 8.1,
    year: 2024,
    gradient: "from-red-800 to-orange-600",
    description: "Stealth and swordplay in feudal Japan.",
  },
  // Strategy
  {
    id: 5,
    title: "Empire Ascendant",
    genre: "Strategy",
    rating: 9.0,
    year: 2025,
    gradient: "from-blue-700 via-indigo-600 to-violet-500",
    badge: "Editor's Pick",
    description: "Build civilizations, forge alliances, conquer continents.",
  },
  {
    id: 6,
    title: "Warfront Protocol",
    genre: "Strategy",
    rating: 8.8,
    year: 2025,
    gradient: "from-slate-700 to-blue-600",
    badge: "New",
    description: "Modern warfare tactics in a global theater.",
  },
  {
    id: 7,
    title: "Stardomain",
    genre: "Strategy",
    rating: 8.5,
    year: 2024,
    gradient: "from-indigo-800 to-blue-500",
    description: "Expand your galactic empire turn by turn.",
  },
  {
    id: 8,
    title: "Citadel Wars",
    genre: "Strategy",
    rating: 7.9,
    year: 2024,
    gradient: "from-blue-900 to-indigo-500",
    description: "Tower defense meets grand strategy.",
  },
  // RPG
  {
    id: 9,
    title: "Chronicles of Eldenveil",
    genre: "RPG",
    rating: 9.5,
    year: 2025,
    gradient: "from-purple-700 via-fuchsia-600 to-pink-500",
    badge: "Top Rated",
    description: "An epic open-world fantasy RPG with deep lore.",
  },
  {
    id: 10,
    title: "Runeborn",
    genre: "RPG",
    rating: 9.1,
    year: 2025,
    gradient: "from-violet-800 to-purple-500",
    badge: "Trending",
    description: "Craft your destiny through ancient runic magic.",
  },
  {
    id: 11,
    title: "The Sunken Archive",
    genre: "RPG",
    rating: 8.6,
    year: 2024,
    gradient: "from-purple-900 to-fuchsia-600",
    description: "Unravel a centuries-old mystery in a drowned empire.",
  },
  {
    id: 12,
    title: "Emberlost",
    genre: "RPG",
    rating: 8.3,
    year: 2024,
    gradient: "from-fuchsia-700 to-violet-500",
    description: "Survive and grow stronger in post-cataclysm lands.",
  },
  // Shooter
  {
    id: 13,
    title: "Orbital Siege",
    genre: "Shooter",
    rating: 8.9,
    year: 2025,
    gradient: "from-emerald-700 via-teal-600 to-cyan-500",
    badge: "New",
    description: "Zero-gravity combat on a crumbling space station.",
  },
  {
    id: 14,
    title: "Deadzone Recon",
    genre: "Shooter",
    rating: 8.6,
    year: 2025,
    gradient: "from-gray-700 to-green-600",
    badge: "Trending",
    description: "Tactical squad-based shooter in hostile territory.",
  },
  {
    id: 15,
    title: "Apex Protocol",
    genre: "Shooter",
    rating: 8.2,
    year: 2024,
    gradient: "from-teal-800 to-emerald-500",
    description: "High-octane battle royale on a shifting island.",
  },
  {
    id: 16,
    title: "Gunhaven",
    genre: "Shooter",
    rating: 7.8,
    year: 2024,
    gradient: "from-green-800 to-teal-600",
    description: "Classic arena shooter with modern gunplay.",
  },
  // Adventure
  {
    id: 17,
    title: "Hollow Meridian",
    genre: "Adventure",
    rating: 9.3,
    year: 2025,
    gradient: "from-teal-600 via-cyan-500 to-sky-400",
    badge: "Editor's Pick",
    description: "Navigate a surreal dreamscape to reclaim your identity.",
  },
  {
    id: 18,
    title: "The Verdant Path",
    genre: "Adventure",
    rating: 8.8,
    year: 2025,
    gradient: "from-green-600 to-teal-400",
    badge: "Top Rated",
    description: "A hand-crafted adventure through ancient forests.",
  },
  {
    id: 19,
    title: "Stormwake",
    genre: "Adventure",
    rating: 8.4,
    year: 2024,
    gradient: "from-sky-700 to-cyan-500",
    description: "Sail uncharted seas and discover lost civilizations.",
  },
  {
    id: 20,
    title: "Duskfall Islands",
    genre: "Adventure",
    rating: 8.0,
    year: 2024,
    gradient: "from-cyan-700 to-sky-500",
    description: "Puzzle-rich island exploration with a gripping narrative.",
  },
  // Puzzle
  {
    id: 21,
    title: "Axiom Shift",
    genre: "Puzzle",
    rating: 9.1,
    year: 2025,
    gradient: "from-yellow-500 via-amber-400 to-orange-400",
    badge: "Top Rated",
    description: "Bend physics and logic to reshape fractured worlds.",
  },
  {
    id: 22,
    title: "Luminos",
    genre: "Puzzle",
    rating: 8.7,
    year: 2025,
    gradient: "from-amber-600 to-yellow-400",
    badge: "New",
    description: "Manipulate light to solve intricate optical puzzles.",
  },
  {
    id: 23,
    title: "Tessera",
    genre: "Puzzle",
    rating: 8.3,
    year: 2024,
    gradient: "from-yellow-700 to-amber-400",
    description: "Assemble mindscapes in this minimalist puzzler.",
  },
  {
    id: 24,
    title: "Chronovoid",
    genre: "Puzzle",
    rating: 7.9,
    year: 2024,
    gradient: "from-orange-600 to-yellow-500",
    description: "Time-travel mechanics drive intricate paradox puzzles.",
  },
  // Racing
  {
    id: 25,
    title: "Hyperdrive Championship",
    genre: "Racing",
    rating: 8.8,
    year: 2025,
    gradient: "from-orange-600 via-red-500 to-rose-400",
    badge: "Trending",
    description: "Anti-gravity racing at impossible speeds.",
  },
  {
    id: 26,
    title: "Gridlock Turbo",
    genre: "Racing",
    rating: 8.5,
    year: 2025,
    gradient: "from-red-600 to-orange-400",
    badge: "New",
    description: "Street racing through neon-soaked city circuits.",
  },
  {
    id: 27,
    title: "Rally Surge",
    genre: "Racing",
    rating: 8.1,
    year: 2024,
    gradient: "from-amber-700 to-red-500",
    description: "Grueling off-road races across six continents.",
  },
  {
    id: 28,
    title: "Velocity X",
    genre: "Racing",
    rating: 7.7,
    year: 2024,
    gradient: "from-orange-700 to-rose-500",
    description: "Physics-first arcade racing with deep car tuning.",
  },
  // Sports
  {
    id: 29,
    title: "Apex Arena",
    genre: "Sports",
    rating: 9.0,
    year: 2025,
    gradient: "from-sky-600 via-blue-500 to-indigo-400",
    badge: "Editor's Pick",
    description: "The ultimate esports stadium experience.",
  },
  {
    id: 30,
    title: "Striker Elite",
    genre: "Sports",
    rating: 8.6,
    year: 2025,
    gradient: "from-blue-600 to-sky-400",
    badge: "Trending",
    description: "Hyper-realistic football with dynamic weather systems.",
  },
  {
    id: 31,
    title: "Court Kings",
    genre: "Sports",
    rating: 8.2,
    year: 2024,
    gradient: "from-sky-700 to-blue-500",
    description: "Fast, flashy basketball for the next generation.",
  },
  {
    id: 32,
    title: "Slam Circuit",
    genre: "Sports",
    rating: 7.8,
    year: 2024,
    gradient: "from-indigo-600 to-sky-500",
    description: "Futuristic combat sports meets traditional athletics.",
  },
];

const badgeStyles: Record<NonNullable<Game["badge"]>, string> = {
  New: "bg-muted text-foreground/80 border border-border",
  "Top Rated": "bg-muted text-foreground/80 border border-border",
  Trending: "bg-muted text-foreground/80 border border-border",
  "Editor's Pick": "bg-muted text-foreground/80 border border-border",
};

const shuffledGames = [...games].sort(
  (a, b) => ((a.id * 37) % 101) - ((b.id * 37) % 101),
);

function getGameImage(game: Game) {
  return `https://picsum.photos/seed/crosshoc-${game.id}/640/360`;
}

function getPrice(game: Game) {
  const base = basePriceByGenre[game.genre];
  const recencyAdjustment = game.year === 2025 ? 0 : -8;
  const parityAdjustment = game.id % 2 === 0 ? 2 : 0;
  const value = Math.max(
    12,
    Math.floor((base + recencyAdjustment + parityAdjustment) * 0.35),
  );
  return `${value}.99`;
}

function getLeaseTerm(game: Game) {
  return game.year === 2025 ? "30-day lease" : "14-day lease";
}

function getAvailability(game: Game) {
  const copies = 3 + (game.id % 9);
  return `${copies} copies available`;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-muted-foreground text-xs font-medium">
      <StarIcon className="size-3" />
      {rating.toFixed(1)}
    </span>
  );
}

function GameCard({ game }: { game: Game }) {
  return (
    <Card className="flex h-full min-w-0 flex-col border-border/80 bg-card/70 shadow-none transition-colors hover:bg-accent/30">
      <img
        src={getGameImage(game)}
        alt={`${game.title} cover art`}
        loading="lazy"
        className="aspect-video w-full border-b border-border/70 object-cover"
      />
      <CardHeader className="flex-1 pb-2 pt-4">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-1 text-sm">{game.title}</CardTitle>
          <StarRating rating={game.rating} />
        </div>
        <CardDescription className="line-clamp-2 text-xs">
          {game.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex rounded-full border border-border bg-muted px-2 py-0.5 font-medium text-foreground/80">
            {game.genre}
          </span>
          {game.badge && (
            <span
              className={cn(
                "inline-flex rounded-full px-2 py-0.5 font-medium uppercase tracking-wide",
                badgeStyles[game.badge],
              )}
            >
              {game.badge}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{game.year}</span>
          <span className="text-sm font-semibold text-foreground">
            ${getPrice(game)}/mo
          </span>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{getLeaseTerm(game)}</span>
          <span>{getAvailability(game)}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  return (
    <div className="px-4 pb-10 pt-2 md:px-6">
      <section>
        <div className="mb-3 flex items-center justify-between gap-2">
          <h1 className="text-sm font-semibold tracking-tight text-foreground/90">
            Game Leases
          </h1>
          <span className="text-xs text-muted-foreground">
            {shuffledGames.length} active listings
          </span>
        </div>
        <div className="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4">
          {shuffledGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}
