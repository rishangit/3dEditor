import styled, { css } from 'styled-components';


export const ToolWindow = styled.div`
  position:fixed;
  height:100%;
  ${({ theme: { fontSize, width, color, padding} }) => css`
    width:${width.toolWindow};
    background-color:${color.window};
    padding:${padding.window}
  `}
`;

export const SettingWindow = styled.div`
  position:fixed;
  height:100%;
  right:0px;
  ${({ theme: { fontSize, width, color, padding} }) => css`
    width:${width.settingWindow};
    background-color:${color.window};
    padding:${padding.window}
  `}
`;

export const CanvasWindow = styled.div`
  position:fixed;
  height:100%;
  ${({ theme: { fontSize, width, color,padding} }) => css`
    width:calc(100% - ${width.toolWindow} - ${width.settingWindow} );
    left:${width.toolWindow};
    padding:${padding.window}
  `}
`;