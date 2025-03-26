import React from 'react';
import './OfferMor.css';

const offers = [
  "💬 50% OFF on all items!",
  "🛍️ New Arrivals today!",
  "🚚 Free Shipping for orders above $50!",
  "🧢 Summer Sale is live!",
  "🎉 Flat 30% on Dresses!",
  "📦 Easy Returns within 7 days!",
  "🔥 Trending Now: Bestsellers!",
  "🧴 Buy 1 Get 1 Free on select items!"
];

const OfferMor = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {/* Repeating the offers twice for seamless loop */}
        {[...offers, ...offers].map((offer, index) => (
          <div className="offer-item" key={index}>
            {offer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferMor;
