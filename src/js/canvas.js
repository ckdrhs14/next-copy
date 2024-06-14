const Canvas = () => {
    const canvasRef = useRef(null);

    const [canvasTag, setCanvasTag] = useState([]);

    useEffect(() => {
        var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		class Particle {
		constructor(x, y, radius, dx, dy, color) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.directionX = dx;
			this.directionY = dy;
			this.color = color;
		}
		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			ctx.fillStyle = this.color;
			ctx.fill();
		}
		update() {
			if (this.x < 0 || this.x + this.radius > canvas.width) {
			this.directionX = -this.directionX;
			}
			if (this.y < 0 || this.y + this.radius > canvas.height) {
			this.directionY = -this.directionY;
			}
			this.x += this.directionX;
			this.y += this.directionY;
			this.draw();
		}
		}

		function init(count, radius, speed) {
		var particlesArray = [];
		const particlesCount = count;
		const radiusRange = radius;
		const speedRange = 1;
		for (let i = 0; i < particlesCount; i++) {
			let radius = Math.random() * (radiusRange - 1) + 1;
			let x = Math.random() * (canvas.width - 2 * radius) + radius;
			let y = Math.random() * (canvas.height - 2 * radius) + radius;
			let dx = Math.random() * 1 * speedRange - speedRange;
			let dy = Math.random() * 1 * speedRange - speedRange;
			particlesArray.push(new Particle(x, y, radius, dx, dy, "#fff"));
			particlesArray[i].draw();
		}
		animate(particlesArray);
		}

		function animate(particlesArray) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let particle of particlesArray) {
			particle.update();
		}
		connect(particlesArray);
		requestAnimationFrame(() => animate(particlesArray));
		}

		function connect(particlesArray) {
		for (let i = 0; i < particlesArray.length; i++) {
			for (let j = i; j < particlesArray.length; j++) {
			let distance = Math.sqrt(
				Math.pow(particlesArray[i].x - particlesArray[j].x, 2) +
				Math.pow(particlesArray[i].y - particlesArray[j].y, 2)
			);
			if (distance < 180) {
				ctx.lineWidth = 0.3; // 선 굵기
				ctx.strokeStyle = "#fff";
				ctx.beginPath();
				ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
				ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
				ctx.stroke();
			}
			}
		}
		}

		window.addEventListener("resize", () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		});
		init(50, 5, 2);
    }, []);

	return (
		<canvas id="myCanvas" width="100%" height="100%" ref={canvasRef}></canvas>
	)
}

export default Canvas;
