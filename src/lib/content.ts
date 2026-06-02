import { ATLAS_EDGES, PATTERNS_SEED, PROBLEMS_SEED, type PatternSeed, type ProblemSeed } from '@/lib/db/seed-data'

export type PatternWithProgress = PatternSeed & {
  fluency: number
  level: number
  solved: number
  lastSeen: string
}

export const MOCK_FLUENCY: Record<string, number> = {
  'two-pointers': 0.64,
  'sliding-window': 0.42,
  'dynamic-programming': 0.31,
  'binary-search': 0.58,
  bfs: 0.36,
  dfs: 0.48,
  backtracking: 0.25,
  greedy: 0.22,
  heap: 0.19,
  'hash-map': 0.73,
  'monotonic-stack': 0.18,
  'union-find': 0.12,
  trie: 0.21,
  'fast-slow-pointers': 0.46,
}

export const RANKS = [
  'Script Kid',
  'Compiler',
  'Interpreter',
  'Cipher',
  'Oracle',
  'Cartographer',
  'Architect',
  'Algorithmist',
] as const

export const SESSION_MODES = [
  {
    slug: 'quick',
    name: 'Quick',
    minutes: 12,
    subtitle: 'one warmup + spaced repeat',
    notes: ['warmup recall', 'single problem', 'light coach'],
  },
  {
    slug: 'deep',
    name: 'Deep',
    minutes: 22,
    subtitle: "today's pick + fresh problem",
    notes: ['full socratic', 'auto debrief', 'spaced schedule'],
  },
  {
    slug: 'marathon',
    name: 'Marathon',
    minutes: 60,
    subtitle: 'pattern dive + same character x 3',
    notes: ['escalating difficulty', 'same invariant', 'review trail'],
  },
] as const

export const STATE_CARDS = [
  ['Empty', 'no expeditions yet.', 'Start onboarding'],
  ['Loading', 'brewing a fresh problem.', 'verifying canonical solution'],
  ['Error', 'judge timed out on a 1e5 case.', 'Re-run'],
  ['Stuck', "I'm stuck - just tell me.", 'Reveal pattern'],
  ['Offline', "you're offline.", 'Retry'],
  ['Rate limit', "you've used today's free coach turns.", 'Wait 4h'],
  ['No streak', 'you missed yesterday.', '8-min quick'],
  ['Waiting', 'waiting for @kira...', 'Cancel'],
  ['Rejected', "generator missed the target pattern.", 'Regenerating'],
  ['Private', 'this profile is private.', 'Send request'],
  ['Short session', "too easy. we'll harden the next one.", 'Harder same pattern'],
  ['Generator', 'fresh problem cache hit.', 'Open'],
] as const

export function slugifyTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/—/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getPattern(slug: string) {
  return PATTERNS_SEED.find((pattern) => pattern.slug === slug) ?? null
}

export function getProblemBySlug(slug: string) {
  return PROBLEMS_SEED.find((problem) => slugifyTitle(problem.title) === slug) ?? null
}

export function problemsForPattern(slug: string) {
  return PROBLEMS_SEED.filter((problem) => problem.patternSlug === slug)
}

export function problemCountByPattern() {
  return PROBLEMS_SEED.reduce<Record<string, number>>((acc, problem) => {
    acc[problem.patternSlug] = (acc[problem.patternSlug] ?? 0) + 1
    return acc
  }, {})
}

export function getFeaturedProblem(): ProblemSeed {
  return PROBLEMS_SEED.find((problem) => problem.patternSlug === 'dynamic-programming') ?? PROBLEMS_SEED[0]
}

export function getFeaturedPattern(): PatternSeed {
  return getPattern(getFeaturedProblem().patternSlug) ?? PATTERNS_SEED[0]
}

export function getProgressPatterns(): PatternWithProgress[] {
  return PATTERNS_SEED.map((pattern, index) => {
    const fluency = MOCK_FLUENCY[pattern.slug] ?? 0
    return {
      ...pattern,
      fluency,
      level: Math.min(5, Math.max(0, Math.ceil(fluency * 5))),
      solved: Math.round(fluency * 14),
      lastSeen: index % 3 === 0 ? 'today' : index % 3 === 1 ? '4d' : 'new',
    }
  })
}

export function relatedPatterns(slug: string) {
  const relatedSlugs = ATLAS_EDGES.flatMap(([a, b]) => {
    if (a === slug) return [b]
    if (b === slug) return [a]
    return []
  })

  return relatedSlugs.map((related) => getPattern(related)).filter((pattern): pattern is PatternSeed => pattern !== null)
}

export function getDifficultyTone(difficulty: ProblemSeed['difficulty']) {
  if (difficulty === 'easy') return '#10b981'
  if (difficulty === 'medium') return '#f59e0b'
  return '#ef4444'
}

export type PatternTactics = {
  upright: string[]
  reversed: string[]
  spotChecks: string[]
  enemies: string[]
}

export const PATTERN_TACTICS: Record<string, PatternTactics> = {
  'two-pointers': {
    upright: [
      'input is sorted (or can be)',
      'looking for a pair that satisfies a sum/product condition',
      'need to check palindrome or symmetry in-place',
      'problem asks to partition or rearrange in O(1) space',
    ],
    reversed: [
      'data is unsorted and sorting would lose structure',
      'need all pairs, not just the optimal one',
      'pointers would need to jump backwards (not just forward)',
      'adjacency matters more than ordering (use sliding window)',
    ],
    spotChecks: [
      'is the input sorted, or does sorting it preserve the answer?',
      'are you looking for a pair of elements that sum/multiply to a target?',
      'does the problem involve comparing elements from both ends?',
      'can you solve it with two indices that always move forward?',
    ],
    enemies: [
      'forgetting to sort first — the pattern breaks on unsorted input',
      "moving both pointers in the same direction (that's sliding window)",
      'not handling duplicates after finding a valid pair in 3Sum-style problems',
    ],
  },
  'sliding-window': {
    upright: [
      'need max/min/count within a contiguous subarray or substring',
      'window grows and shrinks but never restarts from scratch',
      'looking for the longest/shortest subarray meeting a constraint',
      'characters or elements that expire when they leave the window',
    ],
    reversed: [
      'elements are non-contiguous (gaps are allowed)',
      'the answer depends on global structure, not a local range',
      'you need to revisit elements that already left the window',
      'problem is about pairs across the array, not subarrays',
    ],
    spotChecks: [
      'does the problem ask for a subarray or substring (contiguous)?',
      'is there a constraint that lets you shrink the window from the left?',
      'would re-scanning from scratch after each step be too slow?',
      'can the window state be maintained with an O(1) or O(k) update?',
    ],
    enemies: [
      'expanding the window without a shrink condition — it just grows forever',
      'using a hashmap when a simple counter suffices (e.g., character frequency)',
      'off-by-one: forgetting to include/exclude the boundary when updating state',
    ],
  },
  'dynamic-programming': {
    upright: [
      'problem has optimal substructure (optimal answer uses optimal sub-answers)',
      'overlapping subproblems — the same sub-calculation recurs many times',
      'counting the number of ways to reach a goal',
      'asking for min/max over a set of choices made in sequence',
    ],
    reversed: [
      'a greedy choice is provably locally optimal (exchange argument holds)',
      'no overlapping subproblems — recursion tree is a DAG without repeated nodes',
      'brute force is O(n) or O(n log n) already — memoization would add overhead',
      'the state space is too large to enumerate (use math or randomization)',
    ],
    spotChecks: [
      'does solving a smaller version of the problem help solve the larger one?',
      'are you making a sequence of choices where each narrows the future options?',
      'if you drew the recursion tree, would the same calls appear repeatedly?',
      'is the problem asking for min/max/count over all valid paths or sequences?',
    ],
    enemies: [
      "wrong state definition — if the recurrence doesn't capture all decisions, the table is wrong",
      'forgetting base cases, especially for empty strings/arrays (index 0)',
      'mixing top-down and bottom-up inconsistently, leading to stale cached values',
    ],
  },
  'binary-search': {
    upright: [
      'input is sorted, or the predicate is monotone (true then false, or vice versa)',
      'search space is huge and can be halved with one comparison',
      'problem asks for the first/last position satisfying a condition',
      '"binary search on the answer" — minimizing the max or maximizing the min',
    ],
    reversed: [
      'input is unsorted and sorting it is not feasible or helpful',
      'you need all matches, not just the boundary one',
      'the predicate is not monotone — both true and false can recur',
      'the search space is small enough that a linear scan is fine',
    ],
    spotChecks: [
      'is the input sorted, or can you define a monotone yes/no predicate?',
      'does the problem ask for "the minimum X such that condition holds"?',
      'would doubling or halving a guess converge to the answer?',
      'is the answer in a bounded range you can binary search over?',
    ],
    enemies: [
      'infinite loop from wrong mid calculation (use left + (right - left) // 2)',
      'off-by-one: wrong boundary shrink (left = mid vs left = mid + 1)',
      'applying binary search when the predicate is not monotone',
    ],
  },
  bfs: {
    upright: [
      'need the shortest path in an unweighted graph or grid',
      'exploring nodes level by level (distance 1, then 2, then 3...)',
      'want to find if a target is reachable in minimum steps',
      'multi-source BFS — spreading from multiple starting points simultaneously',
    ],
    reversed: [
      'edges have different weights (use Dijkstra/Bellman-Ford)',
      'need to enumerate all paths, not just the shortest',
      'the graph is very deep and narrow (DFS uses less memory)',
      "you don't care about distance — just connectivity (Union-Find is simpler)",
    ],
    spotChecks: [
      'does the problem ask for the minimum number of steps or moves?',
      'are all edges (moves) of equal cost?',
      'do you need to explore all neighbors before going deeper?',
      'is this a grid traversal problem where shortest path matters?',
    ],
    enemies: [
      'forgetting to mark nodes visited before enqueuing (not after) — causes duplicates',
      "using a stack instead of a queue (that's DFS)",
      'not accounting for all valid neighbor directions in a grid (missing diagonals or boundaries)',
    ],
  },
  dfs: {
    upright: [
      'need to detect if a path exists, regardless of length',
      'traversing a tree where you need to process a full subtree before siblings',
      'finding connected components or strongly connected components',
      'problem involves exhaustive search with pruning (backtracking)',
    ],
    reversed: [
      'need the shortest path (BFS guarantees it, DFS does not)',
      'graph is very wide and shallow (BFS explores level by level more naturally)',
      'need to check reachability in a very large graph without a path length bound',
      'the graph has cycles and you need to visit nodes a bounded number of times',
    ],
    spotChecks: [
      'does the problem ask "does a path exist" rather than "what is the shortest path"?',
      'do you need to explore a full branch before considering siblings?',
      'is this a tree traversal (pre/in/post-order)?',
      'can you prune large subtrees early based on a constraint?',
    ],
    enemies: [
      'forgetting the visited set in a graph (causes infinite loops on cycles)',
      'confusing pre-order and post-order — the position of the "process" step matters',
      'using DFS on an implicit graph where BFS would guarantee shortest path',
    ],
  },
  backtracking: {
    upright: [
      'need to find all valid combinations, permutations, or subsets',
      'building a solution incrementally, where a partial solution can be validated',
      'constraints are tight enough to prune most branches early',
      'classic problems: N-Queens, Sudoku, Word Search, combination sum',
    ],
    reversed: [
      'only one optimal answer is needed (DP or greedy is faster)',
      'the problem has no constraints to prune on — you must visit everything',
      'the solution space is polynomial and can be enumerated directly',
      "order of choices doesn't matter and duplicates can be counted separately",
    ],
    spotChecks: [
      'does the problem ask to "generate all" or "find all valid" solutions?',
      "can a partial solution be rejected before it's complete?",
      'does the answer require building a path or selection incrementally?',
      'would you naturally think about "undo the last choice and try the next"?',
    ],
    enemies: [
      'not sorting input before backtracking — duplicates appear in results',
      'missing the "undo" step (not restoring state after the recursive call)',
      'passing mutable data structures without copying — state bleeds across branches',
    ],
  },
  greedy: {
    upright: [
      "exchange argument holds: swapping any two adjacent choices can't improve the answer",
      'problem involves intervals (meeting rooms, activity selection)',
      'fractional choices are valid (fractional knapsack)',
      'Dijkstra, Kruskal, Prim — all greedy at their core',
    ],
    reversed: [
      'choices interact across time — the best local choice can poison future options',
      'you need to count the number of ways, not just find one optimal solution',
      'the problem has a counter-example where greedy fails (0/1 knapsack)',
      'constraints prevent you from committing to a choice without looking ahead',
    ],
    spotChecks: [
      'can you prove that taking the "best available" option now never hurts the global answer?',
      'does sorting the input by some key reveal the optimal order?',
      'does the problem involve scheduling, intervals, or resource allocation?',
      'does the greedy choice reduce the problem to a strictly smaller subproblem?',
    ],
    enemies: [
      'assuming greedy works without an exchange-argument proof — classic way to get WA',
      "using greedy on 0/1 knapsack style problems (items can't be split)",
      'wrong sorting key — greedy is correct but the ordering is off',
    ],
  },
  heap: {
    upright: [
      'need the k-th largest/smallest from a stream or large set',
      'merging k sorted lists or arrays',
      'need to always retrieve the minimum (or maximum) in O(log n)',
      'Dijkstra, A*, or any algorithm that repeatedly processes the "next best" node',
    ],
    reversed: [
      'you need all elements sorted — just sort the array directly',
      'k is fixed and tiny — a sorted array or simple scan suffices',
      "you need random access by index — heap doesn't support that",
      'the dataset is small — the O(log n) overhead beats O(1) for tiny n',
    ],
    spotChecks: [
      'does the problem ask for the k-th or top-k elements?',
      'are elements arriving as a stream where you need a running min/max?',
      'would you otherwise sort the full dataset just to pick the top few?',
      'does the algorithm need to repeatedly extract the min/max and re-insert?',
    ],
    enemies: [
      'using a max-heap when a min-heap is needed (or vice versa) — fix by negating values',
      'not pushing updated entries and forgetting to skip stale ones (lazy deletion)',
      'building a heap element-by-element in O(n log n) instead of heapify in O(n)',
    ],
  },
  'hash-map': {
    upright: [
      'need O(1) lookup for complements, pairs, or previously-seen values',
      'counting frequencies of elements',
      'grouping elements by a computed key (anagram groups, etc.)',
      'de-duplicating or checking set membership in a single pass',
    ],
    reversed: [
      'input is already sorted — binary search gives O(log n) with less space',
      'you need ordered iteration over keys — use a sorted map / tree',
      'memory is very constrained and hash overhead is too expensive',
      'collisions matter (adversarial input) — use a tree-based map instead',
    ],
    spotChecks: [
      'would you otherwise do a nested loop just to find a matching pair?',
      'does the problem ask "have we seen X before" at each step?',
      'are you grouping, counting, or deduplicating elements?',
      'does the problem involve "complement": target - current = stored value?',
    ],
    enemies: [
      'hashing a mutable object as a key — the hash changes if the object changes',
      'forgetting to handle the case where the complement equals the element itself (Two Sum)',
      'iterating a dict while modifying it — collect keys to remove first',
    ],
  },
  'monotonic-stack': {
    upright: [
      'need the next greater / next smaller element for each position',
      'histogram or bar chart problems (largest rectangle, trapping rain water)',
      "need to efficiently know what's visible from a vantage point",
      'daily temperatures, stock span, asteroid collision patterns',
    ],
    reversed: [
      'need random-access to any element in the stack (use an array)',
      "the problem doesn't involve next-element relationships",
      "order of processing doesn't matter — a simple sort suffices",
      'you need all pairs, not just the nearest dominating element',
    ],
    spotChecks: [
      'does each element need to know the next element that is larger (or smaller) than it?',
      'would you naturally maintain a stack where you pop when the ordering breaks?',
      'does the problem involve bars, intervals, or sequential comparisons?',
      'can the answer for position i be derived from a nearby position j where arr[j] > arr[i]?',
    ],
    enemies: [
      'using the wrong monotone direction (increasing vs. decreasing stack)',
      'forgetting to flush the stack at the end for elements with no "next greater"',
      'popping too eagerly — not processing all elements that the current one dominates',
    ],
  },
  'union-find': {
    upright: [
      'need to dynamically merge disjoint sets and query membership',
      'detect cycles in an undirected graph',
      'group nodes that are transitively connected (accounts merge, friend circles)',
      'number of connected components in a dynamic graph',
    ],
    reversed: [
      "graph is directed — union-find doesn't model direction",
      'need the actual path between two nodes, not just connectivity',
      'need component contents (which nodes are in a set) — UF only tracks membership',
      'graph is static and DFS/BFS is simpler to implement correctly',
    ],
    spotChecks: [
      'do you need to merge groups together over time and query if two elements are in the same group?',
      'is the graph undirected and do you need to detect cycles efficiently?',
      'does the problem involve "these items belong to the same family/cluster" operations?',
      'would you otherwise re-run BFS/DFS after every merge?',
    ],
    enemies: [
      'forgetting path compression — the find operation becomes O(n) without it',
      'not applying union by rank — tree degenerates to a linked list',
      "using union-find on a directed graph — it doesn't model edge direction",
    ],
  },
  trie: {
    upright: [
      'prefix matching: "give me all words starting with X"',
      'autocomplete, spell-check, or word search in a grid',
      'a large set of strings share many common prefixes',
      'need to check if any word in a dictionary is a prefix of a given string',
    ],
    reversed: [
      'only exact match is needed — a hash set is simpler and faster',
      'the set of words is tiny — a list scan is fine',
      'no prefix relationships exist between the strings',
      'memory is constrained — a trie stores each character as a node, which is expensive',
    ],
    spotChecks: [
      'does the problem involve searching for words by prefix?',
      'are there many strings that share common beginnings?',
      'would you otherwise build a hash set but need prefix queries too?',
      'does the grid/board problem require checking all dictionary words at once?',
    ],
    enemies: [
      'not marking terminal nodes — "apple" stored but "app" appears to also exist',
      'using a dict instead of a TrieNode class — slower and harder to serialize',
      'forgetting to handle the root node (empty string) in initialization',
    ],
  },
  'fast-slow-pointers': {
    upright: [
      'detect a cycle in a linked list or sequence',
      'find the middle node of a linked list in one pass',
      "find the entry point of a cycle (Floyd's algorithm)",
      'find the k-th node from the end in one pass',
    ],
    reversed: [
      'data is in an array with random access — indices are simpler',
      'you know there is no cycle — both pointers are wasted overhead',
      'need the exact cycle length, not just detection (extend the algorithm)',
      'the structure is a tree, not a list (cycle detection is not needed)',
    ],
    spotChecks: [
      'is the data in a linked list or sequence where you can only move forward?',
      'does the problem mention detecting a cycle or finding a repeated state?',
      'do you need the middle element without knowing the list length up front?',
      'would two passes solve it but the problem asks for one?',
    ],
    enemies: [
      'not checking fast.next and fast.next.next before dereferencing — causes NullPointerException',
      'stopping too early: the meeting point for cycle detection is NOT the entry point (need a second phase)',
      'confusing fast-slow for sorting or partitioning — that\'s two-pointers',
    ],
  },
}
