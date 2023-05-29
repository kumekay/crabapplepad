module.exports = {
    nets: {
        net: undefined
    },
    params: {
        class: 'MAGNET',
        diameter: 12.3,
        mountDiameter: 2.2,
    },
    body: p => {
        const mainHoleRadius = p.diameter / 2 + p.mountDiameter;
        const radStep = Math.PI / 4;
        let pads = '';
        for (let i = 1; i < 5; i++) {
            let x = mainHoleRadius * Math.cos(radStep * (1 + 2 * i));
            let y = mainHoleRadius * Math.sin(radStep * (1 + 2 * i));
            pads += `(pad "1" thru_hole circle locked (at ${x} ${y}) (size ${p.mountDiameter * 1.2} ${p.mountDiameter * 1.2}) (drill ${p.mountDiameter}) (layers *.Cu *.Mask))\n`;
        }
        return `
        (module "Magnet_Hole_${p.diameter}mm" (layer "F.Cu")
          ${p.at /* parametric position */}

          (fp_text reference "${p.ref}" (at 0 ${-p.diameter - 1}) (layer "F.SilkS") ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
          )

          (pad "1" thru_hole circle locked (at 0 0) (size ${p.diameter + 1} ${p.diameter + 1}) (drill ${p.diameter}) (layers *.Cu *.Mask))
          ${pads}
        )`
    }
}
