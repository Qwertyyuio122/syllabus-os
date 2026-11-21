export type CompiledMathFn = (vars?: Record<string, number>) => number;

type Token =
  | { type: 'number'; value: number }
  | { type: 'ident'; name: string }
  | { type: 'op'; op: '+' | '-' | '*' | '/' | '^' }
  | { type: 'lparen' }
  | { type: 'rparen' };

type BuiltinFn =
  | 'sin'
  | 'cos'
  | 'tan'
  | 'exp'
  | 'ln'
  | 'log10'
  | 'log'
  | 'sqrt'
  | 'abs';

const BUILTIN_FUNCTIONS = new Set<BuiltinFn>([
  'sin',
  'cos',
  'tan',
  'exp',
  'ln',
  'log10',
  'log',
  'sqrt',
  'abs',
]);

type AstNode =
  | { kind: 'number'; value: number }
  | { kind: 'var'; name: string }
  | { kind: 'unary'; op: '+' | '-'; arg: AstNode }
  | { kind: 'binary'; op: '+' | '-' | '*' | '/' | '^'; left: AstNode; right: AstNode }
  | { kind: 'call'; fn: BuiltinFn; arg: AstNode };

const MAX_AST_DEPTH = 128;
const MAX_EXPR_LENGTH = 2048;

function isDigit(ch: string): boolean {
  return ch >= '0' && ch <= '9';
}

function isIdentStart(ch: string): boolean {
  return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch === '_';
}

function isIdentPart(ch: string): boolean {
  return isIdentStart(ch) || isDigit(ch);
}

function tokenize(rawExpr: string): Token[] | null {
  if (typeof rawExpr !== 'string') return null;
  const expr = rawExpr.trim();
  if (expr.length === 0 || expr.length > MAX_EXPR_LENGTH) return null;

  const tokens: Token[] = [];
  let i = 0;

  while (i < expr.length) {
    const ch = expr[i];

    if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
      i += 1;
      continue;
    }

    if (ch === 'π') {
      tokens.push({ type: 'ident', name: 'pi' });
      i += 1;
      continue;
    }

    if (ch === '−') {
      tokens.push({ type: 'op', op: '-' });
      i += 1;
      continue;
    }

    if (ch === '×' || ch === '·') {
      tokens.push({ type: 'op', op: '*' });
      i += 1;
      continue;
    }

    if (ch === '÷') {
      tokens.push({ type: 'op', op: '/' });
      i += 1;
      continue;
    }

    if (ch === '+' || ch === '-' || ch === '*' || ch === '/' || ch === '^') {
      tokens.push({ type: 'op', op: ch });
      i += 1;
      continue;
    }

    if (ch === '(') {
      tokens.push({ type: 'lparen' });
      i += 1;
      continue;
    }

    if (ch === ')') {
      tokens.push({ type: 'rparen' });
      i += 1;
      continue;
    }

    if (isDigit(ch) || (ch === '.' && i + 1 < expr.length && isDigit(expr[i + 1]))) {
      const start = i;
      let sawDot = false;
      while (i < expr.length) {
        const c = expr[i];
        if (isDigit(c)) {
          i += 1;
        } else if (c === '.' && !sawDot) {
          sawDot = true;
          i += 1;
        } else {
          break;
        }
      }

      // Parse scientific notation ONLY when e/E is followed by optional [+-] and at least one digit
      // so expressions like `2e` or `2e^x` or `2exp(x)` still tokenize as 2 followed by ident.
      if (i < expr.length && (expr[i] === 'e' || expr[i] === 'E')) {
        let expIdx = i + 1;
        if (expIdx < expr.length && (expr[expIdx] === '+' || expr[expIdx] === '-')) {
          expIdx += 1;
        }
        if (expIdx < expr.length && isDigit(expr[expIdx])) {
          i = expIdx;
          while (i < expr.length && isDigit(expr[i])) {
            i += 1;
          }
        }
      }

      const rawNum = expr.slice(start, i);
      const num = Number(rawNum);
      if (!Number.isFinite(num)) return null;
      tokens.push({ type: 'number', value: num });
      continue;
    }

    if (isIdentStart(ch)) {
      const start = i;
      i += 1;
      while (i < expr.length && isIdentPart(expr[i])) {
        i += 1;
      }
      tokens.push({ type: 'ident', name: expr.slice(start, i) });
      continue;
    }

    return null;
  }

  return tokens;
}

class Parser {
  private readonly tokens: Token[];
  private pos = 0;
  private depth = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  parse(): AstNode | null {
    const ast = this.parseExpression();
    if (!ast || this.pos !== this.tokens.length) {
      return null;
    }
    return ast;
  }

  private peek(): Token | undefined {
    return this.tokens[this.pos];
  }

  private consume(): Token | undefined {
    const token = this.tokens[this.pos];
    this.pos += 1;
    return token;
  }

  private enter(): boolean {
    this.depth += 1;
    return this.depth <= MAX_AST_DEPTH;
  }

  private leave(): void {
    this.depth -= 1;
  }

  private parseExpression(): AstNode | null {
    if (!this.enter()) {
      this.leave();
      return null;
    }
    try {
      let left = this.parseTerm();
      if (!left) return null;

      while (true) {
        const next = this.peek();
        if (next?.type === 'op' && (next.op === '+' || next.op === '-')) {
          this.consume();
          const right = this.parseTerm();
          if (!right) return null;
          left = { kind: 'binary', op: next.op, left, right };
        } else {
          break;
        }
      }

      return left;
    } finally {
      this.leave();
    }
  }

  private parseTerm(): AstNode | null {
    if (!this.enter()) {
      this.leave();
      return null;
    }
    try {
      let left = this.parseUnary();
      if (!left) return null;

      while (true) {
        const next = this.peek();
        if (next?.type === 'op' && (next.op === '*' || next.op === '/')) {
          this.consume();
          const right = this.parseUnary();
          if (!right) return null;
          left = { kind: 'binary', op: next.op, left, right };
        } else if (next && (next.type === 'ident' || next.type === 'lparen')) {
          // Implicit multiplication: 2x, a(x-h), (x+1)(x-1), 2sin(x), pi x
          const right = this.parseUnary();
          if (!right) return null;
          left = { kind: 'binary', op: '*', left, right };
        } else {
          break;
        }
      }

      return left;
    } finally {
      this.leave();
    }
  }

  private parseUnary(): AstNode | null {
    if (!this.enter()) {
      this.leave();
      return null;
    }
    try {
      const next = this.peek();
      if (next?.type === 'op' && (next.op === '+' || next.op === '-')) {
        this.consume();
        const arg = this.parseUnary();
        if (!arg) return null;
        return { kind: 'unary', op: next.op, arg };
      }
      return this.parsePower();
    } finally {
      this.leave();
    }
  }

  private parsePower(): AstNode | null {
    if (!this.enter()) {
      this.leave();
      return null;
    }
    try {
      const base = this.parsePrimary();
      if (!base) return null;

      const next = this.peek();
      if (next?.type === 'op' && next.op === '^') {
        this.consume();
        // Right-associative power (supports negative exponents like 2^-2 and 2^3^2)
        const exponent = this.parseUnary();
        if (!exponent) return null;
        return { kind: 'binary', op: '^', left: base, right: exponent };
      }

      return base;
    } finally {
      this.leave();
    }
  }

  private parsePrimary(): AstNode | null {
    if (!this.enter()) {
      this.leave();
      return null;
    }
    try {
      const token = this.peek();
      if (!token) return null;

      if (token.type === 'number') {
        this.consume();
        return { kind: 'number', value: token.value };
      }

      if (token.type === 'lparen') {
        this.consume();
        const inner = this.parseExpression();
        if (!inner) return null;
        const closing = this.consume();
        if (closing?.type !== 'rparen') return null;
        return inner;
      }

      if (token.type === 'ident') {
        this.consume();
        const lower = token.name.toLowerCase();
        if (BUILTIN_FUNCTIONS.has(lower as BuiltinFn)) {
          const open = this.consume();
          if (open?.type !== 'lparen') return null;
          const arg = this.parseExpression();
          if (!arg) return null;
          const close = this.consume();
          if (close?.type !== 'rparen') return null;
          return { kind: 'call', fn: lower as BuiltinFn, arg };
        }
        return { kind: 'var', name: token.name };
      }

      return null;
    } finally {
      this.leave();
    }
  }
}

function evaluateAst(node: AstNode, vars: Record<string, number>): number {
  switch (node.kind) {
    case 'number':
      return Number.isFinite(node.value) ? node.value : NaN;

    case 'var': {
      if (Object.prototype.hasOwnProperty.call(vars, node.name)) {
        const val = vars[node.name];
        return typeof val === 'number' && Number.isFinite(val) ? val : NaN;
      }
      if (node.name === 'pi' || node.name === 'PI') return Math.PI;
      if (node.name === 'e' || node.name === 'E') return Math.E;
      return NaN;
    }

    case 'unary': {
      const val = evaluateAst(node.arg, vars);
      if (!Number.isFinite(val)) return NaN;
      return node.op === '-' ? -val : val;
    }

    case 'binary': {
      const left = evaluateAst(node.left, vars);
      const right = evaluateAst(node.right, vars);
      if (!Number.isFinite(left) || !Number.isFinite(right)) return NaN;

      let result: number;
      switch (node.op) {
        case '+':
          result = left + right;
          break;
        case '-':
          result = left - right;
          break;
        case '*':
          result = left * right;
          break;
        case '/':
          if (right === 0) return NaN;
          result = left / right;
          break;
        case '^':
          result = Math.pow(left, right);
          break;
      }
      return Number.isFinite(result) ? result : NaN;
    }

    case 'call': {
      const arg = evaluateAst(node.arg, vars);
      if (!Number.isFinite(arg)) return NaN;

      let result: number;
      switch (node.fn) {
        case 'sin':
          result = Math.sin(arg);
          break;
        case 'cos':
          result = Math.cos(arg);
          break;
        case 'tan':
          result = Math.tan(arg);
          break;
        case 'exp':
          result = Math.exp(arg);
          break;
        case 'ln':
          if (arg <= 0) return NaN;
          result = Math.log(arg);
          break;
        case 'log10':
        case 'log':
          if (arg <= 0) return NaN;
          result = Math.log10(arg);
          break;
        case 'sqrt':
          if (arg < 0) return NaN;
          result = Math.sqrt(arg);
          break;
        case 'abs':
          result = Math.abs(arg);
          break;
      }
      return Number.isFinite(result) ? result : NaN;
    }
  }
}

const ALWAYS_NAN: CompiledMathFn = () => NaN;

/**
 * Compiles a mathematical expression string into a safe, eval-free evaluator function.
 * Parse errors, division by zero, sqrt(<0), and log/ln(<=0) return NaN safely.
 */
export function compileMathExpression(expr: string): CompiledMathFn {
  const tokens = tokenize(expr);
  if (!tokens || tokens.length === 0) {
    return ALWAYS_NAN;
  }

  const ast = new Parser(tokens).parse();
  if (!ast) {
    return ALWAYS_NAN;
  }

  return (vars: Record<string, number> = {}) => {
    try {
      return evaluateAst(ast, vars);
    } catch {
      return NaN;
    }
  };
}

/**
 * Evaluates a mathematical expression directly against the provided variables.
 */
export function evaluateMathExpression(
  expr: string,
  vars: Record<string, number> = {},
): number {
  return compileMathExpression(expr)(vars);
}
