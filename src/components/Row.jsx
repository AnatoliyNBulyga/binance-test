import React from 'react';
import {Link} from "react-router-dom";
import BigNumber from "bignumber.js";

const Row = (props) => (
    <>
        <div className="d-none d-sm-inline">
            <Link className="row table-row small py-1" to={`trade/${props.symbol}`}>
                <div className="col">{props.symbol}</div>
                <div className="col">{new BigNumber(props.lastPrice).toFormat(null,1)}</div>
                <div className={props.priceChangePercent < 0 ? 'col text-danger' : 'col text-success'}>{`${new BigNumber(props.priceChangePercent).toFormat(2,1)}%`}</div>
                <div className="col">{new BigNumber(props.highPrice).toFormat(null,1)}</div>
                <div className="col">{new BigNumber(props.lowPrice).toFormat(null,1)}</div>
                <div className="col">{new BigNumber(props.quoteVolume).toFormat(null,1)}</div>
            </Link>
        </div>
        <div className="d-inline d-sm-none">
            <Link className="row table-row small py-1" to={`trade/${props.symbol}`}>
                <div className="col-12">
                    <span className="font-weight-bold">{props.symbol}</span> <span>{new BigNumber(props.lastPrice).toFormat(null,1)}</span> <span className={props.priceChangePercent < 0 ? 'text-danger' : 'text-success'}>{`${new BigNumber(props.priceChangePercent).toFormat(2,1)}%`}</span>
                </div>
                <div className="col-4">
                    <div className="font-weight-light text-muted small">24h High</div>
                    <span className="small">{new BigNumber(props.highPrice).toFormat(null,1)}</span>
                </div>
                <div className="col-4">
                    <div className="font-weight-light text-muted small">24h Low</div>
                    <span className="small">{new BigNumber(props.lowPrice).toFormat(null,1)}</span>
                </div>
                <div className="col-4">
                    <div className="font-weight-light text-muted small">24h Volume</div>
                    <span className="small">{new BigNumber(props.quoteVolume).toFormat(null,1)}</span>
                </div>
            </Link>
        </div>
    </>
)

export default Row;