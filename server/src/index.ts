// packages
import { MikroORM } from "@mikro-orm/core";

// config
import config from "./mikro-orm.config";

const Main = async () => {
  const Orm = await MikroORM.init(config);
};
Main().catch((reason) => {
  console.error(reason);
});
