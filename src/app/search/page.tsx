"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';

const prependBasePath = (url: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${url}`;

const productData = [
  {
    img: prependBasePath("/Screenshot (46).png"),
    title: "Ghost Hunting",
    rating: 4,
    gamePath: prependBasePath("/games/Ghost/index.html"),
  },
  {
    img: prependBasePath("/Screenshot (45).png"),
    title: "GO-GO",
    rating: 4,
    gamePath: prependBasePath("/games/Go Go/index.html"),
  },
  {
    img: prependBasePath("/image18.png"),
    title: "Snake",
    rating: 5,
    gamePath: prependBasePath("/games/snake/index.html"),
  },
  {
    img: prependBasePath("/Screenshot (48).png"),
    title: "Scroll game",
    rating: 4,
    gamePath: prependBasePath("/games/Scroll/index.html"),
  },
  {
    img: prependBasePath("/image3.jpg"),
    title: "Car racing",
    rating: 3,
    gamePath: prependBasePath("/games/Car racing/index.html"),
  },
  {
    img: prependBasePath("/image2.jpg"),
    title: "Flappy-Bird",
    rating: 4,
    gamePath: prependBasePath("/games/Flappy-Bird/index.html"),
  },
  {
    img: prependBasePath("/image4.jpg"),
    title: "Tic-Tac-Toe",
    rating: 3,
    gamePath: prependBasePath("/games/TicTacToe/index.html"),
  },
  {
    img: prependBasePath("/Screenshot (44).png"),
    title: "2048-Master",
    rating: 3,
    gamePath: prependBasePath("/games/2048-master/index.html"),
  },
  {
    img: prependBasePath("/Screenshot (43).png"),
    title: "Space Huggers",
    rating: 3,
    gamePath: prependBasePath("/games/SpaceHuggers/index.html"),
  },
  {
    img: prependBasePath("/image12.png"),
    title: "Zombie shooting",
    rating: 3,
    gamePath: prependBasePath("/games/zombie shooting/index.html"),
  },
  {
    img: prependBasePath("/image5.png"),
    title: "Tetris",
    rating: 3,
    gamePath: prependBasePath("/games/Tetris/index.html"),
  },
  {
    img: prependBasePath("/90423.jpg"),
    title: "Space",
    rating: 3,
    gamePath: prependBasePath("/games/space/index.html"),
  },
  {
    img: prependBasePath("/image6.jpg"),
    title: "Quiz-Game",
    rating: 3,
    gamePath: prependBasePath("/games/Quiz-Game/index.html"),
  },
  {
    img: prependBasePath("/image7.png"),
    title: "Wack-A-Mole",
    rating: 3,
    gamePath: prependBasePath("/games/Mole/index.html"),
  },
  {
    img: prependBasePath("/image8.jpg"),
    title: "Fruit Slicer",
    rating: 3,
    gamePath: prependBasePath("/games/fruit/index.html"),
  },
  {
    img: prependBasePath("/image9.jpg"),
    title: "Crossy Road",
    rating: 3,
    gamePath: prependBasePath("/games/Cross-road/index.html"),
  },
  {
    img: prependBasePath("/image10.png"),
    title: "Breakout",
    rating: 3,
    gamePath: prependBasePath("/games/Breakout/index.html"),
  },
  {
    img: prependBasePath("/image11.png"),
    title: "Archery",
    rating: 3,
    gamePath: prependBasePath("/games/Archery/index.html"),
  },
  {
    img: prependBasePath("/image13.png"),
    title: "Typing-Speed",
    rating: 3,
    gamePath: prependBasePath("/games/Typing-Speed/index.html"),
  },
  {
    img: prependBasePath("/image14.jpg"),
    title: "Maze",
    rating: 3,
    gamePath: prependBasePath("/games/Maze-Game/index.html"),
  },
  {
    img: prependBasePath("/image15.png"),
    title: "Candy Crush",
    rating: 3,
    gamePath: prependBasePath("/games/Candy-Crush/index.html"),
  },
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  const filteredGames = productData.filter((game) =>
    game.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for &quot;{query}&quot;
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {filteredGames.map((game, index) => (
          <ProductCard
            key={index}
            img={game.img}
            title={game.title}
            rating={game.rating}
            gamePath={game.gamePath}
          />
        ))}
      </div>
      {filteredGames.length === 0 && (
        <p>No games found matching your search.</p>
      )}
    </div>
  );
}

// This is the main page or parent component where you render SearchResults
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}