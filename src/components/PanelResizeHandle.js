function PanelResizeHandle(props) {
  const { className } = props;
  const id = `handle-${Math.random().toString(36).substring(2, 9)}`;
  return <div className={`${id} ${className}`}>

  </div>
}
export default PanelResizeHandle;