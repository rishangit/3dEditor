import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SubTitle, SettingWindow } from '../../system/styled/components';
import { PropColor, PropPosition } from './itemProps';
import {updateMesh} from '../action'

const RightWindow = props => {
  // SubTitle
  const dispatch = useDispatch();
  const { meshList, selected } = useSelector(state => state.editor);
  const [selectedMesh, setSelectedMesh] = useState(null);
  
  useEffect(() => {
    debugger
    if ((selected || selected === 0) && meshList.length > 0) {
      setSelectedMesh(meshList[selected]);
    }
    else{
      setSelectedMesh(null)
    }
  }, [meshList, selected]);

  const PropOnChange = (chageProp)=>{
      dispatch(updateMesh(chageProp));
  }


  const getProps = useCallback(() => {
    if (!selectedMesh) return;
    debugger;
    switch (selectedMesh.type) {
      case 'box':
        return (
          <>
            <PropColor color={selectedMesh.color} onChange={PropOnChange} />
            <PropPosition position={selectedMesh.position} onChange={PropOnChange}/>
          </>
        );

      default:
        break;
    }
  }, [selectedMesh]);
  return (
    <SettingWindow>
      <SubTitle>Setting window</SubTitle>
      {selectedMesh && getProps()}
    </SettingWindow>
  );
};

export default memo(RightWindow);
