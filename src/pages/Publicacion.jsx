import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import publicacionService from '../services/publicacionService';
import PublicacionItem from '../components/Publicacion/PublicacionItem';
import ComentarioItem from '../components/Comentario/ComentarioItem';

const Publicacion = () => {
    const { id } = useParams();
    const [publicacion, setPublicacion] = useState(null);
    const [comentarios, setComentarios] = useState([]);
    const [nuevoComentario, setNuevoComentario] = useState('');

    useEffect(() => {
        if (id) {
            publicacionService.getPublicacionById(id).then(response => {
                setPublicacion(response.data);
            }).catch(error => {
                console.log(error);
            });

            publicacionService.getComentariosByPublicacionId(id).then(response => {
                setComentarios(response.data);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);

    const handleAddComentario = () => {
        if (!nuevoComentario.trim()) {
            console.error('El comentario no puede estar vacío');
            return;
        }
        publicacionService.addComentario(id, nuevoComentario).then(response => {
            setComentarios([...comentarios, response.data]);
            setNuevoComentario('');
        }).catch(error => {
            console.error('Error al agregar comentario:', error);
            // Mostrar un mensaje de error al usuario
        });
    };

    if (!publicacion) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container">
            <PublicacionItem publicacion={publicacion} />
            <div className="mt-4 comentarios-section">
                <h3 className="text-white">Comentarios</h3>
                <div className="form-group">
                    <textarea
                        className="form-control comentario-input"
                        placeholder="Escribe un comentario"
                        value={nuevoComentario}
                        onChange={(e) => setNuevoComentario(e.target.value)}
                    />
                    <button className="btn btn-primary mt-2" onClick={handleAddComentario}>Comentar</button>
                </div>
                {comentarios.map(comentario => (
                    <ComentarioItem key={comentario.id} comentario={comentario} />
                ))}
            </div>
        </div>
    );
};

export default Publicacion;
