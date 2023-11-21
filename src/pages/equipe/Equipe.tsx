import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";

  const Equipe = ()=>{
    return(
        <div className="tab">
        <TableContainer>
          <Table aria-label="simple table">

            <TableHead  className="table-head">
              <TableRow className="table-row">
                <TableCell>Nom Equipe</TableCell>
                <TableCell>
                    
                </TableCell>

                

              </TableRow>
            </TableHead>
            <TableBody>
                    <TableRow>
                        <TableCell>Equipe1</TableCell>
                        <TableCell>
                            <Button variant="contained">
                                Voir Statistique
                            </Button>
                        </TableCell>
                        
                    </TableRow>
                    <TableRow>
                        <TableCell>Equipe2</TableCell>
                        <TableCell>
                            <Button variant="contained">
                                Voir Statistique
                            </Button>
                        </TableCell>
                        
                    </TableRow>
                    <TableRow>
                        <TableCell>Equipe3</TableCell>
                        <TableCell>
                            <Button variant="contained">
                                Voir Statistique
                            </Button>
                        </TableCell>
                        
                    </TableRow>
                </TableBody>
                
          </Table>
        </TableContainer>
        </div>
    );
  };

  export default Equipe;

