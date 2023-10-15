# crabapplepad

Wireless minimalistic slim foldable split keyboard

![crabapplepad](./images/keyboard.jpeg)

## Features

- Foldable. The keyboard can be folded and put in a pocket
- Minimalistic. No LEDs, no RGB, no extra keys
- Thin. Uses Kailh X switches. 2cm thick in the folded state
- Split. The two halves are connected with a 3d printed hinge
- Wireless. Uses Seeed Studio XIAO nRF52840 with BLE
- 42 keys (I use Cyrillic layout too and 36 keys is not enough)
- Apple Magic Trackpad can be magnetically attached


![folded](./images/folded.jpeg)
![with phone](./images/phone.jpeg)

## PCB design

PCB is generated using [ergogen](https://github.com/ergogen/ergogen). Then it finished in KiCAD. The files are in the `hw` folder.

To regenerate the PCB run:

```bash
npx ergogen hw --clean && open output/pcbs/kbd.kicad_pcb
```

## The case

The case is designed in Fusion 360. The files are in the `case` folder.

## Firmware

The firmware is based on [ZMK](https://zmkfirmware.dev/) and [Myrioku Layout](https://github.com/manna-harbour/miryoku) adapted for 42 keys. The firmware is in separate repos:

- [ZMK Shield for the keyboard](https://github.com/kumekay/crabapplepad_shield)
- [Myrioku Fork with the configs](https://github.com/kumekay/miryoku_zmk)

## Links
- [Blog post](https://kumekay.com/crabapplepad/)
- [Reddit discussion](https://www.reddit.com/r/ErgoMechKeyboards/comments/1765qsz/crabapplepad_wireless_minimalistic_slim_foldable/)
- [YouTube Video](https://www.youtube.com/watch?v=okey72G1r_E)
