const params = new URLSearchParams(window.location.search);
const a = params.get("a");
if (a) {
    const titleName = document.getElementById('title-name');
    if (titleName) titleName.innerHTML = 'Privacy Policy for Inventory Manager QR'
}
