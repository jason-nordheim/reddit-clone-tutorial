# Reddit Clone Server

## Available Commands

- `yarn watch` - re-compiles typescript files from the `src/` directory into the `dist/` directory.
- `yarn start` - runs the `index.js` file from the `dist/` directory.
- `yarn dev` - watches the `dist/` directory and re-runs `dist/index.js` whenever a change is detected

## Server Overview

| Platform | Node.js |
| Language | TypeScript |
| Database | PostgreSQL |
| ORM | MikroORM |

### MikroORM

Data modeling is implemented using an Object-relational-mapper (ORM). The NPM package is `@mikro-orm` - vendor documentation can be found [here](https://mikro-orm.io/).

#### CLI

The MikrORM CLI is a Node package: `@mikro-orm/cli`. Once installed it can be run using Node, Npx, or Yarn:

```sh
# manually
$ node node_modules/.bin/mikro-orm

# via npx
$ npx mikro-orm

# or via yarn
$ yarn mikro-orm
```

A `src/mikro-orm.config.js` file will need to be created and supplied with the necessary information to connect to the associated database product (PostgreSQL, SQL, MariaDB, MongoDB, etc.)

#### Setup

MikroORM requires that support for _decorators_ as well as `esModuleInterop`, which should be configured in the `tsconfig.json` with the following settings:

```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"esModuleInterop": true,
```

Initialization or Bootstrapping is accomplished by referencing `MikroORM` from `@mikro-orm/core` and passing a configuration object to its' `init()` function.

Here is the example from

```ts
const orm = await MikroORM.init({
  entities: [Author, Book, BookTag],
  dbName: "my-db-name",
  type: "mongo", // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
  clientUrl: "...", // defaults to 'mongodb://localhost:27017' for mongodb driver
});
console.log(orm.em); // access EntityManager via `em` property
```

```ts
import { MikroORM } from "@mikro-orm/core";
```

#### Entities

All the entities associated with this application are defined in the `src/entities/` directory.

MikroORM provides multiple APIs for defining entities. The object returned from `.inti()` Functions related to Entities are referenced within MikroORM's "Entity Manager" - aliased as `em`.

This application is built using the _class_ based syntax which incorporates [TypeScript decorators](https://www.typescriptlang.org/docs/handbook/decorators.html).

##### Creating Entities

The entities defined in this project are _created_ using the `MikroORM.em.create()` function, which receives an object that contains the initial values for the new database object.

```ts
/* the create method will return an unsaved instance of 
  the database object. */
const newEntity = await MikroOrm.em.create({
  property1: value1,
  property2: value2,
});
```

Please note: the `create()` function only creates a database object. It does **not** save the object to the database.

> MikroORM does support "creating" new database objects using constructors, but that is not the approach utilized in this project.

##### Saving Entities

Using MikroORM, the most basic save is done using the `nativeInsert()` function

In order for a database object to be _persisted_ or saved to the database, MikroORM provides a `persistAndFlush()` function.

```ts
/* persist and flush receives the entity returned from .create(), 
   then commits the new object into the database */
await MikroOrm.em.persistAndFlush(newEntity);
```

>
