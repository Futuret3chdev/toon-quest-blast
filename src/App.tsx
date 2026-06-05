import React, { useState } from 'react';
import { Home, ShoppingCart, Trophy, Users, Award, Menu } from 'lucide-react';
import GameScene from './GameScene';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'shop' | 'collection' | 'team' | 'leaderboard'>('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shop', label: 'Shop', icon: ShoppingCart },
    { id: 'collection', label: 'Collection', icon: Award },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 text-white font-sans">
      {/* Top Bar */}
      <div className="bg-red-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">🐺</div>
          <div>
            <div className="text-xl font-bold">Toon Quest Blast</div>
            <div className="text-sm opacity-75">Level 6613</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            ❤️ ∞ <span className="font-mono">01:11:08</span>
          </div>
          <div className="flex items-center gap-1 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">$ 67</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {activeTab === 'home' && <GameScene />}
        {activeTab === 'shop' && <ShopScreen />}
        {activeTab === 'collection' && <CollectionScreen />}
        {activeTab === 'team' && <TeamScreen />}
        {activeTab === 'leaderboard' && <LeaderboardScreen />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-red-600 border-t border-yellow-400 flex justify-around py-2">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex flex-col items-center p-2 ${activeTab === tab.id ? 'text-yellow-400' : 'text-white'}`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
