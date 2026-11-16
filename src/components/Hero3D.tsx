"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 450;
    let height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x7c3aed, 4.5, 35);
    purpleLight.position.set(5, 5, 5);
    scene.add(purpleLight);

    const skyBlueLight = new THREE.PointLight(0x38bdf8, 3.8, 35);
    skyBlueLight.position.set(-5, -4, 4);
    scene.add(skyBlueLight);

    const warmRimLight = new THREE.DirectionalLight(0xffe4d6, 2.0);
    warmRimLight.position.set(0, 6, 2);
    scene.add(warmRimLight);

    // Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Outer Frosted Glass Sculpture
    const coreGeo = new THREE.IcosahedronGeometry(1.85, 3);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xf5f3ff,
      emissive: 0xddd6fe,
      emissiveIntensity: 0.3,
      roughness: 0.1,
      metalness: 0.05,
      transmission: 0.88,
      ior: 1.5,
      thickness: 1.4,
      transparent: true,
      opacity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    // Inner Core Iridescent Gem
    const innerGeo = new THREE.OctahedronGeometry(1.05);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x6d28d9,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.4,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    masterGroup.add(innerMesh);

    // Orbiting Rings
    const ring1Geo = new THREE.TorusGeometry(2.8, 0.038, 24, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      roughness: 0.2,
      metalness: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.5;
    ring1.rotation.y = Math.PI / 6;
    masterGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.2, 0.032, 24, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.2,
      metalness: 0.7,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    masterGroup.add(ring2);

    // Floating Spheres
    const sphereGroup = new THREE.Group();
    const sMat1 = new THREE.MeshStandardMaterial({
      color: 0xc4b5fd,
      roughness: 0.15,
      metalness: 0.3,
    });
    const sMat2 = new THREE.MeshStandardMaterial({
      color: 0xbae6fd,
      roughness: 0.15,
      metalness: 0.3,
    });
    const sMat3 = new THREE.MeshStandardMaterial({
      color: 0xfed7aa,
      roughness: 0.15,
      metalness: 0.3,
    });

    const floatingSpheres: THREE.Mesh[] = [];
    const sphereConfigs = [
      { size: 0.36, rad: 3.0, speed: 0.012, yOff: 1.3, mat: sMat1, angle: 0 },
      { size: 0.26, rad: 2.6, speed: -0.015, yOff: -1.1, mat: sMat2, angle: 2.1 },
      { size: 0.42, rad: 3.3, speed: 0.009, yOff: 0.2, mat: sMat1, angle: 4.2 },
      { size: 0.22, rad: 2.8, speed: -0.011, yOff: 1.7, mat: sMat3, angle: 1.2 },
      { size: 0.3, rad: 3.5, speed: 0.014, yOff: -1.5, mat: sMat2, angle: 3.3 },
    ];

    sphereConfigs.forEach((cfg) => {
      const geo = new THREE.SphereGeometry(cfg.size, 32, 32);
      const mesh = new THREE.Mesh(geo, cfg.mat);
      mesh.userData = cfg;
      sphereGroup.add(mesh);
      floatingSpheres.push(mesh);
    });
    masterGroup.add(sphereGroup);

    // Bokeh dots
    const pGeo = new THREE.BufferGeometry();
    const pCount = 50;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 10;
      pPos[i + 1] = (Math.random() - 0.5) * 10;
      pPos[i + 2] = (Math.random() - 0.5) * 7;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.07,
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Mouse parallax
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - windowHalfX) * 0.0004;
      targetY = (e.clientY - windowHalfY) * 0.0004;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 400;
      const newH = container.clientHeight || 500;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      coreMesh.rotation.y += 0.004;
      coreMesh.rotation.x += 0.002;

      innerMesh.rotation.y -= 0.008;
      innerMesh.rotation.z += 0.006;

      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.005;

      floatingSpheres.forEach((s) => {
        s.userData.angle += s.userData.speed;
        s.position.x = Math.cos(s.userData.angle) * s.userData.rad;
        s.position.z = Math.sin(s.userData.angle) * s.userData.rad;
        s.position.y =
          s.userData.yOff + Math.sin(t * 1.8 + s.userData.angle) * 0.25;
      });

      particles.rotation.y = t * 0.015;

      masterGroup.rotation.y += (targetX - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetY - masterGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-xl bg-gradient-to-b from-[#FAF8FF] to-[#F0F7FF] relative overflow-hidden flex items-center justify-center"
    />
  );
}
