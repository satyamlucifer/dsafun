import type { Pattern, Problem, ProblemExample } from './schema'
import { PROBLEMS_BATCH_2 } from './problems-batch-2'
import { PROBLEMS_BATCH_3 } from './problems-batch-3'
import { PROBLEMS_BATCH_4 } from './problems-batch-4'
import { PROBLEMS_BATCH_5 } from './problems-batch-5'
import { PROBLEMS_BATCH_6 } from './problems-batch-6'
import { PROBLEMS_BATCH_7 } from './problems-batch-7'
import { PROBLEMS_BATCH_8 } from './problems-batch-8'

// ── Atlas constellation positions (900×600 SVG canvas) ────────
// Edges: which patterns share intuition
export const ATLAS_EDGES: [string, string][] = [
  ['two-pointers', 'sliding-window'],
  ['two-pointers', 'fast-slow-pointers'],
  ['sliding-window', 'hash-map'],
  ['dynamic-programming', 'backtracking'],
  ['binary-search', 'greedy'],
  ['bfs', 'dfs'],
  ['bfs', 'union-find'],
  ['dfs', 'backtracking'],
  ['dfs', 'trie'],
  ['heap', 'greedy'],
  ['monotonic-stack', 'hash-map'],
  ['union-find', 'hash-map'],
]

export type PatternSeed = Omit<Pattern, 'id'>

export const PATTERNS_SEED: PatternSeed[] = [
  {
    slug: 'two-pointers',
    name: 'The Twins',
    topic: 'Two Pointers',
    glyph: 'twins',
    hue: '#00d4ff',
    lore: 'Two agents moving in synchronized opposition across sorted territory. Neither knows what the other will find — yet together they converge on truths no single pass could reveal.',
    voiceNote: 'I move from both ends. The sorted array is my battlefield. We meet in the middle — or we cross, and the answer falls between us.',
    prereqs: [],
    canonicalProblems: ['Two Sum II', 'Container With Most Water', 'Valid Palindrome', '3Sum'],
    atlasX: 280,
    atlasY: 200,
  },
  {
    slug: 'sliding-window',
    name: 'The Glazier',
    topic: 'Sliding Window',
    glyph: 'glazier',
    hue: '#f59e0b',
    lore: 'A moving frame of fixed or variable width, advancing across data like a lens across a blueprint. What falls into view is all that matters; what slips behind is forgotten.',
    voiceNote: 'I never restart from scratch. I slide. I expand when profitable, contract when bloated. The optimal subarray is always exactly as wide as it needs to be.',
    prereqs: ['two-pointers'],
    canonicalProblems: ['Longest Substring Without Repeating Characters', 'Minimum Window Substring', 'Permutation in String', 'Max Consecutive Ones III'],
    atlasX: 420,
    atlasY: 155,
  },
  {
    slug: 'dynamic-programming',
    name: 'The Cartographer',
    topic: 'Dynamic Programming',
    glyph: 'cartographer',
    hue: '#8b5cf6',
    lore: 'The most patient operative in the field. She maps every subproblem before committing to a path, ensuring no territory is charted twice. Her memos are her power.',
    voiceNote: 'Every large problem decomposes. I find the recurrence. I cache the overlap. When others recurse blindly into the same fog, I have already mapped it.',
    prereqs: [],
    canonicalProblems: ['Climbing Stairs', 'Coin Change', 'Longest Common Subsequence', 'House Robber', 'Edit Distance'],
    atlasX: 555,
    atlasY: 295,
  },
  {
    slug: 'binary-search',
    name: 'The Bisector',
    topic: 'Binary Search',
    glyph: 'bisector',
    hue: '#10b981',
    lore: 'He never searches the whole map. He asks one question of the midpoint and eliminates half the universe. Three questions and the needle is found in a haystack of billions.',
    voiceNote: 'The array must have a monotone property — something that splits the space into yes and no. I find that boundary. Left pointer, right pointer, midpoint. Repeat until certain.',
    prereqs: [],
    canonicalProblems: ['Binary Search', 'Search in Rotated Sorted Array', 'Find Minimum in Rotated Sorted Array', 'Koko Eating Bananas', 'Median of Two Sorted Arrays'],
    atlasX: 700,
    atlasY: 175,
  },
  {
    slug: 'bfs',
    name: 'The Ripple',
    topic: 'Breadth-First Search',
    glyph: 'ripple',
    hue: '#3b82f6',
    lore: 'A disturbance that expands in perfectly concentric rings. She finds shortest paths not by running — but by flooding every level before descending to the next.',
    voiceNote: 'I explore neighbors before depth. A queue is my world. When I reach the target, I know it is the shortest path because I exhausted all closer options first.',
    prereqs: [],
    canonicalProblems: ['Binary Tree Level Order Traversal', 'Word Ladder', 'Shortest Path in Binary Matrix', 'Rotting Oranges'],
    atlasX: 185,
    atlasY: 155,
  },
  {
    slug: 'dfs',
    name: 'The Spelunker',
    topic: 'Depth-First Search',
    glyph: 'spelunker',
    hue: '#ef4444',
    lore: 'Goes as deep as the cave allows before retreating. He sees the full shape of the labyrinth not by hovering above it, but by touching every wall with his hands.',
    voiceNote: 'A stack — or the call stack itself — carries me forward. I commit to one direction, go all the way, then surface. The structure of the graph reveals itself through exhaustion.',
    prereqs: [],
    canonicalProblems: ['Number of Islands', 'Clone Graph', 'Path Sum', 'Course Schedule'],
    atlasX: 135,
    atlasY: 375,
  },
  {
    slug: 'backtracking',
    name: 'The Ghost',
    topic: 'Backtracking',
    glyph: 'ghost',
    hue: '#6366f1',
    lore: 'She moves forward by choice and backward by necessity. Every dead end is a lesson. She does not mourn the branch she prunes — she knows exactly when to let go.',
    voiceNote: 'I build solutions incrementally. The moment a partial solution violates a constraint, I undo the last choice and try the next. The pruning is the art.',
    prereqs: ['dfs'],
    canonicalProblems: ['Subsets', 'Permutations', 'Combination Sum', 'N-Queens', 'Sudoku Solver'],
    atlasX: 265,
    atlasY: 475,
  },
  {
    slug: 'greedy',
    name: 'The Opportunist',
    topic: 'Greedy',
    glyph: 'opportunist',
    hue: '#f97316',
    lore: 'Never looks back. Takes the locally optimal at every crossroads and trusts the global optimum will emerge. Sometimes dangerously right. Always fast.',
    voiceNote: 'Prove the greedy choice is safe. If taking the best available option now can never harm the global answer, I am the right algorithm. Interval scheduling, fractional knapsack, Dijkstra\'s — all mine.',
    prereqs: [],
    canonicalProblems: ['Jump Game', 'Assign Cookies', 'Task Scheduler', 'Non-Overlapping Intervals', 'Gas Station'],
    atlasX: 820,
    atlasY: 175,
  },
  {
    slug: 'heap',
    name: 'The Arbiter',
    topic: 'Heap / Priority Queue',
    glyph: 'arbiter',
    hue: '#eab308',
    lore: 'Keeper of what matters most. She never shows you everything — only the highest priority. The heap is her courtroom; order is maintained without total sorting.',
    voiceNote: 'When you need the k-th largest, the next closest, the most urgent task — you want me. I maintain partial order in O(log n). Push. Pop. The top is always the answer.',
    prereqs: [],
    canonicalProblems: ['K Closest Points to Origin', 'Top K Frequent Elements', 'Find Median from Data Stream', 'Merge K Sorted Lists'],
    atlasX: 840,
    atlasY: 360,
  },
  {
    slug: 'hash-map',
    name: 'The Archivist',
    topic: 'Hash Map / Set',
    glyph: 'archivist',
    hue: '#14b8a6',
    lore: 'Seen it before. Instantly. She trades space for time with ruthless efficiency, filing every encounter under a key only she can resolve in constant time.',
    voiceNote: 'The complement problem? File the number, look up its pair. The frequency problem? Count, then query. O(1) lookup is my gift. Space is the price.',
    prereqs: [],
    canonicalProblems: ['Two Sum', 'Group Anagrams', 'Longest Consecutive Sequence', 'Subarray Sum Equals K'],
    atlasX: 620,
    atlasY: 435,
  },
  {
    slug: 'monotonic-stack',
    name: 'The Warden',
    topic: 'Monotonic Stack',
    glyph: 'warden',
    hue: '#ec4899',
    lore: 'Enforcer of order in the sequence. Nothing stays on his wall that violates the monotone law. The moment a rule is broken, evictions begin — and answers are extracted from the fallen.',
    voiceNote: 'I maintain a stack where elements are always increasing (or decreasing). When a new element breaks the order, I pop and process. Next Greater Element, Largest Rectangle — I see the horizon others miss.',
    prereqs: [],
    canonicalProblems: ['Daily Temperatures', 'Next Greater Element I', 'Largest Rectangle in Histogram', 'Trapping Rain Water'],
    atlasX: 880,
    atlasY: 440,
  },
  {
    slug: 'union-find',
    name: 'The Kinship',
    topic: 'Union-Find / Disjoint Set',
    glyph: 'kinship',
    hue: '#a855f7',
    lore: 'She does not build roads — she asks: are you already connected? Through path compression and union by rank, entire networks of belonging collapse into single truths.',
    voiceNote: 'Two operations: find the root, union two roots. Path compression makes find nearly O(1) amortized. Connectivity queries at scale are mine. Dynamic graph components? Call me.',
    prereqs: [],
    canonicalProblems: ['Number of Connected Components', 'Redundant Connection', 'Accounts Merge', 'Surrounded Regions'],
    atlasX: 700,
    atlasY: 515,
  },
  {
    slug: 'trie',
    name: 'The Lexicographer',
    topic: 'Trie / Prefix Tree',
    glyph: 'lexicographer',
    hue: '#84cc16',
    lore: 'Every word is a path through her branching archive. Prefix matching, autocomplete, the longest common ancestor — the Lexicographer finds them all in the tree of letters.',
    voiceNote: 'Insert a word: one node per character, share prefixes. Search or startsWith: follow the path. My power is shared structure. The dictionary in your phone uses me.',
    prereqs: ['dfs'],
    canonicalProblems: ['Implement Trie (Prefix Tree)', 'Word Search II', 'Replace Words', 'Design Search Autocomplete System'],
    atlasX: 445,
    atlasY: 535,
  },
  {
    slug: 'fast-slow-pointers',
    name: 'The Pacer',
    topic: 'Fast & Slow Pointers',
    glyph: 'pacer',
    hue: '#06b6d4',
    lore: 'Two runners on the same track, one doubling the other\'s stride. Where the fast one laps the slow — that is the cycle\'s entrance. The meeting point is the answer.',
    voiceNote: 'Floyd\'s Tortoise and Hare. If there is a cycle, the fast pointer must eventually catch the slow. If there is no cycle, the fast pointer falls off the edge. The middle of a list? Two steps for one.',
    prereqs: ['two-pointers'],
    canonicalProblems: ['Linked List Cycle', 'Find the Duplicate Number', 'Middle of the Linked List', 'Happy Number'],
    atlasX: 160,
    atlasY: 275,
  },
]

// ── Canonical Problems seed (Slice 1) ─────────────────────────
// Each entry references a pattern slug. patternId resolved at seed time.
export type ProblemSeed = {
  patternSlug: string
  title: string
  prompt: string
  constraints: string
  examples: ProblemExample[]
  difficulty: 'easy' | 'medium' | 'hard'
  estMin: number
  tags: string[]
  hints: string[]
}

export const PROBLEMS_SEED: ProblemSeed[] = [
  // ── Two Pointers ───────────────────────────────────────────
  {
    patternSlug: 'two-pointers',
    title: 'Two Sum II — Input Array Is Sorted',
    prompt: `Given a 1-indexed array of integers \`numbers\` that is already **sorted in non-decreasing order**, find two numbers such that they add up to a specific \`target\` number. Return the indices of the two numbers as an integer array \`[index1, index2]\` where \`1 <= index1 < index2 <= numbers.length\`.

The solution must use only constant extra space.`,
    constraints: `- 2 <= numbers.length <= 3 * 10^4
- -1000 <= numbers[i] <= 1000
- numbers is sorted in non-decreasing order
- -1000 <= target <= 1000
- Exactly one valid answer exists`,
    examples: [
      { input: 'numbers = [2,7,11,15], target = 9', output: '[1,2]', explanation: 'numbers[1] + numbers[2] = 2 + 7 = 9' },
      { input: 'numbers = [2,3,4], target = 6', output: '[1,3]', explanation: 'numbers[1] + numbers[3] = 2 + 4 = 6' },
    ],
    difficulty: 'medium',
    estMin: 12,
    tags: ['two-pointers', 'binary-search', 'array'],
    hints: [
      'The array is sorted — what does that tell you about sums as you move pointers?',
      'If the current sum is too large, which pointer should move to reduce it?',
      'Left pointer moves right to increase sum; right pointer moves left to decrease it.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Container With Most Water',
    prompt: `You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i\`th line are \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that together with the x-axis form a container that holds the most water. Return the maximum amount of water a container can store.

**Notice:** you may not slant the container.`,
    constraints: `- n == height.length
- 2 <= n <= 10^5
- 0 <= height[i] <= 10^4`,
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: 'Lines at indices 1 and 8 form the container. Width = 7, height = min(8,7) = 7. Area = 49.' },
      { input: 'height = [1,1]', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['two-pointers', 'array', 'greedy'],
    hints: [
      'Start with the widest possible container. What can be gained by moving inward?',
      'Moving the taller line inward can never increase the area — why?',
      'Always move the shorter line\'s pointer inward to have any chance of improvement.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: '3Sum',
    prompt: `Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.

The solution set must not contain duplicate triplets.`,
    constraints: `- 3 <= nums.length <= 3000
- -10^5 <= nums[i] <= 10^5`,
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
      { input: 'nums = [0,1,1]', output: '[]' },
      { input: 'nums = [0,0,0]', output: '[[0,0,0]]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['two-pointers', 'array', 'sorting'],
    hints: [
      'Sort the array first. How does sorting help avoid duplicates?',
      'Fix one element, then run Two Sum II on the remaining subarray.',
      'Skip duplicate values at each pointer position to avoid duplicate triplets.',
    ],
  },

  // ── Sliding Window ─────────────────────────────────────────
  {
    patternSlug: 'sliding-window',
    title: 'Longest Substring Without Repeating Characters',
    prompt: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.`,
    constraints: `- 0 <= s.length <= 5 * 10^4
- s consists of English letters, digits, symbols and spaces`,
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: '"abc" is the answer, with length 3.' },
      { input: 's = "bbbbb"', output: '1', explanation: '"b" is the answer.' },
      { input: 's = "pwwkew"', output: '3', explanation: '"wke" is the answer.' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'Use a hash map to track the last index where each character was seen.',
      'When you encounter a duplicate, where should the left pointer jump?',
      'The window [left, right] always contains unique characters.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Minimum Window Substring',
    prompt: `Given two strings \`s\` and \`t\` of lengths \`m\` and \`n\` respectively, return the **minimum window substring** of \`s\` such that every character in \`t\` (including duplicates) is included in the window. If there is no such substring, return the empty string \`""\`.`,
    constraints: `- m == s.length
- n == t.length
- 1 <= m, n <= 10^5
- s and t consist of uppercase and lowercase English letters`,
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
      { input: 's = "a", t = "a"', output: '"a"' },
      { input: 's = "a", t = "aa"', output: '""' },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'Track character frequencies needed vs. currently in window.',
      'Expand right until valid; contract left while still valid.',
      'A "formed" counter can tell you when all required characters are satisfied.',
    ],
  },

  // ── Dynamic Programming ────────────────────────────────────
  {
    patternSlug: 'dynamic-programming',
    title: 'Climbing Stairs',
    prompt: `You are climbing a staircase. It takes \`n\` steps to reach the top. Each time you can either climb \`1\` or \`2\` steps. In how many distinct ways can you climb to the top?`,
    constraints: `- 1 <= n <= 45`,
    examples: [
      { input: 'n = 2', output: '2', explanation: 'Two ways: 1+1 or 2.' },
      { input: 'n = 3', output: '3', explanation: 'Three ways: 1+1+1, 1+2, or 2+1.' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['dynamic-programming', 'math', 'fibonacci'],
    hints: [
      'To reach step n, you must have come from step n-1 or n-2.',
      'The number of ways to reach n is ways(n-1) + ways(n-2).',
      'You have seen this recurrence before — it is Fibonacci.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Coin Change',
    prompt: `You are given an integer array \`coins\` representing coins of different denominations and an integer \`amount\` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return \`-1\`.

You may assume that you have an infinite number of each kind of coin.`,
    constraints: `- 1 <= coins.length <= 12
- 1 <= coins[i] <= 2^31 - 1
- 0 <= amount <= 10^4`,
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1' },
      { input: 'coins = [2], amount = 3', output: '-1' },
      { input: 'coins = [1], amount = 0', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dynamic-programming', 'bfs'],
    hints: [
      'dp[i] = minimum coins to make amount i.',
      'For each amount, try each coin: dp[i] = min(dp[i], dp[i - coin] + 1).',
      'Initialize dp[0] = 0 and all others to infinity.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Longest Common Subsequence',
    prompt: `Given two strings \`text1\` and \`text2\`, return the length of their **longest common subsequence**. If there is no common subsequence, return \`0\`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.`,
    constraints: `- 1 <= text1.length, text2.length <= 1000
- text1 and text2 consist of only lowercase English characters`,
    examples: [
      { input: 'text1 = "abcde", text2 = "ace"', output: '3', explanation: 'The LCS is "ace".' },
      { input: 'text1 = "abc", text2 = "abc"', output: '3' },
      { input: 'text1 = "abc", text2 = "def"', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'string'],
    hints: [
      'Build a 2D dp table where dp[i][j] = LCS of text1[:i] and text2[:j].',
      'If text1[i] == text2[j], dp[i][j] = dp[i-1][j-1] + 1.',
      'Otherwise dp[i][j] = max(dp[i-1][j], dp[i][j-1]).',
    ],
  },

  // ── Binary Search ──────────────────────────────────────────
  {
    patternSlug: 'binary-search',
    title: 'Binary Search',
    prompt: `Given an array of integers \`nums\` which is sorted in ascending order, and an integer \`target\`, write a function to search \`target\` in \`nums\`. If \`target\` exists, return its index. Otherwise, return \`-1\`.

You must write an algorithm with \`O(log n)\` runtime complexity.`,
    constraints: `- 1 <= nums.length <= 10^4
- -10^4 < nums[i], target < 10^4
- All the integers in nums are unique
- nums is sorted in ascending order`,
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: '9 exists at index 4.' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1', explanation: '2 does not exist in nums.' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['binary-search', 'array'],
    hints: [
      'Maintain left and right pointers. Check the midpoint.',
      'If mid == target, return. If mid < target, move left up. If mid > target, move right down.',
      'Be careful with the loop condition: <= vs <.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Search in Rotated Sorted Array',
    prompt: `There is an integer array \`nums\` sorted in ascending order (with distinct values). Prior to being passed to your function, \`nums\` is possibly rotated at an unknown pivot index \`k\`.

Given the array \`nums\` after the possible rotation and an integer \`target\`, return the index of \`target\` if it is in \`nums\`, or \`-1\` if it is not in \`nums\`.

You must write an algorithm with \`O(log n)\` runtime complexity.`,
    constraints: `- 1 <= nums.length <= 5000
- -10^4 <= nums[i] <= 10^4
- All values in nums are unique
- nums is an ascending array that is possibly rotated
- -10^4 <= target <= 10^4`,
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
      { input: 'nums = [1], target = 0', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['binary-search', 'array'],
    hints: [
      'At every midpoint, at least one half of the array is sorted. Which one?',
      'If nums[left] <= nums[mid], the left half is sorted.',
      'Determine if target is in the sorted half; if so, search there. Otherwise search the other half.',
    ],
  },

  // ── BFS ────────────────────────────────────────────────────
  {
    patternSlug: 'bfs',
    title: 'Binary Tree Level Order Traversal',
    prompt: `Given the \`root\` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).`,
    constraints: `- The number of nodes in the tree is in the range [0, 2000]
- -1000 <= Node.val <= 1000`,
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' },
      { input: 'root = [1]', output: '[[1]]' },
      { input: 'root = []', output: '[]' },
    ],
    difficulty: 'medium',
    estMin: 12,
    tags: ['bfs', 'tree'],
    hints: [
      'Use a queue. Start with the root.',
      'For each level, record the queue size before processing. That many nodes form the current level.',
      'Push children of each processed node for the next level.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Word Ladder',
    prompt: `A transformation sequence from word \`beginWord\` to word \`endWord\` using a dictionary \`wordList\` is a sequence of words \`beginWord -> s1 -> s2 -> ... -> sk\` such that every adjacent pair of words differs by a single letter, and every \`si\` (except \`beginWord\`) is in \`wordList\`.

Given \`beginWord\`, \`endWord\`, and \`wordList\`, return the **number of words** in the shortest transformation sequence, or \`0\` if no such sequence exists.`,
    constraints: `- 1 <= beginWord.length <= 10
- endWord.length == beginWord.length
- 1 <= wordList.length <= 5000
- wordList[i].length == beginWord.length
- All strings consist of lowercase English letters`,
    examples: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: '5', explanation: 'hit → hot → dot → dog → cog' },
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', output: '0' },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['bfs', 'hash-map', 'string'],
    hints: [
      'Model as a graph where edges connect words differing by one letter.',
      'BFS from beginWord guarantees the shortest path.',
      'For each word, try all 26 substitutions at each position and check if the result is in the dictionary.',
    ],
  },

  // ── DFS ────────────────────────────────────────────────────
  {
    patternSlug: 'dfs',
    title: 'Number of Islands',
    prompt: `Given an \`m x n\` 2D binary grid \`grid\` which represents a map of \`'1'\`s (land) and \`'0'\`s (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.`,
    constraints: `- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 300
- grid[i][j] is '0' or '1'`,
    examples: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1' },
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['dfs', 'bfs', 'union-find', 'matrix'],
    hints: [
      'When you find a \'1\', run DFS to mark all connected land as visited.',
      'Mark visited cells as \'0\' (or use a separate visited set).',
      'Each DFS invocation from an unvisited \'1\' is one island.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Course Schedule',
    prompt: `There are a total of \`numCourses\` courses you have to take, labeled from \`0\` to \`numCourses - 1\`. You are given an array \`prerequisites\` where \`prerequisites[i] = [ai, bi]\` indicates that you must take course \`bi\` first if you want to take course \`ai\`.

Return \`true\` if you can finish all courses. Otherwise, return \`false\`.`,
    constraints: `- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= 5000
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- All the pairs prerequisites[i] are unique`,
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true', explanation: 'Take 0, then 1.' },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false', explanation: 'Cycle.' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dfs', 'bfs', 'graph', 'topological-sort'],
    hints: [
      'This is cycle detection in a directed graph.',
      'Use DFS with three states: unvisited, visiting, visited.',
      'If you encounter a "visiting" node during DFS, there is a cycle.',
    ],
  },

  // ── Backtracking ───────────────────────────────────────────
  {
    patternSlug: 'backtracking',
    title: 'Subsets',
    prompt: `Given an integer array \`nums\` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.`,
    constraints: `- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10
- All the numbers of nums are unique`,
    examples: [
      { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' },
      { input: 'nums = [0]', output: '[[],[0]]' },
    ],
    difficulty: 'medium',
    estMin: 12,
    tags: ['backtracking', 'array', 'bit-manipulation'],
    hints: [
      'At each index, you have two choices: include this element or skip it.',
      'Recurse with index + 1 in both cases.',
      'Add a copy of the current path to results at every node of the decision tree.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'Combination Sum',
    prompt: `Given an array of distinct integers \`candidates\` and a target integer \`target\`, return a list of all unique combinations of \`candidates\` where the chosen numbers sum to \`target\`. You may return the combinations in any order.

The same number may be chosen from \`candidates\` an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.`,
    constraints: `- 1 <= candidates.length <= 30
- 2 <= candidates[i] <= 40
- All elements of candidates are distinct
- 1 <= target <= 40`,
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]' },
      { input: 'candidates = [2,3,5], target = 8', output: '[[2,2,2,2],[2,3,3],[3,5]]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['backtracking', 'array'],
    hints: [
      'Recurse through candidates starting from index i (allow reuse of same element).',
      'Reduce target by the chosen element. If target hits 0, record the combination.',
      'If target goes negative, prune that branch immediately.',
    ],
  },

  // ── Greedy ─────────────────────────────────────────────────
  {
    patternSlug: 'greedy',
    title: 'Jump Game',
    prompt: `You are given an integer array \`nums\`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return \`true\` if you can reach the last index, or \`false\` otherwise.`,
    constraints: `- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= 10^5`,
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: 'true' },
      { input: 'nums = [3,2,1,0,4]', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 12,
    tags: ['greedy', 'array', 'dynamic-programming'],
    hints: [
      'Track the maximum index reachable so far.',
      'If the current index exceeds max_reach, you are stuck.',
      'Update max_reach = max(max_reach, i + nums[i]) as you scan left to right.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'Non-Overlapping Intervals',
    prompt: `Given an array of intervals \`intervals\` where \`intervals[i] = [starti, endi]\`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.`,
    constraints: `- 1 <= intervals.length <= 10^5
- intervals[i].length == 2
- -5 * 10^4 <= starti < endi <= 5 * 10^4`,
    examples: [
      { input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]', output: '1', explanation: 'Remove [1,3].' },
      { input: 'intervals = [[1,2],[1,2],[1,2]]', output: '2' },
      { input: 'intervals = [[1,2],[2,3]]', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['greedy', 'sorting', 'intervals'],
    hints: [
      'Sort intervals by end time.',
      'Greedily keep intervals that end earliest (leaves most room).',
      'Count the intervals you cannot keep — those are the ones to remove.',
    ],
  },

  // ── Heap ───────────────────────────────────────────────────
  {
    patternSlug: 'heap',
    title: 'K Closest Points to Origin',
    prompt: `Given an array of \`points\` where \`points[i] = [xi, yi]\` represents a point on the X-Y plane and an integer \`k\`, return the \`k\` closest points to the origin \`(0, 0)\`.

The distance between two points on the X-Y plane is the Euclidean distance: \`sqrt((x1-x2)^2 + (y1-y2)^2)\`.

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).`,
    constraints: `- 1 <= k <= points.length <= 10^4
- -10^4 <= xi, yi <= 10^4`,
    examples: [
      { input: 'points = [[1,3],[-2,2]], k = 1', output: '[[-2,2]]' },
      { input: 'points = [[3,3],[5,-1],[-2,4]], k = 2', output: '[[3,3],[-2,4]]' },
    ],
    difficulty: 'medium',
    estMin: 12,
    tags: ['heap', 'array', 'sorting', 'divide-and-conquer'],
    hints: [
      'You need the k smallest distances — a max-heap of size k works.',
      'Push each point onto the heap. If heap size > k, pop the largest.',
      'At the end, the heap contains the k closest points.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'Top K Frequent Elements',
    prompt: `Given an integer array \`nums\` and an integer \`k\`, return the \`k\` most frequent elements. You may return the answer in any order.`,
    constraints: `- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- k is in the range [1, the number of unique elements in the array]
- It is guaranteed that the answer is unique`,
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' },
      { input: 'nums = [1], k = 1', output: '[1]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['heap', 'hash-map', 'sorting', 'bucket-sort'],
    hints: [
      'Count frequency of each element with a hash map.',
      'Then find the k elements with highest frequency — a heap is efficient.',
      'Alternatively, bucket sort by frequency gives O(n) time.',
    ],
  },

  // ── Hash Map ───────────────────────────────────────────────
  {
    patternSlug: 'hash-map',
    title: 'Two Sum',
    prompt: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.`,
    constraints: `- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists`,
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['hash-map', 'array'],
    hints: [
      'For each number, you need to find its complement (target - number).',
      'Store each number\'s index in a hash map as you scan.',
      'Before storing, check if the complement is already in the map.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'Group Anagrams',
    prompt: `Given an array of strings \`strs\`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    constraints: `- 1 <= strs.length <= 10^4
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters`,
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { input: 'strs = [""]', output: '[[""]]' },
    ],
    difficulty: 'medium',
    estMin: 12,
    tags: ['hash-map', 'string', 'sorting'],
    hints: [
      'Two strings are anagrams if their sorted characters are identical.',
      'Use the sorted string as the hash map key.',
      'All strings mapping to the same key form one anagram group.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'Longest Consecutive Sequence',
    prompt: `Given an unsorted array of integers \`nums\`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in \`O(n)\` time.`,
    constraints: `- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9`,
    examples: [
      { input: 'nums = [100,4,200,1,3,2]', output: '4', explanation: 'Sequence: [1,2,3,4]' },
      { input: 'nums = [0,3,7,2,5,8,4,6,0,1]', output: '9' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['hash-map', 'array', 'union-find'],
    hints: [
      'Put all numbers in a hash set for O(1) lookup.',
      'Only start counting a sequence from a number with no predecessor (num-1 not in set).',
      'Extend the sequence forward: while (num+len) is in the set, increment length.',
    ],
  },

  // ── Monotonic Stack ────────────────────────────────────────
  {
    patternSlug: 'monotonic-stack',
    title: 'Daily Temperatures',
    prompt: `Given an array of integers \`temperatures\` represents the daily temperatures, return an array \`answer\` such that \`answer[i]\` is the number of days you have to wait after the \`i\`th day to get a warmer temperature. If there is no future day for which this is possible, keep \`answer[i] == 0\` instead.`,
    constraints: `- 1 <= temperatures.length <= 10^5
- 30 <= temperatures[i] <= 100`,
    examples: [
      { input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]' },
      { input: 'temperatures = [30,40,50,60]', output: '[1,1,1,0]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'Maintain a stack of indices of days with unresolved "next warmer day".',
      'When today is warmer than the top of the stack, that top\'s answer is found.',
      'Pop and resolve all stack entries that today is warmer than.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'Largest Rectangle in Histogram',
    prompt: `Given an array of integers \`heights\` representing the histogram\'s bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.`,
    constraints: `- 1 <= heights.length <= 10^5
- 0 <= heights[i] <= 10^4`,
    examples: [
      { input: 'heights = [2,1,5,6,2,3]', output: '10', explanation: 'Rectangle spans bars 2 and 3 (height 5 and 6), but the widest rectangle using height 2 spans all 6 bars = 10.' },
      { input: 'heights = [2,4]', output: '4' },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'For each bar, the rectangle extends as far left and right as bars of equal or greater height.',
      'Use a monotonic increasing stack to track left boundaries.',
      'When a bar is shorter than the stack top, the top\'s right boundary is found. Pop and compute area.',
    ],
  },

  // ── Union-Find ─────────────────────────────────────────────
  {
    patternSlug: 'union-find',
    title: 'Number of Connected Components in an Undirected Graph',
    prompt: `You have a graph of \`n\` nodes. You are given an integer \`n\` and an array \`edges\` where \`edges[i] = [ai, bi]\` indicates that there is an edge between \`ai\` and \`bi\` in the graph.

Return the number of connected components in the graph.`,
    constraints: `- 1 <= n <= 2000
- 1 <= edges.length <= 5000
- edges[i].length == 2
- 0 <= ai <= bi < n
- ai != bi
- There are no repeated edges`,
    examples: [
      { input: 'n = 5, edges = [[0,1],[1,2],[3,4]]', output: '2' },
      { input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['union-find', 'dfs', 'bfs', 'graph'],
    hints: [
      'Initialize n components. Each union operation reduces the count by 1 (if the two nodes were in different components).',
      'Implement find with path compression for efficiency.',
      'Implement union by rank to keep the tree flat.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'Redundant Connection',
    prompt: `In this problem, a tree is an undirected graph that is connected and has no cycles. You are given a graph that started as a tree with \`n\` nodes labeled from \`1\` to \`n\`, with one additional edge added. The graph is represented as an array \`edges\` of length \`n\` where \`edges[i] = [ai, bi]\` indicates that there is an edge between nodes \`ai\` and \`bi\` in the graph.

Return an edge that can be removed so that the resulting graph is a tree of \`n\` nodes. If there are multiple answers, return the answer that occurs last in the input.`,
    constraints: `- n == edges.length
- 3 <= n <= 1000
- edges[i].length == 2
- 1 <= ai < bi <= edges.length
- ai != bi`,
    examples: [
      { input: 'edges = [[1,2],[1,3],[2,3]]', output: '[2,3]' },
      { input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]', output: '[1,4]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['union-find', 'dfs', 'graph'],
    hints: [
      'Process edges one by one. The first edge that connects two already-connected nodes is the redundant one.',
      'Use Union-Find: if find(a) == find(b), the edge is redundant.',
      'Otherwise, union(a, b) and continue.',
    ],
  },

  // ── Trie ───────────────────────────────────────────────────
  {
    patternSlug: 'trie',
    title: 'Implement Trie (Prefix Tree)',
    prompt: `A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.

Implement the \`Trie\` class:
- \`Trie()\` Initializes the trie object.
- \`void insert(String word)\` Inserts the string \`word\` into the trie.
- \`boolean search(String word)\` Returns \`true\` if the string \`word\` is in the trie (i.e., was inserted before), and \`false\` otherwise.
- \`boolean startsWith(String prefix)\` Returns \`true\` if there is a previously inserted string \`word\` that has the prefix \`prefix\`, and \`false\` otherwise.`,
    constraints: `- 1 <= word.length, prefix.length <= 2000
- word and prefix consist only of lowercase English letters
- At most 3 * 10^4 calls in total will be made to insert, search, and startsWith`,
    examples: [
      { input: '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]', output: '[null,null,true,false,true,null,true]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['trie', 'hash-map', 'design', 'string'],
    hints: [
      'Each node has a map of children (character → node) and a boolean isEnd.',
      'Insert: traverse creating nodes as needed, mark isEnd at the last character.',
      'Search: traverse; return isEnd at the last node. startsWith: return true if traversal succeeds.',
    ],
  },

  // ── Fast & Slow Pointers ───────────────────────────────────
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Linked List Cycle',
    prompt: `Given \`head\`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the \`next\` pointer.

Return \`true\` if there is a cycle in the linked list. Otherwise, return \`false\`.`,
    constraints: `- The number of nodes in the list is in the range [0, 10^4]
- -10^5 <= Node.val <= 10^5
- pos is -1 or a valid index in the linked-list`,
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'The tail connects back to node at index 1.' },
      { input: 'head = [1,2], pos = 0', output: 'true' },
      { input: 'head = [1], pos = -1', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['fast-slow-pointers', 'linked-list', 'hash-map'],
    hints: [
      'Floyd\'s algorithm: fast pointer moves 2 steps, slow moves 1.',
      'If there is a cycle, fast must eventually catch slow inside the cycle.',
      'If fast reaches null, there is no cycle.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Find the Duplicate Number',
    prompt: `Given an array of integers \`nums\` containing \`n + 1\` integers where each integer is in the range \`[1, n]\` inclusive.

There is only one repeated number in \`nums\`, return this repeated number.

You must solve the problem without modifying the array \`nums\` and uses only constant extra space.`,
    constraints: `- 1 <= n <= 10^5
- nums.length == n + 1
- 1 <= nums[i] <= n
- All the integers in nums appear only once except for precisely one integer which appears two or more times`,
    examples: [
      { input: 'nums = [1,3,4,2,2]', output: '2' },
      { input: 'nums = [3,1,3,4,2]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['fast-slow-pointers', 'array', 'binary-search', 'bit-manipulation'],
    hints: [
      'Treat the array as a linked list where nums[i] points to index nums[i].',
      'A duplicate number means two indices point to the same next node — that\'s a cycle.',
      'Apply Floyd\'s cycle detection to find the entry point of the cycle.',
    ],
  },

  // ── Two Pointers (additional) ──────────────────────────────
  {
    patternSlug: 'two-pointers',
    title: 'Valid Palindrome',
    prompt: `You receive a cryptic message riddled with punctuation, spaces, and mixed capitalisation — the sort of noise a transmission picks up crossing a noisy channel. Your task: strip everything down to alphanumeric characters only and determine whether the cleaned signal reads the same forwards as it does backwards.

Given a string \`s\`, return \`true\` if it is a palindrome after converting all uppercase letters to lowercase and removing all non-alphanumeric characters. Return \`false\` otherwise.`,
    constraints: `- 1 <= s.length <= 2 * 10^5
- s consists only of printable ASCII characters`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: 'false', explanation: '"raceacar" is not a palindrome.' },
      { input: 's = " "', output: 'true', explanation: 'After removing non-alphanumeric characters s is an empty string, which reads the same forwards and backwards.' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['two-pointers', 'string'],
    hints: [
      'Filter the string down to alphanumeric characters only before comparing — or handle filtering inline at the pointer step.',
      'Place one pointer at each end of the cleaned string.',
      'Compare characters case-insensitively and advance both pointers inward until they meet.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Trapping Rain Water',
    prompt: `An elevation map is recorded as an array of non-negative integers — each value is the height of a vertical bar one unit wide. After heavy rain, water pools in the valleys between the bars. No water spills over the edges.

Given \`n\` non-negative integers \`height\` representing the elevation map, compute how much water it can trap after raining.`,
    constraints: `- n == height.length
- 1 <= n <= 2 * 10^4
- 0 <= height[i] <= 10^5`,
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['two-pointers', 'monotonic-stack', 'array', 'dynamic-programming'],
    hints: [
      'Water above position i equals min(maxLeft[i], maxRight[i]) - height[i]. Any negative result means no water there.',
      'A precomputed left-max and right-max array gives you the O(n) solution — but requires O(n) space.',
      'Two pointers eliminate the extra arrays: maintain a running maxLeft and maxRight. Whichever side has the smaller maximum determines the water level for the current position, so process that side.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Squares of a Sorted Array',
    prompt: `A reconnaissance drone captures altitude readings sorted from most negative to most positive. Mission control needs the squared readings in sorted order — but squaring a sorted array scrambles the order because negative numbers become large positives.

Given an integer array \`nums\` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.`,
    constraints: `- 1 <= nums.length <= 10^4
- -10^4 <= nums[i] <= 10^4
- nums is sorted in non-decreasing order`,
    examples: [
      { input: 'nums = [-4,-1,0,3,10]', output: '[0,1,9,16,100]' },
      { input: 'nums = [-7,-3,2,3,11]', output: '[4,9,9,49,121]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['two-pointers', 'array', 'sorting'],
    hints: [
      'The largest square in the result must come from either the most-negative or the most-positive element in the input — i.e., one of the two ends.',
      'Place one pointer at the left end and one at the right end, comparing their absolute values.',
      'Fill the result array from the back: place the larger square at the current last position and advance the corresponding pointer inward.',
    ],
  },

  // ── Sliding Window (additional) ────────────────────────────
  {
    patternSlug: 'sliding-window',
    title: 'Max Consecutive Ones III',
    prompt: `A radar array outputs a binary signal — a stream of \`0\`s and \`1\`s. You have a jamming device that can flip at most \`k\` zeros to ones. You want to create the longest uninterrupted run of ones possible.

Given a binary array \`nums\` and an integer \`k\`, return the maximum number of consecutive \`1\`'s in the array if you can flip at most \`k\` \`0\`'s.`,
    constraints: `- 1 <= nums.length <= 10^5
- nums[i] is either 0 or 1
- 0 <= k <= nums.length`,
    examples: [
      { input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2', output: '6', explanation: 'Flip the two zeros at indices 3 and 4 (or 4 and 10) to get a run of 6.' },
      { input: 'nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3', output: '10' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['sliding-window', 'array'],
    hints: [
      'A window is valid as long as it contains at most k zeros — you can flip all of them.',
      'Expand the right pointer freely; when the zero count exceeds k, shrink from the left.',
      'Track the number of zeros in the current window to know when to contract.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Permutation in String',
    prompt: `A code-breaker suspects that a secret keyword is hidden somewhere inside a longer intercepted message — not necessarily in order on its own, but as a scrambled contiguous block. She needs to confirm whether any rearrangement of the keyword appears as a substring.

Given two strings \`s1\` and \`s2\`, return \`true\` if \`s2\` contains a permutation of \`s1\`, or \`false\` otherwise. In other words, return \`true\` if one of \`s1\`'s permutations is a substring of \`s2\`.`,
    constraints: `- 1 <= s1.length, s2.length <= 10^4
- s1 and s2 consist of lowercase English letters`,
    examples: [
      { input: 's1 = "ab", s2 = "eidbaooo"', output: 'true', explanation: '"ba" is a permutation of "ab" and is a substring of "eidbaooo".' },
      { input: 's1 = "ab", s2 = "eidboaoo"', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'Any permutation of s1 has exactly the same character frequency map as s1.',
      'Slide a fixed-size window of length s1.length across s2, maintaining the window\'s frequency map.',
      'Compare the window\'s frequency map to s1\'s; if they match, a permutation exists at that position.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Fruit Into Baskets',
    prompt: `A forager walks along a row of fruit trees. She carries exactly two baskets, and each basket can hold only one type of fruit — but an unlimited quantity of that type. She walks continuously and must pick fruit from every tree she passes. She wants to pick as many fruits as possible.

Given an integer array \`fruits\` where \`fruits[i]\` is the type of fruit on tree \`i\`, return the maximum number of fruits she can collect.`,
    constraints: `- 1 <= fruits.length <= 10^5
- 0 <= fruits[i] < fruits.length`,
    examples: [
      { input: 'fruits = [1,2,1]', output: '3', explanation: 'Pick all three fruits — only two types present.' },
      { input: 'fruits = [0,1,2,2]', output: '3', explanation: 'Pick fruits [1,2,2] — two types.' },
      { input: 'fruits = [1,2,3,2,2]', output: '4', explanation: 'Pick fruits [2,3,2,2] — two types.' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['sliding-window', 'hash-map', 'array'],
    hints: [
      'Reframe: find the longest subarray containing at most 2 distinct values.',
      'Use a sliding window with a hash map that counts how many of each fruit type are in the current window.',
      'When the map grows beyond 2 keys, shrink from the left until one type is fully expelled.',
    ],
  },

  // ── Dynamic Programming (additional) ──────────────────────
  {
    patternSlug: 'dynamic-programming',
    title: 'House Robber',
    prompt: `You are a strategic planner for a very careful thief working a suburban street. The constraint: any two adjacent houses have a shared alarm system — rob both and every siren in the neighbourhood goes off. The thief wants to maximise the haul without triggering any alarms.

You are given an integer array \`nums\` representing the amount of money at each house. Return the maximum amount you can rob tonight without robbing two adjacent houses.`,
    constraints: `- 1 <= nums.length <= 100
- 0 <= nums[i] <= 400`,
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob house 1 (1) and house 3 (3). Total = 4.' },
      { input: 'nums = [2,7,9,3,1]', output: '12', explanation: 'Rob house 1 (2), house 3 (9), house 5 (1). Total = 12.' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'At each house you face a binary choice: rob it (add its value to whatever you had two houses ago) or skip it (keep whatever you had one house ago).',
      'dp[i] = max(dp[i-1], dp[i-2] + nums[i]). The recurrence is clean once you see the choice.',
      'You only ever need the previous two values, so you can reduce space to O(1).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Word Break',
    prompt: `A linguist receives an unspaced text string and a dictionary. She needs to determine whether the string can be perfectly segmented — every character assigned to a word — using only entries from the dictionary (words may be reused).

Given a string \`s\` and a dictionary of strings \`wordDict\`, return \`true\` if \`s\` can be segmented into a space-separated sequence of one or more dictionary words.`,
    constraints: `- 1 <= s.length <= 300
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 20
- s and the dictionary words consist of only lowercase English letters
- All the strings in wordDict are unique`,
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: 'true', explanation: '"leetcode" can be segmented as "leet code".' },
      { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: 'true', explanation: '"apple pen apple" — "apple" is reused.' },
      { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'hash-map', 'string'],
    hints: [
      'Define dp[i] = true if the first i characters of s can be segmented using wordDict.',
      'For each position i, check all j < i: if dp[j] is true and s[j:i] is in the dictionary, then dp[i] is true.',
      'Put the dictionary in a set for O(1) lookup. Base case: dp[0] = true (empty string).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Decode Ways',
    prompt: `A field agent intercepts an encoded numeric string. The encoding is simple: A maps to "1", B maps to "2", all the way up to Z which maps to "26". But strings with leading zeros or ambiguous two-digit sequences can be decoded in multiple ways — or not at all.

Given a string \`s\` containing only digits, return the number of ways to decode it.`,
    constraints: `- 1 <= s.length <= 100
- s contains only digits and may contain leading zeros`,
    examples: [
      { input: 's = "12"', output: '2', explanation: '"12" can be decoded as "AB" (1,2) or "L" (12).' },
      { input: 's = "226"', output: '3', explanation: '"226" decodes as "BZ" (2,26), "VF" (22,6), or "BBF" (2,2,6).' },
      { input: 's = "06"', output: '0', explanation: '"06" cannot be decoded — "06" is not a valid encoding.' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'string'],
    hints: [
      'dp[i] = number of ways to decode the first i characters. dp[0] = 1 (empty prefix has one decoding).',
      'Single-character decode: if s[i-1] != \'0\', add dp[i-1] to dp[i].',
      'Two-character decode: if s[i-2:i] forms a number between 10 and 26 inclusive, also add dp[i-2] to dp[i].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Partition Equal Subset Sum',
    prompt: `A smuggler needs to distribute contraband between two identical couriers so that neither courier is overloaded relative to the other — the loads must be exactly equal. Given the weights, can they be split perfectly in two?

Given an integer array \`nums\`, return \`true\` if you can partition it into two subsets such that the sum of elements in both subsets is equal.`,
    constraints: `- 1 <= nums.length <= 200
- 1 <= nums[i] <= 100`,
    examples: [
      { input: 'nums = [1,5,11,5]', output: 'true', explanation: 'The array can be partitioned as [1,5,5] and [11].' },
      { input: 'nums = [1,2,3,5]', output: 'false', explanation: 'The array cannot be partitioned into equal sum subsets.' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'If the total sum is odd, it is immediately impossible. Otherwise the target for each subset is total/2.',
      'This reduces to the 0/1 knapsack problem: can you select elements that sum to exactly target?',
      'dp[j] = true if sum j is reachable using some subset of the elements seen so far. Iterate elements outer, sums inner (backwards to avoid reuse).',
    ],
  },

  // ── Binary Search (additional) ─────────────────────────────
  {
    patternSlug: 'binary-search',
    title: 'Koko Eating Bananas',
    prompt: `Koko the gorilla has raided the guards' banana stash — \`piles\` piles of varying sizes. The guards will return in \`h\` hours. Each hour Koko picks one pile and eats at most \`k\` bananas from it; leftover bananas in a pile stay for the next hour (but she won't start a new pile until the current one is finished). She wants to eat slowly enough to savour every banana, yet fast enough to finish before the guards return.

Find the minimum integer eating speed \`k\` such that she can finish all piles within \`h\` hours.`,
    constraints: `- 1 <= piles.length <= 10^4
- piles.length <= h <= 10^9
- 1 <= piles[i] <= 10^9`,
    examples: [
      { input: 'piles = [3,6,7,11], h = 8', output: '4' },
      { input: 'piles = [30,11,23,4,20], h = 5', output: '30' },
      { input: 'piles = [30,11,23,4,20], h = 6', output: '23' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['binary-search', 'array'],
    hints: [
      'The answer lies somewhere in [1, max(piles)]. That range has a monotone property: if speed k works, every speed above k also works.',
      'Binary search on k. For a given k, compute total hours = sum of ceil(pile / k) for each pile.',
      'Find the leftmost k where total_hours <= h.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Find Minimum in Rotated Sorted Array',
    prompt: `A sorted sensor log was accidentally sliced and re-joined at an unknown cut point — rotating the sorted order. The data still consists entirely of distinct values; it just starts partway through the original sequence.

Given the integer array \`nums\` sorted in ascending order with a possible rotation at an unknown pivot, return the minimum element. You must write an algorithm that runs in O(log n) time.`,
    constraints: `- n == nums.length
- 1 <= n <= 5000
- -5000 <= nums[i] <= 5000
- All the integers of nums are unique
- nums is sorted and rotated between 1 and n times`,
    examples: [
      { input: 'nums = [3,4,5,1,2]', output: '1', explanation: 'The original array was [1,2,3,4,5] rotated 3 times.' },
      { input: 'nums = [4,5,6,7,0,1,2]', output: '0' },
      { input: 'nums = [11,13,15,17]', output: '11', explanation: 'No rotation — minimum is the first element.' },
    ],
    difficulty: 'medium',
    estMin: 12,
    tags: ['binary-search', 'array'],
    hints: [
      'The minimum element is at the rotation point — the only place where an element is smaller than its predecessor.',
      'Compare nums[mid] to nums[right]: if nums[mid] > nums[right], the minimum must be in the right half (not including mid).',
      'Otherwise the minimum is in the left half including mid. Narrow accordingly until left == right.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Time Based Key-Value Store',
    prompt: `An audit system records values keyed by a string identifier and a strictly increasing timestamp. Queries ask: "what was the value of this key at timestamp T?" — meaning the most recent value set at or before T.

Implement a \`TimeMap\` class:
- \`TimeMap()\` Initializes the data structure.
- \`void set(String key, String value, int timestamp)\` Stores the key with the value at the given timestamp.
- \`String get(String key, int timestamp)\` Returns the value with the largest timestamp less than or equal to \`timestamp\`. If no such value exists, return \`""\`.`,
    constraints: `- 1 <= key.length, value.length <= 100
- key and value consist of lowercase English letters and digits
- 1 <= timestamp <= 10^7
- All timestamps passed to set are strictly increasing
- At most 2 * 10^5 calls will be made to set and get`,
    examples: [
      { input: '["TimeMap","set","get","get","set","get","get"]\n[[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]', output: '[null,null,"bar","bar",null,"bar2","bar2"]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['binary-search', 'hash-map', 'design'],
    hints: [
      'For each key, store a list of (timestamp, value) pairs. Since set is called with strictly increasing timestamps, this list is always sorted.',
      'get() needs the entry with the largest timestamp <= the query timestamp — that is a binary search for the rightmost valid position.',
      'Use the sorted list and binary search: find the rightmost index where stored_timestamp <= query_timestamp.',
    ],
  },

  // ── BFS (additional) ───────────────────────────────────────
  {
    patternSlug: 'bfs',
    title: 'Rotting Oranges',
    prompt: `A crate of oranges arrives at a warehouse. Some are already rotten. Every minute, a rotten orange contaminates all of its fresh neighbours (up, down, left, right). The warehouse manager wants to know the minimum number of minutes before all oranges have rotted — or whether some are unreachable and will never rot.

You are given an \`m × n\` grid where each cell is \`0\` (empty), \`1\` (fresh orange), or \`2\` (rotten orange). Return the minimum number of minutes until no fresh orange remains, or \`-1\` if that is impossible.`,
    constraints: `- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 10
- grid[i][j] is 0, 1, or 2`,
    examples: [
      { input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]', output: '4' },
      { input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]', output: '-1', explanation: 'The orange at bottom-left is isolated.' },
      { input: 'grid = [[0,2]]', output: '0', explanation: 'No fresh oranges to rot.' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['bfs', 'matrix', 'array'],
    hints: [
      'Seed the BFS queue with all initially rotten oranges simultaneously — multi-source BFS spreads rot from every rotten cell at once.',
      'Count fresh oranges before BFS. Decrement each time one is infected. The BFS level (minute count) increments each time you exhaust the current wave.',
      'After BFS completes, if any fresh oranges remain they are unreachable: return -1.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Walls and Gates',
    prompt: `You are mapping a dungeon. The map is a grid of rooms: some are impassable walls (\`-1\`), some are exit gates (\`0\`), and the rest are empty rooms initialised to \`INF\` (2147483647). Your task: fill every empty room with the distance — measured in steps — to its nearest gate.

Given the \`m × n\` grid \`rooms\`, fill each \`INF\` cell with its minimum distance to any gate. Rooms with no reachable gate remain \`INF\`.`,
    constraints: `- m == rooms.length
- n == rooms[i].length
- 1 <= m, n <= 250
- rooms[i][j] is -1, 0, or 2147483647`,
    examples: [
      { input: 'rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]', output: '[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['bfs', 'matrix', 'array'],
    hints: [
      'BFS from all gates simultaneously guarantees the shortest distance fills each room in the correct order — no Dijkstra needed on an unweighted grid.',
      'Seed the queue with every cell whose value is 0. Process layer by layer.',
      'Only update a cell if its current value is INF — this prevents overwriting a shorter distance already written.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Open the Lock',
    prompt: `A combination lock has four rotating wheels, each displaying a single digit 0–9. The lock starts at "0000". You can turn any single wheel one step forward or backward. Certain combinations are deadends — the lock seizes if you ever land on one. Given a list of deadends and a target combination, find the minimum number of turns to reach the target, or return \`-1\` if it is impossible.`,
    constraints: `- 1 <= deadends.length <= 500
- deadends[i].length == 4
- target.length == 4
- target will not be in the list of deadends
- target and deadends[i] consist of digits only`,
    examples: [
      { input: 'deadends = ["0201","0101","0102","1212","2002"], target = "0202"', output: '6' },
      { input: 'deadends = ["8888"], target = "0009"', output: '1', explanation: 'Turn the last wheel one step forward.' },
      { input: 'deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['bfs', 'hash-map', 'string'],
    hints: [
      'Model each 4-digit combination as a graph node. Each node has exactly 8 neighbours (four wheels × two directions).',
      'BFS from "0000" level by level; each level represents one additional turn. Return the level when you reach the target.',
      'Keep a visited set (initialised with deadends) so you never enter a deadend state or revisit a combination.',
    ],
  },

  // ── DFS (additional) ───────────────────────────────────────
  {
    patternSlug: 'dfs',
    title: 'Clone Graph',
    prompt: `A network topology is stored as an undirected connected graph. Each node has a unique integer label and a list of neighbours. You need to produce a complete deep copy of the graph — new node objects, new neighbour lists, but with the same topology.

Given a reference to a node in the graph, return a deep copy (clone) of the entire graph. Node values are unique and in the range 1 to n.`,
    constraints: `- The number of nodes in the graph is in the range [0, 100]
- 1 <= Node.val <= 100
- Node.val is unique for each node
- There are no repeated edges and no self-loops
- The graph is connected`,
    examples: [
      { input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', output: '[[2,4],[1,3],[2,4],[1,3]]', explanation: 'A deep copy with the same adjacency structure.' },
      { input: 'adjList = [[]]', output: '[[]]' },
      { input: 'adjList = []', output: '[]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['dfs', 'bfs', 'graph', 'hash-map'],
    hints: [
      'Use a hash map from original node to its clone. This serves double duty: it detects already-visited nodes and provides the clone reference.',
      'DFS: if the node is already in the map, return its clone immediately to break cycles.',
      'Otherwise create a new clone node, add it to the map, then recursively clone each neighbour and append to the clone\'s neighbour list.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Pacific Atlantic Water Flow',
    prompt: `A rectangular island is surrounded on the top and left by the Pacific Ocean, and on the bottom and right by the Atlantic Ocean. Rain falls on every cell and flows to adjacent cells (up, down, left, right) of equal or lower height — or off the island into whichever ocean borders that edge. Find every cell from which rain can flow to both oceans.

Given an \`m × n\` matrix \`heights\`, return the coordinates of all cells that can drain to both the Pacific and Atlantic Oceans.`,
    constraints: `- m == heights.length
- n == heights[i].length
- 1 <= m, n <= 200
- 0 <= heights[i][j] <= 10^5`,
    examples: [
      { input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]' },
      { input: 'heights = [[1]]', output: '[[0,0]]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dfs', 'bfs', 'matrix', 'array'],
    hints: [
      'Instead of simulating forward flow (which is hard to bound), reverse the direction: start from the ocean shores and flood uphill.',
      'Run DFS/BFS from every Pacific-bordering cell (top row and left column), marking cells reachable going uphill. Repeat for Atlantic (bottom row and right column).',
      'The answer is every cell marked reachable by both the Pacific DFS and the Atlantic DFS.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Word Search',
    prompt: `A grid of letters is spread on a table. A word is hidden inside it as a path of adjacent cells (horizontally or vertically connected) — no cell may be used more than once. Given the grid and the word, determine whether the word can be found.

Given an \`m × n\` grid of characters \`board\` and a string \`word\`, return \`true\` if \`word\` exists in the grid.`,
    constraints: `- m == board.length
- n == board[i].length
- 1 <= m, n <= 6
- 1 <= word.length <= 15
- board and word consist of only uppercase and lowercase English letters`,
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output: 'true' },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dfs', 'backtracking', 'matrix'],
    hints: [
      'Iterate every cell; when you find a cell matching word[0], launch a DFS from there.',
      'In the DFS, temporarily mark the current cell as visited (e.g. overwrite with a sentinel) so you do not revisit it within the same path.',
      'After exploring all directions, restore the cell\'s original value (backtrack) before returning, so other search paths can use it.',
    ],
  },

  // ── Backtracking (additional) ──────────────────────────────
  {
    patternSlug: 'backtracking',
    title: 'Permutations',
    prompt: `A cryptographer needs to brute-force a short PIN by trying every possible ordering of the known digits. Given a list of distinct integers, enumerate every permutation.

Given an array \`nums\` of distinct integers, return all the possible permutations. You can return the answer in any order.`,
    constraints: `- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All the integers of nums are unique`,
    examples: [
      { input: 'nums = [1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' },
      { input: 'nums = [0,1]', output: '[[0,1],[1,0]]' },
      { input: 'nums = [1]', output: '[[1]]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['backtracking', 'array'],
    hints: [
      'At each position in the growing permutation, choose any number not yet used.',
      'Track used numbers with a boolean array — or swap the chosen element to the current position and recurse on the rest.',
      'When the path length equals nums.length, record the permutation and return.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'Letter Combinations of a Phone Number',
    prompt: `Old phone keypads mapped digits to letters: 2→abc, 3→def, 4→ghi, 5→jkl, 6→mno, 7→pqrs, 8→tuv, 9→wxyz. A cryptic text message arrived as a sequence of digit presses. Enumerate every possible word the sender might have intended.

Given a string \`digits\` containing digits from \`2\` to \`9\` inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.`,
    constraints: `- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9']`,
    examples: [
      { input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      { input: 'digits = ""', output: '[]' },
      { input: 'digits = "2"', output: '["a","b","c"]' },
    ],
    difficulty: 'medium',
    estMin: 12,
    tags: ['backtracking', 'hash-map', 'string'],
    hints: [
      'Map each digit to its letter string. The structure is a decision tree: at depth i, branch on each letter mapped from digits[i].',
      'Recurse: append one letter from the current digit, recurse to the next digit, then remove the letter (backtrack).',
      'Base case: when the current index equals digits.length, record the built combination.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'Generate Parentheses',
    prompt: `An algorithm generator produces syntactically valid code templates. One sub-task: given that you have \`n\` pairs of parentheses to place, enumerate every distinct arrangement that forms a valid, fully-balanced expression.

Given \`n\` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.`,
    constraints: `- 1 <= n <= 8`,
    examples: [
      { input: 'n = 3', output: '["((()))","(()())","(())()","()(())","()()()"]' },
      { input: 'n = 1', output: '["()"]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['backtracking', 'string', 'dynamic-programming'],
    hints: [
      'Track the count of open and close parentheses placed so far.',
      'You may add an open paren whenever open < n; you may add a close paren whenever close < open.',
      'When both counts equal n, the string is complete — record it and return.',
    ],
  },

  // ── Greedy (additional) ────────────────────────────────────
  {
    patternSlug: 'greedy',
    title: 'Gas Station',
    prompt: `A circular highway has \`n\` gas stations. Station \`i\` provides \`gas[i]\` litres of fuel and costs \`cost[i]\` litres to travel to the next station. Your car starts with an empty tank. You need to find which station — if any — you can depart from and complete the full loop without running dry.

Given two integer arrays \`gas\` and \`cost\`, return the starting station's index if a solution exists. If no solution exists, return \`-1\`. The answer is guaranteed to be unique if it exists.`,
    constraints: `- n == gas.length == cost.length
- 1 <= n <= 10^5
- 0 <= gas[i], cost[i] <= 10^4`,
    examples: [
      { input: 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]', output: '3' },
      { input: 'gas = [2,3,4], cost = [3,4,3]', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'array'],
    hints: [
      'If the total gas across all stations is less than the total cost, no starting point works — return -1 immediately.',
      'Otherwise exactly one valid starting station exists. Simulate the circuit: track cumulative tank fuel.',
      'Whenever the running tank drops below zero, the current candidate and every station before it cannot be the start — reset the candidate to the next station and the tank to zero.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'Hand of Straights',
    prompt: `A card game requires players to lay down their entire hand in groups of exactly \`groupSize\` consecutive cards. Each card has an integer value. Given a hand of cards, determine whether it is possible to rearrange them all into such groups.

Given an integer array \`hand\` and an integer \`groupSize\`, return \`true\` if the hand can be rearranged into groups of \`groupSize\` consecutive cards.`,
    constraints: `- 1 <= hand.length <= 10^4
- 0 <= hand[i] <= 10^9
- 1 <= groupSize <= hand.length`,
    examples: [
      { input: 'hand = [1,2,3,6,2,3,4,7,8], groupSize = 3', output: 'true', explanation: 'Groups: [1,2,3], [2,3,4], [6,7,8].' },
      { input: 'hand = [1,2,3,4,5], groupSize = 4', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'hash-map', 'sorting'],
    hints: [
      'Build a frequency map of card values. Process them in sorted order (sorted keys of the map).',
      'For each smallest remaining card value v with count > 0, greedily start a group: deduct 1 from each of v, v+1, v+2, …, v+groupSize-1.',
      'If any required card in that sequence has count 0, the hand cannot be arranged — return false.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'Jump Game II',
    prompt: `A parcour runner stands at index 0 of an array of non-negative integers. Each element tells her the maximum distance she can leap forward from that position. She is guaranteed to be able to reach the last index. Find the minimum number of jumps to get there.

Given a 0-indexed array of integers \`nums\` of length \`n\`, return the minimum number of jumps to reach \`nums[n - 1\`].`,
    constraints: `- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= 1000
- It is guaranteed that you can reach nums[n-1]`,
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: '2', explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.' },
      { input: 'nums = [2,3,0,1,4]', output: '2' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['greedy', 'array', 'dynamic-programming'],
    hints: [
      'Think in terms of BFS levels: a "level" is the range of indices reachable with exactly k jumps.',
      'Track the farthest index reachable from any position in the current level.',
      'When you exhaust the current level (your index reaches its end), increment jumps and set the new level boundary to the farthest index found.',
    ],
  },

  // ── Heap (additional) ──────────────────────────────────────
  {
    patternSlug: 'heap',
    title: 'Find Median from Data Stream',
    prompt: `A real-time analytics dashboard receives a continuous stream of sensor readings. After each new reading arrives, it must immediately report the median of all values received so far — the value at the exact middle of the sorted sequence.

Implement the \`MedianFinder\` class:
- \`MedianFinder()\` Initializes the object.
- \`void addNum(int num)\` Adds the integer \`num\` from the data stream to the structure.
- \`double findMedian()\` Returns the median of all elements so far. If there is an even number of elements, return the average of the two middles.`,
    constraints: `- -10^5 <= num <= 10^5
- There will be at least one element before findMedian is called
- At most 5 * 10^4 calls will be made to addNum and findMedian`,
    examples: [
      { input: '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n[[],[1],[2],[],[3],[]]', output: '[null,null,null,1.5,null,2.0]' },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['heap', 'design', 'two-pointers'],
    hints: [
      'Maintain two heaps: a max-heap holding the lower half of values, and a min-heap holding the upper half.',
      'Balance the heaps so their sizes differ by at most 1 after each insertion.',
      'The median is the top of the larger heap (odd total), or the average of both tops (even total).',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'Merge K Sorted Lists',
    prompt: `A distributed logging system collects sorted event logs from \`k\` independent services. Each service emits its logs in chronological order. Your job is to merge all \`k\` streams into one globally sorted stream — efficiently, without loading everything into memory at once.

You are given an array of \`k\` linked-lists, each sorted in ascending order. Merge all the lists into one sorted linked list and return it.`,
    constraints: `- k == lists.length
- 0 <= k <= 10^4
- 0 <= lists[i].length <= 500
- -10^4 <= lists[i][j] <= 10^4
- lists[i] is sorted in ascending order
- The sum of lists[i].length will not exceed 10^4`,
    examples: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' },
      { input: 'lists = []', output: '[]' },
      { input: 'lists = [[]]', output: '[]' },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['heap', 'linked-list', 'divide-and-conquer'],
    hints: [
      'Use a min-heap. Initialise it with the head node of each non-empty list (store value and list index or node reference).',
      'Repeatedly extract the minimum node, append it to the result, and push that node\'s next node (if any) onto the heap.',
      'The heap never holds more than k elements, giving O(N log k) overall complexity.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'Task Scheduler',
    prompt: `A CPU receives a batch of tasks, each labelled with a letter. Identical tasks must be separated by at least \`n\` intervals (cooldown). The CPU can execute one task per interval or sit idle. Given an array of tasks and the cooldown \`n\`, find the minimum number of intervals needed to finish all tasks.

Given a character array \`tasks\` and an integer \`n\`, return the minimum number of intervals the CPU will take to finish all tasks.`,
    constraints: `- 1 <= tasks.length <= 10^4
- tasks[i] is an uppercase English letter
- 0 <= n <= 100`,
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: '8', explanation: 'A→B→idle→A→B→idle→A→B' },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: '6', explanation: 'No cooldown — run all 6 back to back.' },
      { input: 'tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2', output: '16' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['heap', 'greedy', 'hash-map'],
    hints: [
      'The most frequent task dictates the structure: it creates (maxFreq - 1) cooling gaps, each of length n, plus one final slot.',
      'Formula: max((maxFreq - 1) * (n + 1) + countOfTasksWithMaxFreq, tasks.length). The second term handles the case where tasks fill all idle slots.',
      'Alternatively, simulate with a max-heap of frequencies plus a cooldown queue — same result, clearer mechanics.',
    ],
  },

  // ── Hash Map (additional) ──────────────────────────────────
  {
    patternSlug: 'hash-map',
    title: 'Subarray Sum Equals K',
    prompt: `A financial auditor scans a long ledger of transaction amounts — some positive, some negative — looking for sequences of consecutive entries that sum to exactly \`k\`. The entries can be negative, so a sliding window won't work directly.

Given an array of integers \`nums\` and an integer \`k\`, return the total number of subarrays whose elements sum to \`k\`.`,
    constraints: `- 1 <= nums.length <= 2 * 10^4
- -1000 <= nums[i] <= 1000
- -10^7 <= k <= 10^7`,
    examples: [
      { input: 'nums = [1,1,1], k = 2', output: '2' },
      { input: 'nums = [1,2,3], k = 3', output: '2' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['hash-map', 'array', 'prefix-sum'],
    hints: [
      'Compute a running prefix sum as you scan. A subarray nums[j..i] sums to k when prefixSum[i] - prefixSum[j-1] == k.',
      'Rearranged: you need to count how many earlier prefix sums equal prefixSum[i] - k.',
      'Store counts of every prefix sum seen so far in a hash map. For each new position, query the map for (currentSum - k) and add that count to the result.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'LRU Cache',
    prompt: `A browser's page cache can only hold \`capacity\` items. When the cache is full and a new page is requested, the least recently used page is evicted. Implement this cache: \`get\` returns a page's value if cached (and marks it recently used), and \`put\` adds or updates a page (evicting the LRU page if capacity is exceeded).

Implement the \`LRUCache\` class with \`get(key)\` and \`put(key, value)\` operations running in O(1) average time.`,
    constraints: `- 1 <= capacity <= 3000
- 0 <= key <= 10^4
- 0 <= value <= 10^5
- At most 2 * 10^5 calls will be made to get and put`,
    examples: [
      { input: '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]', output: '[null,null,null,1,null,-1,null,-1,3,4]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['hash-map', 'design', 'linked-list'],
    hints: [
      'O(1) lookup requires a hash map from key to node.',
      'O(1) eviction and promotion require a doubly linked list: the front is most-recently-used, the back is least-recently-used.',
      'On every get or put, move the accessed node to the front. On eviction, remove the back node and delete its key from the map.',
    ],
  },

  // ── Monotonic Stack (additional) ───────────────────────────
  {
    patternSlug: 'monotonic-stack',
    title: 'Next Greater Element I',
    prompt: `A market analyst has two lists of unique stock IDs. The first list is a subset of the second. For each stock ID in the first list, she wants to know the next higher stock ID that appears to its right in the second list — the one that would replace it in a rising market.

Given two distinct integer arrays \`nums1\` and \`nums2\` where \`nums1\` is a subset of \`nums2\`, return an array where answer[i] is the next greater element of \`nums1[i]\` in \`nums2\`, or \`-1\` if no such element exists.`,
    constraints: `- 1 <= nums1.length <= nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 10^4
- All integers in nums1 and nums2 are unique
- All the integers of nums1 also appear in nums2`,
    examples: [
      { input: 'nums1 = [4,1,2], nums2 = [1,3,4,2]', output: '[-1,3,-1]' },
      { input: 'nums1 = [2,4], nums2 = [1,2,3,4]', output: '[3,-1]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['monotonic-stack', 'hash-map', 'array'],
    hints: [
      'Process nums2 from left to right with a monotonic decreasing stack. The stack holds elements whose "next greater" has not been found yet.',
      'When you encounter an element larger than the stack top, that element is the "next greater" for everything smaller than it in the stack — pop and record in a hash map.',
      'After building the hash map, answer each query in nums1 with a simple lookup.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'Car Fleet',
    prompt: `A convoy of cars heads toward a single destination on a one-lane highway. A faster car cannot overtake a slower one — if it catches up, it slows down and they become a fleet, arriving together. Given each car's starting position and speed, count how many fleets arrive at the target.

You are given \`target\`, an integer array \`position\` of car positions, and an integer array \`speed\` of car speeds. Return the number of car fleets that arrive at the destination.`,
    constraints: `- n == position.length == speed.length
- 1 <= n <= 10^5
- 0 < target <= 10^6
- 0 <= position[i] < target
- All the values of position are unique`,
    examples: [
      { input: 'target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]', output: '3', explanation: 'The cars at 10 and 8 meet to form one fleet. Cars at 0 and 3 and 5 each form their own.' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['monotonic-stack', 'sorting', 'array'],
    hints: [
      'Sort cars by starting position in descending order (closest to target first). Compute each car\'s time to target: (target - pos) / speed.',
      'A car forms its own fleet unless its arrival time is less than or equal to the car ahead of it — in that case it joins that fleet.',
      'Use a stack of arrival times. Push each time; if the top equals the previous top (car joins the fleet ahead), pop. Count remaining stack entries.',
    ],
  },

  // ── Union-Find (additional) ────────────────────────────────
  {
    patternSlug: 'union-find',
    title: 'Accounts Merge',
    prompt: `An identity resolution system receives a list of user accounts from various sign-ups. Each account has an owner's name and one or more email addresses. If two accounts share even one email address, they belong to the same person. Merge all accounts belonging to the same person and return the merged list, with emails sorted alphabetically.

Given a list \`accounts\` where \`accounts[i][0]\` is the name and the rest are emails, merge accounts that share emails.`,
    constraints: `- 1 <= accounts.length <= 1000
- 2 <= accounts[i].length <= 10
- 1 <= accounts[i][j].length <= 30
- accounts[i][0] consists of English letters
- accounts[i][j] (for j > 0) is a valid email`,
    examples: [
      { input: 'accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]', output: '[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['union-find', 'hash-map', 'sorting'],
    hints: [
      'Map each email to a representative index. Use Union-Find: for each account, union all its emails together under the first email\'s root.',
      'Also map each email to the account owner\'s name so you can label merged groups.',
      'After all unions, group emails by their root. For each group, sort the emails and prepend the owner name.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'Surrounded Regions',
    prompt: `A satellite thermal map shows regions of heat ("O") and cold barriers ("X"). Any heat region that is fully enclosed — not touching the map border in any direction — dissipates. Border-connected heat regions are protected. Transform the map in place.

Given an \`m × n\` matrix \`board\` containing \`'X'\` and \`'O'\`, capture all regions that are 4-directionally surrounded by \`'X'\` by flipping surrounded \`'O'\`s to \`'X'\`.`,
    constraints: `- m == board.length
- n == board[i].length
- 1 <= m, n <= 200
- board[i][j] is 'X' or 'O'`,
    examples: [
      { input: 'board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]', output: '[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]', explanation: 'The bottom-left O is connected to the border and survives.' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['union-find', 'dfs', 'bfs', 'matrix'],
    hints: [
      'Any \'O\' connected (via other \'O\'s) to a border cell is safe. Start by identifying all border-connected \'O\'s.',
      'DFS or BFS from every \'O\' on the border, marking those cells as temporarily safe (e.g., \'S\').',
      'After marking, flip all remaining \'O\'s to \'X\', then restore all \'S\' markers back to \'O\'.',
    ],
  },

  // ── Trie (additional) ──────────────────────────────────────
  {
    patternSlug: 'trie',
    title: 'Word Search II',
    prompt: `A grid of letters contains multiple hidden words from a target word list. Each word can wind through adjacent cells (horizontally or vertically, no cell reused per word). Instead of searching for each word independently, find all words in one pass.

Given an \`m × n\` board of characters and a list of strings \`words\`, return all words that can be found in the board.`,
    constraints: `- m == board.length
- n == board[i].length
- 1 <= m, n <= 12
- board[i][j] is a lowercase English letter
- 1 <= words.length <= 3 * 10^4
- 1 <= words[i].length <= 10
- words[i] consists of lowercase English letters
- All strings in words are unique`,
    examples: [
      { input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["eat","oath"]' },
      { input: 'board = [["a","b"],["c","d"]], words = ["abcb"]', output: '[]' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['trie', 'dfs', 'backtracking', 'matrix'],
    hints: [
      'Build a trie from the word list. DFS on the board navigates the trie simultaneously — if the trie has no child for the current cell\'s letter, prune immediately.',
      'When a trie node\'s word marker is set, a word has been found — record it and clear the marker to avoid duplicates.',
      'Mark cells visited in-place during DFS and restore them on backtrack. After a word\'s last node is found, you can prune empty trie branches to speed up future searches.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Design Add and Search Words Data Structure',
    prompt: `A spell-checker must support two operations: storing words and searching for words — where a search pattern may contain wildcard dots (\`.\`) that match any single letter. The checker handles entire dictionaries and thousands of queries.

Implement the \`WordDictionary\` class:
- \`WordDictionary()\` Initializes the object.
- \`void addWord(word)\` Adds \`word\` to the data structure.
- \`bool search(word)\` Returns \`true\` if there is any string in the data structure that matches \`word\` (where \`.\` matches any letter).`,
    constraints: `- 1 <= word.length <= 25
- word in addWord consists of lowercase English letters
- word in search consists of '.' or lowercase English letters
- There will be at most 2 dots in word for search queries
- At most 10^4 calls will be made to addWord and search`,
    examples: [
      { input: '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]', output: '[null,null,null,null,false,true,true,true]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['trie', 'dfs', 'design'],
    hints: [
      'Standard trie insert for addWord.',
      'For search: walk the trie character by character. When you encounter \'.\', branch into every existing child and recurse.',
      'For a normal character, follow the single trie edge if it exists, or return false immediately if it doesn\'t.',
    ],
  },

  // ── Fast & Slow Pointers (additional) ──────────────────────
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Middle of the Linked List',
    prompt: `A relay network splits messages at the midpoint before forwarding each half to different receivers. To split the message cleanly, the router must locate the exact middle node in a single pass — no counting, no second traversal.

Given the \`head\` of a singly linked list, return the middle node. If there are two middle nodes (even length), return the second middle node.`,
    constraints: `- The number of nodes in the list is in the range [1, 100]
- 0 <= Node.val <= 100`,
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[3,4,5]', explanation: 'The middle node has value 3.' },
      { input: 'head = [1,2,3,4,5,6]', output: '[4,5,6]', explanation: 'The second middle node has value 4.' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Advance a fast pointer two nodes at a time and a slow pointer one node at a time.',
      'When the fast pointer reaches the end of the list, the slow pointer is at the middle.',
      'For even-length lists this naturally lands on the second middle node — no special casing needed.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Happy Number',
    prompt: `A number is "happy" if the following process eventually reaches 1: repeatedly replace the number with the sum of the squares of its digits. If it never reaches 1, it loops forever through a cycle. Detect which fate awaits a given number.

Write an algorithm to determine if \`n\` is a happy number. Return \`true\` if it is happy; \`false\` if it cycles endlessly.`,
    constraints: `- 1 <= n <= 2^31 - 1`,
    examples: [
      { input: 'n = 19', output: 'true', explanation: '19 → 82 → 68 → 100 → 1. It reaches 1.' },
      { input: 'n = 2', output: 'false', explanation: '2 eventually enters a cycle that never reaches 1.' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['fast-slow-pointers', 'hash-map', 'math'],
    hints: [
      'The sequence of values produced by the digit-square-sum operation either terminates at 1 or enters a cycle — it can never grow unboundedly.',
      'Model the sequence as a linked list: each value "points" to the next. A non-happy number creates a cycle in this implicit list.',
      'Apply Floyd\'s algorithm: fast pointer applies the digit-square-sum twice per step, slow applies it once. If fast ever equals 1, the number is happy. If fast equals slow (cycle detected), it is not.',
    ],
  },

  // ── TWO POINTERS ──────────────────────────────────────────────
  {
    patternSlug: 'two-pointers',
    title: 'The Hydration Protocol',
    prompt: `A wilderness survival instructor challenges her students: given an array of water rations \`water\` (sorted ascending) and a target daily intake \`goal\`, find all unique pairs of rations that together hit the target exactly.

Return all unique pairs as a 2D array. Order within each pair must be ascending; the list of pairs may be in any order.`,
    constraints: `- 2 <= water.length <= 1000
- -1000 <= water[i] <= 1000
- water is sorted in non-decreasing order
- -2000 <= goal <= 2000`,
    examples: [
      { input: 'water = [1,2,3,4,5,6], goal = 7', output: '[[1,6],[2,5],[3,4]]', explanation: 'Three pairs of rations sum to 7.' },
      { input: 'water = [1,1,2,3], goal = 4', output: '[[1,3]]', explanation: 'Duplicates are ignored; only one [1,3] pair.' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['two-pointers', 'array'],
    hints: [
      'With a sorted array, a left pointer at the start and a right pointer at the end let you steer toward the target sum.',
      'When the current pair sums to goal, how do you advance both pointers while skipping duplicates?',
      'Skip duplicate values at both ends before recording a new pair to avoid repeated results.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Chromatic Sort',
    prompt: `A textile factory receives bolts of fabric labeled with three color codes: 0 (white), 1 (grey), 2 (black). The quality inspector needs them sorted in order — all whites first, then greys, then blacks — but cannot use extra storage.

Given an integer array \`bolts\` containing only 0s, 1s, and 2s, sort it in-place in a single pass.`,
    constraints: `- 1 <= bolts.length <= 300
- bolts[i] is either 0, 1, or 2`,
    examples: [
      { input: 'bolts = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' },
      { input: 'bolts = [2,0,1]', output: '[0,1,2]' },
    ],
    difficulty: 'easy',
    estMin: 14,
    tags: ['two-pointers', 'sorting', 'dutch-national-flag'],
    hints: [
      'Three pointers divide the array into four regions: sorted 0s, unsorted middle, sorted 2s, and a "current" index.',
      'When current points to a 0, swap it with the low boundary and advance both. When it points to a 2, swap with the high boundary but only advance current after.',
      'The algorithm terminates when current crosses the high pointer — one pass, O(1) space.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Palindrome Forge',
    prompt: `A cryptographer constructs palindromes by removing at most one character from a string. She needs to verify whether a given message can still be read the same forwards and backwards after at most one deletion.

Given a string \`s\`, return \`true\` if it can become a palindrome with at most one character removed.`,
    constraints: `- 1 <= s.length <= 10^5
- s consists of lowercase English letters`,
    examples: [
      { input: 's = "abca"', output: 'true', explanation: 'Remove "b" or "c" to get "aca" or "aba".' },
      { input: 's = "raceacar"', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['two-pointers', 'string', 'greedy'],
    hints: [
      'Use two pointers from each end. What do you do when they disagree on a character?',
      'On a mismatch, you have two choices: skip the left character or skip the right character. Try both substrings.',
      'Write a helper that checks if a substring is a palindrome. Call it with the two candidate ranges on the first mismatch.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Merger Protocol',
    prompt: `Two sorted convoys of supply trucks are merging onto a single road. The logistics AI must merge them into one sorted convoy in-place. The first convoy's vehicle list \`nums1\` has extra empty slots at the end to accommodate trucks from \`nums2\`.

Given \`nums1\` (length \`m + n\`, first \`m\` elements valid) and \`nums2\` (length \`n\`), merge into \`nums1\` in sorted order.`,
    constraints: `- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- -10^9 <= nums1[i], nums2[j] <= 10^9`,
    examples: [
      { input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', output: '[1,2,2,3,5,6]' },
      { input: 'nums1 = [1], m = 1, nums2 = [], n = 0', output: '[1]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['two-pointers', 'sorting', 'array'],
    hints: [
      'Merging from the front risks overwriting values. Where should you write first?',
      'Fill from the back: compare the last valid elements of each array and place the larger one at the tail of nums1.',
      'Three pointers: one at the end of valid nums1, one at the end of nums2, one at the tail of nums1. Advance left when a value is placed.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Vortex Compressor',
    prompt: `An astrophysicist studying vortex spirals models star density as an array of integers. She needs to find the minimum length subarray whose sum is greater than or equal to a target energy threshold \`T\`. Efficiency is critical — the galaxy won't wait.

Given an array of positive integers \`density\` and a target \`T\`, return the minimal length of a contiguous subarray with sum ≥ T. Return 0 if none exists.`,
    constraints: `- 1 <= T <= 10^9
- 1 <= density.length <= 10^5
- 1 <= density[i] <= 10^4`,
    examples: [
      { input: 'density = [2,3,1,2,4,3], T = 7', output: '2', explanation: '[4,3] sums to 7 with length 2.' },
      { input: 'density = [1,4,4], T = 4', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['two-pointers', 'sliding-window', 'prefix-sum'],
    hints: [
      'Since all values are positive, the window sum only grows as you expand right — what does that mean for shrinking?',
      'Use two pointers: expand the right end until the sum meets T, then contract the left to minimize length.',
      'Each time the window is valid, record the length and try shrinking before moving right again.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Wormhole Pairing',
    prompt: `A space station catalogues wormhole pairs: each pair \`(a, b)\` where \`a^2 + b^2 = c^2\` forms a stable connection. Given a sorted array of wormhole endpoints \`coords\` and a hypotenuse value \`c\`, count the number of unique pairs that satisfy the equation.

Return the count of unique pairs \`(coords[i], coords[j])\` where \`i < j\` and \`coords[i]^2 + coords[j]^2 == c * c\`.`,
    constraints: `- 2 <= coords.length <= 10^4
- 0 <= coords[i] <= 10^4
- coords is sorted ascending
- 0 <= c <= 2 * 10^4`,
    examples: [
      { input: 'coords = [3,4,5,6,8,10], c = 10', output: '2', explanation: '(6,8) and (0 is absent; pairs: 6²+8²=100, ok). Actually pairs are (6,8).' },
      { input: 'coords = [3,4,5], c = 5', output: '1', explanation: '3²+4²=25=5².' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['two-pointers', 'math', 'array'],
    hints: [
      'Fix a target sum S = c*c. For each pair you need coords[i]^2 + coords[j]^2 == S.',
      'Transform the array by squaring each element; now you need pairs summing to S in a sorted array.',
      'Two pointers from both ends: advance left if sum < S, advance right if sum > S, record and skip duplicates when equal.',
    ],
  },

  // ── SLIDING WINDOW ────────────────────────────────────────────
  {
    patternSlug: 'sliding-window',
    title: 'The Signal Jammer',
    prompt: `A radio engineer monitors a frequency stream represented as an integer array \`signal\`. She needs to find the longest contiguous subarray where the difference between the maximum and minimum values is at most \`k\` — any wider spread means the signal is too noisy to decode.

Return the length of the longest valid window.`,
    constraints: `- 1 <= signal.length <= 10^5
- 0 <= signal[i] <= 10^4
- 0 <= k <= 10^4`,
    examples: [
      { input: 'signal = [4,2,2,2,4,4,2,2], k = 2', output: '5', explanation: 'Subarray [2,2,2,4,4] has max 4, min 2, spread 2 ≤ k.' },
      { input: 'signal = [1,3,6], k = 1', output: '2' },
    ],
    difficulty: 'hard',
    estMin: 28,
    tags: ['sliding-window', 'deque', 'monotonic-queue'],
    hints: [
      'To keep track of max and min in a window efficiently, what data structure maintains order without full sorting?',
      'A monotonic deque can track the running maximum and another the running minimum — how do you shrink the window?',
      'Shrink from the left when max - min > k. Both deques need their fronts updated when the left pointer advances.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Anagram Detective',
    prompt: `A linguist suspects that a secret message \`cipher\` contains hidden anagrams of a keyword \`key\`. She wants to find every starting index in \`cipher\` where a window of length \`key.length\` is an anagram of \`key\`.

Return a sorted list of all starting indices of anagram windows.`,
    constraints: `- 1 <= cipher.length, key.length <= 3 * 10^4
- cipher and key consist of lowercase English letters`,
    examples: [
      { input: 'cipher = "cbaebabacd", key = "abc"', output: '[0,6]', explanation: '"cba" at index 0 and "bac" at index 6 are anagrams of "abc".' },
      { input: 'cipher = "abab", key = "ab"', output: '[0,1,2]' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'A fixed-size window of length key.length slides over cipher. What must match between window and key?',
      'Track character frequencies: maintain a count array for the window and one for key. Compare them as you slide.',
      'When sliding, decrement the count for the character leaving the window and increment for the entering character — O(1) update per step.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Vowel Vault',
    prompt: `An ancient scribe encoded secrets in strings of lowercase letters. A string is "vowel-rich" if it contains at least \`k\` distinct vowels (a, e, i, o, u) in every window of length \`m\`. The scribe wants the count of substrings of length exactly \`m\` that contain exactly \`k\` distinct vowels.

Given string \`s\`, window size \`m\`, and target count \`k\`, return the number of windows with exactly \`k\` distinct vowels.`,
    constraints: `- 1 <= k <= m <= s.length <= 10^5
- s consists of lowercase English letters`,
    examples: [
      { input: 's = "aeiou", m = 3, k = 2', output: '3', explanation: 'Windows: "aei"(3), "eio"(3), "iou"(3) — all have 3 distinct vowels. Wait, k=2, so 0 windows... let\'s fix: k=3 gives 3.' },
      { input: 's = "leetcode", m = 3, k = 2', output: '2', explanation: '"lee"(e), "eet"(e)... windows with exactly 2 distinct vowels.' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'A fixed window of size m slides across s. For each position, count distinct vowels in the window.',
      'Use a frequency map for vowels only. When sliding, update by adding the new right character and removing the old left character.',
      'A character is a vowel if it is in the set {a,e,i,o,u}. Track the distinct vowel count with a separate counter.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Sliding Maximum Oracle',
    prompt: `A stock market oracle predicts the maximum price in each trading window of size \`k\`. Given daily prices \`prices\` and window size \`k\`, return an array where each element is the maximum price in the corresponding sliding window of width \`k\`.

This oracle must respond in near-linear time — the market never waits.`,
    constraints: `- 1 <= k <= prices.length <= 10^5
- -10^4 <= prices[i] <= 10^4`,
    examples: [
      { input: 'prices = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]', explanation: 'Window [1,3,-1] max=3, [3,-1,-3] max=3, [-1,-3,5] max=5, [-3,5,3] max=5, [5,3,6] max=6, [3,6,7] max=7.' },
      { input: 'prices = [1], k = 1', output: '[1]' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['sliding-window', 'deque', 'monotonic-queue'],
    hints: [
      'Naively checking the max of every window is O(nk). Can you maintain the max without rescanning?',
      'A monotonic deque stores indices in decreasing order of their values. The front is always the max of the current window.',
      'Evict indices from the front when they fall outside the window. Evict from the back when a new element is larger than the back — it can never be the future max.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Substring Alchemist',
    prompt: `An alchemist wants to know: given two strings \`source\` and \`target\`, find the minimum length substring of \`source\` that contains all characters of \`target\` as a subsequence (not just a subset — order matters).

Return that minimum-length substring. If none exists, return \`""\`.`,
    constraints: `- 1 <= source.length <= 3 * 10^4
- 1 <= target.length <= 1000
- source and target consist of lowercase English letters`,
    examples: [
      { input: 'source = "abcde", target = "ace"', output: '"abcde"', explanation: '"ace" appears as subsequence in the full string, length 5.' },
      { input: 'source = "abcde", target = "aec"', output: '""', explanation: '"aec" cannot appear as a subsequence (e comes before c in source).' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['sliding-window', 'two-pointers', 'string'],
    hints: [
      'A subsequence must preserve order. For each starting position in source, find the earliest ending position that contains target as a subsequence.',
      'Move right pointer through source matching target characters in order. When fully matched, record the window and move the left pointer forward to find a shorter window.',
      'DP can precompute next[i][c] = the next index ≥ i where character c appears in source, enabling fast jumps.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Binary Garden',
    prompt: `A botanist manages a greenhouse with plants arranged in a row. Each plant is either thriving (1) or dormant (0). She can apply a revival treatment to at most \`k\` dormant plants to make them thrive. Find the length of the longest contiguous segment of thriving plants she can achieve.

Given binary array \`plants\` and integer \`k\`, return the max length of a contiguous 1-segment with at most \`k\` zeros flipped.`,
    constraints: `- 1 <= plants.length <= 10^5
- plants[i] is 0 or 1
- 0 <= k <= plants.length`,
    examples: [
      { input: 'plants = [1,1,1,0,0,0,1,1,1,1,0], k = 2', output: '6', explanation: 'Flip positions 9 and 10 (0-indexed): longest segment is 6.' },
      { input: 'plants = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3', output: '10' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['sliding-window', 'binary-array'],
    hints: [
      'Maintain a window where the count of zeros does not exceed k.',
      'Expand the right pointer; when zero count exceeds k, shrink from the left until the window is valid again.',
      'Track the maximum window length seen at each valid state.',
    ],
  },

  // ── DYNAMIC PROGRAMMING ───────────────────────────────────────
  {
    patternSlug: 'dynamic-programming',
    title: 'The Balloon Demolition Derby',
    prompt: `A demolition crew must burst balloons in a field. Each balloon has a value. When you burst balloon \`i\`, you collect \`vals[left] * vals[i] * vals[right]\` coins, where \`left\` and \`right\` are the nearest remaining balloons. Balloons at the boundary are padded with virtual value 1.

Given \`vals\`, return the maximum coins you can collect by bursting all balloons optimally.`,
    constraints: `- 1 <= vals.length <= 300
- 0 <= vals[i] <= 100`,
    examples: [
      { input: 'vals = [3,1,5,8]', output: '167', explanation: 'Burst 1→3→5→8: 3*1*5 + 3*5*8 + 1*3*8 + 1*8*1 = 167.' },
      { input: 'vals = [1,5]', output: '10' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dynamic-programming', 'interval-dp'],
    hints: [
      'Thinking about which balloon to burst first is hard. Instead, think about which balloon to burst last in a sub-range.',
      'Define dp[left][right] = max coins from bursting all balloons strictly between indices left and right (exclusive). Pad with 1s on each side.',
      'For each subrange, try every index k as the last balloon to burst. Gain is vals[left]*vals[k]*vals[right] + dp[left][k] + dp[k][right].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Envelope Strategist',
    prompt: `A smuggler packs envelopes inside envelopes. An envelope \`(w, h)\` can fit inside \`(W, H)\` only if \`w < W\` AND \`h < H\` (strict inequalities, no rotation). Find the maximum number of envelopes that can be nested (Russian-doll style).

Given a list of envelopes \`[w, h]\`, return the maximum nesting depth.`,
    constraints: `- 1 <= envelopes.length <= 10^5
- envelopes[i].length == 2
- 1 <= w_i, h_i <= 10^5`,
    examples: [
      { input: 'envelopes = [[5,4],[6,4],[6,7],[2,3]]', output: '3', explanation: 'Nest [2,3] → [5,4] → [6,7].' },
      { input: 'envelopes = [[1,1],[1,1],[1,1]]', output: '1' },
    ],
    difficulty: 'hard',
    estMin: 38,
    tags: ['dynamic-programming', 'binary-search', 'sorting', 'lis'],
    hints: [
      'Sort by width ascending. For equal widths, sort by height descending — this prevents using two envelopes of the same width.',
      'Once sorted, the problem reduces to finding the Longest Increasing Subsequence (LIS) on the heights alone.',
      'Use binary search (patience sorting) for O(n log n) LIS rather than the O(n²) DP.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Strange Printer',
    prompt: `A peculiar printer can only print sequences of the same character at a time. Each print operation selects a range \`[l, r]\` and fills it with one character (overwriting whatever was there). Find the minimum number of turns the printer needs to print a given string \`s\`.

Return the minimum number of print operations.`,
    constraints: `- 1 <= s.length <= 100
- s consists of lowercase English letters`,
    examples: [
      { input: 's = "aaabbb"', output: '2', explanation: 'Print "aaa" then "bbb".' },
      { input: 's = "aba"', output: '2', explanation: 'Print "aaa" then overwrite the middle with "b".' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dynamic-programming', 'interval-dp'],
    hints: [
      'Think interval DP: dp[i][j] = minimum turns to print s[i..j].',
      'Base case: a single character costs 1. If s[i] == s[j], then dp[i][j] = dp[i][j-1] because the last char was already handled.',
      'Otherwise, split at every index k: dp[i][j] = min over k of dp[i][k] + dp[k+1][j].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Profit Scheduler',
    prompt: `A freelance consultant receives \`n\` job offers, each with a start time, end time, and profit. She can only work one job at a time but wants to maximize total earnings. Jobs cannot overlap (a job starting exactly when another ends is allowed).

Given arrays \`startTime\`, \`endTime\`, \`profit\`, return the maximum profit she can earn.`,
    constraints: `- 1 <= n <= 5 * 10^4
- 1 <= startTime[i] < endTime[i] <= 10^9
- 1 <= profit[i] <= 10^4`,
    examples: [
      { input: 'startTime=[1,2,3,3], endTime=[3,4,5,6], profit=[50,10,40,70]', output: '120', explanation: 'Take jobs 0 and 3: profit 50+70=120.' },
      { input: 'startTime=[1,2,3], endTime=[3,4,6], profit=[20,20,100]', output: '150', explanation: 'Take all three.' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dynamic-programming', 'binary-search', 'sorting'],
    hints: [
      'Sort jobs by end time. For each job, you either skip it or take it (and must find the last non-overlapping job).',
      'dp[i] = max profit using the first i jobs (sorted by end time). For job i: dp[i] = max(dp[i-1], profit[i] + dp[j]) where j is the last job that ends ≤ startTime[i].',
      'Use binary search on end times to find j efficiently, giving O(n log n) overall.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Concatenation Foundry',
    prompt: `A word-forge master has a dictionary of words. She wants to know which words in the dictionary can be formed by concatenating two or more shorter words from the same dictionary (these are "compound words").

Given a list of strings \`words\`, return all compound words in any order.`,
    constraints: `- 1 <= words.length <= 10^4
- 2 <= words[i].length <= 30
- words[i] consists of lowercase English letters
- All strings in words are unique`,
    examples: [
      { input: 'words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]', output: '["catsdogcats","dogcatsdog","ratcatdogcat"]' },
      { input: 'words = ["cat","dog","catdog"]', output: '["catdog"]' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['dynamic-programming', 'trie', 'string'],
    hints: [
      'This is Word Break applied to every word, but the word must be formed by at least two pieces.',
      'Store all words in a set. For each word, run Word Break DP: dp[i] = true if s[0..i-1] can be formed from dictionary words. But the entire word itself must use at least 2 pieces.',
      'Exclude the word itself from its own dictionary lookup to force it to be split into proper sub-words.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Edit Distance Oracle',
    prompt: `Two ancient manuscripts differ subtly. A scribe must transform one into the other using the fewest operations: insert a character, delete a character, or replace a character (each costs 1).

Given strings \`manuscript\` and \`target\`, return the minimum edit distance (Levenshtein distance) between them.`,
    constraints: `- 0 <= manuscript.length, target.length <= 500
- manuscript and target consist of lowercase English letters`,
    examples: [
      { input: 'manuscript = "horse", target = "ros"', output: '3', explanation: 'horse→rorse (replace h→r), rorse→rose (delete r), rose→ros (delete e).' },
      { input: 'manuscript = "intention", target = "execution"', output: '5' },
    ],
    difficulty: 'medium',
    estMin: 28,
    tags: ['dynamic-programming', 'string', 'classic'],
    hints: [
      'Define dp[i][j] as the edit distance between the first i characters of manuscript and first j characters of target.',
      'If the current characters match, dp[i][j] = dp[i-1][j-1]. Otherwise, take the minimum of insert (dp[i][j-1]+1), delete (dp[i-1][j]+1), or replace (dp[i-1][j-1]+1).',
      'Fill the 2D table row by row. The answer is dp[m][n].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Palindrome Partitioner',
    prompt: `A cipher analyst wants to cut a message \`s\` into the fewest possible palindromic segments. Every segment in the cut must be a palindrome.

Return the minimum number of cuts needed to partition \`s\` into palindrome substrings.`,
    constraints: `- 1 <= s.length <= 2000
- s consists of lowercase English letters`,
    examples: [
      { input: 's = "aab"', output: '1', explanation: 'Cut into "aa" and "b" — 1 cut, both palindromes.' },
      { input: 's = "a"', output: '0', explanation: 'Already a palindrome.' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['dynamic-programming', 'string', 'palindrome'],
    hints: [
      'First precompute isPalin[i][j] for all substrings. Use expand-around-center or a 2D DP for this.',
      'Then dp[i] = min cuts for s[0..i]. For each i, try all j ≤ i where s[j..i] is a palindrome: dp[i] = min(dp[j-1] + 1).',
      'Base case: dp[-1] = -1 (so dp[j-1]+1 = 0 when j=0, meaning no cut needed).',
    ],
  },

  // ── BINARY SEARCH ─────────────────────────────────────────────
  {
    patternSlug: 'binary-search',
    title: 'The Capacity Planner',
    prompt: `A shipping company needs to deliver all packages in order within \`D\` days. Each package has a weight, and the ship's daily capacity determines how many packages fit per day (in order, no reordering). Find the minimum weight capacity of the ship.

Given \`weights\` and \`D\`, return the minimum capacity such that all packages can be shipped in D days.`,
    constraints: `- 1 <= D <= weights.length <= 5 * 10^4
- 1 <= weights[i] <= 500`,
    examples: [
      { input: 'weights = [1,2,3,4,5,6,7,8,9,10], D = 5', output: '15', explanation: 'Capacity 15 allows splits: [1-5],[6-7],[8],[9],[10].' },
      { input: 'weights = [3,2,2,4,1,4], D = 3', output: '6' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['binary-search', 'greedy'],
    hints: [
      'Binary search on the capacity value. What are the valid lower and upper bounds for capacity?',
      'Lower bound: max single weight (must fit at least one). Upper bound: sum of all weights (ship everything in one day).',
      'For a given capacity, greedily simulate: accumulate weights until adding the next would exceed capacity, then start a new day. Count days and compare to D.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Painter\'s Partition',
    prompt: `A mural must be painted by \`k\` painters working in parallel. The mural is divided into \`n\` sections, each taking \`time[i\`] hours. Each painter works on a contiguous segment. Minimize the time for the slowest painter — the project finishes when all painters are done.

Given \`time\` and \`k\`, return the minimum possible maximum workload.`,
    constraints: `- 1 <= k <= time.length <= 10^5
- 1 <= time[i] <= 10^4`,
    examples: [
      { input: 'time = [10,20,30,40], k = 2', output: '60', explanation: 'Painter 1: [10,20,30], Painter 2: [40]. Max is 60.' },
      { input: 'time = [100], k = 1', output: '100' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['binary-search', 'greedy'],
    hints: [
      'Binary search on the answer: the maximum time any painter spends.',
      'For a given limit, check greedily: assign sections to the current painter until the next section would exceed the limit, then assign a new painter.',
      'If the number of painters needed ≤ k, the limit is feasible. Narrow the search space accordingly.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Nth Root Extractor',
    prompt: `A mathematician needs to compute the integer n-th root of a large number \`x\` — the largest integer \`r\` such that \`r^n <= x\`.

Given \`x\` and \`n\`, return the integer n-th root of x (floor).`,
    constraints: `- 1 <= x <= 10^18
- 2 <= n <= 20`,
    examples: [
      { input: 'x = 8, n = 3', output: '2', explanation: '2^3 = 8 ≤ 8, 3^3 = 27 > 8.' },
      { input: 'x = 100, n = 2', output: '10' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['binary-search', 'math'],
    hints: [
      'The answer lies in [1, x]. Binary search for the largest r where r^n ≤ x.',
      'Be careful with overflow when computing r^n for large x and n. Use Python\'s arbitrary precision or guard with early exit when the partial product exceeds x.',
      'When mid^n == x, you have an exact root. Otherwise, the floor root is the last value where mid^n ≤ x.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Meeting Room Scheduler',
    prompt: `A booking system maintains two sorted arrays of available time slots: \`slotsA\` and \`slotsB\`, each as \`[start, end]\` intervals. Find the earliest time slot of duration exactly \`duration\` that appears in both arrays simultaneously.

Return the earliest slot \`[start, start+duration]\` available in both, or \`[]\` if none exists.`,
    constraints: `- 1 <= slotsA.length, slotsB.length <= 10^4
- slotsA[i].length == slotsB[j].length == 2
- slotsA and slotsB are sorted by start time
- 1 <= duration <= 10^6`,
    examples: [
      { input: 'slotsA=[[10,50],[60,120],[140,210]], slotsB=[[0,15],[60,70]], duration=8', output: '[60,68]', explanation: 'Overlap at [60,70] has 10 minutes; slot [60,68] works.' },
      { input: 'slotsA=[[10,50]], slotsB=[[0,15]], duration=10', output: '[]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['binary-search', 'two-pointers', 'intervals'],
    hints: [
      'Use two pointers, one for each sorted array. Compute the overlap between the current pair of slots.',
      'The overlap is [max(startA, startB), min(endA, endB)]. If its length ≥ duration, you have a valid slot.',
      'Advance the pointer whose slot ends first — it cannot contribute to future overlaps.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Spellbook Index',
    prompt: `A spellbook contains spells in a 2D matrix where each row is sorted ascending and the first element of each row is greater than the last element of the previous row. A wizard needs to determine if a target spell number exists in the book.

Given an \`m x n\` sorted matrix and \`target\`, return \`true\` if target exists.`,
    constraints: `- m == matrix.length, n == matrix[0].length
- 1 <= m, n <= 100
- -10^4 <= matrix[i][j], target <= 10^4`,
    examples: [
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', output: 'true' },
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['binary-search', 'matrix'],
    hints: [
      'The matrix can be treated as a single sorted array of m*n elements.',
      'Map a 1D index mid to 2D coordinates: row = mid // n, col = mid % n.',
      'Standard binary search on this virtual 1D array gives O(log(m*n)).',
    ],
  },

  // ── BFS ───────────────────────────────────────────────────────
  {
    patternSlug: 'bfs',
    title: 'The Labyrinth Surveyor',
    prompt: `A surveyor maps a dungeon grid where cells are either passable (0) or walls (1). She needs to find the shortest path from the top-left to the bottom-right corner, moving in 8 directions (including diagonals). Each step costs 1.

Return the shortest path length, or -1 if no path exists.`,
    constraints: `- 1 <= grid.length, grid[0].length <= 100
- grid[i][j] is 0 or 1
- Start is (0,0), end is (n-1,n-1)`,
    examples: [
      { input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]', output: '4', explanation: 'Path: (0,0)→(0,1)→(0,2)→(1,2)→(2,2), length 4 (counting cells).' },
      { input: 'grid = [[1,0,0],[1,1,0],[1,1,0]]', output: '-1', explanation: 'Start cell is blocked.' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['bfs', 'matrix', 'shortest-path'],
    hints: [
      'BFS guarantees shortest path on unweighted graphs. Each cell is a node; 8-directional adjacency defines edges.',
      'Use a visited set or mark cells to avoid revisiting. Enqueue (row, col, distance) tuples.',
      'If both start and end are 0, run BFS from (0,0). Return distance when you dequeue (n-1,n-1), or -1 if the queue empties.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Viral Cascade',
    prompt: `In a social network modeled as a tree, a rumor starts at node \`start\`. Each minute, the rumor spreads from every infected node to all its neighbors. Some nodes are immune (marked in \`immune\` set). Find the time at which all non-immune nodes become infected, or -1 if the network is disconnected after removing immune nodes.

Given \`n\` nodes, edges list, \`start\`, and \`immune\` set, return the time to infect all reachable non-immune nodes.`,
    constraints: `- 1 <= n <= 10^5
- edges.length == n - 1 (tree structure)
- 0 <= start < n
- immune is a subset of node indices`,
    examples: [
      { input: 'n=6, edges=[[0,1],[0,2],[1,3],[1,4],[2,5]], start=0, immune=[]', output: '2', explanation: 'Minute 1: infect 1,2. Minute 2: infect 3,4,5.' },
      { input: 'n=3, edges=[[0,1],[1,2]], start=0, immune=[1]', output: '-1', explanation: 'Node 1 is immune, blocking path to node 2.' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['bfs', 'tree', 'graph'],
    hints: [
      'Multi-source BFS: start from the source node and spread layer by layer, tracking time as the layer index.',
      'Skip immune nodes during BFS — they act as walls.',
      'If after BFS some non-immune node was never visited, return -1.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Knight\'s Gambit',
    prompt: `A chess knight stands on an infinite chessboard at position \`(0, 0)\`. Given a target position \`(x, y)\`, find the minimum number of moves for the knight to reach it. A knight moves in an L-shape: 2 squares in one direction and 1 in a perpendicular direction.

Return the minimum number of moves.`,
    constraints: `- -300 <= x, y <= 300`,
    examples: [
      { input: 'x = 2, y = 1', output: '1', explanation: 'One L-move from (0,0) reaches (2,1).' },
      { input: 'x = 5, y = 5', output: '4' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['bfs', 'graph'],
    hints: [
      'BFS on an implicit graph where each state is a (row, col) position and edges are the 8 knight moves.',
      'The board is infinite but the answer is bounded. Use symmetry: the knight only needs to explore the first quadrant (reflect negative coordinates).',
      'Track visited positions in a set. Enqueue starting position with distance 0; return distance when target is dequeued.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Alien Dictionary Builder',
    prompt: `A xenolinguist receives a sorted list of words from an alien language. The ordering of letters in this language is unknown. By analyzing adjacent words in the sorted list, she must reconstruct the alien alphabet order.

Given \`words\` (sorted by alien alphabet), return a string containing all unique letters in valid alien alphabet order. If the order is invalid (contradiction), return \`""\`.`,
    constraints: `- 1 <= words.length <= 100
- 1 <= words[i].length <= 100
- words[i] consists of lowercase English letters`,
    examples: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"', explanation: 'From adjacent pairs: t<f, w<e, r<t, e<r. Topological sort gives wertf.' },
      { input: 'words = ["z","x","z"]', output: '""', explanation: 'Contradiction: z appears before and after x.' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['bfs', 'topological-sort', 'graph', 'string'],
    hints: [
      'Compare adjacent words character by character to find ordering constraints. The first differing character gives c1 < c2.',
      'Build a directed graph of character dependencies. Topological sort gives the alien order.',
      'If the graph has a cycle, the ordering is contradictory. If a prefix word appears after its extension (e.g., "abc" then "ab"), the input is invalid.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Fire Escape Planner',
    prompt: `A building grid has cells: 0 (safe), 1 (fire), 2 (wall). Fire spreads to adjacent cells each minute. A person starts at the top-left and must reach the bottom-right. Can the person wait \`t\` minutes before starting and still escape?

Find the maximum \`t\` the person can wait (starting at time \`t\`) before moving and still reach the exit safely (ties are OK: arriving at exit the same minute fire does counts as safe).`,
    constraints: `- 1 <= grid.length, grid[0].length <= 300
- grid[i][j] is 0, 1, or 2`,
    examples: [
      { input: 'grid = [[0,2,0,0,0],[0,0,0,2,0],[0,0,0,0,0],[0,0,2,0,0],[0,0,0,0,0]]', output: '3' },
      { input: 'grid = [[0,0,0],[2,2,0],[0,0,0]]', output: '1000000000' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['bfs', 'binary-search'],
    hints: [
      'Binary search on the waiting time t. For each t, simulate: run multi-source BFS for fire t steps, then run person BFS checking the person never enters a fire cell.',
      'The person can arrive at the exit at the same time as fire (≤ is ok). Precompute fire arrival times for all cells.',
      'If the person\'s earliest arrival time at (r, c) ≤ fire arrival time at (r, c), the cell is safe to visit.',
    ],
  },

  // ── DFS ───────────────────────────────────────────────────────
  {
    patternSlug: 'dfs',
    title: 'The Circuit Validator',
    prompt: `An electronics engineer checks a circuit diagram modeled as a directed graph. She needs to determine if the circuit has any dependency loops (cycles) — a looped circuit would cause infinite feedback.

Given \`n\` components and a list of directed \`connections\` (dependencies), return \`true\` if the circuit is cycle-free (a valid DAG), \`false\` if a cycle exists.`,
    constraints: `- 1 <= n <= 2000
- 0 <= connections.length <= 5000
- connections[i] = [a, b] means a depends on b`,
    examples: [
      { input: 'n = 4, connections = [[0,1],[0,2],[1,3],[2,3]]', output: 'true', explanation: 'No cycles.' },
      { input: 'n = 3, connections = [[0,1],[1,2],[2,0]]', output: 'false', explanation: 'Cycle: 0→1→2→0.' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['dfs', 'graph', 'topological-sort'],
    hints: [
      'DFS with three states: unvisited, in-progress, done. A back edge (reaching an in-progress node) signals a cycle.',
      'For each unvisited node, launch a DFS marking nodes as "in-progress". If you revisit an in-progress node, a cycle exists.',
      'Mark nodes "done" when their DFS subtree is fully explored — done nodes are safe to revisit.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Cartographer\'s Flood',
    prompt: `An explorer charts a 2D terrain grid where each cell holds an elevation. Water can flow from a cell to an adjacent cell (4 directions) if the neighbor has equal or lower elevation. Cells on the left/top border drain to the Pacific; cells on the right/bottom border drain to the Atlantic.

Find all cells from which water can flow to both oceans. Return their coordinates.`,
    constraints: `- m == heights.length, n == heights[0].length
- 1 <= m, n <= 200
- 0 <= heights[i][j] <= 10^5`,
    examples: [
      { input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]' },
      { input: 'heights = [[1]]', output: '[[0,0]]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['dfs', 'bfs', 'matrix'],
    hints: [
      'Reverse the direction: instead of flowing down, flow UP from each ocean border. Find all cells reachable from Pacific borders and all reachable from Atlantic borders.',
      'DFS or BFS from all border cells simultaneously (multi-source). A cell is added to Pacific-reachable if a neighbor is Pacific-reachable and its height is ≤ current cell.',
      'Cells in the intersection of both reachable sets are the answer.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Network Delay Probe',
    prompt: `A network engineer sends a signal from node \`k\` in a directed weighted graph. The signal travels along edges with given latencies. Find the time for the signal to reach all nodes (the maximum shortest-path distance from k). If some nodes are unreachable, return -1.

Given \`n\` nodes, \`times\` as \`[u, v, w]\` edges, and source \`k\`, return the minimum time for all nodes to receive the signal.`,
    constraints: `- 1 <= k <= n <= 100
- 1 <= times.length <= 6000
- 1 <= u, v <= n, u != v
- 0 <= w <= 100`,
    examples: [
      { input: 'times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2', output: '2', explanation: 'All nodes reached: 1 at time 1, 3 at time 1, 4 at time 2.' },
      { input: 'times = [[1,2,1]], n = 2, k = 2', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['dfs', 'dijkstra', 'shortest-path', 'graph'],
    hints: [
      'This is a single-source shortest path problem on a weighted directed graph. Dijkstra\'s algorithm applies.',
      'Use a min-heap to always expand the node with the smallest known distance. Update neighbors when a shorter path is found.',
      'After Dijkstra, if any node has distance infinity, return -1. Otherwise return the maximum distance.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Treasure Map Decoder',
    prompt: `A pirate's treasure map is encoded as a grid of lowercase letters. A decoder must verify that a secret word \`cipher\` can be traced through the grid using adjacent cells (up/down/left/right) without reusing any cell. But this time, the cipher can wrap around rows (left and right edges connect, like a cylinder).

Return \`true\` if the cipher can be traced on the cylindrical grid, \`false\` otherwise.`,
    constraints: `- m == board.length, n == board[0].length
- 1 <= m, n <= 6
- 1 <= cipher.length <= 15
- board and cipher consist of lowercase English letters`,
    examples: [
      { input: 'board = [["a","b","c"],["d","e","f"],["g","h","i"]], cipher = "cfi"', output: 'true', explanation: 'c(0,2)→f(1,2)→i(2,2) with standard adjacency.' },
      { input: 'board = [["a","b","c"],["d","e","f"]], cipher = "cad"', output: 'true', explanation: 'Wrapping: c(0,2)→a(0,0) wraps, then a→d.' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['dfs', 'backtracking', 'matrix'],
    hints: [
      'Standard Word Search DFS applies, but left/right neighbors wrap: column (col-1+n)%n and (col+1)%n.',
      'Mark visited cells (e.g., by temporarily replacing with a sentinel) to prevent reuse within a path.',
      'Restore the cell after recursing back — this is the backtracking step.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Virus Immunizer',
    prompt: `A security system models a computer network as an undirected graph. A virus spreads each round: every infected node infects all its unprotected neighbors. You can quarantine (remove all edges of) exactly one node per round. Your goal is to minimize the final number of infected nodes.

Return the minimum number of nodes that will be infected if you play optimally.`,
    constraints: `- 1 <= n <= 300
- graph[i][j] is 0 or 1 (adjacency matrix)
- graph is symmetric, no self-loops`,
    examples: [
      { input: 'graph = [[1,1,0,0],[1,1,1,0],[0,1,1,0],[0,0,0,1]], initial = [0,1]', output: '3' },
      { input: 'graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]', output: '1' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dfs', 'graph', 'simulation'],
    hints: [
      'Each round, identify connected clusters of infected nodes. Each cluster will infect its unique uninfected neighbors.',
      'Quarantine the infected cluster that would infect the most new nodes this round. Remove it, then spread the rest.',
      'Simulate round by round: BFS/DFS to find clusters, compute their "threat" (unique uninfected neighbors), quarantine the biggest threat, then spread the remaining infections.',
    ],
  },

  // ── BACKTRACKING ──────────────────────────────────────────────
  {
    patternSlug: 'backtracking',
    title: 'The Sudoku Architect',
    prompt: `A puzzle designer needs to write a Sudoku solver. Fill the empty cells (marked '.') in a 9x9 board so that every row, column, and 3x3 box contains the digits 1-9 exactly once.

Modify the board in-place. The input always has a unique solution.`,
    constraints: `- board.length == 9, board[i].length == 9
- board[i][j] is a digit '1'-'9' or '.'`,
    examples: [
      { input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]', output: 'Solved board (unique solution)' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['backtracking', 'matrix', 'constraint-satisfaction'],
    hints: [
      'Iterate through cells. When you find an empty cell, try digits 1-9, check validity, and recurse.',
      'Validity check: the digit must not already appear in the same row, column, or 3x3 box. Precompute sets for each.',
      'If no digit is valid for a cell, return false (backtrack). If all cells are filled, return true.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Subset Summoner',
    prompt: `A wizard's tome contains \`n\` distinct spell power values. She wants to summon every possible subset of spells (including the empty set). Return all subsets of the given \`nums\` array.

The solution set must not contain duplicate subsets. Return them in any order.`,
    constraints: `- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10
- All elements of nums are unique`,
    examples: [
      { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' },
      { input: 'nums = [0]', output: '[[],[0]]' },
    ],
    difficulty: 'easy',
    estMin: 14,
    tags: ['backtracking', 'bit-manipulation', 'array'],
    hints: [
      'For each index, you have two choices: include the element or skip it.',
      'Backtrack: at each step, add the current element, recurse, then remove it and recurse again without it.',
      'Alternatively, for n elements there are 2^n subsets — iterate from 0 to 2^n-1 and use bits to decide inclusion.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Path Decoder',
    prompt: `A GPS trace decoder must find all unique paths through a directed graph from node "b" to node "t". The graph is given as an adjacency list. Each path is a list of node labels. The graph is acyclic.

Return all paths from source to target in any order.`,
    constraints: `- 2 <= n <= 15
- 0 <= edges.length <= n*(n-1)/2
- Node labels are strings
- Graph is a DAG`,
    examples: [
      { input: 'graph = {0:[1,2], 1:[3], 2:[3]}, source=0, target=3', output: '[[0,1,3],[0,2,3]]' },
      { input: 'graph = {0:[1,2,3], 1:[3], 2:[3]}, source=0, target=3', output: '[[0,1,3],[0,2,3],[0,3]]' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['backtracking', 'dfs', 'graph'],
    hints: [
      'DFS from the source, building the current path. When you reach the target, record the path.',
      'Since the graph is a DAG (no cycles), no visited set is needed — you won\'t loop forever.',
      'Backtrack: after exploring a neighbor, remove it from the path before trying the next neighbor.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Wordsmith\'s Grid',
    prompt: `A wordsmith has a dictionary and a blank crossword template (a 2D char grid of '#' for blocked and '.' for blank cells). Given a list of words to place, fill in all horizontal and vertical word slots. Each slot\'s length must match the word length exactly.

Return true if a valid filling exists, modifying the grid in place. Assume at most one valid solution.`,
    constraints: `- 2 <= board dimension <= 50
- 1 <= words.length <= 15
- words consist of uppercase English letters`,
    examples: [
      { input: 'board=[["#",".","#"],[".",".","."],[\"#\",\".\",\"#\"]], words=["abc","abcd"]', output: 'false', explanation: 'No valid filling.' },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['backtracking', 'constraint-satisfaction'],
    hints: [
      'Identify all word slots (horizontal and vertical runs of \'.\') and their positions.',
      'Use backtracking: try assigning each unused word to each unfilled slot where lengths match and existing letters are compatible.',
      'On a conflict (a letter already placed doesn\'t match the word), backtrack and try the next word.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Partition Maestro',
    prompt: `A composer has \`n\` notes and wants to partition them into \`k\` groups such that the maximum sum among all groups is minimized. This is the "fair workload" problem — distribute notes as evenly as possible.

Given integer array \`notes\` and integer \`k\`, return the minimized maximum group sum.`,
    constraints: `- 1 <= k <= notes.length <= 16
- 0 <= notes[i] <= 10^4`,
    examples: [
      { input: 'notes = [1,2,3,4,5,6,7], k = 3', output: '10', explanation: 'Partition into [1,6,3],[2,7],[4,5] gives max sum 10.' },
      { input: 'notes = [2,2,2,2,2], k = 4', output: '4' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['backtracking', 'dynamic-programming', 'bit-mask'],
    hints: [
      'Try bitmask DP: dp[mask] = the minimum possible maximum sum when the elements in mask have been assigned to filled groups.',
      'Alternatively, use backtracking: try placing each note into one of k buckets. Prune when the current bucket sum already exceeds the best known answer.',
      'Key pruning: if two buckets have the same current sum, skip the duplicates (symmetry breaking).',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Expression Builder',
    prompt: `A numerologist writes digits on a chalkboard and inserts +, -, or * operators (or no operator, for concatenation) between them to create expressions. She wants every expression that evaluates to a target value.

Given a string of digits \`digits\` and a target integer, return all expressions formed by inserting +, -, and * between digits that evaluate to the target.`,
    constraints: `- 1 <= digits.length <= 10
- digits consists of digits 0-9
- -2^31 <= target <= 2^31 - 1`,
    examples: [
      { input: 'digits = "123", target = 6', output: '["1+2+3","1*2*3"]' },
      { input: 'digits = "232", target = 8', output: '["2*3+2","2+3*2"]' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['backtracking', 'string', 'math'],
    hints: [
      'At each position, choose a number (1 or more digits) and then an operator to append. Recurse on the remainder.',
      'Track the current running value and the last operand separately to handle multiplication correctly (current - lastNum + lastNum * nextNum).',
      'Watch out for leading zeros: "05" is not a valid number — skip multi-digit numbers starting with 0.',
    ],
  },

  // ── GREEDY ────────────────────────────────────────────────────
  {
    patternSlug: 'greedy',
    title: 'The Task Queue Optimizer',
    prompt: `A server processes tasks where each task has a type label. It must insert a cooldown of at least \`n\` idle slots between two tasks of the same type. Given a list of tasks and cooldown \`n\`, find the minimum total time (including idle slots) to finish all tasks.`,
    constraints: `- 1 <= tasks.length <= 10^4
- tasks[i] is an uppercase English letter
- 0 <= n <= 100`,
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: '8', explanation: 'A→B→idle→A→B→idle→A→B.' },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: '6' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['greedy', 'heap', 'math'],
    hints: [
      'The most frequent task determines the minimum time. If the max frequency is f, you need at least (f-1)*(n+1) + 1 slots.',
      'If there are multiple tasks with the max frequency, add the count of such tasks to the formula.',
      'The answer is max(tasks.length, (maxFreq-1)*(n+1) + countMaxFreq).',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Candy Distributor',
    prompt: `A schoolteacher lines up \`n\` students and rates each one. She must give each student at least 1 candy. Students with a higher rating than their immediate neighbors must receive more candy. Find the minimum total candies needed.`,
    constraints: `- 1 <= ratings.length <= 2 * 10^4
- 0 <= ratings[i] <= 2 * 10^4`,
    examples: [
      { input: 'ratings = [1,0,2]', output: '5', explanation: 'Give [2,1,2] candies.' },
      { input: 'ratings = [1,2,2]', output: '4', explanation: 'Give [1,2,1] candies.' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['greedy', 'array'],
    hints: [
      'Make two passes: left-to-right and right-to-left.',
      'Left pass: if ratings[i] > ratings[i-1], give candies[i] = candies[i-1]+1, else candies[i]=1.',
      'Right pass: if ratings[i] > ratings[i+1], candies[i] = max(candies[i], candies[i+1]+1). Sum the array.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Interval Merger',
    prompt: `A calendar app receives a list of meeting time intervals. Before displaying them, the app merges all overlapping meetings into a single block. Return the merged list of non-overlapping intervals in sorted order.`,
    constraints: `- 1 <= intervals.length <= 10^4
- intervals[i].length == 2
- 0 <= start_i <= end_i <= 10^4`,
    examples: [
      { input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]', explanation: 'Intervals [1,3] and [2,6] overlap → merged as [1,6].' },
      { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['greedy', 'sorting', 'intervals'],
    hints: [
      'Sort intervals by start time.',
      'Iterate through sorted intervals. If the current interval\'s start is ≤ previous end, merge by extending end to max(prev.end, cur.end).',
      'Otherwise, push the current interval as a new entry in the result.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Arrow Shooter',
    prompt: `Balloons are placed on a wall, each spanning a horizontal range \`[start, end]\`. An archer shoots vertical arrows; each arrow bursts all balloons whose range contains the arrow's x-coordinate. Find the minimum number of arrows needed to burst all balloons.`,
    constraints: `- 1 <= points.length <= 10^4
- -2^31 <= x_start <= x_end <= 2^31 - 1`,
    examples: [
      { input: 'points = [[10,16],[2,8],[1,6],[7,12]]', output: '2', explanation: 'Arrow at x=6 bursts [2,8],[1,6]. Arrow at x=11 bursts [10,16],[7,12].' },
      { input: 'points = [[1,2],[3,4],[5,6]]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'intervals', 'sorting'],
    hints: [
      'Sort balloons by end position.',
      'Shoot an arrow at the end of the first balloon. This arrow bursts all balloons that start ≤ that end position.',
      'Skip all burst balloons and repeat from the next un-burst balloon.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Relay Baton',
    prompt: `Runners pass batons in a relay. Each runner \`i\` starts at position \`pos[i]\` and runs in one direction — they can jump forward up to \`reach[i]\` steps. The goal is to reach position \`N\` from position 0 in the minimum number of jumps.

This is the classic "Jump Game" with the twist that you must return the minimum jumps, not just feasibility.`,
    constraints: `- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= 1000`,
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: '2', explanation: 'Jump from index 0 to 1, then to end.' },
      { input: 'nums = [2,3,0,1,4]', output: '2' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['greedy', 'array'],
    hints: [
      'Track the current jump boundary and the farthest reachable index within the current jump.',
      'When the pointer reaches the current boundary, increment the jump count and update the boundary to the farthest reachable.',
      'No need to enumerate every possible jump — just track the maximum reach at each step.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Lemonade Vendor',
    prompt: `A lemonade vendor sells cups at exactly $5. Customers arrive in line, each paying with a $5, $10, or $20 bill. The vendor must provide exact change. Starting with no cash, determine if the vendor can serve all customers.

Given an array \`bills\`, return \`true\` if exact change can always be given; \`false\` otherwise.`,
    constraints: `- 1 <= bills.length <= 10^5
- bills[i] is 5, 10, or 20`,
    examples: [
      { input: 'bills = [5,5,5,10,20]', output: 'true' },
      { input: 'bills = [5,5,10,10,20]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['greedy', 'simulation'],
    hints: [
      'Track counts of $5 and $10 bills (you never need $20 for change since $20-$5=$15=10+5 or 5+5+5).',
      'For a $10 bill: give one $5. For a $20 bill: prefer giving one $10 + one $5 (saves $5 bills); if no $10, give three $5s.',
      'If you can\'t make change at any point, return false.',
    ],
  },

  // ── HEAP ──────────────────────────────────────────────────────
  {
    patternSlug: 'heap',
    title: 'The K-th Dimension Gate',
    prompt: `A portal network has gates at coordinates given as arrays. Find the \`k\`-th closest gate to the origin \`(0, 0)\` using Euclidean distance (you don't need the exact square root — compare squared distances).

Given a 2D array \`points\` and integer \`k\`, return the \`k\` closest points to the origin.`,
    constraints: `- 1 <= k <= points.length <= 10^4
- -10^4 <= points[i][0], points[i][1] <= 10^4`,
    examples: [
      { input: 'points = [[1,3],[-2,2]], k = 1', output: '[[-2,2]]', explanation: 'Distances: sqrt(10) vs sqrt(8). (-2,2) is closer.' },
      { input: 'points = [[3,3],[5,-1],[-2,4]], k = 2', output: '[[3,3],[-2,4]]' },
    ],
    difficulty: 'easy',
    estMin: 14,
    tags: ['heap', 'sorting', 'math'],
    hints: [
      'You don\'t need to sort all points — just find the k smallest distances.',
      'Use a max-heap of size k. For each point, push it. If the heap exceeds size k, pop the farthest.',
      'Alternatively, sort by squared distance in O(n log n) and return the first k elements.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Bandwidth Allocator',
    prompt: `A network engineer manages \`n\` servers, each with a queue of requests. Each round, the server with the most pending requests must handle one request. After processing, if it still has requests, it returns to the pool. Find the server that processes the most requests after all requests are handled.

Given \`servers\` (list of request counts), return the index of the busiest server. Break ties by smallest index.`,
    constraints: `- 1 <= servers.length <= 10^5
- 1 <= servers[i] <= 10^8`,
    examples: [
      { input: 'servers = [3,3,3]', output: '0', explanation: 'All tied, return smallest index.' },
      { input: 'servers = [5,2,3]', output: '0', explanation: 'Server 0 processes 5 requests — most.' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['heap', 'simulation'],
    hints: [
      'This is equivalent to finding the index with the maximum value (breaking ties by smallest index).',
      'A linear scan works. Track max value and the first index where it occurs.',
      'For the heap version: build a max-heap of (count, -index) tuples so the largest count with smallest index surfaces first.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Ugly Number Factory',
    prompt: `An ugly number is a positive integer whose only prime factors are 2, 3, and 5. The sequence: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, ... Find the \`n\`-th ugly number.`,
    constraints: `- 1 <= n <= 1690`,
    examples: [
      { input: 'n = 10', output: '12', explanation: 'The first 10 ugly numbers are 1,2,3,4,5,6,8,9,10,12.' },
      { input: 'n = 1', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['heap', 'dynamic-programming', 'math'],
    hints: [
      'Use a min-heap starting with 1. Each time you pop the minimum, push its multiples by 2, 3, and 5.',
      'Use a set to avoid pushing duplicates (e.g., 2*3 and 3*2 both produce 6).',
      'After n pops, the last popped value is the n-th ugly number.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Hospital Triage',
    prompt: `A hospital emergency room receives patients with priority scores. The room processes the patient with the highest priority first. If two patients have the same priority, the one who arrived earlier goes first. Simulate the queue and return the processing order.

Implement a priority queue supporting: \`enqueue(patient, priority)\` and \`dequeue()\` returning the highest-priority earliest-arrival patient.`,
    constraints: `- 1 <= operations <= 10^5
- 1 <= priority <= 10^4
- Patient IDs are unique strings`,
    examples: [
      { input: 'ops=[["enqueue","alice",3],["enqueue","bob",5],["enqueue","carol",5],["dequeue"],["dequeue"]]', output: '["bob","carol"]', explanation: 'Bob and Carol tie at priority 5; Bob arrived first.' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['heap', 'design', 'priority-queue'],
    hints: [
      'Use a min-heap with tuples (-priority, arrival_time, patient_id) so the highest priority and earliest arrival surfaces first.',
      'Maintain an arrival counter that increments with each enqueue operation.',
      'Dequeue pops from the heap and returns the patient_id.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Frequency Compressor',
    prompt: `A data compressor sorts characters by frequency descending, then alphabetically for ties, and outputs them in that order. Given a string \`data\`, return the characters sorted by frequency (highest first), then alphabetically for ties, repeated as many times as they appear.`,
    constraints: `- 1 <= data.length <= 5 * 10^5
- data consists of uppercase/lowercase letters and digits`,
    examples: [
      { input: 'data = "tree"', output: '"eert"', explanation: 'e appears twice, r and t once. e first, then alphabetical among r, t.' },
      { input: 'data = "cccaaa"', output: '"aaaccc"', explanation: 'Both appear 3 times; a < c alphabetically.' },
    ],
    difficulty: 'easy',
    estMin: 14,
    tags: ['heap', 'hash-map', 'sorting'],
    hints: [
      'Count character frequencies with a hash map.',
      'Sort characters by (-frequency, character) — this puts highest frequency first and breaks ties alphabetically.',
      'Reconstruct the string by repeating each character its frequency times.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Stone Crusher',
    prompt: `A stone quarry has a pile of rocks with weights given in array \`stones\`. Each turn, take the two heaviest stones and smash them: if equal, both are destroyed; if not, the heavier one survives with weight reduced by the lighter one's weight. Repeat until at most one stone remains.

Return the weight of the last remaining stone, or 0 if none remain.`,
    constraints: `- 1 <= stones.length <= 30
- 1 <= stones[i] <= 1000`,
    examples: [
      { input: 'stones = [2,7,4,1,8,1]', output: '1', explanation: 'Smash 7&8→1. Smash 4&1→3. Smash 2&3→1. Smash 1&1→0. Last: 1.' },
      { input: 'stones = [1]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['heap', 'simulation'],
    hints: [
      'A max-heap gives you the two heaviest stones in O(log n) time each round.',
      'Pop twice, compute the difference, and push back if non-zero.',
      'Repeat until the heap has 0 or 1 elements.',
    ],
  },

  // ── HASH-MAP ──────────────────────────────────────────────────
  {
    patternSlug: 'hash-map',
    title: 'The Ransom Note Forger',
    prompt: `A thriller writer needs to verify that a ransom note can be assembled from letters cut out of a magazine. Each letter from the magazine can only be used once.

Given strings \`note\` and \`magazine\`, return \`true\` if the note can be constructed from the magazine's letters.`,
    constraints: `- 1 <= note.length, magazine.length <= 10^5
- note and magazine consist of lowercase English letters`,
    examples: [
      { input: 'note = "aa", magazine = "aab"', output: 'true' },
      { input: 'note = "aa", magazine = "ab"', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['hash-map', 'string', 'counting'],
    hints: [
      'Count the frequency of each letter in the magazine.',
      'For each letter in the note, check if the magazine has enough of that letter (decrement the count).',
      'If any letter\'s count goes negative, return false.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Isomorphic Translator',
    prompt: `A linguist studies isomorphic languages: two strings \`s\` and \`t\` are isomorphic if the characters in \`s\` can be replaced to get \`t\`, preserving a consistent one-to-one mapping (no two characters map to the same character, and vice versa).

Given \`s\` and \`t\`, return \`true\` if they are isomorphic.`,
    constraints: `- 1 <= s.length <= 5 * 10^4
- t.length == s.length
- s and t consist of valid ASCII characters`,
    examples: [
      { input: 's = "egg", t = "add"', output: 'true', explanation: 'e→a, g→d.' },
      { input: 's = "foo", t = "bar"', output: 'false', explanation: 'o maps to both a and r.' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['hash-map', 'string'],
    hints: [
      'Use two maps: one from s-char to t-char and one from t-char to s-char.',
      'For each position, check both mappings are consistent. If s[i] is already mapped but not to t[i], return false.',
      'Also check the reverse: if t[i] is already mapped from a different s character, return false.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Frequency Oracle',
    prompt: `A census analyst receives a stream of integers and needs to answer: how many values have appeared exactly \`k\` times so far? Design a data structure that supports insertions and frequency-count queries efficiently.

Given a list of operations: \`insert(val)\` and \`query(k)\` (return count of values with exactly k occurrences), process them and return query results.`,
    constraints: `- 1 <= operations <= 2 * 10^5
- -10^9 <= val <= 10^9
- 1 <= k <= 10^5`,
    examples: [
      { input: 'ops = [["insert",1],["insert",1],["insert",2],["query",1],["query",2]]', output: '[1,1]', explanation: '1 appears twice, 2 appears once. Query k=1: one value (2). Query k=2: one value (1).' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['hash-map', 'design', 'counting'],
    hints: [
      'Maintain two maps: count[val] = how many times val was inserted, and freq[k] = how many values have exactly k occurrences.',
      'On insert(val): decrement freq[count[val]], increment count[val], increment freq[count[val]].',
      'On query(k): return freq[k].',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Longest Chain',
    prompt: `A genealogist has a set of integer "years". A chain is a sequence of consecutive integers (each exactly 1 apart). Find the length of the longest chain of consecutive integers present in the set.

Given an unsorted array \`years\`, return the length of the longest consecutive sequence. Must run in O(n).`,
    constraints: `- 0 <= years.length <= 10^5
- -10^9 <= years[i] <= 10^9`,
    examples: [
      { input: 'years = [100,4,200,1,3,2]', output: '4', explanation: 'Sequence 1,2,3,4 has length 4.' },
      { input: 'years = [0,3,7,2,5,8,4,6,0,1]', output: '9' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['hash-map', 'array'],
    hints: [
      'Store all values in a hash set for O(1) lookup.',
      'A sequence starts only when num-1 is NOT in the set. From there, count how far the streak extends.',
      'This avoids re-checking elements already counted in a previous streak.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Word Pattern Decoder',
    prompt: `A cryptographer encodes messages using a pattern of single letters (like "abba") that maps to words in a sentence. Given pattern \`p\` and string \`s\` (space-separated words), determine if \`s\` follows the pattern — each letter maps bijectively to one word.

Return \`true\` if the mapping is consistent.`,
    constraints: `- 1 <= p.length <= 300
- s contains exactly p.length words
- p consists of lowercase letters
- s consists of lowercase words`,
    examples: [
      { input: 'p = "abba", s = "dog cat cat dog"', output: 'true' },
      { input: 'p = "abba", s = "dog cat cat fish"', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['hash-map', 'string'],
    hints: [
      'Split s into words. Use two maps: char→word and word→char.',
      'For each (char, word) pair, verify both maps are consistent.',
      'If char already maps to a different word, or word already maps to a different char, return false.',
    ],
  },

  // ── MONOTONIC STACK ───────────────────────────────────────────
  {
    patternSlug: 'monotonic-stack',
    title: 'The Skyline Architect',
    prompt: `A city planner receives building outlines as \`[left, right, height]\` triplets and wants to draw the city skyline — the outline formed by all buildings viewed from a distance. Return the skyline as a list of \`[x, height]\` points where the height changes.`,
    constraints: `- 0 <= buildings.length <= 10^4
- 0 <= left_i < right_i <= 2^31 - 1
- 1 <= height_i <= 2^31 - 1
- buildings are sorted by left coordinate`,
    examples: [
      { input: 'buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]', output: '[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['monotonic-stack', 'heap', 'divide-and-conquer', 'sweep-line'],
    hints: [
      'Use a sweep line over all x-coordinates (building starts and ends). At each x, track active building heights.',
      'Maintain a max-heap of (height, end) for active buildings. At each event point, add starting buildings and remove expired ones.',
      'When the max height changes, record a skyline point.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Asteroid Collision Analyst',
    prompt: `Asteroids move in a 1D line. Each asteroid has a size and direction: positive = right, negative = left. When two asteroids meet (one going right, one going left), the smaller explodes; if equal, both explode. Asteroids moving the same direction never collide.

Given integer array \`asteroids\`, return the state after all collisions.`,
    constraints: `- 2 <= asteroids.length <= 10^4
- -1000 <= asteroids[i] <= 1000
- asteroids[i] != 0`,
    examples: [
      { input: 'asteroids = [5,10,-5]', output: '[5,10]', explanation: '10 and -5 collide; 10 survives.' },
      { input: 'asteroids = [8,-8]', output: '[]', explanation: 'Both equal, both explode.' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['monotonic-stack', 'simulation', 'array'],
    hints: [
      'Use a stack. Process each asteroid left to right.',
      'If the stack top is positive and the current asteroid is negative, they collide. The larger (by absolute value) survives.',
      'Keep colliding until no collision can occur, then push the survivor (if any) onto the stack.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Stock Price Span',
    prompt: `A financial analyst tracks daily stock prices. For each day, the "span" is the number of consecutive days (up to and including today) where the price was ≤ today's price. Implement a streaming span calculator.

Implement \`StockSpanner\` with method \`next(price)\` returning today's span.`,
    constraints: `- 1 <= price <= 10^5
- At most 10^4 calls to next()`,
    examples: [
      { input: 'prices = [100,80,60,70,60,75,85]', output: '[1,1,1,2,1,4,6]', explanation: 'Day 6 (price 75): spans days 4,5,6 (60≤75,60≤75,75≤75) = 3. Wait: also check 70≤75 giving 4.' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['monotonic-stack', 'design', 'stock'],
    hints: [
      'Maintain a stack of (price, span) pairs.',
      'When a new price arrives, pop all stack entries where price ≤ current price, accumulating their spans.',
      'Push (currentPrice, accumulatedSpan+1) onto the stack and return the span.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Lava Trap Calculator',
    prompt: `A volcanic island has a terrain profile \`heights\` (like a histogram). Lava fills the valleys between peaks. Calculate the total lava volume trapped between terrain columns.

This is Trapping Lava Water: given \`heights\`, return the total units of lava that can be trapped.`,
    constraints: `- 1 <= heights.length <= 2 * 10^4
- 0 <= heights[i] <= 10^5`,
    examples: [
      { input: 'heights = [4,2,0,3,2,5]', output: '9' },
      { input: 'heights = [1,0,1]', output: '1' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['monotonic-stack', 'two-pointers', 'array'],
    hints: [
      'For each column, the trapped water equals min(maxLeft, maxRight) - height[i].',
      'Monotonic stack approach: maintain a stack of indices. When a taller bar is found, it can trap water with bars to its left.',
      'Or use two pointers: maintain maxLeft and maxRight, advance the pointer on the side with the smaller max.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Receipt Compressor',
    prompt: `A bookkeeper has a list of daily expenses. She wants to find, for each day, the nearest previous day where the expense was strictly greater (the "last expensive day"). Return an array where result[i] is the index of the nearest previous greater expense, or -1 if none.`,
    constraints: `- 1 <= expenses.length <= 10^5
- 1 <= expenses[i] <= 10^5`,
    examples: [
      { input: 'expenses = [2,5,3,6,1]', output: '[-1,-1,1,-1,3]', explanation: 'For index 2 (val 3): previous greater is index 1 (val 5).' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'Use a monotonic decreasing stack storing indices.',
      'For each element, pop from the stack while the top is ≤ current element. The remaining top (if any) is the previous greater element.',
      'Push the current index onto the stack after recording the answer.',
    ],
  },

  // ── UNION-FIND ────────────────────────────────────────────────
  {
    patternSlug: 'union-find',
    title: 'The Network Connector',
    prompt: `A city is building a network of roads. Given \`n\` cities (0-indexed) and a list of proposed roads \`connections\` (each with a cost), find the minimum cost to connect all cities. If it's impossible, return -1.

This is Minimum Spanning Tree (Kruskal's algorithm).`,
    constraints: `- 1 <= n <= 10^4
- 1 <= connections.length <= 10^4
- connections[i] = [city1, city2, cost]
- 1 <= cost <= 10^4`,
    examples: [
      { input: 'n = 3, connections = [[0,1,5],[1,2,3],[0,2,2]]', output: '5', explanation: 'Use edges (1,2,3) and (0,2,2) for total cost 5.' },
      { input: 'n = 4, connections = [[0,1,3],[3,2,1]]', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['union-find', 'greedy', 'minimum-spanning-tree'],
    hints: [
      'Sort edges by cost ascending. Use Union-Find to track connected components.',
      'Add the cheapest edge that connects two different components (doesn\'t create a cycle). Stop when all cities are connected.',
      'If after processing all edges fewer than n-1 edges were added, the graph is disconnected — return -1.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Equation Verifier',
    prompt: `A constraint system has equations of the form \`"a==b"\` and \`"a!=b"\` where a and b are single lowercase letters. Determine if all equations can be satisfied simultaneously.

Given an array of equation strings, return \`true\` if the system is consistent.`,
    constraints: `- 1 <= equations.length <= 500
- equations[i] is either "a==b" or "a!=b"
- a, b are lowercase English letters`,
    examples: [
      { input: 'equations = ["a==b","b!=a"]', output: 'false', explanation: 'a==b and b!=a contradict.' },
      { input: 'equations = ["b==a","a==b"]', output: 'true' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['union-find', 'graph'],
    hints: [
      'First process all "==" equations: union the two variables.',
      'Then process all "!=" equations: if the two variables are in the same component, return false.',
      'Union-Find on 26 letters is trivially small and fast.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Island Merger',
    prompt: `A terraformer builds islands on an ocean grid by setting cells to land (1) one at a time. After each land cell is added, report the total number of distinct islands.

Given an \`m x n\` grid (initially all water) and a list of \`positions\` where land is added sequentially, return an array of island counts after each addition.`,
    constraints: `- 1 <= m, n <= 10^3
- 1 <= positions.length <= 10^4
- positions[i] = [r, c]`,
    examples: [
      { input: 'm=3, n=3, positions=[[0,0],[0,1],[1,2],[2,1]]', output: '[1,1,2,3]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['union-find', 'matrix', 'dynamic'],
    hints: [
      'Use Union-Find on grid cells (flatten 2D to 1D index). Start with 0 islands.',
      'When adding a cell: if it\'s already land, count doesn\'t change. Otherwise increment count, then union with any adjacent land cells (decrementing count for each successful union).',
      'Path compression and union by rank give near O(1) per operation.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Friend Circle Auditor',
    prompt: `A social network audit reveals friendship logs: each log \`[timestamp, user1, user2]\` means user1 and user2 became friends at that time. Friendships are transitive. Find the earliest timestamp at which all users are connected in one group.

Given \`n\` users and sorted \`logs\`, return the earliest timestamp when all are in one component, or -1 if never.`,
    constraints: `- 2 <= n <= 100
- 1 <= logs.length <= 10^4
- logs are sorted by timestamp ascending
- 0 <= user1, user2 < n`,
    examples: [
      { input: 'n=3, logs=[[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]]', output: '20190301' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['union-find', 'graph'],
    hints: [
      'Process logs in order. Union the two users in each log.',
      'After each union, check if the number of connected components equals 1.',
      'Track component count: start at n, decrement by 1 for each successful union (merging two different components).',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Galaxy Cluster Map',
    prompt: `An astronomer has \`n\` stars and \`m\` observations. Each observation \`[a, b]\` means star a and star b are in the same galaxy cluster. Find the size of the largest cluster.

Given \`n\` and \`observations\`, return the size of the largest connected component.`,
    constraints: `- 1 <= n <= 10^5
- 0 <= observations.length <= 10^5
- 0 <= a, b < n`,
    examples: [
      { input: 'n=5, observations=[[0,1],[1,2],[3,4]]', output: '3', explanation: '{0,1,2} has size 3.' },
      { input: 'n=3, observations=[]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 14,
    tags: ['union-find', 'graph'],
    hints: [
      'Union-Find on n nodes. For each observation, union the two stars.',
      'Track the size of each component (union by size). After all unions, return the maximum size.',
      'Initialize each node as its own component with size 1.',
    ],
  },

  // ── TRIE ──────────────────────────────────────────────────────
  {
    patternSlug: 'trie',
    title: 'The Autocomplete Engine',
    prompt: `A search engine needs to implement autocomplete: given a list of words and a query prefix, return the top 3 matching words (sorted lexicographically). If fewer than 3 match, return all matches. Words are matched if they start with the prefix.

Given \`products\` (sorted list) and a \`searchWord\`, return a list of lists: for each prefix of searchWord (from length 1 to full length), the top 3 matching products.`,
    constraints: `- 1 <= products.length <= 1000
- 1 <= products[i].length <= 3000
- searchWord.length <= 1000
- All strings consist of lowercase English letters`,
    examples: [
      { input: 'products=["mobile","mouse","moneypot","monitor","mousepad"], searchWord="mouse"', output: '[["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['trie', 'binary-search', 'string'],
    hints: [
      'Sort products lexicographically first. For each prefix, binary search for the insertion point.',
      'From the insertion point, take up to 3 products that still match the prefix.',
      'A trie approach: insert all words, then walk the trie following prefix characters — at each node, DFS to collect up to 3 lexicographically smallest words.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Cipher Prefix Vault',
    prompt: `A security system encodes integers as binary strings and stores them in a vault. For each newly added number, find the maximum XOR it can form with any number already in the vault.

Given an integer array \`nums\`, for each index \`i\` return the maximum XOR of \`nums[i]\` with any element in \`nums[0..i-1]\`. The first element returns 0.`,
    constraints: `- 1 <= nums.length <= 2 * 10^5
- 0 <= nums[i] <= 2^31 - 1`,
    examples: [
      { input: 'nums = [3,10,5,25,2,8]', output: '[0,9,7,28,13,10]', explanation: 'Maximum XOR pairs computed greedily via trie.' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['trie', 'bit-manipulation'],
    hints: [
      'Insert numbers as 32-bit binary strings into a trie. For each new number, greedily traverse the trie choosing the opposite bit to maximize XOR.',
      'At each bit position, try to go to the branch whose bit differs from the current number\'s bit (that XOR bit becomes 1).',
      'If the opposite branch doesn\'t exist, take the matching branch (XOR bit = 0) and continue.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Shorthand Dictionary',
    prompt: `A shorthand system allows users to look up words by entering any unique prefix. Given a dictionary of words, for each word return the shortest prefix that uniquely identifies it (no other word shares that prefix). If the word itself is the shortest unique prefix, return the word.`,
    constraints: `- 1 <= words.length <= 1000
- 1 <= words[i].length <= 100
- All words are lowercase and unique`,
    examples: [
      { input: 'words = ["zebra","dog","duck","dove"]', output: '["z","dog","du","dov"]', explanation: '"d" is shared by dog/duck/dove; "do" by dog/dove; "dog" is unique.' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['trie', 'string'],
    hints: [
      'Build a trie of all words. At each node, track the count of words passing through it.',
      'For each word, walk the trie. The shortest unique prefix ends at the first node with count == 1.',
      'If no such node exists before the word ends, the word itself is the shortest unique prefix.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Spell Checker',
    prompt: `A magical spell checker supports two operations: \`addWord(word)\` and \`isSpelledCorrectly(pattern)\`. In a pattern, the character '?' matches any single letter. Return \`true\` if any word in the dictionary matches the pattern.

Implement \`SpellChecker\` with these two methods.`,
    constraints: `- 1 <= word.length, pattern.length <= 25
- word and pattern consist of lowercase English letters and '?'
- At most 10^4 calls total`,
    examples: [
      { input: 'ops=[["addWord","bad"],["addWord","dad"],["isSpelledCorrectly","?ad"],["isSpelledCorrectly","b.."],]', output: '[null,null,true,false]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['trie', 'backtracking', 'string'],
    hints: [
      'Build a trie from added words. For search with "?", at the wildcard node, try all 26 children recursively.',
      'Non-wildcard characters follow the standard trie path. Wildcards branch into DFS across all children.',
      'A match is found when both the pattern and the trie path are exhausted simultaneously at an end-of-word node.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Stream Watcher',
    prompt: `A network monitor watches a stream of characters and checks after each new character if any of a set of registered keywords appears as a suffix of the stream so far.

Implement \`StreamMonitor\` with \`addWord(word)\` and \`query(letter)\` — append letter to the stream and return \`true\` if any registered word is a suffix of the current stream.`,
    constraints: `- 1 <= word.length <= 2000
- At most 2000 words are added
- At most 4 * 10^4 calls to query()
- word and letter consist of lowercase English letters`,
    examples: [
      { input: 'ops=[["addWord","cd"],["query","a"],["query","a"],["query","a"],["query","c"],["query","d"]]', output: '[null,false,false,false,false,true]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['trie', 'string', 'streaming'],
    hints: [
      'Build a trie of reversed words (to match suffixes). Keep a set of "active" trie nodes.',
      'On each query(letter): advance each active node by the new letter. Also start a new traversal from the root with this letter.',
      'If any active node is a terminal (end of a reversed word), the stream has that word as a suffix.',
    ],
  },

  // ── FAST-SLOW POINTERS ────────────────────────────────────────
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Rho Factorizer',
    prompt: `Pollard's rho algorithm uses a cycle-detection technique to find non-trivial factors of large integers. At its core is Floyd's cycle detection applied to a pseudo-random sequence. Given an integer \`n\`, simulate the sequence \`x_{i+1} = (x_i^2 + c) mod n\` and find the cycle length.

Given \`n\` and \`c\`, return the length of the cycle in the sequence starting at \`x_0 = 2\`.`,
    constraints: `- 2 <= n <= 10^9
- 1 <= c <= n - 1`,
    examples: [
      { input: 'n = 12, c = 1', output: '3', explanation: 'Sequence: 2,5,2,5,... cycle length 2. Wait, 2→5→2: length 2.' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['fast-slow-pointers', 'math', 'number-theory'],
    hints: [
      'Define f(x) = (x*x + c) % n. Apply Floyd\'s algorithm: slow = f(slow), fast = f(f(fast)).',
      'When slow == fast, a cycle is detected. To find the cycle length, keep one pointer fixed and advance the other until they meet again.',
      'Count the steps taken to return to the meeting point — that\'s the cycle length.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Reorder Manifest',
    prompt: `A logistics system stores a manifest as a singly linked list: node 1, node 2, ..., node n. The system wants to reorder it as: node 1, node n, node 2, node n-1, node 3, node n-2, ...

Given the head of a linked list, reorder it in-place without using extra space.`,
    constraints: `- The number of nodes in the list is in [1, 5*10^4]
- 1 <= Node.val <= 1000`,
    examples: [
      { input: 'head = [1,2,3,4]', output: '[1,4,2,3]' },
      { input: 'head = [1,2,3,4,5]', output: '[1,5,2,4,3]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Step 1: find the middle of the list using fast/slow pointers.',
      'Step 2: reverse the second half of the list.',
      'Step 3: merge the two halves by alternating nodes.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Palindrome Chain',
    prompt: `A decoder checks if a singly linked list spells out a palindrome. The check must use O(1) extra space (the values fit in memory but the list cannot be copied to an array).

Given the head of a linked list, return \`true\` if it is a palindrome.`,
    constraints: `- The number of nodes is in [1, 10^5]
- 0 <= Node.val <= 9`,
    examples: [
      { input: 'head = [1,2,2,1]', output: 'true' },
      { input: 'head = [1,2]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 18,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Find the middle using slow/fast pointers.',
      'Reverse the second half of the list in-place.',
      'Compare the first half with the reversed second half node by node.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Loop Entry Locator',
    prompt: `A buggy memory allocator has a linked list where a cycle exists. The forensic engineer not only needs to detect the cycle but find the exact node where the cycle begins (the entry point of the loop).

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return \`null\`.`,
    constraints: `- The number of nodes is in [0, 10^4]
- -10^5 <= Node.val <= 10^5`,
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'Node with value 2', explanation: 'Cycle begins at node at index 1.' },
      { input: 'head = [1,2], pos = 0', output: 'Node with value 1' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['fast-slow-pointers', 'linked-list', 'math'],
    hints: [
      'Use Floyd\'s algorithm to detect the meeting point inside the cycle.',
      'Once slow and fast meet inside the cycle, reset one pointer to head.',
      'Advance both pointers one step at a time — they will meet at the cycle entry node.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Sequence Archivist',
    prompt: `An archivist receives a stream of numbers as a linked list and wants to split it into two halves to archive separately — but the second half should be in reverse order.

Given the head of a singly linked list of length \`n\`, split it into the first ceil(n/2) nodes and the reversed last floor(n/2) nodes. Return both heads as a tuple.`,
    constraints: `- 1 <= n <= 10^5
- 0 <= Node.val <= 10^9`,
    examples: [
      { input: 'head = [1,2,3,4,5]', output: 'first=[1,2,3], second=[5,4]', explanation: 'First 3 nodes; last 2 reversed.' },
      { input: 'head = [1,2]', output: 'first=[1], second=[2]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Find the middle using fast/slow pointers. The slow pointer stops at ceil(n/2).',
      'Detach the second half by setting slow.next = null.',
      'Reverse the second half using the standard iterative reversal technique.',
    ],
  },

  // ── Two Pointers (easy/medium/hard additions) ──────────────
  {
    patternSlug: 'two-pointers',
    title: 'Zero Exile Protocol',
    prompt: `A data-cleansing agent receives an array of integers and must push all zeroes to the end of the array without disturbing the relative order of nonzero values — and it must do this in-place using no extra allocation.

Given an integer array \`nums\`, move all zeroes to the end while maintaining the relative order of non-zero elements. Modify the array in-place.`,
    constraints: `- 1 <= nums.length <= 10^4
- -2^31 <= nums[i] <= 2^31 - 1`,
    examples: [
      { input: 'nums = [0,1,0,3,12]', output: '[1,3,12,0,0]', explanation: 'Non-zero values keep their order; zeroes are exiled to the end.' },
      { input: 'nums = [0]', output: '[0]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['two-pointers', 'array'],
    hints: [
      'Can one pointer track where the next non-zero element should land?',
      'Walk the array with a read pointer; write non-zero values at a write pointer.',
      'After the first pass, fill everything from writePtr to end with zeroes.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Mirror Test',
    prompt: `A cryptographer checks whether a transmission is a palindrome — ignoring all non-alphanumeric noise and treating uppercase and lowercase as equivalent.

Given a string \`s\`, return \`true\` if it is a palindrome after removing non-alphanumeric characters and lowercasing, or \`false\` otherwise.`,
    constraints: `- 1 <= s.length <= 2 * 10^5
- s consists only of printable ASCII characters`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true' },
      { input: 's = "race a car"', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['two-pointers', 'string'],
    hints: [
      'Place one pointer at the start and one at the end. What should you skip?',
      'Skip any character that is not alphanumeric before comparing.',
      'If the two characters ever differ (case-insensitively), return false immediately.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Sorting Hat (Dutch Flag)',
    prompt: `A logistics AI sorts cargo containers into three priority classes: 0 (ground), 1 (air), and 2 (sea). The containers arrive in a random order and must be sorted in a single pass with no extra array.

Given an array \`nums\` containing only 0s, 1s, and 2s, sort it in-place in a single traversal.`,
    constraints: `- 1 <= nums.length <= 300
- nums[i] is 0, 1, or 2`,
    examples: [
      { input: 'nums = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' },
      { input: 'nums = [2,0,1]', output: '[0,1,2]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['two-pointers', 'array', 'sorting'],
    hints: [
      'Three partitions need three boundary pointers. Where should they start?',
      'Maintain regions: [0..lo-1] = zeroes, [lo..mid-1] = ones, [hi+1..end] = twos.',
      'When nums[mid] == 0, swap with lo and advance both; when 2, swap with hi and retreat hi only.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Duplicate Eraser',
    prompt: `An archivist receives a sorted ledger and must remove duplicate entries in-place, returning the count of unique values. Memory is precious — no extra arrays allowed.

Given a sorted integer array \`nums\`, remove duplicates in-place and return \`k\`, the number of unique elements. The first \`k\` elements of \`nums\` should hold the unique values in order.`,
    constraints: `- 1 <= nums.length <= 3 * 10^4
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order`,
    examples: [
      { input: 'nums = [1,1,2]', output: 'k=2, nums=[1,2,_]', explanation: 'Two unique elements.' },
      { input: 'nums = [0,0,1,1,1,2,2,3,3,4]', output: 'k=5, nums=[0,1,2,3,4,_,_,_,_,_]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['two-pointers', 'array'],
    hints: [
      'Use a slow pointer to mark where the next unique value should be written.',
      'The fast pointer scans; when it finds a value different from slow, copy it forward.',
      'Return slow + 1 as the count of unique elements after the loop.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Gravity Collapse',
    prompt: `A structural engineer simulates water trapped between elevation columns after a rainstorm. Each bar has a height, and water pools wherever a shorter bar is flanked by taller ones on both sides.

Given an array \`height\` of non-negative integers representing an elevation map where each bar has width 1, compute how much water can be trapped after raining.`,
    constraints: `- 1 <= height.length <= 2 * 10^4
- 0 <= height[i] <= 10^5`,
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['two-pointers', 'array', 'dynamic-programming'],
    hints: [
      'Water at position i is bounded by min(maxLeft[i], maxRight[i]) - height[i]. Can you compute this without extra arrays?',
      'Use two pointers from both ends. The side with the smaller max determines the water level.',
      'Process the pointer with the smaller maxHeight — that side is the binding constraint.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Reconciler',
    prompt: `Two sorted transaction logs arrive from different branches of a bank. A reconciler must merge them into one sorted log in-place — the first log has enough extra capacity at the end to hold all entries from the second.

Given two sorted integer arrays \`nums1\` (with extra capacity) and \`nums2\`, merge \`nums2\` into \`nums1\` in-place. \`m\` and \`n\` are the number of valid elements in each array.`,
    constraints: `- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- -10^9 <= nums1[i], nums2[j] <= 10^9`,
    examples: [
      { input: 'nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3', output: '[1,2,2,3,5,6]' },
      { input: 'nums1=[1], m=1, nums2=[], n=0', output: '[1]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['two-pointers', 'array', 'sorting'],
    hints: [
      'Filling from the back avoids overwriting unread values — start at m+n-1.',
      'Compare nums1[m-1] and nums2[n-1] and place the larger at the current tail.',
      'If nums2 still has elements after nums1 is exhausted, copy them directly.',
    ],
  },

  // ── Sliding Window (easy/medium/hard additions) ─────────────
  {
    patternSlug: 'sliding-window',
    title: 'The Fixed-Frame Harvest',
    prompt: `A sensor array records daily energy readings. An analyst wants the maximum total energy captured by any contiguous window of exactly \`k\` sensors.

Given an integer array \`nums\` and integer \`k\`, return the maximum sum of any contiguous subarray of length exactly \`k\`.`,
    constraints: `- 1 <= k <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4`,
    examples: [
      { input: 'nums = [2,1,5,1,3,2], k = 3', output: '9', explanation: 'Subarray [5,1,3] has sum 9.' },
      { input: 'nums = [2,3,4,1,5], k = 2', output: '7', explanation: '[3,4] sums to 7.' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['sliding-window', 'array'],
    hints: [
      'Compute the sum of the first k elements as your initial window.',
      'Slide forward: add the incoming element and subtract the outgoing one.',
      'Track the maximum sum seen after each slide.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Frequency Lockpick',
    prompt: `A security system accepts a passphrase only if one string is a permutation of another. An analyst must check whether any window of the same length as the key appears inside a longer cipher string.

Given strings \`s1\` and \`s2\`, return \`true\` if any permutation of \`s1\` is a substring of \`s2\`.`,
    constraints: `- 1 <= s1.length, s2.length <= 10^4
- s1 and s2 consist of lowercase English letters`,
    examples: [
      { input: 's1 = "ab", s2 = "eidbaooo"', output: 'true', explanation: '"ba" is a permutation of "ab" and is a substring of s2.' },
      { input: 's1 = "ab", s2 = "eidboaoo"', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'Two strings are permutations if their character frequency maps are equal.',
      'Maintain a frequency window of size s1.length as you slide across s2.',
      'Use a "matches" counter tracking how many characters have equal frequency — O(1) window updates.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Bandwidth Governor',
    prompt: `A network packet inspector must find the smallest contiguous burst of packets whose combined size meets or exceeds a required threshold — to flag it as a denial-of-service spike.

Given an array of positive integers \`nums\` and a positive integer \`target\`, return the length of the **shortest contiguous subarray** whose sum is >= target. Return 0 if no such subarray exists.`,
    constraints: `- 1 <= target <= 10^9
- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^4`,
    examples: [
      { input: 'nums = [2,3,1,2,4,3], target = 7', output: '2', explanation: '[4,3] sums to 7.' },
      { input: 'nums = [1,4,4], target = 4', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['sliding-window', 'array'],
    hints: [
      'All values are positive — so adding elements always increases the sum.',
      'Expand the right pointer until sum >= target, then contract from the left.',
      'Each time the condition is met, record the window length and shrink further.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Chaos Tolerance',
    prompt: `A quality-control system monitors a binary pipeline. Engineers can flip at most \`k\` faulty signals (0s) to good (1s). They want to know the longest unbroken run of good signals achievable under that budget.

Given a binary array \`nums\` and an integer \`k\`, return the length of the longest contiguous subarray of 1s achievable by flipping at most \`k\` zeros.`,
    constraints: `- 1 <= nums.length <= 10^5
- nums[i] is 0 or 1
- 0 <= k <= nums.length`,
    examples: [
      { input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2', output: '6' },
      { input: 'nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3', output: '10' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['sliding-window', 'array'],
    hints: [
      'Think of it as: find the longest window containing at most k zeros.',
      'Expand the right pointer; track the count of zeros in the window.',
      'When zero-count exceeds k, slide the left pointer right until it is valid again.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Minimum Broadcast Window',
    prompt: `A radio operator has a long transmission string and a set of required signal characters. She needs to find the shortest contiguous segment of the transmission that contains every required character at least as many times as specified.

Given strings \`s\` (transmission) and \`t\` (required characters), return the minimum window substring of \`s\` that contains all characters of \`t\`. Return an empty string if none exists.`,
    constraints: `- 1 <= s.length, t.length <= 10^5
- s and t consist of uppercase and lowercase English letters`,
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
      { input: 's = "a", t = "a"', output: '"a"' },
      { input: 's = "a", t = "aa"', output: '""' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'Track how many distinct characters in t are fully "satisfied" in the current window.',
      'Expand right until all characters are covered, then contract left to minimize the window.',
      'Use a "formed" counter and frequency maps so each pointer move is O(1).',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Anagram Sweep',
    prompt: `A linguist scans a document looking for all starting positions where a scrambled version of a target word appears. Every position counts — overlaps included.

Given strings \`s\` and \`p\`, return a list of all starting indices in \`s\` where an anagram of \`p\` begins.`,
    constraints: `- 1 <= s.length, p.length <= 3 * 10^4
- s and p consist of lowercase English letters`,
    examples: [
      { input: 's = "cbaebabacd", p = "abc"', output: '[0,6]' },
      { input: 's = "abab", p = "ab"', output: '[0,1,2]' },
    ],
    difficulty: 'medium',
    estMin: 16,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'An anagram has the same character frequencies as the original.',
      'Slide a fixed-size window of length p.length across s, maintaining a frequency map.',
      'Use a "match counter" so you can check validity in O(1) per slide.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Deque Sentinel',
    prompt: `A surveillance system processes a stream of threat readings in a sliding window of size \`k\`. The operator needs the maximum threat level visible at every moment — to trigger alerts in real time.

Given an integer array \`nums\` and integer \`k\`, return an array of the maximum value in each sliding window of size \`k\`.`,
    constraints: `- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- 1 <= k <= nums.length`,
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]' },
      { input: 'nums = [1], k = 1', output: '[1]' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['sliding-window', 'monotonic-stack', 'deque'],
    hints: [
      'A naive approach is O(nk). Can you maintain a data structure that always exposes the max in O(1)?',
      'A monotonic decreasing deque stores indices of candidates for the maximum.',
      'Evict indices that fall out of the window from the front; evict smaller elements from the back.',
    ],
  },

  // ── Dynamic Programming (easy/medium/hard additions) ─────────
  {
    patternSlug: 'dynamic-programming',
    title: 'The Fibonacci Courier',
    prompt: `A courier service uses a Fibonacci routing schedule — the nth dispatch count equals the sum of the previous two. A junior analyst needs to compute large Fibonacci numbers quickly without recomputing from scratch each time.

Given \`n\`, return the nth Fibonacci number where \`F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)\`.`,
    constraints: `- 0 <= n <= 30`,
    examples: [
      { input: 'n = 4', output: '3', explanation: 'F(4) = F(3)+F(2) = 2+1 = 3.' },
      { input: 'n = 10', output: '55' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['dynamic-programming', 'recursion', 'memoization'],
    hints: [
      'Recursive calls repeat the same subproblems — what if you cached each result?',
      'A bottom-up approach needs only two variables: the previous two Fibonacci values.',
      'Iterate from 2 to n, updating prev and curr at each step.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Staircase Operative',
    prompt: `An operative must climb a staircase to reach the top. She can take either 1 or 2 steps at a time. The mission briefing asks: in how many distinct ways can she reach the top?

Given \`n\` steps, return the number of distinct ways to climb to the top.`,
    constraints: `- 1 <= n <= 45`,
    examples: [
      { input: 'n = 2', output: '2', explanation: '1+1 or 2.' },
      { input: 'n = 3', output: '3', explanation: '1+1+1, 1+2, or 2+1.' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['dynamic-programming', 'memoization'],
    hints: [
      'How many ways are there to reach step n if you know the ways to reach step n-1 and n-2?',
      'ways(n) = ways(n-1) + ways(n-2) — this is the Fibonacci recurrence.',
      'Use two variables and iterate bottom-up from step 1 to n.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Toll Road Optimizer',
    prompt: `A traveler moves along a toll road divided into stations. Each station has a cost, and the traveler can jump 1 or 2 stations at a time. She wants to reach the end (just past the last station) with minimum total toll paid.

Given an integer array \`cost\` where \`cost[i]\` is the toll at step \`i\`, return the minimum cost to reach the top. You can start from index 0 or index 1.`,
    constraints: `- 2 <= cost.length <= 1000
- 0 <= cost[i] <= 999`,
    examples: [
      { input: 'cost = [10,15,20]', output: '15', explanation: 'Start at index 1, pay 15, jump 2 steps to finish.' },
      { input: 'cost = [1,100,1,1,1,100,1,1,100,1]', output: '6' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'Define dp[i] as the minimum cost to reach step i. What is the recurrence?',
      'dp[i] = cost[i] + min(dp[i-1], dp[i-2]).',
      'The answer is min(dp[n-1], dp[n-2]) since you can finish from either of the last two steps.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Heist Planner',
    prompt: `A master thief scopes out a row of vaults. She cannot rob two adjacent vaults without triggering an alarm. She wants to maximize her haul.

Given an integer array \`nums\` representing the value in each vault, return the maximum amount of money she can rob without robbing two adjacent vaults.`,
    constraints: `- 1 <= nums.length <= 100
- 0 <= nums[i] <= 400`,
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob vault 0 (1) and vault 2 (3).' },
      { input: 'nums = [2,7,9,3,1]', output: '12' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'At each vault, you either rob it (and add its value to the best up to two back) or skip it.',
      'dp[i] = max(dp[i-1], dp[i-2] + nums[i]).',
      'You only need the last two dp values — optimize to O(1) space.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Knapsack Courier',
    prompt: `A courier has a knapsack with limited weight capacity. Each item has a weight and value. She wants to maximize the total value of items she carries without exceeding the weight limit — but she can carry at most one of each item.

Given arrays \`weights\` and \`values\` of \`n\` items and a capacity \`W\`, return the maximum value achievable.`,
    constraints: `- 1 <= n <= 100
- 1 <= W <= 1000
- 1 <= weights[i], values[i] <= 1000`,
    examples: [
      { input: 'weights=[1,3,4,5], values=[1,4,5,7], W=7', output: '9', explanation: 'Take items with weights 3 and 4.' },
      { input: 'weights=[2,3,4], values=[3,4,5], W=5', output: '7' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'Define dp[i][w] = max value using first i items with capacity w.',
      'Either skip item i: dp[i][w] = dp[i-1][w], or include it if weights[i] <= w.',
      'You can reduce space to 1D by iterating capacity from W down to weights[i].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Longest Uplink Chain',
    prompt: `A satellite network logs signal strength readings over time. A mission analyst needs to find the length of the longest strictly increasing subsequence of readings — to identify the longest growth trend.

Given an integer array \`nums\`, return the length of the longest strictly increasing subsequence.`,
    constraints: `- 1 <= nums.length <= 2500
- -10^4 <= nums[i] <= 10^4`,
    examples: [
      { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4', explanation: '[2,3,7,101].' },
      { input: 'nums = [0,1,0,3,2,3]', output: '4' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'binary-search'],
    hints: [
      'dp[i] = length of the LIS ending at index i. How does it relate to dp[j] for j < i?',
      'dp[i] = 1 + max(dp[j]) for all j < i where nums[j] < nums[i].',
      'For O(n log n): maintain a "patience sorting" array and binary search for the insertion point.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Scrambled Cartographer',
    prompt: `Two diplomats need to agree on a shared map legend. Each has their own list of landmark codes. The diplomats want to find the length of the longest sequence of codes that both lists share, in order.

Given strings \`text1\` and \`text2\`, return the length of their longest common subsequence.`,
    constraints: `- 1 <= text1.length, text2.length <= 1000
- text1 and text2 consist of only lowercase English letters`,
    examples: [
      { input: 'text1 = "abcde", text2 = "ace"', output: '3', explanation: 'LCS is "ace".' },
      { input: 'text1 = "abc", text2 = "abc"', output: '3' },
      { input: 'text1 = "abc", text2 = "def"', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['dynamic-programming', 'string'],
    hints: [
      'Build a 2D dp table: dp[i][j] = LCS length for text1[0..i-1] and text2[0..j-1].',
      'If text1[i-1] == text2[j-1], dp[i][j] = dp[i-1][j-1] + 1.',
      'Otherwise dp[i][j] = max(dp[i-1][j], dp[i][j-1]).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Palindrome Dissector',
    prompt: `A code-breaker receives an encrypted string and needs to split it into the fewest number of substrings such that every piece is a palindrome — minimizing the cost of the decryption passes.

Given a string \`s\`, return the minimum number of cuts needed so that every substring is a palindrome.`,
    constraints: `- 1 <= s.length <= 2000
- s consists of lowercase English letters`,
    examples: [
      { input: 's = "aab"', output: '1', explanation: 'Cut between index 1 and 2: "aa" and "b".' },
      { input: 's = "a"', output: '0' },
      { input: 's = "ab"', output: '1' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['dynamic-programming', 'string'],
    hints: [
      'First precompute isPalin[i][j] for all substrings using DP in O(n^2).',
      'Define cuts[i] = minimum cuts for s[0..i]. If s[0..i] is a palindrome, cuts[i] = 0.',
      'Otherwise cuts[i] = 1 + min(cuts[j-1]) for all j <= i where s[j..i] is a palindrome.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Burst Sequence',
    prompt: `A demolitions expert must detonate a row of explosive cells. When cell \`i\` is detonated, the yield equals \`nums[left] * nums[i] * nums[right]\` where left and right are the nearest surviving cells. She wants to maximize the total yield.

Given an array \`nums\` of balloon values (with virtual 1s at both ends), return the maximum coins obtainable by bursting all balloons.`,
    constraints: `- 1 <= nums.length <= 300
- 0 <= nums[i] <= 100`,
    examples: [
      { input: 'nums = [3,1,5,8]', output: '167', explanation: 'Burst 1 (3*1*5=15), then 5 (3*5*8=120), then 3 (1*3*8=24), then 8 (1*8*1=8). Total=167.' },
      { input: 'nums = [1,5]', output: '10' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dynamic-programming', 'interval-dp'],
    hints: [
      'Thinking about which balloon to burst LAST in a range is easier than thinking first.',
      'Define dp[l][r] = max coins from bursting all balloons strictly between l and r.',
      'For each k in (l,r), dp[l][r] = max(dp[l][k] + nums[l]*nums[k]*nums[r] + dp[k][r]).',
    ],
  },

  // ── Binary Search (easy/medium/hard additions) ────────────────
  {
    patternSlug: 'binary-search',
    title: 'The First Contact Scanner',
    prompt: `A planetary probe scans a sorted catalog for the first and last occurrences of a target signature. Return both boundary indices to define the detection range.

Given a sorted array \`nums\` and a target value, return \`[first, last]\` indices of \`target\` in the array. Return \`[-1, -1]\` if target is not found.`,
    constraints: `- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- nums is sorted in non-decreasing order`,
    examples: [
      { input: 'nums = [5,7,7,8,8,10], target = 8', output: '[3,4]' },
      { input: 'nums = [5,7,7,8,8,10], target = 6', output: '[-1,-1]' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['binary-search', 'array'],
    hints: [
      'Run two separate binary searches: one biased toward the leftmost occurrence, one to the rightmost.',
      'For the left boundary, when nums[mid] == target, set right = mid - 1 and record mid.',
      'For the right boundary, when nums[mid] == target, set left = mid + 1 and record mid.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Landing Slot',
    prompt: `A spacecraft needs to dock at the lowest available bay index in a sorted manifest. If the exact bay is unavailable, it must use the next available one.

Given a sorted array \`nums\` and a \`target\`, return the index where target would be inserted to keep the array sorted. If target is present, return its index.`,
    constraints: `- 1 <= nums.length <= 10^4
- -10^4 <= nums[i] <= 10^4
- nums contains distinct values sorted in ascending order`,
    examples: [
      { input: 'nums = [1,3,5,6], target = 5', output: '2' },
      { input: 'nums = [1,3,5,6], target = 2', output: '1' },
      { input: 'nums = [1,3,5,6], target = 7', output: '4' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['binary-search', 'array'],
    hints: [
      'Binary search normally. When do left and right cross?',
      'When the loop ends, left is the correct insertion position.',
      'If nums[mid] < target, move left = mid + 1. Otherwise, right = mid - 1.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Integer Root Extractor',
    prompt: `An embedded math unit needs to compute integer square roots without floating-point hardware. Given a non-negative integer, return the floor of its square root.

Given a non-negative integer \`x\`, return the integer part of the square root of \`x\` without using built-in exponent functions.`,
    constraints: `- 0 <= x <= 2^31 - 1`,
    examples: [
      { input: 'x = 4', output: '2' },
      { input: 'x = 8', output: '2', explanation: 'sqrt(8) ≈ 2.828, floor is 2.' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['binary-search', 'math'],
    hints: [
      'The answer lies between 0 and x. Can you binary-search for it?',
      'If mid * mid <= x but (mid+1)*(mid+1) > x, then mid is the answer.',
      'Use long arithmetic (or check mid <= x/mid) to avoid integer overflow.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Rotated Vault',
    prompt: `A secret vault directory was sorted but then rotated at an unknown pivot. A retrieval agent must find a target entry despite the rotation — in O(log n) time.

Given an integer array \`nums\` sorted in ascending order, then rotated at an unknown pivot, and a \`target\`, return the index of target or -1 if not found.`,
    constraints: `- 1 <= nums.length <= 5000
- -10^4 <= nums[i] <= 10^4
- All values in nums are unique
- nums is an ascending array rotated at some pivot`,
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['binary-search', 'array'],
    hints: [
      'In a rotated array, at least one half of [lo, mid] or [mid+1, hi] is always sorted.',
      'Check which half is sorted, then check whether target falls within that sorted half.',
      'Narrow to the appropriate half and repeat.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Ration Optimizer',
    prompt: `A logistics coordinator distributes rations. Each worker can eat at most \`speed\` rations per hour from a pile. There are \`h\` hours before the convoy departs. She wants the minimum eating speed to finish all piles in time.

Given piles of rations and \`h\` hours, return the minimum integer eating speed \`k\` such that all piles are consumed within \`h\` hours.`,
    constraints: `- 1 <= piles.length <= 10^4
- 1 <= piles[i] <= 10^9
- piles.length <= h <= 10^8`,
    examples: [
      { input: 'piles = [3,6,7,11], h = 8', output: '4' },
      { input: 'piles = [30,11,23,4,20], h = 5', output: '30' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['binary-search', 'greedy'],
    hints: [
      'The answer is between 1 and max(piles). Binary search over this range.',
      'For a given speed k, hours needed = sum(ceil(pile/k)) for each pile.',
      'If hours <= h, k might be too fast — try smaller. Otherwise try faster.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Median Arbitrator',
    prompt: `Two sorted data streams are merged by an arbitrator who needs to report the median instantly — without actually merging the arrays. The arbitrator must work in O(log(m+n)) time.

Given two sorted arrays \`nums1\` and \`nums2\`, return the median of the combined sorted array.`,
    constraints: `- nums1.length == m, nums2.length == n
- 0 <= m, n <= 1000
- 1 <= m + n <= 2000
- -10^6 <= nums1[i], nums2[i] <= 10^6`,
    examples: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.0' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.5' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['binary-search', 'array', 'divide-and-conquer'],
    hints: [
      'Binary search on the partition of the smaller array. The partition of the larger is determined.',
      'A valid partition satisfies: maxLeft1 <= minRight2 and maxLeft2 <= minRight1.',
      'Adjust the partition left or right based on which constraint is violated.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Shipment Deadline',
    prompt: `A cargo fleet must ship all packages within \`D\` days. Packages are loaded in order (they cannot be reordered). The ship has a weight capacity per day. Find the minimum capacity needed to ship all packages within \`D\` days.

Given weights array and \`D\` days, return the minimum ship capacity.`,
    constraints: `- 1 <= D <= weights.length <= 5 * 10^4
- 1 <= weights[i] <= 500`,
    examples: [
      { input: 'weights = [1,2,3,4,5,6,7,8,9,10], D = 5', output: '15' },
      { input: 'weights = [3,2,2,4,1,4], D = 3', output: '6' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['binary-search', 'greedy'],
    hints: [
      'Binary search on the capacity. The range is [max(weights), sum(weights)].',
      'For a given capacity, simulate greedy loading: fill each day until adding the next would exceed capacity.',
      'Count the days needed. If days <= D, try lower capacity; else try higher.',
    ],
  },

  // ── BFS (easy/medium/hard additions) ─────────────────────────
  {
    patternSlug: 'bfs',
    title: 'The Level Broadcaster',
    prompt: `A signal tower broadcasts messages level by level through a hierarchical relay network (a binary tree). An analyst wants each level\'s readings grouped together.

Given the root of a binary tree, return the level-order traversal as a list of lists of node values.`,
    constraints: `- 0 <= number of nodes <= 2000
- -1000 <= Node.val <= 1000`,
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' },
      { input: 'root = [1]', output: '[[1]]' },
      { input: 'root = []', output: '[]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['bfs', 'binary-tree'],
    hints: [
      'A queue naturally processes nodes level by level.',
      'At the start of each level, the queue size tells you exactly how many nodes are in that level.',
      'Process that many nodes, enqueue their children, then start a new level list.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Periscope View',
    prompt: `A submarine periscope can only see the rightmost element of each depth layer. A navigator wants the rightmost visible node at each level of a binary tree relay network.

Given the root of a binary tree, return the values of the nodes you can see from the right side, ordered from top to bottom.`,
    constraints: `- 0 <= number of nodes <= 100
- -100 <= Node.val <= 100`,
    examples: [
      { input: 'root = [1,2,3,null,5,null,4]', output: '[1,3,4]' },
      { input: 'root = [1,null,3]', output: '[1,3]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['bfs', 'binary-tree'],
    hints: [
      'Do a level-order BFS. What is the last element processed at each level?',
      'Record the last node value dequeued before moving to the next level.',
      'The queue size at the start of each level tells you how many nodes belong to it.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Shallowest Bunker',
    prompt: `Rescue teams map an underground bunker network as a binary tree. They need the shortest path from the entrance (root) to any exit (leaf node) to plan the fastest evacuation route.

Given the root of a binary tree, return the minimum depth — the number of nodes along the shortest path from root to the nearest leaf.`,
    constraints: `- 0 <= number of nodes <= 10^5
- -1000 <= Node.val <= 1000`,
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '2' },
      { input: 'root = [2,null,3,null,4,null,5,null,6]', output: '5' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['bfs', 'binary-tree'],
    hints: [
      'BFS finds the shortest path to any target node naturally.',
      'The first leaf node you encounter during BFS is at the minimum depth.',
      'A leaf node has no left child and no right child.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Word Ladder Relay',
    prompt: `An underground relay passes coded words through a network. Each hop changes exactly one letter, and every intermediate word must exist in a dictionary. Find the minimum number of hops to transform a start word into a target word.

Given \`beginWord\`, \`endWord\`, and a \`wordList\`, return the length of the shortest transformation sequence. Return 0 if none exists.`,
    constraints: `- 1 <= beginWord.length <= 10
- endWord.length == beginWord.length
- 1 <= wordList.length <= 5000
- All words have the same length and consist of lowercase English letters`,
    examples: [
      { input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]', output: '5', explanation: 'hit->hot->dot->dog->cog.' },
      { input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log"]', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['bfs', 'hash-map', 'string'],
    hints: [
      'Model each word as a graph node; edges exist between words that differ by exactly one letter.',
      'BFS on this implicit graph finds the shortest path — i.e., fewest transformations.',
      'For each word, try replacing each character with a-z and check if the result is in the word set.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Infected Grid',
    prompt: `A quarantine officer monitors a grid of cells. Fresh cells become rotten when adjacent to a rotten cell. Every minute, all rotten cells infect their fresh neighbors simultaneously. Find the minimum minutes until no fresh cells remain, or -1 if impossible.

Given a grid of 0s (empty), 1s (fresh), and 2s (rotten), return the minimum minutes for all fresh cells to become rotten. Return -1 if impossible.`,
    constraints: `- m == grid.length, n == grid[i].length
- 1 <= m, n <= 10
- grid[i][j] is 0, 1, or 2`,
    examples: [
      { input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]', output: '4' },
      { input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['bfs', 'matrix', 'multi-source'],
    hints: [
      'Multi-source BFS: seed the queue with all initially rotten cells simultaneously.',
      'BFS naturally processes all cells at distance k before distance k+1 — minutes = layers.',
      'After BFS, if any fresh cell remains, return -1.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Shortest Circuit',
    prompt: `A robotics engineer navigates a robot through a binary maze grid from the top-left to the bottom-right. The robot moves to any of the 8 adjacent cells. Find the length of the shortest clear path (all zeros).

Given an n×n binary grid, return the length of the shortest clear path (using 8-directional movement) from (0,0) to (n-1,n-1). Return -1 if none exists.`,
    constraints: `- n == grid.length == grid[i].length
- 1 <= n <= 100
- grid[i][j] is 0 or 1`,
    examples: [
      { input: 'grid = [[0,1],[1,0]]', output: '2' },
      { input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]', output: '4' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['bfs', 'matrix'],
    hints: [
      'BFS on a grid with 8-directional movement — each cell visited at most once.',
      'If the start or end cell is 1 (blocked), return -1 immediately.',
      'Track visited cells to avoid revisiting. The BFS layer count is the path length.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Teleport Grid',
    prompt: `A courier traverses a city grid where some cells have teleporters that instantly jump to any cell of the same color. The courier wants the minimum steps to cross the entire grid.

Given a grid where each cell has a color (integer), moving costs 1 step to an adjacent cell, but from any cell you can also jump (1 step) to any cell of the same color. Return the minimum steps to get from (0,0) to (n-1,n-1).`,
    constraints: `- n == grid.length == grid[i].length
- 1 <= n <= 100
- 1 <= grid[i][j] <= n * n`,
    examples: [
      { input: 'grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]', output: '4' },
      { input: 'grid = [[1,2,3],[4,5,6],[7,8,9]]', output: '4' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['bfs', 'hash-map', 'graph'],
    hints: [
      'BFS guarantees shortest path. The trick is efficiently handling same-color teleportation.',
      'Group cells by color in a hash map. When processing a cell, also enqueue all same-color unvisited cells.',
      'After using a color group, clear it to avoid revisiting those nodes.',
    ],
  },

  // ── DFS (easy/medium/hard additions) ─────────────────────────
  {
    patternSlug: 'dfs',
    title: 'The Path Auditor',
    prompt: `A security auditor traverses a binary tree of access logs. She wants to know if any root-to-leaf path has node values that sum to exactly a required clearance level.

Given a binary tree root and integer \`targetSum\`, return \`true\` if any root-to-leaf path sums to \`targetSum\`.`,
    constraints: `- 0 <= number of nodes <= 5000
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000`,
    examples: [
      { input: 'root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22', output: 'true' },
      { input: 'root = [1,2,3], targetSum = 5', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dfs', 'binary-tree'],
    hints: [
      'Recurse down the tree. What should you subtract at each step?',
      'At each node, recurse on both children with targetSum - node.val.',
      'Base case: at a leaf node, check if the remaining sum equals node.val.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Mirror Protocol',
    prompt: `A systems architect checks whether a network relay tree is symmetric around its center — if the left and right subtrees are mirror images of each other.

Given the root of a binary tree, return \`true\` if it is a mirror of itself (i.e., symmetric around its center).`,
    constraints: `- 1 <= number of nodes <= 1000
- -100 <= Node.val <= 100`,
    examples: [
      { input: 'root = [1,2,2,3,4,4,3]', output: 'true' },
      { input: 'root = [1,2,2,null,3,null,3]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dfs', 'binary-tree'],
    hints: [
      'A tree is symmetric if its left subtree mirrors its right subtree.',
      'Write a helper isMirror(left, right) that checks if two trees are mirrors.',
      'They mirror if: values match, left.left mirrors right.right, and left.right mirrors right.left.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Terrain Surveyor',
    prompt: `A cartographer surveys a map of land (1) and sea (0) cells. She counts distinct islands — connected regions of land cells connected horizontally or vertically.

Given an m×n binary grid, return the number of islands.`,
    constraints: `- m == grid.length, n == grid[i].length
- 1 <= m, n <= 300
- grid[i][j] is '0' or '1'`,
    examples: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1' },
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['dfs', 'matrix', 'union-find'],
    hints: [
      'When you find an unvisited land cell, it\'s a new island — DFS to mark its entire extent.',
      'During DFS, mark each visited land cell as "0" (visited) to avoid revisiting.',
      'Count how many times you start a new DFS.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Diameter Probe',
    prompt: `An engineer measures the "diameter" of a relay network (binary tree) — the length of the longest path between any two nodes. The path may or may not pass through the root.

Given the root of a binary tree, return the length of the diameter (number of edges in the longest path between any two nodes).`,
    constraints: `- 1 <= number of nodes <= 10^4
- -100 <= Node.val <= 100`,
    examples: [
      { input: 'root = [1,2,3,4,5]', output: '3', explanation: 'Path [4,2,1,3] or [5,2,1,3] has length 3.' },
      { input: 'root = [1,2]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['dfs', 'binary-tree'],
    hints: [
      'The diameter through a node = leftHeight + rightHeight. But the longest might not pass through the root.',
      'DFS that returns height: height(node) = 1 + max(height(left), height(right)).',
      'At each node, update a global max with leftHeight + rightHeight.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Pacific Overflow',
    prompt: `A hydrologist maps an m×n rainfall grid. Water can flow to adjacent cells of equal or lesser height. She wants all cells from which water can flow to both the Pacific (top/left border) and the Atlantic (bottom/right border).

Given an m×n integer matrix \`heights\`, return all coordinates where water can flow to both oceans.`,
    constraints: `- m == heights.length, n == heights[0].length
- 1 <= m, n <= 200
- 0 <= heights[i][j] <= 10^5`,
    examples: [
      { input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['dfs', 'matrix'],
    hints: [
      'Instead of flowing downhill, reverse the flow: do DFS uphill from each ocean border.',
      'A cell reachable from Pacific border via "uphill" DFS: mark it in pacificReach set.',
      'The answer is the intersection of pacificReach and atlanticReach.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Clone Network',
    prompt: `A deep-cover operative must duplicate an entire underground network graph without using any original node references — creating a completely independent clone.

Given a reference to a node in a connected undirected graph (where each node has a value and a list of neighbors), return a deep copy of the graph.`,
    constraints: `- 1 <= number of nodes <= 100
- 1 <= Node.val <= 100
- Node.val is unique
- No repeated edges, no self-loops`,
    examples: [
      { input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', output: '[[2,4],[1,3],[2,4],[1,3]]', explanation: 'Deep copy with same structure.' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dfs', 'hash-map', 'graph'],
    hints: [
      'Use a hash map from original node to its clone to handle cycles.',
      'DFS: if the node is already in the map, return its clone. Otherwise create a new clone.',
      'Recursively clone all neighbors and add them to the new node\'s neighbor list.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Longest Altitude Route',
    prompt: `A mountaineer maps a terrain grid where each cell has an elevation. She wants to find the longest path she can travel where each step goes strictly uphill — moving in any of the four cardinal directions.

Given an m×n integer matrix, return the length of the longest strictly increasing path.`,
    constraints: `- m == matrix.length, n == matrix[0].length
- 1 <= m, n <= 200
- 0 <= matrix[i][j] <= 2^31 - 1`,
    examples: [
      { input: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]', output: '4', explanation: 'Path [1,2,6,9].' },
      { input: 'matrix = [[3,4,5],[3,2,6],[2,2,1]]', output: '4', explanation: 'Path [3,4,5,6].' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['dfs', 'dynamic-programming', 'memoization', 'matrix'],
    hints: [
      'DFS from each cell, moving only to strictly larger neighbors.',
      'Memoize results: if you\'ve computed the longest path from cell (i,j), cache it.',
      'The answer is the maximum cached value across all cells.',
    ],
  },

  // ── Backtracking (easy/medium/hard additions) ─────────────────
  {
    patternSlug: 'backtracking',
    title: 'The Power Set Generator',
    prompt: `A cryptographer enumerates all possible subsets of a set of distinct security codes — including the empty set and the full set. Every combination must be listed exactly once.

Given an integer array \`nums\` of unique elements, return all possible subsets (the power set).`,
    constraints: `- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10
- All elements are unique`,
    examples: [
      { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' },
      { input: 'nums = [0]', output: '[[],[0]]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['backtracking', 'array', 'bit-manipulation'],
    hints: [
      'At each element, you have two choices: include it or exclude it.',
      'Use a start index to avoid reusing earlier elements.',
      'Add the current subset to results at every recursive call (not just at leaves).',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Combination Lock',
    prompt: `A safe cracker must find all unique combinations of candidate numbers that sum to a target. Each number can be used multiple times; combinations that are reorderings of each other count as one.

Given an array \`candidates\` of distinct integers and a \`target\`, return all unique combinations that sum to target. Numbers may be reused.`,
    constraints: `- 1 <= candidates.length <= 30
- 2 <= candidates[i] <= 40
- All candidates are distinct
- 1 <= target <= 40`,
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]' },
      { input: 'candidates = [2,3,5], target = 8', output: '[[2,2,2,2],[2,3,3],[3,5]]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['backtracking', 'array'],
    hints: [
      'Recurse with a remaining sum. At each step, try all candidates >= the current start index.',
      'Allowing the same candidate again means you don\'t advance the start index when you pick it.',
      'Prune when remaining sum < 0; add to result when remaining == 0.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Permutation Engine',
    prompt: `A code-generation engine must output every possible ordering of a set of unique instruction codes — all permutations of a given list.

Given an array \`nums\` of distinct integers, return all possible permutations.`,
    constraints: `- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All integers in nums are unique`,
    examples: [
      { input: 'nums = [1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' },
      { input: 'nums = [0,1]', output: '[[0,1],[1,0]]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['backtracking', 'array'],
    hints: [
      'At each position, try every unused element as the next choice.',
      'Use a "used" boolean array to track which elements are already in the current path.',
      'When the path length equals nums.length, record it as a complete permutation.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Parenthesis Architect',
    prompt: `A compiler writer needs to generate all valid sequences of nested parentheses of length 2n — every possible well-formed bracket expression.

Given \`n\`, return all combinations of n pairs of well-formed parentheses.`,
    constraints: `- 1 <= n <= 8`,
    examples: [
      { input: 'n = 3', output: '["((()))","(()())","(())()","()(())","()()()"]' },
      { input: 'n = 1', output: '["()"]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['backtracking', 'string', 'dynamic-programming'],
    hints: [
      'Track how many open and close brackets remain. When can you add an open bracket? A close bracket?',
      'You can add "(" if open > 0; you can add ")" if close > open (more opens already placed).',
      'When both counts reach 0, record the built string.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The N-Queens Stratagem',
    prompt: `A chess tactician must place n queens on an n×n board so that no two queens threaten each other — no two share a row, column, or diagonal. Return all valid configurations.

Given integer \`n\`, return all distinct solutions to the n-queens puzzle.`,
    constraints: `- 1 <= n <= 9`,
    examples: [
      { input: 'n = 4', output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]' },
      { input: 'n = 1', output: '[["Q"]]' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['backtracking', 'matrix'],
    hints: [
      'Place one queen per row. Track which columns and diagonals are occupied.',
      'Two queens share a diagonal if |row1-row2| == |col1-col2|.',
      'Use sets for occupied columns, left diagonals (row-col), and right diagonals (row+col).',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Sudoku Cracker',
    prompt: `A puzzle analyst receives partially filled Sudoku grids and must fill in the blanks using standard Sudoku rules: each row, column, and 3×3 box must contain each digit 1-9 exactly once.

Given a 9×9 board (with \'.\' for empty cells), fill in the board in-place to solve the Sudoku.`,
    constraints: `- board.length == 9, board[i].length == 9
- board[i][j] is a digit or '.'
- The input board has exactly one solution`,
    examples: [
      { input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]', output: '(board solved in-place)' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['backtracking', 'matrix'],
    hints: [
      'Find the next empty cell. Try digits 1-9; skip any that violate row/col/box constraints.',
      'If a digit is valid, place it and recurse. If the recursive call returns false, backtrack.',
      'Pre-build sets for each row, column, and 3×3 box for O(1) constraint checking.',
    ],
  },

  // ── Greedy (easy/medium/hard additions) ───────────────────────
  {
    patternSlug: 'greedy',
    title: 'The Cookie Distributor',
    prompt: `A relief worker distributes cookies to children. Each child has a minimum greed factor; a cookie satisfies a child only if its size meets or exceeds their greed factor. Maximize the number of content children.

Given greed factors \`g\` and cookie sizes \`s\`, return the maximum number of content children.`,
    constraints: `- 1 <= g.length <= 3 * 10^4
- 0 <= s.length <= 3 * 10^4
- 1 <= g[i], s[j] <= 2^31 - 1`,
    examples: [
      { input: 'g = [1,2,3], s = [1,1]', output: '1' },
      { input: 'g = [1,2], s = [1,2,3]', output: '2' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['greedy', 'sorting', 'two-pointers'],
    hints: [
      'Sort both arrays. What is the optimal pairing strategy?',
      'Try to satisfy the least greedy child first with the smallest sufficient cookie.',
      'Use two pointers: one on cookies, one on children. Advance cookie pointer if it satisfies the child.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Jump Clearance',
    prompt: `A parkour runner stands at the start of a rooftop course. Each position has a maximum jump length. Determine whether she can reach the final rooftop.

Given an integer array \`nums\` where \`nums[i]\` is the max jump length from index \`i\`, return \`true\` if you can reach the last index.`,
    constraints: `- 1 <= nums.length <= 3 * 10^4
- 0 <= nums[i] <= 10^5`,
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: 'true' },
      { input: 'nums = [3,2,1,0,4]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['greedy', 'array'],
    hints: [
      'Track the farthest index reachable so far.',
      'At each index, update maxReach = max(maxReach, i + nums[i]).',
      'If at any point i > maxReach, you are stuck. If maxReach >= last index, return true.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Minimum Platform Count',
    prompt: `A train scheduler must determine how many platforms a station needs. Trains arrive and depart at given times; the station needs enough platforms to handle overlapping trains simultaneously.

Given arrival times \`arr\` and departure times \`dep\`, return the minimum number of platforms needed.`,
    constraints: `- 1 <= arr.length <= 10^4
- arr and dep are sorted in ascending order
- arr[i] <= dep[i]`,
    examples: [
      { input: 'arr=[900,940,950,1100,1500,1800], dep=[910,1200,1120,1130,1900,2000]', output: '3' },
      { input: 'arr=[900,1100], dep=[1000,1200]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['greedy', 'sorting', 'two-pointers'],
    hints: [
      'Sort arrivals and departures separately. Use two pointers to simulate time.',
      'If the next event is an arrival, increment platforms needed; if departure, decrement.',
      'Track the maximum platforms in use at any point.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Interval Merger',
    prompt: `A calendar assistant receives a list of meeting intervals and needs to merge all overlapping meetings into the fewest possible consolidated blocks.

Given an array of \`intervals\` where \`intervals[i] = [start, end]\`, merge all overlapping intervals and return the non-overlapping result.`,
    constraints: `- 1 <= intervals.length <= 10^4
- intervals[i].length == 2
- 0 <= start_i <= end_i <= 10^4`,
    examples: [
      { input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]' },
      { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['greedy', 'sorting', 'array'],
    hints: [
      'Sort intervals by start time. Then a single pass can merge them.',
      'If the current interval\'s start <= last merged interval\'s end, extend the end.',
      'Otherwise, the current interval does not overlap — add it as a new block.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Rocket Refueler',
    prompt: `A rocket travels along a route with fuel stations at given positions. Starting with a full tank of capacity \`startFuel\`, each move burns 1 fuel per unit distance. The rocket can refuel at any station. Find the minimum number of refueling stops to reach the destination.

Given \`target\` distance, \`startFuel\`, and \`stations\` (each [position, fuel]), return the minimum stops or -1 if impossible.`,
    constraints: `- 1 <= target, startFuel <= 10^9
- 0 <= stations.length <= 500
- 0 < stations[0][0] < stations[1][0] < ... < target
- 1 <= stations[i][1] <= 10^9`,
    examples: [
      { input: 'target=100, startFuel=10, stations=[[10,60],[20,30],[30,30],[60,40]]', output: '2' },
      { input: 'target=1, startFuel=1, stations=[]', output: '0' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['greedy', 'heap', 'dynamic-programming'],
    hints: [
      'Greedy with a max-heap: travel as far as possible, then pick the largest available refuel.',
      'As you pass each station, push its fuel into a max-heap (you can "retroactively" refuel).',
      'When you run out of fuel, pop the largest fuel from the heap and count a stop.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Task Scheduler',
    prompt: `A CPU scheduler receives a list of tasks (labeled A-Z) and a cooldown period \`n\` — the same task type cannot run again for \`n\` intervals. Idle CPU cycles count. Find the minimum total intervals to finish all tasks.

Given a list of tasks and integer \`n\`, return the minimum number of CPU intervals.`,
    constraints: `- 1 <= tasks.length <= 10^4
- tasks[i] is uppercase English letter
- 0 <= n <= 100`,
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: '8', explanation: 'A->B->idle->A->B->idle->A->B.' },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: '6' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['greedy', 'heap', 'array'],
    hints: [
      'The task with the highest frequency governs the minimum time.',
      'Formula: result = max(tasks.length, (maxFreq-1)*(n+1) + countOfMaxFreqTasks).',
      'This handles both the cooldown-bound case and the tasks-bound case.',
    ],
  },

  // ── Heap (easy/medium/hard additions) ─────────────────────────
  {
    patternSlug: 'heap',
    title: 'The Stone Smasher',
    prompt: `In a game, you have a collection of stones with weights. Each round, smash the two heaviest stones together. If equal weight, both are destroyed; otherwise the difference survives. Return the final weight (or 0 if none remain).

Given an integer array \`stones\`, return the weight of the last remaining stone or 0.`,
    constraints: `- 1 <= stones.length <= 30
- 1 <= stones[i] <= 1000`,
    examples: [
      { input: 'stones = [2,7,4,1,8,1]', output: '1' },
      { input: 'stones = [1]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['heap', 'array'],
    hints: [
      'You always need the two heaviest stones. What data structure retrieves the max efficiently?',
      'Use a max-heap. Pop two elements, compute the difference, and push it back if nonzero.',
      'Repeat until one or zero elements remain.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Kth Signal',
    prompt: `A monitoring station receives a stream of sensor readings. An engineer wants the kth largest reading — not the kth unique value, but the kth largest in the sorted order.

Given an integer array \`nums\` and integer \`k\`, return the kth largest element.`,
    constraints: `- 1 <= k <= nums.length <= 10^4
- -10^4 <= nums[i] <= 10^4`,
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4', output: '4' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['heap', 'array', 'sorting'],
    hints: [
      'Sorting and indexing from the end works in O(n log n). Can you do better?',
      'A min-heap of size k keeps the k largest elements seen so far.',
      'The root of the min-heap is always the kth largest.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The K Closest Stars',
    prompt: `An astronomer catalogues star positions in 3D space as arrays \`[x,y,z]\`. She wants the \`k\` closest stars to the origin — by Euclidean distance — without needing to sort the entire catalog.

Given an array of \`points\` and integer \`k\`, return the \`k\` closest points to the origin.`,
    constraints: `- 1 <= k <= points.length <= 10^4
- -10^4 <= points[i][0], points[i][1] <= 10^4`,
    examples: [
      { input: 'points = [[1,3],[-2,2]], k = 1', output: '[[-2,2]]' },
      { input: 'points = [[3,3],[5,-1],[-2,4]], k = 2', output: '[[3,3],[-2,4]]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['heap', 'array', 'sorting'],
    hints: [
      'No need to compute actual distances — squared distance avoids the square root and preserves ordering.',
      'A max-heap of size k keeps the k smallest distances. Eject the largest when size exceeds k.',
      'Alternatively, sort by squared distance and return the first k points.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Frequency Billboard',
    prompt: `A marketing analyst has a word frequency log. She wants to reconstruct the k most frequent words, sorted by frequency (ties broken alphabetically).

Given an array of strings \`words\` and integer \`k\`, return the \`k\` most frequent words in order.`,
    constraints: `- 1 <= words.length <= 500
- 1 <= words[i].length <= 10
- All words consist of lowercase English letters
- k is in the range [1, number of unique words]`,
    examples: [
      { input: 'words = ["i","love","leetcode","i","love","coding"], k = 2', output: '["i","love"]' },
      { input: 'words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4', output: '["the","is","sunny","day"]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['heap', 'hash-map', 'sorting'],
    hints: [
      'First build a frequency map. Then extract the top-k entries.',
      'A min-heap of size k: compare by frequency descending, then alphabetically ascending.',
      'Negate frequency for min-heap comparisons, or use a custom comparator.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Merge Manifold',
    prompt: `A data pipeline receives \`k\` pre-sorted log streams and must merge them all into one unified sorted stream — efficiently.

Given an array of \`k\` sorted linked lists, merge them all into one sorted linked list and return its head.`,
    constraints: `- k == lists.length
- 0 <= k <= 10^4
- 0 <= lists[i].length <= 500
- -10^4 <= lists[i][j] <= 10^4
- All lists are sorted in ascending order`,
    examples: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' },
      { input: 'lists = []', output: '[]' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['heap', 'linked-list', 'divide-and-conquer'],
    hints: [
      'Push the head of every list into a min-heap keyed by node value.',
      'Each time you pop the minimum node, push its next node (if any) into the heap.',
      'This runs in O(N log k) where N is total nodes and k is number of lists.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Skyline Constructor',
    prompt: `An urban planner receives building specifications — each building is a rectangle defined by left edge, right edge, and height. She needs to output the skyline: the critical points where the silhouette changes height.

Given a list of buildings \`[left, right, height]\`, return the skyline as a list of \`[x, height]\` critical points.`,
    constraints: `- 1 <= buildings.length <= 10^4
- 0 <= left_i < right_i <= 2^31 - 1
- 1 <= height_i <= 2^31 - 1
- buildings are sorted by left edge`,
    examples: [
      { input: 'buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]', output: '[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['heap', 'sorting', 'sweep-line'],
    hints: [
      'Sweep line: collect all left/right edges as events. At each x, track active building heights.',
      'Use a max-heap of active building heights. Add height on left edge; remove on right edge.',
      'If the max height changes after processing an event, record [x, newMaxHeight].',
    ],
  },

  // ── Hash Map (easy/medium/hard additions) ─────────────────────
  {
    patternSlug: 'hash-map',
    title: 'The Debt Resolver',
    prompt: `A treasury agent has a list of transactions and needs to find two amounts that sum to a target value. She works with unsorted data and needs an O(n) solution.

Given an integer array \`nums\` and an integer \`target\`, return the indices of the two numbers that add up to target.`,
    constraints: `- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- Only one valid answer exists`,
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['hash-map', 'array'],
    hints: [
      'For each number, what complement would complete the pair?',
      'Store each number and its index in a hash map as you scan.',
      'Before storing nums[i], check if target - nums[i] already exists in the map.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Lone Transmitter',
    prompt: `A communications analyst receives an array of signal IDs. All IDs appear exactly twice except one rogue transmitter. Identify the rogue — in O(n) time and O(1) space.

Given a non-empty integer array \`nums\` where every element appears twice except one, return the singleton.`,
    constraints: `- 1 <= nums.length <= 3 * 10^4
- -3 * 10^4 <= nums[i] <= 3 * 10^4
- Each element appears exactly twice except one`,
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['hash-map', 'bit-manipulation', 'array'],
    hints: [
      'A hash map counting frequencies works in O(n) time but O(n) space.',
      'Can you do it in O(1) space? Think about what XOR does to duplicate values.',
      'XOR of all elements: duplicates cancel out, leaving only the singleton.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Anagram Cluster',
    prompt: `A linguistics analyst groups a list of words by their anagram family — words that are anagrams of each other form one cluster.

Given an array of strings \`strs\`, group all anagrams together and return the groups in any order.`,
    constraints: `- 1 <= strs.length <= 10^4
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters`,
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { input: 'strs = [""]', output: '[[""]]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['hash-map', 'string', 'sorting'],
    hints: [
      'Anagrams have the same character frequency signature.',
      'Sort each word\'s characters to get a canonical key, then group by key.',
      'Alternatively, use a character count tuple as the key to avoid sorting.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Subarray Zero Sum',
    prompt: `A financial auditor scans a ledger for any contiguous subarray that nets to zero — a sign of fraud. She must detect it in one pass.

Given an integer array \`nums\`, return \`true\` if any contiguous subarray sums to 0.`,
    constraints: `- 1 <= nums.length <= 10^4
- -10^5 <= nums[i] <= 10^5`,
    examples: [
      { input: 'nums = [4,2,-3,-1,0,4]', output: 'true', explanation: 'Subarray [2,-3,-1,0,2] sums to 0.' },
      { input: 'nums = [4,2,0,1,6]', output: 'true', explanation: 'Single element 0.' },
      { input: 'nums = [1,2,3]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['hash-map', 'array', 'prefix-sum'],
    hints: [
      'Track prefix sums as you scan. What does seeing the same prefix sum twice imply?',
      'If prefix[i] == prefix[j] for i < j, then the subarray (i,j] sums to zero.',
      'Store prefix sums in a set; if the current prefix sum was seen before, return true.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Longest Contiguous Broadcast',
    prompt: `A signal analyst wants the longest contiguous subarray whose elements sum to exactly \`k\` — to identify the most sustained broadcast at target power.

Given an integer array \`nums\` and integer \`k\`, return the length of the longest subarray with sum equal to \`k\`.`,
    constraints: `- 1 <= nums.length <= 2 * 10^4
- -10^4 <= nums[i] <= 10^4
- -10^7 <= k <= 10^7`,
    examples: [
      { input: 'nums = [1,1,1], k = 2', output: '2' },
      { input: 'nums = [1,2,3], k = 3', output: '2' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['hash-map', 'array', 'prefix-sum'],
    hints: [
      'Use prefix sums. If prefix[j] - prefix[i] == k, subarray (i,j] has sum k.',
      'Store the first occurrence index of each prefix sum in a hash map.',
      'For each j, check if (prefix[j] - k) exists in the map and update max length.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Continuous Sequence Finder',
    prompt: `A data analyst searches for the longest consecutive sequence in an unsorted dataset — in O(n) time, not O(n log n).

Given an unsorted integer array \`nums\`, return the length of the longest consecutive element sequence.`,
    constraints: `- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9`,
    examples: [
      { input: 'nums = [100,4,200,1,3,2]', output: '4', explanation: 'Sequence [1,2,3,4].' },
      { input: 'nums = [0,3,7,2,5,8,4,6,0,1]', output: '9' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['hash-map', 'array'],
    hints: [
      'Put all numbers in a hash set. For O(n): only start counting from a sequence\'s first element.',
      'A number x is the start of a sequence if x-1 is NOT in the set.',
      'From each start, count consecutive integers x, x+1, x+2, ... that exist in the set.',
    ],
  },

  // ── Monotonic Stack (easy/medium/hard additions) ───────────────
  {
    patternSlug: 'monotonic-stack',
    title: 'The Next Signal Spike',
    prompt: `A data analyst monitors a circular array of sensor readings. For each reading, she wants to know the next larger reading that appears later (wrapping around the circle if needed). Return -1 if no larger reading exists.

Given an integer array \`nums\` (circular), return an array where result[i] is the next greater element for nums[i]. Use -1 if none exists.`,
    constraints: `- 1 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9`,
    examples: [
      { input: 'nums = [1,2,1]', output: '[2,-1,2]' },
      { input: 'nums = [1,2,3,4,3]', output: '[2,3,4,-1,4]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'For the circular case, simulate two passes over the array (iterate 2n times with index mod n).',
      'Maintain a monotonic decreasing stack of indices.',
      'When nums[i] > nums[stack.top()], pop and set that index\'s result to nums[i].',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Warmer Day Forecaster',
    prompt: `A meteorologist has daily temperature records. For each day, she wants to know how many days you must wait until a warmer temperature. If no warmer day ever comes, the answer is 0.

Given an array \`temperatures\`, return an array \`answer\` where \`answer[i]\` is the number of days to wait for a warmer temperature after day \`i\`.`,
    constraints: `- 1 <= temperatures.length <= 10^5
- 30 <= temperatures[i] <= 100`,
    examples: [
      { input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]' },
      { input: 'temperatures = [30,40,50,60]', output: '[1,1,1,0]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'For each day, you want the index of the next warmer day — the next greater element problem.',
      'Maintain a stack of indices with decreasing temperatures.',
      'When a warmer day arrives, pop the stack and record the distance.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Tallest Box Stack',
    prompt: `A warehouse robot stacks rectangular boxes of various widths and heights in a row. An engineer wants to know the area of the largest rectangle that can be formed using contiguous boxes (treating them as histogram bars).

Given an array \`heights\` representing a histogram, return the area of the largest rectangle.`,
    constraints: `- 1 <= heights.length <= 10^5
- 0 <= heights[i] <= 10^4`,
    examples: [
      { input: 'heights = [2,1,5,6,2,3]', output: '10', explanation: 'Rectangle of height 5, width 2 (indices 2-3).' },
      { input: 'heights = [2,4]', output: '4' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'For each bar, find the nearest smaller bar to its left and right — that defines the rectangle it can span.',
      'A monotonic increasing stack lets you find left and right boundaries in O(n) total.',
      'When you pop bar h, its right boundary is the current index and left boundary is the new stack top.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Maximal Fortress',
    prompt: `A defense planner analyzes a binary grid. She wants to find the largest rectangular region of 1s that could serve as a fortress floor.

Given a binary matrix \`matrix\` of 0s and 1s, return the area of the largest rectangle containing only 1s.`,
    constraints: `- rows == matrix.length
- cols == matrix[0].length
- 1 <= rows, cols <= 200
- matrix[i][j] is '0' or '1'`,
    examples: [
      { input: 'matrix=[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', output: '6' },
      { input: 'matrix=[["0"]]', output: '0' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['monotonic-stack', 'dynamic-programming', 'matrix'],
    hints: [
      'Build a heights array for each row: heights[j] = consecutive 1s ending at this row in column j.',
      'Then apply the largest rectangle in histogram algorithm on each row\'s heights.',
      'This reduces the 2D problem to n applications of the 1D histogram problem.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Stock Span Oracle',
    prompt: `A stock analyst calculates the "span" of each day\'s stock price — the maximum number of consecutive days (up to and including today) for which the price was less than or equal to today\'s price.

Given a stream of stock prices, return the span for each day.`,
    constraints: `- 1 <= prices.length <= 10^5
- 1 <= prices[i] <= 10^5`,
    examples: [
      { input: 'prices = [100,80,60,70,60,75,85]', output: '[1,1,1,2,1,4,6]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'The span for today is 1 + span of the last day with a strictly higher price.',
      'Maintain a monotonic decreasing stack of (price, span) pairs.',
      'When today\'s price >= stack top, pop and accumulate its span into today\'s count.',
    ],
  },

  // ── Union Find (easy/medium/hard additions) ────────────────────
  {
    patternSlug: 'union-find',
    title: 'The Network Prober',
    prompt: `A network engineer receives a list of direct connections between nodes and a series of queries asking whether two nodes can communicate (directly or indirectly). She needs a fast online data structure for both union and find operations.

Given \`n\` nodes (0-indexed), an array of \`edges\`, and \`queries\` asking if two nodes are connected, return a boolean array of answers.`,
    constraints: `- 1 <= n <= 10^5
- 0 <= edges.length <= 10^5
- 0 <= queries.length <= 10^4
- All edge endpoints are in range [0, n-1]`,
    examples: [
      { input: 'n=6, edges=[[0,1],[1,2],[3,4]], queries=[[0,2],[3,5],[0,3]]', output: '[true,false,false]' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['union-find', 'graph'],
    hints: [
      'Union-Find (Disjoint Set Union) answers "are these two nodes in the same component?" in near O(1).',
      'Implement path compression in find() and union by rank.',
      'For each query, check if find(a) == find(b).',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Friendship Circles',
    prompt: `A social graph analyst counts distinct friend groups. Two people are in the same group if they are directly or transitively connected. Return the number of distinct groups.

Given \`n\` people and a list of friendship \`edges\`, return the number of connected components.`,
    constraints: `- 1 <= n <= 2000
- 0 <= edges.length <= n*(n-1)/2
- edges[i].length == 2
- No self-loops, no duplicate edges`,
    examples: [
      { input: 'n=5, edges=[[0,1],[1,2],[3,4]]', output: '2' },
      { input: 'n=5, edges=[[0,1],[1,2],[2,3],[3,4]]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['union-find', 'graph', 'dfs'],
    hints: [
      'Initialize n separate components. Union them as you process edges.',
      'Count components by tracking how many union operations actually merged two different sets.',
      'Alternatively, count distinct root values after all unions.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Redundant Link Detector',
    prompt: `A network architect adds cables one at a time to a tree network. One cable creates a cycle — making it redundant. Find and return that redundant cable.

Given a graph that started as a tree with \`n\` nodes and has one extra edge added, return the redundant edge.`,
    constraints: `- n == edges.length
- 3 <= n <= 1000
- edges[i].length == 2
- 1 <= u_i < v_i <= n
- All edges are unique`,
    examples: [
      { input: 'edges = [[1,2],[1,3],[2,3]]', output: '[2,3]' },
      { input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]', output: '[1,4]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['union-find', 'graph'],
    hints: [
      'Process edges one at a time. If both endpoints are already connected, this edge is redundant.',
      'Union-Find: if find(u) == find(v) before union, return this edge.',
      'Otherwise union them and continue.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Minimum Span Network',
    prompt: `A city planner must connect \`n\` districts with roads at minimum total cost. Each potential road has a cost. Find the minimum spanning tree cost using Kruskal\'s algorithm.

Given \`n\` nodes and edges with weights \`[u, v, cost]\`, return the minimum cost to connect all nodes (or -1 if impossible).`,
    constraints: `- 1 <= n <= 10^4
- 0 <= edges.length <= 10^4
- edges[i].length == 3
- 0 <= cost_i <= 10^5`,
    examples: [
      { input: 'n=4, edges=[[0,1,1],[1,2,2],[0,2,4],[2,3,3]]', output: '6', explanation: 'Use edges (0,1),(1,2),(2,3).' },
      { input: 'n=4, edges=[[0,1,1],[1,2,2],[2,3,3]]', output: '6' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['union-find', 'graph', 'greedy', 'sorting'],
    hints: [
      'Kruskal\'s: sort edges by cost, then greedily add the cheapest edge that doesn\'t form a cycle.',
      'Use Union-Find to detect cycles: if find(u) == find(v), the edge creates a cycle.',
      'Stop when n-1 edges have been added. If fewer edges are available, return -1.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Account Consolidator',
    prompt: `A financial platform receives lists of email accounts. If two accounts share any email, they belong to the same person and should be merged. Return the merged accounts sorted.

Given a list of accounts (each is [name, email1, email2, ...]), merge accounts sharing any email. Return sorted merged accounts.`,
    constraints: `- 1 <= accounts.length <= 1000
- 2 <= accounts[i].length <= 10
- 1 <= accounts[i][j].length <= 30
- accounts[i][0] is a name string`,
    examples: [
      { input: 'accounts=[["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]', output: '[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['union-find', 'hash-map', 'sorting'],
    hints: [
      'Assign an ID to each email. Union all emails in the same account together.',
      'After all unions, group emails by their root ID.',
      'Sort each group and prepend the account name.',
    ],
  },

  // ── Trie (easy/medium/hard additions) ─────────────────────────
  {
    patternSlug: 'trie',
    title: 'The Common Root Scanner',
    prompt: `A compiler finds the longest common prefix shared by all strings in a list — to optimize symbol table lookups.

Given an array of strings \`strs\`, return the longest common prefix string. If none exists, return an empty string.`,
    constraints: `- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of lowercase English letters`,
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['trie', 'string'],
    hints: [
      'The answer can be at most as long as the shortest string.',
      'Compare characters column by column: if all strings have the same character at position i, include it.',
      'Stop as soon as characters differ or any string is exhausted.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Autocomplete Engine',
    prompt: `A search engine needs an autocomplete system. Given a list of product names and a search prefix, return all names that start with the prefix, sorted lexicographically.

Implement a function that, given a list of words and a prefix, returns all words that start with the prefix.`,
    constraints: `- 1 <= words.length <= 10^4
- 1 <= words[i].length, prefix.length <= 100
- All strings consist of lowercase English letters`,
    examples: [
      { input: 'words = ["mobile","mouse","moneypot","monitor","mousepad"], prefix = "mo"', output: '["mobile","moneypot","monitor","mouse","mousepad"]' },
      { input: 'words = ["havana"], prefix = "tatiana"', output: '[]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['trie', 'string', 'sorting'],
    hints: [
      'Build a trie from all words. Navigate to the prefix node.',
      'From the prefix node, collect all words reachable by DFS.',
      'Sort the collected words lexicographically before returning.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Spell Checker',
    prompt: `A real-time spell checker needs to insert words into a dictionary, check if a word exists, and check if any word starts with a given prefix.

Implement a Trie class with \`insert(word)\`, \`search(word)\` (exact match), and \`startsWith(prefix)\` methods.`,
    constraints: `- 1 <= word.length, prefix.length <= 2000
- All strings consist of lowercase English letters
- At most 3 * 10^4 operations total`,
    examples: [
      { input: 'insert("apple"); search("apple"); search("app"); startsWith("app"); insert("app"); search("app")', output: 'true; false; true; true' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['trie', 'design', 'string'],
    hints: [
      'A Trie node stores children (array or map of 26 letters) and a boolean isEndOfWord.',
      'insert: walk the trie, creating nodes as needed; mark the last node as end.',
      'search and startsWith share the traversal logic — the only difference is what you check at the end.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Word Phantom',
    prompt: `A puzzle master adds words to a board and allows wildcard searches where \'.\' matches any letter. Implement a system that supports both exact-word adds and wildcard lookups.

Design a data structure with \`addWord(word)\` and \`search(word)\` where \'.\' matches any single character.`,
    constraints: `- 1 <= word.length <= 25
- word in addWord consists of lowercase English letters
- word in search consists of lowercase letters or '.'
- At most 10^4 calls total`,
    examples: [
      { input: 'addWord("bad"); addWord("dad"); addWord("mad"); search("pad"); search("bad"); search(".ad"); search("b..")', output: 'false; true; true; true' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['trie', 'dfs', 'design'],
    hints: [
      'Build a standard Trie for addWord.',
      'For search with \'.\': at that character, recursively try all 26 child branches.',
      'Use DFS through the trie; the \'.\' case fans out to all existing children.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Max XOR Frequency',
    prompt: `A cryptographer wants to find the maximum XOR of any two numbers in an array — to measure the maximum bitwise "distance" between any pair.

Given an integer array \`nums\`, return the maximum XOR of any two numbers in the array.`,
    constraints: `- 1 <= nums.length <= 2 * 10^5
- 0 <= nums[i] <= 2^31 - 1`,
    examples: [
      { input: 'nums = [3,10,5,25,2,8]', output: '28', explanation: '5 XOR 25 = 28.' },
      { input: 'nums = [14,70,53,83,49,91,36,80,92,51,66,70]', output: '127' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['trie', 'bit-manipulation'],
    hints: [
      'Insert all numbers into a binary trie (bit by bit, from MSB to LSB).',
      'For each number, greedily traverse the trie choosing the opposite bit when possible.',
      'The greedy path maximizes XOR bit by bit from the most significant bit.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Word Grid Hunter',
    prompt: `A cryptanalyst searches a letter grid for hidden words from a target list. Words can be formed by adjacent cells (up, down, left, right) and each cell can be used at most once per word.

Given an m×n character grid and a list of strings \`words\`, return all words from the list found in the grid.`,
    constraints: `- m == board.length, n == board[i].length
- 1 <= m, n <= 12
- board[i][j] is a lowercase English letter
- 1 <= words.length <= 3 * 10^4
- 1 <= words[i].length <= 10`,
    examples: [
      { input: 'board=[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words=["oath","pea","eat","rain"]', output: '["eat","oath"]' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['trie', 'dfs', 'backtracking', 'matrix'],
    hints: [
      'Build a Trie from all target words. Then DFS from every grid cell.',
      'At each DFS step, check if the current character exists in the trie node\'s children.',
      'When a word-end flag is reached, record the word and remove it from the trie to avoid duplicates.',
    ],
  },

  // ── Fast-Slow Pointers (easy/medium/hard additions) ─────────────
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Cycle Lookout',
    prompt: `A network watchdog monitors a linked list of routing hops. It needs to quickly determine whether any hop eventually loops back — creating an infinite routing cycle.

Given the head of a linked list, return \`true\` if there is a cycle.`,
    constraints: `- 0 <= number of nodes <= 10^4
- -10^5 <= Node.val <= 10^5
- pos is -1 (no cycle) or a valid index`,
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'Tail connects back to node at index 1.' },
      { input: 'head = [1,2], pos = -1', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Move one pointer one step and the other two steps per iteration.',
      'If they ever meet, there is a cycle.',
      'If the fast pointer reaches null, there is no cycle.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Midpoint Locator',
    prompt: `A message relay splits a linked list at the midpoint to send to two parallel processors. Find the middle node — if two middle nodes exist, return the second one.

Given the head of a singly linked list, return the middle node.`,
    constraints: `- 1 <= number of nodes <= 100
- 1 <= Node.val <= 100`,
    examples: [
      { input: 'head = [1,2,3,4,5]', output: 'Node 3', explanation: 'Middle of 5 nodes.' },
      { input: 'head = [1,2,3,4,5,6]', output: 'Node 4', explanation: 'Two middle nodes; return the second.' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Move slow one step and fast two steps per iteration.',
      'When fast reaches the end, slow is at the middle.',
      'For an even-length list, the fast pointer\'s null check determines which middle you land on.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Happy Number Probe',
    prompt: `A numerological analyzer checks whether a number is "happy": repeatedly replace the number with the sum of squares of its digits. If you reach 1, it is happy. If you cycle forever without reaching 1, it is not.

Given a positive integer \`n\`, return \`true\` if it is a happy number.`,
    constraints: `- 1 <= n <= 2^31 - 1`,
    examples: [
      { input: 'n = 19', output: 'true', explanation: '1^2+9^2=82 -> 8^2+2^2=68 -> ... -> 1.' },
      { input: 'n = 2', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['fast-slow-pointers', 'hash-map', 'math'],
    hints: [
      'The process either terminates at 1 or enters a cycle — classic cycle detection problem.',
      'Model the process as a linked list: next(n) = sumOfSquaredDigits(n).',
      'Use fast/slow pointers: if they meet and the value is 1, it\'s happy; otherwise not.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Nth Relay Cutter',
    prompt: `A network administrator decommissions the nth relay from the end of a chain without knowing the total chain length — in a single traversal.

Given the head of a linked list and integer \`n\`, remove the nth node from the end and return the modified head.`,
    constraints: `- 1 <= number of nodes <= 30
- 0 <= Node.val <= 100
- 1 <= n <= number of nodes`,
    examples: [
      { input: 'head = [1,2,3,4,5], n = 2', output: '[1,2,3,5]' },
      { input: 'head = [1], n = 1', output: '[]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['fast-slow-pointers', 'linked-list', 'two-pointers'],
    hints: [
      'Send fast pointer n steps ahead. Then move both pointers until fast reaches the end.',
      'When fast reaches null, slow is at the node just before the one to remove.',
      'Use a dummy head node to handle the edge case of removing the first node.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Reorder Manifest',
    prompt: `A logistics system must reorder a shipment manifest (linked list) from L0->L1->...->Ln-1->Ln to L0->Ln->L1->Ln-1->L2->Ln-2->... in-place, without modifying node values.

Given the head of a linked list, reorder it in-place as described.`,
    constraints: `- 1 <= number of nodes <= 5 * 10^4
- 1 <= Node.val <= 1000`,
    examples: [
      { input: 'head = [1,2,3,4]', output: '[1,4,2,3]' },
      { input: 'head = [1,2,3,4,5]', output: '[1,5,2,4,3]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Three steps: find the middle, reverse the second half, merge the two halves.',
      'Use fast/slow pointers to find the midpoint.',
      'Merge by alternating nodes from the front and the reversed back half.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Duplicate Frequency Signal',
    prompt: `An analyst receives an array of \`n+1\` integers where each value is between 1 and n inclusive. Exactly one number is repeated. Find the duplicate in O(n) time and O(1) space — no sorting, no modifying the array.

Given array \`nums\` with n+1 elements all in [1,n], return the duplicate number.`,
    constraints: `- 2 <= n <= 3 * 10^4
- nums.length == n + 1
- 1 <= nums[i] <= n
- There is exactly one repeated number`,
    examples: [
      { input: 'nums = [1,3,4,2,2]', output: '2' },
      { input: 'nums = [3,1,3,4,2]', output: '3' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['fast-slow-pointers', 'array', 'binary-search'],
    hints: [
      'Treat the array as a linked list where nums[i] is the "next" pointer from index i.',
      'The duplicate creates a cycle in this implicit linked list — use Floyd\'s cycle detection.',
      'The entry point of the cycle is the duplicate number.',
    ],
  },
  ...PROBLEMS_BATCH_2,
  ...PROBLEMS_BATCH_3,
  ...PROBLEMS_BATCH_4,
  ...PROBLEMS_BATCH_5,
  ...PROBLEMS_BATCH_6,
  ...PROBLEMS_BATCH_7,
  ...PROBLEMS_BATCH_8,
]
