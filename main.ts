sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.say("No! Splat", 300)
    sprite.startEffect(effects.hearts, 300)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
   setPosition()
})
let projectile2: Sprite = null
let projectile: Sprite = null
let icing: Sprite = null
let cake = sprites.create(assets.image`grape peace of cake`, SpriteKind.Player)
icing = sprites.create(assets.image`pink icing`, SpriteKind.Food)
cake.setPosition(80, 60)
setPosition()
scene.setBackgroundColor(3)
controller.moveSprite(cake)
cake.setStayInScreen(true)

// spawning cats yummy
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`pop corn cat`, randint(-50, -10), randint(10, 50))
})
// dogs are the best we can get that cake
game.onUpdateInterval(1000, function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`sky dog`, randint(50, 10), randint(10, 50))
})
function setPosition() {
icing.setPosition(randint(0, 160), randint(0, 120))
    icing.say("I'M AM HERE", 1000)
}
    