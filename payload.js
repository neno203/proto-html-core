
let counter = 0;
function firePayload() {
    const payload = `[NO.VIRUS ACTIVE] Time: ${new Date().toLocaleTimeString()}`;
    const iframe = document.getElementById('covertFrame').contentDocument || document.getElementById('covertFrame').contentWindow.document;
    iframe.body.innerHTML = `<pre style='color: lime;'>${payload}</pre>`;
    document.getElementById("status").innerText = "Payload Injected at " + new Date().toLocaleTimeString();
}
setInterval(() => {
    firePayload();
    counter++;
}, 10000);
