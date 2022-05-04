export class XMLParser {
  constructor(private parser: DOMParser) {
  }

  extractExpression(text: string): string {
    const xmlDoc: XMLDocument = this.parser.parseFromString(text, "text/xml");
    return (
      xmlDoc.getElementsByTagName("expression")[0].childNodes[0].nodeValue || ""
    );
  }

  extractVariables(text: string): Map<string, string> {
    const xmlDoc: XMLDocument = this.parser.parseFromString(text, "text/xml");
    let variables: Map<string, string> = new Map<string, string>();
    let varList: HTMLCollection = xmlDoc.getElementsByTagName("variable");
    for (let i = 0; i < varList.length; ++i) {
      const name: string =
        varList[i].getElementsByTagName("name")[0].childNodes[0].nodeValue || "";
      const value: string =
        varList[i].getElementsByTagName("value")[0].childNodes[0].nodeValue || "";
      variables.set(name, value);
    }
    return variables;
  }
}
