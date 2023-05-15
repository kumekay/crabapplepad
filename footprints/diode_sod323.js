module.exports = {
    params: {
        designator: 'D',
        from: undefined,
        to: undefined
    },
    body: p => `
    (footprint "Diode_SMD:D_SOD-323_HandSoldering" (layer "B.Cu")
    ${p.at}
    (descr "SOD-323")
    (tags "SOD-323")
    (attr smd)
    (fp_text reference "${p.ref}" (at 0 1.85) (layer "B.SilkS") ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
    )
    (fp_text value "" (at 0.1 -1.9) (layer "B.Fab")
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "\${REFERENCE}" (at 0 1.85) (layer "B.Fab")
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
    )
    (fp_line (start -2.01 -0.85) (end 1.25 -0.85)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    (fp_line (start -2.01 0.85) (end -2.01 -0.85)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    (fp_line (start -2.01 0.85) (end 1.25 0.85)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    (fp_line (start -2 -0.95) (end 2 -0.95)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start -2 0.95) (end -2 -0.95)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start -2 0.95) (end 2 0.95)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start 2 0.95) (end 2 -0.95)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start -0.9 -0.7) (end -0.9 0.7)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start -0.9 0.7) (end 0.9 0.7)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start -0.3 0) (end -0.5 0)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start -0.3 0) (end 0.2 0.35)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start -0.3 0.35) (end -0.3 -0.35)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start 0.2 -0.35) (end -0.3 0)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start 0.2 0) (end 0.45 0)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start 0.2 0.35) (end 0.2 -0.35)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start 0.9 -0.7) (end -0.9 -0.7)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start 0.9 0.7) (end 0.9 -0.7)
    (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (pad "1" smd roundrect (at -1.25 0 ${p.rot}) (size 1 1) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) ${p.to.str})
    (pad "2" smd roundrect (at 1.25 0 ${p.rot}) (size 1 1) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) ${p.from.str})
    (model "\${KICAD6_3DMODEL_DIR}/Diode_SMD.3dshapes/D_SOD-323.wrl"
    ))
`
}



