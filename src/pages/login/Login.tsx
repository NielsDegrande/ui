import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { t } from "i18next";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { CenterMiddleContainer } from "src/components/center-middle-container/CenterMiddleContainer";
import { PrimaryButton } from "src/components/primary-button/PrimaryButton";
import Welcome from "src/components/welcome/Welcome";
import Error from "src/pages/error/Error";
import { StyledForm } from "src/pages/login/Login.styled";
import { logIn } from "src/utils/authentication";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

/**
 * Renders the Login page.
 */
const Login = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary fallback={<Error />}>
      <CenterMiddleContainer>
        <Welcome />
        <StyledForm>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const { username, password } = values;
              logIn(username, password, navigate);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="username"
                      label={t("login.username")}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      helperText={
                        <ErrorMessage name="username" component="div" />
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="password"
                      type="password"
                      label={t("login.password")}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      helperText={
                        <ErrorMessage name="password" component="div" />
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PrimaryButton
                      type="submit"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {t("login.login")}
                    </PrimaryButton>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </StyledForm>
      </CenterMiddleContainer>
    </ErrorBoundary>
  );
};

export default Login;
