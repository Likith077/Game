import React from 'react'

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Game Space Features</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Browser-Based Gaming</h2>
          <p>Enjoy our games directly in your browser without any downloads or installations.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Diverse Game Selection</h2>
          <p>From puzzles to action, we offer a wide variety of games to suit every taste.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Regular Updates</h2>
          <p>We constantly add new games and update existing ones to keep the experience fresh.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Responsive Design</h2>
          <p>Our games are optimized for both desktop and mobile devices for gaming on the go.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Community Features</h2>
          <p>Compete with friends, share scores, and climb our leaderboards.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Quick Load Times</h2>
          <p>Our games are designed to load quickly, getting you into the action faster.</p>
        </div>
      </div>
    </div>
  )
}

export default Features