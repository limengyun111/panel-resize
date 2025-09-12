import { useEffect, useRef } from 'react';
import PanelResize from 'panel-resize-js';
import Panel from './Panel';

function PanelGroup(props) {
  const parentEle = useRef(null);
  const { direction, children, customCursor, panelRef = { current: undefined }, autoSaveId, className } = props;

  useEffect(() => {
    const panelEles = Array.from(children).filter(child => {
      return child?.type === Panel;
    });
    const panelSizeData = Array.from(panelEles).map((child) => {
      const { defaultSize, minSize, maxSize } = child.props;
      return {
        minSize, defaultSize, maxSize
      }
    });

    panelRef.current = new PanelResize(parentEle.current, { sizeData: panelSizeData, direction, customCursor, autoSaveId });
  }, []);




  return <div ref={parentEle} className={`wrapper ${className || ''}`}>{children}</div>
}
export default PanelGroup;