interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?:boolean
}

interface Address {
    country: string,
    houseNumber: number,
}

export const ObjectLiterals = () => {
    const person: Person = {
        firstName: "Mario",
        lastName: "Chiodi",
        age: 45,
        isAlive:true,
        address: {
            country: 'BR',
            houseNumber: 503
        },
        
    }
const { address } = person;
    return (
        <>

            <h3>Object Literals</h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>

            <pre>
                {address.country}
            </pre>
        </>

    )
}
