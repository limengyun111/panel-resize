import { useEffect, useRef } from 'react';
import PanelResize from 'panel-resize-js';

function PanelGroup (props)  {
  const parentEle = useRef(null);
  const { direction, children } = props;

  useEffect(() => {
    const sizes = Array.from(children).map((child) => {
      const { defaultSize, minSize, maxSize } = child.props;
      return {
        minSize, defaultSize, maxSize
      }
    });
    const panelSizeData = sizes.filter((it) => it.minSize || it.defaultSize);
    new PanelResize(parentEle.current, panelSizeData, direction)
  }, []);


  return <div ref={parentEle} className='wrapper'>{children}</div>
}
export default PanelGroup;