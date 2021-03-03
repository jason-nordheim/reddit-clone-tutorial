// packages
import { MikroORM } from "@mikro-orm/core";
import path from "path";

// constants
import { __prod__ } from "./constants";

// entities for MikroORM
import { Post } from "./entities/posts";

// Configuration for MicroORM
// Note: This file is required for the CLI
export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // get absolute path
    pattern: /^[\w-]+\d+\.[tj]s$/, // match javascript or typescript
  },
  entities: [Post],
  dbName: "reddit-clone",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]; // add strong typing
