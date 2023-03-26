import Pet from "./Pet";
import {Pet as PetType} from "./APIResponsesTypes";

//tu bez interfejsu
const Results = ({pets}: { pets: PetType[] }) => {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 search">
            {!pets.length ? (
                <h1>No pets found...</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                        key={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    );
};

export default Results;
