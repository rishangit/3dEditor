import { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { Canvas } from '@react-three/fiber';
import { MeshBox } from '../components/meshs';
import { AmbientLight } from '../components/lights';
import { OrbitControls } from '@react-three/drei';
import LeftWindow from '../leftWindow';
import RightWindow from '../rightWindow';
import { setSelectedMesh } from '../action';
import { CanvasWindow } from '../../system/styled/components';

const EditorCanvas = () => {
  const dispatch = useDispatch();
  const { meshList, selected } = useSelector(state => state.editor);

  const onClick = inx => {
    //e.preventdefault();
    dispatch(setSelectedMesh(inx));
  };

  const canvasOnClick = e => {
    //alert('canvas click');
    //e.preventdefault();
    //dispatch(setSelectedMesh(null));
  };
  return (
    <>
      <LeftWindow />
      <CanvasWindow onClick={canvasOnClick}>
        <Canvas>
          <AmbientLight />
          {meshList.map((mesh, inx) => (
            <MeshBox
              key={inx}
              {...mesh}
              onClick={() => {
                onClick(inx);
              }}
            />
          ))}
          {(!selected || selected !== 0) && <OrbitControls />}
        </Canvas>
      </CanvasWindow>
      <RightWindow />
    </>
  );
};

export default memo(EditorCanvas);
