document.addEventListener('DOMContentLoaded', function() {
    let counter = 0;
    const counterDisplay = document.getElementById('counter');
    const inhaleButton = document.getElementById('inhale-btn');
    const historyList = document.getElementById('history');
    const inhalationSound = document.getElementById('inhalation-sound'); // Referencia al audio

    inhaleButton.addEventListener('click', function() {
        counter += 0.1; // Incrementa el contador en 0.1 litros por inhalación imaginaria

        // Reproduce el sonido de inhalación
        inhalationSound.currentTime = 0; // Reinicia el sonido
        inhalationSound.play();

        // Actualiza el contador en la página
        counterDisplay.textContent = `Litros de aire inhalado: ${counter.toFixed(1)}`;

        // Crea una nueva entrada en el historial
        const newEntry = document.createElement('li');
        const timestamp = new Date().toLocaleTimeString();
        newEntry.textContent = `Inhalación registrada: ${0.1} litros a las ${timestamp}`;
        
        // Agrega la nueva entrada al historial
        historyList.insertBefore(newEntry, historyList.firstChild);
    });
});
