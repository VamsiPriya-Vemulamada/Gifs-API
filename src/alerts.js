import  "./index.js"
document.getElementById("prevButton").addEventListener("click", previousButton);
document.getElementById("nextButton").addEventListener("click", nextButton);

async function previousButton() {
    const response = await fetch('url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });

  
}

async function nextButton() {
    if (response.ok) {
        const textData = await response.text();
        alert(textData);
    } else {
        alert("The request returned a status other than 200 OK: " + response.status);
    }
}

