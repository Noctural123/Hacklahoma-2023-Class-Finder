let scene;
let camera;
let renderer;
let starGeometry;
let stars;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
camera.position.z = 10;
camera.position.x = Math.PI/2;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

starGeometry = new THREE.Geometry();
for(let i = 0; i < 6000; i++) {
    star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600- 300
    );
    star.velocity = 0;
    star.acceleration = 0.02;
    starGeometry.vertices.push(star);
}

let sprite = new THREE.TextureLoader().load('Images/star.png');
let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite
});

stars = new THREE.Points(starGeometry,starMaterial);
scene.add(stars);

animate();

function animate() {

    starGeometry.vertices.forEach(p=>{
        p.velocity += p.acceleration;
        p.y -= p.velocity;
        if( p.y < -200) {
            p.y = 200;
            p.velocity = 0
        }
    });
    starGeometry.verticesNeedUpdate = true;
    stars.rotation.y += 0.002;
    stars.rotation.x = -1.5;
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}