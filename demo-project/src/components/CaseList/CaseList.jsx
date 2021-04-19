import React, {useState} from "react";

const list = [
    "Посмотреть на котиков",
    "Успокоить нервы",
    "Выпить поллитру"
]

const CaseList = () => {
    const [caseArr, setCaseArr] = useState(list);

    const deleteCase = (idx) => {
        const newCaseArr = [...caseArr];
        newCaseArr.splice(idx, 1);
        setCaseArr(newCaseArr);
    };

    // const addCase = 

    const caseElements = caseArr.map((item, index) => {
        return (<li className="case-item">
                    {item} 
                    <span onClick={()=> deleteCase(index)} 
                    className="delete-case">X</span>
                </li>);
    })
    const message = !caseElements.length ? <h3>Дела на сегодня закончились!</h3> : ""
    return (
        <>
        {/* <form action="">
            <input type="text" name="case-title" placeholder="Название дела" />
            <button type="submit">Добавить дело</button>
        </form> */}
        
        <ul>
            {message}
            {caseElements}
        </ul>        
        </>
    )
}

export default CaseList;