"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const posts_1 = require("./entities/posts");
exports.default = {
    entities: [posts_1.Post],
    dbName: "reddit-clone",
    type: "postgresql",
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map