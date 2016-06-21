//var Circle = function (ctx, x, y,......)
var Circle = function (ctx, data) {
    "use strict";
    this.ctx        = ctx;
    this.x          = data.x;
    this.y          = data.y;
    this.radius     = data.radius;
    this.startAngle = 0;
    this.endAngle   = 2 * Math.PI;
    this.innerColor = data.innerColor;
    this.outerColor = data.outerColor;
    this.speed = data.speed;
};

Circle.prototype.draw = function () {
    "use strict";
    this.ctx.beginPath();
    this.ctx.arc(
        this.x,
        this.y,
        this.radius,
        this.startAngle,
        this.endAngle
    );
    
    this.ctx.fill();
    this.ctx.fillStyle    = this.innerColor;
    this.ctx.lineWidth    = 5;
    this.ctx.strokeStyle  = this.outerColor;
    this.ctx.stroke();
};