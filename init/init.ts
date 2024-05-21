import * as fs from 'fs';
import { getDocumentation } from './getDocumentation';
import { makeDocBlock } from './makeDocBlock';

const template = fs.readFileSync(__dirname + '/test.ts.template', 'utf-8');

(async function () {
  const docs = await getDocumentation();

  for (const doc of docs) {
    const dir = process.cwd() + `/src/${doc.category}`.toLowerCase();
    const file = dir + `/${doc.name}.test.ts`;

    if (fs.existsSync(file)) {
      continue;
    }

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const contents = template
      .replace(/{{category}}/g, doc.category.toLowerCase())
      .replace(/{{func}}/g, doc.name);

    fs.writeFileSync(file, makeDocBlock(contents, doc));
  }
})().catch(console.error);
