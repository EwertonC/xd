function calculate() {
    const rankCosts = [
        { rank: 1, item: 'Obducite', quantity: 10 },
        { rank: 2, item: 'Obducite', quantity: 20 },
        { rank: 3, item: 'Obducite', quantity: 30 },
        { rank: 4, item: 'Obducite', quantity: 40 },
        { rank: 5, item: 'Ingolith', quantity: 20 },
        { rank: 6, item: 'Ingolith', quantity: 40 },
        { rank: 7, item: 'Ingolith', quantity: 80 },
        { rank: 8, item: 'Ingolith', quantity: 120 },
        { rank: 9, item: 'Neathiron', quantity: 50 },
        { rank: 10, item: 'Neathiron', quantity: 100 },
        { rank: 11, item: 'Neathiron', quantity: 150 },
        { rank: 12, item: 'Neathiron', quantity: 250 }
    ];

    let totalCosts = {
        Obducite: 0,
        Ingolith: 0,
        Neathiron: 0
    };

    // Check which tab is active
    const activeTab = document.querySelector('.tabcontent:not([style*="display: none"])');
    const isSimple = activeTab.id === 'simple';

    if (isSimple) {
        const currentRank = parseFloat(document.getElementById('simpleAtual').value) || 0;
        const targetRank = parseFloat(document.getElementById('simpleRank').value) || 0;

        if (targetRank >= 1 && targetRank > currentRank) {
            for (let rank = currentRank + 1; rank <= targetRank; rank++) {
                const cost = rankCosts.find(r => r.rank === rank);
                totalCosts[cost.item] += cost.quantity;
            }
        }
    } else {
        for (let i = 1; i <= 8; i++) {
            const currentRank = parseFloat(document.getElementById('atual' + i).value) || 0;
            const targetRank = parseFloat(document.getElementById('card' + i).value) || 0;

            if (targetRank >= 1 && targetRank > currentRank) {
                for (let rank = currentRank + 1; rank <= targetRank; rank++) {
                    const cost = rankCosts.find(r => r.rank === rank);
                    totalCosts[cost.item] += cost.quantity;
                }
            }
        }
    }

    const resultText = `
        Total Obducite: ${totalCosts.Obducite}<br>
        Total Ingolith: ${totalCosts.Ingolith}<br>
        Total Neathiron: ${totalCosts.Neathiron}
    `;

    document.getElementById('result').innerHTML = resultText;
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

// Mostrar conteúdo da aba "Simple" por padrão
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('simple').style.display = 'block';
    document.querySelector('.tablinks').classList.add('active');
});
