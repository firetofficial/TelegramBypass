let bypassEnabled = true;

document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("bypass-toggle");
    const saveButton = document.getElementById("saveButton");

    chrome.storage.local.get("bypassEnabled", function (result) {
        if (result.bypassEnabled !== undefined) {
            bypassEnabled = result.bypassEnabled;
            checkbox.checked = bypassEnabled;
        }
    });

    checkbox.addEventListener("click", function () {
        bypassEnabled = checkbox.checked;
        console.log(`Checkbox clicked: ${bypassEnabled ? "ON" : "OFF"}`);
    });

    saveButton.addEventListener("click", function () {
        chrome.storage.local.set({ bypassEnabled: bypassEnabled });
        console.log(`Save button clicked: ${bypassEnabled ? "ON" : "OFF"}`);
    });
});