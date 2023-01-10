import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import * as Icons from "@mui/icons-material";

export default function ResultsList({
  rows,
  columns,
  cbEditAction,
  cbDeleteAction,
}) {
  return rows.length > 0 ? (
    <TableContainer
      component={Paper}
      sx={{ my: 2 }}
      elevation={0}
      variant="outlined"
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} align={column.align}>
                {column.label}
              </TableCell>
            ))}
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((col, indexCol) => (
                <TableCell key={indexCol}>{row[col.field]}</TableCell>
              ))}

              <TableCell align="right">
                <IconButton
                  color="primary"
                  aria-label="editar"
                  component="label"
                  onClick={() => cbEditAction(row.id)}
                >
                  <Icons.Edit />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="excluir"
                  component="label"
                  onClick={() => cbDeleteAction(row.id)}
                >
                  <Icons.Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Paper variant="outlined" elevation={0} sx={{ p: 2, my: 2 }}>
      <Typography>Nenhum resultado encontrado</Typography>
    </Paper>
  );
}
