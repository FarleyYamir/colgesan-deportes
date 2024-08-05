import React from 'react';
import './style/Resultados.css'; // Importa el archivo CSS específico

function Resultados() {
    return (
        <div className="resultados-container">
            <br></br>
            <br></br>
            <h1 className="resultados-title">RESULTADOS Y CLASIFICACIONES</h1>
            <br></br>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Posición</th>
                            <th scope="col">Nombre de Equipo</th>
                            <th scope="col">Grado</th>
                            <th scope="col">Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Falcao</td>
                            <td>9-01</td>
                            <td>Semifinalista</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Pibe</td>
                            <td>9-02</td>
                            <td>Semifinalista</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Cordoba</td>
                            <td>11-01</td>
                            <td>Semifinalista</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>James</td>
                            <td>11-02</td>
                            <td>Semifinalista</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Resultados;
