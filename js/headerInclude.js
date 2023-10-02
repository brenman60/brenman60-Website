function includeHeader() {
	fetch('template/header.html')
        .then(response => response.text())
        .then(headerHtml => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', headerHtml);
        });

    loadTitleText();
}