const plant = new PlantEngine();

window.checkVibe = function() {
    const status = plant.tick();

    document.getElementById('emoji').innerText = status.e;
    document.getElementById('type').innerText = status.t;
    document.getElementById('quote').innerText = `"${status.q}"`;

    document.getElementById('health-inner').style.width = status.currentHealth + "%";
};

window.waterPlant = function() {
    const newHealth = plant.water();
    
    document.getElementById('health-inner').style.width = newHealth + "%";
    document.getElementById('emoji').innerText = "💧";
    document.getElementById('type').innerText = "Hydrated";
    document.getElementById('quote').innerText = "*Gulp gulp gulp*";
};