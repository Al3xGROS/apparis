import React, { useState, useEffect } from 'react';
import { data } from "../data";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const [tournages, setTournages] = useState([]);
    const [search_results, setsearcResults] = useState([]);
    const [annee_tournage, setAnneeTournage] = useState('');
    const [nom_tournage, setNomTournage] = useState('');
    const [nom_realisateur, setNomRealisateur] = useState('');
    const [nom_producteur, setNomProducteur] = useState('');
    const [ardt_lieu, setArdtLieu] = useState('');

    var open = false;

    useEffect(() => {
        setTournages(data);
    }, []);


    const handleSearch = () => {
        let results = tournages;
        if (annee_tournage) {
            results = results.filter(film => film.annee_tournage === annee_tournage);
        }
        if (nom_tournage) {
            results = results.filter(film => film.nom_tournage.toLowerCase().includes(nom_tournage.toLowerCase()));
        }
        if (nom_realisateur) {
            results = results.filter(film => film.nom_realisateur && film.nom_realisateur.toLowerCase().includes(nom_realisateur.toLowerCase()));
        }
        if (nom_producteur) {
            results = results.filter(film => film.nom_producteur && film.nom_producteur.toLowerCase().includes(nom_producteur.toLowerCase()));
        }
        if (ardt_lieu) {
            results = results.filter(film => film.ardt_lieu === ardt_lieu);
        }
        setsearcResults(results);
    }

    const reinitiate = () => {
        window.location.reload();
    }

    
    const open_close = () => {
        if (open === true) {
            document.getElementById("button_search").innerText = "Open";
            document.getElementById("inputs").style.display = "none";
            document.getElementById("submit").style.display = "none";
        }
        else {
            document.getElementById("button_search").innerText = "Close";
            document.getElementById("inputs").style.display = "inline-flex";
            document.getElementById("submit").style.display = "block";
        }
        open = !open;
    }

    
    return (
        <body>
            <div className="page">
                <div className="page_header">
                    <h1>Tournages A Paris</h1>
                    <h3>Voici tous les derniers tournages à Paris</h3>
                </div>
                <div className="page_body">
                    <div className="page_sub_body">
                        <div className="body_header">
                            <h3>RECHERCHER FILM :</h3>
                            <button className="page_button_search" onClick={() => open_close()} id="button_search">Open</button>
                        </div>
                        <br/>
                        <div className="page_inputs" id="inputs">
                            <input className="page_input" value={annee_tournage} onChange={event => setAnneeTournage(event.target.value)} type="text" placeholder="Année du tournage..."/>
                            <input className="page_input" value={nom_tournage} onChange={event => setNomTournage(event.target.value)} type="text" placeholder="Nom du tournage..."/>
                            <input className="page_input" value={nom_realisateur} onChange={event => setNomRealisateur(event.target.value)} type="text" placeholder="Nom du réalisateur..."/>
                            <input className="page_input" value={nom_producteur} onChange={event => setNomProducteur(event.target.value)} type="text" placeholder="Nom du producteur..."/>
                            <input className="page_input" value={ardt_lieu} onChange={event => setArdtLieu(event.target.value)} type="text" placeholder="Arrondissement du tournage..."/>
                        </div>
                        <br/>
                        <button className="page_button_submit" onClick={handleSearch} id="submit">Rechercher</button>
                        {search_results.length > 0 && 
                            <button className="page_button_exit" onClick={reinitiate}>Réinitialiser</button>
                        }
                    </div>
                    <table className="page_table">
                        <thead>
                            <tr>
                                <th title="Id_lieu">Id_lieu</th>
                                <th title="Annee_tournage">Annee_tournage</th>
                                <th title="Type_tournage">Type_tournage</th>
                                <th title="Nom_tournage">Nom_tournage</th>
                                <th title="Nom_realisateur">Nom_realisateur</th>
                                <th title="Nom_producteur">Nom_producteur</th>
                                <th title="Adresse_lieu">Adresse_lieu</th>
                                <th title="Ardt_lieu">Ardt_lieu</th>
                                <th title="Date_debut">Date_debut</th>
                                <th title="Date_fin">Date_fin</th>
                                <th title="Carte_détails">Carte_détails</th>
                            </tr>
                        </thead>
                        {search_results.length <= 0 && 
                            <tbody>
                            {tournages.map((tournage) => (
                                <tr key={tournage.id_lieu}>
                                    <td>{tournage.id_lieu}</td>
                                    <td>{tournage.annee_tournage}</td>
                                    <td>{tournage.type_tournage}</td>
                                    <td>{tournage.nom_tournage}</td>
                                    <td>{tournage.nom_realisateur}</td>
                                    <td>{tournage.nom_producteur}</td>
                                    <td>{tournage.adresse_lieu}</td>
                                    <td>{tournage.ardt_lieu}</td>
                                    <td>{tournage.date_debut}</td>
                                    <td>{tournage.date_fin}</td>
                                    <td><a href={`/tournage/${tournage.id_lieu}`} onClick={() => navigate(`/tournage/${tournage.id_lieu}`)}>Voir Details</a></td>
                                </tr>
                            ))}
                            </tbody>
                        }
                        {search_results.length > 0 && 
                            <tbody>
                            {search_results.map((tournage) => (
                                <tr key={tournage.id_lieu}>
                                    <td>{tournage.id_lieu}</td>
                                    <td>{tournage.annee_tournage}</td>
                                    <td>{tournage.type_tournage}</td>
                                    <td>{tournage.nom_tournage}</td>
                                    <td>{tournage.nom_realisateur}</td>
                                    <td>{tournage.nom_producteur}</td>
                                    <td>{tournage.adresse_lieu}</td>
                                    <td>{tournage.ardt_lieu}</td>
                                    <td>{tournage.date_debut}</td>
                                    <td>{tournage.date_fin}</td>
                                    <td><a href={`/tournage/${tournage.id_lieu}`} onClick={() => navigate(`/tournage/${tournage.id_lieu}`)}>Voir Details</a></td>
                                </tr>
                            ))}
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </body>
    );
}

export default Home;