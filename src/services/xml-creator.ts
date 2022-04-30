export class XMLCreator {
  createResultXML(result: string[]): string {
    let xmlFileContent: string = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlFileContent += "<output>\n";
    xmlFileContent += "\t<result>\n";
    for (let i = 0; i < result.length; ++i) {
      xmlFileContent += `\t\t<step>${result[i]}</step>\n`;
    }
    xmlFileContent += "\t</result>\n";
    xmlFileContent += "</output>";
    return xmlFileContent;
  }
}
