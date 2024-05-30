
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <NavBar />
            <section className="hero is-fullheight is-dark">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1 has-text-white">Bienvenido</h1>
                        <p className="subtitle is-3 has-text-white">Seleccione una opción</p>
                        <div className="buttons are-large">
                            <button
                                className="button is-primary is-fullwidth"
                                onClick={() => handleNavigation('/equipos')}
                                style={{ marginBottom: '20px' }}
                            >
                                Equipos
                            </button>
                            <button
                                className="button is-info is-fullwidth"
                                onClick={() => handleNavigation('/videojuegos')}
                                style={{ marginBottom: '20px' }}
                            >
                                Juegos
                            </button>
                            <button
                                className="button is-success is-fullwidth"
                                onClick={() => handleNavigation('/empleados')}
                            >
                                Empleados
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
