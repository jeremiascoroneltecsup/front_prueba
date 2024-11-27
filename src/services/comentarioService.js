import axios from 'axios';

const COMENTARIO_BASE_REST_API_URL = "http://localhost:8081/api/v1/comentarios";

class ComentarioService {
    addComentario(publicacionId, contenido) {
        return axios.post(`${COMENTARIO_BASE_REST_API_URL}/${publicacionId}/comentarios`, { contenido });
    }

    getComentariosByPublicacionId(publicacionId) {
        return axios.get(`${COMENTARIO_BASE_REST_API_URL}/${publicacionId}/comentarios`);
    }

    deleteComentario(comentarioId) {
        return axios.delete(`${COMENTARIO_BASE_REST_API_URL}/${comentarioId}`);
    }

    updateComentario(comentarioId, contenido) {
        return axios.put(`${COMENTARIO_BASE_REST_API_URL}/${comentarioId}`, { contenido });
    }
}

export default new ComentarioService();