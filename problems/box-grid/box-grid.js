//box-grid.js
//import * as React from 'react'

const Box = (props) => {
    return(
        <div className="box" id={`r${props.row}c${props.col}`} onClick={props.handleClick}></div>
    )
}

const Row = (props) => {
    const boxes = []
    for(let i = 0; i < props.num; i++){
        boxes.push(<Box handleClick={handleClick} row={row} col={i} key={i}/>)
    }

    return(
        <div className="row">
            {boxes}
        </div>
    )
}

const App = () => {
    const [stack, setStack] = React.useState([])

    React.useEffect(()=>{
        const len = stack.length
        if(len === 7){
            rollBack()
        }
    }, [stack, setStack])

    const rollBack = () => {
        let wait = 1000
        while(stack.length){
            const popped = stack.pop()
            const poppedBox = document.getElementById(popped)
            setTimeout(()=>{
                poppedBox.classList.remove('box-clicked')
            }, wait)
            wait += 1000
        }
    }

    const handleClick = (e) => {
        const id = e.target.id
        const clickedBox = document.getElementById(id)
        //check if box is already clicked
        if(!clickedBox.classList.contains('box-clicked')){
            clickedBox.classList.add('box-clicked')
            const newStack = [...stack]
            newStack.push(id)
            setStack(newStack)
        }
    }

    return(
        <div className="grid">
            <Row row={0} num={3} handleClick={handleClick} />
            <Row row={1} num={1} handleClick={handleClick} />
            <Row row={2} num={3} handleClick={handleClick} />
        </div>
    )
}

