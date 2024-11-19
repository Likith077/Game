import React from 'react'
import ProductCard from './ProductCard'

const NewProducts = () => {
  // Function to prepend basePath to URLs
  const prependBasePath = (url: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${url}`

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
  ]

  return (
    <div>
      <div className='container pt-16 pb-24'>
        <h2 className='font-medium text-2xl pb-4'>Mini Games</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
          {productData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              rating={item.rating}
              gamePath={item.gamePath}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts
