"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTweet = exports.createTweet = void 0;
const Tweet_1 = __importDefault(require("../models/Tweet"));
const createTweet = (app) => {
    app.post("/createTweet", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const tweet = req.body;
        const newTweet = new Tweet_1.default(tweet);
        yield newTweet.save();
        res.json(tweet);
    }));
};
exports.createTweet = createTweet;
const getTweet = (app, query) => {
    app.get("/getTweet", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let result = yield Tweet_1.default.find(query);
        res.status(200).json(result);
    }));
};
exports.getTweet = getTweet;
