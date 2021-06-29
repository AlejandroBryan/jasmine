"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
it('expect sum(5, 50) to equal 55', function () {
    expect(index_1.default(5, 50)).toEqual(55);
});
