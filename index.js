
document.getElementById('ticketForm').addEventListener('submit', function (event) {
    event.preventDefault();


    let fullName = document.getElementById('fullName').value;
    let km = parseFloat(document.getElementById('km').value);
    let age = document.getElementById('age').value;


    const prezzoPerKm = 0.21;
    let prezzoTotale = km * prezzoPerKm;


    if (age === 'minor') {
        prezzoTotale -= prezzoTotale * 0.20;
    } else if (age === 'senior') {
        prezzoTotale -= prezzoTotale * 0.40;
    }

    const risultatoCard = document.getElementById('risultatoCard');


    document.getElementById('nomeCompleto').textContent = `Ciao ${fullName}`;
    document.getElementById('dettagli').textContent = `Km da percorrere: ${km} km - Fascia d'età: ${age === 'minor' ? 'Minorenne' : (age === 'senior' ? 'Over 65' : 'Maggiorenne')}`;
    document.getElementById('prezzo').innerHTML = `Il prezzo totale del biglietto è: <strong>€${prezzoTotale.toFixed(2)}</strong>`;

    risultatoCard.classList.remove('d-none');
});




