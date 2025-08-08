
import { PanelGroup, Panel, PanelResizeHandle } from './components/index.js';

function App() {
  return (
    <div>
      <PanelGroup>
        <Panel defaultSize={30} minSize={20}>
          left
        </Panel>
        <PanelResizeHandle className='custom-handler'/>
        <Panel minSize={20}>
          middle
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={40} minSize={20}>
          right
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default App;
