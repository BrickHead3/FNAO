controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 2 2 2 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 2 2 2 5 5 5 5 e e e e 
        . . b d 7 5 5 5 2 2 2 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 2 2 2 5 7 5 2 2 2 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 2 2 2 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, mySprite, 100, 100)
})
info.onCountdownEnd(function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . 4 4 4 4 4 . . . . f f 
        . 5 5 . . 4 4 . . 4 . f . f f f 
        . 5 5 5 5 5 5 5 5 . 4 . f f f . 
        4 5 . . 4 5 5 5 5 4 4 4 4 f . . 
        4 5 2 4 5 5 . 2 5 5 5 5 . . f . 
        4 4 2 2 2 2 2 2 2 2 . 5 5 . . . 
        . . 5 2 . 2 . 5 5 2 2 . 5 . . . 
        . . . 5 2 2 4 . 5 5 2 . . 5 . . 
        . . f 5 f 2 2 . . 4 2 . 5 . . . 
        . . . f 5 2 2 2 2 2 2 4 5 . . . 
        . . . f 5 4 . . 2 2 5 5 5 4 . . 
        . . f . f 5 5 5 5 . . . . . 4 . 
        . . . 4 4 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . 4 4 . . . . . . f . . 
        . . 5 5 5 5 5 5 . . . . . . f . 
        . 5 5 2 2 2 2 2 5 5 . 4 4 . . f 
        4 5 2 2 . 2 2 2 2 5 5 . 4 . . . 
        5 . 2 . . . 2 2 2 . 5 2 4 . . . 
        5 5 2 . . 2 . 2 . 2 5 5 5 5 . . 
        . 5 2 . 2 . . 2 . 2 2 . 2 5 5 . 
        . 5 2 2 2 2 2 2 2 . 2 . 2 2 5 5 
        . . 5 5 . 2 2 2 2 2 2 2 . 2 5 5 
        . f . 5 5 . 2 2 . 2 2 2 . 5 5 . 
        f f . . 5 5 2 . 2 . 2 . . 5 . . 
        . . f f . 5 5 5 5 5 5 5 5 5 . 4 
        . . f . . . 5 5 5 5 5 5 5 5 4 4 
        . . . . . . . . . . . . . . 4 . 
        . 4 . . . . . . . . . . . . . . 
        . 4 4 . . . . . . . . . . . . . 
        `,img`
        . . 4 . 2 2 2 2 2 2 2 2 5 5 4 4 
        . 5 . 2 2 2 2 2 2 2 2 2 . 5 5 4 
        5 5 . 2 . 2 . 2 2 2 2 2 2 2 2 5 
        5 . . 2 2 2 2 2 2 2 . . 2 2 . 5 
        . 5 2 . 2 2 2 2 2 2 2 2 . 2 2 5 
        . 5 2 . 2 2 . 2 2 2 2 2 2 2 2 5 
        5 5 2 2 2 2 2 2 2 2 2 2 2 2 . 5 
        5 5 2 2 . 2 2 2 2 2 2 2 2 2 2 5 
        5 5 2 . 2 2 2 2 2 2 2 2 2 2 5 . 
        5 5 . 2 . 2 2 2 2 2 2 2 2 5 . . 
        5 5 5 2 . 2 2 2 2 2 2 2 . 5 . . 
        . 5 5 5 5 5 5 5 2 2 2 2 . 5 . . 
        . . 5 5 5 2 . 5 5 5 5 5 5 . . 4 
        . . 5 . 5 5 . . . 5 5 5 5 . . . 
        4 . 5 . 2 . 5 5 5 5 . . 5 . . 4 
        4 4 . 5 5 5 5 2 . . . 5 . . . . 
        `,img`
        . . . . 5 5 5 5 5 . . 5 . . . . 
        . 5 5 5 5 2 2 2 5 5 5 2 5 5 . . 
        . 5 2 2 2 2 2 2 2 2 2 2 2 5 5 . 
        5 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
        5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
        5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
        5 2 2 2 b b b b 2 2 2 2 2 2 2 5 
        5 2 2 2 b b b b b b 2 2 2 2 2 5 
        5 2 2 2 2 b b b b b 2 2 2 2 5 . 
        5 2 2 2 2 2 b b 2 2 2 2 2 2 5 . 
        5 2 2 2 2 2 2 2 2 2 2 2 2 2 5 . 
        5 2 2 2 2 2 2 2 2 2 2 2 2 2 5 . 
        5 5 2 2 2 2 2 2 2 2 2 2 2 2 5 . 
        . 5 5 2 2 2 2 2 2 2 2 2 2 5 5 . 
        . . 5 5 2 2 2 2 2 2 2 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b b b b . . . . . . . 
        . b b b b b b b b b b . . . . . 
        . b b b b b b b b b b b b . . . 
        . b b b c b b c b b c b b . . . 
        . . b b b c b c b c b b b . . . 
        . . . b b c b c b c b b b . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c b c b c b b . . . . 
        . . . . b c b c b c b b b . . . 
        . . . . b b b b b b b b b . . . 
        . . b b b b b b b b b b b b . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b b b b . . . . . . . 
        . b b b b b b b b b b . . . . . 
        . b b b b b b b b b b b b . . . 
        . . b b c b b c b b c b b . . . 
        . . . b b c b c b c b b b . . . 
        . . . . b c b c b c b b . . . . 
        . . . . . c b c b c b . . . . . 
        . . . . . c b c b c b . . . . . 
        . . . . . c b c b c b . . . . . 
        . . . . . c b c b c b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . b b b b b b b b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b b b b b b b b . . . 
        b b b b b b b b b b b b b b . . 
        b b b b b b b b b b b b b b b . 
        b b b b c b b c b b c b b b b . 
        . b b b b c b c b c b b b b . . 
        . . b b b c b c b c b b b . . . 
        . . . . . c b c b c . . . . . . 
        . . . . . . b c b c . . . . . . 
        . . . . . . b c b c . . . . . . 
        . . . . . . b c b c . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . b b b b b b b . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . b b b b b b b b b b b b . . . 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b c b b c b b c b b b b b 
        b b b b b c b c b c b b b b b b 
        b b b b b c b c b c b b b b b . 
        . . . . . c b c b c . . . . . . 
        . . . . . . b c b c . . . . . . 
        . . . . . . b c b c . . . . . . 
        . . . . . . b c b c . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . b b b b b . . . b b b b . . . 
        b b b b b b b . b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b c b b c b b c b b b b b 
        b b b b b c b c b c b b b b b b 
        b b b b b c b c b c b b b b b . 
        . . . . . c b c b c . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . b b b . . . . . . . b b . . . 
        b b b b b . . . . b b b b b b b 
        b b b b b . . . . b b b b b b b 
        b b b b c b . . . . c b b b b b 
        b b b b b . . . . . b b b b b b 
        b b b b . . . . . . b b b b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . b . . . . . . . . . . . . . . 
        b b b . . . . . . . . . . . b b 
        b b b . . . . . . . . . b b b b 
        b b b . . . . . . . . . b b b b 
        b b . . . . . . . . . . b b b b 
        b . . . . . . . . . . . . b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    music.play(music.createSong(hex`00f4010408020700001c00010a006400f401640000040000000000000000000000000005000004460004000800012708000c00012410001400012414001800012018001c0001271c00200001202000240002202a28002c0001272c00300001203000340002202734003800031e242a01001c000f05001202c102c20100040500280000006400280003140006020004120008000c00011d18001c00012a28002c00011b03001c0001dc00690000045e0100040000000000000000000005640001040003180008000c00012a10001400011d1c002000012928002c00012006001c00010a006400f4016400000400000000000000000000000000000000021e000400080001220c001000012010001400012914001800011e20002400012507001c00020a006400f40164000004000000000000000000000000000000000321000c00100001251400180002242918001c000122240028000322252928002c00011e08001c000e050046006603320000040a002d0000006400140001320002010002120008000c00011e0c001000012930003400011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000c002c002d00010730003100010b`), music.PlaybackMode.UntilDone)
    game.gameOver(true)
})
info.onLifeZero(function () {
    music.play(music.createSong(hex`00f4010408020302001c000c960064006d019001000478002c010000640032000000000a060005d200000004000a1d1e2022242527292a2c040008000a1d1e2022242527292a2c08000c000a1d1e2022242527292a2c0c0010000a1d1e2022242527292a2c100014000a1d1e2022242527292a2c140018000a1d1e2022242527292a2c18001c000a1d1e2022242527292a2c1c0020000a1d1e2022242527292a2c200024000a1d1e2022242527292a2c240028000a1d1e2022242527292a2c28002c000a1d1e2022242527292a2c2c0030000a1d1e2022242527292a2c300034000a1d1e2022242527292a2c340038000a1d1e2022242527292a2c04001c00100500640000041e000004000000000000000000000000000a040004310004000800012408000c00011d0c001000012a1400180001202000240001272400280001202c003000012a30003400021b2505001c000f0a006400f4010a00000400000000000000000000000000000000023b000400080002202a0c001000012510001400011e1400180002242a1c002000021e2524002800012528002c00021e2a30003400012434003800021d2a`), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000044e0004000800012708000c0001240c00100001201000140002242a14001800012018001c0001271c00200001202000240002202a28002c000220272c00300001203000340002202734003800031e242a`), music.PlaybackMode.UntilDone)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . e e e e . . . . . 
    . . e e e e e e e e . . . 
    . e e e e e e d e e e . . 
    e e e e e e d d e e e d . 
    e e d d e e e e e e e d . 
    d d d e e e d d d e d d . 
    e e e e e d d f f d d e . 
    e e e b f d d f b e e e . 
    . f 1 9 f 1 1 f 9 1 f . . 
    . f 1 9 1 2 1 1 9 1 f . . 
    . f f 9 8 8 2 8 9 f f . . 
    f d f 9 1 1 1 1 9 f 1 f . 
    d d f 9 8 8 8 8 9 f 1 1 . 
    d d f 9 8 8 8 8 8 f d 1 . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundImage(img`
    eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
    222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
    222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
    222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
    e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
    eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
    2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
    2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
    2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
    eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
    eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
    eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
    eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
    eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
    eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
    eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
    eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
    eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
    eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
    eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
    eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
    eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
    eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
    eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
    eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
    eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
    eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
    eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
    eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
    ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
    ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
    eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
    eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
    eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
    eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
    eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
    eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
    eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
    ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
    ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
    e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
    e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
    eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
    eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
    ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
    ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
    e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
    e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
    22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
    22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
    222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
    2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
    2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
    222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
    222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
    222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
    22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
    22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
    22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
    2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
    2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
    2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
    ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
    eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
    eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
    2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
    222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
    22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
    222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
    eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
    222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
    222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
    222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
    222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
    222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
    222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
    222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
    222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
    222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
    222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
    222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbb22222bbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
    222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb222222bbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
    2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbb222222bbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
    2222e222ee2222ebbbbbbbbbbbbbb222bbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222bbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
    2222e222ee2222ebbbbbbbbbbbbbbb222bbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222bbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
    2222e222ee2222eebbbbbbbbbbbbbbb22bbbbbbbbdddddddddddddddddddddddddddd22222222ddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
    2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddd222222dddddddddddddd222222222ddddddddddddddddddddddddddddddddddddddddddbbbbb22222bbbbbbbbbbbbbbe22e22e2222e2222
    222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddd22222dddddddddddddddd222222222222222dddddddddddddddddddddddddddddddddddddbb22222222bbbbbbbbbbbbee22e22e222222222
    222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddd222dddddddddddddd2222222222222222222ddddddddddddddddddddddddddddddddddd2222222222bbbbbbbbbbbe222e22e222222222
    2222222222e22e22eebbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddd22222222222222222222dddddddddddddddddddddddddddddddddd2222222222bbbbbbbbbbee22e22e2222222222
    222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddd22222222222222222222dddddddddddddddddddddddddddddddddd22222222222bbbbbbbbbe222e22e222e222222
    222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddd22222222222222222222dddddddddddddddddddddddddddddddddd2222222222222bbbbbbee222e222222e222222
    222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddd22222222222222222222ddddddddddddddddddddd2dddddddddddd22222222222222bbbbbe222e2222222e222222
    222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddd22222222222222222222dddddddddddddddddddd222ddddddddddd222222222222222bbbee222e222222ee222222
    2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddd2222222222222222222ddddddddddddddddddd22222dddddddddd222222222222222bbbe2222e222222e2222222
    22222e2e2222222e222eebbbbbbbbbbbbb2222ddddddddddddddddddddddddddddddd2222222222222222222ddddddddddddddddddd2222222dddddddd222222222222222bbee222e2222222e2e22222
    22222e2e2222222e222eebbbbbbbbbbbbb222222dddddddddddddddddddddddddddddd222222222222222222dddddddddddddddddddd2222222ddddddbb222222222222222bee222e2222222e2e22222
    22222e2e22222222e22ebbbbbbbbbbbbbb22222222dddddddddddddddddddddddddddddd222ddd22222ddddddddddddddddddddddddddd222dddddddbbbbbbbbb222222222bbe22e22222222e2e22222
    22222e2ee2222222e22ebbbbbbbbbbbbbb2222222222dddddddddddddddddddddddddddd222ddd22222ddddddddddddddddddddddddddddddddddddbbbbbbbbbbb22222222bbe22e2222222ee2e22222
    22222e2ee2222222eeeebbbbbbbbbbbbbbb222222222dddddddddddddddddddddddddddd222ddddd2ddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbb2222222bbeeee2222222ee2e22222
    22222e22e2222222eeebbbbbbbbbbbbbbbb22222b2bbbdddddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbb222222bbbeee2222222e22e22222
    22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbb2bbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbb222222bbbbee2222222e2ee22222
    22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbb22222bbbbbee222222e2ee22222
    222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
    222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
    222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
    222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
    222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
    222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
    `)
info.setLife(3)
info.startCountdown(10)
mySprite.setBounceOnWall(true)
mySprite2 = sprites.create(img`
    . . . . . . f f . . . . . 
    . b b . . . f f . . b b . 
    . b b . . f f f f . b b . 
    . . b b b b b b b b b . . 
    . . b f f b b b f f b . . 
    . . b f f b f b f f b b . 
    . . b b b f f 2 b b b b . 
    . . b b b 2 2 2 b b b 2 . 
    . . . . . f 2 f b . . . . 
    . . b b b b 2 b b b b b . 
    . b b . b d d f d b . b b 
    . b . . b d d d d b . . b 
    . . . . b d d f d b . . . 
    . . . . b b b b b b . b . 
    . . . . . b . . b b b b . 
    . . . . b b . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(146, 85)
mySprite2.follow(mySprite, 75)
