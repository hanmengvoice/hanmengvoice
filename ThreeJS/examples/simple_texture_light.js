(function(){
  var renderer, scene, camera, cube;

  function start(){
    var container = document.getElementById('container');

    var w = container.offsetWidth, h = container.offsetHeight;

    renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);


    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, w / h, 1, 4000);
    camera.position.set(0, 0, 3);

    var light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(0, 0, 0.7);
    scene.add(light);

    var mapUrl = '../images/mh1.png';
    var map = THREE.ImageUtils.loadTexture(mapUrl);

    var material = new THREE.MeshPhongMaterial({map: map});

    var geometry = new THREE.CubeGeometry(1, 1, 1);
    cube = new THREE.Mesh(geometry, material);

    cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5;

    scene.add(cube);

    tick();
  }

  function tick(){
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.001;
    cube.rotation.z += 0.003;

    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  }

  start();
})();