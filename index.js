
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


    const risultatoDiv = document.getElementById('risultato');
    const prezzoText = document.getElementById('prezzo');
    prezzoText.innerHTML = `Ciao ${fullName}, il prezzo totale del biglietto è: <strong>€${prezzoTotale.toFixed(2)}</strong>`;


    risultatoDiv.style.display = 'block';
});




