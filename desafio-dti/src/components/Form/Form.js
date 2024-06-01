import { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {

    const [data, setData] = useState({
        smallDogs: "",
        largeDogs: "",
        date: ""
    });
    const [result, setResult] = useState(null);
    const [err, setErr] = useState(null);

    const submit = (e) => {
        e.preventDefault();

        const dateParts = data.date.split("-");
        const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

        const requestData = {
            smallDogs: parseInt(data.smallDogs, 10),
            largeDogs: parseInt(data.largeDogs, 10),
            date: formattedDate
        };

        axios.post('http://localhost:8080/api/calcular', requestData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                setResult(res.data);
                setErr(null);
            })
            .catch(error => {
                setErr(error.response ? error.response.data : "Erro ao fazer a requisição.");
                setResult(null);
            });
    }

    const handle = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    return (
        <section className="form">
            <form onSubmit={submit}>
                <h2>Preencha os dados para calcular o melhor Petshop</h2>
                <label>Digite a quantidade de Cachorros Grandes</label>
                <input
                    type="number"
                    min="0"
                    placeholder="Selecione a quantidade de cachorros grandes."
                    onChange={handle}
                    id="largeDogs"
                    value={data.largeDogs}
                />
                <label>Digite a quantidade de Cachorros Pequenos</label>
                <input
                    type="number"
                    min="0"
                    placeholder="Selecione a quantidade de cachorros pequenos."
                    onChange={handle}
                    id="smallDogs"
                    value={data.smallDogs}
                />
                <label>Escolha a data do banho</label>
                <input
                    type="date"
                    onChange={handle}
                    id="date"
                    value={data.date}
                />
                <div className="conteiner">
                    <button className="button" type="submit">Calcular valor</button>
                </div>
                {result && (
                    <div className="result">
                        <h3>Petshop com melhor preço:</h3>
                        <p>Melhor Petshop: {result.bestPetshop}</p>
                        <p>Valor Total: R$ {result.totalPrice}</p>
                    </div>
                )}
                {err && <div className="error">{err.message}</div>}
            </form>
        </section>
    );
};

export default Form;
