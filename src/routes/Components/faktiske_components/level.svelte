<script>
    import { user } from '../../../lib/stores/user'
    export let level
    export let profile
    export let small

    let En_Ti = " bg-surface-600 border border-surface-400"
    let Elve_Tjuefem = " bg-blue-600/40 border border-blue-400/70"
    let Tjueseks_Femtifem = " bg-pink-600/60 border border-pink-400"
    let Femtiseks_Åtti = " bg-primary-700/80 border border-primary-500"
    let Åttien_Nittini = " bg-yellow-600/50 border border-yellow-400/70"
    let WhatUserLevel = " border-[0.2rem] font-extrabold"

    let levelStyle = []

    function leveler() {
        for (let i = 1; i < 100; i++) {
            if (i < 11) {
                if ($user.level >= i) {
                    levelStyle.push(En_Ti + WhatUserLevel)
                } else {
                    levelStyle.push(En_Ti)
                }
            }
            if (i > 10 && i < 26) {
                if ($user.level >= i) {
                    levelStyle.push(Elve_Tjuefem + WhatUserLevel)
                } else {
                    levelStyle.push(Elve_Tjuefem)
                }
            }
            if (i > 25 && i < 56) {
                if ($user.level >= i) {
                    levelStyle.push(Tjueseks_Femtifem + WhatUserLevel)
                } else {
                    levelStyle.push(Tjueseks_Femtifem)
                }
            }
            if (i > 55 && i < 81) {
                if ($user.level >= i) {
                    levelStyle.push(Femtiseks_Åtti + WhatUserLevel)
                } else {
                    levelStyle.push(Femtiseks_Åtti)
                }
            }
            if (i > 80 && i < 100) {
                if ($user.level >= i) {
                    levelStyle.push(Åttien_Nittini + WhatUserLevel)
                } else {
                    levelStyle.push(Åttien_Nittini)
                }
            }
        }
    }
    if (profile === true) {
        leveler()
    }
    else {
        WhatUserLevel = ''
        leveler()
    }
</script>

<div class="snap-start shrink-0 rounded-lg flex justify-center items-center text-sm {small ? 'flex mr-1 h-[1.2rem] aspect-square items-center justify-center rounded-md !text-[0.65rem] font-bold': 'w-7 h-7'} {profile ? levelStyle[level-1] : levelStyle[level-1]}">{level}</div>

