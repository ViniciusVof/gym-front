import * as Components from "@mui/material";
import * as Icons from "@mui/icons-material";

export default function Title({
  title,
  pluralTitle,
  showAdd,
  addAction,
  type,
}) {
  function getFormattedTitle(type) {
    const types = {
      view: pluralTitle,
      edit: `Editar ${title}`,
      new: `Novo ${title}`,
    };
    return types[type];
  }

  return (
    <Components.Box
      component="section"
      sx={{
        display: "flex",
        p: 0,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {pluralTitle && (
        <Components.Typography variant="h6" component="h2">
          {getFormattedTitle(type)}
        </Components.Typography>
      )}
      {showAdd && (
        <Components.Button
          variant="contained"
          disableElevation
          startIcon={<Icons.Add />}
          onClick={addAction}
        >
          Novo {title}
        </Components.Button>
      )}
    </Components.Box>
  );
}
