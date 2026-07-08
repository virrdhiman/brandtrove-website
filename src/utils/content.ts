export function renderContentBlocks(content: string) {
  return content.split('\n\n').map((block) => {
    if (block.startsWith('### ')) return { type: 'h3' as const, text: block.slice(4) };
    if (block.startsWith('## ')) return { type: 'h2' as const, text: block.slice(3) };
    return { type: 'p' as const, text: block };
  });
}
