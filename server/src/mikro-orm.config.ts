import { __prod__ } from "./constants";
import { Post } from "./entities/posts";

export default {
  entities: [Post],
  dbName: "reddit-clone",
  type: "postgresql",
  debug: !__prod__,
};
