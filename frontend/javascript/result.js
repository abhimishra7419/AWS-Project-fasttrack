const filename = new URLSearchParams(window.location.search).get("filename");

const filenameElement = document.getElementById("filename");

const noticeTitle = document.getElementById("notice-title");
const organization = document.getElementById("organization");
const deadline = document.getElementById("deadline");

const eligibility = document.getElementById("eligibility");
const documents = document.getElementById("documents");
const steps = document.getElementById("steps");
const importantInfo = document.getElementById("important-info");
const actionPlan = document.getElementById("action-plan");


function showList(element, items) {

    element.innerHTML = "";

    if (!items || items.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No information found.";
        element.appendChild(li);
        return;
    }

    items.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        element.appendChild(li);
    });
}


async function loadAnalysis() {

    if (!filename) {

        filenameElement.textContent =
            "No file specified.";

        return;
    }


    filenameElement.textContent = filename;


    try {

        const response = await fetch(
            `http://127.0.0.1:8000/analyze?filename=${encodeURIComponent(filename)}`
        );


        const data = await response.json();


        if (!response.ok) {

            throw new Error(
                data.detail || "Analysis failed."
            );
        }


        /*
         * Our current backend returns:
         *
         * filename
         * pages
         * prompt
         *
         * We will connect the AI-generated
         * structured result here later.
         */


        noticeTitle.textContent =
            "AI analysis coming soon";

        organization.textContent =
            "Will be extracted by Bedrock";

        deadline.textContent =
            "Will be extracted by Bedrock";


        showList(
            eligibility,
            [
                "AI analysis will identify eligibility requirements."
            ]
        );


        showList(
            documents,
            [
                "AI analysis will identify required documents."
            ]
        );


        showList(
            steps,
            [
                "AI analysis will identify application steps."
            ]
        );


        showList(
            importantInfo,
            [
                "AI analysis will identify important information."
            ]
        );


        showList(
            actionPlan,
            [
                "AI will generate a personalized action plan."
            ]
        );


        console.log(
            "Analysis response:",
            data
        );


    } catch (error) {

        console.error(error);

        filenameElement.textContent =
            "Could not analyze the notice.";

        noticeTitle.textContent =
            "Analysis failed";

    }

}


loadAnalysis();