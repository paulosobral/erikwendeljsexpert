import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import sourceMap from 'source-map';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

sourceMap.SourceMapConsumer.initialize({
  'lib/mappings.wasm': fs.readFileSync(path.join(__dirname, 'node_modules', 'source-map', 'lib', 'mappings.wasm'))
});