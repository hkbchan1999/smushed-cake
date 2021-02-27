sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.say("No! Splat", 300)
    sprite.startEffect(effects.hearts, 300)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let cake = sprites.create(assets.image`grape peace of cake`, SpriteKind.Player)
cake.setPosition(80, 60)
scene.setBackgroundColor(3)
controller.moveSprite(cake)
cake.setStayInScreen(true)
let icing = sprites.create(assets.image` pink icing`, SpriteKind.Food)
icing.setPosition(0, 0)
// spawning cats yummy
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`pop corn cat`, randint(-50, -10), randint(10, 50))
})
// dogs are the best we can get that cake
game.onUpdateInterval(1000, function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`sky dog`, randint(50, 10), randint(10, 50))
})
