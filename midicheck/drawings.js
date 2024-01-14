const img = document.getElementById("ctLogo");
const images = document.getElementsByClassName("droplet");
console.log(images[1]);

function normalize(min, max, val) {
    return (val - min)/(max - min)
}

function bounce(width, height, color, x, y, channel) {
    this.width = width;
    this.height = height;
    this.x = normalize(11, 121, x) * innerWidth;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.5;
    this.gravitySpeed = 0;
    this.bounce = 0.5;
    this.channel = channel;
    console.log(this.channel);
    this.img = images[this.channel % 8]

    this.update = function(ctx) {
        ctx.fillStyle = color;
        ctx.drawImage(this.img, this.x, this.y)
    }
    this.newPos = function(ctx) {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom(ctx);
    }
    this.hitBottom = function(ctx) {
        var rockbottom = ctx.canvas.height - this.img.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }
}