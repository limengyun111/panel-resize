function Panel (props) {
  const { children } = props;
  const id = `panel-${Math.random().toString(36).substring(2, 9)}`;

  return <div className={id} key={id}>{children}</div>
}
export default Panel;