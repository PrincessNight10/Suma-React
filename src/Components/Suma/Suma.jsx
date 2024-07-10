import React, {useState }from 'react'

export const Suma = () => {
const [number1, setNumber1] = useState(0)
const [number2, setNumber2] = useState(0)
const [result, setResult] = useState(0)

const handleadd =(event) => {
  event.preventDefault()
    setResult(number1 +number2)
}

  return (
    <div className='container'>
        <p>
            Suma de numeros
        </p>
        <hr />
        <form action=""onSubmit={handleadd}> 
            <input onChange={event => setNumber1(Number(event.target.value))} type="number" placeholder='numero 1' />
            <input onChange={event => setNumber2(Number(event.target.value))}type="number" placeholder='numero 2' />
            <p> Suma estos 2 numeros el resultado es: {result}</p>

            <button>Sumar</button>
        </form>

    </div>
  )
}

export default Suma