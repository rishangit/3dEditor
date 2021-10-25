import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { SubTitle, ToolWindow } from '../../system/styled/components';
import { meshItem ,meshBoxObj } from './constant';
import { addMesh } from '../action';

const LeftWindow = props => {
  const dispatch = useDispatch();

  const onItemClick = (item) => {
    let meshObj = {};
    switch (item.type) {
      case 'box':
        meshObj = JSON.parse(JSON.stringify(meshBoxObj));
        
        break;
    
      default:
        break;
    }

    dispatch(addMesh(meshObj));
  };

  return (
    <ToolWindow>
      <SubTitle>Tool window</SubTitle>
      {meshItem.map((item, inx) => (
        <div key={inx} onClick={() => onItemClick(item)}>
          {item.name}
        </div>
      ))}
    </ToolWindow>
  );
};

export default memo(LeftWindow);
