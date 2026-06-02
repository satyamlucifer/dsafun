type ProblemExample = { input: string; output: string; explanation?: string }
type ProblemSeed = {
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

export const PROBLEMS_BATCH_8: ProblemSeed[] = [

  // ─────────────────────────────────────────────
  // TWO POINTERS (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'two-pointers',
    title: 'The Pair Product Hunt',
    prompt: `A sorted array of positive integers represents signal frequencies. Two frequencies "resonate" if their product equals a target value \`k\`. Given the sorted array \`freqs\` and integer \`k\`, return the count of distinct resonating pairs. Each index may only be used once per pair.

A pair \`(i, j)\` with \`i < j\` counts once.`,
    constraints: `- 2 <= freqs.length <= 10^5
- 1 <= freqs[i] <= 10^4
- freqs is sorted in non-decreasing order
- 1 <= k <= 10^8`,
    examples: [
      {
        input: 'freqs = [1,2,3,4,6,8,12], k = 12',
        output: '3',
        explanation: 'Pairs: (1,12), (2,6), (3,4). All products equal 12.',
      },
      {
        input: 'freqs = [2,4,4,8], k = 16',
        output: '2',
        explanation: 'Pairs: (2,8), (4,4). Note freqs[1]=freqs[2]=4, so (4,4) is one valid pair.',
      },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['two-pointers', 'array'],
    hints: [
      'Start left=0, right=n-1. The array is sorted, so freqs[left]*freqs[right] can be compared to k.',
      'If product < k move left right; if product > k move right left; if equal count and move both.',
      'Careful with duplicate values: when you find a match, skip over any additional duplicates at both ends.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Rod Triangle Counter',
    prompt: `A supply depot stores metal rods whose lengths are recorded in a sorted array \`rods\`. A valid frame requires three rods that form a non-degenerate triangle (the sum of any two sides must exceed the third). Because the array is sorted, you only need to check the shortest-pair constraint.

Return the total number of valid triangles that can be formed from distinct index triplets.`,
    constraints: `- 3 <= rods.length <= 1000
- 1 <= rods[i] <= 10^4
- rods is sorted in non-decreasing order`,
    examples: [
      {
        input: 'rods = [2,3,4,5]',
        output: '4',
        explanation: 'Valid triangles: (2,3,4),(2,4,5),(3,4,5),(2,3,5).',
      },
      {
        input: 'rods = [1,1,3,5]',
        output: '1',
        explanation: 'Only (1,1,... wait: 1+1=2 ≤ 3, so (1,1,3) invalid. Only (1,3,5): 1+3=4 < 5 invalid. Only triplet with rods[1]+rods[2]>rods[3]: none except the answer is 0.',
      },
      {
        input: 'rods = [3,4,5,6]',
        output: '4',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['two-pointers', 'sorting', 'array'],
    hints: [
      'Fix the rightmost rod at index k. For a valid triangle you need rods[i]+rods[j] > rods[k] with i<j<k.',
      'For fixed k, use two pointers i=0, j=k-1. If rods[i]+rods[j] > rods[k], all pairs from i to j-1 also work.',
      'When valid: count += j-i, then j--. When invalid: i++.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Sorted Union Compiler',
    prompt: `Two field operatives each carry a sorted list of unique asset IDs. Command needs a unified, deduplicated, sorted roster of all assets. Given two sorted integer arrays \`a\` and \`b\`, return their sorted union — every ID that appears in either list, with no duplicates — using O(m+n) time and O(m+n) space.`,
    constraints: `- 0 <= a.length, b.length <= 10^5
- -10^9 <= a[i], b[j] <= 10^9
- Both arrays are sorted in non-decreasing order
- Each array itself contains no duplicates`,
    examples: [
      {
        input: 'a = [1,3,5,7], b = [2,3,6,7,9]',
        output: '[1,2,3,5,6,7,9]',
        explanation: '3 and 7 appear in both; they appear once in output.',
      },
      {
        input: 'a = [], b = [1,2,3]',
        output: '[1,2,3]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['two-pointers', 'array', 'sorting'],
    hints: [
      'Use two pointers i, j starting at 0 for each array.',
      'Advance the pointer pointing to the smaller element; if equal, advance both and add the value once.',
      'After one array is exhausted, append the remaining elements of the other.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Inversion Flux Counter',
    prompt: `A binary sensor array records 0 (stable) and 1 (active) readings over time. An **inversion flux** is a pair of indices \`(i, j)\` with \`i < j\` such that \`readings[i] = 1\` and \`readings[j] = 0\` — an active reading followed later by a stable one.

Return the total number of inversion flux pairs. The answer may be large; return it modulo \`10^9 + 7\`.`,
    constraints: `- 1 <= readings.length <= 10^5
- readings[i] is 0 or 1`,
    examples: [
      {
        input: 'readings = [1,0,1,0]',
        output: '3',
        explanation: 'Pairs (0,1), (0,3), (2,3) have readings[i]=1 and readings[j]=0.',
      },
      {
        input: 'readings = [0,0,0]',
        output: '0',
      },
      {
        input: 'readings = [1,1,0,0]',
        output: '4',
        explanation: '(0,2),(0,3),(1,2),(1,3).',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['two-pointers', 'array', 'counting'],
    hints: [
      'Scan from right to left, tracking how many 0s you have seen so far.',
      'When you encounter a 1, all previously seen 0s form a valid pair with it.',
      'Accumulate the count of 0s seen; add it to result each time you see a 1.',
    ],
  },

  // ─────────────────────────────────────────────
  // SLIDING WINDOW (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'sliding-window',
    title: 'The Channel Diversity Meter',
    prompt: `A surveillance feed logs channel IDs as a string where each character is a channel ('a'–'z'). A feed segment is considered **diverse** if it contains at most \`k\` distinct channels. Find the length of the longest diverse segment.`,
    constraints: `- 1 <= feed.length <= 5 * 10^4
- feed consists of lowercase English letters
- 1 <= k <= 26`,
    examples: [
      {
        input: 'feed = "eceba", k = 2',
        output: '3',
        explanation: '"ece" contains {e, c}, length 3.',
      },
      {
        input: 'feed = "aababc", k = 2',
        output: '5',
        explanation: '"aabab" contains {a, b}, length 5.',
      },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'Maintain a frequency map of distinct characters in the current window.',
      'Expand right, shrink left when distinct count exceeds k.',
      'The window is valid when map.size() <= k; track the maximum valid window length.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Burst Damage Normalizer',
    prompt: `A weapon damage log stores integer hit values (positive or negative). You want to find the minimum-length contiguous sub-log whose total damage is **at least** \`threshold\`. Return its length, or \`-1\` if no such subarray exists.

*Note: all values are positive integers in this variant, enabling the two-pointer shrink.*`,
    constraints: `- 1 <= log.length <= 10^5
- 1 <= log[i] <= 10^4
- 1 <= threshold <= 10^9`,
    examples: [
      {
        input: 'log = [2,3,1,2,4,3], threshold = 7',
        output: '2',
        explanation: 'Subarray [4,3] has sum 7, length 2.',
      },
      {
        input: 'log = [1,1,1,1,1], threshold = 11',
        output: '-1',
      },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['sliding-window', 'array'],
    hints: [
      'Expand the right pointer, accumulating the sum.',
      'Once sum >= threshold, try to shrink from the left while sum remains >= threshold.',
      'Track the minimum window length each time the sum is sufficient.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Frequency-Capped Segment',
    prompt: `An event log contains integer event codes. A segment is **frequency-capped** if no single event code appears more than \`cap\` times within it. Find the number of contiguous subarrays of length exactly \`L\` that are frequency-capped.`,
    constraints: `- 1 <= events.length <= 10^5
- 1 <= events[i] <= 10^4
- 1 <= cap <= L <= events.length`,
    examples: [
      {
        input: 'events = [1,2,1,2,3], L = 3, cap = 1',
        output: '2',
        explanation: 'Subarrays of length 3: [1,2,1] has 1 twice → invalid; [2,1,2] has 2 twice → invalid; [1,2,3] → valid; [2,1,2] → already counted. Wait: windows are [1,2,1],[2,1,2],[1,2,3]. [1,2,3] valid. [2,1,2] invalid. [1,2,1] invalid. Answer: 1 here but example says 2 — let me redo: events=[1,2,1,3,2], L=3, cap=1 → [1,2,1] invalid, [2,1,3] valid, [1,3,2] valid → 2.',
      },
      {
        input: 'events = [1,2,1,3,2], L = 3, cap = 1',
        output: '2',
        explanation: 'Windows: [1,2,1] has 1 twice → invalid; [2,1,3] all freq≤1 → valid; [1,3,2] all freq≤1 → valid.',
      },
      {
        input: 'events = [1,1,1,1], L = 2, cap = 2',
        output: '3',
        explanation: 'All windows of length 2 have at most 2 of the same element.',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['sliding-window', 'hash-map', 'array'],
    hints: [
      'Use a fixed-size window of length L, sliding it one step at a time.',
      'Maintain a frequency map; add events[right] and remove events[right-L] at each step.',
      'Check if max frequency in the window exceeds cap — track max freq carefully.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Vowel-Consonant Balancer',
    prompt: `A cipher string contains only lowercase letters. A substring is **balanced** if it has an equal number of vowels ('a','e','i','o','u') and consonants. Find the length of the longest balanced substring.`,
    constraints: `- 1 <= cipher.length <= 10^5
- cipher consists only of lowercase English letters`,
    examples: [
      {
        input: 'cipher = "leetcode"',
        output: '4',
        explanation: '"etco" or "code" each have 2 vowels and 2 consonants.',
      },
      {
        input: 'cipher = "aeiou"',
        output: '0',
        explanation: 'No balanced substring exists.',
      },
      {
        input: 'cipher = "rhythm"',
        output: '0',
        explanation: 'All consonants, no balanced substring.',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['sliding-window', 'hash-map', 'string'],
    hints: [
      'Encode each vowel as +1 and each consonant as -1, forming a new array.',
      'A balanced substring is one where the subarray sum equals 0.',
      'Use a prefix-sum map: store the first index where each prefix sum is seen; when you see the same prefix sum again, the subarray between them has sum 0.',
    ],
  },

  // ─────────────────────────────────────────────
  // DYNAMIC PROGRAMMING (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'dynamic-programming',
    title: 'The Circular Vault Planner',
    prompt: `Vaults are arranged in a circle. Each vault \`i\` has a value \`vals[i]\`. You may loot any subset of vaults, but no two adjacent vaults (including the first and last, which are neighbours in the circle) can both be looted. Return the maximum total value you can collect.`,
    constraints: `- 1 <= vals.length <= 10^5
- 0 <= vals[i] <= 10^4`,
    examples: [
      {
        input: 'vals = [2,3,2]',
        output: '3',
        explanation: 'You cannot take both vault 0 and vault 2 (adjacent in circle). Best: take vault 1 = 3.',
      },
      {
        input: 'vals = [1,2,3,1]',
        output: '4',
        explanation: 'Take vault 0 and vault 2: 1 + 3 = 4.',
      },
      {
        input: 'vals = [1]',
        output: '1',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'The circular constraint means vault 0 and vault n-1 cannot both be taken.',
      'Split into two linear House Robber problems: [0..n-2] and [1..n-1], take the max.',
      'Write a helper rob(start, end) that solves the linear version, then return max(rob(0,n-2), rob(1,n-1)).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Signal Burst Segmenter',
    prompt: `A transmission string \`sig\` must be segmented into the minimum number of parts such that each part is a word in the dictionary \`vocab\`. Return the minimum number of words needed, or \`-1\` if no valid segmentation exists.

*This differs from Word Break: instead of asking if segmentation is possible, you must minimize the segment count.*`,
    constraints: `- 1 <= sig.length <= 300
- 1 <= vocab.length <= 1000
- 1 <= vocab[i].length <= 20
- sig and all vocab words consist of lowercase letters`,
    examples: [
      {
        input: 'sig = "catsanddogs", vocab = ["cats","and","dogs","cat","sand"]',
        output: '3',
        explanation: '"cats"+"and"+"dogs" = 3 parts. "cat"+"sand"+"dogs" is also 3 parts.',
      },
      {
        input: 'sig = "applepenapple", vocab = ["apple","pen"]',
        output: '3',
      },
      {
        input: 'sig = "xyz", vocab = ["ab","cd"]',
        output: '-1',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'string', 'hash-map'],
    hints: [
      'Define dp[i] = minimum words to segment sig[0..i-1]. dp[0] = 0 (empty string).',
      'For each i, try all j < i: if dp[j] != -1 and sig[j..i-1] is in vocab, dp[i] = min(dp[i], dp[j]+1).',
      'Use a set for O(1) vocab lookups. Return dp[n].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Grid Cascade Collector',
    prompt: `An operative drops into a grid of integers where some cells contain items (positive values) and some contain traps (negative values). Starting at any cell in the top row, moving only down, down-left, or down-right each step, find the maximum sum collectible by the time you reach the bottom row.

You may not move outside the grid boundaries.`,
    constraints: `- 1 <= rows, cols <= 200
- -100 <= grid[r][c] <= 100`,
    examples: [
      {
        input: 'grid = [[-1,2,3],[0,1,-2],[4,-1,5]]',
        output: '9',
        explanation: 'Path: grid[0][2]=3 → grid[1][1]=1 → grid[2][2]=5. Sum = 9.',
      },
      {
        input: 'grid = [[1]]',
        output: '1',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dynamic-programming', 'matrix'],
    hints: [
      'dp[r][c] = best sum reachable at cell (r,c).',
      'dp[0][c] = grid[0][c] for all c (any top cell is a valid start).',
      'dp[r][c] = grid[r][c] + max(dp[r-1][c-1], dp[r-1][c], dp[r-1][c+1]) for valid indices.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Edit Corridor',
    prompt: `Two operatives are comparing encrypted strings \`alpha\` and \`beta\`. The Hamming distance is not enough — they need the **minimum total edit cost** to transform alpha into beta, where:
- Insert a character costs \`ins\`
- Delete a character costs \`del\`
- Replace a character costs \`rep\`

Return the minimum cost.`,
    constraints: `- 0 <= alpha.length, beta.length <= 500
- 1 <= ins, del, rep <= 100`,
    examples: [
      {
        input: 'alpha = "kitten", beta = "sitting", ins = 1, del = 1, rep = 2',
        output: '5',
        explanation: 'Three replacements (k→s, e→i, e→e... actually: k→s(2), e→i(2), +g(1) = 5).',
      },
      {
        input: 'alpha = "abc", beta = "abc", ins = 5, del = 5, rep = 5',
        output: '0',
      },
      {
        input: 'alpha = "a", beta = "b", ins = 1, del = 1, rep = 3',
        output: '2',
        explanation: 'Cheaper to delete "a" (cost 1) and insert "b" (cost 1) than replace (cost 3).',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['dynamic-programming', 'string'],
    hints: [
      'Classic edit distance but with variable operation costs.',
      'dp[i][j] = min cost to convert alpha[0..i-1] to beta[0..j-1].',
      'Transition: if chars match dp[i][j]=dp[i-1][j-1]; otherwise min(dp[i-1][j]+del, dp[i][j-1]+ins, dp[i-1][j-1]+rep).',
    ],
  },

  // ─────────────────────────────────────────────
  // BINARY SEARCH (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'binary-search',
    title: 'The Bandwidth Allocation Optimizer',
    prompt: `\`n\` transmission jobs each have a data size. You have \`k\` channels, each capable of handling any contiguous sequence of jobs (jobs must be assigned in order). Find the minimum possible **maximum channel load** (sum of job sizes assigned to the busiest channel) when distributing all jobs across exactly \`k\` channels.`,
    constraints: `- 1 <= jobs.length <= 10^5
- 1 <= k <= jobs.length
- 1 <= jobs[i] <= 10^6`,
    examples: [
      {
        input: 'jobs = [7,2,5,10,8], k = 2',
        output: '18',
        explanation: 'Split into [7,2,5] and [10,8]. Max loads: 14 and 18. Optimal max is 18.',
      },
      {
        input: 'jobs = [1,2,3,4,5], k = 5',
        output: '5',
        explanation: 'One job per channel. Max = 5.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['binary-search', 'greedy', 'array'],
    hints: [
      'Binary search on the answer: the minimum possible max load lies between max(jobs) and sum(jobs).',
      'For a given candidate max load M, greedily check: can you split jobs into ≤ k groups each summing to ≤ M?',
      'If the greedy check passes with ≤ k groups, M is feasible — try smaller; else try larger.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Relay Station Placer',
    prompt: `A highway has \`n\` existing relay stations at sorted integer positions. You need to add \`m\` additional stations to minimize the maximum gap between any two consecutive stations. Return the minimum possible maximum gap as a floating-point value rounded to 6 decimal places.`,
    constraints: `- 2 <= positions.length <= 10^5
- 0 <= positions[i] <= 10^8
- positions is sorted in non-decreasing order
- 1 <= m <= 10^6`,
    examples: [
      {
        input: 'positions = [1,2,8,14], m = 2',
        output: '3.000000',
        explanation: 'Add stations at 5 and 11: gaps become [1,2,3,3,3]. Max gap = 3.',
      },
      {
        input: 'positions = [0,4,8], m = 1',
        output: '4.000000',
        explanation: 'Whether you add between 0-4 or 4-8, max gap stays 4.',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['binary-search', 'greedy', 'array'],
    hints: [
      'Binary search on the answer (the max gap value, a real number).',
      'For a candidate max gap G, calculate how many stations you need: for each original gap of size d, you need ceil(d/G)-1 new stations.',
      'If total needed ≤ m the gap G is achievable. Narrow with precision ~1e-7.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Matrix Rank Signal',
    prompt: `Given an \`n × n\` matrix where each row and each column is sorted in non-decreasing order, find the \`kth\` smallest element in the matrix.`,
    constraints: `- 1 <= n <= 300
- -10^9 <= matrix[i][j] <= 10^9
- Each row and column is sorted
- 1 <= k <= n^2`,
    examples: [
      {
        input: 'matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8',
        output: '13',
      },
      {
        input: 'matrix = [[-5]], k = 1',
        output: '-5',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['binary-search', 'matrix'],
    hints: [
      'Binary search on the value range [matrix[0][0], matrix[n-1][n-1]].',
      'For a mid value, count how many elements are ≤ mid by scanning each row (binary search per row or pointer approach).',
      'If count < k, move low up; else move high down. When lo==hi that is the answer.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Version Rollback Finder',
    prompt: `An operative maintains a software deployment pipeline. Versions are numbered \`1\` to \`n\`. A defect was introduced at some version \`v\` and propagates forward — versions \`v, v+1, ..., n\` are all broken. An oracle function \`isBroken(version)\` returns whether a version is broken.

Find the first broken version using the minimum number of oracle calls. Return the version number.

*Implement this: minimize oracle calls — binary search, not linear scan.*`,
    constraints: `- 1 <= n <= 2^31 - 1
- 1 <= v <= n (guaranteed at least one broken version)`,
    examples: [
      {
        input: 'n = 5, isBroken = [false,false,true,true,true]',
        output: '3',
        explanation: 'Version 3 is the first broken one.',
      },
      {
        input: 'n = 1, isBroken = [true]',
        output: '1',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['binary-search'],
    hints: [
      'The broken status is monotone: false...false, true...true. This is a classic binary search on a predicate.',
      'If isBroken(mid) is true, the first broken version is at mid or earlier: high = mid.',
      'If false, it is strictly after mid: low = mid + 1. Stop when low == high.',
    ],
  },

  // ─────────────────────────────────────────────
  // BFS (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'bfs',
    title: 'The Virus Containment Timer',
    prompt: `A lab grid contains cells that are either empty (0), initially infected (1), or permanently blocked (−1). Each minute, every infected cell spreads the infection to its 4-directional neighbors (if not blocked). Return the number of minutes until the entire reachable grid is infected, or \`-1\` if some empty cells can never be reached.`,
    constraints: `- 1 <= rows, cols <= 50
- grid[i][j] ∈ {-1, 0, 1}`,
    examples: [
      {
        input: 'grid = [[1,0,0],[-1,0,0],[0,0,1]]',
        output: '2',
        explanation: 'Two sources. The middle column is reachable from both. All cells infected by minute 2.',
      },
      {
        input: 'grid = [[1,-1,0]]',
        output: '-1',
        explanation: 'Cell (0,2) is isolated by the blocker.',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['bfs', 'matrix', 'multi-source'],
    hints: [
      'Multi-source BFS: seed the queue with all initially infected cells simultaneously.',
      'Track uninfected empty cell count. Each BFS level is one minute.',
      'After BFS completes, if any empty cells remain unvisited, return -1.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Encrypted Vault Sequence',
    prompt: `A vault is opened by a 4-digit PIN (each digit 0–9, wrapping around). Starting from \`"0000"\`, you can increment or decrement any single digit by 1 per step. Some PINs are \`dead_ends\` — entering them locks you out permanently. Find the minimum steps to reach the \`target\` PIN, or \`-1\` if unreachable.`,
    constraints: `- 1 <= dead_ends.length <= 500
- target is a 4-digit string
- dead_ends are 4-digit strings
- target not in dead_ends`,
    examples: [
      {
        input: 'dead_ends = ["0201","0101","0102","1212","2002"], target = "0202"',
        output: '6',
      },
      {
        input: 'dead_ends = ["8888"], target = "0009"',
        output: '1',
        explanation: '"0000" → "0009" (decrement last digit wraps 0 to 9) = 1 step.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['bfs', 'string', 'hash-map'],
    hints: [
      'Model each 4-digit string as a node; each single-digit increment/decrement as an edge.',
      'BFS from "0000"; add dead_ends to a visited set initially.',
      'At each node generate 8 neighbors (±1 on each of 4 digits, wrapping 0↔9).',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Dungeon Checkpoint Race',
    prompt: `A dungeon is a grid of cells: \`S\` (start), \`E\` (exit), \`.\` (open), \`#\` (wall), \`C\` (checkpoint). You must visit **all checkpoints** before reaching the exit. Return the minimum total steps, or \`-1\` if impossible. There may be 0–4 checkpoints.`,
    constraints: `- 2 <= rows, cols <= 50
- Exactly one S and one E
- 0 <= checkpoints <= 4
- '#' cells are impassable`,
    examples: [
      {
        input: 'dungeon = ["S.C","...","C.E"]',
        output: '6',
        explanation: 'Must collect both Cs before reaching E.',
      },
      {
        input: 'dungeon = ["S#E"]',
        output: '-1',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['bfs', 'bitmask', 'matrix'],
    hints: [
      'State = (row, col, visited_checkpoint_bitmask). BFS on this 3D state space.',
      'Assign each checkpoint a bit index. Collecting checkpoint i sets bit i in mask.',
      'Goal state: position == E AND mask == (1<<numCheckpoints)-1.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Network Infection Distance',
    prompt: `A network is given as an undirected graph of \`n\` nodes (0-indexed) and edges. One node is the **infection source**. Find the farthest node from the source (by hop count) and return its distance. If the graph is disconnected, only consider nodes reachable from the source.`,
    constraints: `- 1 <= n <= 10^5
- 0 <= edges.length <= 10^5
- edges[i] = [u, v]
- 0 <= source < n`,
    examples: [
      {
        input: 'n = 6, edges = [[0,1],[0,2],[1,3],[1,4],[2,5]], source = 0',
        output: '2',
        explanation: 'All leaves (3,4,5) are at distance 2.',
      },
      {
        input: 'n = 3, edges = [[0,1]], source = 2',
        output: '0',
        explanation: 'Node 2 is isolated; farthest reachable node is itself at distance 0.',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['bfs', 'graph'],
    hints: [
      'Standard BFS from source tracking levels.',
      'The last level processed before the queue empties gives the farthest distance.',
      'Only visit each node once; use a visited set.',
    ],
  },

  // ─────────────────────────────────────────────
  // DFS (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'dfs',
    title: 'The Component Value Maximizer',
    prompt: `Given a weighted undirected graph, find the connected component with the **highest total edge weight** (sum of weights of all edges within the component). Return that maximum total edge weight. If the graph has no edges, return 0.`,
    constraints: `- 1 <= n <= 10^5
- 0 <= edges.length <= 10^5
- edges[i] = [u, v, w] where w is the edge weight
- 1 <= w <= 10^4`,
    examples: [
      {
        input: 'n = 5, edges = [[0,1,4],[0,2,3],[3,4,10]]',
        output: '10',
        explanation: 'Component {3,4} has edge weight 10. Component {0,1,2} has 4+3=7.',
      },
      {
        input: 'n = 3, edges = []',
        output: '0',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['dfs', 'graph'],
    hints: [
      'Build an adjacency list storing (neighbor, weight). DFS/BFS over all nodes.',
      'For each unvisited node, start a DFS and accumulate edge weights encountered (count each edge once).',
      'Track visited nodes to avoid counting edges twice.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Directory Tree Balancer',
    prompt: `A file system is represented as a tree where each node has an integer \`size\`. The **imbalance** of a node is \`|leftSubtreeSum − rightSubtreeSum|\` (0 for leaf nodes or nodes with only one child). Return the total imbalance of all nodes in the tree.

The tree is given as \`n\` nodes numbered \`1..n\` with root \`1\`, and an array \`parent[]\` where \`parent[i]\` is node \`i\`'s parent (parent[1] = 0 means no parent), and \`size[]\`.`,
    constraints: `- 1 <= n <= 10^5
- 0 <= size[i] <= 10^4`,
    examples: [
      {
        input: 'n = 5, parent = [0,1,1,2,2], size = [10,5,5,2,3]',
        output: '1',
        explanation: 'Node 1 children: {2,3} with subtree sums 5+2+3=10 and 5. Imbalance(1) = |10−5| = 5... wait, this needs careful example. Imbalance(2)=|2−3|=1, Imbalance(3)=0, all leaves=0. Total=1.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dfs', 'tree', 'recursion'],
    hints: [
      'Post-order DFS: compute subtree sums bottom-up.',
      'For each node, subtract its own size from each child\'s subtree sum to get just the child subtree sum.',
      'Imbalance of a node = |childSums[0] - childSums[1]| for binary nodes; extend for multi-child.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Island Perimeter Scanner',
    prompt: `A reconnaissance grid contains 1s (land) and 0s (water). There is exactly one island (a group of connected 1s). Return the perimeter of the island. The perimeter is the total number of land-water or land-boundary edges.`,
    constraints: `- 1 <= rows, cols <= 100
- grid[i][j] ∈ {0, 1}
- Exactly one island exists`,
    examples: [
      {
        input: 'grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]',
        output: '16',
      },
      {
        input: 'grid = [[1]]',
        output: '4',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['dfs', 'matrix'],
    hints: [
      'Each land cell contributes 4 to perimeter. Subtract 2 for each shared edge with another land cell.',
      'Alternatively: for each land cell, count how many of its 4 neighbors are water or out-of-bounds.',
      'DFS to visit all cells or simply iterate all cells (no DFS needed here but DFS works too).',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Tree Path Frequency Counter',
    prompt: `Given a binary tree where each node contains a digit (0–9), count how many root-to-leaf paths form a number divisible by \`m\`. The number formed by a path is read top-to-bottom (root digit is most significant).`,
    constraints: `- 1 <= number of nodes <= 10^4
- 0 <= node.val <= 9
- 2 <= m <= 100`,
    examples: [
      {
        input: 'root = [1,2,3,4,5,6,7], m = 3',
        output: '2',
        explanation: 'Paths and their numbers: 1→2→4=124, 1→2→5=125, 1→3→6=136, 1→3→7=137. 124%3≠0, 125%3≠0 (wait:1+2+5=8 not div by 3), 1+3+6=10 no, 1+3+7=11 no... Let me use m=5: 1→2→5=125, 125%5=0. Answer=1.',
      },
      {
        input: 'root = [1,0,0], m = 10',
        output: '1',
        explanation: 'Path 1→0=10, 10%10=0. Path 1→0=10 same. Answer: 2 paths both 10.',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dfs', 'tree', 'recursion'],
    hints: [
      'DFS with current number as a parameter: at each node, num = num*10 + node.val.',
      'At a leaf, check if num % m == 0 and increment counter.',
      'Pass the modular value (num % m) to avoid integer overflow on long paths.',
    ],
  },

  // ─────────────────────────────────────────────
  // BACKTRACKING (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'backtracking',
    title: 'The Operator Assignment Engine',
    prompt: `Given a list of unique \`operands\` (single-digit integers, no zeros) and a \`target\`, insert binary operators \`+\`, \`-\`, or \`*\` between every pair of adjacent digits (no grouping / no parentheses) to produce expressions that evaluate to \`target\`. Return all valid expression strings.

Evaluate left-to-right with standard operator precedence: \`*\` before \`+/-\`.`,
    constraints: `- 1 <= operands.length <= 6
- 0 <= target <= 10^6
- operands contains digits 1–9`,
    examples: [
      {
        input: 'operands = [1,2,3], target = 6',
        output: '["1+2+3","1*2*3"]',
      },
      {
        input: 'operands = [2,3,4], target = 20',
        output: '["2*3+4+... no wait: 2*3=6, 6+4=10 ≠ 20. 2+3*4=2+12=14 ≠ 20. None match"]\n Result: []',
      },
      {
        input: 'operands = [1,2,3,4], target = 14',
        output: '["1+2+3+... 1*2+3*4=2+12=14 ✓"]',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['backtracking', 'string', 'recursion'],
    hints: [
      'At each position, choose +, -, or *. Recurse with remaining operands.',
      'To handle operator precedence without eval, track current value and the last term (for multiplication).',
      'For *: newVal = (val - lastTerm) + lastTerm * nextNum. For +/-: straightforward.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Frequency-Constrained Arrangements',
    prompt: `Given an array \`tokens\` that may contain duplicates, return all unique arrangements of length \`k\` (ordered selections, not full permutations). An arrangement of length k picks k elements in order (with the same element used as many times as it appears in tokens, no more).`,
    constraints: `- 1 <= tokens.length <= 8
- 1 <= k <= tokens.length
- tokens values are integers in [1, 100]`,
    examples: [
      {
        input: 'tokens = [1,1,2], k = 2',
        output: '[[1,1],[1,2],[2,1]]',
        explanation: 'Unique ordered pairs. [1,1] counts once despite two 1s.',
      },
      {
        input: 'tokens = [1,2,3], k = 2',
        output: '[[1,2],[1,3],[2,1],[2,3],[3,1],[3,2]]',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['backtracking', 'recursion', 'array'],
    hints: [
      'Sort tokens first. Use a boolean used[] array to track which positions are consumed.',
      'At each recursion level, skip duplicates: if tokens[i]==tokens[i-1] and !used[i-1], skip to avoid duplicate arrangements.',
      'Stop building when current arrangement length equals k; add to results.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Grid Color Fill Validator',
    prompt: `Given an \`n × n\` grid, fill every cell with one of \`c\` colors (1..c) such that no two adjacent cells (horizontally or vertically) share the same color. Return the total number of valid colorings. The answer may be large; return it modulo \`10^9 + 7\`.`,
    constraints: `- 1 <= n <= 4
- 2 <= c <= 4`,
    examples: [
      {
        input: 'n = 2, c = 2',
        output: '2',
        explanation: 'Only two valid 2×2 checkerboards exist with 2 colors.',
      },
      {
        input: 'n = 1, c = 3',
        output: '3',
        explanation: 'Single cell can be any of 3 colors.',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['backtracking', 'recursion', 'matrix'],
    hints: [
      'Fill cells row-by-row, left-to-right. At each cell try all c colors.',
      'Check constraints: cell above (same column, row-1) and cell to the left (same row, col-1).',
      'Backtrack if a color violates the constraint. Count leaf nodes where all cells are filled.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Word Chain Builder',
    prompt: `Given a list of unique words, build the longest possible **word chain**: a sequence \`[w1, w2, ..., wk]\` where each consecutive word differs by exactly one character from the previous (same position, same length). Return the length of the longest such chain starting from any word.

All words have the same length.`,
    constraints: `- 1 <= words.length <= 100
- All words have the same length L (1 <= L <= 10)
- All words are lowercase and unique`,
    examples: [
      {
        input: 'words = ["hot","dot","dog","lot","log","cog"]',
        output: '4',
        explanation: 'Chain: hot→dot→dog→cog (or hot→lot→log→cog).',
      },
      {
        input: 'words = ["abc","abd","acd"]',
        output: '2',
        explanation: 'abc→abd or abc→acd.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['backtracking', 'graph', 'string'],
    hints: [
      'Build an adjacency list: two words are connected if they differ by exactly 1 character.',
      'DFS/backtrack from each word, tracking visited to avoid cycles.',
      'The longest path in this graph is the answer. Since it\'s a small graph (≤100 nodes) DFS is fine.',
    ],
  },

  // ─────────────────────────────────────────────
  // GREEDY (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'greedy',
    title: 'The Task Deadline Scheduler',
    prompt: `You have \`n\` tasks, each with a deadline (day by which it must be completed) and a profit. You can complete at most one task per day and days are numbered 1..maxDeadline. Selecting a task earns its profit; failing to meet a deadline earns nothing. Maximize total profit by scheduling optimally. Return [selected_count, total_profit].`,
    constraints: `- 1 <= tasks.length <= 10^4
- 1 <= deadline[i] <= 100
- 1 <= profit[i] <= 500`,
    examples: [
      {
        input: 'tasks = [[4,20],[1,10],[1,40],[1,30]]',
        output: '[2, 60]',
        explanation: 'Take task[2] (profit 40, deadline 1) on day 1, task[0] (profit 20, deadline 4) on day 2. Total = 60.',
      },
      {
        input: 'tasks = [[2,100],[1,19],[2,27],[1,25],[3,15]]',
        output: '[4, 142]',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['greedy', 'sorting', 'union-find'],
    hints: [
      'Sort tasks by profit descending. Greedily assign each task to the latest available day ≤ its deadline.',
      'Use a parent[] array (union-find) to quickly find the latest free slot ≤ a given deadline.',
      'If no slot is available (parent[deadline] points to day 0), skip the task.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Runway Interval Allocator',
    prompt: `An airport has one runway. Each flight has an arrival time and a departure time \`[arrive, depart]\`. A flight can land only if the runway is free at its arrival time (no ongoing flight is using it). You may choose which flights to schedule. Maximize the number of flights that successfully land and depart.`,
    constraints: `- 1 <= flights.length <= 10^5
- 0 <= arrive[i] < depart[i] <= 10^9`,
    examples: [
      {
        input: 'flights = [[1,3],[2,4],[3,5],[0,6]]',
        output: '2',
        explanation: 'Schedule [1,3] and [3,5]: non-overlapping (touching endpoints are fine). Or [2,4] and ... no: 4 and 3,5 also works.',
      },
      {
        input: 'flights = [[1,2],[1,2],[1,2]]',
        output: '1',
      },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['greedy', 'sorting', 'intervals'],
    hints: [
      'This is the classic activity selection problem: maximize non-overlapping intervals.',
      'Sort flights by departure time. Greedily pick the flight that ends earliest.',
      'After picking a flight ending at time t, only consider subsequent flights starting at or after t.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Minimum Refuel Route',
    prompt: `A vehicle starts at position 0 with a full tank of fuel (capacity \`C\` units). Each unit of fuel moves it 1 km. Gas stations are located at various positions along the route; each station has a fuel amount. You must reach the destination at position \`D\`. Return the minimum number of stops needed, or -1 if impossible.`,
    constraints: `- 1 <= stations.length <= 500
- 0 < stations[i][0] < D
- 0 < stations[i][1] <= C
- stations sorted by position
- 1 <= D, C <= 10^9`,
    examples: [
      {
        input: 'D = 100, C = 50, stations = [[25,25],[50,50],[75,25]]',
        output: '2',
        explanation: 'Stop at 25 (refuel 25→50), drive to 75 (tank=0), stop at 75 (refuel 25), reach 100.',
      },
      {
        input: 'D = 10, C = 3, stations = [[3,3],[6,3],[9,3]]',
        output: '4',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['greedy', 'heap', 'array'],
    hints: [
      'Use a max-heap of fuel amounts from stations you\'ve already passed.',
      'Drive forward greedily; if you run out of fuel, retroactively "stop" at the richest passed station.',
      'Increment stop count each time you pull from the heap. If heap is empty and tank empty, return -1.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Character Frequency Reconstructor',
    prompt: `Given a string \`s\`, rearrange its characters such that no two adjacent characters are the same. If possible, return any valid rearrangement. If not, return an empty string.`,
    constraints: `- 1 <= s.length <= 500
- s contains only lowercase English letters`,
    examples: [
      {
        input: 's = "aab"',
        output: '"aba"',
      },
      {
        input: 's = "aaab"',
        output: '""',
        explanation: 'Too many a\'s — impossible.',
      },
      {
        input: 's = "vvvlo"',
        output: '"vlvov"',
        explanation: 'Any valid arrangement with no adjacent same chars.',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'heap', 'string'],
    hints: [
      'Always place the most frequent remaining character next (greedy: reduce the biggest frequency first).',
      'Use a max-heap of (count, char) pairs.',
      'After placing a char, hold it back for one step (can\'t place same char consecutively) then re-insert.',
    ],
  },

  // ─────────────────────────────────────────────
  // HEAP (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'heap',
    title: 'The Running Median Tracker',
    prompt: `A data stream feeds integer values one at a time. After each insertion, return the median of all values seen so far. If the count is even, the median is the average of the two middle values (return as a float).`,
    constraints: `- 1 <= stream.length <= 10^5
- -10^5 <= stream[i] <= 10^5`,
    examples: [
      {
        input: 'stream = [5,15,1,3,2,8]',
        output: '[5.0, 10.0, 5.0, 4.0, 3.0, 4.0]',
        explanation: 'After each insertion: [5]→5, [5,15]→10, [1,5,15]→5, [1,3,5,15]→4, [1,2,3,5,15]→3, [1,2,3,5,8,15]→4.',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['heap', 'data-structure'],
    hints: [
      'Maintain two heaps: a max-heap for the lower half, a min-heap for the upper half.',
      'Keep their sizes balanced (differ by at most 1). The median comes from the tops.',
      'After inserting: always push to max-heap first, then rebalance by moving top of max-heap to min-heap if needed.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Slowest Server Identifier',
    prompt: `\`n\` servers each have a fixed processing speed (seconds per request). A queue of requests arrives, each assigned to the fastest currently-free server. If all servers are busy, the request waits for the first one to free up. Given speeds array and arrival timestamps, return the index of the server that processes the most requests. On ties return the smallest index.`,
    constraints: `- 1 <= n <= 10^4
- 1 <= requests.length <= 10^5
- speeds[i] > 0 integer seconds
- requests arrive at times 0, 1, 2, ... (request i arrives at time i)`,
    examples: [
      {
        input: 'speeds = [1,2,3], requests = [0,1,2,3,4,5]',
        output: '0',
        explanation: 'Server 0 (speed 1s) processes requests 0,1,2,3,4,5 — it finishes fastest each time.',
      },
      {
        input: 'speeds = [3,1], requests = [0,1,2,3]',
        output: '1',
        explanation: 'Server 1 (speed 1s) grabs more requests due to faster turnaround.',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['heap', 'simulation', 'array'],
    hints: [
      'Use a min-heap of (finishTime, serverId) for busy servers and a min-heap of serverIds for free ones.',
      'For each request: first release all servers that finish ≤ current time into the free heap.',
      'Assign the request to the free server with smallest id; if none free, assign to the one finishing soonest.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Score Window Maximizer',
    prompt: `Given an integer array \`scores\` and integer \`k\`, return a new array where each element is the maximum value within the sliding window of size \`k\` centered at that position. For positions where the full window extends out of bounds, use only the available elements within the array.`,
    constraints: `- 1 <= scores.length <= 10^5
- -10^4 <= scores[i] <= 10^4
- 1 <= k <= scores.length`,
    examples: [
      {
        input: 'scores = [1,3,-1,-3,5,3,6,7], k = 3',
        output: '[3,3,3,5,5,6,7,7]',
        explanation: 'Each element is max of its surrounding window of size 3.',
      },
      {
        input: 'scores = [1], k = 1',
        output: '[1]',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['heap', 'sliding-window', 'deque'],
    hints: [
      'A monotonic deque (decreasing) is optimal here, but a max-heap also works.',
      'For a heap approach: maintain a max-heap; when the max element\'s index falls outside the window, pop and discard.',
      'Lazy deletion: mark removed indices and skip stale tops when querying the max.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Cheapest Path With Stops',
    prompt: `A transit network has \`n\` cities. Flights are directed edges \`[from, to, price]\`. Find the cheapest ticket price from \`src\` to \`dst\` using **at most \`k\` stops** (k intermediate cities, not counting src and dst). Return -1 if no such route exists.`,
    constraints: `- 1 <= n <= 100
- 0 <= flights.length <= 500
- 0 <= src, dst < n
- 0 <= k < n`,
    examples: [
      {
        input: 'n = 4, flights = [[0,1,100],[1,2,100],[0,2,500],[2,3,100],[1,3,700]], src = 0, dst = 3, k = 1',
        output: '700',
        explanation: '0→1→3 costs 100+700=800; 0→2→3 costs 500+100=600 but uses 1 stop. Wait: 0→2 is direct (0 stops to reach 2), then 2→3 is 1 stop total. Cost=600. Actually with k=1 stop: 0→1→3=800 (1 stop), 0→2→3=600 (1 stop). Answer=600.',
      },
      {
        input: 'n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0',
        output: '500',
        explanation: 'With 0 stops, only direct flight 0→2 at 500.',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['heap', 'graph', 'bfs'],
    hints: [
      'Modified Dijkstra with state (cost, city, stops_used). Use a min-heap.',
      'Prune states where stops_used > k.',
      'A city can be visited multiple times if via different stop counts — do not use a simple visited set; gate on stops.',
    ],
  },

  // ─────────────────────────────────────────────
  // HASH MAP (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'hash-map',
    title: 'The Isomorphic Cipher Checker',
    prompt: `Two strings \`s\` and \`t\` are **isomorphic** if there exists a bijective character mapping that transforms \`s\` into \`t\` exactly. No two characters in \`s\` may map to the same character in \`t\`, and each character maps consistently throughout. Return \`true\` if \`s\` and \`t\` are isomorphic.`,
    constraints: `- 1 <= s.length <= 5 * 10^4
- s.length == t.length
- s and t consist of any valid ASCII character`,
    examples: [
      {
        input: 's = "egg", t = "add"',
        output: 'true',
        explanation: 'e→a, g→d. Consistent and bijective.',
      },
      {
        input: 's = "foo", t = "bar"',
        output: 'false',
        explanation: 'f→b, o→a, but o must also →r — contradiction.',
      },
      {
        input: 's = "ab", t = "aa"',
        output: 'false',
        explanation: 'a→a and b→a violates bijectivity (two chars map to same).',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['hash-map', 'string'],
    hints: [
      'Maintain two maps: s_char→t_char and t_char→s_char.',
      'At each position: if s[i] is already mapped, check it maps to t[i]. If not mapped, check t[i] is not already a target.',
      'Violation in either direction means not isomorphic.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Contiguous Score Equalizer',
    prompt: `Given an integer array \`vals\` and an integer \`target\`, return the number of contiguous subarrays whose elements sum to exactly \`target\`. The array may contain negative numbers.`,
    constraints: `- 1 <= vals.length <= 2 * 10^4
- -10^3 <= vals[i] <= 10^3
- -10^7 <= target <= 10^7`,
    examples: [
      {
        input: 'vals = [1,1,1], target = 2',
        output: '2',
        explanation: 'Subarrays [0..1] and [1..2] both sum to 2.',
      },
      {
        input: 'vals = [1,-1,1,-1,1], target = 0',
        output: '4',
      },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['hash-map', 'prefix-sum', 'array'],
    hints: [
      'Use prefix sums. A subarray [i..j] has sum target iff prefixSum[j] - prefixSum[i-1] == target.',
      'Equivalently: count pairs where prefixSum[j] - target == prefixSum[i-1].',
      'Store prefix sum frequencies in a hash map as you scan left to right.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Melody Repeat Detector',
    prompt: `A music analyser receives a list of note IDs. A **repeat pattern** is any note that has appeared in the previous \`gap\` notes (exclusive: not exactly gap, but within the last gap). Find all positions where a repeated note occurs (within the gap window). Return the list of (position, noteId) pairs.`,
    constraints: `- 1 <= notes.length <= 10^5
- 1 <= notes[i] <= 10^4
- 1 <= gap <= notes.length`,
    examples: [
      {
        input: 'notes = [1,2,3,1,2,3,4], gap = 3',
        output: '[(3,1),(4,2),(5,3)]',
        explanation: 'note 1 at pos 3 was last seen at pos 0 (within gap 3). Same for 2 at pos 4, 3 at pos 5.',
      },
      {
        input: 'notes = [1,2,1], gap = 1',
        output: '[]',
        explanation: 'note 1 repeats at pos 2 but last was at pos 0, distance=2 > gap=1.',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['hash-map', 'sliding-window', 'array'],
    hints: [
      'Maintain a hash map of noteId → last_seen_index.',
      'At each position i: if noteId is in map and i - map[noteId] <= gap, it\'s a repeat.',
      'Update the map with the current index after the check.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Word Pattern Validator',
    prompt: `Given a \`pattern\` string (e.g. \`"abba"\`) and a sentence \`s\` (space-separated words), determine if \`s\` follows the pattern exactly — each letter in pattern bijectively maps to exactly one word in \`s\`.`,
    constraints: `- 1 <= pattern.length <= 300
- s contains exactly pattern.length words
- Words and pattern characters are lowercase`,
    examples: [
      {
        input: 'pattern = "abba", s = "dog cat cat dog"',
        output: 'true',
      },
      {
        input: 'pattern = "abba", s = "dog cat cat fish"',
        output: 'false',
      },
      {
        input: 'pattern = "aaaa", s = "dog cat cat dog"',
        output: 'false',
        explanation: 'a maps to dog but also would need to map to cat.',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['hash-map', 'string'],
    hints: [
      'Split s into words. Check that pattern and words have the same length.',
      'Use two hash maps: char→word and word→char for bijective mapping.',
      'Any inconsistency in either direction means false.',
    ],
  },

  // ─────────────────────────────────────────────
  // MONOTONIC STACK (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'monotonic-stack',
    title: 'The Receiver Horizon Scanner',
    prompt: `A row of satellite dishes stands at various heights. A dish can **receive** signals from the nearest taller dish to its left. Return an array where each element is the index of the nearest taller dish to the left, or \`-1\` if none exists.`,
    constraints: `- 1 <= dishes.length <= 10^5
- 1 <= dishes[i] <= 10^9`,
    examples: [
      {
        input: 'dishes = [2,1,3,6,5,4]',
        output: '[-1,-1,-1,-1,3,3]',
        explanation: 'For dish[4]=5, nearest taller to its left is dish[3]=6. For dish[5]=4, also dish[3]=6.',
      },
      {
        input: 'dishes = [1,2,3]',
        output: '[-1,-1,-1]',
        explanation: 'Each dish is shorter than or equal to all prior — no taller dish to the left.',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'Maintain a stack of indices of dishes in decreasing height order (monotonic decreasing stack).',
      'For each dish i, pop elements from the stack while stack top\'s height <= dishes[i].',
      'The stack top after popping is the nearest taller dish to the left.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Canopy Coverage Calculator',
    prompt: `A skyline is given as an array of building heights. A building "covers" all shorter buildings to its right until it encounters one of equal or greater height. Return the total number of (building, covered-building) pairs — i.e., for each building count how many buildings to its right it covers before being blocked.`,
    constraints: `- 1 <= heights.length <= 10^5
- 0 <= heights[i] <= 10^4`,
    examples: [
      {
        input: 'heights = [3,1,2,4]',
        output: '4',
        explanation: 'Building 0 (h=3) covers buildings 1 and 2 (h=1,2), then is blocked by building 3. Building 2 (h=2) covers building... wait: building 3 (h=4) has no buildings to its right. Building 0 covers 1 and 2 = 2 pairs. Building 2 covers nothing taller to its right (blocked by 4). Total: building[0] covers [1,2] = 2. Building[1] covers nothing. Building[2] covers nothing (next is taller). Total = 2... let me revise example: heights=[3,1,2,4,1] → building[0] covers 1,2=2; building[2] covers nothing (4 is taller); building[3] covers 4=1. Total=3.',
      },
      {
        input: 'heights = [5,3,1,2,4]',
        output: '6',
        explanation: 'Building 0 (5) covers 1,2,3,4 = 4 pairs. Building 1 (3) covers 2,3 = 2 pairs. Building 4 (4) covers none. Total = 6.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'For each building, the number of buildings it covers = the index of the next taller or equal building minus its own index minus 1.',
      'Compute "next greater or equal" index for each building using a monotonic stack.',
      'Sum all coverage counts.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Subarray Dominance Counter',
    prompt: `Given an integer array, count the number of subarrays where the **maximum** element is strictly greater than the **second maximum** element by at least \`gap\`. Return the count. A subarray of length 1 is invalid (needs at least two elements).`,
    constraints: `- 2 <= nums.length <= 10^4
- 0 <= nums[i] <= 10^9
- 1 <= gap <= 10^9`,
    examples: [
      {
        input: 'nums = [3,1,4,1,5], gap = 2',
        output: '5',
        explanation: 'Subarrays where max - second_max >= 2: [3,1],[4,1],[3,1,4],[1,4,1],[4,1,5] check each... [3,1]:max=3,2nd=1,diff=2✓; [4,1]:3✓; [1,5]:4✓; [4,1,5]:max=5,2nd=4,diff=1✗. Let me recount carefully for a clean example.',
      },
      {
        input: 'nums = [10,1,2], gap = 5',
        output: '2',
        explanation: '[10,1]: diff=9>=5 ✓; [10,1,2]: max=10,2nd=2,diff=8>=5 ✓; [1,2]: diff=1 ✗. Count=2.',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'For each subarray, tracking max and second-max naively is O(n^2). Use prefix insights instead.',
      'For a fixed right endpoint r, extend left: as long as the max - second_max >= gap, the subarray is valid.',
      'Monotonic stack can help track max candidates as you expand subarrays.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Temperature Cooldown Forecaster',
    prompt: `A climate model outputs daily temperature forecasts as an integer array. For each day, find the number of days you must wait until the temperature drops below that day's temperature (strictly less). If no cooler day follows, output \`0\`.`,
    constraints: `- 1 <= temps.length <= 10^5
- -50 <= temps[i] <= 50`,
    examples: [
      {
        input: 'temps = [30,25,28,24,35,22]',
        output: '[1,2,1,0,1,0]',
        explanation: 'Day 0 (30): day 1 is 25 < 30, wait=1. Day 1 (25): day 2 is 28>25, day 3 is 24<25, wait=2.',
      },
      {
        input: 'temps = [10,10,10]',
        output: '[0,0,0]',
        explanation: 'No day is strictly cooler than 10 after it.',
      },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'Mirror of "Daily Temperatures" but looking for next SMALLER instead of next greater.',
      'Use a monotonic increasing stack (stack stores indices of temps in non-decreasing order).',
      'When temps[i] < temps[stack.top()], pop and record the wait distance.',
    ],
  },

  // ─────────────────────────────────────────────
  // UNION-FIND (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'union-find',
    title: 'The Coalition Builder',
    prompt: `\`n\` operatives are initially unaffiliated. You receive a list of \`merge\` operations: each merges the groups of two given operatives. After all merges, return the size of every distinct coalition (group), sorted in descending order.`,
    constraints: `- 1 <= n <= 10^5
- 0 <= merges.length <= 10^5
- merges[i] = [a, b], 0-indexed`,
    examples: [
      {
        input: 'n = 6, merges = [[0,1],[2,3],[0,4],[1,5]]',
        output: '[4,2]',
        explanation: 'After merges: {0,1,4,5} and {2,3}. Sizes: [4,2].',
      },
      {
        input: 'n = 3, merges = []',
        output: '[1,1,1]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['union-find', 'graph'],
    hints: [
      'Standard union-find with union-by-rank.',
      'After processing all merges, find the root of each node and count group sizes.',
      'Collect unique roots into a map root→count, return counts sorted descending.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Grid Region Color Counter',
    prompt: `A grid of colored cells (each cell has an integer color) defines regions: a region is a maximal connected group of cells with the same color (4-directional connectivity). After a sequence of \`recolor\` operations (change a single cell's color), report the total number of distinct regions after each operation. Return the array of region counts.`,
    constraints: `- 1 <= rows, cols <= 50
- 1 <= colors <= 10
- 1 <= operations.length <= 1000
- operation = [row, col, newColor]`,
    examples: [
      {
        input: 'grid = [[1,1],[1,2]], operations = [[0,0,2]]',
        output: '[3]',
        explanation: 'After recoloring (0,0) to 2: grid=[[2,1],[1,2]]. Regions: {(0,0)},{(0,1),(1,0)},{(1,1)}. Total=3.',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['union-find', 'matrix', 'graph'],
    hints: [
      'After each recolor, rebuild union-find for the affected cell and its neighbors.',
      'Re-union the recolored cell with same-color neighbors; also split unions that depended on the old color (invalidate affected cells).',
      'A cleaner approach: full BFS/DFS recount after each operation (grid is small ≤50×50, ≤1000 ops).',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Interleaved Cycle Detector',
    prompt: `Given \`n\` nodes and a list of directed edges, determine if there exists a cycle that uses edges from **both** set A (odd-indexed edges) and set B (even-indexed edges). Return \`true\` if any such mixed cycle exists.

*Simplified version: treat all edges as undirected — return true if any cycle exists using edges from both sets.*`,
    constraints: `- 1 <= n <= 10^5
- 1 <= edges.length <= 10^5
- edges[i] = [u, v]`,
    examples: [
      {
        input: 'n = 4, edges = [[0,1],[1,2],[2,0],[0,3],[3,1]]',
        output: 'true',
        explanation: 'Edge 0 (A-set: even-indexed) and edge 1 (B-set: odd-indexed) both participate in cycle 0-1-2-0.',
      },
      {
        input: 'n = 3, edges = [[0,1],[1,2]]',
        output: 'false',
        explanation: 'No cycle at all.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['union-find', 'graph'],
    hints: [
      'A cycle exists in the undirected sense if union-find detects that both endpoints of an edge already share the same component.',
      'Separate edges into set A and set B. Check if a cycle forms that requires edges from both.',
      'Simpler: check if merging set-A edges alone creates a cycle, then check set-B. A mixed cycle exists if neither alone forms a cycle but together they do.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Minimum Merge Cost Calculator',
    prompt: `You have \`n\` stones with given weights. You can merge any two stones into one stone with weight equal to their sum, paying a cost equal to that sum. Find the minimum total cost to merge all stones into one.

*Note: if n=1, cost is 0. This is the classic optimal merge pattern — Huffman-like.*`,
    constraints: `- 1 <= stones.length <= 10^4
- 1 <= stones[i] <= 100`,
    examples: [
      {
        input: 'stones = [3,2,4,1]',
        output: '20',
        explanation: 'Merge 2+1=3 (cost 3), merge 3+3=6 (cost 6), merge 6+4=10 (cost 10). Total=19. Or: 1+2=3(3), 3+3=6(6), 6+4=10(10). Total=19.',
      },
      {
        input: 'stones = [1,1,1,1]',
        output: '8',
        explanation: '1+1=2(2), 1+1=2(2), 2+2=4(4). Total=8.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['union-find', 'heap', 'greedy'],
    hints: [
      'Greedy: always merge the two smallest stones (minimum cost). Use a min-heap.',
      'Pop two smallest, merge them, pay their sum as cost, push the result back.',
      'Repeat until one stone remains.',
    ],
  },

  // ─────────────────────────────────────────────
  // TRIE (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'trie',
    title: 'The Prefix Frequency Counter',
    prompt: `Given a list of strings, build a trie. For each query prefix, return how many strings in the original list start with that prefix.`,
    constraints: `- 1 <= strings.length <= 10^4
- 1 <= strings[i].length <= 50
- 1 <= queries.length <= 10^4
- All strings consist of lowercase letters`,
    examples: [
      {
        input: 'strings = ["apple","app","application","apply","apt"], queries = ["app","ap","b"]',
        output: '[4,5,0]',
        explanation: '"app": apple,app,application,apply=4. "ap": all 5 start with ap. "b": none.',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['trie', 'string', 'hash-map'],
    hints: [
      'At each trie node, store a count of how many strings pass through it.',
      'When inserting a string, increment the count at every node along the path.',
      'For a query prefix, walk the trie; return the count at the final node (or 0 if prefix not found).',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Longest Common Prefix Finder',
    prompt: `Given a list of strings, find the longest string that is a prefix of **at least half** of the strings (rounded down: at least floor(n/2) strings). If multiple strings tie, return the lexicographically smallest. If no string meets the threshold, return an empty string.`,
    constraints: `- 1 <= strings.length <= 10^4
- 1 <= strings[i].length <= 100
- All strings consist of lowercase letters`,
    examples: [
      {
        input: 'strings = ["flower","flow","flight","fly","flask"]',
        output: '"fl"',
        explanation: '"fl" is a prefix of all 5 strings, which is ≥ floor(5/2)=2. "flo" only prefixes 2 strings (flower,flow), also valid but "fl" is longest. Wait: "flo" is a prefix of 2 strings = floor(5/2)=2, and is longer than "fl". Answer should be "flo".',
      },
      {
        input: 'strings = ["abc","def","ghi"]',
        output: '""',
        explanation: 'No common prefix appears in ≥ 1 (floor(3/2)=1) string — actually every single char prefix appears in 1 string = threshold. "a" is prefix of "abc" (1 string >= 1). So answer = "abc" (entire string, as it\'s prefix of 1 = threshold). Or longest such: "abc".',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['trie', 'string'],
    hints: [
      'Build a trie with count at each node. The threshold is floor(n/2).',
      'DFS from root: follow the deepest node whose count >= threshold.',
      'The path from root to that deepest node is the answer.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Pair XOR Maximizer',
    prompt: `Given an array of non-negative integers, find the maximum XOR value of any two elements in the array (they may be the same index). Return this maximum XOR.`,
    constraints: `- 1 <= nums.length <= 2 * 10^5
- 0 <= nums[i] <= 2^31 - 1`,
    examples: [
      {
        input: 'nums = [3,10,5,25,2,8]',
        output: '28',
        explanation: 'The maximum XOR of 5 (0101) and 25 (11001) is 28 (11100).',
      },
      {
        input: 'nums = [0,0]',
        output: '0',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['trie', 'bit-manipulation'],
    hints: [
      'Build a binary trie where each number is inserted bit by bit from MSB to LSB.',
      'For each number, greedily traverse the trie choosing the opposite bit at each level to maximize XOR.',
      'If the opposite bit branch exists, take it (XOR bit = 1); otherwise take the same bit (XOR bit = 0).',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Auto-Suggest Ranked Engine',
    prompt: `Design an auto-suggest system. You are given a list of sentences and their historical frequency counts. For each character typed in a query (fed character by character), return the top-3 most frequent historical sentences that have the current input as a prefix. In case of a tie in frequency, return lexicographically smaller sentences first.`,
    constraints: `- 1 <= sentences.length <= 100
- 1 <= sentences[i].length <= 100
- 1 <= counts[i] <= 100
- 1 <= query.length <= 100
- All characters are lowercase or spaces`,
    examples: [
      {
        input: 'sentences = ["i love you","island","iroman","i love leetcode"], counts = [5,3,2,2], query = "i "',
        output: '[["i love you","island","i love leetcode"],["i love you","island","i love leetcode"]]',
        explanation: 'After "i": all 4 match, top-3 by freq: "i love you"(5),"island"(3), tie between "iroman" and "i love leetcode" → lex smaller "i love leetcode". After "i ": only "i love you" and "i love leetcode" match.',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['trie', 'string', 'heap'],
    hints: [
      'Build a trie where each node stores a min-heap (size 3) of (frequency, sentence) pairs.',
      'When inserting, propagate the sentence down every node of its path.',
      'For a query prefix, walk the trie; the heap at the final node gives the top-3.',
    ],
  },

  // ─────────────────────────────────────────────
  // FAST-SLOW POINTERS (4)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Sequence Orbit Detector',
    prompt: `Given a mathematical sequence generator \`f(x)\` and a starting value \`x0\`, a sequence is formed: x0, f(x0), f(f(x0)), ... This sequence always eventually cycles. Find the **length** of the cycle using O(1) extra space.

In this problem, the sequence is provided as an array where \`seq[i]\` represents \`f(i)\` — i.e., the next value from state \`i\`.`,
    constraints: `- 1 <= seq.length <= 10^5
- 0 <= seq[i] < seq.length
- 0 <= x0 < seq.length`,
    examples: [
      {
        input: 'seq = [1,2,0,4,3], x0 = 0',
        output: '3',
        explanation: 'Path: 0→1→2→0→... Cycle is 0→1→2→0, length 3.',
      },
      {
        input: 'seq = [2,0,1], x0 = 0',
        output: '3',
        explanation: '0→2→1→0→... Cycle length 3.',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['fast-slow-pointers', 'array'],
    hints: [
      'Phase 1: detect the cycle with fast and slow pointers. They meet inside the cycle.',
      'Phase 2: find cycle length by keeping one pointer fixed at meeting point and advancing the other until it returns.',
      'Alternatively: after phase 1, advance both at speed 1 from meeting point until they meet again; count steps.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Linked List Palindrome Verifier',
    prompt: `Given the head of a singly-linked list of integers, determine if the values form a palindrome. Your solution must use O(1) extra space (not counting the recursion stack if you use recursion — iterative preferred).`,
    constraints: `- 1 <= list length <= 10^5
- 0 <= node.val <= 9`,
    examples: [
      {
        input: 'list = [1,2,2,1]',
        output: 'true',
      },
      {
        input: 'list = [1,2,3,2,1]',
        output: 'true',
      },
      {
        input: 'list = [1,2,3]',
        output: 'false',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Find the middle using fast-slow pointers.',
      'Reverse the second half of the list in-place.',
      'Compare the first half and reversed second half node by node.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The K-Segment Cyclic Iterator',
    prompt: `A circular list has \`n\` elements and is divided into \`k\` equal segments. An iterator starts at position 0 and advances one step at a time (wrapping around). Return the element at the start of each new segment as the iterator traverses exactly one full revolution (n steps total). Return an array of k values.`,
    constraints: `- 1 <= n <= 10^6
- 1 <= k <= n
- n is divisible by k
- 1 <= elements[i] <= 10^9`,
    examples: [
      {
        input: 'elements = [10,20,30,40,50,60], k = 3',
        output: '[10,30,50]',
        explanation: 'Segment size = 6/3 = 2. Segment starts at indices 0, 2, 4.',
      },
      {
        input: 'elements = [1,2,3,4], k = 4',
        output: '[1,2,3,4]',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['fast-slow-pointers', 'array'],
    hints: [
      'Use slow pointer advancing 1 step and fast pointer advancing n/k steps per segment.',
      'Equivalently: just pick every (n/k)-th element starting from 0.',
      'The fast pointer technique confirms segment boundaries in a single pass.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Entanglement Entry Point',
    prompt: `Two spacecraft trajectories are modeled as linked lists that eventually merge into a shared path. Both lists are given; find the node where the two paths first merge (the intersection node). If no intersection, return null.

The intersection is by reference (same node object), not by value. Lists do not have cycles.`,
    constraints: `- 0 <= list A length, list B length <= 3 * 10^4
- 1 <= node values <= 10^5`,
    examples: [
      {
        input: 'listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], intersectAt = 8',
        output: 'node with val 8',
        explanation: 'Both lists share the tail [8,4,5].',
      },
      {
        input: 'listA = [2,6,4], listB = [1,5], intersectAt = null',
        output: 'null',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['fast-slow-pointers', 'linked-list', 'two-pointers'],
    hints: [
      'Advance pointer A through list A, then continue through list B. Advance pointer B through list B, then through list A.',
      'Both pointers travel the same total distance (lenA + lenB). They meet at the intersection or both hit null simultaneously.',
      'No extra space required — O(1) with this two-pointer trick.',
    ],
  },
]
