import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'

function Warehouse() {
  const [storeInfo, setStoreInfo] = useState({
      store: 'jongno',
      product: 'Apple watch series 6'
  });
//   const HOST = 'http://localhost:8000';
  const HOST = 'https://l155m9dcql.execute-api.ap-northeast-2.amazonaws.com/api';

  return (
    <div className="App">
      <header className="App-header">
        <select className="btn btn-lg btn-outline-secondary dropdown-toggle" onChange={
            (e) => {
                const value = e.target.value;
                setStoreInfo(preState => {
                    return {...preState, store: value}
                });
            }
        }>
            <option value="jongno">종로</option>
            <option value="gangnam">강남</option>
            <option value="pangyo">판교</option>
        </select>&nbsp;
        <input type="text" className="input-group-text" value={storeInfo.product} onChange={
            (e) => {
                const value = e.target.value;
                setStoreInfo(preState => {
                    return {...preState, product: value}
                });
            }
        }/>&nbsp;
        <button className="btn btn-outline-primary" onClick={
            () => {
                axios.post(`${HOST}/warehouse`, storeInfo)
                .then(function (response) {
                    alert(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
            }
        }>
        신상입고
        </button>
      </header>
    </div>
  );
}

export default Warehouse;