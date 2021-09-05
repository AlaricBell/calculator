import type { NextPage } from 'next'

const ButtonCalculator: NextPage<{children: any, value: string, clickHandler: (e: any) => void}> = ({children, clickHandler, value}) => {
  return (
    <button name={value} className="btn btn-calc" onClick={clickHandler}>
      {children}
    </button>
  )
}

export default ButtonCalculator