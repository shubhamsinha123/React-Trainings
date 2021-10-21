import { Component } from 'react';
import { Carousel } from '3d-react-carousal';

class Carousel1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let slides = [
      <div className="out-data">
        <img src="https://picsum.photos/800/300/?random" alt="1" />
      </div>,
      <img src="https://picsum.photos/800/301/?random" alt="2" />,
      <img src="https://picsum.photos/800/302/?random" alt="3" />,
      <img src="https://picsum.photos/800/303/?random" alt="4" />,
      <img src="https://picsum.photos/800/304/?random" alt="5" />,
    ];
    return (
      <>
        <h1 className="comment-head">3D Slider Demo</h1>
        <p>each time you refresh, you will get a new slider content</p>
        <Carousel slides={slides} />
      </>
    );
  }
}
export default Carousel1;
