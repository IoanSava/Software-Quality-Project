/**
 * The node representation of the arithmetic syntax tree outputted by the parser.
 */
export interface ExpressionTreeNode {
    left?: ExpressionTreeNode;
    right?: ExpressionTreeNode;
    operation?: string;
    constant?: string;
    variable?: string;
}