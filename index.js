document.getElementById('ticketform').addEventListener('submit'), fucntion(evento){
    evento.preventdefault();
    let fullName = document.getElementById('fullName').value
    let km = parseFloat(document.getElementById('km'))
    let age = document.getElementById('age')
    const prezzoPerKm = 0.21;
    let prezzoTotale = km * prezzoPerKm;

    if (age === 'minor') {
        prezzoTotale -= * 0.20;
    } else if (age === 'senior') {
        prezzoTotale -= * 0.40;
    }



}





