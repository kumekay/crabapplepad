// Cherry MX Keyboard and Kailh Choc v1 Keyswitch Switch PCB Cutout Keycap 1.00u
// Manually combined from: https://github.com/kiswitch/kiswitch

module.exports = {
  params: {
    designator: 'S',
    conn_pad: true,
    from: undefined,
    to: undefined
  },
  body: p => {
    let connections = !p.conn_pad ? "" : `
      (pad "1" smd custom (at -3.251475 0  ${p.r}) (size 0.2 0.2) (layers "B.Cu")
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_arc (start -0.130234 -1.174804) (mid 0 0) (end -0.333676 1.133924) (width 0.3))
        (gr_line (start -0.333676 1.133924) (end -1.748555 3.822143) (width 0.3))
        (gr_line (start -0.558525 -2.517841) (end -0.130234 -1.174804) (width 0.3))
      )
      ${p.from.str}
      (uuid "0d1fb4ee-f613-4d1f-84cf-17d1d9b9fe03")
    )

      (pad "2" smd custom (at 3.374367 0 ${p.r}) (size 0.2 0.2) (layers "B.Cu")
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_arc (start -0.006705 -1.077393) (mid 0 0) (end -0.374367 1.010282) (width 0.3))
        (gr_line (start -0.374367 1.010282) (end -3.296325 5.935869) (width 0.3))
        (gr_line (start -0.756325 -5.044131) (end -0.006705 -1.077393) (width 0.3))
      )
      ${p.to.str}
      (uuid "9aaf8afd-e4b1-4690-b910-54126c755d51")
    )`

    return `
(footprint "SW_Cherry_MX_Choc_PCB_1.00u" (version 20240108) (generator "pcbnew") (generator_version "8.0")
  ${p.at}
  (layer "F.Cu")
  (descr "Cherry MX and Kailh Choc v1 keyswitch PCB Mount Keycap 1.00u")
  (tags "Cherry MX Keyboard and Kailh Choc v1 Keyswitch Switch PCB Cutout Keycap 1.00u")
  (property "Reference" ${p.ref} (at 0 -8 0) (layer "F.SilkS")(uuid "24ca5f61-035c-4e0d-8b55-2197cff68f82")
     ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (property "Value" "SW_MX_Choc_PCB_1.00u" (at 0 8 0) (layer "F.Fab")(hide yes)(uuid "a9215d1d-341e-4612-acf3-2834d92f1578")
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (attr through_hole)
  (fp_line (start -7.1 -7.1) (end -7.1 7.1)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "8ee0b565-9cab-4824-8b16-e726ce6b5fb7"))
  (fp_line (start -7.1 7.1) (end 7.1 7.1)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "885c4248-a9d7-4dae-a4b9-cef97b0fd78d"))
  (fp_line (start 7.1 -7.1) (end -7.1 -7.1)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "655b23e7-b2db-4b99-83c7-66c433fd2f67"))
  (fp_line (start 7.1 7.1) (end 7.1 -7.1)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "097a6206-5f6f-4c74-b1d1-89306c0de5b7"))
  (fp_line (start -9.525 -9.525) (end -9.525 9.525)
    (stroke (width 0.1) (type solid)) (layer "Dwgs.User")(uuid "f6757d2f-3cc0-46fc-8ef0-0b6d836ef02f"))
  (fp_line (start -9.525 9.525) (end 9.525 9.525)
    (stroke (width 0.1) (type solid)) (layer "Dwgs.User")(uuid "575e7886-5bcd-41d1-af25-7a8ac74982f1"))
  (fp_line (start 9.525 -9.525) (end -9.525 -9.525)
    (stroke (width 0.1) (type solid)) (layer "Dwgs.User")(uuid "13a675e5-e5df-4d6f-84f5-9630d392f74f"))
  (fp_line (start 9.525 9.525) (end 9.525 -9.525)
    (stroke (width 0.1) (type solid)) (layer "Dwgs.User")(uuid "516506c4-2054-43c1-ad5f-06e5c9b6c62c"))
  (fp_line (start -7 -7) (end -7 7)
    (stroke (width 0.1) (type solid)) (layer "Eco1.User")(uuid "782dfc90-1e58-4864-b4e5-01df9fbf3219"))
  (fp_line (start -7 7) (end 7 7)
    (stroke (width 0.1) (type solid)) (layer "Eco1.User")(uuid "16814408-307e-46e0-8862-35f241f7be01"))
  (fp_line (start 7 -7) (end -7 -7)
    (stroke (width 0.1) (type solid)) (layer "Eco1.User")(uuid "d61b59bd-901c-47b2-95b2-de83101fee35"))
  (fp_line (start 7 7) (end 7 -7)
    (stroke (width 0.1) (type solid)) (layer "Eco1.User")(uuid "a78d7442-9e7b-4161-9b39-6bd43b690335"))
  (fp_line (start -7.25 -7.25) (end -7.25 7.25)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "90e296f0-2190-40ee-ac28-2dcd2c2a9be0"))
  (fp_line (start -7.25 7.25) (end 7.25 7.25)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "879cf19e-11ce-4066-9523-bcf4165d8128"))
  (fp_line (start 7.25 -7.25) (end -7.25 -7.25)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "315e8297-6146-401e-8908-a83e404b1683"))
  (fp_line (start 7.25 7.25) (end 7.25 -7.25)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "7fee7ac6-4fa6-471d-a26c-f93b9442063a"))
  (fp_line (start -7 -7) (end -7 7)
    (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "3fca883d-15c3-4cac-a944-218c07367354"))
  (fp_line (start -7 7) (end 7 7)
    (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "2dbc1e4f-dfed-4f1d-a182-1dd0bc3a205d"))
  (fp_line (start 7 -7) (end -7 -7)
    (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "232db201-45bc-46b7-a825-cc6b44b8081c"))
  (fp_line (start 7 7) (end 7 -7)
    (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "227ee758-8b9c-4ee8-9927-7f369ff19628"))
  (pad "" np_thru_hole circle (at -5.5 0 180) (size 1.9 1.9) (drill 1.9) (layers "*.Cu" "*.Mask")
(uuid "60421878-12d2-4be1-ab99-c34f1d6cbf93")
  )
  (pad "" np_thru_hole circle (at -5.08 0) (size 1.75 1.75) (drill 1.75) (layers "*.Cu" "*.Mask")
(uuid "27734d36-c0ee-4a03-a003-4d603281850e")
  )
  (pad "" np_thru_hole circle (at 0 0) (size 4 4) (drill 4) (layers "*.Cu" "*.Mask")
(uuid "31e7befe-235b-4101-b0ab-2a2fc44054cc")
  )
  (pad "" np_thru_hole circle (at 5.08 0) (size 1.75 1.75) (drill 1.75) (layers "*.Cu" "*.Mask")
(uuid "17342646-ba0d-4203-b09d-2eebf445887f")
  )
  (pad "" np_thru_hole circle (at 5.5 0 180) (size 1.9 1.9) (drill 1.9) (layers "*.Cu" "*.Mask")
(uuid "72abedcd-d27a-4d12-be9a-25a58919c9d5")
  )
  (pad "1" thru_hole circle (at -5 3.8 180) (size 2.2 2.2) (drill 1.2) (layers "*.Cu" "*.Mask")(remove_unused_layers no)
  ${p.from.str}
(uuid "a258088b-354a-4bc4-9b26-102d1f988efc")
  )
  (pad "1" thru_hole circle (at -3.81 -2.54) (size 2.5 2.5) (drill 1.5) (layers "*.Cu" "*.Mask")(remove_unused_layers no)
  ${p.from.str}
(uuid "e47739ec-b458-4d18-816a-4ac884d99db4")
  )
  (pad "2" thru_hole circle (at 0 5.9 180) (size 2.2 2.2) (drill 1.2) (layers "*.Cu" "*.Mask")(remove_unused_layers no)
  ${p.to.str}
(uuid "a82c1fd7-778f-43bd-b9ef-82420163dada")
  )
  (pad "2" thru_hole circle (at 2.54 -5.08) (size 2.5 2.5) (drill 1.5) (layers "*.Cu" "*.Mask")(remove_unused_layers no)
  ${p.to.str}
(uuid "c204a136-7128-4c85-a66f-281343334e03")
  )
  ${connections}
)`
  }
}
