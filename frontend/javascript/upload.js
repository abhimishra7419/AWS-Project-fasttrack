const fileInput = document.getElementById("file-input");
const fileName = document.getElementById("file-name");
const analyzeButton = document.getElementById("analyze-btn");
const uploadStatus = document.getElementById("upload-status");

let selectedFile = null;


// =========================
// FILE SELECTION
// =========================

fileInput.addEventListener("change", () => {

    selectedFile = fileInput.files[0];

    if (!selectedFile) {
        fileName.textContent = "No file selected";
        analyzeButton.disabled = true;
        return;
    }

    fileName.textContent = selectedFile.name;
    analyzeButton.disabled = false;
    uploadStatus.textContent = "";
});


// =========================
// UPLOAD FILE
// =========================

analyzeButton.addEventListener("click", async () => {

    if (!selectedFile) {
        return;
    }

    analyzeButton.disabled = true;
    analyzeButton.textContent = "Uploading...";
    uploadStatus.textContent = "";

    const formData = new FormData();

    formData.append("file", selectedFile);


    try {

        const response = await fetch(
            "http://127.0.0.1:8000/upload",
            {
                method: "POST",
                body: formData
            }
        );


        const data = await response.json();


        if (!response.ok) {
            throw new Error(
                data.detail || "Upload failed"
            );
        }


        uploadStatus.textContent =
            "Upload successful!";


        console.log("Upload response:", data);


        // Save filename for the next page
        localStorage.setItem(
            "actionlens_filename",
            data.filename
        );


        // Move to result page
        window.location.href =
            `result.html?filename=${encodeURIComponent(data.filename)}`;


    } catch (error) {

        console.error(error);

        uploadStatus.textContent =
            error.message;

        analyzeButton.disabled = false;
        analyzeButton.textContent =
            "Analyze Notice";
    }

});