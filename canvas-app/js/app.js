// const drawingApp = {
//     name: 'Drawing app',
//     description: 'App to create primitive forms in HTML5 Canvas',
//     author: 'Ger',
//     license: undefined,
//     version: '1.0',
//     canvasDom: undefined,
//     ctx: undefined,
//     wSize: {
//         width: window.innerWidth,
//         height: window.innerHeight
//     },
//     init(id) {
//         this.canvasDom = document.getElementById(id)
//         this.ctx = this.canvasDom.getContext('2d')
//         this.setDimensions()
//         this.setHandlers()
//     },
//     setDimensions() {
//          this.wSize.width = window.innerWidth
//          this.wSize.height = window.innerHeight
//          this.canvasDom.width = this.wSize.width
//          this.canvasDom.height = this.wSize.height
//     },
//     setHandlers() {
//         window.onresize = () => this.setDimensions()
//     },
//     drawFilledRectangle() {
//         this.ctx.fillStyle = 'red'
//         this.ctx.fillRect(this.wSize.width / 2 - 150, this.wSize.height / 2 - 150, 300, 300)
//     },
//     drawLinearRectangle() {
//         this.ctx.lineWidth = 20
//         this.ctx.strokeStyle = 'blue'
//         this.ctx.strokeRect(this.wSize.width / 2 - 250, this.wSize.height / 2 - 250, 500, 500)
//     },
//     drawLine(lineColor) {
//         this.ctx.lineWidth = 10
//         this.ctx.strokeStyle = lineColor
//         this.ctx.setLineDash([80, 40])
//         this.ctx.beginPath()
//         this.ctx.moveTo(100, this.wSize.height / 2)
//         this.ctx.lineTo(this.wSize.width - 100, this.wSize.height / 2)
//         this.ctx.stroke()
//     },
//     drawCircle() {
//         this.ctx.fillStyle = 'red'
//         this.ctx.strokeStyle = 'green'
//         this.ctx.lineWidth = 10
//         this.ctx.arc(300, 300, 50, 0, Math.PI * 2, false)
//         this.ctx.fill()
//         this.ctx.stroke()
//     },
//     writeText(text) {
//         this.ctx.font = '80px sans-serif'
//         //this.ctx.fillText(text, 100, 100)
//         this.ctx.strokeText(text, 100, 100)
//     },
//     insertImage(name) {
//         let myImage = new Image()
//         myImage.src = `img/${name}`
//         myImage.onload = () => this.ctx.drawImage(myImage, 100, 100)        // El evento .onload se dispara cuando la imagen ha sido completamente cargada
//     }
// }





// const animateApp = {
//     name: 'Animate app',
//     description: 'App to create basic animations in HTML5 Canvas',
//     author: 'Ger',
//     license: undefined,
//     version: '1.0',
//     canvasDom: undefined,
//     ctx: undefined,
//     wSize: {
//         width: window.innerWidth,
//         height: window.innerHeight
//     },
//     init(id) {
//         this.canvasDom = document.getElementById(id)
//         this.ctx = this.canvasDom.getContext('2d')
//         this.setDimensions()
//         this.setHandlers()
//     },
//     setDimensions() {
//         this.wSize.width = window.innerWidth
//         this.wSize.height = window.innerHeight
//         this.canvasDom.width = this.wSize.width
//         this.canvasDom.height = this.wSize.height
//     },
//     setHandlers() {
//         window.onresize = () => this.setDimensions()
//     },
//     clearFullScreen() {
//         this.ctx.clearRect(0, 0, this.wSize.width, this.wSize.height)
//     },
//     drawMovingBall() {
//         const myBall = new Ball(this.ctx, 1, 0, this.wSize.width, this.wSize.height, 1)
//         const myBall2 = new Ball(this.ctx, 1, 200, this.wSize.width, this.wSize.height, 3)
//         const myBall3 = new Ball(this.ctx, 1, 400, this.wSize.width, this.wSize.height, 6)
//         myBall.init()
//         myBall2.init()
//         myBall3.init()
//         setInterval(() => {
//             this.clearFullScreen()
//             myBall.move()
//             myBall2.move()
//             myBall3.move()
//         }, 10)
//     }
// }

// class Ball {
//     constructor(ctx, posX, posY, wWidth, wHeight, vel) {
//         this._ctx = ctx
//         this._posX = posX
//         this._posY = posY
//         this._ball = undefined
//         this._wWidth = wWidth
//         this._wHeight = wHeight
//         this._vel = vel
//     }

//     init() {
//         this._ball = new Image()
//         this._ball.src = 'img/beachball.png'
//         this._ball.onload = () => this._ctx.drawImage(this._ball, this._posX, this._posY)
//     }

//     move() {

//         // if (this._posX >= this._wWidth - 276) {this.changeDirection()}
//         // if (this._posX <= 0) {this.changeDirection()}

//         this._posX >= this._wWidth - 276 || this._posX <= 0 ? this.changeDirection() : null

//         this._posX += this._vel
//         this._ctx.drawImage(this._ball, this._posX, this._posY)
//     }

//     changeDirection() {
//         this._vel *= -1             // this._vel = this._vel * -1
//     }
// }





const controlsApp = {
    name: 'Controls app',
    description: 'App to control elements in HTML5 Canvas',
    author: 'Ger',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    ball: undefined,
    wSize: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setHandlers()
        this.setEventListeners()
        this.drawMovingBall()
    },
    setDimensions() {
        this.wSize.width = window.innerWidth
        this.wSize.height = window.innerHeight
        this.canvasDom.width = this.wSize.width
        this.canvasDom.height = this.wSize.height
    },
    setHandlers() {
        window.onresize = () => this.setDimensions()
    },
    setEventListeners() {
        document.onkeyup = e => {
            e.keyCode == 37 ? this.ball.move('left') : null
            e.keyCode == 39 ? this.ball.move('right') : null
        }
    },
    clearFullScreen() {
        this.ctx.clearRect(0, 0, this.wSize.width, this.wSize.height)
    },
    drawMovingBall() {
        this.ball = new Ball(this.ctx, 1, 0, this.wSize.width, this.wSize.height, 10)
        this.ball.init()
        setInterval(() => {
            this.clearFullScreen()
            this.ball.move()
        }, 10)
    }
}




class Ball {
    constructor(ctx, posX, posY, wWidth, wHeight, vel) {
        this._ctx = ctx
        this._posX = posX
        this._posY = posY
        this._ball = undefined
        this._wWidth = wWidth
        this._wHeight = wHeight
        this._vel = vel
    }

    init() {
        this._ball = new Image()
        this._ball.src = 'img/beachball.png'
        this._ball.onload = () => this._ctx.drawImage(this._ball, this._posX, this._posY)
    }

    move(dir) {
        dir === 'right' ? this._posX += this._vel : null
        dir === 'left' ? this._posX -= this._vel : null

        this._ctx.drawImage(this._ball, this._posX, this._posY)
    }

    changeDirection() {
        this._vel *= -1
    }
}