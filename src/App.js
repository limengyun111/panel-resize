
import { PanelGroup, Panel, PanelResizeHandle } from './components/index.jsx';

function App() {
  return (
    <div style={{ height: 300 }}>
      <PanelGroup>
        <Panel>
          left
        </Panel>
        <PanelResizeHandle />
        <Panel>
          middle
        </Panel>
        <PanelResizeHandle />
        <Panel>
          right
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default App;
