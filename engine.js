class PlantEngine {
    constructor() {
        this.health = 100;
    }

    tick() {
        this.health = Math.max(0, this.health - 15);
 
        const pool = this.health > 40 ? moods.healthy : moods.dry;
        const pick = pool[Math.floor(Math.random() * pool.length)];
        
        return { ...pick, currentHealth: this.health };
    }

    water() 
    {
         this.health = Math.min(100, this.health + 30);
         return this.health;
    }
}