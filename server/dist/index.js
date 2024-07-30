"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Dependencies
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const UserAPI_1 = require("./api/UserAPI");
const TweetAPI_1 = require("./api/TweetAPI");
// Initialize express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Connect to mongo db
mongoose_1.default.connect(`mongodb+srv://tamtemtom235:furinabf123@cluster0.ibmusbt.mongodb.net/`);
(0, UserAPI_1.getUser)(app, {});
(0, UserAPI_1.createUser)(app);
(0, TweetAPI_1.getTweet)(app, {});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("SERVER RUNNING");
});
