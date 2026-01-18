async function loadFile() {
    const fileName = document.getElementById('fileSelector').value;
    const displayArea = document.getElementById('displayArea');

    if (!fileName) return;

    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error(`Gagal memuat file (Status: ${response.status})`);
        }
        const text = await response.text();
        displayArea.innerText = text;
    } catch (error) {
        displayArea.innerText = "Kesalahan: " + error.message;
        console.error(error);
    }
}