

type TypeCount = {option: (info: any) => void, lable: string, disabled?: boolean}


export default function NextButton({option, lable, disabled}: TypeCount) {

    return (
        <div className='flex'>
            <button disabled={disabled} className="myBtn" onClick={option}>{lable}</button>
        </div>
        )
}
