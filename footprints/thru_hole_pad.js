
module.exports = {
  params: {
    net: undefined,
  },
  body: p => `
      (module PAD-1.0922mm (layer F.Cu) (tedit 591DBFB0)
      ${p.at /* parametric position */}

      (pad 1 thru_hole circle (at 0 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net ? p.net.str : ''})
      )
    `
}
