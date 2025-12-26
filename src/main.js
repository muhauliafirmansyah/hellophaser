import './style.css'
import Phaser from 'phaser'
import MainScene from './MainScene'

// Use window size for mobile full screen
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    parent: 'game-container',
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [MainScene]
};

const game = new Phaser.Game(config);
