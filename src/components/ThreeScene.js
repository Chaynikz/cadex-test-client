import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeScene = ({ threeData }) => {
    const mount = useRef(null);

    useEffect(() => {
        const { vertices, faces, scaleRatio } = threeData.data;
        const current = mount.current;
        let width = current.clientWidth;
        let height = current.clientHeight;
        

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x49505f);
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 2;
        
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);


        /* Geometry */
        const geometry = new THREE.Geometry();

        vertices.forEach(item => {
            geometry.vertices.push(
                new THREE.Vector3(item.a, item.b, item.c)
            )
        });

        faces.forEach(item => {
            geometry.faces.push(
                new THREE.Face3(item.a, item.b, item.c)
            )
        });

        geometry.computeFaceNormals();


        /* Material */
        const material = new THREE.MeshLambertMaterial({
            color: "rgb(245, 245, 245)",
            emissive: 0x222222,
        });


        /* Mesh */
        const box = new THREE.Mesh(geometry, material);
        box.scale.x = scaleRatio;
        box.scale.y = scaleRatio;
        box.scale.z = scaleRatio;
        scene.add(box);


        /* Light */
        const light1 = new THREE.SpotLight(0xffffff);
        light1.position.set(100, 300, 1000);
        scene.add(light1);

        const light2 = new THREE.SpotLight(0xffffff);
        light2.position.set(-100, -300, -1000);
        scene.add(light2);

        const controls = new OrbitControls(camera, renderer.domElement);
        

        const renderScene = () => {
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            width = current.clientWidth;
            height = current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            controls.update();
            renderScene();
        }

        current.appendChild(renderer.domElement);
        window.addEventListener('resize', handleResize);


        const animate = function () {
            requestAnimationFrame(animate);

            box.rotation.x = 0.4;
            box.rotation.y = 0.8;
            box.rotation.z = 0;

            renderScene();
        };

        animate();


        return () => {
            current.removeChild(renderer.domElement);
            window.removeEventListener('resize', handleResize);

            scene.remove(box);
            geometry.dispose();
            material.dispose();
        }

    }, [threeData]);

    return (
        <div className="three-wrapper" ref={mount} />
    );
}

export default ThreeScene;