"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
// load the environment variables from the .env file
dotenv_1.default.config({
    path: '.env'
});
var port = process.env.APP_PORT || 4848;
function run() {
    var app = express_1.default();
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    //app.use(indexRoutes);
    app.get("/", function (_, res) {
        res.type("application/json").send("Welcome to my api");
    });
    return app.listen(port, function () {
        // Port is forwarded by docker to 80.
        console.log("Listening on http://localhost:" + port);
    });
}
exports.run = run;
if (process.env.NODE_ENV !== "testing") {
    run();
}
//# sourceMappingURL=index.js.map