/**
 * @jest-environment jsdom
 */

import { XMLParser } from "../../src/services/xml-parser";
import { join } from "path";
import * as fs from "fs";

describe("XMLParser", () => {
    const xmlParser: XMLParser = new XMLParser(new DOMParser());

    test("extracting expression when receiving a variable-only expression", () => {
        const result: string = "(a + b) * (c - d)";

        const xmlContent: string =
                fs.readFileSync(join(__dirname, "./data/xml-parser/example1.xml"), "utf8");

        expect(xmlParser.extractExpression(xmlContent)).toEqual(result);
    });

    test("extracting variables when receiving a variable-only expression", () => {
        const result: Map<string, string> = new Map([["a", "10"], ["b", "2"], ["c", "30"], ["d", "25"]]);

        const xmlContent: string =
                fs.readFileSync(join(__dirname, "./data/xml-parser/example1.xml"), "utf8");

        expect(xmlParser.extractVariables(xmlContent)).toEqual(result);
    });

    test("extracting expression when receiving a constant-only expression", () => {
        const result: string = "10 + 20 * 30";

        const xmlContent: string =
                fs.readFileSync(join(__dirname, "./data/xml-parser/example2.xml"), "utf8");

        expect(xmlParser.extractExpression(xmlContent)).toEqual(result);
    });

    test("extracting variables when receiving a constant-only expression", () => {
        const result: Map<string, string> = new Map();

        const xmlContent: string =
                fs.readFileSync(join(__dirname, "./data/xml-parser/example2.xml"), "utf8");

        expect(xmlParser.extractVariables(xmlContent)).toEqual(result);
    });

    test("extracting expression when receiving a mixed expression", () => {
        const result: string = "a + 20 * c - 100";

        const xmlContent: string =
                fs.readFileSync(join(__dirname, "./data/xml-parser/example3.xml"), "utf8");

        expect(xmlParser.extractExpression(xmlContent)).toEqual(result);
    });

    test("extracting variables when receiving a mixed expression", () => {
        const result: Map<string, string> = new Map([["a", "10"], ["c", "30"]]);

        const xmlContent: string =
                fs.readFileSync(join(__dirname, "./data/xml-parser/example3.xml"), "utf8");

        expect(xmlParser.extractVariables(xmlContent)).toEqual(result);
    });
});