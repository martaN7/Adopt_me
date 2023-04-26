import {test, expect} from "vitest";
import Carousel from "./Carousel";
import {render} from "@testing-library/react";

test('lets user click on thumbnails to make them the hero', async () => {

    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

    const carousel = render(
        <Carousel
            images={images}
            activeImage={0}
            setActiveImage={() => {
            }}
        />
    );
    const hero = await carousel.findByTestId("hero");
    expect(hero.src).toContain(images[0]);

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const thumb = await carousel.findByTestId(`thumbnail-${i}`);

        await thumb.click();
        expect(hero.src).toContain(image);
        expect(Array.from(thumb.classList)).toContain("active");
    }
})