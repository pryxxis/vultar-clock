function updateCountdown() {
    const targetDate = new Date('2025-06-01T00:00:00-04:00'); // EDT (Vultarian Standard Time)
    const now = new Date();
    const diff = targetDate - now;

    console.log('Current time:', now, 'Target time:', targetDate, 'Difference:', diff); // Debugging

    if (diff <= 0) {
        document.getElementById('countdown-inline').textContent = '00:00:00:00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const formattedTime = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('countdown-inline').textContent = formattedTime;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
