
export const BasicFunctions = () => {

    /**
     * Just to show as String for example
     */
    const addTwoNumbers = (a:number, b:number):string => {
        // return (a+b).toString();
        return `${ a+b }`;
    }


    return (
        <>
            <h3>Basic Functions</h3>

            <h4> Functions </h4>
            <span> Result of sum: { addTwoNumbers(2,4) } </span>
        </>

    )
}
