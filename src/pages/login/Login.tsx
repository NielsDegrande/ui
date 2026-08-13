import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "i18next";
import { User, Lock } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { CenterMiddleContainer } from "src/components/center-middle-container/CenterMiddleContainer";
import ThemeToggle from "src/components/theme-toggle/ThemeToggle";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import Welcome from "src/components/welcome/Welcome";
import Error from "src/pages/error/Error";
import { logIn } from "src/utils/authentication";

const loginSchema = z.object({
  username: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
});

type LoginValues = z.infer<typeof loginSchema>;

/**
 * Renders the Login page.
 */
const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (values: LoginValues): void => {
    logIn(values.username, values.password, navigate);
  };

  return (
    <ErrorBoundary fallback={<Error />}>
      <div className="relative min-h-screen">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <CenterMiddleContainer>
          <Welcome />
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  {t("login.username")}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    placeholder={t("login.username")}
                    className="pl-10"
                    {...register("username")}
                  />
                </div>
                <div className="text-sm text-destructive">
                  {errors.username && <div>{errors.username.message}</div>}
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
                    type="password"
                    placeholder={t("login.password")}
                    className="pl-10"
                    {...register("password")}
                  />
                </div>
                <div className="text-sm text-destructive">
                  {errors.password && <div>{errors.password.message}</div>}
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {t("login.login")}
              </Button>
            </form>
          </div>
        </CenterMiddleContainer>
      </div>
    </ErrorBoundary>
  );
};

export default Login;
