function includeHeader(customLink = "") {
    var link = "template/header.html";
    if (customLink != "") {
        link = customLink;
    }

	fetch(link)
        .then(response => response.text())
        .then(headerHtml => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', headerHtml);
            _loadTitleText(document.getElementById("pageTitle"));
        });
}