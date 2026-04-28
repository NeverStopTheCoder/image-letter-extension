// Add your code here

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
let Press_A = 0
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
let textCancelled = false
let dialogRunId = 0
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
        3 3 a
        f f 3
        f f 3
        3 3 a
        3 a f
        f f f
        3 a f
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
    `
]
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
    equals
}
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
`, SpriteKind.Player)
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
`, SpriteKind.Player)
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
        image3 = sprites.create(img`
            3 3 3 3 3 a f f
            f 3 3 3 3 a f f
            f 3 3 a f 3 a f
            f 3 3 a f 3 a f
            f 3 3 a f 3 a f
            f 3 3 3 3 3 a f
            3 a f f f f 3 a
            3 a f f f f 3 a
        `, SpriteKind.Player)
        image3.x = 150
        image3.y = 57
        Press_A = 1
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
            image3.setImage(img`
                3 3 3 3 3 a f f
                f 3 3 3 3 a f f
                f 3 3 a f 3 a f
                f 3 3 a f 3 a f
                f 3 3 a f 3 a f
                f 3 3 3 3 3 a f
                3 a f f f f 3 a
                3 a f f f f 3 a
            `)
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
//%block="Set Letter in Alphabet at $L to $I"
//%I.shadow=screen_image_picker
//% I.shadow=letterNumber__image
//%group="Change Letter (Starts at 0)"
export function setLetterImageTo(L: number,I: Image): void {
   letters[L] = I
}
//%block="Letter List $e"
//%group="Letter List (to help with what letter is what number)"
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
    //%block="set Dialogue to $MyText at x $x and y $y with wait $b and wait time be $n || and Spacing $s and Space Spacing to $s2 and length $l and play sound $s3 and Play $s4"
    //%n.shadow=timePicker
    //%s3.shadow=soundExpression_createSoundEffect
    //%s4.shadow=music_song_field_editor
    export function textwxyawt(MyText: string, x: number, y: number,n: number,b: boolean,s?: number,s2?: number,l?: number,s3?:music.SoundEffect,s4?:music.Playable): void {
        textCancelled = false;
        let myRunId = ++dialogRunId;
        if (I != 4) {
            I += 1
            y = y
            X = x
            for (let index = 0; index <= MyText.length - 1; index++) {
                if (textCancelled || myRunId !== dialogRunId)
                    return;
                if (L > 0 && L % l == 0) {
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
                
                if (s3) {
                music.play(s3, music.PlaybackMode.InBackground)
                } if (s4) {
                music.play(s4,music.PlaybackMode.InBackground)
                }
            }
        }
    }
    //%block="Set Letters in Alphabet at $n to $I"
    //%I.shadow=screen_image_picker
    //% I.shadow=letterNumber__image
    //%group="Change Letter (Starts at 0)"
    //% I.shadow="lists_create_with"
   //% I.defl="screen_image_picker"
    export function setLetterImageATo(n: number[], I: Image[]): void {
        for (let i = 0; i < n.length; i++) {
            letters[n[i]] = I[i]
        }
    }
    
}
