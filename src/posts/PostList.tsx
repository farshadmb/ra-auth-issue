import React, { FC } from "react"
import { Typography } from "@mui/material"

const PostList: FC<any> = (props) => {
  console.log(props)
  return (
    <>
      <Typography variant="h3">Post List Page</Typography>
    </>
  )
}

export default PostList
