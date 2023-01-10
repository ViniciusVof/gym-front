import { Box, Button, TextField } from "@mui/material";

export default function Form({ fields, type, formik }) {
  return (
    <Box
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
      sx={{ mt: 1 }}
    >
      {fields.map((field) => (
        <TextField
          margin={field.margin ?? "normal"}
          required={field.required ?? false}
          fullWidth={field.fullWidth ?? false}
          id={field.id ?? field.name}
          label={field.label}
          name={field.name}
          autoComplete={field.autoComplete ?? field.name}
          autoFocus={field.autoFocus ?? false}
          type={field.type ?? "text"}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[field.name]}
          helperText={formik.touched[field.name] && formik.errors[field.name]}
          error={formik.touched[field.name] && formik.errors[field.name]}
        />
      ))}

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {type === "edit" ? "Editar" : "Cadastrar"}
      </Button>
    </Box>
  );
}
