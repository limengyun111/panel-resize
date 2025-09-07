function Panel (props) {
  const { children, className } = props;
  const id = `panel-${Math.random().toString(36).substring(2, 9)}`;
  return <div className={`${id} ${className}`}>{children}</div>

}
export default Panel;