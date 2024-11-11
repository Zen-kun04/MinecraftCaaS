import {argv} from "process";

const args = argv.slice(2)

if (!args.length) {
    console.log(`
MinecraftCaaS Help

    Normal use:
        minecraftcaas .                                 Convert the server of the selected directory into a container.
    
    Options:
        --auto-run, -ar                                 Automatically run the container after the creation.
        --limit-cpu <MAX-CPU-%>, -lc <MAX-CPU-%>        Set a CPU usage limit.

`)
}