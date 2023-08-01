import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Poke() {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });
    return (
        <div>
            <h1>You Choose <span style={{ color: 'red' }}> {num} value</span></h1>
            <h1>My name <span style={{ color: 'red' }}> is {name}</span></h1>
            <h1> I have <span style={{ color: 'red' }}> {moves} Moves</span></h1>
            <select value={num} onChange={(e) => {
                setNum(e.target.value)
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default Poke;