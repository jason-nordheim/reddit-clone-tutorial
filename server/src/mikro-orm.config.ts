// packages
import { MikroORM } from "@mikro-orm/core";

// constants
import { __prod__ } from "./constants";

// entities for MikroORM
import { Post } from "./entities/posts";

// Configuration for MicroORM
// Note: This file is required for the CLI
export default {
  entities: [Post],
  dbName: "reddit-clone",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]; // add strong typing
