<script lang="ts">
    import { onMount } from "svelte"
    import type { PageServerData } from "./$types"

    export let data: PageServerData | null

    onMount(() => {
        console.log(JSON.stringify(data?.questions))
    })
</script>

<div>Hello World</div>
