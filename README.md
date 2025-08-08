# Panel Resize
一个轻量级、可定制的面板拖拽调整大小组件，支持 React 应用。

## 安装
### 使用 npm 安装：
### npm install panel-resize-v1

## 使用方法
### 基本用法

```jsx
import { PanelGroup, Panel, PanelResizeHandle } from 'panel-resize-v1';

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
```

### 组件说明

### PanelGroup 组件

| 属性名       | 类型                      | 必填 | 默认值        | 说明                     |
|--------------|---------------------------|------|--------------|--------------------------|
| direction    | "horizontal"｜"vertical" | 否   | "horizontal" | 布局方向（水平/垂直）    |

### Panel 组件

| 属性名       | 类型     | 必填 | 默认值 | 说明                      |
|--------------|----------|------|--------|---------------------------|
| defaultSize  | number   | 否   | 30      | 默认大小（百分比，0-100） |
| minSize      | number   | 否   | 10     | 最小大小（百分比，0-100） |
| maxSize      | number   | 否   | -      | 最大大小（百分比，0-100） |

### PanelResizeHandle 组件

| 属性名     | 类型           | 必填 | 默认值 | 说明                          |
|------------|----------------|------|--------|-------------------------------|
| className  | string         | 否   | -      | 自定义手柄类名                |

## 示例
### 水平布局（默认）
```jsx
<PanelGroup>
  <Panel defaultSize={30} minSize={20}>
    左侧内容
  </Panel>
  <PanelResizeHandle />
  <Panel defaultSize={70} minSize={30}>
    右侧内容
  </Panel>
</PanelGroup>
```

### 垂直布局

```jsx
<PanelGroup direction="vertical">
  <Panel defaultSize={40} minSize={20}>
    顶部内容
  </Panel>
  <PanelResizeHandle />
  <Panel minSize={30}>
    底部内容
  </Panel>
</PanelGroup>
```