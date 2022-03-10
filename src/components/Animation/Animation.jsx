import React from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
};
class Animation extends React.Component {
  render() {
    return (
      <StyleRoot>
        <div className="test" style={styles.bounce}></div>
      </StyleRoot>
    );
  }
}
export default Animation;
