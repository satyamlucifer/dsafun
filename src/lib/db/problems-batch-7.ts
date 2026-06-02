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

export const PROBLEMS_BATCH_7: ProblemSeed[] = [
  // ─────────────────────────────────────────────
  // TWO POINTERS (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'two-pointers',
    title: 'The Array Realignment Agent',
    prompt:
      'A data-correction unit receives an integer array that is almost sorted — exactly one contiguous subarray is out of order. Your mission: find the shortest subarray such that sorting only that subarray makes the entire array non-decreasing. Return [left, right] indices (0-indexed). If the array is already sorted return [-1, -1].',
    constraints: '1 <= nums.length <= 10^4 | -10^5 <= nums[i] <= 10^5',
    examples: [
      {
        input: 'nums = [2,6,4,8,10,9,15]',
        output: '[1, 5]',
        explanation: 'Sorting nums[1..5] = [6,4,8,10,9] yields the sorted array.',
      },
      {
        input: 'nums = [1,2,3,4,5]',
        output: '[-1, -1]',
        explanation: 'Already sorted.',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['two-pointers', 'sorting', 'array'],
    hints: [
      'Find the leftmost and rightmost positions where the order is violated.',
      'After finding the candidate subarray, check whether the min/max inside it forces the boundaries to expand further.',
      'Expand left while nums[left-1] > min(subarray) and expand right while nums[right+1] < max(subarray).',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Triangle Forge',
    prompt:
      'A metallurgist is given a sorted array of rod lengths and wants to count how many distinct triplets (i < j < k) can form a valid triangle (sum of any two sides > third side). Since the array is sorted, optimize beyond O(n^3). Return the total count.',
    constraints: '0 <= n <= 1000 | 0 <= nums[i] <= 1000 | nums is sorted non-decreasing',
    examples: [
      {
        input: 'nums = [2,2,3,4]',
        output: '3',
        explanation: 'Valid triplets: (2,2,3), (2,3,4), (2,3,4).',
      },
      {
        input: 'nums = [4,2,3,4]',
        output: '4',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['two-pointers', 'sorting', 'math'],
    hints: [
      'Fix the largest side k and use two pointers on the remaining portion.',
      'For a fixed k, if nums[left] + nums[right] > nums[k], ALL pairs from left to right-1 also work.',
      'Count = right - left when the condition is satisfied, then decrement right.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Quadrant Sum Intelligence',
    prompt:
      'Four intelligence divisions each hold a sorted array of integers (A, B, C, D). Count the number of tuples (i,j,k,l) such that A[i] + B[j] + C[k] + D[l] == 0. This is the classic 4Sum II — treat each pair-sum as a lookup problem.',
    constraints: '0 <= n <= 200 | -2^28 <= A[i], B[i], C[i], D[i] <= 2^28',
    examples: [
      {
        input: 'A=[1,2], B=[-2,-1], C=[-1,2], D=[0,2]',
        output: '2',
        explanation: '(0,0,0,1): 1+(-2)+(-1)+2=0 and (1,1,0,0): 2+(-1)+(-1)+0=0.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['two-pointers', 'hash-map', 'array'],
    hints: [
      'Split into two groups of two arrays and precompute all pairwise sums.',
      'Store A+B sums in a hash map with counts.',
      'For each C[k]+D[l], look up -(C[k]+D[l]) in the map.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Min-Spread Reduction Protocol',
    prompt:
      'A calibration system has n sensors each with a reading. In exactly K operations you may increment or decrement any reading by 1. Minimize the difference between the maximum and minimum readings after K operations. The readings may go negative.',
    constraints: '1 <= nums.length <= 10^4 | 0 <= nums[i] <= 10^9 | 0 <= k <= 10^9',
    examples: [
      {
        input: 'nums = [0,10], k = 2',
        output: '6',
        explanation: 'Decrease 10 by 2 to get [0,8], diff = 8; or increase 0 by 2 to get [2,10], diff = 8; optimal is combine: [1,9] diff=8? Actually min is 6 when [3,7].',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['two-pointers', 'greedy', 'sorting'],
    hints: [
      'Sort the array. The answer lies somewhere in range [max-min-2k, max(0, max-min-2k)].',
      'Use a sliding window / two pointer on the sorted array to find the smallest window of length that can be flattened within k moves.',
      'For a window [l,r]: cost = (nums[mid]-nums[l]) * left_count + (nums[r]-nums[mid]) * right_count.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Voyage Capacity Commander',
    prompt:
      'A rescue fleet must evacuate n people using boats, each boat carrying at most 2 people and a weight limit. Given an array of people weights and the weight limit, find the minimum number of boats needed. Each boat carries at most 2 passengers.',
    constraints: '1 <= people.length <= 5*10^4 | 1 <= people[i] <= limit <= 3*10^4',
    examples: [
      {
        input: 'people = [3,2,2,1], limit = 3',
        output: '3',
        explanation: '[1,2],[2],[3].',
      },
      {
        input: 'people = [3,5,3,4], limit = 5',
        output: '4',
      },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['two-pointers', 'greedy', 'sorting'],
    hints: [
      'Sort the people array.',
      'Greedily pair the lightest and heaviest person if they fit together.',
      'Use left and right pointers; if they fit take both, otherwise take only the heaviest.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Rainfall Topographer',
    prompt:
      'A civil engineer receives an elevation map encoded as an array of non-negative integers where each element is the height of a column of unit width. Calculate how much rain water it can trap after raining. This is the classic trapping rain water problem — solve it in O(n) time and O(1) space.',
    constraints: '0 <= height.length <= 3*10^4 | 0 <= height[i] <= 10^5',
    examples: [
      {
        input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
        output: '6',
      },
      {
        input: 'height = [4,2,0,3,2,5]',
        output: '9',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['two-pointers', 'array', 'dynamic-programming'],
    hints: [
      'Water at each position is min(max_left, max_right) - height[i].',
      'Instead of precomputing arrays, use two pointers from both ends.',
      'If left_max < right_max, the left pointer side is the bottleneck — process it and move inward.',
    ],
  },

  // ─────────────────────────────────────────────
  // SLIDING WINDOW (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'sliding-window',
    title: 'The Subsequence Tracker',
    prompt:
      'A linguist needs to find the minimum contiguous substring of a source string S such that T appears as a subsequence (not substring) within it. Return the starting substring; if multiple answers have the same length return the one with the smallest starting index. If no solution exists return "".',
    constraints: '1 <= len(S), len(T) <= 2*10^4 | S and T consist of lowercase English letters',
    examples: [
      {
        input: 'S = "abcdebdde", T = "bde"',
        output: '"bcde"',
        explanation: '"bcde" is the shortest substring of S where "bde" is a subsequence.',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['sliding-window', 'two-pointers', 'string'],
    hints: [
      'Use a forward pass to find a window ending at index i that contains T as subsequence, then shrink from the left.',
      'After shrinking, record the window length and restart the search from left+1.',
      'This is NOT the same as minimum window substring — you need subsequence matching, not character counting.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Rolling Median Oracle',
    prompt:
      'A sensor array streams readings and a quality monitor needs the median of every window of size k. For each of the n-k+1 windows, output the median. Handle even window sizes by taking the average of two middle values.',
    constraints: '1 <= k <= nums.length <= 10^5 | -2^31 <= nums[i] <= 2^31 - 1',
    examples: [
      {
        input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
        output: '[1,-1,-1,3,5,6]',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['sliding-window', 'heap', 'design'],
    hints: [
      'Maintain two heaps: a max-heap for the lower half and a min-heap for the upper half.',
      'When sliding the window, you must efficiently remove the outgoing element — use lazy deletion.',
      'After each add/remove, rebalance the heaps so their sizes differ by at most 1.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Distinct Character Coverage',
    prompt:
      'A typographer wants to know: across all substrings of a string, what is the total count of distinct characters summed over every substring? Given a string s, return the sum of the number of distinct characters in every substring.',
    constraints: '1 <= s.length <= 10^5 | s consists of lowercase English letters only',
    examples: [
      {
        input: 's = "abc"',
        output: '10',
        explanation: 'Substrings: a(1), b(1), c(1), ab(2), bc(2), abc(3) → 1+1+1+2+2+3 = 10.',
      },
      {
        input: 's = "aba"',
        output: '8',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['sliding-window', 'string', 'combinatorics'],
    hints: [
      'Instead of enumerating all substrings, count each character\'s contribution separately.',
      'For character c, count the number of substrings that contain at least one c.',
      'For each occurrence of c, use the gaps between occurrences to calculate how many substrings contain it uniquely.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The K-Distinct Profit Window',
    prompt:
      'A trading desk receives an array of daily profits. Find the maximum sum of a contiguous subarray that contains exactly K distinct values. If no such subarray exists, return 0.',
    constraints: '1 <= nums.length <= 10^5 | 1 <= nums[i] <= 10^5 | 1 <= k <= nums.length',
    examples: [
      {
        input: 'nums = [5,1,3,1,2], k = 2',
        output: '5',
        explanation: 'Subarray [1,3,1] has 2 distinct values with sum 5. Subarray [3,1,2] also has 2 distinct, sum 6? Check: sum=6.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['sliding-window', 'hash-map', 'array'],
    hints: [
      'Exactly K distinct = at most K distinct minus at most K-1 distinct.',
      'Write a helper function maxSumAtMostK(nums, k) and return helper(k) - helper(k-1).',
      'The helper uses a standard sliding window with a frequency map.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Vowel-Consonant Cipher',
    prompt:
      'A cryptographer needs the length of the longest substring with at most K vowels AND an odd count of consonants. Given a string s and integer k, return the length of the longest valid substring.',
    constraints: '1 <= s.length <= 10^5 | 0 <= k <= s.length | s consists of lowercase English letters',
    examples: [
      {
        input: 's = "aebcd", k = 1',
        output: '3',
        explanation: '"bcd" has 0 vowels and 3 consonants (odd). Length 3.',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['sliding-window', 'string', 'bit-manipulation'],
    hints: [
      'Track the vowel count with a simple integer and the consonant parity with a bitmask (XOR by 1).',
      'Shrink the window from the left when vowel count exceeds K.',
      'The parity condition (odd consonants) is checked at each valid right pointer position.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Subarray Score Sentinel',
    prompt:
      'A game server defines the "score" of a subarray as its sum multiplied by its length. Given an array of positive integers nums and a threshold k, count the number of subarrays whose score is strictly less than k.',
    constraints: '1 <= nums.length <= 10^5 | 1 <= nums[i] <= 10^4 | 1 <= k <= 10^15',
    examples: [
      {
        input: 'nums = [2,1,4,3,5], k = 10',
        output: '6',
        explanation: 'Valid subarrays include [2],[1],[4],[3],[2,1],[1,4] — all with score < 10.',
      },
    ],
    difficulty: 'hard',
    estMin: 25,
    tags: ['sliding-window', 'array', 'math'],
    hints: [
      'Use a sliding window where you maintain the current sum.',
      'When sum * length >= k, shrink the window from the left.',
      'For each right pointer position, the number of valid subarrays ending at right is right - left + 1.',
    ],
  },

  // ─────────────────────────────────────────────
  // DYNAMIC PROGRAMMING (8)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'dynamic-programming',
    title: 'The Levenshtein Diplomat',
    prompt:
      'Two rival kingdoms must reconcile their sacred texts. A diplomat calculates the minimum number of single-character operations (insert, delete, or replace) required to transform word1 into word2 — the full Levenshtein edit distance. Return this minimum cost.',
    constraints: '0 <= word1.length, word2.length <= 500 | words consist of lowercase English letters',
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: '3',
        explanation: 'horse→rorse(replace h→r)→rose(delete r)→ros(delete e).',
      },
      {
        input: 'word1 = "intention", word2 = "execution"',
        output: '5',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['dynamic-programming', 'string'],
    hints: [
      'Define dp[i][j] as the edit distance between word1[0..i-1] and word2[0..j-1].',
      'Base cases: dp[i][0] = i and dp[0][j] = j.',
      'Transition: if chars match dp[i][j] = dp[i-1][j-1]; else dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Regex Decoder Ring',
    prompt:
      'A vintage decoder ring implements a pattern matcher with two special tokens: "." matches any single character and "*" matches zero or more of the preceding element. Given a string s and pattern p, return true if s fully matches p. This is full regular expression matching.',
    constraints: '1 <= s.length <= 20 | 1 <= p.length <= 30 | s contains only lowercase letters | p contains lowercase letters, . and *',
    examples: [
      {
        input: 's = "aa", p = "a*"',
        output: 'true',
        explanation: '"a*" means zero or more "a"s.',
      },
      {
        input: 's = "aab", p = "c*a*b"',
        output: 'true',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dynamic-programming', 'string', 'recursion'],
    hints: [
      'dp[i][j] = does s[0..i-1] match p[0..j-1]?',
      'If p[j-1] == "*", either ignore the pair (dp[i][j-2]) or use it if the previous char matches (dp[i-1][j]).',
      'If p[j-1] != "*", match iff dp[i-1][j-1] and (s[i-1]==p[j-1] or p[j-1]==".").',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Wildcard Negotiator',
    prompt:
      'A file-system search engine supports two wildcards: "?" matches exactly one character and "*" matches any sequence (including empty). Given a string s and pattern p, determine whether the pattern fully matches the string. Return true or false.',
    constraints: '0 <= s.length <= 2000 | 0 <= p.length <= 2000 | s has only lowercase letters | p has lowercase letters, ? and *',
    examples: [
      {
        input: 's = "adceb", p = "*a*b"',
        output: 'true',
      },
      {
        input: 's = "acdcb", p = "a*c?b"',
        output: 'false',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dynamic-programming', 'string', 'greedy'],
    hints: [
      'dp[i][j] represents whether s[0..i-1] matches p[0..j-1].',
      'If p[j-1] == "*", then dp[i][j] = dp[i-1][j] (use star for one char) OR dp[i][j-1] (use star for empty).',
      'Otherwise match iff dp[i-1][j-1] and (s[i-1]==p[j-1] or p[j-1]=="?").',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Burst Sequence Commander',
    prompt:
      'A demolitions expert is given n balloons labeled with numbers. Bursting balloon i earns coins = nums[i-1]*nums[i]*nums[i+1] (using 1 for out-of-bounds). After bursting, the array closes. Find the maximum coins you can collect by bursting all balloons in the optimal order.',
    constraints: '1 <= nums.length <= 300 | 0 <= nums[i] <= 100',
    examples: [
      {
        input: 'nums = [3,1,5,8]',
        output: '167',
        explanation: 'Burst order 1,5,3,8 → 3*1*5 + 3*5*8 + 1*3*8 + 1*8*1 = 15+120+24+8 = 167.',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['dynamic-programming', 'divide-and-conquer', 'memoization'],
    hints: [
      'Think in reverse: instead of which balloon to burst first, think about which to burst last in a range.',
      'dp[left][right] = max coins from bursting all balloons strictly between left and right.',
      'For each k in (left, right), compute nums[left]*nums[k]*nums[right] + dp[left][k] + dp[k][right].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The K-Inversion Architect',
    prompt:
      'An array of length n is called valid if it contains each integer from 1 to n exactly once. Given n and k, count the number of valid arrays that have exactly k inverse pairs. An inverse pair is (i,j) where i<j but arr[i]>arr[j]. Return count modulo 10^9+7.',
    constraints: '1 <= n <= 1000 | 0 <= k <= 1000',
    examples: [
      {
        input: 'n = 3, k = 1',
        output: '2',
        explanation: 'Arrays [1,3,2] and [2,1,3] each have 1 inverse pair.',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['dynamic-programming', 'math', 'combinatorics'],
    hints: [
      'dp[i][j] = number of permutations of length i with exactly j inverse pairs.',
      'Inserting element i into a permutation of length i-1 at position p creates p new inverse pairs.',
      'Use prefix sums to compute transitions in O(1): dp[i][j] = sum(dp[i-1][j-p]) for p in 0..min(i-1,j).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Stick Splitting Economist',
    prompt:
      'A lumber yard has a stick of length n. A set of cut positions is specified and each cut costs the current length of the stick being cut at that moment. Find the minimum total cost to perform all cuts. You may perform the cuts in any order.',
    constraints: '2 <= n <= 10^6 | 1 <= cuts.length <= min(n-1, 100) | 1 <= cuts[i] <= n-1 | all cuts are distinct',
    examples: [
      {
        input: 'n = 7, cuts = [1,3,4,5]',
        output: '16',
        explanation: 'Cut at 3 first (cost 7), then 1 (cost 3), then 4 (cost 4), then 5 (cost 2): 7+3+4+2=16.',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dynamic-programming', 'divide-and-conquer'],
    hints: [
      'Sort the cuts and add 0 and n as boundary sentinels.',
      'dp[i][j] = minimum cost to cut all positions between cuts[i] and cuts[j].',
      'For each cut k between i and j: dp[i][j] = min over k of (cuts[j]-cuts[i] + dp[i][k] + dp[k][j]).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Dual-Harvest Expedition',
    prompt:
      'Two agricultural robots start at opposite top corners of an m×n grid and must move simultaneously downward to collect cherries, then return (equivalently: two robots both start at row 0 and reach row m-1). Robot 1 starts at (0,0) and Robot 2 at (0,n-1). Each step they move to row+1 and to the same or adjacent column. A cell with -1 is blocked; cherries in a cell are collected once even if both visit it. Maximize total cherries.',
    constraints: '2 <= rows, cols <= 70 | -1 <= grid[i][j] <= 9',
    examples: [
      {
        input: 'grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]',
        output: '24',
      },
    ],
    difficulty: 'hard',
    estMin: 55,
    tags: ['dynamic-programming', '3d-dp', 'grid'],
    hints: [
      'Simulate both robots moving simultaneously: at row r, track (col1, col2) as the state.',
      'dp[r][c1][c2] = max cherries both can collect from row r onward given their columns.',
      'When c1 == c2, only count the cherry once. Each robot has 3 move choices, so 9 transitions total.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'The Palindrome Reconstructor',
    prompt:
      'A decoder ring is broken into a sequence of characters. Count how many distinct palindromic subsequences of length 5 exist in the given string. A subsequence is obtained by deleting characters without reordering the rest. Two subsequences are distinct if they differ at any position.',
    constraints: '1 <= s.length <= 1000 | s consists of digits 0-9',
    examples: [
      {
        input: 's = "103301"',
        output: '2',
        explanation: 'Palindromic subsequences of length 5: "10301" and "13031" — verify: positions matter.',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dynamic-programming', 'string', 'combinatorics'],
    hints: [
      'A palindrome of length 5 has form abcba — fix the outer two characters and count valid middles.',
      'Precompute left[i][c] = how many of char c appear in s[0..i-1] and right[i][c] = how many in s[i+1..n-1].',
      'For each pair (i,j) where s[i]==s[j] and j>i, count distinct 3-char palindromes between them.',
    ],
  },

  // ─────────────────────────────────────────────
  // BINARY SEARCH (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'binary-search',
    title: 'The Median Fusion Protocol',
    prompt:
      'Two sorted arrays from separate data pipelines must yield a combined median without merging. Given two sorted arrays nums1 and nums2 of size m and n, find the median of the combined sorted array in O(log(m+n)) time.',
    constraints: '0 <= m, n <= 1000 | -10^6 <= nums1[i], nums2[i] <= 10^6 | (m+n) >= 1',
    examples: [
      {
        input: 'nums1 = [1,3], nums2 = [2]',
        output: '2.0',
      },
      {
        input: 'nums1 = [1,2], nums2 = [3,4]',
        output: '2.5',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['binary-search', 'array', 'divide-and-conquer'],
    hints: [
      'Binary search on the partition position of the smaller array.',
      'A valid partition means max(left_A, left_B) <= min(right_A, right_B).',
      'If max(left_A) > min(right_B), move partition left; else move right.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Distance Rank Investigator',
    prompt:
      'A signal analyst has n sensor readings. The "pair distance" for indices (i,j) is |nums[i]-nums[j]|. Given k, find the k-th smallest pair distance among all n*(n-1)/2 pairs.',
    constraints: '2 <= nums.length <= 10^4 | 0 <= nums[i] <= 10^6 | 1 <= k <= n*(n-1)/2',
    examples: [
      {
        input: 'nums = [1,3,1], k = 1',
        output: '0',
        explanation: 'Pairs: (1,3)→2, (1,1)→0, (3,1)→2. Sorted: [0,2,2]. 1st = 0.',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['binary-search', 'sorting', 'two-pointers'],
    hints: [
      'Binary search on the answer (the distance value), not on the array index.',
      'For a candidate distance d, count how many pairs have distance <= d using a two-pointer on sorted array.',
      'The answer is the smallest d such that count(d) >= k.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Fuel Station Planner',
    prompt:
      'A surveyor places n gas stations along a highway of length D, at positions given in a sorted array. You may add k additional stations anywhere. Minimize the maximum distance between consecutive stations after adding k stations. Return the answer with 10^-6 precision.',
    constraints: '2 <= stations.length <= 10^4 | 0 <= stations[i] <= 10^8 | stations is sorted | 1 <= k <= 10^6',
    examples: [
      {
        input: 'stations = [1,2,3,4,5,6,7,8,9,10], k = 9',
        output: '0.500000',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['binary-search', 'greedy', 'math'],
    hints: [
      'Binary search on the answer (maximum gap size).',
      'For a candidate gap size d, check if you can reduce all gaps to at most d using at most k new stations.',
      'Gap of length L needs ceil(L/d)-1 new stations to reduce to at most d.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Multiplication Table Navigator',
    prompt:
      'A number theorist studies an m×n multiplication table where table[i][j] = i*j (1-indexed). Find the k-th smallest number in the entire table without building the full table.',
    constraints: '1 <= m, n <= 3*10^4 | 1 <= k <= m*n',
    examples: [
      {
        input: 'm = 3, n = 3, k = 5',
        output: '3',
        explanation: 'Table: [[1,2,3],[2,4,6],[3,6,9]]. Sorted: 1,2,2,3,3,4,6,6,9. 5th = 3.',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['binary-search', 'math'],
    hints: [
      'Binary search on the answer value x.',
      'Count how many table entries are <= x: sum over each row i of min(x/i, n).',
      'Find the smallest x such that count(x) >= k.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Inversion Counter',
    prompt:
      'A historian analyzing rankings needs: for each element in an array, count how many numbers to its right are smaller. Given nums, return an array counts where counts[i] is the number of smaller elements to the right of nums[i].',
    constraints: '0 <= nums.length <= 10^5 | -10^4 <= nums[i] <= 10^4',
    examples: [
      {
        input: 'nums = [5,2,6,1]',
        output: '[2,1,1,0]',
        explanation: '5→{2,1}, 2→{1}, 6→{1}, 1→{}.',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['binary-search', 'binary-indexed-tree', 'merge-sort'],
    hints: [
      'Process from right to left, maintaining a sorted structure of seen elements.',
      'A Binary Indexed Tree (Fenwick Tree) on coordinate-compressed values gives O(log n) query and update.',
      'Alternatively, use modified merge sort where during merge you count inversions.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'The Magnetic Force Maximizer',
    prompt:
      'A physicist places m magnets in n positions along a rail to maximize the minimum magnetic force (distance) between any two adjacent magnets. Given the sorted positions array and m, return the maximum possible minimum force.',
    constraints: '2 <= n <= 10^5 | 1 <= m <= n | 1 <= position[i] <= 10^9 | positions are distinct and sorted',
    examples: [
      {
        input: 'position = [1,2,3,4,7], m = 3',
        output: '3',
        explanation: 'Place at 1,4,7 → minimum force is 3.',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['binary-search', 'greedy'],
    hints: [
      'Binary search on the minimum distance d between any two adjacent placed magnets.',
      'For a given d, greedily place magnets: start at the first position, then place the next as soon as gap >= d.',
      'Check if you can place all m magnets with minimum gap >= d.',
    ],
  },

  // ─────────────────────────────────────────────
  // BFS (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'bfs',
    title: 'The Full-Node Coverage Mission',
    prompt:
      'A network engineer must find the shortest path visiting all n nodes in an undirected graph where n <= 12. Given the adjacency list, return the minimum number of edges in a walk that visits every node at least once. Use bitmask BFS to track which nodes have been visited.',
    constraints: '1 <= n <= 12 | 0 <= edges.length <= n*(n-1)/2 | graph is connected',
    examples: [
      {
        input: 'graph = [[1,2,3],[0],[0],[0]]',
        output: '4',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['bfs', 'bitmask', 'dynamic-programming'],
    hints: [
      'State = (current node, bitmask of visited nodes). BFS over this state space.',
      'dist[node][mask] = minimum steps to be at node having visited the nodes in mask.',
      'Start with all (node, 1<<node) states at distance 0 — you can start anywhere.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Lexicon Ladder',
    prompt:
      'A codebreaker must find ALL shortest transformation sequences from a beginWord to an endWord, each step changing exactly one letter to form a word in the dictionary. Return all such sequences as arrays of strings. If no path exists, return an empty list.',
    constraints: '1 <= beginWord.length <= 5 | 1 <= wordList.length <= 500 | all words same length | all lowercase',
    examples: [
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: '[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]',
      },
    ],
    difficulty: 'hard',
    estMin: 55,
    tags: ['bfs', 'backtracking', 'string'],
    hints: [
      'BFS to build a layer-by-layer parent map from endWord back to beginWord.',
      'Only add a word to a layer if it has not been seen in a previous layer (to guarantee shortest paths).',
      'DFS/backtracking on the parent map to reconstruct all paths.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Sliding Puzzle Resolver',
    prompt:
      'A toy puzzle has a 2×3 board where tiles labeled 1-5 and a blank (0) can slide. Given the initial board configuration, return the minimum number of moves to reach [[1,2,3],[4,5,0]], or -1 if impossible.',
    constraints: 'board is always 2×3 | contains 0-5 each exactly once',
    examples: [
      {
        input: 'board = [[4,1,2],[5,0,3]]',
        output: '5',
      },
      {
        input: 'board = [[1,2,3],[5,4,0]]',
        output: '-1',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['bfs', 'string', 'matrix'],
    hints: [
      'Encode the board as a string state. BFS over all reachable states.',
      'Precompute the valid swap neighbors for each position index in the flattened 6-element array.',
      'Use a visited set of state strings to avoid revisiting.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Wildfire Propagation Analyst',
    prompt:
      'A forest fire simulator needs the minimum time for fire to spread from multiple source cells to all reachable land in a grid. Cells are "0" (water/blocked), "1" (land), and some cells start on fire. Each minute, fire spreads to all adjacent land cells. Return the time until all reachable land cells are burning, or -1 if some land cells can never be reached.',
    constraints: '1 <= m, n <= 1000 | grid[i][j] is 0 or 1 | at least one fire source cell',
    examples: [
      {
        input: 'grid = [[1,1,0],[1,1,0],[0,1,1]], fires = [[0,0],[1,1]]',
        output: '2',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['bfs', 'multi-source', 'grid'],
    hints: [
      'Multi-source BFS: initialize the queue with all fire source cells at time 0.',
      'Standard BFS from all sources simultaneously gives minimum spread time to each cell.',
      'After BFS completes, check if any land cell was never reached.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Golf Course Arborist',
    prompt:
      'A golf course has trees at various heights in a grid. You must cut all trees in order of increasing height. To cut a tree you must walk to it and each step costs 1. If a tree is unreachable from the current position, return -1. Find the total minimum steps to cut all trees in height order.',
    constraints: '1 <= m, n <= 50 | 0 <= forest[i][j] <= 10^9',
    examples: [
      {
        input: 'forest = [[1,2,3],[0,0,4],[7,6,5]]',
        output: '6',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['bfs', 'sorting', 'grid'],
    hints: [
      'Sort trees by height to determine the cut order.',
      'For each consecutive pair (source, target), run a BFS to find the shortest path.',
      'Cells with value 0 are blocked. BFS from current position to next tree position.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'The Knight Errant Pathfinder',
    prompt:
      'A chess knight at position (r,c) on an infinite board must reach (tr,tc). Knights move in an L-shape: 2 squares in one direction and 1 in the other. Return the minimum number of moves required.',
    constraints: '-300 <= r, c, tr, tc <= 300',
    examples: [
      {
        input: 'source = [0,0], target = [2,1]',
        output: '1',
      },
      {
        input: 'source = [0,0], target = [5,5]',
        output: '4',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['bfs', 'math'],
    hints: [
      'BFS on the 2D grid from source to target, expanding all 8 knight moves.',
      'Bound the search space — you never need to go more than a few squares beyond the target.',
      'A visited set prevents revisiting cells.',
    ],
  },

  // ─────────────────────────────────────────────
  // DFS (7)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'dfs',
    title: 'The Bridge Vulnerability Scanner',
    prompt:
      'A network security team must identify all critical connections (bridges) in a network of n servers connected by bidirectional edges. A bridge is an edge whose removal disconnects the network. Return all such edges using Tarjan\'s bridge-finding algorithm.',
    constraints: '2 <= n <= 10^5 | n-1 <= connections.length <= 10^5 | no self-loops | no duplicate edges',
    examples: [
      {
        input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]',
        output: '[[1,3]]',
        explanation: 'Removing edge [1,3] disconnects node 3.',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['dfs', 'graph', 'tarjan'],
    hints: [
      'Use Tarjan\'s algorithm: maintain discovery time disc[] and low[] values for each node.',
      'low[u] = min discovery time reachable from the subtree rooted at u via back edges.',
      'Edge (u,v) is a bridge if low[v] > disc[u] (the subtree under v cannot reach u or ancestors of u).',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Tree Archival Protocol',
    prompt:
      'A database must serialize a binary tree to a string and deserialize it back exactly. Design and implement serialize(root) and deserialize(data) functions. The serialization must handle null nodes. Use a DFS-based preorder approach.',
    constraints: '-1000 <= Node.val <= 1000 | 0 <= tree node count <= 10^4',
    examples: [
      {
        input: 'root = [1,2,3,null,null,4,5]',
        output: 'serialize and deserialize produces the same tree',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dfs', 'binary-tree', 'design', 'string'],
    hints: [
      'Serialize with preorder traversal, using a delimiter (e.g., ",") and a null marker (e.g., "#").',
      'Deserialize by splitting the string and reconstructing preorder with a pointer or queue.',
      'Recursively: read the first value, if not "#" create node and recurse for left then right subtree.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The BST Recovery Operation',
    prompt:
      'A BST was corrupted: exactly two nodes were silently swapped. Recover the tree by swapping them back. You must do this in O(1) extra space (no arrays). The tree structure is not changed — only the values of the two swapped nodes are fixed.',
    constraints: '2 <= number of nodes <= 1000 | -2^31 <= Node.val <= 2^31 - 1',
    examples: [
      {
        input: 'root = [1,3,null,null,2]',
        output: '[3,1,null,null,2]',
        explanation: 'Swap 1 and 3 back.',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dfs', 'binary-tree', 'morris-traversal'],
    hints: [
      'In-order traversal of a valid BST is sorted. Find the two out-of-order elements.',
      'First violation: prev.val > curr.val — record prev as first candidate.',
      'Second violation: record curr as second candidate. Swap their values.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Matrix Growth Pathfinder',
    prompt:
      'A biologist maps cell growth paths in an m×n grid where each cell has a growth potential value. From any cell you can move to an adjacent cell only if it has a strictly larger value. Find the length of the longest increasing path in the matrix.',
    constraints: '1 <= m, n <= 200 | 0 <= matrix[i][j] <= 2^31 - 1',
    examples: [
      {
        input: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]',
        output: '4',
        explanation: 'Longest path: [1,2,6,9].',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['dfs', 'memoization', 'grid', 'topological-sort'],
    hints: [
      'DFS with memoization: for each cell, the longest path starting there depends only on its value.',
      'memo[i][j] = longest increasing path starting at (i,j).',
      'No need to track visited — values are strictly increasing so there can be no cycles.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Kosaraju\'s Component Identifier',
    prompt:
      'A distributed systems engineer must find all strongly connected components (SCCs) in a directed graph of n nodes. Implement Kosaraju\'s two-pass DFS algorithm. Return the number of SCCs and the membership of each node.',
    constraints: '1 <= n <= 10^5 | 0 <= edges.length <= 5*10^5',
    examples: [
      {
        input: 'n = 5, edges = [[0,1],[1,2],[2,0],[1,3],[3,4]]',
        output: 'SCCs = 3: {0,1,2}, {3}, {4}',
      },
    ],
    difficulty: 'hard',
    estMin: 55,
    tags: ['dfs', 'graph', 'scc', 'kosaraju'],
    hints: [
      'First DFS on the original graph: push nodes to a stack in finish-time order.',
      'Transpose the graph (reverse all edges).',
      'Second DFS on the transposed graph in reverse finish order: each DFS tree is one SCC.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Island Symmetry Analyst',
    prompt:
      'A geographer maps islands (connected groups of 1s) in a binary grid and considers two islands identical if one can be transformed into the other via rotation (0°, 90°, 180°, 270°) or reflection (8 total symmetries). Count the number of distinct islands under these transformations.',
    constraints: '1 <= m, n <= 50 | grid[i][j] is 0 or 1',
    examples: [
      {
        input: 'grid = [[1,1,0,0,0],[1,0,0,0,0],[0,0,0,0,1],[0,0,0,1,1]]',
        output: '1',
        explanation: 'Both L-shaped islands are reflections of each other.',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['dfs', 'hash-set', 'geometry', 'grid'],
    hints: [
      'Extract each island as a set of relative coordinates (subtract top-left corner).',
      'Generate all 8 transformations (rotations and reflections) of the coordinate set.',
      'Normalize each transformation (translate so min coordinates are 0) and store the canonical form in a set.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'The Box Removal Cascade',
    prompt:
      'A physicist studies a row of colored boxes. You can remove a group of k consecutive boxes of the same color to earn k^2 points. You may strategically reorder removals so that non-adjacent boxes of the same color become adjacent. Return the maximum points from removing all boxes.',
    constraints: '1 <= boxes.length <= 100 | 1 <= boxes[i] <= 100',
    examples: [
      {
        input: 'boxes = [1,3,2,2,2,3,4,3,1]',
        output: '23',
        explanation: 'Remove [2,2,2] → 9pts, [3,3,3] → 9pts, [1] → 1, [4] → 1, [1] → 1. But optimal reordering scores 23.',
      },
    ],
    difficulty: 'hard',
    estMin: 60,
    tags: ['dfs', 'dynamic-programming', 'memoization', '3d-dp'],
    hints: [
      'dp[l][r][k] = max points for boxes[l..r] with k identical boxes appended to the left of boxes[l].',
      'Base: dp[l][l][k] = (k+1)^2.',
      'Either remove boxes[l] with its k attached boxes immediately, or find some m in (l,r) where boxes[m]==boxes[l] and merge.',
    ],
  },

  // ─────────────────────────────────────────────
  // BACKTRACKING (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'backtracking',
    title: 'The Operator Insertion Strategist',
    prompt:
      'A cryptographer has a string of digits "num" and a target integer. Insert the operators +, -, or * between any digits (you may also concatenate digits to form multi-digit numbers) to make the expression evaluate to target. Return all valid expressions as strings.',
    constraints: '1 <= num.length <= 10 | num consists of digits | -2^31 <= target <= 2^31 - 1',
    examples: [
      {
        input: 'num = "123", target = 6',
        output: '["1+2+3","1*2*3"]',
      },
      {
        input: 'num = "232", target = 8',
        output: '["2*3+2","2+3*2"]',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['backtracking', 'string', 'math'],
    hints: [
      'Backtrack through the digits, at each step choosing a prefix number and an operator to place after it.',
      'Track the current total value and the last multiplicand to correctly handle multiplication precedence.',
      'When placing *, update: total = total - lastMul + lastMul * currNum.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Sentence Decoder',
    prompt:
      'A linguistic decoder must find all possible sentences formed by inserting spaces into a string s, where each resulting word appears in a dictionary. Return all such sentences. This is Word Break II.',
    constraints: '1 <= s.length <= 20 | 1 <= wordDict.length <= 1000 | 1 <= wordDict[i].length <= 10 | s and words contain only lowercase letters',
    examples: [
      {
        input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',
        output: '["cats and dog","cat sand dog"]',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['backtracking', 'dynamic-programming', 'memoization', 'string'],
    hints: [
      'Use memoization: memo[i] = all valid sentences starting from index i.',
      'At each position, try all valid word prefixes from the dictionary.',
      'Cache results to avoid exponential blowup in overlapping subproblems.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Sticker Minimization Engineer',
    prompt:
      'A puzzle crafter has a set of sticker strings and must spell out a target word. Each sticker can be used unlimited times, but only one character per sticker use contributes to the target. Find the minimum number of stickers needed. Return -1 if impossible.',
    constraints: '1 <= stickers.length <= 50 | 1 <= stickers[i].length <= 10 | 1 <= target.length <= 15 | all lowercase',
    examples: [
      {
        input: 'stickers = ["with","example","science"], target = "thehat"',
        output: '3',
        explanation: 'Use "with" for t+h, "example" for e+a, "science" for h — but optimal is 3.',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['backtracking', 'dynamic-programming', 'bitmask', 'memoization'],
    hints: [
      'Represent the target coverage state as a bitmask (which target characters have been covered).',
      'DP or memoized backtracking over bitmask states.',
      'Always try to cover the first uncovered character to avoid counting equivalent states multiple times.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Cryptarithmetic Solver',
    prompt:
      'A verbal arithmetic puzzle presents an equation of the form WORD1 + WORD2 = WORD3 where each letter represents a unique digit (0-9), and leading zeros are not allowed. Determine if the puzzle has a valid assignment. Return true or false.',
    constraints: '2 <= words.length <= 5 | 1 <= words[i].length <= 7 | result.length <= 7 | all uppercase letters | no leading zeros in any word',
    examples: [
      {
        input: 'words = ["SEND","MORE"], result = "MONEY"',
        output: 'true',
        explanation: 'S=9,E=5,N=6,D=7,M=1,O=0,R=8,Y=2 gives 9567+1085=10652.',
      },
    ],
    difficulty: 'hard',
    estMin: 60,
    tags: ['backtracking', 'math', 'constraint-satisfaction'],
    hints: [
      'Extract all unique characters and their column positions (from right to left).',
      'Backtrack assigning digits to characters column by column, tracking carry.',
      'For each column, the constraint is: sum of column chars + carry = result char + 10 * new_carry.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Equal Partition Coordinator',
    prompt:
      'A logistics coordinator must divide n packages into k groups with equal total weight. Given an integer array nums and integer k, determine if it is possible to divide the array into k non-empty subsets with equal sum.',
    constraints: '1 <= k <= nums.length <= 16 | 1 <= nums[i] <= 10^4 | each nums[i] is at most total/k',
    examples: [
      {
        input: 'nums = [4,3,2,3,5,2,1], k = 4',
        output: 'true',
        explanation: '[5],[1,4],[2,3],[2,3].',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['backtracking', 'bitmask', 'dynamic-programming'],
    hints: [
      'Each subset must sum to total/k. If total is not divisible by k, return false.',
      'Backtrack: try placing each unused number into one of k buckets.',
      'Optimization: sort nums descending, prune early when bucket sum exceeds target.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Zuma Sequence Tactician',
    prompt:
      'In the Zuma game, colored balls are arranged in a row. In one move, you can insert 1-2 extra balls anywhere in the row; when 3+ consecutive same-colored balls exist they burst and disappear (cascades possible). Find the minimum insertions to clear all balls. Return -1 if impossible.',
    constraints: '1 <= board.length <= 16 | board[i] is R, Y, B, G, W | 0 <= hand.length <= 5 | hand[i] is R, Y, B, G, W',
    examples: [
      {
        input: 'board = "WRRBBW", hand = ["R","B","B","B","B"]',
        output: '2',
      },
    ],
    difficulty: 'hard',
    estMin: 60,
    tags: ['backtracking', 'dfs', 'memoization', 'string'],
    hints: [
      'After each insertion, apply burst rules (remove groups of 3+) to get the new board state.',
      'Use memoization with (board_state, hand_bitmask) as the key.',
      'Focus insertions on existing groups to trigger cascades efficiently.',
    ],
  },

  // ─────────────────────────────────────────────
  // GREEDY (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'greedy',
    title: 'Capital Strategist',
    prompt:
      'An investor starts with capital w and can complete at most k projects. Each project has a profit and a minimum capital requirement. After completing a project, add its profit to current capital. Select projects to maximize final capital. This is the IPO problem.',
    constraints: '1 <= k <= 10^5 | 0 <= w <= 10^9 | 1 <= n <= 10^5 | 0 <= profits[i] <= 10^4 | 0 <= capital[i] <= 10^9',
    examples: [
      {
        input: 'k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]',
        output: '4',
        explanation: 'Take project 0 (profit 1), now w=1. Take project 2 (profit 3), now w=4.',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['greedy', 'heap', 'sorting'],
    hints: [
      'Sort projects by capital requirement.',
      'Use a max-heap of profits for all unlocked projects (capital[i] <= current w).',
      'Each round: unlock all newly affordable projects, then greedily pick the highest profit one.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Academic Credit Maximizer',
    prompt:
      'A university advisor has a student who wants to take the maximum number of courses. Each course has a duration (days) and a last-day deadline. A course can only be taken if it ends on or before its deadline. Courses must be taken sequentially. Return the maximum number of courses that can be completed.',
    constraints: '1 <= courses.length <= 10^4 | 1 <= duration[i], lastDay[i] <= 10^4',
    examples: [
      {
        input: 'courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]',
        output: '3',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['greedy', 'heap', 'sorting'],
    hints: [
      'Sort courses by deadline.',
      'Greedily take each course; if total time exceeds the deadline, drop the longest course taken so far.',
      'Use a max-heap to efficiently find and remove the longest previously taken course.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Garden Irrigation Optimizer',
    prompt:
      'A smart irrigation system has taps along a 1D garden of length n. Tap i at position i can water the range [i-ranges[i], i+ranges[i]]. Find the minimum number of taps to water the entire garden [0,n]. Return -1 if impossible.',
    constraints: '1 <= n <= 10^4 | ranges.length == n+1 | 0 <= ranges[i] <= 100',
    examples: [
      {
        input: 'n = 5, ranges = [3,4,1,1,0,0]',
        output: '1',
        explanation: 'Tap 1 covers [1-4, 1+4] = [-3, 5] which covers [0,5].',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['greedy', 'interval', 'array'],
    hints: [
      'Convert each tap to an interval and reduce to the minimum interval cover problem.',
      'Sort intervals by start. Greedily pick the interval that extends coverage the furthest.',
      'This is equivalent to Jump Game II — track current reach and next reach.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Consecutive Subsequence Builder',
    prompt:
      'A music composer has an array of sorted integers and wants to split it into the minimum number of consecutive subsequences each of length at least 3. Return true if possible, false otherwise. E.g., [1,2,3,4] → [1,2,3] and [4] — fails since [4] has length 1.',
    constraints: '1 <= nums.length <= 10^4 | -300 <= nums[i] <= 300 | nums is sorted non-decreasing',
    examples: [
      {
        input: 'nums = [1,2,3,3,4,5]',
        output: 'true',
        explanation: '[1,2,3] and [3,4,5].',
      },
      {
        input: 'nums = [1,2,3,4,4,5]',
        output: 'false',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['greedy', 'hash-map'],
    hints: [
      'Use two maps: frequency of remaining numbers, and the count of open subsequences ending at each value.',
      'For each number n: prefer appending it to an existing subsequence ending at n-1.',
      'If no such subsequence exists, try to start a new one requiring n+1 and n+2.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Long-Range Fuel Strategist',
    prompt:
      'A space probe starts at position 0 with fuel 0 and must reach its target. Along the route are n fuel stations, each at a position and with a fuel capacity. The probe can stop at any subset of stations. Return the minimum number of fuel stops to reach the target, or -1 if impossible.',
    constraints: '1 <= target <= 10^9 | 0 <= startFuel <= 10^9 | 0 <= stations.length <= 500 | 0 <= position[i] <= 10^9 | 1 <= fuel[i] <= 10^9',
    examples: [
      {
        input: 'target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]',
        output: '2',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['greedy', 'heap', 'dynamic-programming'],
    hints: [
      'Greedy with a max-heap: as you pass each station, add its fuel to the heap.',
      'When you run out of fuel, greedily take the largest fuel top from the heap.',
      'Count each extraction from the heap as one stop.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Reachability Patch Installer',
    prompt:
      'An array represents cumulative coverage: nums[i] means all integers in [1, nums[i]] are already covered. Patches can be inserted to extend coverage. Given nums (sorted) and n, find the minimum number of patches so that every integer in [1,n] is covered.',
    constraints: '1 <= nums.length <= 1000 | 1 <= nums[i] <= 10^4 | 1 <= n <= 2^31 - 1',
    examples: [
      {
        input: 'nums = [1,3], n = 6',
        output: '1',
        explanation: 'Add 2, now covers [1,2,3,4,6] — actually all of [1,6] with sums.',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['greedy', 'math'],
    hints: [
      'Track the current covered range [1, reach]. If nums[i] <= reach+1, extend reach by nums[i].',
      'If nums[i] > reach+1, greedily patch with value reach+1 (doubles the coverage).',
      'Count patches until reach >= n.',
    ],
  },

  // ─────────────────────────────────────────────
  // HEAP (7)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'heap',
    title: 'The Temporal Job Scheduler',
    prompt:
      'A job scheduler receives jobs each with a start time, end time, and profit. You can complete at most one job at a time and want to maximize total profit. Jobs can be scheduled back to back. This is the maximum profit in job scheduling problem.',
    constraints: '1 <= jobs.length <= 5*10^4 | 1 <= startTime[i] < endTime[i] <= 10^9 | 1 <= profit[i] <= 10^4',
    examples: [
      {
        input: 'startTime=[1,2,3,3], endTime=[3,4,5,6], profit=[50,10,40,70]',
        output: '120',
        explanation: 'Take job 0 (profit 50) and job 3 (profit 70).',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['heap', 'dynamic-programming', 'sorting', 'binary-search'],
    hints: [
      'Sort jobs by start time. Use DP where dp[i] = max profit considering jobs 0..i.',
      'For each job, binary search to find the latest non-overlapping previous job.',
      'Alternatively, sweep by end time using a min-heap keyed on end time with current max profit.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Conference Hall Allocator',
    prompt:
      'A conference center has n rooms. Given meetings as [start, end] intervals, assign each meeting to a room. Rooms are reused after meetings end. When multiple rooms become free simultaneously, the one with the lowest number is preferred. Return which room holds the most meetings.',
    constraints: '1 <= n <= 100 | 1 <= meetings.length <= 10^5 | 0 <= start[i] < end[i] <= 5*10^5',
    examples: [
      {
        input: 'n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]',
        output: '0',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['heap', 'sorting', 'simulation'],
    hints: [
      'Sort meetings by start time. Use two heaps: free rooms (min-heap by room number) and busy rooms (min-heap by end time).',
      'For each meeting: release all rooms that ended before the current meeting starts.',
      'If no room is free, take the earliest-ending busy room (delay the meeting).',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Data Stream Median Tracker',
    prompt:
      'A real-time analytics pipeline receives a stream of numbers. After each insertion, it must report the current median. Design a data structure with addNum(int num) and findMedian() methods. This is the classic find median from data stream problem.',
    constraints: '-10^5 <= num <= 10^5 | At most 5*10^4 calls to addNum and findMedian',
    examples: [
      {
        input: 'addNum(1), addNum(2), findMedian() → 1.5, addNum(3), findMedian() → 2.0',
        output: '1.5, 2.0',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['heap', 'design', 'two-heaps'],
    hints: [
      'Maintain a max-heap for the lower half and a min-heap for the upper half.',
      'After each insertion, rebalance so sizes differ by at most 1.',
      'Median is the top of the larger heap, or average of both tops if equal size.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Fair Wage Allocator',
    prompt:
      'A labor economist must hire exactly k workers from a pool where each worker has a quality rating and a wage expectation. The team must be paid such that each worker receives (total_quality_sum / their_quality) * their_expected_wage_ratio. Formally: pay[i] = (wage[i]/quality[i]) * total_quality. Minimize total pay while hiring exactly k workers.',
    constraints: '1 <= k <= workers.length <= 10^4 | 1 <= quality[i] <= 10^4 | 1 <= wage[i] <= 10^6',
    examples: [
      {
        input: 'quality = [10,20,5], wage = [70,50,30], k = 2',
        output: '105.0',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['heap', 'greedy', 'sorting', 'math'],
    hints: [
      'The ratio wage[i]/quality[i] determines the captain\'s rate. Sort workers by this ratio.',
      'For a group, the total wage = ratio_of_captain * sum_of_qualities.',
      'Sweep through sorted workers; maintain the k smallest qualities seen so far with a max-heap.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Rising Water Swimmer',
    prompt:
      'A swimmer traverses an n×n grid where grid[i][j] represents the elevation at time t. At time t, you can swim to adjacent cells with elevation <= t. Find the minimum time t such that there exists a path from (0,0) to (n-1,n-1). This is Dijkstra\'s on a grid.',
    constraints: '1 <= n <= 50 | 0 <= grid[i][j] <= n^2 - 1 | all values are unique',
    examples: [
      {
        input: 'grid = [[0,2],[1,3]]',
        output: '3',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['heap', 'dijkstra', 'binary-search', 'grid'],
    hints: [
      'Model as a shortest path problem: cost to reach a cell is max(cost_to_reach_neighbor, grid[cell]).',
      'Use Dijkstra\'s algorithm with a min-heap keyed on the max elevation seen so far.',
      'Alternatively, binary search on t and BFS/DFS to check reachability.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Urban Skyline Architect',
    prompt:
      'A city planner receives a list of buildings as [left, right, height] rectangles and must compute the skyline outline — the set of key points that define the silhouette. Return a list of [x, height] points where the skyline changes.',
    constraints: '0 <= buildings.length <= 10^4 | 0 <= left[i] < right[i] <= 2^31 - 1 | 1 <= height[i] <= 2^31 - 1',
    examples: [
      {
        input: 'buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]',
        output: '[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['heap', 'sorting', 'sweep-line'],
    hints: [
      'Create events for each building: start event (x, -h) and end event (x, h).',
      'Sort events by x; on ties process start before end and higher buildings first.',
      'Use a max-heap of active building heights; the skyline changes when the max height changes.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'Venture Portfolio Optimizer',
    prompt:
      'A venture capitalist revisits the IPO problem with a twist: they must choose exactly k projects from a list but each project has a minimum capital requirement. Starting with initial capital w, maximize final capital by completing projects in optimal order. Return the maximized capital.',
    constraints: '1 <= k <= 10^5 | 0 <= w <= 10^9 | n == profits.length == capital.length | 1 <= n <= 10^5',
    examples: [
      {
        input: 'k = 3, w = 0, profits = [1,2,3,4,5], capital = [0,1,2,0,3]',
        output: '10',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['heap', 'greedy', 'sorting'],
    hints: [
      'Sort projects by required capital and use a pointer to unlock them as capital grows.',
      'Use a max-heap to always select the highest-profit unlocked project.',
      'Repeat k times: add all newly affordable projects to heap, pick max profit.',
    ],
  },

  // ─────────────────────────────────────────────
  // HASH MAP (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'hash-map',
    title: 'The O(1) Intelligence Registry',
    prompt:
      'Design a data structure that supports insert(key), delete(key), and getRandom() in O(1) average time, where getRandom returns any key with equal probability. All O(1) data structure.',
    constraints: '-2^31 <= val <= 2^31 - 1 | At most 2*10^5 calls total | No duplicate inserts; only delete existing keys',
    examples: [
      {
        input: 'insert(1), insert(2), insert(3), getRandom(), delete(2), getRandom()',
        output: 'getRandom returns any of {1,2,3} uniformly; after delete returns 1 or 3',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['hash-map', 'design', 'array', 'randomization'],
    hints: [
      'Combine a hash map (key → index) with a dynamic array (index → key).',
      'For delete: swap the target with the last element, update the map, then pop the array.',
      'getRandom: return array[rand % array.length].',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Frequency Stack Oracle',
    prompt:
      'A call-stack variant tracks elements by frequency. Push(x) adds x; pop() removes the most-frequently pushed element. Ties broken by recency (most recently pushed among the most frequent). Design this Maximum Frequency Stack.',
    constraints: '0 <= val <= 10^9 | At most 2*10^4 calls to push and pop | pop will never be called on empty stack',
    examples: [
      {
        input: 'push(5),push(7),push(5),push(7),push(4),push(5) → pop()=5, pop()=7, pop()=5, pop()=4',
        output: '5,7,5,4',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['hash-map', 'design', 'stack'],
    hints: [
      'Track frequency of each element with a freq map.',
      'Maintain a map from frequency → stack of elements pushed at that frequency.',
      'maxFreq tracks current maximum frequency; on pop, decrement maxFreq if the stack becomes empty.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Palindrome Pair Detector',
    prompt:
      'A linguistics engine receives a list of unique words and must find all index pairs (i,j) where words[i]+words[j] forms a palindrome. Return all such pairs as [i,j].',
    constraints: '1 <= words.length <= 5000 | 0 <= words[i].length <= 300 | all words are unique | lowercase only',
    examples: [
      {
        input: 'words = ["abcd","dcba","lls","s","sssll"]',
        output: '[[0,1],[1,0],[3,2],[2,4]]',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['hash-map', 'string', 'palindrome'],
    hints: [
      'Build a hash map of word → index for O(1) reverse lookups.',
      'For each word[i], consider all prefixes and suffixes: if the remaining part is a palindrome, the reverse of the other part might exist in the map.',
      'Case 1: suffix is palindrome → look for reverse of prefix. Case 2: prefix is palindrome → look for reverse of suffix.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Concatenation Substring Finder',
    prompt:
      'A text parser must find all starting indices in a string s where a concatenation of ALL words in a given array appears (words can be in any order, each used exactly once). Words all have the same length.',
    constraints: '1 <= s.length <= 10^4 | 1 <= words.length <= 5000 | 1 <= words[i].length <= 30 | s and words are lowercase',
    examples: [
      {
        input: 's = "barfoofoobarthefoobarman", words = ["foo","bar","the"]',
        output: '[6,9,12]',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['hash-map', 'sliding-window', 'string'],
    hints: [
      'Let word length = w and total words = k. The concatenated window has length w*k.',
      'Slide a window of size w*k over s, checking if the word-frequency map matches.',
      'Optimize with a sliding window that advances by w at a time.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Range Sum Counter',
    prompt:
      'A statistical analyst needs to count range sums. Given an integer array nums and two integers lower and upper, return the number of range sums S(i,j) (prefix[j+1] - prefix[i]) that lie in [lower, upper] inclusive.',
    constraints: '1 <= nums.length <= 10^5 | -2^31 <= nums[i] <= 2^31 - 1 | lower <= upper | answer fits in 32-bit int',
    examples: [
      {
        input: 'nums = [-2,5,-1], lower = -2, upper = 2',
        output: '3',
        explanation: 'Ranges: [0,0]→-2, [2,2]→-1, [0,2]→2.',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['hash-map', 'merge-sort', 'binary-indexed-tree'],
    hints: [
      'Compute prefix sums. You need count of pairs (i,j) where lower <= prefix[j]-prefix[i] <= upper.',
      'Modified merge sort: during merge, count how many prefix[j] in the right half satisfy prefix[j] - prefix[i] in [lower,upper] for each i in the left half.',
      'Two pointers l and r on the right half advance monotonically as i increases.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Minimum Coverage Scanner',
    prompt:
      'A satellite scanner must find the minimum window substring of s that contains all characters of t (with correct multiplicities). Return the substring, or empty string if no such window exists. This is the classic minimum window substring.',
    constraints: '1 <= s.length, t.length <= 10^5 | s and t consist of uppercase and lowercase English letters',
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['hash-map', 'sliding-window', 'string'],
    hints: [
      'Maintain a frequency map of needed characters and a count of how many requirements are fully satisfied.',
      'Expand the right pointer; when all requirements met, shrink from left to find minimum.',
      'When left removes a required character, decrement the satisfied count.',
    ],
  },

  // ─────────────────────────────────────────────
  // MONOTONIC STACK (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'monotonic-stack',
    title: 'The Binary Landscape Maximizer',
    prompt:
      'A land-use analyst receives a binary matrix. Find the area of the largest rectangle containing only 1s. Use a histogram-based approach with a monotonic stack.',
    constraints: '1 <= m, n <= 200 | matrix[i][j] is "0" or "1"',
    examples: [
      {
        input: 'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
        output: '6',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['monotonic-stack', 'dynamic-programming', 'matrix'],
    hints: [
      'Build histogram heights row by row: heights[j] += 1 if matrix[i][j]=1 else reset to 0.',
      'For each row, solve "largest rectangle in histogram" using a monotonic stack.',
      'For each bar, when it becomes shorter than the stack top, compute area with popped height.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Subarray Minimum Contribution Analyst',
    prompt:
      'A data scientist needs the sum of min(b) for every subarray b of an integer array arr. Return the sum modulo 10^9+7. Use the contribution technique with a monotonic stack to solve in O(n).',
    constraints: '1 <= arr.length <= 3*10^4 | 1 <= arr[i] <= 3*10^4',
    examples: [
      {
        input: 'arr = [3,1,2,4]',
        output: '17',
        explanation: 'min over subarrays: 3+1+2+4+1+1+1+2+1+1 = 17.',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['monotonic-stack', 'math', 'contribution-technique'],
    hints: [
      'For each element arr[i], find how many subarrays have arr[i] as the minimum.',
      'left[i] = distance to previous smaller element; right[i] = distance to next smaller or equal element.',
      'Contribution of arr[i] = arr[i] * left[i] * right[i].',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Bounded Rectangle Optimizer',
    prompt:
      'A resource allocator must find the maximum sum of elements in any submatrix of a matrix such that the sum does not exceed k. Return the maximum sum.',
    constraints: '1 <= m, n <= 100 | -100 <= matrix[i][j] <= 100 | -10^5 <= k <= 10^5',
    examples: [
      {
        input: 'matrix = [[1,0,1],[0,-2,3]], k = 2',
        output: '2',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['monotonic-stack', 'binary-search', 'dynamic-programming'],
    hints: [
      'Fix the top and bottom rows; compress columns into 1D prefix sums.',
      'For the 1D problem: find max subarray sum <= k using prefix sums and a sorted set.',
      'For each prefix sum p, find the smallest prev in the set such that p - prev <= k.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Queue Visibility Analyst',
    prompt:
      'A crowd-management system has n people in a queue with heights given. Person i can see person j (j > i) if all people between them are shorter than both. Count the total number of visible pairs.',
    constraints: '1 <= heights.length <= 10^5 | 1 <= heights[i] <= 10^9 | all heights are distinct',
    examples: [
      {
        input: 'heights = [10,6,8,5,11,9]',
        output: '3',
        explanation: 'Visible pairs: (0,1),(0,2),(2,4) — among others. Full count is 3.',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['monotonic-stack', 'array', 'math'],
    hints: [
      'Use a monotonic decreasing stack; process from right to left.',
      'When popping an element, it can see both its popper and the element beneath it in the stack.',
      'The top of the stack after each pop can always see at least 1 person.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Wizard Strength Aggregator',
    prompt:
      'A game engine computes wizard strength scores. The strength of a wizard group starting at i and ending at j is defined as min(strength[i..j]) * sum(strength[i..j]). Return the total sum of strengths of all contiguous groups, modulo 10^9+7.',
    constraints: '1 <= strength.length <= 10^5 | 1 <= strength[i] <= 10^9',
    examples: [
      {
        input: 'strength = [1,3,1,2]',
        output: '44',
        explanation: 'Groups of size 1: 1,9,1,4. Size 2: min(1,3)*4=4, min(3,1)*4=4, min(1,2)*3=3. Size 3: min(1,3,1)*5=5, min(3,1,2)*6=6. Size 4: 1*7=7. Total=44.',
      },
    ],
    difficulty: 'hard',
    estMin: 55,
    tags: ['monotonic-stack', 'math', 'prefix-sums', 'contribution-technique'],
    hints: [
      'For each element as the minimum, find the range [l,r] where it is the minimum using a monotonic stack.',
      'The contribution involves all subarrays within [l,r] where this element is minimum.',
      'Use prefix sums of prefix sums to compute the sum of subarray sums efficiently.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Subarray Range Statistician',
    prompt:
      'A statistician studies the range (max - min) of every subarray. Given an integer array nums, return the sum of (max(b) - min(b)) for every subarray b of nums.',
    constraints: '1 <= nums.length <= 1000 | 0 <= nums[i] <= 10^9',
    examples: [
      {
        input: 'nums = [1,2,3]',
        output: '4',
        explanation: 'Ranges: [1]→0,[2]→0,[3]→0,[1,2]→1,[2,3]→1,[1,2,3]→2. Sum=4.',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['monotonic-stack', 'math', 'contribution-technique'],
    hints: [
      'Sum of ranges = sum of max(subarray) - sum of min(subarray). Compute each separately.',
      'Sum of subarray maximums: for each element as the maximum, count subarrays using monotonic stack.',
      'Same technique for sum of subarray minimums; subtract.',
    ],
  },

  // ─────────────────────────────────────────────
  // UNION-FIND (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'union-find',
    title: 'The Dynamic Island Monitor',
    prompt:
      'An oceanic monitoring system starts with a grid of water. Land cells are added one by one online. After each addition return the current number of distinct islands (connected components of land). This is Number of Islands II with online queries.',
    constraints: 'm, n <= 1000 | 0 <= positions.length <= 10^4 | positions[i] = [r, c]',
    examples: [
      {
        input: 'm=3, n=3, positions=[[0,0],[0,1],[1,2],[2,1]]',
        output: '[1,1,2,3]',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['union-find', 'grid', 'online-algorithm'],
    hints: [
      'Maintain a Union-Find over all grid cells.',
      'When adding land at (r,c), create a new component and try to union it with each adjacent land cell.',
      'Each successful union decreases the island count by 1.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Aqueduct Construction Planner',
    prompt:
      'A civil engineer must supply water to all n houses. A well can be built in any house at cost wells[i]. Pipes can connect houses at cost pipes[i][j]. Find the minimum cost to supply water to all houses. This is a classic Prim\'s/Kruskal\'s MST problem with a virtual node.',
    constraints: '1 <= n <= 10^4 | 1 <= wells[i] <= 10^5 | 1 <= pipes[i][j] <= 10^5',
    examples: [
      {
        input: 'n=3, wells=[1,2,2], pipes=[[1,2,1],[2,3,1]]',
        output: '3',
        explanation: 'Build well at house 1 (cost 1), pipe 1-2 (cost 1), pipe 2-3 (cost 1).',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['union-find', 'mst', 'graph', 'kruskal'],
    hints: [
      'Add a virtual node 0 representing the water source with edges of cost wells[i] to each house.',
      'Now the problem is minimum spanning tree on this augmented graph.',
      'Apply Kruskal\'s algorithm with Union-Find on all edges (virtual + pipe edges) sorted by cost.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Dual-Access Graph Keeper',
    prompt:
      'A shared graph has two types of edges: type 1 (Alice only), type 2 (Bob only), type 3 (both). Remove the maximum number of edges while keeping the graph fully traversable for both Alice and Bob. Return the count of removed edges, or -1 if impossible.',
    constraints: '1 <= n <= 10^5 | 1 <= edges.length <= 10^5 | edges[i] = [type, u, v]',
    examples: [
      {
        input: 'n=4, edges=[[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]',
        output: '2',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['union-find', 'graph', 'greedy'],
    hints: [
      'Greedily use type-3 edges first (they benefit both traversals).',
      'Run two separate Union-Find structures (one for Alice, one for Bob), sharing type-3 edges.',
      'A type-1 or type-2 edge is redundant if both endpoints are already connected in the respective UF.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Brick Collapse Reversal',
    prompt:
      'A brick wall has some bricks hit and removed. After each hit, bricks that are no longer connected to the top row fall. Find the number of bricks that fall after each hit, in order.',
    constraints: '1 <= m, n <= 200 | 1 <= hits.length <= 400 | 0 <= hits[i][r] < m | 0 <= hits[i][c] < n',
    examples: [
      {
        input: 'grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]',
        output: '[2]',
        explanation: 'Removing (1,0) causes (1,1) and (1,2) to fall.',
      },
    ],
    difficulty: 'hard',
    estMin: 55,
    tags: ['union-find', 'reverse-thinking', 'graph'],
    hints: [
      'Process hits in reverse: instead of removing bricks, add them back.',
      'Count how many new bricks become connected to the top when each brick is restored.',
      'Union-Find with a virtual top node: connect all top-row bricks to it.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Server Connectivity Assessor',
    prompt:
      'A network analyst has n servers and m weighted edges. For each server, count how many other servers it can be paired with such that the communication path between them can be established. Two servers are connectable if there exists a path through the network. Return an array of counts.',
    constraints: '1 <= n <= 10^5 | 0 <= edges.length <= min(10^5, n*(n-1)/2) | 1 <= u, v <= n | u != v | no duplicate edges',
    examples: [
      {
        input: 'n=4, edges=[[1,2],[2,3]]',
        output: '[1,2,2,0]',
        explanation: 'Server 1 and 2 connect to their component minus self. Server 4 is isolated.',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['union-find', 'graph', 'connected-components'],
    hints: [
      'Build connected components using Union-Find.',
      'For each component of size s, each node in it can connect to s-1 other nodes.',
      'Assign component sizes and output size[component[i]] - 1 for each node.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Minimum Spanning Network Builder',
    prompt:
      'A telecommunications engineer must connect all n nodes with minimum total cable cost. Given edges with costs, find the minimum cost spanning tree. If not all nodes can be connected, return -1. Classic Kruskal\'s MST.',
    constraints: '1 <= n <= 1000 | 0 <= edges.length <= 10^4 | edges[i] = [u, v, cost] | 1 <= cost <= 10^5',
    examples: [
      {
        input: 'n=4, edges=[[0,1,1],[1,2,2],[2,3,3],[0,3,4]]',
        output: '6',
        explanation: 'Edges [0,1],[1,2],[2,3] form MST with cost 1+2+3=6.',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['union-find', 'graph', 'mst', 'kruskal'],
    hints: [
      'Sort edges by cost in ascending order.',
      'Use Union-Find: add edges greedily if they connect two different components.',
      'If after processing all edges fewer than n-1 edges were added, the graph is not fully connected.',
    ],
  },

  // ─────────────────────────────────────────────
  // TRIE (6)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'trie',
    title: 'The Word Square Architect',
    prompt:
      'A puzzle designer needs to find all n×n word squares from a given list of words of length n. A word square is a set of n words such that the k-th row and k-th column spell the same word. Return all valid word squares.',
    constraints: '1 <= words.length <= 1000 | 1 <= words[i].length <= 5 | all words same length | lowercase | all words are unique',
    examples: [
      {
        input: 'words = ["area","lead","wall","lady","ball"]',
        output: '[["ball","area","lead","lady"],["wall","area","lead","lady"]]',
      },
    ],
    difficulty: 'hard',
    estMin: 55,
    tags: ['trie', 'backtracking', 'string'],
    hints: [
      'Build a trie from all words. For each position in the square, use the trie to find candidate words.',
      'The prefix for row i is determined by column i of all rows placed so far.',
      'Backtrack: place words row by row, using trie prefix lookups to prune invalid choices.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Autocomplete Search Engine',
    prompt:
      'A search engine must support typed queries. Design a system that, given a sentence typed character by character, returns the top 3 previously typed sentences with the highest scores that start with the current prefix. Ties broken lexicographically.',
    constraints: '1 <= sentences.length <= 100 | 1 <= sentences[i].length <= 100 | 1 <= times[i] <= 1000 | 1 <= sentence.length <= 200',
    examples: [
      {
        input: 'sentences=["i love you","island","ironman"], times=[5,3,2], input="i"',
        output: '["i love you","island","ironman"]',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['trie', 'design', 'string', 'heap'],
    hints: [
      'Store each sentence in a trie with its score at the terminal node.',
      'On each input character, traverse the trie and collect all matching sentences.',
      'Return top 3 by score (tie-break: lexicographic order).',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Compound Word Detector',
    prompt:
      'A dictionary system must find all words in a list that can be formed by concatenating at least two shorter words from the same list. Return these "concatenated words" in any order.',
    constraints: '1 <= words.length <= 10^4 | 0 <= words[i].length <= 30 | words[i] consists only of lowercase letters | all words are unique',
    examples: [
      {
        input: 'words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamus","rat","ratcatdogcat"]',
        output: '["catsdogcats","dogcatsdog","ratcatdogcat"]',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['trie', 'dynamic-programming', 'string'],
    hints: [
      'Build a trie from all words.',
      'For each word, use DP to check if it can be split into 2+ words in the trie.',
      'dp[i] = can word[0..i-1] be formed from words in the trie.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The XOR Magnitude Maximizer',
    prompt:
      'A cryptographic protocol encodes integers in binary and needs to find, for each query (xi, mi), the maximum XOR of xi with any element nums[j] where nums[j] <= mi. If no valid element exists for a query, return -1.',
    constraints: '1 <= nums.length, queries.length <= 10^5 | 0 <= nums[i], xi, mi <= 2*10^9',
    examples: [
      {
        input: 'nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]',
        output: '[3,3,7]',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['trie', 'sorting', 'offline-queries'],
    hints: [
      'Process queries offline sorted by mi.',
      'Sort nums; insert nums <= mi into the trie before answering query i.',
      'For max XOR, traverse the binary trie greedily choosing the opposite bit at each level.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Substring Universe Counter',
    prompt:
      'A theoretical linguist wants to count the number of distinct substrings of a string s. Use a suffix automaton (or suffix array) approach to answer in linear time.',
    constraints: '1 <= s.length <= 10^5 | s consists of lowercase English letters',
    examples: [
      {
        input: 's = "abab"',
        output: '7',
        explanation: 'Distinct substrings: a,b,ab,ba,aba,bab,abab.',
      },
    ],
    difficulty: 'hard',
    estMin: 60,
    tags: ['trie', 'suffix-automaton', 'string'],
    hints: [
      'Build a suffix automaton: each state represents a set of substrings.',
      'The number of distinct substrings is sum over all states (except initial) of (len[state] - len[link[state]]).',
      'Suffix automaton has at most 2n states and 3n transitions.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'The Abbreviation Minimizer',
    prompt:
      'A word puzzle requires finding the shortest abbreviation of a target word such that the abbreviation does not match any word in a dictionary. An abbreviation replaces some letters with a count of consecutive skipped letters (e.g., "word" → "w2d" means skip 2). Return the shortest such abbreviation.',
    constraints: '1 <= target.length <= 21 | 0 <= dictionary.length <= 1000 | all words same length as target | lowercase',
    examples: [
      {
        input: 'target = "apple", dictionary = ["blade"]',
        output: '"a4"',
        explanation: '"a4" means a + 4 skipped letters = "apple". "blade" abbreviates to "b4" differently.',
      },
    ],
    difficulty: 'hard',
    estMin: 55,
    tags: ['trie', 'backtracking', 'bit-manipulation', 'string'],
    hints: [
      'Use a bitmask to represent which letters of the target are kept (not abbreviated).',
      'For each bitmask, generate the abbreviation and check if it conflicts with any dictionary word.',
      'A dictionary word conflicts if it matches the same abbreviation pattern.',
    ],
  },

  // ─────────────────────────────────────────────
  // FAST-SLOW POINTERS (5)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The K-Group Reversal Engine',
    prompt:
      'A data transformation pipeline reverses linked list nodes in groups of k. If fewer than k nodes remain at the end, leave them as-is. Given the head of a linked list and integer k, return the modified list.',
    constraints: '1 <= k <= list length <= 5000 | 0 <= Node.val <= 1000',
    examples: [
      {
        input: 'head = [1,2,3,4,5], k = 2',
        output: '[2,1,4,3,5]',
      },
      {
        input: 'head = [1,2,3,4,5], k = 3',
        output: '[3,2,1,4,5]',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['fast-slow-pointers', 'linked-list', 'recursion'],
    hints: [
      'Check if k nodes exist ahead before reversing; if not, return the head as-is.',
      'Reverse k nodes iteratively, then recursively process the rest.',
      'Connect the tail of the reversed group to the result of recursing on the remainder.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Linked List Merge Sorter',
    prompt:
      'A memory-constrained system must sort a linked list in O(n log n) time and O(1) space. No array conversion allowed. Implement merge sort directly on the linked list using fast/slow pointers for splitting.',
    constraints: '0 <= list length <= 5*10^4 | -10^5 <= Node.val <= 10^5',
    examples: [
      {
        input: 'head = [4,2,1,3]',
        output: '[1,2,3,4]',
      },
      {
        input: 'head = [-1,5,3,4,0]',
        output: '[-1,0,3,4,5]',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['fast-slow-pointers', 'linked-list', 'merge-sort', 'divide-and-conquer'],
    hints: [
      'Use slow/fast pointers to find the midpoint and split the list into two halves.',
      'Recursively sort both halves, then merge them in O(n) with two pointers.',
      'Bottom-up merge sort achieves O(1) space by merging sublists of increasing size.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Random Pointer Cloner',
    prompt:
      'A memory replicator must deep copy a linked list where each node has a next pointer AND a random pointer that can point to any node or null. The solution must use O(1) extra space (excluding the output).',
    constraints: '0 <= list length <= 1000 | -10^4 <= Node.val <= 10^4 | Node.random is null or points to some node in the list',
    examples: [
      {
        input: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]',
        output: 'Deep copy with same structure',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['fast-slow-pointers', 'linked-list', 'hash-map'],
    hints: [
      'Interleave cloned nodes: insert each clone right after its original (original→clone→original.next).',
      'Set random pointers for clones: clone.random = original.random.next.',
      'Finally, separate the interleaved list back into original and clone lists.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'The Multilevel List Flattener',
    prompt:
      'A document system stores nested data as a multilevel doubly linked list where nodes may have a child pointer leading to another doubly linked list. Flatten it into a single-level doubly linked list preserving DFS order.',
    constraints: '0 <= node count <= 1000 | 1 <= Node.val <= 10^5 | multilevel depth <= 100',
    examples: [
      {
        input: 'head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]',
        output: '[1,2,3,7,8,11,12,9,10,4,5,6]',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['fast-slow-pointers', 'linked-list', 'dfs', 'stack'],
    hints: [
      'Traverse the list; when a node has a child, insert the child list between current and current.next.',
      'Find the tail of the child list, connect it to current.next, and clear the child pointer.',
      'Continue traversal — the formerly child nodes are now inline.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: "Floyd's Time Loop",
    prompt:
      "A circular time-loop detector analyzes an array where each value points to the next index (nums[i] is the next index from i). Exactly one duplicate number exists and it creates a cycle. Find that duplicate using Floyd's tortoise-and-hare algorithm with O(1) space and without modifying the array.",
    constraints: '1 <= n <= 10^5 | nums.length == n+1 | 1 <= nums[i] <= n | exactly one duplicate',
    examples: [
      {
        input: 'nums = [1,3,4,2,2]',
        output: '2',
      },
      {
        input: 'nums = [3,1,3,4,2]',
        output: '3',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['fast-slow-pointers', 'array', 'floyd-cycle-detection'],
    hints: [
      'Model as a linked list: index i points to node nums[i]. The duplicate creates a cycle.',
      'Phase 1: find the intersection point inside the cycle using fast (2 steps) and slow (1 step) pointers.',
      'Phase 2: move one pointer to the start; advance both one step at a time — they meet at the cycle entry (the duplicate).',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'The Sorted Pair Sum Seeker',
    prompt:
      'A junior analyst is given a sorted array of integers and a target sum. Find two numbers in the array that add up to the target and return their 1-indexed positions. There is guaranteed to be exactly one solution, and you may not use the same element twice.',
    constraints: '2 <= numbers.length <= 3*10^4 | -1000 <= numbers[i] <= 1000 | numbers is sorted in non-decreasing order | -1000 <= target <= 1000 | exactly one solution exists',
    examples: [
      {
        input: 'numbers = [2,7,11,15], target = 9',
        output: '[1,2]',
        explanation: 'numbers[1] + numbers[2] = 2 + 7 = 9.',
      },
      {
        input: 'numbers = [2,3,4], target = 6',
        output: '[1,3]',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['two-pointers', 'array', 'binary-search'],
    hints: [
      'With a sorted array, place one pointer at the start and one at the end.',
      'If the sum is too large, move the right pointer left; if too small, move the left pointer right.',
      'Stop as soon as the two pointers find the target sum.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'The Maximum Subarray Scout',
    prompt:
      'A financial analyst tracks daily profit deltas and wants the maximum sum of any contiguous subarray of length at least 1. Given an integer array nums, return the maximum subarray sum. This is the classic Kadane\'s algorithm problem.',
    constraints: '1 <= nums.length <= 10^5 | -10^4 <= nums[i] <= 10^4',
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: 'Subarray [4,-1,2,1] has sum 6.',
      },
      {
        input: 'nums = [1]',
        output: '1',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['sliding-window', 'dynamic-programming', 'array'],
    hints: [
      'Track the current running sum; reset it to the current element whenever the running sum becomes negative.',
      'Update a global maximum at each step.',
      'This is Kadane\'s algorithm — one pass, O(n) time, O(1) space.',
    ],
  },
]
