const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item
    div.style.padding = "5px"
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, _reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function main() {
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]

        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }

    }, 250);

    let text = ["Hacking Initialised",
        "Blocking Antivirus Software",
        "Scanning all your files",
        "Password files detected",
        "Confiscated files detected",
        "Connecting to remote server",
        "Copying files into remote server",
        "Throttling the CPU",
        "Uploading malware into the system",
        "Waiting for system repsonse",
        "Malware initializing",
        "Waiting for host server to connect",
        "Remote server initializing",
        "Uploading files",
        "Sending all files to server",
        "Data transferring",
        "Cleaning up"]

    for (const item of text) {
        await addItem(item)
    }

    await randomDelay()
    clearInterval(t)

    let finish = document.createElement("div")
    finish.innerHTML = "Data transfer completed."
    document.body.append(finish)
    finish.style.padding = "5px"
}

main()