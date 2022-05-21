export class XMLCreator {
  createResultXML(result: string[]): string {
    let xmlFileContent: string = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlFileContent += "<output>\n";
    xmlFileContent += "\t<result>\n";

    for (let i = 0; i < result.length; ++i) {
      console.assert((xmlFileContent.match(/<step>/g) || []).length === i, "Invalid result xml.");
      console.assert((xmlFileContent.match(/<\/step>/g) || []).length === i, "Invalid result xml.");

      xmlFileContent += `\t\t<step>${result[i]}</step>\n`;

      console.assert((xmlFileContent.match(/<step>/g) || []).length === i + 1, "Invalid result xml.");
      console.assert((xmlFileContent.match(/<\/step>/g) || []).length === i + 1, "Invalid result xml.");
    }

    console.assert((xmlFileContent.match(/<step>/g) || []).length === result.length, "Invalid result xml.");
    console.assert((xmlFileContent.match(/<\/step>/g) || []).length === result.length, "Invalid result xml.");

    xmlFileContent += "\t</result>\n";
    xmlFileContent += "</output>";
    return xmlFileContent;
  }
}
