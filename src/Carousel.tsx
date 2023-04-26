import {Component, MouseEvent} from "react";

interface IProps {
    images: string[];
    setActiveImage: (activeImage: number) => void;
}

class Carousel extends Component<IProps> {

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };
    state = {
        active: 0,
    }

    handleIndexClick = (e: MouseEvent<HTMLElement>) => {
        if (!(e.target instanceof HTMLElement)) {
            return;
        }
        if (e.target.dataset.index) {
            this.setState({active: parseInt(e.target.dataset.index)});
            this.props.setActiveImage(parseInt(e.target.dataset.index));
        }
    };

    render() {
        const {images} = this.props;
        const {active} = this.state;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" data-testid="hero"/>
                <div className="carousel-smaller">
                    {images.map((image, idx) => (
                        //eslint-disable-next-line
                        <img
                            src={image}
                            alt="animal thumbnail"
                            className={idx === active ? "active" : ""}
                            key={image}
                            data-index={idx}
                            data-testid={`thumbnail-${idx}`}
                            onClick={this.handleIndexClick}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
