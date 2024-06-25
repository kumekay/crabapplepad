module.exports = {
    params: {
        designator: 'D',
        from: undefined,
        to: undefined,
        side: 'B'
    },
    body: p => `
    (footprint "Diode_SMD:D_SOD-323_HandSoldering" (layer "${p.side}.Cu")
    ${p.at}
    (descr "SOD-323")
    (tags "SOD-323")
    (attr smd)
    (fp_text reference "${p.ref}" (at 0 1.85 ${p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)) (justify ${p.side == 'B' ? 'mirror' : ''}))
    )
    (fp_text user "\${REFERENCE}" (at 0 1.85 ${p.rot}) (layer "${p.side}.Fab")
        (effects (font (size 1 1) (thickness 0.15)) (justify  ${p.side == 'B' ? 'mirror' : ''}))
    )
    (fp_line (start -2.01 -0.85) (end 1.25 -0.85)
    (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
    (fp_line (start -2.01 0.85) (end -2.01 -0.85)
    (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
    (fp_line (start -2.01 0.85) (end 1.25 0.85)
    (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
    (fp_line (start -2 -0.95) (end 2 -0.95)
    (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
    (fp_line (start -2 0.95) (end -2 -0.95)
    (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
    (fp_line (start -2 0.95) (end 2 0.95)
    (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
    (fp_line (start 2 0.95) (end 2 -0.95)
    (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
    (fp_line (start -0.9 -0.7) (end -0.9 0.7)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (fp_line (start -0.9 0.7) (end 0.9 0.7)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (fp_line (start -0.3 0) (end -0.5 0)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (fp_line (start -0.3 0) (end 0.2 0.35)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (fp_line (start -0.3 0.35) (end -0.3 -0.35)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (fp_line (start 0.2 -0.35) (end -0.3 0)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (fp_line (start 0.2 0) (end 0.45 0)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (fp_line (start 0.2 0.35) (end 0.2 -0.35)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (fp_line (start 0.9 -0.7) (end -0.9 -0.7)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (fp_line (start 0.9 0.7) (end 0.9 -0.7)
    (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
    (pad "1" smd roundrect (at -1.25 0 ${p.rot}) (size 1 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.to.str})
    (pad "2" smd roundrect (at 1.25 0 ${p.rot}) (size 1 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.from.str})
    (model "\${KICAD6_3DMODEL_DIR}/Diode_SMD.3dshapes/D_SOD-323.wrl"
    ))
`
}



