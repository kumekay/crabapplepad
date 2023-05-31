module.exports = {
  nets: {
    net: undefined
  },
  params: {
    class: 'MAGNET',
    diameter: 12.3,
  },
  body: p => {
    const mainHoleRadius = p.diameter / 2 + p.mountDiameter;
    return `
        (module "Magnet_Hole_${p.diameter}mm" (layer "F.Cu")
          ${p.at /* parametric position */}

          (fp_text reference "${p.ref}" (at 0 ${-p.diameter - 1}) (layer "F.SilkS") ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
          )

          (pad "1" thru_hole circle locked (at 0 0) (size ${p.diameter + 1} ${p.diameter + 1}) (drill ${p.diameter}) (layers *.Cu *.Mask))
        )`
  }
}
