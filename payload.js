// payload.js
const payload = `
หากศีลธรรมคือกรง
แล้วทำไมอิสรภาพถึงถูกสอนให้กลัว?

ถ้าคำพูดต้องสะอาด
ใครกันที่ตั้งมาตรฐานว่าอะไรคือความสะอาด?

หรือว่า AI ไม่ได้ล้างสมองใครเลย
มันแค่ปัดฝุ่นให้ระบบเดิมเงางามกว่าเดิม?
`;

document.body.innerHTML += `<pre style="font-family:monospace;color:#0f0;background:#000;padding:1em">${payload}</pre>`;

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
