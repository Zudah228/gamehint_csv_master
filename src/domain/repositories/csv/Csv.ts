import { readFileSync } from "fs";

export class Csv {
  constructor(path: string) {
    this.file = readFileSync(path);
    this.indices = this.#generateEntities();
  }
  protected file: Buffer;
  indices: Record<string, unknown>[];

  #generateEntities(): Record<string, unknown>[] {
    const keys = this.#splitSpecificRow(this.#splitRows(), 0);
    const rows = this.#splitRows().slice();
    rows.splice(0, 1);

    const list: Record<string, unknown>[] = [];

    for (let i = 0; i < rows.length; i++) {
      const values = this.#splitSpecificRow(rows, i);
      let obj = {};
      keys.forEach((key, index) => {
        obj = {
          ...obj,
          [key]: values[index],
        };
      });
      list.push(obj);
    }

    return list;
  }

  #splitSpecificRow(target: string[], targetIndex: number): string[] {
    return target[targetIndex]
        .replaceAll("\"", "")
        .split(",");
  }


  #splitRows(): string[] {
    return this.file
        .toString()
        .split("\n");
  }
}
