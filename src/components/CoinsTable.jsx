import React from 'react'
import Row from "./Row";

const DataTable = (props) => {
    let rows = [];
    let tickerArray = Object.values(props.ticker);
    let numRows = tickerArray.length;
    for (var i = 0; i < numRows; i++) {
        rows.push(
            <Row {...tickerArray[i]} key={tickerArray[i].symbol} />
        )
        if(rows.length > 40) {
           console.log(rows.length)
        }
    }
    return (
        <>
            <div className="d-none d-sm-inline">
                <div className="row table-header small font-weight-bold py-1">
                    <div className="col">Pair</div>
                    <div className="col">Last Price</div>
                    <div className="col">24h Change</div>
                    <div className="col">24h High</div>
                    <div className="col">24h Low</div>
                    <div className="col">24h Volume</div>
                </div>
                { rows }
            </div>
        </>
    );
}

export default DataTable;