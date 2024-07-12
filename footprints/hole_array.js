// Hole array, can be used for mouse bites, etc.

module.exports = {
  params: {
    diameter: 0.7,
    x_count: 1,
    x_spacing: 1,
    y_count: 1,
    y_spacing: 1,
  },
  body: p => {
    let holes = '';
    for (let x = 0; x < p.x_count; x++) {
      for (let y = 0; y < p.y_count; y++) {
        holes += `(pad "" thru_hole circle locked (at ${x * p.x_spacing} ${y * p.y_spacing}) (size ${p.diameter} ${p.diameter}) (drill ${p.diameter}) (layers *.Cu *.Mask))\n`;
      }
    }

    return `
      (module "Hole_Array_${p.x_count}x${p.y_count}_${p.diameter}mm" (layer "F.Cu")
        ${p.at}
        ${holes}
      )`
  }
}
