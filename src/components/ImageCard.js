import React, {Component} from 'react'

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0}
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    console.log(`Mounted: `, this.imageRef)
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const spans = Math.ceil(this.imageRef.current?.clientHeight / 10)  // calculate the spans based on the row heights we specified
    this.setState({spans})
  }

  render() {
    const {description, urls} = this.props.image
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description}
        />

      </div>
    );
  }
}

export default ImageCard