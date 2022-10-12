import React, { FC, useState } from "react"
import { required, Form, TextInput } from "react-admin"
import {
  Button,
  Box,
  CircularProgress,
  Card,
  Typography,
  CardActions,
} from "@mui/material"
import { useLogin, useNotify, useTranslate } from "react-admin"
import { Link } from "react-router-dom"

const firstBoxCss = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "grey.300",
}

const cardCss = {
  minWidth: 250,
  maxWidth: 450,
  marginTop: "1.5em",
  marginLeft: "16px",
  marginRight: "16px",
  padding: "8px",
  borderRadius: "12px",
}

export interface LoginFormProps {
  redirectTo?: string
  className?: string
}

interface FormData {
  username: string
  password: string
}

const LoginPage: FC<LoginFormProps> = (props) => {
  const { redirectTo, className } = props
  const login = useLogin()
  const translate = useTranslate()
  const notify = useNotify()
  const [isLoading, setLoading] = useState(false)

  const loginAction = (values: FormData) => {
    setLoading(true)
    login(values, redirectTo)
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false)
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
            ? "ra.auth.sign_in_error"
            : error.message,
          {
            type: "warning",
            messageArgs: {
              _:
                typeof error === "string"
                  ? error
                  : error && error.message
                  ? error.message
                  : undefined,
            },
          },
        )
      })
  }

  return (
    <Form
      onSubmit={loginAction}
      mode="onChange"
      noValidate
      className={className}>
      <Box sx={firstBoxCss}>
        <Card sx={cardCss}>
          <Box
            sx={{ margin: "1em", display: "flex", justifyContent: "center" }}>
            <img src="" alt="logo" height="100pt" />
          </Box>
          <Box
            sx={{
              marginTop: "1em",
              display: "flex",
              justifyContent: "center",
            }}>
            <Typography color="text.primary" variant="h2">
              Login
            </Typography>
          </Box>
          <Box sx={{ margin: "1em" }}>
            <TextInput
              autoFocus
              source="username"
              label={translate("ra.auth.username")}
              disabled={isLoading}
              isRequired
              helperText="username or email address"
              validate={[required("Provide a username.")]}
              fullWidth
            />
            <TextInput
              source="password"
              type="password"
              label={translate("ra.auth.password")}
              disabled={isLoading}
              autoComplete="current-password"
              isRequired
              validate={required()}
              fullWidth
            />
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "-1em",
              }}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                disabled={isLoading}
                sx={(theme) => ({
                  alignmentBaseline: "center",
                  marginTop: theme.spacing(2),
                  width: "100%",
                })}>
                {isLoading ? (
                  <CircularProgress
                    size={25}
                    thickness={4.0}
                    color="primary"
                    sx={{ padding: "2px" }}
                  />
                ) : (
                  //translate("ra.auth.login_in")
                  <>Login</>
                )}
              </Button>
            </CardActions>
          </Box>
          <Link to={"/forgot-password"} style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", padding: "16px" }}>
              Forgot password?
            </Typography>
          </Link>
        </Card>
      </Box>
    </Form>
  )
}

export default LoginPage
