import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const ignoreFuncs = ['__', 'addIndexRight', 'sequence'];

export type DocData = {
  name: string;
  category: string;
  description: string;
  example: string;
  seeAlso: string;
};

type PartialDocData = Pick<DocData, 'name' | 'category'>;

async function getDocument(): Promise<Document> {
  const html = await (await fetch('https://ramdajs.com/docs/')).text();
  const dom = new JSDOM(html);

  return dom.window.document;
}

function parseApi(document: Document): PartialDocData[] {
  const api: PartialDocData[] = [];

  for (const li of document.querySelectorAll('aside > ul > li')) {
    const name = li.getAttribute('data-name');
    const category = li.getAttribute('data-category')?.toLowerCase();

    if (!name || !category || ignoreFuncs.includes(name)) {
      continue;
    }

    api.push({ name, category });
  }

  return api;
}

function parseDocumentation(document: Document, api: PartialDocData[]): DocData[] {
  const docs: DocData[] = [];

  for (const doc of api) {
    const section = document.querySelector(`#${doc.name} + section`);

    docs.push({
      ...doc,
      description: section?.querySelector(':scope > .description')?.textContent ?? '',
      example: section?.querySelector('pre code')?.textContent ?? '',
      seeAlso:
        section
          ?.querySelector('.see')
          ?.textContent?.replace('See also\n', '')
          .replace(/\./g, '')
          .trim() ?? '',
    });
  }

  return docs;
}

export async function getDocumentation(): Promise<DocData[]> {
  const document = await getDocument();

  return parseDocumentation(document, parseApi(document));
}
