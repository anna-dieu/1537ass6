console.log("Client script loaded.");

function fetchHTML() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/index', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('html-container').innerHTML = xhr.responseText;
            } else {
                console.error('Error fetching HTML:', xhr.status);
            }
        }
    };
    xhr.onerror = function() {
        console.error('An error occurred during the HTML request.');
    };
    xhr.send();
}

function fetchJSON() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/timelineData', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var jsonData = JSON.parse(xhr.responseText);
                processJSON(jsonData);
            } else {
                console.error('Error fetching JSON:', xhr.status);
            }
        }
    };
    xhr.onerror = function() {
        console.error('An error occurred during the JSON request.'); 
    };
    xhr.send();
}


function ajaxGET(url, callback) {

    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        value = this.responseText;
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            value = this.responseText;
            callback(this.responseText);

        } else {
            console.log(this.status);
        }
    }
    xhr.open("GET", url); 
    xhr.send();

}



document.querySelector("#buttons").addEventListener("click", function (e) {
    //console.log(e);
    ajaxGET("/table-async", function(table) {
        console.log(table);
        // since it's HTML, let's drop it right in
        document.getElementById("table").innerHTML = table;
    });
});
