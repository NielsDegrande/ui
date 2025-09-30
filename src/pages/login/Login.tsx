import { ErrorMessage, Form, Formik } from "formik";
import { t } from "i18next";
import { User, Lock } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { CenterMiddleContainer } from "src/components/center-middle-container/CenterMiddleContainer";
import ThemeToggle from "src/components/theme-toggle/ThemeToggle";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import Welcome from "src/components/welcome/Welcome";
import Error from "src/pages/error/Error";
import { logIn } from "src/utils/authentication";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

/**
 * Renders the Login page.
 */
const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary fallback={<Error />}>
      <div className="relative min-h-screen">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <CenterMiddleContainer>
          <Welcome />
          <div className="w-full max-w-md">
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                const { username, password } = values;
                logIn(username, password, navigate);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, handleChange, values }) => (
                <Form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium">
                      {t("login.username")}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="username"
                        name="username"
                        placeholder={t("login.username")}
                        className="pl-10"
                        value={values.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-sm text-destructive">
                      <ErrorMessage name="username" component="div" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      {t("login.password")}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder={t("login.password")}
                        className="pl-10"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-sm text-destructive">
                      <ErrorMessage name="password" component="div" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {t("login.login")}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </CenterMiddleContainer>
      </div>
    </ErrorBoundary>
  );
};

export default Login;
