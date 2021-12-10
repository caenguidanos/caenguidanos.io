import { visit } from "unist-util-visit";
import { renderToHtml, Highlighter } from "shiki";
import * as Unified from "unified";

import type { Node, Data } from "unist";
import type { BuildVisitor } from "unist-util-visit/complex-types";

export interface RemarkShikiPluginOptions {
   highlighter: Highlighter;
}

export interface RemarkShikiPluginNode extends Data {
   lang: string;
   value: string;
}

export const remarkShiki = <Tree extends Node<Data> & RemarkShikiPluginNode>(
   options: RemarkShikiPluginOptions
) => {
   // Active { allowDangerousHtml: true } on remarkRehype
   const visitor: BuildVisitor<Tree, "code"> = (node) => {
      const metadata = { lang: node.lang, code: node.value };

      const tokens = options.highlighter.codeToThemedTokens(
         metadata.code,
         metadata.lang
      );

      Object.assign(node, { type: "html", value: renderToHtml(tokens) });
   };

   const tranformer: Unified.Transformer<Tree> = (tree) => {
      visit(tree, "code", visitor);
   };

   return tranformer;
};
