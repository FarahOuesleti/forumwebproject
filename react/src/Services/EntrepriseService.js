import axios from 'axios';

const ENTREPRISE_API_BASE_URL = "http://localhost:8080/api/v1/entreprises";

class EntrepriseService {
  getEntreprises() {
    return axios.get(ENTREPRISE_API_BASE_URL);
  }
}

export default new EntrepriseService();