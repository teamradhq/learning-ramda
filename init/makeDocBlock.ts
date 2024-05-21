import { DocData } from './getDocumentation';

function docLink(id: string): string {
  return `https://ramdajs.com/docs/#${id}`;
}

const docPrefix = '\n * ';

export function makeDocBlock(template: string, doc: DocData): string {
  const docLines = [
    `Name:       ${doc.name}`,
    `Category:   ${doc.category}`,
    '',
    `${doc.description.replace(/\n/g, docPrefix)}`,
    '',
    '```typescript',
    ...doc.example.split('\n'),
    '```',
    '',
    `{@see ${docLink(doc.name)}}`,
  ];

  if (doc.seeAlso) {
    docLines.push(`{@see ${docLink(doc.seeAlso)}}`);
  }

  return template.replace('{{docs}}', docPrefix + docLines.join(docPrefix) + '\n');
}
