import type { NextPage } from 'next'

const FormCalculator: NextPage<{result: string}> = ({result}) => {
  return (
    <form>
      <input className="input-calc" type="text" value={result} onChange={() => console.log("onChange called")}/>
    </form>
  )
}

export default FormCalculator