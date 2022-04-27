import {BigNumberConvertor} from "../convertors/big-number-convertor";

export abstract class Operator {
    protected bigNumberConvertor: BigNumberConvertor;

    constructor() {
        this.bigNumberConvertor = new BigNumberConvertor();
    }

    abstract getSymbol(): string;
}