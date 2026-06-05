import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const GameScene: React.FC = () => {
  const gameRef = useRef<HTMLDivElement>(null);
  const gameInstance = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current!,
      backgroundColor: '#2a2a4a',
      scene: {
        preload: function() {
          // Placeholder assets
          this.load.image('tile', 'https://via.placeholder.com/60/4f46e5/ffffff?text=T');
        },
        create: function() {
          this.add.text(400, 300, 'Match-3 Game Area\n\nTap/Swipe to play! (Full match-3 logic coming)', {
            fontSize: '24px',
            color: '#ffffff'
          }).setOrigin(0.5);
          // TODO: Full Phaser Match-3 implementation with grid, swaps, matches, boosters
        }
      }
    };

    gameInstance.current = new Phaser.Game(config);

    return () => {
      if (gameInstance.current) {
        gameInstance.current.destroy(true);
      }
    };
  }, []);

  return <div ref={gameRef} className="mx-auto border-4 border-yellow-400 rounded-xl overflow-hidden" />;
};

export default GameScene;
