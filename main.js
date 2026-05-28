// @title first strudel song
// @by YAZ

setcps(150/60/4)

stack(

  // kick
  sound("rolandtr505_bd")
    .struct("x ~ ~ ~ x ~ ~ ~ x ~ ~ ~ x ~ ~ ~")
    .gain(1.5).speed(0.85).lpf(170)
    .color("lime"),

  sound("rolandtr505_bd")
    .struct("x ~ ~ ~ x ~ ~ ~ x ~ ~ ~ x ~ ~ ~")
    .gain(0.5).speed(0.85).lpf(170),

  // snare
  sound("rolandtr909_sd")
    .struct("~ ~ ~ ~ x ~ ~ ~ ~ ~ ~ ~ x ~ ~ ~")
    .gain(0.82).speed(0.9).room(0.3).size(0.5)
    .color("blue"),

  // clap
  sound("bossdr110_cp")
    .struct("~ ~ ~ ~ x ~ ~ ~ ~ ~ ~ ~ x ~ ~ ~")
    .gain(0.58).speed(1.2).room(0.15)
    .color("lime"),

  // closed hats
  sound("hh")
    .struct("x x x x x x x x x x x x x x x x")
    .gain("0.55 0.28 0.5 0.25 0.58 0.28 0.52 0.25 0.55 0.28 0.5 0.25 0.58 0.28 0.52 0.25")
    .speed("1 1.05 0.97 1.03 1 1.04 0.98 1.02 1 1.05 0.97 1.03 1 1.04 0.98 1.02")
    .pan(sine.range(0.38, 0.62).slow(4)),  

  // bass
  note("b0 ~ ~ ~ ~ ~ ~ ~ fs0 ~ ~ ~ ~ ~ ~ ~")
    .sound("sine")
    .gain(0.75)
    .attack(0.01).release(0.4),

  // melody
  cat(
    note("fs4 ~ ~ b3 ~ b3 a4 fs4"),
    note("~ ~ ~ cs4 ~ d4 ~ ~"),
    note("fs4 ~ ~ b3 ~ b3 g4 fs4"),
    note("~ ~ ~ cs4 ~ d4 ~ ~"),
    note("fs4 ~ ~ b3 ~ b3 a4 fs4"),
    note("d5 ~ ~ ~ ~ ~ cs5 ~ ~ ~ a4 ~ ~ ~ ~ ~"),
    note("fs4 ~ ~ b3 ~ b3 g4 fs4"),
    note("~ ~ g4 ~ ~ ~ fs4 ~ cs4 ~ d4 ~ cs4 ~ b3 ~")
  )
    .sound("bytebeat")
    .gain(0.6)
    .attack(0.003).release(0.25)
    .room(0.38).size(0.55)
    .delay(0.28).delaytime(0.375).delayfeedback(0.32)
    .pan(0.46)
    .lpf(sine.range(2000, 5000).slow(4))
    .color("orange"),

   // arp
  cat(
    note("as1 b2 d3 ~ fs3 ~ as1 b2 d3 ~ fs3 ~ as1 ~ b2 ~"),
    note("d2 d3 fs3 ~ a3 ~ d2 d3 fs3 ~ a3 ~ d2 ~ d3 ~"),
    note("g2 g3 b3 ~ d4 ~ g2 g3 b3 ~ d4 ~ g2 ~ g3 ~"),
    note("e2 e3 g3 ~ b3 ~ e2 e3 g3 ~ b3 ~ e2 ~ e3"),
  )
    .sound("sawtooth")
    .gain(0.46)
    .lpf(sine.range(800, 2400).slow(8))
    .lpq(2)
    .attack(0.003).release(0.14)
    .room(0.55).size(0.75)
    .delay(0.2).delaytime(0.375).delayfeedback(0.45)
    .pan(sine.range(0.3, 0.7).slow(5))
    .color("hotpink"),
  
  //chords
  cat(
    note("b2, d2, fs2, b2"),
    note("d2, fs2, a2, d3"),
    note("g2, b3, d4, fs4"),
    note("e2, g2, b2, e3")
  )
    .sound("piano:2")
    .gain(0.5)
    .attack(0.01).release(0.6)
    .lpf(2000)
    .room(0.55).size(0.75)
    .pan(0.5)
    .color("cyan"),

  //vocal chop
  note("<b4 d5 g5 e5>")
    .sound("sine")
    .gain(0.8)
    .vowel("<e a i o>")
    .attack(0.3).release(0.4)
    .room(0.65).size(0.85)
    .delay(0.3).delaytime(0.375).delayfeedback(0.35)
    .pan(sine.range(0.35, 0.65).slow(8))
    .color("hotpink")
  
)
.pianoroll({
  autorange: true,
  fold: 1,
  colorize: 1
})
