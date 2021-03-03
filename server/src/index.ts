// constants
import { __prod__ } from "./constants";

// packages
import { MikroORM } from "@mikro-orm/core";

// entities for MikroORM
import { Post } from "./entities/posts";

const Main = async () => {
  const Orm = await MikroORM.init({
    entities: [Post],
    dbName: "reddit-clone",
    type: "postgresql",
    debug: !__prod__,
  });
};
Main().catch((reason) => {
  console.error(reason);
});
