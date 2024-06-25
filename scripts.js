function calculate() {
    let sum = 0;
    for (let i = 1; i <= 8; i++) {
        const value = parseFloat(document.getElementById('card' + i).value) || 0;
        if (value >= 1) {
            sum += value;
        }
    }
    const result = sum * 40;
    document.getElementById('result').innerText = 'Resultado: ' + result;
    openPopup();
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
