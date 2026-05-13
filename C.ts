// Add your code here
namespace SpriteKind {
   export const LetterImageImage = SpriteKind.create()
}
namespace FontTypes {
    let nextKind: number
    export function create() {
        if (nextKind === undefined) nextKind = 1;
        return nextKind++;
    }
    //%isKind
    export const Default = SpriteKind.create();
    //% isKind
    export const Bold = SpriteKind.create();
    //%isKind
    export const Retro = SpriteKind.create();
    //%isKind
    export const Pixel3D = SpriteKind.create();
}
namespace EmotionTypes {
    let nextKind: number
    export function create() {
        if (nextKind === undefined) nextKind = 1;
        return nextKind++;
    }
    //%isKind
    export const Happy = SpriteKind.create();
    //% isKind
    export const Sad = SpriteKind.create();
    //%isKind
    export const Angry = SpriteKind.create();
    //%isKind
    export const Confused = SpriteKind.create();
}
enum ButtonEnum {
   A,
   B,
   Right,
   Left,
   Up,
   Down,
}
enum PlayType {
//%block="Play"
    Play,
//%block="Dont Play"
    Dont
}
enum ImageFonts {
  Default,
  Bold,
  Retro,
 //Gothic,
}
/*
enum PlayerEmotionTypes {
 Happy,
 Sad,
 Angry,
}
*/
let L2 = 0
let I2 = 0
let I3 = 0
let L3 = 0
let X3 = 0
let Y3 = 0
let c = ""
let F = 0
let Code = 0
let image3: Sprite = null
let image4: Sprite = null
let image5: Sprite = null
let flickerLetterValue = 0
let flickerLetterValue2 = 0
let TopPalyerEmotion = 0
let BottomPlayerEmotion = 0
let TopText = ""
let BottomText = ""
let TopChangeEmotion = 0
let BottomChangeEmotion = 0
let Press_A = 0
let Press_A4 = 0
let Press_A8 = 0
let Go = 0
let I = 0
let L = 0
let S = 0
let screenImage: Image = null
let Y2 = 0
let X2 = 0
let y = 0
let X = 0
let sg = 0
let cb = ControllerButton.A
let image2: Sprite = null
let arrow: Sprite = null
let letters: Image[] = []
let LetterText: string[] = []
let textCancelled = false
let dialogRunId = 0
let AllFonts: Image[][] = []
letters = [
    img`
        3 3 3 3 3 a f f
        f 3 3 3 3 a f f
        f 3 3 a f 3 a f
        f 3 3 a f 3 a f
        f 3 3 a f 3 a f
        f 3 3 3 3 3 a f
        3 a f f f f 3 a
        3 a f f f f 3 a
    `,
    img`
    3 3 3 3 3 a f 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 3 3 a f 
    f 3 3 a f 3 f 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 3 3 a f 
    `,
    img`
    f 3 3 3 3 a f 
    3 3 a f f 3 a 
    3 3 a f f f f 
    3 3 a f f f f 
    3 3 a f f f f 
    3 3 a f f f f 
    3 3 a f f 3 a 
    f 3 3 3 3 a f 
    `,
    img`
    3 3 3 3 3 a f 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 3 3 a f 
    `,
    img`
        3 3 3 3 3 3 a
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 3 3 a f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 3 3 3 a
    `,
    img`
    3 3 3 3 3 3 3 
    f 3 3 a f f f 
    f 3 3 a f f f 
    f 3 3 3 3 3 f 
    f 3 3 a f f f 
    f 3 3 a f f f 
    f 3 3 a f f f 
    f 3 3 a f f f 
    `,
    img`
    f 3 3 3 a f 
    3 3 a f 3 a 
    3 3 a f f f 
    3 3 a f f f 
    3 3 a f f f 
    3 3 a 3 3 a 
    3 3 a f 3 a 
    f 3 3 3 a f 
    `,
    img`
        3 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 3 3 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
    `,
    img`
        3 3 3 3 3 3 a
        3 3 3 3 a f f
        f f 3 3 a f f
        f f 3 3 a f f
        f f 3 3 a f f
        f f 3 3 a f f
        f f 3 3 a f f
        f 3 3 3 3 3 a
    `,
    img`
        3 3 3 3 3 3 3 a
        3 3 a 3 3 a f f
        f f f 3 3 a f f
        f f f 3 3 a f f
        f f f 3 3 a f f
        3 a f 3 3 a f f
        3 a f 3 3 a f f
        f 3 3 3 a f f f
    `,
    img`
        3 3 3 a f 3 a
        3 3 3 a f 3 a
        f 3 3 a 3 a f
        f 3 3 3 a f f
        f 3 3 a 3 a f
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
    `,
    img`
    3 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 3 3 3 3 a 
    `,
    img`
    3 3 3 a f f 3 a 
    f 3 3 3 a 3 3 a 
    f 3 3 a 3 a 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    `,
    img`
    3 3 3 f f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 3 a f 3 a 
    f 3 3 3 3 a 3 a 
    f 3 3 a 3 3 3 a 
    f 3 3 a 3 3 3 a 
    f 3 3 a f 3 3 a 
    f 3 3 a f f 3 a 
    `,
    img`
        f 3 3 3 a f
        3 3 a f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        f 3 3 3 a f
    `,
    img`
        3 3 3 3 3 a f
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 3 3 a f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
    `,
    img`
        f 3 3 3 a f
        3 a f f 3 a
        3 a f f 3 a
        3 a f f 3 a
        3 a 3 a 3 a
        3 a f 3 a f
        f 3 3 f 3 a
    `,
    img`
        3 3 3 3 3 a f
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 3 3 3 a
        f 3 3 a 3 a f
        f 3 3 a 3 3 a
        f 3 3 a 3 3 a
        f 3 3 a 3 3 a
    `,
    img`
        f 3 3 3 a f
        3 3 a f 3 a
        3 3 a f f f
        f 3 3 3 a f
        f f f f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        f 3 3 3 a f
    `,
    img`
        3 3 3 3 3 3 a
        3 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
    `,
    img`
        3 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f f 3 3 3 a f
    `,
    img`
        a 3 f f f 3 a
        a 3 f f f 3 a
        a 3 f f f 3 a
        a 3 f f f 3 a
        a 3 f f f 3 a
        a 3 f f f 3 a
        f a 3 f 3 a f
        f f a 3 a f f
    `,
    img`
    3 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a 3 a 3 a 
    f 3 3 a 3 a 3 a 
    f f 3 3 f 3 3 a 
    f f 3 a f f 3 a 
    `,
    img`
        3 f f f f f 3
        a 3 f f f 3 a
        f a 3 f 3 a f
        f f f 3 f f f
        f f 3 a 3 f f
        f 3 a f a 3 f
        3 a f f f a 3
    `,
    img`
        3 3 3 a f 3 a f
        f 3 3 a f 3 a f
        f 3 3 a f 3 3 f
        f f 3 a 3 a f f
        f f f 3 a f f f
        f f f 3 a f f f
        f f 3 3 a f f f
        f f 3 3 a f f f
    `,
    img`
        3 3 3 3 3 3 a f
        f f f f f 3 a f
        f f f f 3 3 f f
        f f f 3 a f f f
        f f 3 a f f f f
        f 3 a f f f f f
        3 3 3 3 3 3 3 a
    `,
    img`
        f f f f f f f
        f f f f f f f
        f f f f f f f
        f f f f f f f
        f f f f f f f
        a a a a f f f
        a a a a f f f
        a a a 3 3 3 3
        f f f 3 3 3 3
        f f f 3 3 3 3
    `,
    img`
        3 3 a
        3 3 a
        3 3 a
        3 3 a
        3 3 a
        3 3 a
        f f f
        3 3 a
    `,
    img`
        f a 3 f a 3 f
        a a 3 a a 3 a
        3 a 3 3 a 3 3
        f a 3 f a 3 f
        f a 3 f a 3 f
        3 3 3 3 3 3 3
        a a 3 a a 3 a
        f a 3 f a 3 f
    `,
    img`
        f 3 3 3 a f
        3 3 a f 3 a
        3 3 a f f f
        f 3 3 3 a f
        f f 3 a 3 a
        f 3 a f 3 a
        f f 3 3 3 a
        3 f a f 3 a
        3 3 a f 3 a
        f 3 3 3 a f
    `,
    img`
        f 3 3 3 3 3 3
        f f f f f f 3
        f f f f f f 3
        f 3 3 3 3 3 3
        3 a f f f f 3
        3 a f f f f 3
        3 a f f f f 3
        f 3 3 3 3 3 3
    `,
    img`
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        3 3 3 3 3 3 f
        3 a f f f f 3
        3 a f f f f 3
        3 a f f f f 3
        3 3 3 3 3 3 f
    `,
    img`
        f 3 3 3 3 3 3
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        f 3 3 3 3 3 3
    `,
    img`
    f f f f f a 3 
    f f f f f a 3 
    f f f f f a 3 
    f 3 3 3 3 3 3 
    3 f f f f a 3 
    3 f f f f a 3 
    3 f f f f a 3 
    f 3 3 3 3 3 3 
    `,
    img`
    f 3 3 3 3 3 3 
    3 a f f f f 3 
    3 a f f f f 3 
    3 3 3 3 3 3 3 
    3 a f f f f f 
    3 a f f f f f 
    3 a f f f f f 
    f 3 3 3 3 3 3 
    `,
    img`
    f f f a 3 3 
    f f a 3 f f 
    f a 3 f f f 
    f a 3 f f f 
    f a 3 f f f 
    3 3 3 3 3 f 
    f a 3 f f f 
    f a 3 f f f 
    `,
    img`
        f 3 3 3 3 3 3
        3 f f f f a 3
        3 f f f f a 3
        f 3 3 3 3 3 3
        f f f f f f 3
        f f f f f f 3
        f f 3 f f 3 3
        f f f 3 3 3 f
    `,
    img`
    3 a f f f 
    3 a f f f 
    3 a f f f 
    3 a f f f 
    3 a f f f 
    3 3 3 3 f 
    3 a f f 3 
    3 a f f 3 
    `,
    img`
        3 a
        3 a
        f f
        3 a
        3 a
        3 a
        3 a
        3 a
    `,
    img`
        f f f 3 a
        f f f f f
        f f f 3 a
        f f f 3 a
        f f f 3 a
        3 f f 3 a
        a 3 3 a f
        f a a f f
    `,
    img`
    3 a f f f 
    3 a f f f 
    3 a f f f 
    3 a f 3 a 
    3 a 3 a f 
    3 3 a f f 
    3 a 3 a f 
    3 a f 3 a 
    `,
    img`
        3 a
        3 a
        3 a
        3 a
        3 a
        3 a
        3 a
        3 a
    `,
    img`
    f 3 3 f 3 3 f 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    `,
    img`
    f 3 3 f 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    `,
    img`
        f 3 3 f
        3 a f 3
        3 a f 3
        3 a f 3
        3 a f 3
        3 a f 3
        3 a f 3
        f 3 3 f
    `,
    img`
    3 3 3 3 3 3 f 
    3 a f f f f 3 
    3 a f f f f 3 
    3 a f f f f 3 
    3 3 3 3 3 3 f 
    3 a f f f f f 
    3 a f f f f f 
    3 a f f f f f 
    `,
    img`
    f 3 3 3 3 3 3 
    3 f f f f a 3 
    3 f f f f a 3 
    3 f f f f a 3 
    f 3 3 3 3 3 3 
    f f f f f a 3 
    f f f f f a 3 
    f f f f f a 3 
    `,
    img`
    f a 3 3 f 
    a 3 f f 3 
    a 3 f f f 
    a 3 f f f 
    a 3 f f f 
    a 3 f f f 
    a 3 f f f 
    a 3 f f f 
    `,
    img`
    f a 3 3 3 
    a 3 f f f 
    a 3 f f f 
    f a 3 3 f 
    f f f a 3 
    f f f a 3 
    f a a a 3 
    f 3 3 3 f 
    `,
    img`
        f a 3 f f
        f a 3 f f
        3 3 3 3 3
        f a 3 f f
        f a 3 f f
        f a 3 f f
        f a 3 f f
        f a 3 f f
    `,
    img`
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    f 3 3 f 
    `,
    img`
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        f a 3 a f
    `,
    img`
        3 a f f f a 3
        3 a f 3 f a 3
        3 a f 3 f a 3
        3 a f 3 f a 3
        3 a f 3 f a 3
        3 a f 3 f a 3
        f 3 a 3 a 3 f
        f f 3 f 3 f f
    `,
    img`
        3 f f f f 3
        a 3 f f 3 a
        f a 3 3 a f
        f f 3 3 f f
        f f 3 3 f f
        f f 3 3 f f
        f 3 a a 3 f
        3 a f f a 3
    `,
    img`
        a 3 f 3
        a 3 f 3
        a 3 f 3
        f a 3 f
        f a 3 f
        f a 3 f
        f a 3 f
        f a 3 f
    `,
    img`
        3 3 3 3 3 3 a
        f f f f f 3 a
        f f f f 3 a f
        f f f 3 a f f
        f f 3 a f f f
        f 3 a f f f f
        3 3 3 3 3 3 3
    `,
    img`
        3 3 3 3 a f
        a a a f 3 a
        f f f f 3 a
        f f f f 3 a
        f 3 3 3 a f
        f 3 3 a f f
        f a a f f f
        f f f f f f
        f 3 a f f f
    `,
    img`
        3 3 a
        3 3 a
        3 3 a
        f f f
        3 3 a
        3 3 a
        3 3 a
    `, 
    img`
        . 3 3 3 a . .
        3 3 3 3 a . .
        . . 3 3 a . .
        . . 3 3 a . .
        . . 3 3 a . .
        . . 3 3 a . .
        . 3 3 3 3 a .
    `, 
    img`
        . . 3 3 a . .
        . . . . 3 a .
        . . . . 3 a .
        . . 3 3 a . .
        . . 3 a . . .
        . . 3 a . . .
        . . 3 3 3 a .
    `,
    img`
        . . 3 3 . . .
        . . a a 3 . .
        . . . a 3 . .
        . . 3 3 . . .
        . . a a 3 . .
        . . . a 3 . .
        . . 3 3 . . .
    `, 
    img`
        . . 3 a 3 . .
        . . 3 a 3 . .
        . . 3 a 3 . .
        . . 3 3 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
    `, 
    img`
        . . 3 3 3 . .
        . . 3 a . . .
        . . 3 a . . .
        . . 3 3 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . 3 3 3 . .
    `, 
    img`
        . . a 3 . . .
        . a 3 . . . .
        . a 3 . . . .
        . a 3 3 . . .
        . a 3 a 3 . .
        . a 3 a 3 . .
        . . a 3 . . .
    `,
    img`
        . 3 3 3 3 . .
        . . a a 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
    `, 
    img`
        . . 3 3 . . .
        . 3 a a 3 . .
        . 3 a . 3 . .
        . . 3 3 . . .
        . 3 a a 3 . .
        . 3 a . 3 . .
        . . 3 3 . . .
    `,
    img`
        . . 3 3 3 . .
        . 3 a . 3 . .
        . 3 a . 3 . .
        . . 3 3 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
    `,
    img`
        . . 3 3 3 . .
        . 3 a a a 3 .
        . 3 . . a 3 .
        . 3 . . a 3 .
        . 3 . . a 3 .
        . 3 . . a 3 .
        . . 3 3 3 . .
    `,
    img`
        . . . . . . .
        . . a 3 . . .
        . . a 3 . . .
        a 3 3 3 3 3 .
        . . a 3 . . .
        . . a 3 . . .
        . . . . . . .
    `,
    img`
        . . . . . . .
        . . . . . . .
        . . . . . . .
        . 3 3 3 3 3 .
        a a a a a . .
        . . . . . . .
        . . . . . . .
    `,
    img`
        . . . . . . .
        . 3 . . . 3 .
        . a 3 . 3 a .
        . . a 3 a . .
        . . 3 a 3 . .
        . 3 a . a 3 .
        . . . . . . .
    `,
    img`
        . . . . . . .
        . . a 3 . . .
        . . . . . . .
        a 3 3 3 3 3 .
        . . . . . . .
        . . a 3 . . .
        . . . . . . .
    `,
    img`
        . . . . . . .
        . 3 3 3 3 3 .
        a a a a a . .
        . . . . . . .
        . 3 3 3 3 3 .
        a a a a a . .
        . . . . . . .
    `, 
    img`
        f f f f f f f
        f f f f f f f
        f f f f f f f
        f f f f f f f
        f f 3 3 f f f
        f f f 3 a f f
        f f 3 f a f f
        f f f a f f f
    `
]
//LetterIxdex = [
 //   0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73
//]
enum LetterSListNumbers {
    //%block="A = 0"
    A,
    //%block="B = 1"
    B,
    //%block="C = 2"
    C,
    //%block="D = 3"
    D,
    //%block="E = 4"
    E,
    //%block="F = 5"
    F,
    //%block="G = 6"
    G,
    //%block="H = 7"
    H,
    //%block="I = 8"
    I,
    //%block="J = 9"
    J,
    //%block="K = 10"
    K,
    //%block="L = 11"
    L,
    //%block="M = 12"
    M,
    //%block="N = 13"
    N,
    //%block="O = 14"
    O,
    //%block="P = 15"
    P,
    //%block="Q = 16"
    Q,
    //%block="R = 17"
    R,
    //%block="S = 18"
    S,
    //%block="T = 19"
    T,
    //%block="U = 20"
    U,
    //%block="V = 21"
    V,
    //%block="W = 22"
    W,
    //%block="X = 23"
    X,
    //%block="Y = 24"
    Y,
    //%block="Z = 25"
    Z,
    //%block=". = 26"
    dot,
    //%block="! = 27"
    ep,
    //%block="# = 28"
    ht,
    //%block="§ = 29"
    ss,
    //%block="a = 30"
    a,
    //%block="b = 31"
    b,
    //%block="c = 32"
    c,
    //%block="d = 33"
    d,
    //%block="e = 34"
    e,
    //%block="f = 35"
    f,
    //%block="g = 36"
    g,
    //%block="h = 37"
    h,
    //%block="i = 38"
    i,
    //%block="j = 39"
    j,
    //%block="k = 40"
    k,
    //%block="l = 41"
    l,
    //%block="m = 42"
    m,
    //%block="n = 43"
    n,
    //%block="o = 44"
    o,
    //%block="p = 45"
    p,
    //%block="q = 46"
    q,
    //%block="r = 47"
    r,
    //%block="s = 48"
    s,
    //%block="t = 49"
    t,
    //%block="u = 50"
    u,
    //%block="v = 51"
    v,
    //%block="w = 52"
    w,
     //%block="x= 53"
    x,
    //%block="y = 54"
    y,
    //%block="z = 55"
    z,
    //%block="? = 56"
    qm,
    //%block=": = 57"
    cm,
    //%block="1 = 58"
    one,
    //%block="2 = 59"
    two,
    //%block="3 = 60"
    three,
    //%block="4 = 61"
    four,
    //%block="5 = 62"
    five,
    //%block="6 = 63"
    six,
    //%block="7 = 64"
    seven,
    //%block="8 = 65"
    eight,
    //%block="9 = 66"
    nine,
    //%block="0 = 67"
    zero,
    //%block="+ = 68"
    plus,
    //%block="- = 69"
    minus,
    //%block="* = 70"
    times,
    //%block="÷ = 71"
    divisiondivision,
    //%block="= = 72"
    equals,
    //%block=", = 73"
    coma
}
 LetterText = [
     "A",
     "B",
     "C",
     "D",
     "E",
     "F",
     "G",
     "H",
     "I",
     "J",
     "K",
     "L",
     "M",
     "N",
     "O",
     "P",
     "Q",
     "R",
     "S",
     "T",
     "U",
     "V",
     "W",
     "X",
     "Y",
     "Z",
     ".",
     "!",
     "#",
     "§",
     "a",
     "b",
     "c",
     "d",
     "e",
     "f",
     "g",
     "h",
     "i",
     "j",
     "k",
     "l",
     "m",
     "n",
     "o",
     "p",
     "q",
     "r",
     "s",
     "t",
     "u",
     "v",
     "w",
     "x",
     "y",
     "z",
     "?",
     ":",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7",
     "8",
     "9",
     "0",
     "+",
     "-",
     "*",
     "÷",
     "=",
     ","
 ]
 //original exclamation point
 /*
    3 a
    3 a
    3 a
    3 a
    3 a
    3 a
    3 a
    f f
    f f
    3 a
    3 a
    */
    //original question mark
    /*
    3 3 a
    f f 3
    f f 3
    3 3 a
    3 a f
    f f f
    3 a f
    */
screenImage = image.create(160, 120)
let displayScreen = sprites.create(screenImage, SpriteKind.Player)
//%block="Letter Image"
//%icon=""
//%color=#000000
//%weight=60
namespace letterImage {
    X = 58
    y = 1
    X2 = 1
    Y2 = 75
    //%block="Set up image"
    export function set(): void {
        let mySprite20250620T182956517Z = sprites.create(image.create(159, 121), SpriteKind.Player)
        mySprite20250620T182956517Z.setImage(img`
            ...............................................................................................................................................................
            .............cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            .............caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac..........
            ..............cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...........
            ...............................................................................................................................................................
            ...............................................................................................................................................................
            ...............................................................................................................................................................
        `)
        mySprite20250620T182956517Z.setScale(0.4, ScaleAnchor.Middle)
        mySprite20250620T182956517Z.x = 27
        mySprite20250620T182956517Z.y = 25
        let mySprite26y66g = sprites.create(image.create(140, 120), SpriteKind.Player)
        mySprite26y66g.setImage(img`
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            ............................................................................................................................................
            ............................................................................................................................................
            ............................................................................................................................................
            ............................................................................................................................................
        `)
        mySprite26y66g.setScale(0.4, ScaleAnchor.Middle)
        mySprite26y66g.x = 133
        mySprite26y66g.y = 97

    }
    //%group="set Dialogue Text"
    //%block="set Dialogue Top to $MyText"
    export function text(MyText: string): void {
        textCancelled = false;
        let myRunId = ++dialogRunId;
        if (I != 4) {
            I += 1
            
            for (let index = 0; index <= MyText.length - 1; index++) {
                if (textCancelled || myRunId !== dialogRunId)
                    return;
                if (L > 0 && L % 11 == 0) {
                    X = 58
                    y += 10
                    L = 1
                }
                Code = MyText.charCodeAt(index)
                if (Code >= 65 && Code <= 90) {
                    S = MyText.charCodeAt(index) - 65
                } else if (Code >= 97 && Code <= 122) {
                    S = MyText.charCodeAt(index) - 67
                }
                F = 0
                c = MyText.charAt(index)
                L += 1
                if (c == " ") {
                    X += 5
                    continue;
                } else if (c == ".") {
                    S = 26
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "!") {
                    S = 27
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "#") {
                    S = 28
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "…") {
                    S = 26
                    for (let index2 = 0; index2 < 3; index2++) {
                        screenImage.drawTransparentImage(letters[S], X, y)
                        X += 7
                    }
                    continue;
                } else if (c == "§") {
                    S = 29
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "?") {
                    S = 56
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == ":") {
                    S = 57
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "1") {
                    S = 58
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "2") {
                    S = 59
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "3") {
                    S = 60
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "4") {
                    S = 61
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "5") {
                    S = 62
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "6") {
                    S = 63
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "7") {
                    S = 64
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "8") {
                    S = 65
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "9") {
                    S = 66
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "0") {
                    S = 67
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "+") {
                    S = 68
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "-") {
                    S = 69
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "*") {
                    S = 70
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "÷") {
                    S = 71
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "=") {
                    S = 72
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                }else if (c == ",") {
                    S = 73
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                }else if (MyText.includes(TopText)) {
                    TopPalyerEmotion = TopChangeEmotion
                }
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 10
                pause(100)
            }
            }
        }
    //%block="Reset"
    export function Reset(): void {
        textCancelled = true;
        dialogRunId++;
        Go = 4
        I = 0
        L = 0
        I2 = 0
        L2 = 0
        X = 56
        y = 1
        X2 = 1
        Y2 = 75

    }
    //%group="set Dialogue Text"
    //%block="set Dialogue Bottom to $MyText"
   export function Text2(MyText: string): void {
       textCancelled = false;
       let myRunId = ++dialogRunId;
        if (I2 != 4) {
            I2 += 1
              
            for (let index3 = 0; index3 <= MyText.length - 1; index3++) {
                if (textCancelled || myRunId !== dialogRunId)
                    return;
                if (L2 > 0 && L2 % 11 == 0) {
                    X2 = 1
                    Y2 += 10
                    L2 = 1
                }
                Code = MyText.charCodeAt(index3)
                if (Code >= 65 && Code <= 90) {
                    S = MyText.charCodeAt(index3) - 65
                } else if (Code >= 97 && Code <= 122) {
                    S = MyText.charCodeAt(index3) - 67
                }
                F = 0
                c = MyText.charAt(index3)
                L2 += 1
                if (c == " ") {
                    X2 += 5
                    continue;
                } else if (c == ".") {
                    S = 26
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "!") {
                    S = 27
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "#") {
                    S = 28
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "…") {
                    S = 26
                    for (let index = 0; index < 3; index++) {
                        screenImage.drawTransparentImage(letters[S], X2, Y2)
                        X2 += 7
                    }
                    continue;
                } else if (c == "§") {
                    S = 29
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "?") {
                    S = 56
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == ":") {
                    S = 57
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "1") {
                    S = 58
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "2") {
                    S = 59
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "3") {
                    S = 60
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "4") {
                    S = 61
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "5") {
                    S = 62
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "6") {
                    S = 63
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "7") {
                    S = 64
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "8") {
                    S = 65
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "9") {
                    S = 66
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "0") {
                    S = 67
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "+") {
                    S = 68
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "-") {
                    S = 69
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "*") {
                    S = 70
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "÷") {
                    S = 71
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "=") {
                    S = 72
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == ",") {
                    S = 73
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (MyText.includes(BottomText)) {
                    BottomPlayerEmotion = BottomChangeEmotion
                }
                screenImage.drawTransparentImage(letters[S], X2, Y2)
                X2 += 10
                pause(100)
            }
            }
        }
    //% blockId=letterNumber__image2 block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.decompileArgumentAsString="true"
    //% img.fieldOptions.filter="!tile !dialog !background"
    //% img.fieldOptions.disableResize=1
    //% img.fieldOptions.initWidth=50
    //% img.fieldOptions.initHeight=50
    //% duplicateShadowOnDrag
    //% blockHidden=1
    //Credit is @richard on the fourums for the code here thanks
    export function _image2(img: Image) {
        return img
    }

    //%group="set Dialogue Image"
    //%i.shadow=screen_image_picker
    //% i.shadow=letterNumber__image2
    //%block="Set Top image to $i"
    export function setImage(i: Image): void {
        let TopImage = sprites.create(img`
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
`, SpriteKind.LetterImageImage)
TopImage.setImage(i)
TopImage.x = 27
TopImage.y = 25
    }
    //%group="set Dialogue Image"
    //%i.shadow=screen_image_picker
    //% i.shadow=letterNumber__image2
    //%block="Set Down image to $i"
    export function setImage2(i: Image): void {
        let DownImage = sprites.create(img`
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
`, SpriteKind.LetterImageImage)
        DownImage.setImage(i)
        DownImage.x = 133
        DownImage.y = 97
    }
    //%group="Dialogue Functions"
    //%block="clear text"
    export function Clear(): void {
        screenImage.fill(0)
    }
    //%group="Dialogue Functions"
    //%block="set up Press A"
    export function Press_A2(): void {
        image3 = sprites.create(letters[0], SpriteKind.Player)
        image3.x = 150
        image3.y = 57
        Press_A = 1
    }
    //%group="Dialogue Functions"
    //%block="set up Press Letter To $n"
    export function Press_A5(n: string): void {
        let Letter = LetterText.indexOf(n)
        image4 = sprites.create(letters[Letter], SpriteKind.Player)
        image4.x = 150
        image4.y = 57
        Press_A4 = 1
        flickerLetterValue = Letter
    }
    //%group="Dialogue Functions"
    //%block="set up Press Letter To $n"
    export function Press_A7(n: number): void {
        image5 = sprites.create(letters[n], SpriteKind.Player)
        image5.x = 150
        image5.y = 57
        Press_A8 = 1
        flickerLetterValue2 = n
    }
    //%group="Dialogue Functions"
    //%block="Space Top"
    export function Space(): void {
        X += 5
    }
    //%group="Dialogue Functions"
    //%block="Space Bottom"
    export function Space2(): void {
        X2 += 5
    }
    //%group="Dialogue Functions"
    //%block="Space Y axis Top"
    export function Space_Y(): void {
        y += 10
    }
    //%group="Dialogue Functions"
    //%block="Space Y axis Bottom"
    export function Space_Y2(): void {
        Y2 += 10
    }
    forever(function () {
        if (Press_A == 1) {
            pause(500)
            image3.setImage(img`
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
            `)
            pause(500)
            image3.setImage(letters[0])
            pause(500)
        }
        if (Press_A4 == 1) {
            pause(500)
            image4.setImage(img`
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
            `)
            pause(500)
            image4.setImage(letters[flickerLetterValue])
            pause(500)
        }
        if (Press_A8 == 1) {
            pause(500)
            image5.setImage(img`
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
            `)
            pause(500)
            image5.setImage(letters[flickerLetterValue2])
            pause(500)
        }
    })
    //%group="Dialogue Functions"
    //%block="New Line Top"
   export function New_Line(): void {
        X = 58
        y += 10
        L = 1
    }
    //%group="Dialogue Functions"
    //%block="New Line Bottom"
    export function New_Line2(): void {
        X2 = 1
        Y2 += 10
        L2 = 1
    }
     //%group="Dialogue Functions"
    //%block="Take Down Press A"
    export function Press_A3(): void {     
        for (let i = 0; i < 2; i++) {
        image3.setImage(img`
            . . . . . . . .
            . . . . . . . .
            . . . . . . . .
            . . . . . . . .
            . . . . . . . .
            . . . . . . . .
            . . . . . . . .
            . . . . . . . .
        `)
        image3.x = 150
        image3.y = 57
        Press_A = 0
    }
    }
    //%group="Dialogue Functions"
    //%block="Take Down Press Letter"
    export function Press_A6(): void {
        for (let i = 0; i < 2; i++) {
            image4.setImage(img`
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
            `)
            image4.x = 150
            image4.y = 57
            Press_A4 = 0
    }
    }
    //%group="Dialogue Functions"
    //%block="Take Down Press Letter Index"
    export function Press_A9(): void {
        for (let i = 0; i < 2; i++) {
            image5.setImage(img`
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
            `)
            image5.x = 150
            image5.y = 57
            Press_A8 = 0
        }
    }
    function Text3(MyText: string,x: number, y: number): void {
        textCancelled = false;
        let myRunId = ++dialogRunId;
        if (I2 != 4) {
            I2 += 1
                Y2 = y
                X2 = x
            for (let index3 = 0; index3 <= MyText.length - 1; index3++) {
                if (textCancelled || myRunId !== dialogRunId)
                    return;
                if (L2 > 0 && L2 % 11 == 0) {
                    X2 = x
                    Y2 += 10
                    L2 = 1
                }
                Code = MyText.charCodeAt(index3)
                if (Code >= 65 && Code <= 90) {
                    S = MyText.charCodeAt(index3) - 65
                } else if (Code >= 97 && Code <= 122) {
                    S = MyText.charCodeAt(index3) - 67
                }
                F = 0
                c = MyText.charAt(index3)
                L2 += 1
                if (c == " ") {
                    X2 += 5
                    continue;
                } else if (c == ".") {
                    S = 26
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "!") {
                    S = 27
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "#") {
                    S = 28
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "…") {
                    S = 26
                    for (let index = 0; index < 3; index++) {
                        screenImage.drawTransparentImage(letters[S], X2, Y2)
                        X2 += 7
                    }
                    continue;
                } else if (c == "§") {
                    S = 29
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "?") {
                    S = 56
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == ":") {
                    S = 57
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "1") {
                    S = 58
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "2") {
                    S = 59
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "3") {
                    S = 60
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "4") {
                    S = 61
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "5") {
                    S = 62
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "6") {
                    S = 63
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "7") {
                    S = 64
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "8") {
                    S = 65
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "9") {
                    S = 66
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "0") {
                    S = 67
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "+") {
                    S = 68
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "-") {
                    S = 69
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "*") {
                    S = 70
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "÷") {
                    S = 71
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "=") {
                    S = 72
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == ",") {
                    S = 73
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                }else if (MyText.includes(BottomText) || MyText.includes(TopText)) {
                    TopPalyerEmotion = TopChangeEmotion
                    BottomPlayerEmotion = BottomChangeEmotion
                }
                screenImage.drawTransparentImage(letters[S], X2, Y2)
                X2 += 10
                pause(100)
            }
        }
    } 
    function Text4(MyText: string, x: number, y: number): void {
        textCancelled = false;
        let myRunId = ++dialogRunId;
        if (I3 != 4) {
            I3 += 1
            Y3 = y
            X3 = x
            for (let index3 = 0; index3 <= MyText.length - 1; index3++) {
                if (textCancelled || myRunId !== dialogRunId)
                    return;
                if (L3 > 0 && L3 % 11 == 0) {
                    X3 = x
                    Y3 += 10
                    L3 = 1
                }
                Code = MyText.charCodeAt(index3)
                if (Code >= 65 && Code <= 90) {
                    S = MyText.charCodeAt(index3) - 65
                } else if (Code >= 97 && Code <= 122) {
                    S = MyText.charCodeAt(index3) - 67
                }
                F = 0
                c = MyText.charAt(index3)
                L3 += 1
                if (c == " ") {
                    X3 += 5
                    continue;
                } else if (c == ".") {
                    S = 26
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "!") {
                    S = 27
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "#") {
                    S = 28
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "…") {
                    S = 26
                    for (let index = 0; index < 3; index++) {
                        screenImage.drawTransparentImage(letters[S], X3, Y3)
                        X3 += 7
                    }
                    continue;
                } else if (c == "§") {
                    S = 29
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "?") {
                    S = 56
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == ":") {
                    S = 57
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "1") {
                    S = 58
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "2") {
                    S = 59
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "3") {
                    S = 60
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "4") {
                    S = 61
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "5") {
                    S = 62
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "6") {
                    S = 63
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "7") {
                    S = 64
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "8") {
                    S = 65
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "9") {
                    S = 66
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "0") {
                    S = 67
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "+") {
                    S = 68
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "-") {
                    S = 69
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "*") {
                    S = 70
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "÷") {
                    S = 71
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == "÷") {
                    S = 72
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                } else if (c == ",") {
                    S = 73
                    screenImage.drawTransparentImage(letters[S], X3, Y3)
                    X3 += 7
                    continue;
                }else if (MyText.includes(BottomText) || MyText.includes(TopText)) {
                    TopPalyerEmotion = TopChangeEmotion
                    BottomPlayerEmotion = BottomChangeEmotion
                }
                screenImage.drawTransparentImage(letters[S], X3, Y3)
                X3 += 10
                pause(100)
            }
        }
    }
    // block="On Selection 1 clicked bottom"
   // export function foo(handler: () => void) {
   //     controller.A.onEvent(ControllerButtonEvent.Pressed, function() {         
    //    if(selectit === 0) {
      //      sprites.destroy(arruow)
     //       handler();
    //    }
    //    })
  //  }
    // block="On Selection 2 clicked bottom"
  //  export function foo2(handler2: () => void) {
 //       controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
      //  if (selectit === 1) {
     //      sprites.destroy(arruow)
    //        handler2();
    //    }
    //    })
  //  }
    // block="On Selection 1 clicked top"
  //  export function foo3(handler: () => void) {
      //  controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
       //     if (selectit2 === 0) {
      //          sprites.destroy(arruow2)
    //            handler();
    //        }
    //    })
  //  }
    // block="On Selection 2 clicked top"
    //export function foo23(handler2: () => void) {
        //controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        //    if (selectit2 === 1) {
        //        sprites.destroy(arruow2)
         //       handler2();
        //    }
       // })
   // }
//%block="set choice Dialogue to $s"
//%group="Choice"
export function cd(s: string): void {
    Text3(s,10,10)
     arrow = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 3 a . . . . . . . . .
        . . . . . 3 a a . . . . . . . .
        . . . . . 3 a a a . . . . . . .
        . . . . . 3 a a a a . . . . . .
        . . . . . 3 a a a 3 . . . . . .
        . . . . . 3 a a 3 . . . . . . .
        . . . . . 3 a 3 . . . . . . . .
        . . . . . . 3 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
arrow.y = 75
arrow.x = 10
sg = 1
Text4("NO  YES",15,70)

}
controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    if (sg === 1) {
        arrow.x += 30
        sg = 2
    }else if (sg === 2) {
        arrow.x -= 30
        sg = 1
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sg === 1) {
        arrow.x += 30
        sg = 2
    } else if (sg === 2) {
        arrow.x -= 30
        sg = 1
    }
})
//%block="on Choice Left Pressed"
//%group="Choice"
export function cdh(handler: () => void) {
controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
if (sg === 1 && controller.B.isPressed()) {
sprites.destroy(arrow)
handler()
letterImage.Clear()
sg = 0
}
})
}

    //%block="on Choice Right Pressed"
    //%group="Choice"
    export function cdh2(handler2: () => void) {
            controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
                if (sg === 2 && controller.A.isPressed()) {
                    sprites.destroy(arrow)
                    handler2()
                    letterImage.Clear()
                    sg = 0
                }
            })
    }
//block="set button to press to $e"
//export function sb(e: ButtonEnum): void {

//}
    //% blockId=letterNumber__image block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.decompileArgumentAsString="true"
    //% img.fieldOptions.filter="!tile !dialog !background"
    //% img.fieldOptions.disableResize=1
    //% img.fieldOptions.initWidth=7
    //% img.fieldOptions.initHeight=7
    //% duplicateShadowOnDrag
    //% blockHidden=1
    //Credit is @richard on the fourums for the code here thanks
    export function _image(img: Image) {
        return img
    }
//%block="Set Letter in Alphabet at $L to $I and Font Type $f"
//%I.shadow=screen_image_picker
//%I.shadow=letterNumber__image
//%group="Change Letter (Starts at 0)"
//%f.shadow="Font_Types"
export function setLetterImageTo(L: string,I: Image,f:number): void {
    if (!AllFonts[f]) AllFonts[f] = [];
    let Letter = LetterText.indexOf(L)
   letters[Letter] = AllFonts[f][Letter] = I
}
//%block="Set Letter in Alphabet at $L to $I and Font Type $f"
//%I.shadow=screen_image_picker
//% I.shadow=letterNumber__image
//%group="Change Letter (Starts at 0)"
//%f.shadow="Font_Types"
export function setLetterImageTo2(L: number, I: Image, f: number): void {
    if (!AllFonts[f]) AllFonts[f] = [];
    letters[L] = AllFonts[f][L] = I
}
//%block="Letter List $e"
//%group="Letter List (to help with what Index each Letter is)"
export function LetterList(e: LetterSListNumbers): void {

}
//%group="set Dialogue Text with functions"
//%block="set Dialogue to $MyText at x $x and y $y"
export function textwxy(MyText: string,x: number,y: number): void {
    textCancelled = false;
    let myRunId = ++dialogRunId;
    if (I != 4) {
        I += 1
        y = y
        X = x
        for (let index = 0; index <= MyText.length - 1; index++) {
            if (textCancelled || myRunId !== dialogRunId)
                return;
            if (L > 0 && L % 11 == 0) {
                X = x
                y += 10
                L = 1
            }
            Code = MyText.charCodeAt(index)
            if (Code >= 65 && Code <= 90) {
                S = MyText.charCodeAt(index) - 65
            } else if (Code >= 97 && Code <= 122) {
                S = MyText.charCodeAt(index) - 67
            }
            F = 0
            c = MyText.charAt(index)
            L += 1
            if (c == " ") {
                X += 5
                continue;
            } else if (c == ".") {
                S = 26
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "!") {
                S = 27
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "#") {
                S = 28
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "…") {
                S = 26
                for (let index2 = 0; index2 < 3; index2++) {
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                }
                continue;
            } else if (c == "§") {
                S = 29
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "?") {
                S = 56
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == ":") {
                S = 57
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "1") {
                S = 58
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "2") {
                S = 59
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "3") {
                S = 60
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "4") {
                S = 61
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "5") {
                S = 62
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "6") {
                S = 63
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "7") {
                S = 64
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "8") {
                S = 65
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "9") {
                S = 66
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "0") {
                S = 67
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "+") {
                S = 68
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "-") {
                S = 69
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "*") {
                S = 70
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "÷") {
                S = 71
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == "÷") {
                S = 72
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            } else if (c == ",") {
                S = 73
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 7
                continue;
            }else if (MyText.includes(BottomText) || MyText.includes(TopText)) {
                TopPalyerEmotion = TopChangeEmotion
                BottomPlayerEmotion = BottomChangeEmotion
            }
            screenImage.drawTransparentImage(letters[S], X, y)
            X += 10
            pause(100)
        }
    }
}
    //%group="set Dialogue Text with functions"
    //%block="set Dialogue Top to $MyText with wait $b and wait time be $n"
    //%n.shadow=timePicker
    export function textwtaf(MyText: string,b: boolean,n: number): void {
        textCancelled = false;
        let myRunId = ++dialogRunId;
        if (I != 4) {
            I += 1
            y = 1
            for (let index = 0; index <= MyText.length - 1; index++) {
                if (textCancelled || myRunId !== dialogRunId)
                    return;
                if (L > 0 && L % 11 == 0) {
                    X = 58
                    y += 10
                    L = 1
                }
                Code = MyText.charCodeAt(index)
                if (Code >= 65 && Code <= 90) {
                    S = MyText.charCodeAt(index) - 65
                } else if (Code >= 97 && Code <= 122) {
                    S = MyText.charCodeAt(index) - 67
                }
                F = 0
                c = MyText.charAt(index)
                L += 1
                if (c == " ") {
                    X += 5
                    continue;
                } else if (c == ".") {
                    S = 26
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "!") {
                    S = 27
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "#") {
                    S = 28
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "…") {
                    S = 26
                    for (let index2 = 0; index2 < 3; index2++) {
                        screenImage.drawTransparentImage(letters[S], X, y)
                        X += 7
                    }
                    continue;
                } else if (c == "§") {
                    S = 29
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "?") {
                    S = 56
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == ":") {
                    S = 57
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "1") {
                    S = 58
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "2") {
                    S = 59
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "3") {
                    S = 60
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "4") {
                    S = 61
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "5") {
                    S = 62
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "6") {
                    S = 63
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "7") {
                    S = 64
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "8") {
                    S = 65
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "9") {
                    S = 66
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "0") {
                    S = 67
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "+") {
                    S = 68
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "-") {
                    S = 69
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "*") {
                    S = 70
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "÷") {
                    S = 71
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == "=") {
                    S = 72
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                } else if (c == ",") {
                    S = 73
                    screenImage.drawTransparentImage(letters[S], X, y)
                    X += 7
                    continue;
                }else if (MyText.includes(TopText)) {
                    TopPalyerEmotion = TopChangeEmotion
                }
                screenImage.drawTransparentImage(letters[S], X, y)
                X += 10
                if (b == false) {

                }else if (b == true) {
                    pause(n)
                }
            }
        }
    }
    //%group="set Dialogue Text with functions"
    //%block="set Dialogue Bottom to $MyText with wait $b and wait time be $n"
    //%n.shadow=timePicker
    export function textwtaf2(MyText: string, b: boolean, n: number): void {
        textCancelled = false;
        let myRunId = ++dialogRunId;
        if (I2 != 4) {
            I2 += 1
            Y2 = 75
            for (let index3 = 0; index3 <= MyText.length - 1; index3++) {
                if (textCancelled || myRunId !== dialogRunId)
                    return;
                if (L2 > 0 && L2 % 11 == 0) {
                    X2 = 1
                    Y2 += 10
                    L2 = 1
                }
                Code = MyText.charCodeAt(index3)
                if (Code >= 65 && Code <= 90) {
                    S = MyText.charCodeAt(index3) - 65
                } else if (Code >= 97 && Code <= 122) {
                    S = MyText.charCodeAt(index3) - 67
                }
                F = 0
                c = MyText.charAt(index3)
                L2 += 1
                if (c == " ") {
                    X2 += 5
                    continue;
                } else if (c == ".") {
                    S = 26
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "!") {
                    S = 27
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "#") {
                    S = 28
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "…") {
                    S = 26
                    for (let index = 0; index < 3; index++) {
                        screenImage.drawTransparentImage(letters[S], X2, Y2)
                        X2 += 7
                    }
                    continue;
                } else if (c == "§") {
                    S = 29
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "?") {
                    S = 56
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == ":") {
                    S = 57
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "1") {
                    S = 58
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "2") {
                    S = 59
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "3") {
                    S = 60
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "4") {
                    S = 61
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "5") {
                    S = 62
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "6") {
                    S = 63
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "7") {
                    S = 64
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "8") {
                    S = 65
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "9") {
                    S = 66
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "0") {
                    S = 67
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "+") {
                    S = 68
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "-") {
                    S = 69
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "*") {
                    S = 70
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "÷") {
                    S = 71
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == "=") {
                    S = 72
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                } else if (c == ",") {
                    S = 73
                    screenImage.drawTransparentImage(letters[S], X2, Y2)
                    X2 += 7
                    continue;
                }else if (MyText.includes(BottomText)) {
                    BottomPlayerEmotion = BottomChangeEmotion
                }
                screenImage.drawTransparentImage(letters[S], X2, Y2)
                X2 += 10
                if (b == false) {

                }else if (b == true) {
                    pause(n)
                }
            }
        }
    }
    //%group="set Dialogue Text with functions"
    //%s.defl=10
    //%s2.defl=10
    //%l.defl=11
    //%s5.defl=10
    ///%sbc.shadow="colorindexpicker"
    //%block="set Dialogue to $MyText at x $x and y $y with wait $b and wait time be $n || and Spacing $s and Space Spacing to $s2 and y spacing to $s5 and length $l and play sound $s3 and $e and Play $s4 and $e2 and Box Outline $sb and  Box Outline Color $sbc"
    //%n.shadow=timePicker
    //%s3.shadow=soundExpression_createSoundEffect
    //%s4.shadow=music_song_field_editor
    export function textwxyawt(MyText: string, x: number, y: number, n: number, b: boolean, s?: number, s2?: number, s5?: number,l?: number, s3?: music.SoundEffect,e?:PlayType,s4?:music.Playable,e2?:PlayType,sb?:boolean,sbc?: number): void {
        textCancelled = false;
        let myRunId = ++dialogRunId;
        let screenImage2 = image.create(160, 120)
        let screenImageBubble = sprites.create(screenImage2, SpriteKind.Player)
        if (I != 4) {
            I += 1
            y = y
            X = x
            for (let index = 0; index <= MyText.length - 1; index++) {
                if (textCancelled || myRunId !== dialogRunId)
                    return;
                if (L > 0 && L % l == 0) {
                    X = x
                    if (!s5) {
                    y += 10
                    }else if (s5) {
                    y += s5
                    }
                    L = 1 
                }
                Code = MyText.charCodeAt(index)
                if (Code >= 65 && Code <= 90) {
                    S = MyText.charCodeAt(index) - 65
                } else if (Code >= 97 && Code <= 122) {
                    S = MyText.charCodeAt(index) - 67
                }
                if (sb == false || sb == undefined) {

                } else if (sb == true) {
                    if (sbc) {
                    screenImageBubble.z = -100
                    screenImage2.fillRect(X - 1, y, letters[S].width + 5, letters[S].height + 1, sbc)
                    }else if (!sbc) {
                    screenImageBubble.z = -100
                    screenImage2.fillRect(X - 1, y, letters[S].width + 5, letters[S].height + 1, 1)
                    }
                }
                F = 0
                c = MyText.charAt(index)
                L += 1
                if (c == " ") {
                    if (s2) {
                    X += s2 
                    }else if (!s2) {
                        X += 5
                    }
                    continue;
                } else if (c == ".") {
                    S = 26
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "!") {
                    S = 27
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "#") {
                    S = 28
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "…") {
                    S = 26
                    for (let index2 = 0; index2 < 3; index2++) {
                        screenImage.drawTransparentImage(letters[S], X, y)
                        if (s) {
                            X += s - 3
                        } else if (!s) {
                            X += 7
                        }
                    }
                    continue;
                } else if (c == "§") {
                    S = 29
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "?") {
                    S = 56
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == ":") {
                    S = 57
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "1") {
                    S = 58
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "2") {
                    S = 59
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "3") {
                    S = 60
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "4") {
                    S = 61
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "5") {
                    S = 62
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "6") {
                    S = 63
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "7") {
                    S = 64
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "8") {
                    S = 65
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "9") {
                    S = 66
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "0") {
                    S = 67
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "+") {
                    S = 68
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "-") {
                    S = 69
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "*") {
                    S = 70
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "÷") {
                    S = 71
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == "=") {
                    S = 72
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                } else if (c == ",") {
                    S = 73
                    screenImage.drawTransparentImage(letters[S], X, y)
                    if (s) {
                        X += s - 3
                    } else if (!s) {
                        X += 7
                    }
                    continue;
                }else if (MyText.includes(BottomText) || MyText.includes(TopText)) {
                    TopPalyerEmotion = TopChangeEmotion
                    BottomPlayerEmotion = BottomChangeEmotion
                }
                screenImage.drawTransparentImage(letters[S], X, y)
                if (s) {
                    X += s
                } else if (!s) {
                    X += 10
                }
                if (b == false) {

                } else if (b == true) {
                    pause(n)
                } 
                // --- SOUND 1 BLOCK ---
                let shouldPlayS1 = false;
                if (s3) {
                    if (e == undefined || e == PlayType.Play) {
                        shouldPlayS1 = true;
                    }
                }
                // --- SOUND 2 BLOCK ---
                let shouldPlayS2 = false;
                if (s4) {
                    if (e2 == undefined || e2 == PlayType.Play) {
                        shouldPlayS2 = true;
                    }
                }
                // --- EXECUTION ---
                if (shouldPlayS1) {
                    music.play(s3, music.PlaybackMode.InBackground);
                }

                if (shouldPlayS2) {
                    music.play(s4, music.PlaybackMode.InBackground);
                }
            }
        }
    }
    //%blockId=Font_Types 
    //%block="$kind"
    //%kindNamespace=FontTypes
    //%kindMemberName=kind
    //%shim=KIND_GET
    //%blockHidden=1
    export function _FontTypes(Font: number): number {
        return Font;
    }
    //%block="Set Letters in Alphabet at $n to $I and Font Type $ft"
    //%I.shadow=screen_image_picker
    //% I.shadow=letterNumber__image
    //%group="Change Letter (Starts at 0)"
    //% I.shadow="lists_create_with"
   //% I.defl="screen_image_picker"
   //%ft.shadow="Font_Types"
    export function setLetterImageATo(n: string[], I: Image[],ft: number): void {
       /* if (!AllFonts[ft]) AllFonts[ft] = [];
        let Letter = ""
        for (let i = 0; i < 73; i++) {
            if (AllFonts[ft][i] == undefined) {
                AllFonts[ft][i] = img`
                . . f f f . .
                . f f . . f .
                f f f f . . f
                f . f f f . f
                f . . f f f f
                . f . . f f .
                . . f f f . .
            `;
            }
        }
        for (let i = 0; i < n.length; i++) {
            Letter = LetterText[i]
            AllFonts[ft][LetterText.indexOf(Letter)] = I[i];
        }
        letters = AllFonts[ft];
        */
        if (!AllFonts[ft]) AllFonts[ft] = [];
        let Letter = ""
        let Letter2 = 0
        for (let i = 0; i < n.length; i++) {
         Letter = n[i]
         Letter2 = LetterText.indexOf(Letter)
        letters[Letter2] = AllFonts[ft][Letter2] = I[i]
        }
    }
    //%block="Set Letters in Alphabet at $n to $I and Font Type $ft"
    //%I.shadow=screen_image_picker
    //% I.shadow=letterNumber__image
    //%group="Change Letter (Starts at 0)"
    //% I.shadow="lists_create_with"
    //% I.defl="screen_image_picker"
    //%ft.shadow="Font_Types"
    export function setLetterImageATo2(n: number[], I: Image[], ft: number): void {
        if (!AllFonts[ft]) AllFonts[ft] = [];
        for (let i = 0; i < n.length; i++) {
            letters[i] = AllFonts[ft][i] = I[i]
        }
    }
    //%block="Take Down Images"
    //%group="Dialogue Functions"
    export function TakeDownLetterImages(): void { 
        sprites.destroyAllSpritesOfKind(SpriteKind.LetterImageImage)
    }
    //%block="Get Letter Image at $n"
    //%group="String Values"
    //%f.shadow="Font_Types"
    export function LetterImageAt(n: string): Image {
        let Letter = LetterText.indexOf(n)
        return letters[Letter]
    }
    //%block="Get Letter at $n"
    //%group="String Values"
    export function LetterAt(n: string): string {
        let Letter = LetterText.indexOf(n)
        return LetterText[Letter]
    }
    //%block="Get Letter Image Width at $n"
    //%group="String Values"
    export function LetterWidthAt(n: string): number {
        let Letter = LetterText.indexOf(n)
        return letters[Letter].width
    }
    //%block="Get Letter Image Height at $n"
    //%group="String Values"
    export function LetterHeightAt(n: string): number {
        let Letter = LetterText.indexOf(n)
        return letters[Letter].height
    }
    //%block="Get Letter Index at $n"
    //%group="Number Values"
    export function LetterIndexAt(n: string): number {
        let Letter = LetterText.indexOf(n)
        return Letter 
    }
    //%block="Get Letter Image at $n"
    //%group="Number Values"
    //%f.shadow="Font_Types"
    export function LetterImageAt2(n: number): Image {
        return letters[n]
    }
    //%block="Get Letter at $n"
    //%group="Number Values"
    export function LetterAt2(n: number): string {
        return LetterText[n]
    }
    //%block="Get Letter Image Width at $n"
    //%group="Number Values"
    export function LetterWidthAt2(n: number): number {
        return letters[n].width
    }
    //%block="Get Letter Image Height at $n"
    //%group="Number Values"
    export function LetterHeightAt2(n: number): number {
        return letters[n].height
    }
    //%block="If Image at $s is equal to $I"
    //%group="Boolean Values"
    //%I.shadow=screen_image_picker
    //%I.shadow=letterNumber__image
    export function IfLetterImageAt(I:Image,s: number): boolean {
        if (letters[s] == I) {
        return true
        }
        return false
    }
    //%block="If Image at $s is equal to $I"
    //%group="Boolean Values"
    //%I.shadow=screen_image_picker
    //%I.shadow=letterNumber__image
    export function IfLetterImageAt2(I: Image, s: string): boolean {
        let Letter = LetterText.indexOf(s)
        if (letters[Letter] == I) {
            return true
        }
        return false
    }
    //%block="Set Letter Image Font To $f"
    //%group="Set Font"
    //%f.shadow="Font_Types"
    export function SetLetterFontTo(f: number): void {
        if (f == FontTypes.Default) {
            letters = AllFonts[f] = [
                img`
        3 3 3 3 3 a f f
        f 3 3 3 3 a f f
        f 3 3 a f 3 a f
        f 3 3 a f 3 a f
        f 3 3 a f 3 a f
        f 3 3 3 3 3 a f
        3 a f f f f 3 a
        3 a f f f f 3 a
    `,
                img`
    3 3 3 3 3 a f 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 3 3 a f 
    f 3 3 a f 3 f 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 3 3 a f 
    `,
                img`
    f 3 3 3 3 a f 
    3 3 a f f 3 a 
    3 3 a f f f f 
    3 3 a f f f f 
    3 3 a f f f f 
    3 3 a f f f f 
    3 3 a f f 3 a 
    f 3 3 3 3 a f 
    `,
                img`
    3 3 3 3 3 a f 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 a f 3 a 
    f 3 3 3 3 a f 
    `,
                img`
        3 3 3 3 3 3 a
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 3 3 a f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 3 3 3 a
    `,
                img`
    3 3 3 3 3 3 3 
    f 3 3 a f f f 
    f 3 3 a f f f 
    f 3 3 3 3 3 f 
    f 3 3 a f f f 
    f 3 3 a f f f 
    f 3 3 a f f f 
    f 3 3 a f f f 
    `,
                img`
    f 3 3 3 a f 
    3 3 a f 3 a 
    3 3 a f f f 
    3 3 a f f f 
    3 3 a f f f 
    3 3 a 3 3 a 
    3 3 a f 3 a 
    f 3 3 3 a f 
    `,
                img`
        3 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 3 3 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
    `,
                img`
        3 3 3 3 3 3 a
        3 3 3 3 a f f
        f f 3 3 a f f
        f f 3 3 a f f
        f f 3 3 a f f
        f f 3 3 a f f
        f f 3 3 a f f
        f 3 3 3 3 3 a
    `,
                img`
        3 3 3 3 3 3 3 a
        3 3 a 3 3 a f f
        f f f 3 3 a f f
        f f f 3 3 a f f
        f f f 3 3 a f f
        3 a f 3 3 a f f
        3 a f 3 3 a f f
        f 3 3 3 a f f f
    `,
                img`
        3 3 3 a f 3 a
        3 3 3 a f 3 a
        f 3 3 a 3 a f
        f 3 3 3 a f f
        f 3 3 a 3 a f
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
    `,
                img`
    3 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 a f f f f 
    f 3 3 3 3 3 3 a 
    `,
                img`
    3 3 3 a f f 3 a 
    f 3 3 3 a 3 3 a 
    f 3 3 a 3 a 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    `,
                img`
    3 3 3 f f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 3 a f 3 a 
    f 3 3 3 3 a 3 a 
    f 3 3 a 3 3 3 a 
    f 3 3 a 3 3 3 a 
    f 3 3 a f 3 3 a 
    f 3 3 a f f 3 a 
    `,
                img`
        f 3 3 3 a f
        3 3 a f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        f 3 3 3 a f
    `,
                img`
        3 3 3 3 3 a f
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 3 3 a f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
    `,
                img`
        f 3 3 3 a f
        3 a f f 3 a
        3 a f f 3 a
        3 a f f 3 a
        3 a 3 a 3 a
        3 a f 3 a f
        f 3 3 f 3 a
    `,
                img`
        3 3 3 3 3 a f
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 3 3 3 a
        f 3 3 a 3 a f
        f 3 3 a 3 3 a
        f 3 3 a 3 3 a
        f 3 3 a 3 3 a
    `,
                img`
        f 3 3 3 a f
        3 3 a f 3 a
        3 3 a f f f
        f 3 3 3 a f
        f f f f 3 a
        3 3 a f 3 a
        3 3 a f 3 a
        f 3 3 3 a f
    `,
                img`
        3 3 3 3 3 3 a
        3 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
        f 3 3 a f f f
    `,
                img`
        3 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f 3 3 a f 3 a
        f f 3 3 3 a f
    `,
                img`
        a 3 f f f 3 a
        a 3 f f f 3 a
        a 3 f f f 3 a
        a 3 f f f 3 a
        a 3 f f f 3 a
        a 3 f f f 3 a
        f a 3 f 3 a f
        f f a 3 a f f
    `,
                img`
    3 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a f f 3 a 
    f 3 3 a 3 a 3 a 
    f 3 3 a 3 a 3 a 
    f f 3 3 f 3 3 a 
    f f 3 a f f 3 a 
    `,
                img`
        3 f f f f f 3
        a 3 f f f 3 a
        f a 3 f 3 a f
        f f f 3 f f f
        f f 3 a 3 f f
        f 3 a f a 3 f
        3 a f f f a 3
    `,
                img`
        3 3 3 a f 3 a f
        f 3 3 a f 3 a f
        f 3 3 a f 3 3 f
        f f 3 a 3 a f f
        f f f 3 a f f f
        f f f 3 a f f f
        f f 3 3 a f f f
        f f 3 3 a f f f
    `,
                img`
        3 3 3 3 3 3 a f
        f f f f f 3 a f
        f f f f 3 3 f f
        f f f 3 a f f f
        f f 3 a f f f f
        f 3 a f f f f f
        3 3 3 3 3 3 3 a
    `,
                img`
        f f f f f f f
        f f f f f f f
        f f f f f f f
        f f f f f f f
        f f f f f f f
        a a a a f f f
        a a a a f f f
        a a a 3 3 3 3
        f f f 3 3 3 3
        f f f 3 3 3 3
    `,
                img`
        3 3 a
        3 3 a
        3 3 a
        3 3 a
        3 3 a
        3 3 a
        f f f
        3 3 a
    `,
                img`
        f a 3 f a 3 f
        a a 3 a a 3 a
        3 a 3 3 a 3 3
        f a 3 f a 3 f
        f a 3 f a 3 f
        3 3 3 3 3 3 3
        a a 3 a a 3 a
        f a 3 f a 3 f
    `,
                img`
        f 3 3 3 a f
        3 3 a f 3 a
        3 3 a f f f
        f 3 3 3 a f
        f f 3 a 3 a
        f 3 a f 3 a
        f f 3 3 3 a
        3 f a f 3 a
        3 3 a f 3 a
        f 3 3 3 a f
    `,
                img`
        f 3 3 3 3 3 3
        f f f f f f 3
        f f f f f f 3
        f 3 3 3 3 3 3
        3 a f f f f 3
        3 a f f f f 3
        3 a f f f f 3
        f 3 3 3 3 3 3
    `,
                img`
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        3 3 3 3 3 3 f
        3 a f f f f 3
        3 a f f f f 3
        3 a f f f f 3
        3 3 3 3 3 3 f
    `,
                img`
        f 3 3 3 3 3 3
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        3 a f f f f f
        f 3 3 3 3 3 3
    `,
                img`
    f f f f f a 3 
    f f f f f a 3 
    f f f f f a 3 
    f 3 3 3 3 3 3 
    3 f f f f a 3 
    3 f f f f a 3 
    3 f f f f a 3 
    f 3 3 3 3 3 3 
    `,
                img`
    f 3 3 3 3 3 3 
    3 a f f f f 3 
    3 a f f f f 3 
    3 3 3 3 3 3 3 
    3 a f f f f f 
    3 a f f f f f 
    3 a f f f f f 
    f 3 3 3 3 3 3 
    `,
                img`
    f f f a 3 3 
    f f a 3 f f 
    f a 3 f f f 
    f a 3 f f f 
    f a 3 f f f 
    3 3 3 3 3 f 
    f a 3 f f f 
    f a 3 f f f 
    `,
                img`
        f 3 3 3 3 3 3
        3 f f f f a 3
        3 f f f f a 3
        f 3 3 3 3 3 3
        f f f f f f 3
        f f f f f f 3
        f f 3 f f 3 3
        f f f 3 3 3 f
    `,
                img`
    3 a f f f 
    3 a f f f 
    3 a f f f 
    3 a f f f 
    3 a f f f 
    3 3 3 3 f 
    3 a f f 3 
    3 a f f 3 
    `,
                img`
        3 a
        3 a
        f f
        3 a
        3 a
        3 a
        3 a
        3 a
    `,
                img`
        f f f 3 a
        f f f f f
        f f f 3 a
        f f f 3 a
        f f f 3 a
        3 f f 3 a
        a 3 3 a f
        f a a f f
    `,
                img`
    3 a f f f 
    3 a f f f 
    3 a f f f 
    3 a f 3 a 
    3 a 3 a f 
    3 3 a f f 
    3 a 3 a f 
    3 a f 3 a 
    `,
                img`
        3 a
        3 a
        3 a
        3 a
        3 a
        3 a
        3 a
        3 a
    `,
                img`
    f 3 3 f 3 3 f 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    3 f a 3 f a 3 
    `,
                img`
    f 3 3 f 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    `,
                img`
        f 3 3 f
        3 a f 3
        3 a f 3
        3 a f 3
        3 a f 3
        3 a f 3
        3 a f 3
        f 3 3 f
    `,
                img`
    3 3 3 3 3 3 f 
    3 a f f f f 3 
    3 a f f f f 3 
    3 a f f f f 3 
    3 3 3 3 3 3 f 
    3 a f f f f f 
    3 a f f f f f 
    3 a f f f f f 
    `,
                img`
    f 3 3 3 3 3 3 
    3 f f f f a 3 
    3 f f f f a 3 
    3 f f f f a 3 
    f 3 3 3 3 3 3 
    f f f f f a 3 
    f f f f f a 3 
    f f f f f a 3 
    `,
                img`
    f a 3 3 f 
    a 3 f f 3 
    a 3 f f f 
    a 3 f f f 
    a 3 f f f 
    a 3 f f f 
    a 3 f f f 
    a 3 f f f 
    `,
                img`
    f a 3 3 3 
    a 3 f f f 
    a 3 f f f 
    f a 3 3 f 
    f f f a 3 
    f f f a 3 
    f a a a 3 
    f 3 3 3 f 
    `,
                img`
        f a 3 f f
        f a 3 f f
        3 3 3 3 3
        f a 3 f f
        f a 3 f f
        f a 3 f f
        f a 3 f f
        f a 3 f f
    `,
                img`
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    3 f a 3 
    f 3 3 f 
    `,
                img`
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        a 3 f 3 a
        f a 3 a f
    `,
                img`
        3 a f f f a 3
        3 a f 3 f a 3
        3 a f 3 f a 3
        3 a f 3 f a 3
        3 a f 3 f a 3
        3 a f 3 f a 3
        f 3 a 3 a 3 f
        f f 3 f 3 f f
    `,
                img`
        3 f f f f 3
        a 3 f f 3 a
        f a 3 3 a f
        f f 3 3 f f
        f f 3 3 f f
        f f 3 3 f f
        f 3 a a 3 f
        3 a f f a 3
    `,
                img`
        a 3 f 3
        a 3 f 3
        a 3 f 3
        f a 3 f
        f a 3 f
        f a 3 f
        f a 3 f
        f a 3 f
    `,
                img`
        3 3 3 3 3 3 a
        f f f f f 3 a
        f f f f 3 a f
        f f f 3 a f f
        f f 3 a f f f
        f 3 a f f f f
        3 3 3 3 3 3 3
    `,
                img`
        3 3 3 3 a f
        a a a f 3 a
        f f f f 3 a
        f f f f 3 a
        f 3 3 3 a f
        f 3 3 a f f
        f a a f f f
        f f f f f f
        f 3 a f f f
    `,
                img`
        3 3 a
        3 3 a
        3 3 a
        f f f
        3 3 a
        3 3 a
        3 3 a
    `,
                img`
        . 3 3 3 a . .
        3 3 3 3 a . .
        . . 3 3 a . .
        . . 3 3 a . .
        . . 3 3 a . .
        . . 3 3 a . .
        . 3 3 3 3 a .
    `,
                img`
        . . 3 3 a . .
        . . . . 3 a .
        . . . . 3 a .
        . . 3 3 a . .
        . . 3 a . . .
        . . 3 a . . .
        . . 3 3 3 a .
    `,
                img`
        . . 3 3 . . .
        . . a a 3 . .
        . . . a 3 . .
        . . 3 3 . . .
        . . a a 3 . .
        . . . a 3 . .
        . . 3 3 . . .
    `,
                img`
        . . 3 a 3 . .
        . . 3 a 3 . .
        . . 3 a 3 . .
        . . 3 3 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
    `,
                img`
        . . 3 3 3 . .
        . . 3 a . . .
        . . 3 a . . .
        . . 3 3 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . 3 3 3 . .
    `,
                img`
        . . a 3 . . .
        . a 3 . . . .
        . a 3 . . . .
        . a 3 3 . . .
        . a 3 a 3 . .
        . a 3 a 3 . .
        . . a 3 . . .
    `,
                img`
        . 3 3 3 3 . .
        . . a a 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
    `,
                img`
        . . 3 3 . . .
        . 3 a a 3 . .
        . 3 a . 3 . .
        . . 3 3 . . .
        . 3 a a 3 . .
        . 3 a . 3 . .
        . . 3 3 . . .
    `,
                img`
        . . 3 3 3 . .
        . 3 a . 3 . .
        . 3 a . 3 . .
        . . 3 3 3 . .
        . . . a 3 . .
        . . . a 3 . .
        . . . a 3 . .
    `,
                img`
        . . 3 3 3 . .
        . 3 a a a 3 .
        . 3 . . a 3 .
        . 3 . . a 3 .
        . 3 . . a 3 .
        . 3 . . a 3 .
        . . 3 3 3 . .
    `,
                img`
        . . . . . . .
        . . a 3 . . .
        . . a 3 . . .
        a 3 3 3 3 3 .
        . . a 3 . . .
        . . a 3 . . .
        . . . . . . .
    `,
                img`
        . . . . . . .
        . . . . . . .
        . . . . . . .
        . 3 3 3 3 3 .
        a a a a a . .
        . . . . . . .
        . . . . . . .
    `,
                img`
        . . . . . . .
        . 3 . . . 3 .
        . a 3 . 3 a .
        . . a 3 a . .
        . . 3 a 3 . .
        . 3 a . a 3 .
        . . . . . . .
    `,
                img`
        . . . . . . .
        . . a 3 . . .
        . . . . . . .
        a 3 3 3 3 3 .
        . . . . . . .
        . . a 3 . . .
        . . . . . . .
    `,
                img`
        . . . . . . .
        . 3 3 3 3 3 .
        a a a a a . .
        . . . . . . .
        . 3 3 3 3 3 .
        a a a a a . .
        . . . . . . .
    `,
                img`
                    f f f f f f f
                    f f f f f f f
                    f f f f f f f
                    f f f f f f f
                    f f 3 3 f f f
                    f f f 3 a f f
                    f f 3 f a f f
                    f f f a f f f
                `
            ]
        }else if (f == FontTypes.Bold) {
            letters = AllFonts[f] = [
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 2 2 2 f f 2 2 2 f
                    f 2 2 2 f f 2 2 2 f
                    . f f f . . f f f .
                `,
                img`
                    . f f f f f f f . .
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 5 5 5 5 f
                    f 5 5 5 5 5 5 2 2 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    f 2 2 2 2 2 2 2 f .
                    . f f f f f f f . .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 2 2 2 f
                    f 5 5 5 f f 2 2 2 f
                    f 5 5 5 f . f f f .
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . f f f f f f f . .
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 2 2 f
                    f 2 2 2 2 2 2 2 2 f
                    f 2 2 2 2 2 2 f f .
                    . f f f f f f . . .
                `,
                img`
                    . f f f f f f f f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 2 2 2 2 f
                    f 5 5 5 5 2 2 2 2 f
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 5 2 2 2 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 2 2 2 2 2 2 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f f f f f f f f .
                `,
                img`
                    . f f f f f f f . .
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 2 2 2 2 f .
                    f 5 5 5 2 2 2 2 f .
                    f 5 5 5 5 5 5 f . .
                    f 5 5 5 5 5 5 f . .
                    f 5 5 5 2 2 2 f . .
                    f 5 5 5 2 2 2 f . .
                    f 5 5 5 f f f . . .
                    f 2 2 2 f . . . . .
                    f 2 2 2 f . . . . .
                    . f f f . . . . . .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 2 2 2 f
                    f 5 5 5 f 5 5 5 5 f
                    f 5 5 5 f 5 5 5 5 f
                    f 5 5 5 f 2 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . f f f . . f f f .
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 2 2 2 f f 2 2 2 f
                    f 2 2 2 f f 2 2 2 f
                    . f f f . . f f f .
                `,
                img`
                    . . . f f f . . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 2 2 2 f . . .
                    . . f 2 2 2 f . . .
                    . . . f f f . . . .
                `,
                img`
                    . . . . . . f f f .
                    . . . . . f 5 5 5 f
                    . . . . . f 5 5 5 f
                    . . . . . f 5 5 5 f
                    . . . . . f 5 5 5 f
                    . . . . . f 5 5 5 f
                    . f f f . f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . f f f . . . f f .
                    f 5 5 5 f . f 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f 5 5 5 2 f
                    f 5 5 5 5 5 5 2 2 f
                    f 5 5 5 5 5 2 2 f .
                    f 5 5 5 5 5 5 f . .
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 2 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 2 2 2 f 2 2 2 2 f
                    f 2 2 2 f f 2 2 2 f
                    . f f f . . f f f .
                `,
                img`
                    . f f f . . . . . .
                    f 5 5 5 f . . . . .
                    f 5 5 5 f . . . . .
                    f 5 5 5 f . . . . .
                    f 5 5 5 f . . . . .
                    f 5 5 5 f . . . . .
                    f 5 5 5 f . . . . .
                    f 5 5 5 f f f f f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 2 2 2 2 2 2 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f f f f f f f f .
                `,
                img`
                    . f f f . . . . f f f .
                    f 5 5 5 f . . f 5 5 5 f
                    f 5 5 5 f . . f 5 5 5 f
                    f 5 5 5 5 f f 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 5 5 2 5 5 5 f
                    f 5 5 5 2 2 2 2 5 5 5 f
                    f 5 5 5 f 2 2 f 5 5 5 f
                    f 5 5 5 f f f f 5 5 5 f
                    f 2 2 2 f . . f 2 2 2 f
                    f 2 2 2 f . . f 2 2 2 f
                    . f f f . . . . f f f .
                `,
                img`
                    . f f f . . f f f .
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 5 f 5 5 5 f
                    f 5 5 5 5 f 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 5 5 5 5 f
                    f 5 5 5 2 5 5 5 5 f
                    f 5 5 5 f 2 5 5 5 f
                    f 2 2 2 f 2 2 2 2 f
                    f 2 2 2 f f 2 2 2 f
                    . f f f . . f f f .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . f f f f f f f . .
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 f 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 2 2 f
                    f 5 5 5 2 2 2 2 2 f
                    f 5 5 5 2 2 2 f f .
                    f 2 2 2 f f f . . .
                    f 2 2 2 f . . . . .
                    . f f f . . . . . .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 5 5 5 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f 2 2 2 f
                    . . . . . . f f f .
                `,
                img`
                    . f f f f f f f . .
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 5 5 5 5 f
                    f 5 5 5 5 5 5 2 2 f
                    f 5 5 5 5 5 5 5 2 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 2 2 2 f f 2 2 2 f
                    f 2 2 2 f f 2 2 2 f
                    . f f f . . f f f .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 5 2 2 2 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . . f f f f f f f .
                    . f 5 5 5 5 5 5 5 f
                    . f 5 5 5 5 5 5 5 f
                    . f 2 2 5 5 5 2 2 f
                    . f 2 2 5 5 5 2 2 f
                    . . f f 5 5 5 f f .
                    . . . f 5 5 5 f . .
                    . . . f 5 5 5 f . .
                    . . . f 5 5 5 f . .
                    . . . f 5 5 5 f . .
                    . . . f 2 2 2 f . .
                    . . . f 2 2 2 f . .
                    . . . . f f f . . .
                `,
                img`
                    . f f f . . f f f .
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . f f f . . . f f f .
                    f 5 5 5 f . f 5 5 5 f
                    f 5 5 5 f . f 5 5 5 f
                    f 5 5 5 f . f 5 5 5 f
                    f 2 5 5 5 f 5 5 5 2 f
                    f 2 5 5 5 f 5 5 5 2 f
                    . f 2 5 5 5 5 5 2 f .
                    . f 2 5 5 5 5 5 2 f .
                    . . f 2 5 5 5 2 f . .
                    . . f 2 5 5 5 2 f . .
                    . . . f 2 2 2 f . . .
                    . . . f 2 2 2 f . . .
                    . . . . f f f . . . .
                `,
                img`
                    . f f f . . f f f . . f f f .
                    f 5 5 5 f f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f 5 5 5 5 5 f 5 5 5 f
                    f 5 5 5 f 5 5 5 5 5 f 5 5 5 f
                    f 2 5 5 5 5 5 2 5 5 5 5 5 2 f
                    f 2 5 5 5 5 5 2 5 5 5 5 5 2 f
                    . f 2 5 5 5 2 f 2 5 5 5 2 f .
                    . f 2 5 5 5 2 f 2 5 5 5 2 f .
                    . . f 2 2 2 f . f 2 2 2 f . .
                    . . f 2 2 2 f . f 2 2 2 f . .
                    . . . f f f . . . f f f . . .
                `,
                img`
                    . f f f . . . f f f .
                    f 5 5 5 f . f 5 5 5 f
                    f 5 5 5 f . f 5 5 5 f
                    f 5 5 5 5 f 5 5 5 5 f
                    f 2 5 5 5 5 5 5 5 2 f
                    f 2 2 5 5 5 5 5 2 2 f
                    . f 5 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 2 5 5 5 5 f
                    f 5 5 5 2 2 2 5 5 5 f
                    f 5 5 5 2 f 2 5 5 5 f
                    f 2 2 2 f . f 2 2 2 f
                    f 2 2 2 f . f 2 2 2 f
                    . f f f . . . f f f .
                `,
                img`
                    . f f f . . . f f f .
                    f 5 5 5 f . f 5 5 5 f
                    f 5 5 5 f . f 5 5 5 f
                    f 5 5 5 f f f 5 5 5 f
                    f 2 5 5 5 5 5 5 5 2 f
                    f 2 2 5 5 5 5 5 2 2 f
                    . f 2 2 5 5 5 2 2 f .
                    . . f 2 5 5 5 2 f . .
                    . . . f 5 5 5 f . . .
                    . . . f 5 5 5 f . . .
                    . . . f 2 2 2 f . . .
                    . . . f 2 2 2 f . . .
                    . . . . f f f . . . .
                `,
                img`
                    . f f f f f f f f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 2 2 2 5 5 5 5 f
                    f 2 2 2 5 5 5 5 2 f
                    . f f 5 5 5 5 2 2 f
                    . f 5 5 5 5 2 2 f .
                    f 5 5 5 5 2 2 f f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 2 2 2 2 2 2 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f f f f f f f f .
                `,
                img`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . f f f . . . . .
                    . f 5 5 5 f . . . .
                    . f 5 5 5 f f . . .
                    . f 5 5 2 2 2 f . .
                    . . f f 2 2 2 f . .
                    . . . f 2 2 2 f . .
                    . . . . f f f . . .
                `,
                img`
                    . . . f f f . . . .
                    . . f 2 2 2 f . . .
                    . . f 2 5 5 f . . .
                    . . f 2 5 5 f . . .
                    . . f 2 5 5 f . . .
                    . . f 2 5 5 f . . .
                    . . f 2 5 5 f . . .
                    . . f 2 5 5 f . . .
                    . . . f f f . . . .
                    . . f 2 2 2 f . . .
                    . . f 2 5 5 f . . .
                    . . f 2 5 5 f . . .
                    . . . f f f . . . .
                `,
                img`
                    . . f f . . f f . .
                    . f 5 2 f f 5 2 f .
                    . f 5 2 f f 5 2 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 2 2 2 5 2 2 f
                    . f 5 2 f f 5 2 f .
                    . f 5 2 f f 5 2 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 2 2 2 5 2 2 f
                    . f 5 2 f f 5 2 f .
                    . f 5 2 f f 5 2 f .
                    . . f f . . f f . .
                    . . . . . . . . . .
                `,
                img`
                    . . . f f f . . . .
                    . . f 2 5 f . . . .
                    . f 2 5 f . . . . .
                    . f 2 f . . . . . .
                    . f 2 f f . . . . .
                    . . f 2 5 f . . . .
                    . . f 2 5 5 f . . .
                    . . . f 2 5 f . . .
                    . . . . f f 5 f . .
                    . . . . . f 5 f . .
                    . . . f f 2 5 f . .
                    . . f 2 5 5 f . . .
                    . . f f f f . . . .
                `,
                img`
                    . . f f f f f f f .
                    . . . 2 2 2 2 2 f .
                    . . . . . . . 2 f .
                    . . . . . . . 2 f .
                    . . . . . . . 2 f .
                    . . f f f f f f f .
                    . f 2 2 2 2 2 2 f .
                    . f 2 5 5 5 5 5 f .
                    . f 2 5 5 5 5 5 f .
                    . f 2 5 5 5 5 5 f .
                    . f 2 5 5 5 5 5 f .
                    . f 2 5 5 5 5 5 f .
                    . . f f f f f f f .
                `,
                img`
                    f 2 . . . . . . . .
                    f 2 . . . . . . . .
                    f 2 . . . . . . . .
                    f 2 . . . . . . . .
                    f f f f f f f f . .
                    f 2 5 5 5 5 5 2 f .
                    f 2 5 5 5 5 5 5 2 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 5 5 5 5 5 2 f .
                    f f f f f f f f . .
                `,
                img`
                    . f f f f f f f f f
                    f 5 5 5 5 5 5 5 2 f
                    f 5 2 f f f f f f .
                    f 2 f . . . . . . .
                    f 2 f . . . . . . .
                    f 2 f . . . . . . .
                    f 2 f . . . . . . .
                    f 2 f . . . . . . .
                    f 2 f . . . . . . .
                    f 2 f . . . . . . .
                    f 5 2 f f f f f f f
                    f 5 5 5 5 5 5 5 2 f
                    . f f f f f f f f f
                `,
                img`
                    . . . . . . . . 2 f
                    . . . . . . . . 2 f
                    . . . . . . . . 2 f
                    . . . . . . . . 2 f
                    . . . . . . . . 2 f
                    . . f f f f f f f f
                    . f 2 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 5 f
                    . f 2 5 5 5 5 5 5 f
                    . . f f f f f f f f
                `,
                img`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . f f f f f f f .
                    . f 2 2 2 2 2 2 2 f
                    . f 5 5 5 5 5 5 2 f
                    . f 5 5 5 5 5 5 2 f
                    . f f f f f f f f f
                    . f 5 5 5 5 2 2 2 f
                    . f 5 5 f f f f f f
                    . f 5 f . . . . . .
                    . f 5 f f f f f f f
                    . f 5 5 5 5 2 2 2 f
                    . . f f f f f f f f
                `,
                img`
                    . . . . . . . . . .
                    . . . . . . f f . .
                    . . . . . f 5 2 f .
                    . . . . f 5 2 f . .
                    . . . . f 5 f . . .
                    . . . . f 5 f . . .
                    . . f f f 5 f f f .
                    . f 5 5 5 5 5 2 2 f
                    . . f f f 5 f f f .
                    . . . . f 5 f . . .
                    . . . . f 5 f . . .
                    . . . . f 2 f . . .
                    . . . . f f f . . .
                `,
                img`
                    . . . f f f f f . .
                    . . f 5 5 5 5 2 f .
                    . f 5 5 5 5 5 5 2 f
                    . f 5 5 5 f 5 5 2 f
                    . f 5 5 f . f 5 2 f
                    . f 5 5 5 f 5 5 2 f
                    . f 5 5 5 5 5 5 2 f
                    . . f 5 5 5 5 2 f .
                    . . . f f f f f . .
                    . . . . . . 2 f . .
                    . . . . . . 2 f . .
                    . . . f . 2 f . . .
                    . . . . f f . . . .
                `,
                img`
                    f f f . . . . . . .
                    f 2 f . . . . . . .
                    f 2 f . . . . . . .
                    f 5 f . . . . . . .
                    f 5 f . . . . . . .
                    f 5 f . . . . . . .
                    f 5 f f f f f . . .
                    f 5 5 2 2 2 2 f . .
                    f 5 f f f f 2 f . .
                    f 5 f . . f 2 f . .
                    f 5 f . . f 2 f . .
                    f 5 f . . f 2 f . .
                    f f f . . f f f . .
                `,
                img`
                    . . . . f f f . . .
                    . . . f 2 2 2 f . .
                    . . . f 2 5 5 f . .
                    . . . f 2 5 5 f . .
                    . . . . f f f . . .
                    . . . f 2 2 2 f . .
                    . . . f 2 5 5 f . .
                    . . . f 2 5 5 f . .
                    . . . f 2 5 5 f . .
                    . . . f 2 5 5 f . .
                    . . . f 2 5 5 f . .
                    . . . f 2 5 5 f . .
                    . . . . f f f . . .
                `,
                img`
                    . . . . . . f f . .
                    . . . . . f 2 2 f .
                    . . . . . f 5 2 f .
                    . . . . . . f f . .
                    . . . . . f 2 2 f .
                    . . . . . f 5 2 f .
                    . . . . . f 5 2 f .
                    . . f . . f 5 2 f .
                    . f 2 f . f 5 2 f .
                    . f 5 2 f 5 5 2 f .
                    . f 5 5 5 5 2 f . .
                    . . f 5 5 2 f . . .
                    . . . f f f . . . .
                `,
                img`
                    f f f . . . . . . .
                    f 2 f . . . . . . .
                    f 5 f . . . . . . .
                    f 5 f . . . f . . .
                    f 5 f . . f 2 f . .
                    f 5 f . f 5 f . . .
                    f 5 f f 5 f . . . .
                    f 5 5 2 f . . . . .
                    f 5 f f 5 f . . . .
                    f 5 f . f 5 f . . .
                    f 5 f . . f 5 f . .
                    f 5 f . . . f 2 f .
                    f f f . . . . f . .
                `,
                img`
                    . . . f f f . . . .
                    . . f 2 2 2 f . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 2 f . . .
                    . . . f f f . . . .
                `,
                img`
                    . f f f f f f f . .
                    f f 5 5 5 5 2 2 f f
                    f 5 f f 5 2 f f 2 f
                    f 5 f f f f f f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f f f . . . . f f f
                `,
                img`
                    . . f f f f f . . .
                    . f f 5 2 2 f f . .
                    . f 5 2 f 2 2 f . .
                    . f 5 f . f 2 f . .
                    . f 5 f . f 2 f . .
                    . f 5 f . f 2 f . .
                    . f 5 f . f 2 f . .
                    . f 5 f . f 2 f . .
                    . f 5 f . f 2 f . .
                    . f 5 f . f 2 f . .
                    . f 5 f . f 2 f . .
                    . f 5 f . f 2 f . .
                    . f f f . f f f . .
                `,
                img`
                    . . . f f f f . . .
                    . . f 2 2 5 5 f . .
                    . f 2 2 f f 5 5 f .
                    . f 2 f . . f 5 f .
                    . f 2 f . . f 5 f .
                    . f 2 f . . f 5 f .
                    . f 2 f . . f 5 f .
                    . f 2 f . . f 5 f .
                    . f 2 f . . f 5 f .
                    . f 2 f . . f 5 f .
                    . f 2 2 f f 5 5 f .
                    . . f 2 2 5 5 f . .
                    . . . f f f f . . .
                `,
                img`
                    . f f f f f . . . .
                    f 2 2 2 2 2 f . . .
                    f 5 5 f 5 2 f . . .
                    f 5 f 2 f 2 f . . .
                    f 5 f 5 f 2 f . . .
                    f 5 5 f 5 2 f . . .
                    f 5 5 5 5 2 f . . .
                    f f f f f f . . . .
                    f 2 f . . . . . . .
                    f 2 f . . . . . . .
                    f 5 f . . . . . . .
                    f 5 f . . . . . . .
                    f f f . . . . . . .
                `,
                img`
                    . . . . f f f f f .
                    . . . f 2 2 2 2 2 f
                    . . . f 2 5 f 5 5 f
                    . . . f 2 f 2 f 5 f
                    . . . f 2 f 5 f 5 f
                    . . . f 2 5 f 5 5 f
                    . . . f 2 5 5 5 5 f
                    . . . . f f f f f f
                    . . . . . . . f 2 f
                    . . . . . . . f 2 f
                    . . . . . . . f 5 f
                    . . . . . . . f 5 f
                    . . . . . . . f f f
                `,
                img`
                    . . . . . . . . . .
                    . . . . f . . . . .
                    . . . f 2 f . . . .
                    . . f 5 5 2 f . . .
                    . . f 5 5 5 2 f . .
                    . . f 5 f f 2 f . .
                    . . f 5 f . f . . .
                    . . f 2 f . . . . .
                    . . f 2 f . . . . .
                    . . f 2 f . . . . .
                    . . f 2 f . . . . .
                    . . f 2 f . . . . .
                    . . f f f . . . . .
                `,
                img`
                    . . . f f f f f f .
                    . . f 5 5 5 5 2 2 f
                    . f 5 5 2 f f f f .
                    . f 5 2 f . . . . .
                    . f 5 2 f . . . . .
                    . f 5 2 f . . . . .
                    . . f 5 2 f . . . .
                    . . . f 5 2 f . . .
                    . . . . f 5 2 f . .
                    . . . . . f 5 2 f .
                    . . . f f f 5 2 f .
                    . . f 5 5 5 2 2 f .
                    . . . f f f f f . .
                `,
                img`
                    . . . f f f f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    f f f f 5 2 f f f f
                    f 5 5 5 5 2 2 2 2 f
                    f f f f 5 2 f f f f
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f f f f . . .
                `,
                img`
                    f f f . . . . f f f
                    f 5 f . . . . f 2 f
                    f 5 f . . . . f 2 f
                    f 5 f . . . . f 2 f
                    f 5 f . . . . f 2 f
                    f 5 f . . . . f 2 f
                    f 5 f . . . . f 2 f
                    f 5 f . . . . f 2 f
                    f 5 f . . . . f 2 f
                    f 5 f . . . . f 2 f
                    f 5 5 f f f f 2 2 f
                    . f 5 5 5 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    f f f . . . . f f f
                    . f 5 f . . f 2 f .
                    . f 5 f . . f 2 f .
                    . f 5 f . . f 2 f .
                    . f 5 f . . f 2 f .
                    . f 5 f . . f 2 f .
                    . . f 5 f f 2 f . .
                    . . f 5 f f 2 f . .
                    . . f 5 f f 2 f . .
                    . . f 5 f f 2 f . .
                    . . f 5 f f 2 f . .
                    . . . f 5 2 f . . .
                    . . . . f f . . . .
                `,
                img`
                    f f . . . . . . f f
                    f 5 f . . . . f 2 f
                    f 5 f . . . . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f . f f . f 2 f
                    f 5 f f f f f f 2 f
                    f 5 f 5 f f 2 f 2 f
                    . f 5 f . . f 2 f .
                    . . f . . . . f . .
                `,
                img`
                    f f . . . . . f f f
                    f 5 f . . . . f 2 f
                    f 5 5 f . . f 2 2 f
                    . f 5 5 f f 2 2 f .
                    . f 5 5 f f 2 2 f .
                    . . f 5 5 2 2 f . .
                    . . f 5 5 2 2 f . .
                    . . f 5 5 2 2 f . .
                    . f 5 5 f f 2 2 f .
                    . f 5 5 f f 2 2 f .
                    f 5 5 f . . f 2 2 f
                    f 5 f . . . . f 2 f
                    f f f . . . . f f f
                `,
                img`
                    . . f f f f f f . .
                    . . f 5 f f 2 f . .
                    . . f 5 f f 2 f . .
                    . . f 5 f f 2 f . .
                    . . f 5 f f 2 f . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f f f f . . .
                `,
                img`
                    f f f f f f f f f f
                    f 5 5 5 5 5 5 2 2 f
                    f f f f f f f f f f
                    . . . . . . f 2 f .
                    . . . . . . f 5 f .
                    . . . . . f 5 2 f .
                    . . . . f 5 2 f . .
                    . . . f 5 2 f . . .
                    . . f 5 2 f . . . .
                    . . f 5 2 f . . . .
                    f f f f f f f f f f
                    f 5 5 5 5 5 5 2 2 f
                    f f f f f f f f f f
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 2 2 2 2 5 5 5 5 f
                    f 2 2 2 5 5 5 2 2 f
                    . f f f 5 5 5 2 2 f
                    . . . f 2 2 2 f f .
                    . . . f 5 5 5 f . .
                    . . . f 5 5 5 f . .
                    . . . f 2 2 2 f . .
                    . . . f 2 2 2 f . .
                    . . . . f f f . . .
                `,
                img`
                    . . . . . . . . . .
                    . . . f f f f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f f f f . . .
                    . . . f f f f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f 5 2 f . . .
                    . . . f f f f . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                `,
                img`
                    . . . f f f . . . .
                    . . f 5 5 5 f . . .
                    . f 5 5 5 5 f . . .
                    . f 5 5 5 5 f . . .
                    . f 2 5 5 5 f . . .
                    . f 2 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 5 5 5 f . . .
                    . . f 2 2 2 f . . .
                    . . f 2 2 2 f . . .
                    . . . f f f . . . .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 2 2 2 2 5 5 5 5 f
                    f 2 2 5 5 5 5 5 5 f
                    . f 5 5 5 5 5 2 2 f
                    f 5 5 5 5 2 2 2 2 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 2 2 2 2 2 2 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f f f f f f f f .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 2 2 2 2 5 5 5 5 f
                    f 2 2 2 5 5 5 5 5 f
                    . f f f 5 5 5 2 2 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . f f f . . f f f .
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 5 f
                    f 2 2 2 2 2 5 5 5 f
                    . f 2 2 2 2 5 5 5 f
                    . . f f f f 5 5 5 f
                    . . . . . f 2 2 2 f
                    . . . . . f 2 2 2 f
                    . . . . . . f f f .
                `,
                img`
                    . f f f f f f f f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 2 2 2 f
                    f 5 5 5 5 5 5 5 2 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 2 2 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 2 2 2 f
                    f 5 5 5 5 5 5 5 2 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . f f f f f f f . .
                    f 5 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 f .
                    f 2 2 2 2 5 5 5 f .
                    f 2 2 2 2 5 5 5 f .
                    . f f f 5 5 5 2 f .
                    . . . f 5 5 5 2 f .
                    . . f 5 5 5 2 f . .
                    . . f 5 5 5 2 f . .
                    . . f 5 5 5 f . . .
                    . . f 2 2 2 f . . .
                    . . f 2 2 2 f . . .
                    . . . f f f . . . .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 2 5 5 5 5 2 2 f
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 2 5 5 5 f
                    f 2 5 5 5 5 5 5 5 f
                    f 2 2 2 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . . f f f f f f . .
                    . f 5 5 5 5 5 5 f .
                    f 5 5 5 5 5 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 2 2 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 f f 5 5 5 f
                    f 5 5 5 5 5 5 5 5 f
                    f 2 5 5 5 5 5 5 2 f
                    f 2 2 2 2 2 2 2 2 f
                    . f 2 2 2 2 2 2 f .
                    . . f f f f f f . .
                `,
                img`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . f f f . . .
                    . . . . f 2 f . . .
                    . . . . f 5 f . . .
                    . f f f 5 5 2 f f f
                    . f 5 5 5 5 5 5 2 f
                    . f f f 5 5 2 f f f
                    . . . . f 5 f . . .
                    . . . . f 2 f . . .
                    . . . . f f f . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                `,
                img`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    f f f f f f f f f f
                    f 2 2 2 2 5 5 5 5 f
                    f f f f f f f f f f
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                `,
                img`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . f . . . f . . .
                    . f 2 f . f 5 f . .
                    . . f 2 f 5 f . . .
                    . . . f 5 f . . . .
                    . . f 2 f 5 f . . .
                    . f 2 f . f 5 f . .
                    . . f . . . f . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                `,
                img`
                    . . . . . . . . . .
                    . . . f f f . . . .
                    . . . f 2 f . . . .
                    . . . f f f . . . .
                    . . . . . . . . . .
                    f f f f f f f f f .
                    f 2 2 2 5 5 5 5 f .
                    f f f f f f f f f .
                    . . . . . . . . . .
                    . . . f f f . . . .
                    . . . f 5 f . . . .
                    . . . f f f . . . .
                    . . . . . . . . . .
                `,
                img`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . f f f f f f f f .
                    . f 2 2 2 5 5 5 f .
                    . f f f f f f f f .
                    . . . . . . . . . .
                    . f f f f f f f f .
                    . f 2 2 2 5 5 5 f .
                    . f f f f f f f f .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                `,
                img`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . f . . .
                    . . . . . f 5 f . .
                    . . . . f 5 f . . .
                    . . . f 2 f . . . .
                    . . . f f . . . . .
                `
            ]
        }else if (f == FontTypes.Retro) {
            letters = AllFonts[f] = [
            img`
                . . . . . . . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . f . f f . . .
                . . . f . f f . . .
                . . f f f f f f . .
                . . f . . . f f . .
                . f . . . . . f f .
                f f f . . . f f f f
            `,
            img`
                . . . . . . . . . .
                f f f f f f . . . .
                . f f . . f f . . .
                . f f . . f f . . .
                . f f . . f f . . .
                . f f f f f . . . .
                . f f . . . f f . .
                . f f . . . f f . .
                . f f . . . f f . .
                f f f f f f f . . .
            `,
            img`
                . . . . . . . . . .
                . . f f f f f . f .
                . f f . . . . f f .
                f f . . . . . . f .
                f f . . . . . . . .
                f f . . . . . . . .
                f f . . . . . . . .
                f f . . . . . . f .
                . f f . . . . f f .
                . . f f f f f f . .
            `,
            img`
                 . . . . . . . . . .
                 f f f f f f f . . .
                 . f f . . . f f . .
                 . f f . . . . f f .
                 . f f . . . . f f .
                 . f f . . . . f f .
                 . f f . . . . f f .
                 . f f . . . . f f .
                 . f f . . . f f . .
                 f f f f f f f . . .
             `,
            img`
                 . . . . . . . . . .
                 f f f f f f . . . .
                 . f . . . f . . . .
                 . f . . . . . . . .
                 . f . . f . . . . .
                 . f f f f . . . . .
                 . f . . f . . . . .
                 . f . . . . f . . .
                 . f . . . f f . . .
                 f f f f f f f . . .
             `,
            img`
                 . . . . . . . . . .
                 f f f f f f f . . .
                 . f f . . . f . . .
                 . f f . . . . . . .
                 . f f . . f . . . .
                 . f f f f f . . . .
                 . f f . . f . . . .
                 . f f . . . . . . .
                 . f f . . . . . . .
                 f f f f . . . . . .
             `,
            img`
                 . . . . . . . . . .
                 . . f f f f f . f .
                 . f f . . . . f f .
                 f f . . . . . . f .
                 f f . . . . . . . .
                 f f . . . . . . . .
                 f f . . . . f f f f
                 f f . . . . . f f .
                 . f f . . . . f f .
                 . . f f f f f f f .
             `,
            img`
                 . . . . . . . . . .
                 f f f f . . f f f f
                 . f f . . . . f f .
                 . f f . . . . f f .
                 . f f . . . . f f .
                 . f f f f f f f f .
                 . f f . . . . f f .
                 . f f . . . . f f .
                 . f f . . . . f f .
                 f f f f . . f f f f
             `,
            img`
                 . . . . . . . . . .
                 . . . f f f f . . .
                 . . . . f f . . . .
                 . . . . f f . . . .
                 . . . . f f . . . .
                 . . . . f f . . . .
                 . . . . f f . . . .
                 . . . . f f . . . .
                 . . . . f f . . . .
                 . . . f f f f . . .
             `,
            img`
                 . . . . . . . . . .
                 . . . . f f f f . .
                 . . . . . f f . . .
                 . . . . . f f . . .
                 . . . . . f f . . .
                 . . . . . f f . . .
                 . . . f f . f f . .
                 . . f . . f f . . .
                 . . f . . f f . . .
                 . . . f f f . . . .
             `,
            img`
                 . . . . . . . . . .
                 f f f f . f f f f .
                 . f f . . . f . . .
                 . f f . . f . . . .
                 . f f f f . . . . .
                 . f f f f . . . . .
                 . f f . f f . . . .
                 . f f . . f f . . .
                 . f f . . . f f . .
                 f f f f . . f f f .
             `,
            img`
                 . . . . . . . . . .
                 f f f f . . . . . .
                 . f f . . . . . . .
                 . f f . . . . . . .
                 . f f . . . . . . .
                 . f f . . . . . . .
                 . f f . . . . . . .
                 . f f . . . . f . .
                 . f f . . . f f . .
                 f f f f f f f f . .
             `,
            img`
                 . . . . . . . . . . .
                 f f f . . . . . f f f
                 . f f f . . . . f f .
                 . f f f . . . f f f .
                 . f . f f . . f f f .
                 . f . f f . f . f f .
                 . f . . f f f . f f .
                 . f . . f f . . f f .
                 . f . . . f . . f f .
                 f f f f . . . f f f f
             `,
            img`
                  . . . . . . . . . .
                  f f . . . . f f f f
                  . f f . . . . f f .
                  . f f f . . . f f .
                  . f f f f . . f f .
                  . f f . f f . f f .
                  . f f . . f f f f .
                  . f f . . . f f f .
                  . f f . . . . f f .
                  f f f f . . . f f .
              `,
            img`
                  . . . . . . . . . .
                  . . f f f f f . . .
                  . f f . . . f f . .
                  f f . . . . . f f .
                  f f . . . . . f f .
                  f f . . . . . f f .
                  f f . . . . . f f .
                  f f . . . . . f f .
                  . f f . . . f f . .
                  . . f f f f f . . .
              `,
            img`
                   . . . . . . . . . .
                   f f f f f f . . . .
                   . f f . . f f . . .
                   . f f . . f f . . .
                   . f f . . f f . . .
                   . f f f f f . . . .
                   . f f . . . . . . .
                   . f f . . . . . . .
                   . f f . . . . . . .
                   f f f f . . . . . .
               `,
            img`
                . . . . . . . . . .
                . . f f f f f . . .
                . f f . . . f f . .
                f f . . . . . f f .
                f f . . . . . f f .
                f f . . . . . f f .
                f f . f f f . f f .
                f f . . . f f . . .
                . f f . . . f f . f
                . . f f f . f f f f
                . . . . . . . f f .
            `,
            img`
                . . . . . . . . . .
                f f f f f f . . . .
                . f f . . f f . . .
                . f f . . f f . . .
                . f f . . f f . . .
                . f f f f f . . . .
                . f f . f f . . . .
                . f f . . f f . . .
                . f f . . f f f . .
                f f f f . . f f f .
            `,
            img`
                . . . . . . . . . .
                . . f f f . f . . .
                . f f . . f f . . .
                . f f . . . f . . .
                . . f f f . . . . .
                . . . f f f f . . .
                . . . . . f f f . .
                . f . . . . f f . .
                . f f . . . f f . .
                . f . f f f f . . .
            `,
            img`
                . . . . . . . . . .
                f f f f f f f f . .
                f . . f f . . f . .
                . . . f f . . . . .
                . . . f f . . . . .
                . . . f f . . . . .
                . . . f f . . . . .
                . . . f f . . . . .
                . . . f f . . . . .
                . . f f f f . . . .
            `,
            img`
                . . . . . . . . . .
                f f f f . . f f f .
                . f f . . . . f . .
                . f f . . . . f . .
                . f f . . . . f . .
                . f f . . . . f . .
                . f f . . . . f . .
                . f f . . . . f . .
                . f f . . . . f . .
                . . f f f f f . . .
            `,
            img`
                . . . . . . . . . .
                f f f f . . f f f f
                . f f . . . . f . .
                . . f f . . . f . .
                . . f f . . f . . .
                . . . f f . f . . .
                . . . f f . f . . .
                . . . f f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
            `,
            img`
                . . . . . . . . . . . . . .
                f f f f . . . f . . f f f f
                . f f . . . f f . . . . f .
                . . f f . . f f f . . f . .
                . . f f . . f f f . . f . .
                . . f f . f . f f . . f . .
                . . . f f f . . f f f . . .
                . . . f f f . . f f f . . .
                . . . f f . . . . f f . . .
                . . . . f . . . . f . . . .
            `,
            img`
                . . . . . . . . . .
                f f f f f . f f f f
                . . f f . . . f . .
                . . . f f . f . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f f . . .
                . . . f . . f f . .
                . . f . . . f f . .
                f f f f . f f f f f
            `,
            img`
                . . . . . . . . . .
                f f f f f . f f f .
                . f f f . . . f . .
                . . f f . . f . . .
                . . . f f . f . . .
                . . . f f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . f f f f . . .
            `,
            img`
                . f f f f f f f . .
                . f f . . . f f . .
                . f . . . f f . . .
                . . . . f f . . . .
                . . . . f . . . . .
                . . . f f . . . . .
                . . f f . . . . . .
                . f f . . . . f . .
                . f f . . . f f . .
                . f f f f f f f . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . f f . . . .
                . . . . f f . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f . . . . .
                . . . . f . . . . .
                . . . . . . . . . .
                . . . . f f . . . .
                . . . . f f . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . f . f . . .
                . . . . f . f . . .
                . . f f f f f f . .
                . . . f . f . . . .
                . . . f . f . . . .
                . f f f f f f f . .
                . . f . f . . . . .
                . . f . f . . . . .
                . . . . . . . . . .
            `,
            img`
                . . . . . . . . . .
                . . . f f f f . . .
                . . f . . f f . . .
                . . f f . . . . . .
                . . . f f f . . . .
                . . f f . f f . . .
                . . f . . . f . . .
                . . f f . f f . . .
                . . . f f f . . . .
                . . . . . f f . . .
                . . f f . . f . . .
                . . f f f f . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . f f f . . . .
                . . f . . f f . . .
                . . . . . f f . . .
                . . f f f f f . . .
                . f f . . f f . . .
                . f f . . f f . . .
                . . f f f . f f . .
            `,
            img`
                . . f . . . . . . .
                f f f . . . . . . .
                . f f . . . . . . .
                . f f . . . . . . .
                . f f f f f f . . .
                . f f f . . f f . .
                . f f . . . f f . .
                . f f . . . f f . .
                . f f f . . f f . .
                f f f . f f f . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . f f f . f . .
                . . f f . . f f . .
                . f f . . . . f . .
                . f f . . . . . . .
                . f f . . . . . f .
                . f f f . . . f . .
                . . f f f f f . . .
            `,
            img`
                . . . . . . . f . .
                . . . . . . . f f f
                . . . . . . . f f .
                . . . . . . . f f .
                . . . f f f f f f .
                . . f f . . f f f .
                . . f f . . . f f .
                . . f f . . . f f .
                . . f f . . f f f .
                . . . f f f . f f f
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . f f f . . .
                . . . f f . . f . .
                . . f f f f f f . .
                . . f f . . . . . .
                . . f f . . . . f .
                . . f f . . . f . .
                . . . f f f f . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . f f f f .
                . . . . f f . . f .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . f f f f f . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . f f f f . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . f f f . f f f .
                . f f . . f f f . .
                . f f . . . f f . .
                . f f . . . f . . .
                . f f . . . f f . .
                . . f f f f f f . .
                . . . f f . f f . .
                . . . . . . f f . .
                . f f . . . f f . .
                . . f f f f f . . .
            `,
            img`
                . . . f . . . . . .
                . f f f . . . . . .
                . . f f . . . . . .
                . . f f . f f f . .
                . . f f f . . f f .
                . . f f . . . f f .
                . . f f . . . f f .
                . . f f . . . f f .
                . . f f . . . f f .
                . f f f f . f f f f
            `,
            img`
                . . . . . . . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . . . . . . .
                . . . . f f . . . .
                . . . f f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . f f f f . . .
            `,
            img`
                 . . . . f f . . . .
                 . . . . f f . . . .
                 . . . . . . . . . .
                 . . . . . f . . . .
                 . . . f f f . . . .
                 . . . . f . f . . .
                 . . . . f f . . . .
                 . . . f f f . . . .
                 . . f . f f . . . .
                 . f . . f f . . . .
                 . f . . f f . . . .
                 . f . . f f . . . .
                 . . f f f . . . . .
             `,
            img`
                . . . f . . . . . .
                . f f f . . . . . .
                . . f f . . . . . .
                . . f f . . f f . .
                . . f f . . f . . .
                . . f f . f . . . .
                . . f f f f . . . .
                . . f f . f f . . .
                . . f f . . f f . .
                . f f f f . f f f .
            `,
            img`
                . . . . . f . . . .
                . . . f f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . f f f . . .
            `,
            img`
                . . . . . . . . . . . .
                . . . . . . . . . . . .
                . . . . . . . . . . . .
                . f f . f f . f f f . .
                f f f f . f f f . f f .
                . f f . . f f . . f f .
                . f f . . f f . . f f .
                . f f . . f f . . f f .
                . f f . . f f . . f f .
                f f f f . f f f . f f f
            `,
            img`
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . . . f f . f f . .
                . . . f f f f . f f .
                . . . . f f . . f f .
                . . . . f f . . f f .
                . . . . f f . . f f .
                . . . . f f . . f f .
                . . . f f f f . f f f
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . f f f . . .
                . . . f f . f f . .
                . . f f . . . f f .
                . . f f . . . f f .
                . . f f . . . f f .
                . . . f f . f f . .
                . . . . f f f . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . f f . f f f . .
                . f f f f . . f f .
                . . f f . . . f f .
                . . f f . . . f f .
                . . f f . . . f f .
                . . f f . . . f f .
                . . f f f f f f . .
                . . f f . . . . . .
                . . f f . . . . . .
                . f f f f . . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . f f f . f f f . .
                f f . . f f f . . .
                f f . . . f f . . .
                f f . . . f f . . .
                f f . . . f f . . .
                f f . . f f f . . .
                . f f f . f f . . .
                . . . . . f f . . .
                . . . . . f f f . .
                . . . . . f f . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . f f . f f . . .
                . f f f f . f f . .
                . . f f . . f f . .
                . . f f . . . . . .
                . . f f . . . . . .
                . . f f . . . . . .
                . f f f f . . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . f f f f . . .
                . . f f . . f f . .
                . . f f . . . . . .
                . . . f f f f . . .
                . . . . . . f f . .
                . . f . . . f f . .
                . . . f f f f . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . f . . . . .
                . . . f f . . . . .
                . . f f f f f . . .
                . . . f f . . . . .
                . . . f f . . . . .
                . . . f f . . . . .
                . . . f f . f . . .
                . . . . f f . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . f f . . f f f . .
                f f f . . . f f . .
                . f f . . . f f . .
                . f f . . . f f . .
                . f f . . . f f . .
                . f f . . f f f . .
                . . f f f . . f f .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . f . . f f f .
                . . f f . . . f . .
                . f . f . . f . . .
                . . . f f . f . . .
                . . . f f f . . . .
                . . . . f f . . . .
                . . . . f f . . . .
            `,
            img`
                . . . . . . . . . . . . .
                . . . . . . . . . . . . .
                . . . . . . . . . . . . .
                . f f f . f f f f . f f f
                f f f . . . f f . . . f .
                . f f . . . f f . . . f .
                . . f f . f . f f . f . .
                . . f f . f . f f . f . .
                . . f f . f . f f . f . .
                . . . f f . . . f f . . .
            `,
            img`
                . . . . . . . . . . . .
                . . . . . . . . . . . .
                . . . . . . . . . . . .
                . . . . f f . . f f f .
                . . . . . f f . f . . .
                . . . . . . f f . . . .
                . . . . . . . f f . . .
                . . . . . . f . f f . .
                . . . . . f . . . f f .
                . . . . f f f . f f f f
            `,
            img`
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . f f f f . f f f f
                . . . f f . . . f f .
                . . . . f f . . f . .
                . . . . f f . f . . .
                . . . . . f f f . . .
                . . . . . f f . . . .
                . . . . . . f . . . .
                . . . . . f . . . . .
                . . f f . f . . . . .
                . . f f f . . . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . f f f f f f f .
                . . f . . . f f . .
                . . . . . f f . . .
                . . . . f f . . . .
                . . . f f . . . . .
                . . f f . . . . f .
                . . f f f f f f f .
            `,
            img`
                . . . f f f f . . .
                . . f f . . f f . .
                . . f f . . f f . .
                . . . . . . f f . .
                . . . . . f f . . .
                . . . . f f . . . .
                . . . . f . . . . .
                . . . . . . . . . .
                . . . f f . . . . .
                . . . f f . . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . f f . . . .
                . . . . f f . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . f f . . . .
                . . . . f f . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . f f . . .
                . . . . f f f . . .
                . . . . . f f . . .
                . . . . . f f . . .
                . . . . . f f . . .
                . . . . . f f . . .
                . . . . . f f . . .
                . . . f f f f f . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . f f f f . . .
                . . f f . . f f . .
                . . f f . . f f . .
                . . . . . f f . . .
                . . . . f . . . . .
                . . . f . . . . . .
                . . f f f f f f f .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . f f f f . .
                . . . f f . . f f .
                . . . f f . . f f .
                . . . . . . . f . .
                . . . . . f f f f .
                . . . . . . . . f f
                . . . f f . . . f f
                . . . f f . . . f f
                . . . . f f f f . .
            `,
            img`
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . . . . . . . f f .
                . . . . . . . f f f .
                . . . . . . f f f f .
                . . . . . f f . f f .
                . . . . f f . . f f .
                . . . . f f f f f f f
                . . . . . . . . f f .
                . . . . . . . . f f .
                . . . . . . . . f f .
            `,
            img`
                . . . . . . . . . . . .
                . . . . . . . . . . . .
                . . . . . . . . . . . .
                . . . . . . f f f f f .
                . . . . . . f . . . . .
                . . . . . . f . . . . .
                . . . . . . f f f f . .
                . . . . . . f . . f f .
                . . . . . f . . . . f f
                . . . . . . . . . . f f
                . . . . . f f . . . f .
                . . . . . . f f f f . .
            `,
            img`
                . . . . . . . . . . . .
                . . . . . . . . f f . .
                . . . . . . . f . . . .
                . . . . . . f . . . . .
                . . . . . f f . f f . .
                . . . . . f f f . . f f
                . . . . . f f . . . f f
                . . . . . f f . . . f f
                . . . . . . f . . . f f
                . . . . . . . f f f . .
            `,
            img`
                . . . . . . . . . . . . .
                . . . . . . . . . . . . .
                . . . . . . . . . . . . .
                . . . . . . f f f f f f f
                . . . . . . f f . . . f .
                . . . . . . f . . . f f .
                . . . . . . . . . . f . .
                . . . . . . . . . f f . .
                . . . . . . . . . f . . .
                . . . . . . . . f f . . .
                . . . . . . . . f . . . .
                . . . . . . . f f . . . .
            `,
            img`
                 . . . . . . . . . f f f . .
                 . . . . . . . . f . . . f .
                 . . . . . . . f f . . . f f
                 . . . . . . . . f f . . f .
                 . . . . . . . . . f f f . .
                 . . . . . . . . f . . f f .
                 . . . . . . . f f . . . f f
                 . . . . . . . f f . . . f f
                 . . . . . . . f f . . . f f
                 . . . . . . . . f f f f f .
             `,
            img`
                . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . .
                . . . . . . . . . f f f f . .
                . . . . . . . . f f . . f f .
                . . . . . . . . f f . . . f f
                . . . . . . . . f f . . . f f
                . . . . . . . . f f . . . f f
                . . . . . . . . . f f f . f .
                . . . . . . . . . . . . f f .
                . . . . . . . . . . . f f . .
                . . . . . . . . . f f f . . .
            `,
            img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . f f f f f .
                . . . . . . . . . f f . . . f f
                . . . . . . . . . f f . f . f f
                . . . . . . . . . f f . f . f f
                . . . . . . . . . f f . f . f f
                . . . . . . . . . f f . . . f f
                . . . . . . . . . . f f f f f .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . f . . . .
                . . . . . f . . . .
                . . . f f f f f . .
                . . . . . f . . . .
                . . . . . f . . . .
                . . . . . . . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . f f f f . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . f . . . . .
                . . f . f . f . . .
                . . . f f f . . . .
                . . f . f . f . . .
                . . . . f . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . f f . . . .
                . . . . . . . . . .
                . . f f f f f f . .
                . . . . . . . . . .
                . . . . f f . . . .
                . . . . . . . . . .
            `,
            img`
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . . . . . . . . . .
                . . . f f f f f f f f
                . . . . . . . . . . .
                . . . f f f f f f f f
                . . . . . . . . . . .
                . . . . . . . . . . .
            `,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . f f . . .
                . . . . . f f . . .
                . . . . . . f . . .
                . . . . . f . . . .
            `,
]
        }else if (FontTypes.Pixel3D) {
        letters = AllFonts[f] = [
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . f f f f f . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . f f f f f . . . f . . . f
                f . . . f . . f f . . . f . . f .
                f . . . f . f . f . . . f . f . .
                f . . . f f . . f . . . f f . . .
                f f f f f . . . f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f . . . .
                . . . f . . . . . . . f . f . . .
                . . f . . . . . . . f . . . f . .
                . f . . . . . . . f . . . . . f .
                f f f f f f f f f . . . . . . . f
                f . . . . . . . . f . . . . . f .
                f . . . . . . . . . f . . . f . .
                f . . . . . . . . . . f . f . f .
                f . . . f f f f f . . . f . . . f
                f . . . . . . . . . . f . . . f .
                f . . . . . . . . f f . . . f . .
                f . . . . . . . . . . f . f . . .
                f . . . f f f f f . . . f . . . .
                f . . . . . . . . . . f . . . . .
                f . . . . . . . . . f . . . . . .
                f . . . . . . . . f . . . . . . .
                f f f f f f f f f . . . . . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f . . . f f f f f f f f f f f f f
                f . . . f . . f . . . . . . . f f
                f . . . f . f . . . . . . . f . f
                f . . . f f . . . . . . . f . . f
                f . . . f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f . . . .
                . . . f . . . . . . . f . f . . .
                . . f . . . . . . . f . . . f . .
                . f . . . . . . . f . . . . . f .
                f f f f f f f f f . . . . . . . f
                f . . . . . . . . f . . . . . f f
                f . . . . . . . . . f . . . f . f
                f . . . . . . . . . . f . f . . f
                f . . . f f f . . . . . f . . . f
                f . . . f . . f . . . . f . . f .
                f . . . f . f . f . . . f . f . .
                f . . . f f . f . . . . f f . . .
                f . . . f f f . . . . . f . . . .
                f . . . . . . . . . . f . . . . .
                f . . . . . . . . . f . . . . . .
                f . . . . . . . . f . . . . . . .
                f f f f f f f f f . . . . . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f . . . f f f f f f f f f f f f f
                f . . . . . . . f . . f . . . f f
                f . . . . . . . f . f . . . f . f
                f . . . . . . . f f . . . f . . f
                f . . . f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f . . . f f f f f f f f f . . . .
                f . . . . . . . f . . f . . . . .
                f . . . . . . . f . f . . . . . .
                f . . . . . . . f f . . . . . . .
                f . . . f f f f f . . . . . . . .
                f . . . f . . f . . . . . . . . .
                f . . . f . f . . . . . . . . . .
                f . . . f f . . . . . . . . . . .
                f f f f f . . . . . . . . . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f f
                f . . . . . . . . . . . f . f . f
                f . . . . . . . . . . . f f . . f
                f . . . f f f f f f f f f . . . f
                f . . . f . . . . . . . f . . . f
                f . . . f . . . . . . . f . . . f
                f . . . f . . . . . . . f . . . f
                f . . . f f f f f . . . f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . f f f f f . . . f f f f f
                . . . f . . . f f . . f . . . f f
                . . f . . . f . f . f . . . f . f
                . f . . . f . . f f . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . f . . f f . . . f . . . f
                f . . . f . f . f . . . f . . . f
                f . . . f f . . f . . . f . . . f
                f . . . f f f f f . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . f f f f f . . . f . . . f
                f . . . f . . f f . . . f . . f .
                f . . . f . f . f . . . f . f . .
                f . . . f f . . f . . . f f . . .
                f f f f f . . . f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f . . . f f f f f f f f f
                . . . f f . . . f . . f . . . f f
                . . f . f . . . f . f . . . f . f
                . f . . f . . . f f . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f . . . f f f f f . . . .
                . . . f f . . . f . . . f . . . .
                . . f . f . . . f . . . f . . . .
                . f . . f . . . f . . . f . . . .
                f f f f f . . . f . . . f . . . .
                f . . . . . . . f . . f . . . . .
                f . . . . . . . f . f . . . . . .
                f . . . . . . . f f . . . . . . .
                f f f f f f f f f . . . . . . . .
            `,
            img`
                . . . . f f f f f . . . f f f f f
                . . . f . . . f f . . f . . . f f
                . . f . . . f . f . f . . . f . f
                . f . . . f . . f f . . . f . f .
                f f f f f . . . f f f f f . f . .
                f . . . f . . f . . . . f f . . .
                f . . . f . f . . . . . f . . . .
                f . . . f f . . . . . f . f . . .
                f . . . f . . . . . f . . . f . .
                f . . . . . . . . f . . . . . f .
                f . . . . . . . f . . . . . . . f
                f . . . . . . . . f . . . . . f f
                f . . . f . . . . . f . . . f . f
                f . . . f f . . . . . f . f . f .
                f . . . f . f . . . . . f . f . .
                f . . . f f . f . . . . f f . . .
                f f f f f . . . f f f f f . . . .
            `,
            img`
                . . . . f f f f f . . . . . . . .
                . . . f . . . f f . . . . . . . .
                . . f . . . f . f . . . . . . . .
                . f . . . f . . f . . . . . . . .
                f f f f f . . . f . . . . . . . .
                f . . . f . . . f . . . . . . . .
                f . . . f . . . f . . . . . . . .
                f . . . f . . . f . . . . . . . .
                f . . . f . . . f f f f f f f f f
                f . . . f . . f . . . . . . . f f
                f . . . f . f . . . . . . . f . f
                f . . . f f . . . . . . . f . . f
                f . . . f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . f f f f . . . . . f f f f
                . . . f . . f . f . . . f . . f f
                . . f . . f . . . f . f . . f . f
                . f . . f . . . . . f . . f . . f
                f f f f . . . . . f f f f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . . f . f . . . . f . . . f
                f . . . . . f . . . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f f . f f . . . f . . . f
                f . . . f . f . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . f f . . . f . . f .
                f . . . f . f . f . . . f . f . .
                f . . . f f . . f . . . f f . . .
                f f f f f . . . f f f f f . . . .
            `,
            img`
                . . . . f f f f f . . . f f f f f
                . . . f . . . f . f . f . . . f f
                . . f . . . f . . . f . . . f . f
                . f . . . f . . . f . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . . f . . f . . . f . . . f
                f . . . . . f . f . . . f . . . f
                f . . . . . f . f . . . f . . . f
                f . . . f . . f f . . . f . . . f
                f . . . f . . f f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f f . . f . . . f . . . f
                f . . . f f . . f . . . f . . . f
                f . . . f . f . . . . . f . . f .
                f . . . f . f . . . . . f . f . .
                f . . . f f . f . . . . f f . . .
                f f f f f . . . f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . f f f f f . . . f . . . f
                f . . . f . . f f . . . f . . . f
                f . . . f . f . f . . . f . . . f
                f . . . f f . . f . . . f . . . f
                f . . . f f f f f . . . f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . f f f f f f . . . f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f . . . f f f f f f f f f . . . .
                f . . . f . . f . . . . . . . . .
                f . . . f . f . . . . . . . . . .
                f . . . f f . . . . . . . . . . .
                f f f f f . . . . . . . . . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . f f f f f f . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f f f f f f f f f . . . f . . . f
                . . . . . . . . f . . . f . . f .
                . . . . . . . . f . . . f . f . .
                . . . . . . . . f . . . f f . . .
                . . . . . . . . f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . f f f f f . . . f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . f .
                f . . . f . . . f f f f f . . . f
                f . . . f f . . . f . . . . . f .
                f . . . f . f . . . f . . . f . .
                f . . . f f . f . . . f . f . . .
                f f f f f . . . f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f f
                f . . . . . . . . . . . f . f . f
                f . . . . . . . . . . . f f . . f
                f . . . f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f f f f f f f f f . . . f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f . . . f f f f f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . f . . . . .
                . . . . f . . . f . f . . . . . .
                . . . . f . . . f f . . . . . . .
                . . . . f f f f f . . . . . . . .
            `,
            img`
                . . . . f f f f f . . . f f f f f
                . . . f . . . f f . . f . . . f f
                . . f . . . f . f . f . . . f . f
                . f . . . f . . f f . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . f f . . . f . . . f
                f . . . f . f . f . . . f . . . f
                f . . . f f . . f . . . f . . . f
                f . . . f f f f f . . . f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . f f f f f . . . f f f f f
                . . . f . . . f f . . f . . . f f
                . . f . . . f . f . f . . . f . f
                . f . . . f . . f f . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . f f . . . f . . . f
                f . . . f . f . f . . . f . . f .
                f . . . f f . . f . . . f . f . .
                f . . . . f . f . . . . f f . . .
                f . . . . . f . . . . . f . . . .
                . f . . . . . . . . . f . . . . .
                . . f . . . . . . . f . . . . . .
                . . . f . . . . . f . . . . . . .
                . . . . f f f f f . . . . . . . .
            `,
            img`
                . . . . f f f f f . . . f f f f f
                . . . f . . . f f . . f . . . f f
                . . f . . . f . f . f . . . f . f
                . f . . . f . . f f . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . f f . . . f . . . f
                f . . . f . f . f . . . f . . . f
                f . . . f f . f f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . . . f . . . . . f . . f .
                f . . . . f . f . . . . f . f . .
                f . . . f . . . f . . . f f . . .
                f f f f f . . . . f f f f . . . .
            `,
            img`
                . . . . f f f f f . . . f f f f f
                . . . f . . . f . f . f . . . f f
                . . f . . . f . . . f . . . f . f
                . f . . . f . . . f . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . . f . f . . . . f . . f .
                f . . . . . f . . . . . f . f . .
                f . . . . . . . . . . . f f . f .
                f . . . . . . . . . . . f . . . f
                . f . . . . . . . . . f . . . f f
                . . f . . . . . . . f . . . f . f
                . f . . . . . . . . . f . f . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . f . . . . . f . f . .
                f . . . . f . f . . . . f f . . .
                f f f f f . . . f f f f f . . . .
            `,
            img`
                . . . . f f f f f . . f f f f f f
                . . . f . . . f f . f . . . . f f
                . . f . . . f . f f . . . . f . f
                . f . . . f . . f . . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . f . . . f . . . f . . f .
                f . . . f . . f f . . . f . f . .
                f . . . f . f . f . . . f f . . .
                f . . . f f . . f . . . f . . . .
                . f . . . f . f . . . f f . . . .
                . . f . . . f . . . f . f . . . .
                . . . f . . . . . f . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . f . . . . .
                . . . . f . . . f . f . . . . . .
                . . . . f . . . f f . . . . . . .
                . . . . f f f f f . . . . . . . .
            `,
            img`
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f . . . f f f f f
                . . . f . . . . . . . f . . . f f
                . . f . . . . . . . f . . . f . f
                . f . . . . . . . f . . . f . . f
                f . . . f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f . .
                f . . . . . . . . . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . f f f f f f . . . .
                . . . . . . f . . . . f f . . . .
                . . . . . f . . . . f . f . . . .
                . . . . f . . . . f . . f . . . .
                . . . f f f f f f . . . f . . . .
                . . . f . . . . f . . f . . . . .
                . . . f . . . . f . f . . . . . .
                . . . f . . . . f f . . . . . . .
                . . . f f f f f f . . . . . . . .
            `,
            img`
                . . . . . . . . f f f f f . . . .
                . . . . . . . f . . . f f . . . .
                . . . . . . f . . . f . f . . . .
                . . . . . f . . . f . . f . . . .
                . . . . f f f f f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . f f . . . .
                . . . . f . . . f . f . f . . . .
                . . . . f . . . f f . . f . . . .
                . . . . f f f f f . . . f . . . .
                . . . . f . . . f . . f . . . . .
                . . . . f . . . f . f . . . . . .
                . . . . f . . . f f . . . . . . .
                . . . . f f f f f . . . . . . . .
            `,
            img`
                . . . . . . f f f f f . f f f f f
                . . . . . f . . . f f f . . . f f
                . . . . f . . . f f f . . . f f f
                . . . f . . . f f f . . . f f f f
                . . f f f f f f f f f f f f f . f
                . f f . . . . . . . . . f f . . f
                . f . . . . . . . . . . . f . . f
                . f . . . . . . . . . . . f . f .
                . f . . . . . . . . . . . f f f f
                . f f . . . f f f . . . f f f f f
                . . f . . . f . f . . . f f f . f
                . f f . . . f f f . . . f f . . f
                . f . . . . . . . . . . . f . . f
                . f . . . . . . . . . . . f . f .
                . f . . . . . . . . . . . f f . .
                . f f . . . f f f . . . f f . . .
                . . f f f f f . f f f f f . . . .
            `,
            img`
                . . . . . f f f f f f f f f . . .
                . . . . f . . . . . . . . . f . .
                . . . f . . . . . . . . . f . f .
                . . f . . . . . . . . . f . f f .
                . f f f f f f f f f f f . f f . .
                f . . . . . . . . . . . f f . f .
                f . . f f f f f f f f f f . f . f
                . f . f f . . . . . . . . f . f f
                f . . . f f f f f f f . f . f . f
                f . f . . . . . . . . f . f . f .
                f . . f f f f f f f . . f . f . f
                . f . . . . . . . . f . f f . f f
                . . f f f f f f . . . . f . f f .
                . f . . . . . . f . . f . f f . .
                f f f f f f f f f . . . f f . . .
                f . . . . . . . . . . . f . . . .
                . f f f f f f f f f f f . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . f f f f f f f f . .
                . . . . . . f . . . . . . f f . .
                . . . . . f . . . . . . f . f . .
                . . . . f . . . . . . f . . f . .
                . . . f f f f f f f f . . . f . .
                . . . f . . . . . . f . . . f . .
                . . . f . . . . . . f . . . f . .
                . . . f f f f f . . f . . . f . .
                . . . f . . . . . . f . . . f . .
                . . . f . . . . . . f . . f . . .
                . . . f . . f . . . f . f . . . .
                . . . f . . . . . . f f . . . . .
                . . . f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . . f f f f f . . . . .
                . . . . . . f . . . f f . . . . .
                . . . . . f . . . f . f . . . . .
                . . . . f . . . f . . f . . . . .
                . . . f f f f f . . . f f f f f .
                . . . f . . . f . . f . . . f f .
                . . . f . . . f . f . . . f . f .
                . . . f . . . f f . . . f . . f .
                . . . f . . . f f f f f . . . f .
                . . . f . . . . . . . f . . . f .
                . . . f . . . . . . . f . . . f .
                . . . f . . . . . . . f . . . f .
                . . . f . . . f . . . f . . . f .
                . . . f . . . . . . . f . . f . .
                . . . f . . . . . . . f . f . . .
                . . . f . . . . . . . f f . . . .
                . . . f f f f f f f f f . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . f f f f f f f f . .
                . . . . . . f . . . . . . f f . .
                . . . . . f . . . . . . f . f . .
                . . . . f . . . . . . f . . f . .
                . . . f f f f f f f f . . . f . .
                . . . f . . . . . . f . . f f . .
                . . . f . . . . . . f . f . f . .
                . . . f . . . . . . f f . . f . .
                . . . f . . f f f f f . . . f . .
                . . . f . . . . . . f . . f . . .
                . . . f . . . . . . f . f . . . .
                . . . f . . . . . . f f . . . . .
                . . . f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . . . . . f f f f f . .
                . . . . . . . . . f . . . f f . .
                . . . . . . . . f . . . f . f . .
                . . . . . . . f . . . f . . f . .
                . . . . . . f f f f f . . . f . .
                . . . . . f f . . . f . . . f . .
                . . . . f . f . . . f . . . f . .
                . . . f . . f . . . f . . . f . .
                . . f f f f f . . . f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . f . . . f . . . f . .
                . . f . . . . . . . f . . f . . .
                . . f . . . . . . . f . f . . . .
                . . f . . . . . . . f f . . . . .
                . . f f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . f f f f f f f f . .
                . . . . . . f . . . . . . f f . .
                . . . . . f . . . . . . f . f . .
                . . . . f . . . . . . f . . f . .
                . . . f f f f f f f f . . . f . .
                . . . f . . . . . . f . . f f . .
                . . . f . . f . . . f . f . f . .
                . . . f . . . . . . f f . . f . .
                . . . f . . . . . . f . . . f . .
                . . . f . . f f f f f . . f . . .
                . . . f . . . . . . f . f . . . .
                . . . f . . . . . . f f . . . . .
                . . . f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . f f f f f f f f f . .
                . . . . . f . . . . . . . f f . .
                . . . . f . . . . . . . f . f . .
                . . . f . . . . . . . f . . f . .
                . . f f f f f f f f f . . . f . .
                . . f . . . . . . . f . . f f . .
                . . f . . . . . . . f . f . f . .
                . . f . . . . . . . f f . . f . .
                . . f . . . f f f f f . . . f . .
                . . f . . . . . . . f . . f . . .
                . . f . . . . . . . f . f . . . .
                . . f . . . . . . . f f . . . . .
                . . f . . . f f f f f . . . . . .
                . . f . . . f . . f . . . . . . .
                . . f . . . f . f . . . . . . . .
                . . f . . . f f . . . . . . . . .
                . . f f f f f . . . . . . . . . .
            `,
            img`
                .................
                .................
                .................
                .................
                .....ffffffffff..
                ....f........ff..
                ...f........f.f..
                ..f........f..f..
                .ffffffffff...f..
                .f........f...f..
                .f........f...f..
                .f........f...f..
                .f...f....f...f..
                .f........f...f..
                .f........f...f..
                .f........f...f..
                .f........f...f..
                .fffff....f..f...
                .f........f.f....
                .f........ff.....
                .ffffffffff......
            `,
            img`
                . . . . . . f f f f f . . . . . .
                . . . . . f . . . f f . . . . . .
                . . . . f . . . f . f . . . . . .
                . . . f . . . f . . f . . . . . .
                . . f f f f f . . . f f f f f . .
                . . f . . . f . . f . . . f f . .
                . . f . . . f . f . . . f . f . .
                . . f . . . f f . . . f . . f . .
                . . f . . . f f f f f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . f . . . f . . . f . .
                . . f . . . f . . . f . . f . . .
                . . f . . . f . . . f . f . . . .
                . . f . . . f . . . f f . . . . .
                . . f f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . . . f f f f f . . . .
                . . . . . . . f . . . f f . . . .
                . . . . . . f . . . f . f . . . .
                . . . . . f . . . f . . f . . . .
                . . . . f f f f f . . . f . . . .
                . . . . f . . . f . . f f . . . .
                . . . . f . . . f . f . f . . . .
                . . . . f . . . f f . . f . . . .
                . . . . f f f f f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . . f . . . .
                . . . . f . . . f . . f . . . . .
                . . . . f . . . f . f . . . . . .
                . . . . f . . . f f . . . . . . .
                . . . . f f f f f . . . . . . . .
            `,
            img`
                .........fffff...
                ........f...ff...
                .......f...f.f...
                ......f...f..f...
                .....fffff...f...
                .....f...f..ff...
                .....f...f.f.f...
                .....f...ff..f...
                .....fffff...f...
                .....f...f...f...
                .....f...f...f...
                .....f...f...f...
                .....f...f...f...
                .....f...f...f...
                ....ff...f...f...
                ...f.f...f...f...
                ..ffff...f...f...
                ..f......f..f....
                ..f......f.f.....
                ..f......ff......
                ..ffffffff.......
            `,
            img`
                . . . . . . f f f f f f f f f . .
                . . . . . f . . . f . . . f f . .
                . . . . f . . . f . . . f . f . .
                . . . f . . . f . . . f . . f . .
                . . f f f f f f f f f . . . f . .
                . . f . . . f . . . f . . f . . .
                . . f . . . f . . . f . f . . . .
                . . f . . . f . . . f f . f . . .
                . . f . . . f . . . f . . . f . .
                . . f . . . . . . f . . . f f . .
                . . f . . . . . f . . . f . f . .
                . . f . . . . . . f . f . . f . .
                . . f . . . f . . . f . . . f . .
                . . f . . . f . . . f . . f . . .
                . . f . . . f . . . f . f . . . .
                . . f . . . f . . . f f . . . . .
                . . f f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . f f f f f . . . . . .
                . . . . . f . . . f f . . . . . .
                . . . . f . . . f . f . . . . . .
                . . . f . . . f . . f . . . . . .
                . . f f f f f . . . f . . . . . .
                . . f . . . f . . . f . . . . . .
                . . f . . . f . . . f . . . . . .
                . . f . . . f . . . f . . . . . .
                . . f . . . f . . . f f f f f . .
                . . f . . . f . . f . . . f f . .
                . . f . . . f . f . . . f . f . .
                . . f . . . f f . . . f . . f . .
                . . f . . . f f f f f . . . f . .
                . . f . . . . . . . f . . f . . .
                . . f . . . . . . . f . f . . . .
                . . f . . . . . . . f f . . . . .
                . . f f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . f f f f f f f f f f f f f
                . . . f . . . . . . . . . . . f f
                . . f . . . . . . . . . . . f . f
                . f . . . . . . . . . . . f . . f
                f f f f f f f f f f f f f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . . . . . . . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . f . . . f . . . f . . f .
                f . . . f . . . f . . . f . f . .
                f . . . f . . . f . . . f f . . .
                f f f f f f f f f f f f f . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . f f f f f f f f f . .
                . . . . . f . . . . . . . f f . .
                . . . . f . . . . . . . f . f . .
                . . . f . . . . . . . f . . f . .
                . . f f f f f f f f f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . f . . . f . . . f . .
                . . f . . . f . . . f . . f . . .
                . . f . . . f . . . f . f . . . .
                . . f . . . f . . . f f . . . . .
                . . f f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . f f f f f f f f f . .
                . . . . . f . . . . . . . f f . .
                . . . . f . . . . . . . f . f . .
                . . . f . . . . . . . f . . f . .
                . . f f f f f f f f f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . . . . . f . . . f . .
                . . f . . . f . . . f . . . f . .
                . . f . . . . . . . f . . f . . .
                . . f . . . . . . . f . f . . . .
                . . f . . . . . . . f f . . . . .
                . . f f f f f f f f f . . . . . .
            `,
            img`
                .................
                .................
                .................
                .................
                ......fffffffff..
                .....f.......ff..
                ....f.......f.f..
                ...f.......f..f..
                ..fffffffff...f..
                ..f.......f...f..
                ..f.......f...f..
                ..f.......f...f..
                ..f...f...f...f..
                ..f.......f..f...
                ..f.......f.f....
                ..f.......ff.....
                ..f...fffff......
                ..f...f..f.......
                ..f...f.f........
                ..f...ff.........
                ..fffff..........
            `,
            img`
                .................
                .................
                .................
                .................
                ......fffffffff..
                .....f.......ff..
                ....f.......f.f..
                ...f.......f..f..
                ..fffffffff...f..
                ..f.......f...f..
                ..f.......f...f..
                ..f.......f...f..
                ..f...f...f...f..
                ..f.......f...f..
                ..f.......f...f..
                ..f.......f...f..
                ..fffff...f...f..
                ......f...f..f...
                ......f...f.f....
                ......f...ff.....
                ......fffff......
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . f f f f . f f f f . .
                . . . . . f . . f . f . . f f . .
                . . . . f . . f . f . . f . f . .
                . . . f . . f . f . . f . . f . .
                . . f f f f . f f f f . . . f . .
                . . f . . . f . . . f . . f . . .
                . . f . . . . . . . f . f . . . .
                . . f . . . . . . . f f . . . . .
                . . f . . . f f f f f . . . . . .
                . . f . . . f . . f . . . . . . .
                . . f . . . f . f . . . . . . . .
                . . f . . . f f . . . . . . . . .
                . . f f f f f . . . . . . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . f f f f f f f f f . .
                . . . . . f . . . . . . . f f . .
                . . . . f . . . . . . . f . f . .
                . . . f . . . . . . . f . . f . .
                . . f f f f f f f f f . . f . . .
                . . f . . . . . . . f . f . f . .
                . . f . . . f . . . f f . f f . .
                . . f . . . . f . . f . f . f . .
                . . . f f . . . f f . f . . f . .
                . . f . . f . . . . f . . f . . .
                . . f . . . f . . . f . f . . . .
                . . f . . . . . . . f f . . . . .
                . . f f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . . . f f f f f . . . .
                . . . . . . . f . . . f f . . . .
                . . . . f f f . . . f . f f f f f
                . . . f . f . . . f . f . . . f f
                . . f . f f f f f . f . . . f . f
                . f . . f . . . f f . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . . . . . . . f . f f f
                f . . . . . . . . . . . f f . f f
                f f f f f . . . f f f f f . f . f
                . . . . f . . . f . . . . f . . f
                . . . . f . . . f f f f f . . . f
                . . . . f . . . . . . . f . . f .
                . . . . f . . . . . . . f . f . .
                . . . . f . . . . . . . f f . . .
                . . . . f f f f f f f f f . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . f f f f f f f f f . .
                . . . . . f . . . f . . . f f . .
                . . . . f . . . f . . . f . f . .
                . . . f . . . f . . . f . . f . .
                . . f f f f f f f f f . . . f . .
                . . f . . . f . . . f . . . f . .
                . . f . . . f . . . f . . . f . .
                . . f . . . f . . . f . . . f . .
                . . f . . . f . . . f . . . f . .
                . . f . . . . . . . f . . f . . .
                . . f . . . . . . . f . f . . . .
                . . f . . . . . . . f f . . . . .
                . . f f f f f f f f f . . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . f f f f f f f f f . .
                . . . . . f . . . f . . . f f . .
                . . . . f . . . f . . . f . f . .
                . . . f . . . f . . . f . . f . .
                . . f f f f f f f f f . . . f . .
                . . f . . . f . . . f . . f . . .
                . . f . . . f . . . f . f . . . .
                . . f . . . f . . . f f . . . . .
                . . f . . . f . . . f . . . . . .
                . . . f . . . . . f . . . . . . .
                . . . . f . . . f . . . . . . . .
                . . . . . f . f . . . . . . . . .
                . . . . . . f . . . . . . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . f f f f f . . . f f f f f
                . . . f . . . f f . . f . . . f f
                . . f . . . f . f . f . . . f . f
                . f . . . f . . f f . . . f . . f
                f f f f f . . . f f f f f . . . f
                f . . . f . . f f . . . f . . . f
                f . . . f . f . f . . . f . . . f
                f . . . f f . f f . . . f . . . f
                f . . . f . . . f . . . f . . . f
                f . . . . . . . . . . . f . . f .
                f . . . . . f . . . . . f . f . .
                f . . . . f . f . . . . f f . . .
                f f f f f . . . f f f f f . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . f f f . . . f f f . .
                . . . . . f . f . f . f . f f . .
                . . . . f . f . . . f . f . f . .
                . . . f . f . . . f . f . f . . .
                . . f f f . . . f f f . f . . . .
                . . f . . f . f . . f f . f . . .
                . . f . . . f . . . f . . . f . .
                . . . f . . . . . f . . . f f . .
                . . . . f . . . f . . . f . f . .
                . . . f . . . . . f . f . f . . .
                . . f . . . f . . . f . f . . . .
                . . f . . f . f . . f f . . . . .
                . . f f f . . . f f f . . . . . .
            `,
            img`
                .................
                .................
                .................
                .................
                ......fffffffff..
                .....f...f...ff..
                ....f...f...f.f..
                ...f...f...f..f..
                ..fffffffff...f..
                ..f...f...f...f..
                ..f...f...f...f..
                ..f...f...f...f..
                ..f...f...f...f..
                ...f......f...f..
                ....f.....f...f..
                .....f....f...f..
                ......f...f...f..
                ......f...f..f...
                ......f...f.f....
                ......f...ff.....
                ......fffff......
            `,
            img`
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . .
                . . . . . f f f f f f f f f f . .
                . . . . f . . . . . . . . f f . .
                . . . f . . . . . . . . f . f . .
                . . f . . . . . . . . f . . f . .
                . f f f f f f f f f f . . . f . .
                . f . . . . . . . . f . . f . . .
                . f . . . . . . . . f . f . f . .
                . . f f f f f . . . f f . f f . .
                . f f . . . . . . f f . f . f . .
                . f . . . f f f f f . f . f . . .
                . f . . . . . . . . f . f . . . .
                . f . . . . . . . . f f . . . . .
                . f f f f f f f f f f . . . . . .
            `,
        ]
        } else {
            if (!AllFonts[f]) AllFonts[f] = [];
            for (let i = 0; i < 73; i++) {
                if (AllFonts[f][i] == undefined) {
                    AllFonts[f][i] = img`
                . . f f f . .
                . f f . . f .
                f f f f . . f
                f . f f f . f
                f . . f f f f
                . f . . f f .
                . . f f f . .
            `;
                }
            }
           letters = AllFonts[f]
        }//else if (f == 3) {

        //}
    }
    /*function GETINDEX(MyText: string): number {
        let CodeIndex = 0
        let INDEX = 0
        let CurrentLetter = ""
        for (let index = 0; index <= 0; index++) {
        CodeIndex = MyText.charCodeAt(index)
        if (CodeIndex >= 65 && CodeIndex <= 90) {
            INDEX = MyText.charCodeAt(index) - 65
        } else if (CodeIndex >= 97 && CodeIndex <= 122) {
            INDEX = MyText.charCodeAt(index) - 67
        }
        CurrentLetter = MyText.charAt(index)
         if (CurrentLetter == ".") {
            INDEX = 26
        } else if (CurrentLetter == "!") {
            INDEX = 27
        } else if (CurrentLetter == "#") {
            INDEX = 28
        } else if (CurrentLetter == "…") {
            INDEX = 26
        } else if (CurrentLetter == "§") {
            INDEX = 29
        } else if (CurrentLetter == "?") {
            INDEX = 56
        } else if (CurrentLetter == ":") {
            INDEX = 57
        } else if (CurrentLetter == "1") {
            INDEX = 58
        } else if (CurrentLetter == "2") {
            INDEX = 59
        } else if (CurrentLetter == "3") {
            INDEX = 60
        } else if (CurrentLetter == "4") {
            INDEX = 61
        } else if (CurrentLetter == "5") {
            INDEX = 62
        } else if (CurrentLetter == "6") {
            INDEX = 63
        } else if (CurrentLetter == "7") {
            INDEX = 64
        } else if (CurrentLetter == "8") {
            INDEX = 65
        } else if (CurrentLetter == "9") {
            INDEX = 66
        } else if (CurrentLetter == "0") {
            INDEX = 67
        } else if (CurrentLetter == "+") {
            INDEX = 68
        } else if (CurrentLetter == "-") {
            INDEX = 69
        } else if (CurrentLetter == "*") {
            INDEX = 70
        } else if (CurrentLetter == "÷") {
            INDEX = 71
        } else if (CurrentLetter == "=") {
            INDEX = 72
        } else if (CurrentLetter == ",") {
            INDEX = 73
        }
        }
        return INDEX
    }
    */
    //%blockId=Emotion_Types 
    //%block="$kind"
    //%kindNamespace=EmotionTypes
    //%kindMemberName=kind
    //%shim=KIND_GET
    //%blockHidden=1
    export function _EmotionTypes(Emotion: number): number {
        return Emotion;
    }
    //%block="Set Top Player Emotion Type to $f"
    //%f.shadow="Emotion_Types"
    //%group="Emotion Types"
    export function SetPlayerEmotionTypeTo(f: number): void {
        TopPalyerEmotion = f
    }
    //%block="Set Bottom Player Emotion Type to $f"
    //%f.shadow="Emotion_Types"
    //%group="Emotion Types"
    export function SetPlayerEmotionTypeTo2(f: number): void {
        BottomPlayerEmotion = f
    }
    //%block="If Top Emotion is equal to $f"
    //%f.shadow="Emotion_Types"
    //%group="Emotion Types"
    export function IfPlayerEmotion(f: number): boolean {
        if (TopPalyerEmotion == f) {
            return true
        }
        return false
    }
    //%block="If Bottom Emotion is equal to $f"
    //%f.shadow="Emotion_Types"
    //%group="Emotion Types"
    export function IfPlayerEmotion2(f: number): boolean {
        if (TopPalyerEmotion == f) {
            return true
        }
        return false
    }
    //%block="Change Top Emotion to $f when $s typed"
    //%f.shadow="Emotion_Types"
    //%group="Emotion Types"
    export function ChangeEmotionToWhen(f: number,s:string): void {
         TopText = s
         TopChangeEmotion = f
    }
    //%block="Change Bottom Emotion to $f when $s typed"
    //%f.shadow="Emotion_Types"
    //%group="Emotion Types"
    export function ChangeEmotionToWhen2(f: number, s: string): void {
        BottomText = s
        BottomChangeEmotion = f
    }
}
