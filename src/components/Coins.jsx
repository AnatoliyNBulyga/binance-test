import React, {useEffect} from 'react';
import DataTable from "./CoinsTable";
import {useDispatch, useSelector} from "react-redux";
import {CoinActonCreators} from "../store/reducers/coins/action_creators";
import {BASE_URL} from "../config";
import Loader from "./Loader";

const socket = new WebSocket(`${BASE_URL}!ticker@arr&limit=10`);

const Coins = () => {
    const dispatch = useDispatch();
    const {data, isLoaded} = useSelector(state => state.coins);
    const getTickerBySymbol = (data) => {
        let ticker = {}
        data.forEach(item => {
            let symbol = item.symbol || item.s;
            ticker[symbol] = {
                symbol: symbol,
                lastPrice: item.lastPrice || item.c,
                priceChange: item.priceChange || item.p,
                priceChangePercent: item.priceChangePercent || item.P,
                highPrice: item.highPrice || item.h,
                lowPrice: item.lowPrice || item.l,
                quoteVolume: item.quoteVolume || item.q,
            }
        })
        return ticker;
    }
    const connectSocketStreams = () => {
        socket.onmessage = evt => {
            const ticker = getTickerBySymbol(JSON.parse(evt.data).data);
            dispatch(CoinActonCreators.setPrices(ticker));
            dispatch(CoinActonCreators.isLoaded(true));
        }
        socket.onerror = evt => {
            console.error(evt);
        }
    }
    const disconnectSocketStreams = () => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.close();
        }
    }

    useEffect(() => {
        connectSocketStreams();
        return () => disconnectSocketStreams();
    }, [])

    if (!isLoaded) return <Loader />
    return (
        <div>
            {data && <DataTable ticker={data}/> }
        </div>
    );
};

export default Coins;