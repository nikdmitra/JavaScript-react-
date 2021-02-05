import cn from "classnames"
import React, { useState } from "react";
import  styles from './Pagenator.module.css'

let Pagenator = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionSize = 10

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize


    return <div className={cn(styles.portion)}>

        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>  PREV  </button>
        }


        {

            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(
                    p => {
                        return <span className={
                            cn({
                                [styles.stelected]: props.currentPage === p
                            }, styles.pageNumber)
                        }
                            onClick={(e) => { props.onPageChaned(p) }
                            } > {p} </span>
                    }
                )
        }
        {
            portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}> NEXT </button>
        }


    </div>

}


export default Pagenator;