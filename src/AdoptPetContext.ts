import {createContext} from "react";
import {Pet} from "./APIResponsesTypes";

const AdoptPetContext = createContext<[Pet | null, (adoptedPet: Pet | null) => void]>([
    {   //te dane nie będą użyte w apce
        id: 1337,
        name: "Fido",
        animal: "dog",
        description: "Lorem ipsum",
        breed: "Beagle",
        images: [],
        city: "Seattle",
        state: "WA",
        activeImage: 1,
    },
    () => {
    }
]);

export default AdoptPetContext;
