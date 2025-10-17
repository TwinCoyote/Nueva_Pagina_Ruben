import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

export function Raspberry(props) {
  const groupRef = useRef();
  const { nodes, materials, animations } = useGLTF("/models/raspberry.glb");
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (animations && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group
        position={props.position || [0, 7, -2]}
        rotation={[-Math.PI / 2.3, 1, -1.1]}
        scale={props.scale || 0.3}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.rpi_L}
          position={[0, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/raspberry.glb");
