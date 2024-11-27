import axios from 'axios';
import comentarioService from './comentarioService';

const PUBLICACION_BASE_REST_API_URL = "http://localhost:8081/api/v1/publicaciones";

class PublicacionService {
    getAllPublicaciones() {
        return axios.get(PUBLICACION_BASE_REST_API_URL);
    }

    createPublicacion(publicacion) {
        return axios.post(PUBLICACION_BASE_REST_API_URL, publicacion, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    getPublicacionById(publicacionId) {
        return axios.get(`${PUBLICACION_BASE_REST_API_URL}/${publicacionId}`);
    }

    updatePublicacion(publicacionId, publicacion) {
        return axios.put(`${PUBLICACION_BASE_REST_API_URL}/${publicacionId}`, publicacion, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    deletePublicacion(publicacionId) {
        return axios.delete(`${PUBLICACION_BASE_REST_API_URL}/${publicacionId}`);
    }

    addComentario(publicacionId, contenido) {
        return comentarioService.addComentario(publicacionId, contenido);
    }

    deleteComentario(publicacionId, comentarioId) {
        return axios.delete(`${PUBLICACION_BASE_REST_API_URL}/${publicacionId}/comentarios/${comentarioId}`);
    }

    updateComentario(publicacionId, comentarioId, contenido) {
        return axios.put(`${PUBLICACION_BASE_REST_API_URL}/${publicacionId}/comentarios/${comentarioId}`, { contenido });
    }

    getComentariosByPublicacionId(publicacionId) {
        return comentarioService.getComentariosByPublicacionId(publicacionId);
    }
}

export default new PublicacionService();