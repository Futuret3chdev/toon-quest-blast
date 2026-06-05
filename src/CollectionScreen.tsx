import React from 'react';

const CollectionScreen = () => (
  <div>
    <h1 className="text-4xl font-bold text-center">Summer Cup Collection</h1>
    <div className="grid grid-cols-3 gap-4 mt-8">
      {/* Soccer, Tennis etc. cards from screenshots */}
      <div className="bg-blue-500 p-4 rounded-xl text-center">⚽ Soccer - Complete</div>
      {/* Repeat for others */}
    </div>
  </div>
);

export default CollectionScreen;
