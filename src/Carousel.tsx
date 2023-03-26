import {Component, MouseEvent} from "react";

interface IProps {
    images: string[];
    activeImage: number;
    setActiveImage: (activeImage: number) => void;
}

class Carousel extends Component<IProps> {
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };

    handleIndexClick = (e: MouseEvent<HTMLElement>) => {
        if (!(e.target instanceof HTMLElement)) {
            return;
        }
        if (e.target.dataset.index) {
            this.props.setActiveImage(+e.target.dataset.index);
        }
    };

    render() {
        const {images, activeImage: active} = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal"/>
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
