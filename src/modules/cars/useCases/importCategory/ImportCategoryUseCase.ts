import csvParse from "csv-parse";
import fs from "fs";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    // pega o pedaço lido do file e passa para o parseFile
    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
