import { XMLCreator } from "../../src/services/xml-creator";
import { join } from "path";
import * as fs from "fs";
import "jest-xml-matcher";

describe("XMLCreator", () => {
    const xmlCreator: XMLCreator = new XMLCreator();

    describe("createResultXML", () => {
        test("when a result with 0 steps is given", () => {
            const result: string[] = [];

            const xmlResult: string =
                fs.readFileSync(join(__dirname, "./data/xml-creator/example1.xml"), "utf8");

            expect(xmlCreator.createResultXML(result)).toEqualXML(xmlResult);
        });

        test("when a result with 1 step is given", () => {
            const result: string[] = [
                "10 + 20 = 30"
            ];

            const xmlResult: string =
                fs.readFileSync(join(__dirname, "./data/xml-creator/example2.xml"), "utf8");

            expect(xmlCreator.createResultXML(result)).toEqualXML(xmlResult);
        });

        test("when a result with 5 steps is given", () => {
            const result: string[] = [
                "10 + 20 = 30",
                "30 + 20 = 50",
                "50 + 20 = 70",
                "70 + 10 = 80",
                "90 + 20 = 110"
            ];

            const xmlResult: string =
                fs.readFileSync(join(__dirname, "./data/xml-creator/example3.xml"), "utf8");

            expect(xmlCreator.createResultXML(result)).toEqualXML(xmlResult);
        });
    });
});