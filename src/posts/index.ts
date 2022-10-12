import BookIcon from "@mui/icons-material/Book"
import PostCreate from "./PostCreate"
import PostEdit from "./PostEdit"
import PostList from "./PostList"
import PostDetail from "./PostDetail"

export const Posts = {
  list: PostList,
  create: PostCreate,
  edit: PostEdit,
  show: PostDetail,
  icon: BookIcon,
  recordRepresentation: "title",
}

export default Posts
