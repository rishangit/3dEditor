import { memo, useCallback, useRef, useState } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
// import { useHover, useDrag } from '../../hooks/dragHook';
import { useDrag } from "react-use-gesture"
const MeshBox = ({ position, color, args, onClick }) => {
  const mesh = useRef(null);
 
  const [posh, setPos] = useState(position);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const bindDrag = useDrag(({ offset: [x, y] }) => {
    const [,, z] = position;
    setPos([x / aspect, y / aspect, z]);
}, { pointerEvents: true });

  useFrame(() => {
    mesh.current.position.x = posh[0];
    mesh.current.position.y = posh[1];
    mesh.current.position.z = posh[2];
  });

  const onmeshClick = (e)=>{
    debugger
    e.stopPropagation();
    onClick();
  }
  return (
    <mesh position={posh} ref={mesh} onClick={(e)=>onmeshClick(e)} {...bindDrag()}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default MeshBox;
