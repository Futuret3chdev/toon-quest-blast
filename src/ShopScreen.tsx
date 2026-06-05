import React from 'react';

const ShopScreen = () => (
  <div className="space-y-6">
    <h1 className="text-4xl font-bold text-center mb-8">Shop</h1>
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl">
      <div className="text-2xl font-bold">Special Offers - 70% OFF</div>
      <div className="mt-4">Team Pack + Gifts</div>
      <button className="mt-4 bg-green-500 px-8 py-3 rounded-full font-bold">Activate</button>
    </div>
    {/* More shop items mimicking screenshots */}
  </div>
);

export default ShopScreen;
