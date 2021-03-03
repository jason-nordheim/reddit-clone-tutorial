

// packages
import { MikroORM } from "@mikro-orm/core";



const Main = async () => {
  const Orm = await MikroORM.init();
};
Main().catch((reason) => {
  console.error(reason);
});
