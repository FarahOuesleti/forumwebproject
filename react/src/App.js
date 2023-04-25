
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarShort from "./Components/NavbarShort.component";
import Acceuil from "./Components/Acceuil.component";
import Login from './Components/Login.component';
import Inscription from './Components/Inscription.component';
import AddComp from "./Components/AddComp.component";
import AddDep from "./Components/AddDep.component";
import AddCandid from "./Components/AddCandid.component";

import AdminLogin from './Components/LoginComponents/AdminLogin.Component';
import EtudiantLogin from './Components/LoginComponents/EtudiantLogin.Component';
import ExposantLogin from './Components/LoginComponents/ExposantLogin.Component';

import InscriptionAdmin from './Components/InscriptionComponents/InscriptionAdmin.component';
import InscriptionEtudiant from './Components/InscriptionComponents/InscriptionEtudiant.component';
import InscriptionExposant from './Components/InscriptionComponents/InscriptionExposant.component';

import AddOffreStage from './Components/EspacesComponents/AddOffreStage.component';

import ListEtudiant from './Components/EspacesComponents/ListEtudiant.component';
import ListEntreprise from './Components/EspacesComponents/ListEntreprise.component';
import ListeOffreStage from './Components/EspacesComponents/ListeOffreStage.component';

import EspaceAdmin from './Components/EspacesComponents/EspaceAdmin.component';
import EspaceEtudiant from './Components/EspacesComponents/EspaceEtudiant.component';
import EspaceExposant from './Components/EspacesComponents/EspaceExposant.component';

function App() {
  return (
    <Router>
      <div className="container">
        <NavbarShort />

        <Routes>
          <Route path="/" element={<Acceuil />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/EtudiantLogin" element={<EtudiantLogin />} />
          <Route path="/ExposantLogin" element={<ExposantLogin />} />

          <Route path="/Inscription" element={<Inscription />} />

          <Route path="/InscriptionAdmin" element={<InscriptionAdmin />} />
          <Route path="/InscriptionEtudiant" element={<InscriptionEtudiant />} />
          <Route path="/InscriptionExposant" element={<InscriptionExposant />} />

          <Route path="/AddComp" element={<AddComp />} />
          <Route path="/AddDep" element={<AddDep />} />
          <Route path="/AddCandid" element={<AddCandid />} />
          <Route path="/AddOffreStage" element={<AddOffreStage />} />

          <Route path="/students" element={<EspaceAdmin />} />

          <Route path="/ListEntreprise" element={<ListEntreprise />} />
          <Route path="/ListEtudiant" element={<ListEtudiant />} />
          <Route path="/ListeOffreStage" element={<ListeOffreStage />} />

          <Route path="/EspaceEtudiant" element={<EspaceEtudiant />} />
          <Route path="/EspaceExposant" element={<EspaceExposant />} />
          <Route path="/EspaceAdmin" element={<EspaceAdmin />} />


        </Routes>

      </div>

    </Router>

  );
}

export default App;