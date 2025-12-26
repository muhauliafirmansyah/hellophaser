import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    create() {
        const { width, height } = this.scale;

        this.add.text(width / 2, height / 2, 'Hello Phaser', {
            fontSize: '64px',
            fill: '#ffffff'
        }).setOrigin(0.5);
    }
}
