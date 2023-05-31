// Kailh-PG1425-X
// https://www.kailhswitch.com/mechanical-keyboard-switches/low-profile-key-switches/low-profile-switch-for-notebook.html


module.exports = {
    params: {
        designator: 'S',
        from: undefined,
        to: undefined
    },
    body: p => `
    (footprint "Kailh-PG1425-X-Switch" (layer "F.Cu")
        ${p.at}
        (attr through_hole)
        (fp_text reference "${p.ref}" (at 0 10.34) (layer "F.SilkS") ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value "Kailh-PG1425-X-Switch" (at 0 -10.16) (layer "F.Fab")
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_line (start -7.400008 -6.960164) (end -7.400008 7.039836)
        (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
        (fp_line (start -7.400008 7.039836) (end 7.399992 7.039836)
        (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
        (fp_line (start 7.399992 -6.960164) (end -7.400008 -6.960164)
        (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
        (fp_line (start 7.399992 7.039836) (end 7.399992 -6.960164)
        (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
        (fp_line (start -7.4 -6.96) (end 7.4 -6.96)
        (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
        (fp_line (start -7.4 7.04) (end -7.4 -6.96)
        (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
        (fp_line (start 7.4 -6.96) (end 7.4 7.04)
        (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
        (fp_line (start 7.4 7.04) (end -7.4 7.04)
        (stroke (width 0.15) (type solid)) (layer "F.SilkS"))
        (fp_line (start -8.255 -8.215) (end 8.255 -8.215)
        (stroke (width 0.12) (type solid)) (layer "F.CrtYd"))
        (fp_line (start -8.255 8.295) (end -8.255 -8.215)
        (stroke (width 0.12) (type solid)) (layer "F.CrtYd"))
        (fp_line (start 8.255 -8.215) (end 8.255 8.295)
        (stroke (width 0.12) (type solid)) (layer "F.CrtYd"))
        (fp_line (start 8.255 8.295) (end -8.255 8.295)
        (stroke (width 0.12) (type solid)) (layer "F.CrtYd"))
        (fp_line (start -2.550008 2.989836) (end 2.549992 2.989836)
        (stroke (width 0.15) (type solid)) (layer "B.Fab"))
        (fp_line (start -2.550008 6.589836) (end -2.550008 2.989836)
        (stroke (width 0.15) (type solid)) (layer "B.Fab"))
        (fp_line (start 2.549992 2.989836) (end 2.549992 6.589836)
        (stroke (width 0.15) (type solid)) (layer "B.Fab"))
        (fp_line (start 2.549992 6.589836) (end -2.550008 6.589836)
        (stroke (width 0.15) (type solid)) (layer "B.Fab"))
        (fp_line (start -9.525 -9.485) (end 9.525 -9.485)
        (stroke (width 0.15) (type solid)) (layer "F.Fab"))
        (fp_line (start -9.525 9.565) (end -9.525 -9.485)
        (stroke (width 0.15) (type solid)) (layer "F.Fab"))
        (fp_line (start -2.55 2.99) (end -2.55 6.59)
        (stroke (width 0.15) (type solid)) (layer "F.Fab"))
        (fp_line (start -2.55 6.59) (end 2.55 6.59)
        (stroke (width 0.15) (type solid)) (layer "F.Fab"))
        (fp_line (start 2.55 2.99) (end -2.55 2.99)
        (stroke (width 0.15) (type solid)) (layer "F.Fab"))
        (fp_line (start 2.55 6.59) (end 2.55 2.99)
        (stroke (width 0.15) (type solid)) (layer "F.Fab"))
        (fp_line (start 9.525 -9.485) (end 9.525 9.565)
        (stroke (width 0.15) (type solid)) (layer "F.Fab"))
        (fp_line (start 9.525 9.565) (end -9.525 9.565)
        (stroke (width 0.15) (type solid)) (layer "F.Fab"))
        (pad "" np_thru_hole circle (at -5.500008 -5.460164 180) (size 1.3 1.3) (drill 1.3) (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole oval (at -2.4 0.94) (size 0.3 4.1) (drill oval 0.3 4.1) (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole oval (at -1.55 0.94) (size 2 4.1) (drill oval 2 4.1) (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole oval (at 0 -0.96) (size 5.1 0.3) (drill oval 5.1 0.3) (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole oval (at 0 0.94) (size 5.1 4.1) (drill oval 5.1 4.1) (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole oval (at 0 2.84) (size 5.1 0.3) (drill oval 5.1 0.3) (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole oval (at 1.55 0.94) (size 2 4.1) (drill oval 2 4.1) (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole oval (at 2.4 0.94) (size 0.3 4.1) (drill oval 0.3 4.1) (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole circle (at 5.499992 5.539836 180) (size 1.3 1.3) (drill 1.3) (layers "*.Cu" "*.Mask"))
        (pad "1" thru_hole circle (at -3.400008 -2.860164 180) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.from.str})
        (pad "2" thru_hole circle (at -3.400008 2.039836 180) (size 1.4 1.4) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.to.str})
    )
    `
}