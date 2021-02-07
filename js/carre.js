class Carre{
    constructor(x, y, speed, size, color){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = "#FF0000";
        this.size = size;
    }

    update(time){
        this.x = this.x + this.speed*time;
    }

    draw(context){
        context.rect(this.x, this.y, this.size, this.size);
        context.fillStyle = this.color;
        context.fill();
    }

    clear(context){
        context.clearRect(this.x, this.y, this.size, this.size); //nettoie le canevas
    }
}