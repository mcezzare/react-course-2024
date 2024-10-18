
const name: string = 'Mario';
const age: number = 45;
const isActive: boolean = false;

const powers: string[] = ['Typescript','Node','Swift','Php'];
powers.push('Java');

export const BasicTypes = () => {
  return (
    <>
    <h3>Basic Types</h3>

        {name}  {age}   {isActive ? 'true' : 'false'}
        <br />
        {powers.join(', ')}

    </>
    
  )
}
