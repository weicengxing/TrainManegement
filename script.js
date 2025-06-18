document.addEventListener('DOMContentLoaded', () => {
    const orbits = {
        'mercury-orbit': 8.8,
        'venus-orbit': 22.5,
        'earth-orbit': 36.5,
        'mars-orbit': 68.7,
        'jupiter-orbit': 433.3, // 12 years * 36.5 / 10 (approx)
        'saturn-orbit': 1075.9, // 29.5 years
        'uranus-orbit': 3068.5, // 84 years
        'neptune-orbit': 6019.0  // 165 years
    };

    for (const orbitId in orbits) {
        const orbitElement = document.getElementById(orbitId);
        if (orbitElement) {
            const animationDuration = orbits[orbitId]; // Get duration from our map
            // Set a random negative animation delay to randomize starting position
            // The delay will be between 0 and -animationDuration
            const randomDelay = -(Math.random() * animationDuration);
            orbitElement.style.animationDelay = randomDelay + 's';
        }
    }

    // Minor adjustment for Saturn's ring if needed, though CSS should handle it now.
    // For truly realistic behavior, especially elliptical orbits or varying speeds,
    // a full JavaScript-driven animation loop (e.g., using requestAnimationFrame)
    // would be more appropriate than relying solely on CSS animations.
    // This script currently only randomizes start positions for the CSS animations.

    // Example: Log to confirm script is running
    console.log('Solar system script loaded. Planet starting positions randomized.');
}); 