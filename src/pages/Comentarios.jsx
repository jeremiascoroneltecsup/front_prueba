import React, { useEffect, useState } from 'react';
import comentarioService from '../services/comentarioService'; 
import ListComentariosComponent from '../components/Comentario/ListComentariosComponent';
import AddComentarioComponent from '../components/Comentario/AddComentarioComponent';

const Comentarios = ({ publicacionId }) => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    listarComentarios();
  }, [publicacionId]);

  const listarComentarios = () => {
    comentarioService.getComentariosByPublicacionId(publicacionId).then(response => {
      setComentarios(response.data);
    }).catch(error => {
      console.log(error);
    });
  };

  const deleteComentario = (comentarioId) => {
    comentarioService.deleteComentario(comentarioId).then(() => {
      listarComentarios();
    }).catch(error => {
      console.log(error);
    });
  };

  const editComentario = (comentarioId, nuevoContenido) => {
    comentarioService.updateComentario(comentarioId, nuevoContenido).then(() => {
      listarComentarios();
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <div>
      <h1>Comentarios</h1>
      <AddComentarioComponent publicacionId={publicacionId} onComentarioAdded={listarComentarios} />
      <ListComentariosComponent
        publicacionId={publicacionId}
        onDelete={deleteComentario}  // Aquí se pasa la función correctamente.
        onEdit={editComentario}      // Aquí también.
      />
    </div>
  );
};

export default Comentarios;
