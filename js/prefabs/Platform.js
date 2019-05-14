function Platform(game, frame, x, y) {
	Phaser.Sprite.call(this, game, 0, 0, frame);

	this.anchor.set(0.5);
	this.scale.y = 0.1;
	this.scale.x = 0.1;
	this.x = x;
	this.y = y;
	this.lifetime = 100;
}

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;

Platform.prototype.update = function() {
	this.lifetime -= 2;
	if(this.lifetime <= 0 ) {
		this.destroy();
		numPlatforms++;
	}
	game.debug.body(this);

}