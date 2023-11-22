/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import "./statistique-root.component.scss";

import { Alert, CircularProgress, Snackbar } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router";
import Tableau from "../../../components/tableau/tableau.component";
import { Statistique } from "../../../components/tableau/types/Joueur";
import { apiUrl } from "../../../env";

const StatistiqueRoot = () => {
  const params = useParams<any>();
  const [stats, setStats] = useState<Statistique[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios
      .get(`${apiUrl}/equipes/${params.id}/stats`)
      .then((res) => {
        const response = res.data;
        console.log("REponses");

        if (response.ok) {
          setStats(response.data);
        } else {
          setError(response.err ? response.err : "Une erreur est survenue");
        }
      })
      .catch((err) => {
        const error = err.response.data;
        // eto tokony mijery status
        setError(error.err ? err.err : "Une erreur est survenue");
      });
  }, []);

  return (
    <div>
      <h1>Tableau Statistiques des joueurs</h1>
      {stats == null ? <CircularProgress /> : <Tableau stats={stats} />}

      <Snackbar
        open={error != null}
        onClose={() => {
          setError(null);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default StatistiqueRoot;
