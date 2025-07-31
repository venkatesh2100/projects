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
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = (0, redis_1.createClient)();
client.on('error', (err) => console.log("Redis Clinet Error", err));
app.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Hi from cakll');
}));
app.post('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const price = req.body.price;
    const size = req.body.size;
    try {
        yield client.lPush('plant', JSON.stringify({ name, price, size }));
        res.status(200).send('Submisison recived and Stored');
    }
    catch (err) {
        console.error("redis Error", err);
    }
    res.status(500).send("Failed to store in Redis");
}));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("connected to Redis");
            app.listen(3000, () => console.log('Redis is Running on port 3000'));
        }
        catch (err) {
            console.error('Failed to connec Redis');
        }
    });
}
startServer();
