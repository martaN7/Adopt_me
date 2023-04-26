import {lazy, useContext, useState} from "react";

import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

import fetchPet from "./FetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import AdoptPetContext from "./AdoptPetContext";


const Modal = lazy(() => import("./Modal"));

const Details = () => {
    const {id} = useParams();

    if (!id) {
        throw new Error(`No id provided to details`);
    }

    const [showModal, setShowModal] = useState(false);
    const [activeImage, setActiveImage] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [_, setAdoptedPet] = useContext(AdoptPetContext);


    const navigate = useNavigate();

    const results = useQuery(["details", id], fetchPet);


    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    const pet = results.data.pets[0];

    if (!pet) {
        throw new Error;
    }

    return (
        <div className="details">
            <Carousel
                setActiveImage={setActiveImage}
                images={pet.images}
            />
            <div>
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                <button onClick={() => setShowModal(true)}>
                    Adopt {pet.name}
                </button>
                <p>{pet.description}</p>
                {showModal && (
                    <Modal>
                        <div>
                            <h1>Would you like to adopt {pet.name}?</h1>
                            <div className="buttons">
                                <button
                                    onClick={() => {
                                        setAdoptedPet({...pet, activeImage});
                                        navigate("/");
                                    }}
                                >
                                    Yes!
                                </button>
                                <button onClick={() => setShowModal(false)}>
                                    No :(
                                </button>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
};

function DetailsErrorBoundary() {
    return (
        <ErrorBoundary>
            <Details/>
        </ErrorBoundary>
    );
}

export default DetailsErrorBoundary;
