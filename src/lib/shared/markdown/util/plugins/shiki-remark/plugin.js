import visit from "unist-util-visit";
import { renderToHtml } from "shiki";

// Important: active { allowDangerousHtml: true } on remarkRehype
function shikiPlugin(options) {
   return () => {
      return function transformer(tree, _file) {
         /**
          * This calls tramsform function on every node of type code in the tree.
          *
          * Types: https://github.com/syntax-tree/mdast
          */
         visit(tree, "code", visitor);

         function visitor(node) {
            /**
             * Example of node:
             * {
             *    type: 'text',
             *    lang: 'ts',
             *    meta: null,
             *    value: 'console.log(67)',
             *    position: {
             *       start: { line: 5, column: 1, offset: 23 },
             *       end: { line: 7, column: 4, offset: 48 }
             *    }
             * }
             */
            const lang = node.lang;
            const code = node.value;
            const tokens = options.highlighter.codeToThemedTokens(code, lang);

            const newNode = {
               type: "html",
               value: renderToHtml(tokens)
            };

            Object.assign(node, newNode);
         }
      };
   };
}

export default shikiPlugin;
