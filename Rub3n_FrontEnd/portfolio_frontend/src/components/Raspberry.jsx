import React, { useEffect, useRef, useMemo } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

export function Raspberry(props) {
  const groupRef = useRef();
  const { scene, animations } = useGLTF("/models/raspberry_pi.glb");
  const { actions } = useAnimations(animations, groupRef);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

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
        <primitive object={clonedScene} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/raspberry_pi.glb");

