import type { NextPage } from 'next'

const ButtonCalculator: NextPage<{children: any, value: string, clickHandler: (n: string) => void}> = ({children, clickHandler, value}) => {
  return (
    <button className="btn btn-calc" onClick={() => clickHandler(value)}>
      {children}
    </button>
  )
}

export default ButtonCalculator