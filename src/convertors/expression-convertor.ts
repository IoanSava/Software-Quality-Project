import { ExpressionTreeNode } from "../models/tree-node";
import { parse } from "../helpers/parser";
import { inorder, isExpression } from "../helpers/tree-utils";

const operationMap: Map<string, string> = new Map<string, string>(Object.entries({
    "ADDITION": "+",
    "SUBTRACTION": "-",
    "MULTIPLICATION": "*",
    "DIVISION": "/",
    "SQRT": "SQRT",
    "POW": "**"
}));

const operationSymbol = (name: string): string => {
    console.assert(operationMap.has(name), "The given operation does not exist");
    return operationMap.get(name);
}

export class ExpressionConvertor {
    /**
     * Converts an arithmetic expression string to a syntax tree representation.
     * Supported operations:
     * - ADDITION           Example: 1 + 1
     * - SUBTRACTION        Example: 1 - 1
     * - MULTIPLICATION     Example: 1 * 1
     * - DIVISION           Example: 1 / 1
     * - POW                Example: 1 ** 1
     * - SQRT               Example: sqrt(1)
     *
     * Example: stringToNode("1 + x") => {
     *     "operation": "ADDITION",
     *     "left": { "constant": "1" },
     *     "right": { "variable": "x" }
     * }
     *
     * @param content - the expression to be parsed.
     * @return root of the tree as ExpressionTreeNode
     */
    public stringToNode(content: string): ExpressionTreeNode {
        return parse(content) as ExpressionTreeNode;
    }

    /**
     * Converts an arithmetic expression string to a syntax tree representation.
     *
     * Example: nodeToString({
     *     "operation": "ADDITION",
     *     "left": {
     *         "operation": "ADDITION",
     *         "left": { "constant": "1" },
     *         "right": {"constant": "1"}
     *      },
     *     "right": { "variable": "x" }
     * }) => "1 + 1 + x"
     *
     * @param root of the tree
     * @return content - the arithmetic expression string.
     */
    public nodeToString(root: ExpressionTreeNode): string {
        console.assert(!!root, "The root should not be null");
        let traversal: string[] = [];
        for (let node of inorder(root))
            traversal.push(this.atomicNodeToString(node));
        return traversal.join("");
    }

    /**
     * Converts an atomic arithmetic expression string to a syntax tree representation.
     *
     * Example: atomicNodeToString({
     *     "operation": "ADDITION",
     *     "left": { "constant": "1" },
     *     "right": { "variable": "x" }
     * }) => "1 + x"
     *
     * @param root of the tree
     * @return content - the arithmetic expression string.
     */
    public atomicNodeToString(root: ExpressionTreeNode): string {
        console.assert(!!root, "The root should not be null");
        if (root.operation === "SQRT") return `sqrt(${root.left.constant || root.left.variable})`;
        if (!isExpression(root)) return (root.constant || root.variable).toString();
        return [
            root.left.constant || root.left.variable,
            operationSymbol(root.operation),
            root.right.constant || root.right.variable
        ].join(' ');
    }
}