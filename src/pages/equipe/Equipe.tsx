import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { apiUrl } from "../../env";

interface Equipe {
  id: number;
  nom: string;
}

const Equipe = () => {
  const [equipes, setEquipes] = useState<Equipe[]>([]);

  const params = useParams<any>();

  useEffect(() => {
    console.log("fetching equipe");
    axios
      .get(`${apiUrl}/equipes`)
      .then((res) => {
        console.log(res);
        setEquipes(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="tab">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Liste des equipes
      </h1>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {equipes.map((e) => (
              <TableRow>
                <TableCell>{e.nom}</TableCell>
                <TableCell>
                  <Link to={`/equipes/${e.id}/stats`}>
                    <Button className="details" variant="contained">
                      Voir Statistique
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Equipe;
