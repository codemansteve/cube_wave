let angle = 0;
let w = 40;
let ma;
let maxD;

function setup() {
  createCanvas(800, 800, WEBGL);
  ma = atan(1 / sqrt(3));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(170, 100, 100);
  directionalLight(63, 84, 100, -1, 0, 0);
  directionalLight(30, 186, 180, 0, 1, -1);
  directionalLight(130, 148, 190, 0, 0, -1);
  ortho(-650, 650, -650, 650, 0, 3000);
  noStroke();

  rotateX(-ma);
  rotateY(-QUARTER_PI);
  /*rotateX(angle * 0.25);
  rotateY(angle * 0.25);*/
  //rotateZ(angle * 0.25);
  //rotateZ(PI / 2);
  let centreOffset = width / 2 + 50;
  let t = 1;
  let k = 0;
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let ripple = exp(-k * t);
      let d = dist(x, z + centreOffset, width / 2, height / 2);
      let offset = map(d, 0, maxD, (-5 * PI) / 4, (5 * PI) / 4);
      let a = angle + offset;
      let h = map(sin(a) * ripple, -1, 1, 100, 220);
      translate(x - width / 2, 0, z - height / 2);
      //specularMaterial();
      box(w, h, w);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);
      pop();
      k += 0.0009;
    }
  }

  angle -= 0.1;
}
