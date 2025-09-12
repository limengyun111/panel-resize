function Panel (props) {
  const { children, className } = props;
  return <div className={`panel-resize ${className}`}>{children}</div>

}
export default Panel;