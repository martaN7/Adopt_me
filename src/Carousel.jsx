import { Component } from "react";

class Carousel extends Component {
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };

    handleIndexClick = (e) => {
        this.props.setActiveImage(+e.target.dataset.index);
    };

    render() {
        const { images, activeImage: active } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((image, idx) => (
                        //eslint-disable-next-line
                        <img
                            src={image}
                            alt="animal thumbnail"
                            className={idx === active ? "active" : ""}
                            key={image}
                            data-index={idx}
                            onClick={this.handleIndexClick}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
