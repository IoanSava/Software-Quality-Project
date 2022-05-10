import { calculateParentMap, isExpression, postorder } from "../helpers/tree-utils";
import { ExpressionTreeNode } from "../models/tree-node";
import { IllegalStateError } from "../errors/illegal-state-error";
import { BigNumberConvertor } from "../convertors/big-number-convertor";
import { Addition } from "../models/addition";
import { Subtraction } from "../models/subtraction";
import { Multiplication } from "../models/multiplication";
import { Division } from "../models/division";
import { Power } from "../models/power";
import { SquareRoot } from "../models/square-root";
import { ExpressionConvertor } from "../convertors/expression-convertor";

const PARSING_ERROR_MESSAGE = "parsing error";

export class ArithmeticExpressionEvaluator {
    constructor(
        private bigNumberConvertor: BigNumberConvertor,
        private expressionConvertor: ExpressionConvertor
    ) {
    }

    /**
     * Converts an arithmetic expression string to a syntax tree representation.
     *
     * Example: evaluate("1 + x * 2", {"x": 1}) => [
     *      "1 + 2",
     *      "3"
     * ]
     *
     * @param arithmeticExpression - the arithmetic expression string
     * @param variables - map containing the variables along with their values
     * @return operations - array of strings representing the results of the atomic operations
     */
    evaluate(arithmeticExpression: string, variables: Map<string, string>): string[] {
        let root = null;
        try {
            root = this.expressionConvertor.stringToNode(arithmeticExpression);
        } catch (ignored) {
            return [PARSING_ERROR_MESSAGE];
        }

        let parents = calculateParentMap(root);
        let result: string[] = [];

        for (let node of postorder(root)) {
            try {
                let newNode = this.evalOne(node, variables);
                let expressionString = this.expressionConvertor.atomicNodeToString(node) + " = " +
                    this.expressionConvertor.atomicNodeToString(newNode);
                root = ArithmeticExpressionEvaluator.mutate(root, node, newNode, parents);
                result.push(expressionString);
            } catch (err) {
                let expressionString = this.expressionConvertor.atomicNodeToString(node) + " = error";
                result.push(expressionString, (err as Error).message);
                return result;
            }
        }

        return result;
    }

    private evalOne(node: ExpressionTreeNode, variables: Map<string, string>): ExpressionTreeNode {
        ArithmeticExpressionEvaluator.ensureExpression(node);
        const params: number[][] = this.extractParams(node, variables);
        let result: number[];

        switch (node.operation) {
            case "ADDITION":
                result = new Addition().apply(params[0], params[1]);
                break;
            case "SUBTRACTION":
                result = new Subtraction().apply(params[0], params[1]);
                break;
            case "MULTIPLICATION":
                result = new Multiplication().apply(params[0], params[1]);
                break;
            case "DIVISION":
                result = new Division().apply(params[0], params[1]);
                break;
            case "POW":
                result = new Power().apply(params[0], params[1]);
                break;
            case "SQRT":
                result = new SquareRoot().apply(params[0]);
                break;
            default:
                throw new IllegalStateError();
        }

        return {constant: this.bigNumberConvertor.convertBigNumberToString(result)}
    }

    private extractParams(node: ExpressionTreeNode, variables: Map<string, string>): number[][] {
        let params: number[][] = [];
        params.push(this.bigNumberConvertor.convertStringToBigNumber(
            !!node.left.constant ? node.left.constant : variables.get(node.left.variable)
        ));
        if (!!node.right)
            params.push(this.bigNumberConvertor.convertStringToBigNumber(
                !!node.right.constant ? node.right.constant : variables.get(node.right.variable)
            ));
        return params;
    }

    private static mutate(
        root: ExpressionTreeNode,
        oldNode: ExpressionTreeNode,
        newNode: ExpressionTreeNode,
        parents: Map<ExpressionTreeNode, ExpressionTreeNode>
    ): ExpressionTreeNode {
        let parentRef = parents.get(oldNode);
        if (!parentRef) root = newNode;
        else if (parentRef.left == oldNode) parentRef.left = newNode;
        else parentRef.right = newNode;
        return root;
    }

    private static ensureExpression(node: ExpressionTreeNode): void {
        if (!isExpression(node))
            throw new IllegalStateError();
    }
}