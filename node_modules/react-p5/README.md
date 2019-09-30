# react-p5

This Component lets you integrate p5 Sketches into your React App. [DEMO](https://codesandbox.io/s/k09k8knxz5)

### Installation

```bash
npm i react-p5
```

### Usage

```js
import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {
  x = 50
  y = 50

  setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(parent)
  }
  draw = p5 => {
    p5.background(0)
    p5.ellipse(this.x, this.y, 70, 70)
    this.x++
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />
  }
}
```

### Props

| Prop          | Required | Type     | Description                 |
| ------------- | -------- | -------- | --------------------------- |
| className     | false    | String   | ClassName for canvas parent |
| style         | false    | Object   | Styles for canvas parent    |
| setup         | true     | Function |                             |
| draw          | false    | Function |                             |
| windowResized | false    | Function |                             |
| preload       | false    | Function |                             |
| mouseClicked  | false    | Function |                             |
| mouseMoved    | false    | Function |                             |
| doubleClicked | false    | Function |                             |
| mousePressed  | false    | Function |                             |
| mouseWheel    | false    | Function |                             |
| mouseDragged  | false    | Function |                             |
| mouseReleased | false    | Function |                             |
| keyPressed    | false    | Function |                             |
| keyReleased   | false    | Function |                             |
| keyTyped      | false    | Function |                             |
| touchStarted  | false    | Function |                             |
| touchMoved    | false    | Function |                             |
| touchEnded    | false    | Function |                             |
| deviceMoved   | false    | Function |                             |
| deviceTurned  | false    | Function |                             |
| deviceShaken  | false    | Function |                             |


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**[@Gherciu/react-p5](https://github.com/Gherciu/react-p5)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/react-p5/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/react-p5/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/react-p5)
