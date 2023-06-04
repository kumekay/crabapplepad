
module.exports = {
  params: {
    net: undefined,
    diameter: 1,
  },
  body: p => `
      (module PAD-${p.diameter}mm (layer F.Cu) (tedit 591DBFB0)
      ${p.at /* parametric position */}
      ${'' /* footprint reference */}
      (fp_text reference REF** (at 0 ${2.0 * p.diameter + 0.4}) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value PAD-${p.diameter}mm (at 0 ${-2.0 * p.diameter - 0.4}) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

      ${'' /* via */}
      (pad 1 thru_hole circle (at 0 0) (size ${2.0 * p.diameter} ${2.0 * p.diameter}) (drill ${p.diameter}) (layers *.Cu) ${p.net ? p.net.str : ''})
      )
    `
}
