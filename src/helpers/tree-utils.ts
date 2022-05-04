import { ExpressionTreeNode } from "../models/tree-node";

export const isExpression = (node: ExpressionTreeNode): boolean => !!node && !!node.operation;

/**
 * Performs a traversal of the expression tree in order to calculate the node parent map.
 *
 * @param root - the root of the expression tree
 */
export function calculateParentMap(root: ExpressionTreeNode): Map<ExpressionTreeNode, ExpressionTreeNode> {
    if (!root) return new Map<ExpressionTreeNode, ExpressionTreeNode>();
    const queue: ExpressionTreeNode[] = [root];
    const parentMap: Map<ExpressionTreeNode, ExpressionTreeNode> = new Map<ExpressionTreeNode, ExpressionTreeNode>();

    while (queue.length > 0) {
        let current: ExpressionTreeNode = queue.pop();
        for (let child of [current.left, current.right]) {
            if (!child) continue;
            parentMap.set(child, current);
            queue.push(child);
        }
    }
    return parentMap;
}

/**
 * Performs a postorder traversal of the expression tree.
 * Used for selecting the nodes for evaluation.
 *
 * @param root - the root of the expression tree
 */
export function* postorder(root: ExpressionTreeNode): Generator<ExpressionTreeNode> {
    if (!root) return;
    let mainStack: ExpressionTreeNode[] = [], rightChildStack: ExpressionTreeNode[] = [];
    let currentNode: ExpressionTreeNode = root;

    while (mainStack.length > 0 || !!currentNode) {
        if (!!currentNode) {
            if (!!currentNode.right)
                rightChildStack.push(currentNode.right);
            mainStack.push(currentNode);
            currentNode = currentNode.left;
        } else {
            currentNode = mainStack[mainStack.length - 1];
            if (rightChildStack.length > 0 && currentNode.right == rightChildStack[rightChildStack.length - 1])
                currentNode = rightChildStack.pop();
            else {
                if (isExpression(currentNode)) yield currentNode;
                mainStack.pop();
                currentNode = null;
            }
        }
    }
}

/**
 * Performs an inorder traversal of the expression tree.
 * Used for reconstructing the expression string.
 *
 * @param root - the root of the expression tree
 */
export function* inorder(root: ExpressionTreeNode): Generator<ExpressionTreeNode> {
    if (!root) return;
    const stack: ExpressionTreeNode[] = [];
    let currentNode: ExpressionTreeNode = root;
    while (stack.length > 0 || !!currentNode) {
        if (!!currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        } else {
            currentNode = stack.pop();
            if (isExpression(currentNode)) yield currentNode;
            currentNode = currentNode.right;
        }
    }
}