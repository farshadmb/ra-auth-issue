import React, { FC, useState } from "react"
import { required, Form, TextInput } from "react-admin"
import { useNotify, useTranslate } from "react-admin"
import {
  Button,
  Box,
  CircularProgress,
  Card,
  Typography,
  CardActions,
} from "@mui/material"
import { Link } from "react-router-dom"
import { ArrowBack as BackIcon } from "@mui/icons-material"

export interface ForgotPasswordProps {
  className?: string
}

interface FormData {
  username?: string
  email?: string
}

const firstBoxCss = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "grey.300",
}

const cardCss = {
  width: "80%",
  maxWidth: "400px",
  margin: "1em",
  padding: "1em",
  borderRadius: "12px",
}

const ForgotPasswordPage: FC<ForgotPasswordProps> = (props) => {
  const { className } = props
  const translate = useTranslate()
  const notify = useNotify()
  const [isLoading, setLoading] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const submitAction = (values: FormData) => {
    setLoading(true)
    notify("trying", { type: "warning" })
    return
  }

  return (
    <Form
      onSubmit={submitAction}
      mode="onChange"
      noValidate
      className={className}>
      <Box sx={firstBoxCss}>
        <Card sx={cardCss}>
          <Box
            sx={{ margin: "0.5em", display: "flex", justifyContent: "center" }}>
            <img src="" alt="logo" height="75pt" />
          </Box>
          <Box
            sx={{
              margin: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <Typography color="text.primary" variant="h6">
              Forgot Password?
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {
                "Enter a emaill address or username associated with your account and we'll send you a link to reset your password"
              }
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
                  textTransform: "none",
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
                  <>Continue</>
                )}
              </Button>
            </CardActions>
          </Box>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                padding: "1em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <BackIcon sx={{ color: "inherit" }} />
              Back to login
            </Typography>
          </Link>
        </Card>
      </Box>
    </Form>
  )
}

export default ForgotPasswordPage
