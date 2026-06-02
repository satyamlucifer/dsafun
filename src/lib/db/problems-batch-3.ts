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

export const PROBLEMS_BATCH_3: ProblemSeed[] = [
  // ============================================================
  // BINARY SEARCH — EASY (10)
  // ============================================================
  {
    patternSlug: 'binary-search',
    title: 'First Beacon Signal',
    prompt:
      'A radar array emits sorted beacon pings. Given a sorted integer array nums and a target frequency, return the index of the first occurrence of target. If it does not exist, return -1. Achieve O(log n) time.',
    constraints: '1 <= nums.length <= 10^5, -10^4 <= nums[i], target <= 10^4, nums is sorted ascending',
    examples: [
      { input: 'nums = [2,2,3,4,4,4,5], target = 4', output: '3', explanation: 'First 4 is at index 3.' },
      { input: 'nums = [1,2,3], target = 6', output: '-1' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['binary-search', 'array'],
    hints: [
      'When you find target, do not stop — record the index and keep searching left.',
      'Bias your mid toward the left half to flush out earlier occurrences.',
      'The invariant is: answer is in [lo, mid] whenever nums[mid] >= target.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Last Beacon Signal',
    prompt:
      'Same radar array, different mission. Given a sorted integer array nums and a target frequency, return the index of the last occurrence of target. If it does not exist, return -1. Achieve O(log n) time.',
    constraints: '1 <= nums.length <= 10^5, -10^4 <= nums[i], target <= 10^4, nums is sorted ascending',
    examples: [
      { input: 'nums = [2,2,3,4,4,4,5], target = 4', output: '5', explanation: 'Last 4 is at index 5.' },
      { input: 'nums = [1,2,3], target = 0', output: '-1' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['binary-search', 'array'],
    hints: [
      'When you find target, record index and keep searching right.',
      'Bias your mid toward the right half.',
      'The invariant is: answer is in [mid, hi] whenever nums[mid] <= target.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Pulse Counter',
    prompt:
      'Mission control needs a frequency count. Given a sorted array nums and a target, return the total number of times target appears. You must run in O(log n).',
    constraints: '1 <= nums.length <= 10^5, -10^4 <= nums[i], target <= 10^4',
    examples: [
      { input: 'nums = [1,2,2,2,3,4], target = 2', output: '3' },
      { input: 'nums = [1,1,1,2,3], target = 5', output: '0' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['binary-search', 'array'],
    hints: [
      'Find the first occurrence with one binary search.',
      'Find the last occurrence with a second binary search.',
      'The count equals last - first + 1 (or 0 if target not found).',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Docking Bay Assignment',
    prompt:
      'A starport assigns bays by ID. Given a sorted list of occupied bay IDs nums and an incoming ship ID target, return the index where target would be inserted to keep the list sorted. If target already exists, return the index of the existing entry.',
    constraints: '1 <= nums.length <= 10^4, 0 <= nums[i] <= 10^4, nums has distinct values, 0 <= target <= 10^4',
    examples: [
      { input: 'nums = [1,3,5,6], target = 5', output: '2' },
      { input: 'nums = [1,3,5,6], target = 2', output: '1' },
      { input: 'nums = [1,3,5,6], target = 7', output: '4' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['binary-search', 'array'],
    hints: [
      'Standard lower-bound binary search returns the first position where nums[pos] >= target.',
      'Maintain lo = 0, hi = nums.length; when the loop ends lo is your answer.',
      'This is equivalent to lower_bound in C++ STL.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Cipher Key Successor',
    prompt:
      'The cipher wheel contains sorted unique lowercase letters. Given the wheel letters and an incoming character target, find the smallest letter in the wheel that is strictly greater than target. The wheel wraps around.',
    constraints: '2 <= letters.length <= 10^4, letters contains sorted unique lowercase English letters, target is a lowercase English letter',
    examples: [
      { input: 'letters = ["c","f","j"], target = "a"', output: '"c"' },
      { input: 'letters = ["c","f","j"], target = "c"', output: '"f"' },
      { input: 'letters = ["c","f","j"], target = "j"', output: '"c"', explanation: 'Wrap-around.' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['binary-search', 'array'],
    hints: [
      'Search for the first letter strictly greater than target.',
      'If no such letter exists (target >= last letter), return letters[0].',
      'Use modular indexing: answer = letters[result % letters.length].',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Power Core Validator',
    prompt:
      'An engineer must verify if a reactor output n is a perfect square before engaging the shield. Given a positive integer n, return true if it is a perfect square without using any built-in square root function.',
    constraints: '1 <= n <= 2^31 - 1',
    examples: [
      { input: 'n = 16', output: 'true' },
      { input: 'n = 14', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['binary-search', 'math'],
    hints: [
      'Binary search over the range [1, n] for a value x where x*x == n.',
      'Use long multiplication to avoid integer overflow.',
      'If x*x > n, shrink hi; if x*x < n, grow lo.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Coin Staircase Recon',
    prompt:
      'A spy arranges gold coins in a staircase pattern: row 1 has 1 coin, row 2 has 2, etc. Given n coins, return the number of complete rows that can be formed.',
    constraints: '1 <= n <= 2^31 - 1',
    examples: [
      { input: 'n = 5', output: '2', explanation: 'Rows 1 and 2 use 3 coins; row 3 needs 3 more but only 2 remain.' },
      { input: 'n = 8', output: '3' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['binary-search', 'math'],
    hints: [
      'The total coins in k rows is k*(k+1)/2. Binary search on k.',
      'Check if k*(k+1)/2 <= n and (k+1)*(k+2)/2 > n.',
      'Use long arithmetic: k can be up to ~65000.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Summit Frequency Detector',
    prompt:
      'A mountain sensor array has one peak reading. Given an array nums where nums[i] != nums[i+1], find any index i such that nums[i] is greater than its neighbors (or is at a boundary with no left/right neighbor).',
    constraints: '1 <= nums.length <= 1000, -2^31 <= nums[i] <= 2^31 - 1, nums[i] != nums[i+1] for all valid i',
    examples: [
      { input: 'nums = [1,2,3,1]', output: '2' },
      { input: 'nums = [1,2,1,3,5,6,4]', output: '5' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['binary-search', 'array'],
    hints: [
      'At mid, if nums[mid] < nums[mid+1], the peak is to the right.',
      'Otherwise the peak is at mid or to the left.',
      'Maintain lo <= hi and shrink toward the peak.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Oracle Number Probe',
    prompt:
      'You are playing a guessing game against an oracle. The oracle has picked a number from 1 to n. You call guess(num) which returns -1 (too high), 1 (too low), or 0 (correct). Return the number the oracle picked.',
    constraints: '1 <= n <= 2^31 - 1, 1 <= pick <= n',
    examples: [
      { input: 'n = 10, pick = 6', output: '6' },
      { input: 'n = 1, pick = 1', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['binary-search', 'interactive'],
    hints: [
      'Classic binary search: start with lo=1, hi=n.',
      'Call guess(mid); adjust lo or hi based on the return value.',
      'Use mid = lo + (hi - lo) / 2 to avoid overflow.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Twin Signal Check',
    prompt:
      'A surveillance system flags pairs of signals. Given an integer array nums, check if there exist two indices i and j such that i != j, nums[i] == 2 * nums[j]. Return true or false.',
    constraints: '2 <= nums.length <= 500, -10^3 <= nums[i] <= 10^3',
    examples: [
      { input: 'nums = [10,2,5,3]', output: 'true', explanation: '10 == 2*5.' },
      { input: 'nums = [3,1,7,11]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['binary-search', 'array', 'hash'],
    hints: [
      'Sort the array first, then for each element binary search for its double.',
      'Handle zeros carefully: 0 doubled is 0, so you need at least two zeros.',
      'Alternatively use a hash set for O(n) time.',
    ],
  },

  // ============================================================
  // BINARY SEARCH — MEDIUM (12)
  // ============================================================
  {
    patternSlug: 'binary-search',
    title: 'Grid Sector Scan',
    prompt:
      'A surveillance grid is stored as an m x n matrix where each row is sorted left-to-right and the first element of each row is greater than the last element of the previous row. Given target, return true if target exists in the matrix.',
    constraints: 'm, n >= 1, m*n <= 10^4, -10^4 <= matrix[i][j], target <= 10^4',
    examples: [
      { input: 'matrix = [[1,3,5],[7,9,11],[13,15,17]], target = 9', output: 'true' },
      { input: 'matrix = [[1,3,5],[7,9,11]], target = 6', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['binary-search', 'matrix'],
    hints: [
      'Treat the matrix as a flattened sorted array of length m*n.',
      'Map index mid to row = mid/n, col = mid%n.',
      'Apply standard binary search on this virtual array.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Staggered Grid Sweep',
    prompt:
      'A second surveillance grid has each row sorted and each column sorted, but rows do not continue into each other. Given target, return true if it exists.',
    constraints: 'm, n >= 1, -10^9 <= matrix[i][j], target <= 10^9',
    examples: [
      { input: 'matrix = [[1,4,7],[2,5,8],[3,6,9]], target = 5', output: 'true' },
      { input: 'matrix = [[1,4,7],[2,5,8]], target = 6', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['binary-search', 'matrix', 'divide-and-conquer'],
    hints: [
      'Start from the top-right corner (or bottom-left).',
      'If current value > target, move left; if < target, move down.',
      'This eliminates one row or column per step in O(m+n).',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Mountain Array Intelligence',
    prompt:
      'An encrypted mountain array increases then decreases. You can query mountainArr.get(index) (max 100 calls total). Given a target value, return its minimum index in the array or -1.',
    constraints: '3 <= mountainArr.length() <= 10^4, 0 <= target <= 10^9, 0 <= mountainArr.get(i) <= 10^9',
    examples: [
      { input: 'array = [1,2,3,4,5,3,1], target = 3', output: '2' },
      { input: 'array = [0,1,2,4,2,1], target = 3', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['binary-search', 'interactive'],
    hints: [
      'First binary search to find the peak index.',
      'Then binary search the ascending left half for target.',
      'If not found, binary search the descending right half.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Missing Frequency Log',
    prompt:
      'Sensor logs are stored as a sorted array nums. Given the array and an integer k, return the k-th missing positive integer not present in nums.',
    constraints: '1 <= nums.length <= 1000, 1 <= nums[i] <= 1000, nums is strictly increasing, 1 <= k <= 1000',
    examples: [
      { input: 'nums = [2,3,4,7,11], k = 5', output: '9', explanation: 'Missing: 1,5,6,8,9 — 5th is 9.' },
      { input: 'nums = [1,2,3,4], k = 2', output: '6' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['binary-search', 'array'],
    hints: [
      'At index i, the count of missing numbers before nums[i] is nums[i] - (i+1).',
      'Binary search for the smallest index where missing count >= k.',
      'Answer is lo + k where lo is the insertion point.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Data Stream Partition',
    prompt:
      'A mission planner must split a data stream array nums into m non-empty contiguous subarrays. Minimize the maximum subarray sum. Return that minimized maximum.',
    constraints: '1 <= nums.length <= 1000, 0 <= nums[i] <= 10^6, 1 <= m <= min(50, nums.length)',
    examples: [
      { input: 'nums = [7,2,5,10,8], m = 2', output: '18', explanation: 'Split [7,2,5] | [10,8] gives max sum 18.' },
      { input: 'nums = [1,2,3,4,5], m = 2', output: '9' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['binary-search', 'dynamic-programming', 'greedy'],
    hints: [
      'Binary search on the answer: the minimum possible maximum sum.',
      'Lower bound is max(nums), upper bound is sum(nums).',
      'For a given mid, greedily count how many subarrays you need.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Library Shelf Allocator',
    prompt:
      'A library has n books with page counts. Assign all books to m students so each student reads a contiguous segment. Minimize the maximum pages any student reads.',
    constraints: '1 <= n <= 10^4, 1 <= pages[i] <= 10^3, 1 <= m <= n',
    examples: [
      { input: 'pages = [12,34,67,90], m = 2', output: '113', explanation: '[12,34,67] | [90] gives max 113.' },
      { input: 'pages = [10,20,30,40], m = 2', output: '60' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['binary-search', 'greedy'],
    hints: [
      'Binary search on the answer: the maximum pages a student can read.',
      'Use a greedy check: with limit X, how many students are needed?',
      'If students needed <= m, try smaller X; otherwise try larger.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Pasture Fence Optimizer',
    prompt:
      'A rancher places n cows in m stalls at given positions. Maximize the minimum distance between any two cows.',
    constraints: '2 <= stalls.length <= 2*10^4, 0 <= stalls[i] <= 10^9, 2 <= m <= stalls.length',
    examples: [
      { input: 'stalls = [1,2,8,4,9], m = 3', output: '3', explanation: 'Place cows at 1, 4, 9.' },
      { input: 'stalls = [0,3,10], m = 2', output: '10' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['binary-search', 'greedy'],
    hints: [
      'Sort the stall positions first.',
      'Binary search on the minimum distance d.',
      'Greedy check: can you place m cows with each pair at least d apart?',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Vault Gap Finder',
    prompt:
      'Inside a sorted array that had one element removed, find the missing element. Given a sorted array nums and two integers lo and hi (nums covers integers from lo to hi with one missing), return the missing integer.',
    constraints: '1 <= nums.length <= 10^4, 0 <= lo <= nums[i] <= hi <= 10^8, exactly one number is missing',
    examples: [
      { input: 'nums = [4,7,9,10], lo = 4, hi = 10', output: '5' },
      { input: 'nums = [1,2,4], lo = 1, hi = 4', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['binary-search', 'array'],
    hints: [
      'At index i, the expected value is nums[0] + i if no element is missing before index i.',
      'Binary search: if nums[mid] - nums[0] == mid, the missing number is to the right.',
      'Otherwise it is at or to the left of mid.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Weighted Warp Drive',
    prompt:
      'A navigation system selects warp targets proportional to their power levels. Given an array w of positive weights, implement pickIndex() that returns index i with probability w[i] / sum(w). Use binary search after prefix-sum construction.',
    constraints: '1 <= w.length <= 10^4, 1 <= w[i] <= 10^5, pickIndex will be called at most 10^4 times',
    examples: [
      { input: 'w = [1,3], calls = 2', output: 'index 1 with probability 0.75' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['binary-search', 'prefix-sum', 'random'],
    hints: [
      'Build a prefix sum array so prefix[i] = w[0]+...+w[i].',
      'Generate a random integer r in [1, total].',
      'Binary search for the first index where prefix[i] >= r.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Interval Docking Probe',
    prompt:
      'Given a list of closed intervals, for each query interval find the minimum index of any interval whose start >= query end. Return an array of results (-1 if none).',
    constraints: '1 <= intervals.length <= 2*10^4, queries.length == intervals.length, 0 <= intervals[i][0] <= intervals[i][1] <= 10^6',
    examples: [
      { input: 'intervals = [[3,4],[2,3],[1,2]], queries = [[0,3],[2,4],[3,5]]', output: '[1, 0, -1]' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['binary-search', 'sorting', 'intervals'],
    hints: [
      'Sort intervals and record original indices.',
      'For each query, binary search for the first interval with start >= query end.',
      'A sorted list of start values with their original indices suffices.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Duplicate Frequency Isolator',
    prompt:
      'An encrypted array contains n+1 integers each in [1, n], so exactly one number is repeated. Find that duplicate without modifying the array and using only O(1) extra space. Use binary search on value range.',
    constraints: '1 <= n <= 10^5, nums.length == n + 1, 1 <= nums[i] <= n, only one value is repeated',
    examples: [
      { input: 'nums = [1,3,4,2,2]', output: '2' },
      { input: 'nums = [3,1,3,4,2]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['binary-search', 'array', 'pigeonhole'],
    hints: [
      'Binary search on the value range [1, n].',
      'For mid, count how many elements in nums are <= mid.',
      'If count > mid, the duplicate is in [lo, mid]; otherwise [mid+1, hi].',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Paired Coordinate Lock',
    prompt:
      'Given a sorted array nums and a target sum, find two numbers in the array that add up to target. Return their 1-indexed positions. Assume exactly one valid answer exists.',
    constraints: '2 <= nums.length <= 3*10^4, -1000 <= nums[i] <= 1000, -1000 <= target <= 1000',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[1,2]' },
      { input: 'nums = [2,3,4], target = 6', output: '[1,3]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['binary-search', 'two-pointers', 'array'],
    hints: [
      'For each element nums[i], binary search for target - nums[i] in the rest of the array.',
      'Alternatively use two pointers from both ends in O(n).',
      'Since the array is sorted, if sum > target shrink the right pointer, else grow the left.',
    ],
  },

  // ============================================================
  // BINARY SEARCH — HARD (8)
  // ============================================================
  {
    patternSlug: 'binary-search',
    title: 'Dual Stream Median',
    prompt:
      'Two sorted intelligence streams nums1 and nums2 have been intercepted. Find the median of the combined stream in O(log(m+n)) time.',
    constraints: '0 <= m, n <= 1000, m + n >= 1, -10^6 <= nums1[i], nums2[j] <= 10^6',
    examples: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.00000' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.50000' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['binary-search', 'array', 'divide-and-conquer'],
    hints: [
      'Binary search on the partition point of the smaller array.',
      'Ensure the left halves of both arrays together have (m+n+1)/2 elements.',
      'Check that maxLeft1 <= minRight2 and maxLeft2 <= minRight1 for a valid partition.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Minimum Pair Gap',
    prompt:
      'You have intercepted n numeric codes. Find the k-th smallest absolute difference between any two codes in the list.',
    constraints: '2 <= nums.length <= 10^4, 0 <= nums[i] <= 10^6, 1 <= k <= nums.length*(nums.length-1)/2',
    examples: [
      { input: 'nums = [1,3,1], k = 1', output: '0' },
      { input: 'nums = [1,6,1], k = 3', output: '5' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['binary-search', 'sorting', 'sliding-window'],
    hints: [
      'Sort the array. Binary search on the answer d (the k-th smallest difference).',
      'Count how many pairs have absolute difference <= d using a two-pointer sweep.',
      'Find the smallest d where that count >= k.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Fuel Depot Spacing',
    prompt:
      'A convoy must add k fuel depots along a highway of length L. The highway already has n depots at given positions. Minimize the maximum gap between any two consecutive depots after addition.',
    constraints: '2 <= stations.length <= 10^4, 0 <= stations[i] <= 10^8, 1 <= k <= 10^6',
    examples: [
      { input: 'stations = [1,2,3,4,5,6,7,8,9,10], k = 9', output: '0.50000' },
      { input: 'stations = [23,24,36,39,46,56,57,65,84,98], k = 1', output: '14.00000' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['binary-search', 'greedy'],
    hints: [
      'Binary search on the answer: the minimum possible maximum gap.',
      'For a given gap size D, the number of additional depots needed in a segment of length L is ceil(L/D) - 1.',
      'Sum required depots over all gaps; check if total <= k.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Matrix Rank Retrieval',
    prompt:
      'An n x n sorted matrix has rows and columns sorted in ascending order. Find the k-th smallest element (1-indexed).',
    constraints: 'n <= 300, -10^9 <= matrix[i][j] <= 10^9, rows and columns are sorted, 1 <= k <= n^2',
    examples: [
      { input: 'matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8', output: '13' },
      { input: 'matrix = [[-5]], k = 1', output: '-5' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['binary-search', 'matrix', 'heap'],
    hints: [
      'Binary search on the value range [matrix[0][0], matrix[n-1][n-1]].',
      'For a given mid value, count how many elements are <= mid using staircase traversal.',
      'Find the smallest value where count >= k.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Bloom Scheduling Protocol',
    prompt:
      'Agent flowers require bloom days. You have m bouquets to deliver. Each bouquet needs k adjacent flowers. Find the minimum day by which all bouquets can be collected, or return -1 if impossible.',
    constraints: '1 <= bloomDay.length <= 10^5, 1 <= m <= 10^6, 1 <= k <= bloomDay.length, 1 <= bloomDay[i] <= 10^9',
    examples: [
      { input: 'bloomDay = [1,10,3,10,2], m = 3, k = 1', output: '3' },
      { input: 'bloomDay = [1,10,3,10,2], m = 3, k = 2', output: '-1' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['binary-search', 'greedy'],
    hints: [
      'Binary search on the day D.',
      'For day D, a flower is available if bloomDay[i] <= D.',
      'Greedily count consecutive available flowers to form bouquets; check if count >= m.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Rank Inversion Counter',
    prompt:
      'Intelligence analysts count inversions in signal arrays. Given an array nums, return a new array counts where counts[i] is the number of smaller elements to the right of nums[i].',
    constraints: '1 <= nums.length <= 10^5, -10^4 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [5,2,6,1]', output: '[2,1,1,0]' },
      { input: 'nums = [-1,-1]', output: '[0,0]' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['binary-search', 'merge-sort', 'binary-indexed-tree'],
    hints: [
      'Process from right to left, maintaining a sorted list of seen elements.',
      'Binary search the sorted list to find the insertion position, which equals the count of smaller elements.',
      'Alternatively use a Binary Indexed Tree (Fenwick tree) for O(n log n).',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Cross-Array Product Rank',
    prompt:
      'Two sorted arrays nums1 and nums2 represent signal strengths. Find the k-th smallest product nums1[i] * nums2[j] among all pairs (1-indexed).',
    constraints: '1 <= nums1.length, nums2.length <= 500, -10^4 <= nums1[i], nums2[j] <= 10^4, 1 <= k <= nums1.length * nums2.length',
    examples: [
      { input: 'nums1 = [2,5], nums2 = [3,4], k = 2', output: '8' },
      { input: 'nums1 = [-4,-2,0,3], nums2 = [2,4], k = 6', output: '0' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['binary-search', 'sorting'],
    hints: [
      'Binary search on the product value P.',
      'For a given P, count how many pairs (i,j) have nums1[i]*nums2[j] <= P.',
      'Handle negative values carefully when reversing the comparison direction.',
    ],
  },
  {
    patternSlug: 'binary-search',
    title: 'Island Severance Day',
    prompt:
      'A grid map has 1s (land) and 0s (water). On any day you may flip one land cell to water. Find the minimum number of flips (0 or 1) needed to disconnect the island (make the grid have more than one connected component or no land at all).',
    constraints: '1 <= grid.length, grid[0].length <= 30, grid[i][j] is 0 or 1, the grid has exactly one island initially',
    examples: [
      { input: 'grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]', output: '2' },
      { input: 'grid = [[1,1]]', output: '2' },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['binary-search', 'dfs', 'bfs', 'articulation-points'],
    hints: [
      'The answer is always 0, 1, or 2.',
      'Check if already disconnected (answer 0) or if any articulation point exists (answer 1).',
      'Otherwise the answer is 2.',
    ],
  },

  // ============================================================
  // BFS — EASY (10)
  // ============================================================
  {
    patternSlug: 'bfs',
    title: 'Orbital Level Scan',
    prompt:
      'A space station transmits data layer by layer. Given the root of a binary tree, return its level order traversal as a list of lists of node values.',
    constraints: '0 <= number of nodes <= 2000, -1000 <= Node.val <= 1000',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' },
      { input: 'root = [1]', output: '[[1]]' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['bfs', 'tree'],
    hints: [
      'Use a queue; enqueue root and process level by level.',
      'Record the queue size at the start of each level to know when the level ends.',
      'Append values to a temporary list, then add the list to the result.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Serpentine Broadcast',
    prompt:
      'A transmission zigzags across frequency bands. Given the root of a binary tree, return a zigzag level order traversal: left-to-right for level 0, right-to-left for level 1, alternating.',
    constraints: '0 <= number of nodes <= 2000, -100 <= Node.val <= 100',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[20,9],[15,7]]' },
      { input: 'root = [1]', output: '[[1]]' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['bfs', 'tree'],
    hints: [
      'Standard BFS with a level flag that toggles each level.',
      'When flag is true, reverse the collected level list before appending.',
      'A deque lets you prepend values to avoid reversing.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Starboard Horizon View',
    prompt:
      'An astronaut looks at a binary tree from the right side. Return the values of the nodes visible from the right (the last node of each level in level order).',
    constraints: '0 <= number of nodes <= 100, -100 <= Node.val <= 100',
    examples: [
      { input: 'root = [1,2,3,null,5,null,4]', output: '[1,3,4]' },
      { input: 'root = [1,null,3]', output: '[1,3]' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['bfs', 'tree'],
    hints: [
      'BFS level by level; at each level keep track of the last node.',
      'The last node enqueued per level is visible from the right.',
      'Alternatively, use DFS with depth tracking.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Shallowest Descent',
    prompt:
      'A rescue mission targets the shallowest floor of a building modeled as a binary tree. Given root, return the minimum depth (number of nodes on shortest root-to-leaf path).',
    constraints: '0 <= number of nodes <= 10^5, -1000 <= Node.val <= 1000',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '2' },
      { input: 'root = [2,null,3,null,4]', output: '4' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['bfs', 'tree'],
    hints: [
      'BFS is ideal: return depth when you first encounter a leaf.',
      'A leaf has no left or right child.',
      'BFS guarantees the first leaf found is the shallowest.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Mirror Station Check',
    prompt:
      'A space station is designed to be symmetric. Given the root of a binary tree, check whether it is a mirror of itself (symmetric around its center).',
    constraints: '1 <= number of nodes <= 1000, -100 <= Node.val <= 100',
    examples: [
      { input: 'root = [1,2,2,3,4,4,3]', output: 'true' },
      { input: 'root = [1,2,2,null,3,null,3]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['bfs', 'tree'],
    hints: [
      'Use a queue storing pairs of nodes that should be mirrors.',
      'Start with (root.left, root.right).',
      'Each iteration check values match and enqueue (left.left, right.right) and (left.right, right.left).',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Identical Signal Trees',
    prompt:
      'Two antenna trees must broadcast identical signals. Given roots p and q of two binary trees, return true if they are structurally identical and have the same node values.',
    constraints: '0 <= number of nodes <= 100, -10^4 <= Node.val <= 10^4',
    examples: [
      { input: 'p = [1,2,3], q = [1,2,3]', output: 'true' },
      { input: 'p = [1,2], q = [1,null,2]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['bfs', 'tree'],
    hints: [
      'Use two queues, one per tree, and process them in parallel.',
      'At each step compare the front nodes of both queues.',
      'If one is null and the other is not, return false.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Canopy Ceiling Probe',
    prompt:
      'Reconnaissance drones measure maximum altitude. Given root of a binary tree, return its maximum depth (number of nodes along the longest root-to-leaf path).',
    constraints: '0 <= number of nodes <= 10^4, -100 <= Node.val <= 100',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' },
      { input: 'root = [1,null,2]', output: '2' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['bfs', 'tree'],
    hints: [
      'BFS level by level; increment a counter each level.',
      'Return the counter after the queue empties.',
      'Each level of BFS corresponds to one depth unit.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Altitude Average Report',
    prompt:
      'A meteorological tree logs altitude readings. Given root, return the average value of nodes at each level (as a list of doubles).',
    constraints: '0 <= number of nodes <= 10^4, -2^31 <= Node.val <= 2^31 - 1',
    examples: [
      { input: 'root = [3,9,20,15,7]', output: '[3.0, 14.5, 11.0]' },
      { input: 'root = [3,9,20]', output: '[3.0, 14.5]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['bfs', 'tree'],
    hints: [
      'BFS level by level; sum node values and divide by level size.',
      'Track level size at the start of each iteration.',
      'Use a long or double accumulator to prevent overflow.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Network Node Census',
    prompt:
      'A spy network has n nodes (0 to n-1) connected by undirected edges. Count the number of connected components.',
    constraints: '1 <= n <= 2000, 0 <= edges.length <= 5000, edges[i].length == 2',
    examples: [
      { input: 'n = 5, edges = [[0,1],[1,2],[3,4]]', output: '2' },
      { input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['bfs', 'graph', 'union-find'],
    hints: [
      'Build an adjacency list and mark visited nodes.',
      'For each unvisited node, launch a BFS/DFS and increment component count.',
      'Alternatively use Union-Find.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Tunnel Path Existence',
    prompt:
      'A tunnel network has n nodes and directed edges. Given source and destination, return true if a path exists from source to destination.',
    constraints: '1 <= n <= 2*10^5, 0 <= edges.length <= 2*10^5, 0 <= source, destination < n',
    examples: [
      { input: 'n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2', output: 'true' },
      { input: 'n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['bfs', 'graph'],
    hints: [
      'Build adjacency list and run BFS from source.',
      'If destination is reached during traversal, return true.',
      'If BFS exhausts without reaching destination, return false.',
    ],
  },

  // ============================================================
  // BFS — MEDIUM (12)
  // ============================================================
  {
    patternSlug: 'bfs',
    title: 'Shadow Grid Sprint',
    prompt:
      'An operative must cross an n x n binary grid from top-left to bottom-right. 0 cells are open, 1 cells are blocked. Find the length of the shortest clear path using 8-directional movement. Return -1 if none exists.',
    constraints: '1 <= n <= 100, grid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]', output: '4' },
      { input: 'grid = [[1,0,0],[1,1,0],[1,1,0]]', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['bfs', 'grid', 'shortest-path'],
    hints: [
      'BFS guarantees shortest path in an unweighted grid.',
      'Explore all 8 directions from each cell.',
      'If start or end is blocked, immediately return -1.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Leap Grid Traverse',
    prompt:
      'A spy is trapped in an array of jump distances. Starting at index 0, they can jump nums[i] steps left or right. Return true if they can reach any index with value 0.',
    constraints: '1 <= nums.length <= 5*10^4, 0 <= nums[i] < nums.length, nums[0] != 0',
    examples: [
      { input: 'nums = [4,2,3,0,3,1,2]', output: 'true' },
      { input: 'nums = [3,0,2,1,2]', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['bfs', 'array'],
    hints: [
      'Model as graph: node i connects to i+nums[i] and i-nums[i].',
      'BFS from index 0 to find any index with value 0.',
      'Use a visited array to avoid revisiting nodes.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Zero Proximity Map',
    prompt:
      'A reconnaissance grid has cells marked 0 or 1. For each cell, find the distance to the nearest 0 cell (Manhattan distance, 4-directional movement).',
    constraints: 'm, n >= 1, m*n <= 10^4, grid[i][j] is 0 or 1',
    examples: [
      { input: 'mat = [[0,0,0],[0,1,0],[1,1,1]]', output: '[[0,0,0],[0,1,0],[1,2,1]]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['bfs', 'grid', 'multi-source-bfs'],
    hints: [
      'Multi-source BFS: enqueue all 0-cells first with distance 0.',
      'Expand outward, updating distances as you go.',
      'Each cell is processed at most once.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Coastal Exclusion Zone',
    prompt:
      'A map has land cells (1) and sea cells (0). Find the sea cell with the maximum distance from any land cell. Return -1 if no sea or no land exists.',
    constraints: 'n == grid.length == grid[i].length, 1 <= n <= 100, grid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [[1,0,1],[0,0,0],[1,0,1]]', output: '2' },
      { input: 'grid = [[1,0,0],[0,0,0],[0,0,0]]', output: '4' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['bfs', 'grid', 'multi-source-bfs'],
    hints: [
      'Multi-source BFS starting from all land cells simultaneously.',
      'The last cell reached has the maximum distance.',
      'Track the distance of the last dequeued cell.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Island Bridge Builder',
    prompt:
      'A map has exactly two islands. Find the minimum number of 0-cells that must be flipped to 1 to connect the two islands (minimum bridge length).',
    constraints: 'n == grid.length == grid[0].length, 2 <= n <= 100, grid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [[0,1],[1,0]]', output: '1' },
      { input: 'grid = [[0,1,0],[0,0,0],[0,0,1]]', output: '2' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['bfs', 'dfs', 'grid'],
    hints: [
      'DFS to mark all cells of the first island.',
      'BFS from all first-island cells to find the shortest path to the second island.',
      'Count 0-cells crossed during BFS.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Transit Route Optimizer',
    prompt:
      'A city has bus routes. You start at source and want to reach target. Each ride counts as one step regardless of stops. Return the minimum number of buses to ride, or -1.',
    constraints: '1 <= routes.length <= 500, 1 <= routes[i].length <= 10^5, 0 <= routes[i][j] <= 10^6, 0 <= source, target <= 10^6',
    examples: [
      { input: 'routes = [[1,2,7],[3,6,7]], source = 1, target = 6', output: '2' },
      { input: 'routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 28,
    tags: ['bfs', 'graph'],
    hints: [
      'Build a map: stop -> list of routes passing through it.',
      'BFS over routes (not stops); each level represents one bus ride.',
      'Enqueue all routes that include the stops reachable so far.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Genome Mutation Chain',
    prompt:
      'A biolab has a start gene string and an end gene string. Each mutation changes one character to A, C, G, or T. Given a gene bank of valid intermediates, find the minimum number of mutations to reach end. Return -1 if impossible.',
    constraints: '0 <= bank.length <= 10, start.length == end.length == bank[i].length == 8, start, end, and bank contain only A C G T',
    examples: [
      { input: 'start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]', output: '1' },
      { input: 'start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['bfs', 'string', 'graph'],
    hints: [
      'BFS where each node is a gene string.',
      'From current string, try all valid single-character mutations present in bank.',
      'Use a set for O(1) bank lookup and visited tracking.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Serpent and Ladder Escape',
    prompt:
      'A spy must traverse an n x n snakes-and-ladders board numbered 1 to n^2 in Boustrophedon order. Dice rolls move 1-6 steps. Snakes and ladders teleport you. Find the minimum number of dice rolls to reach cell n^2.',
    constraints: '2 <= n <= 20, board[i][j] is -1 or in [1, n^2], at most 200 non -1 entries, board[0][0] == board[n-1][n-1] == -1',
    examples: [
      { input: 'board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]], n = 6', output: '4' },
    ],
    difficulty: 'medium',
    estMin: 28,
    tags: ['bfs', 'graph', 'simulation'],
    hints: [
      'BFS where state is current cell (1 to n^2).',
      'Map cell number to board coordinates to check for snakes/ladders.',
      'When landing on a cell with value != -1, move to that value.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Continental Drift Counter',
    prompt:
      'A world map has land (1) and sea (0). Find the number of land cells that cannot reach the boundary by moving 4-directionally through land.',
    constraints: 'm, n >= 1, m*n <= 10^4, grid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]', output: '3' },
      { input: 'grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['bfs', 'grid'],
    hints: [
      'Multi-source BFS from all boundary land cells.',
      'Mark all land cells reachable from the boundary.',
      'Count remaining unmarked land cells.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Archipelago Census',
    prompt:
      'A nautical map has sea (0) and island (1) cells. Count the total number of distinct islands using BFS for each unvisited land cell.',
    constraints: '1 <= m, n <= 300, grid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [[1,1,1],[0,1,0],[1,1,1]]', output: '1' },
      { input: 'grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['bfs', 'grid'],
    hints: [
      'Iterate over all cells; when you find an unvisited land cell, start a BFS.',
      'Mark all connected land cells as visited.',
      'Increment the island counter for each BFS initiated.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Terrain Stamina Planner',
    prompt:
      'A hiker crosses an m x n grid of altitudes. Moving between adjacent cells costs the absolute difference in height. Find the path from top-left to bottom-right that minimizes the maximum single-step effort.',
    constraints: 'm, n >= 1, m*n <= 10^4, 1 <= heights[i][j] <= 10^6',
    examples: [
      { input: 'heights = [[1,2,2],[3,8,2],[5,3,5]]', output: '2' },
      { input: 'heights = [[1,2,3],[3,8,4],[5,3,5]]', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['bfs', 'binary-search', 'dijkstra'],
    hints: [
      'Binary search on the effort value E.',
      'BFS/DFS to check if you can reach the destination using only steps with effort <= E.',
      'Alternatively use Dijkstra with the effort as the edge weight.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Cipher Queue Decoder',
    prompt:
      'A secret message is encoded as nested brackets with repetition counts: k[encoded_string] means encoded_string repeated k times. Decode it using a BFS-inspired queue/stack approach.',
    constraints: '1 <= s.length <= 30, s contains only lowercase letters, digits, and brackets, all integers are in range 1..300, there are no extra whitespace characters',
    examples: [
      { input: 's = "3[a]2[bc]"', output: '"aaabcbc"' },
      { input: 's = "3[a2[c]]"', output: '"accaccacc"' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['bfs', 'stack', 'string'],
    hints: [
      'Use a stack to handle nested structures.',
      'Push current string and repeat count when you encounter [.',
      'On ], pop and repeat the current string, then append to the previous string.',
    ],
  },

  // ============================================================
  // BFS — HARD (8)
  // ============================================================
  {
    patternSlug: 'bfs',
    title: 'Total Reconnaissance Route',
    prompt:
      'An agent must visit all nodes in an undirected connected graph. Given adjacency list, find the shortest path (in edges) that visits every node starting from any node. Nodes may be revisited.',
    constraints: '1 <= n <= 12, 0 <= graph[i].length <= n-1, graph[i] does not contain i, all pairs are distinct, the graph is connected',
    examples: [
      { input: 'graph = [[1,2,3],[0],[0],[0]]', output: '4' },
      { input: 'graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]', output: '4' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['bfs', 'bitmask', 'dynamic-programming'],
    hints: [
      'State is (current node, visited set as bitmask).',
      'BFS over states guarantees shortest path.',
      'Start BFS from all nodes simultaneously with state (node, 1<<node).',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'All Escape Routes',
    prompt:
      'An agent must transform beginWord to endWord one letter at a time, each intermediate word existing in a word list. Return ALL shortest transformation sequences.',
    constraints: '1 <= beginWord.length <= 5, endWord.length == beginWord.length, 1 <= wordList.length <= 500, all words have same length, all characters lowercase',
    examples: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: '[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]' },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['bfs', 'backtracking', 'string'],
    hints: [
      'BFS to find all shortest paths, tracking parent nodes.',
      'After BFS, backtrack from endWord using parent map to reconstruct paths.',
      'Remove words from the word set level by level to avoid revisiting.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Holographic Tile Shuffle',
    prompt:
      'A 2x3 sliding puzzle has tiles 1-5 and one empty space (0). Find the minimum number of moves to reach state [[1,2,3],[4,5,0]]. Return -1 if impossible.',
    constraints: 'board is a 2x3 grid, contains 0 and integers 1 through 5',
    examples: [
      { input: 'board = [[1,2,3],[4,0,5]]', output: '1' },
      { input: 'board = [[1,2,3],[5,4,0]]', output: '-1' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['bfs', 'hash', 'simulation'],
    hints: [
      'Encode the board state as a string for use as a hash key.',
      'BFS from the initial state; each move swaps 0 with an adjacent tile.',
      'Track visited states to avoid cycles.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Forest Clearing Mission',
    prompt:
      'A forest is an m x n grid where each cell has a tree height. Cut trees in increasing height order. Each cut requires walking from current position to the tree (BFS for steps on 4-connected grid). Return total steps, or -1 if unreachable.',
    constraints: '1 <= m, n <= 50, 0 <= forest[i][j] <= 10^9',
    examples: [
      { input: 'forest = [[1,2,3],[0,0,4],[7,6,5]]', output: '6' },
      { input: 'forest = [[2,3,4],[0,0,5],[8,7,6]]', output: '6' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['bfs', 'grid', 'sorting'],
    hints: [
      'Sort all non-zero trees by height.',
      'BFS from current position to each next tree in order.',
      'If any BFS fails (0-cell blocks path), return -1.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Contagion Spread Halt',
    prompt:
      'A city graph has nodes and edges. Some nodes are initially infected. Each day, one edge can be cut. Simultaneously, infected nodes spread to all uncut neighbors. Return the minimum number of nodes eventually infected.',
    constraints: '2 <= n <= 300, 1 <= graph[i].length <= n-1, initial.length >= 1',
    examples: [
      { input: 'graph = [[1,4],[2,4],[3,4],[4],[]], initial = [0,1]', output: '3' },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['bfs', 'graph', 'simulation'],
    hints: [
      'Each initially infected node forms a component spreading independently.',
      'Determine which initial node, if removed, saves the most additional nodes.',
      'Choose the node that infects the largest otherwise-unreachable component.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Turbo Gear Pathfinder',
    prompt:
      'A car on an infinite number line starts at position 0. Each command is A (accelerate: speed doubles, move by current speed, speed starts at 1) or R (reverse: speed set to -1 if positive, +1 if negative). Find the minimum instructions to reach target.',
    constraints: '1 <= target <= 10^4',
    examples: [
      { input: 'target = 3', output: '2', explanation: 'AA: pos=1,2,3.' },
      { input: 'target = 6', output: '5' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['bfs', 'dynamic-programming'],
    hints: [
      'State is (position, speed). BFS or DP over states.',
      'Bound positions; negative positions and positions far beyond target are wasteful.',
      'DP: dp[pos] = min steps to reach pos; try all A and R transitions.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Bounce Portal Navigator',
    prompt:
      'An array of portals: arr[i] points to index arr[i]. From index i, you can jump to i+1 or to arr[i]. Find the minimum steps to reach the last index.',
    constraints: '1 <= arr.length <= 5*10^4, 1 <= arr[i] <= arr.length',
    examples: [
      { input: 'arr = [100,4,2,1,3,1,100]', output: '1' },
      { input: 'arr = [7,6,9,6,9,6,8,9,100]', output: '1' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['bfs', 'graph'],
    hints: [
      'Group indices by arr[i] value to efficiently jump to same-value neighbors.',
      'BFS over indices; each node has edge to i+1 and to all indices j where arr[j]==arr[i].',
      'Once a group is fully visited, remove it to avoid re-processing.',
    ],
  },
  {
    patternSlug: 'bfs',
    title: 'Zone Equalization Cost',
    prompt:
      'A row of n zones has integer water levels. In one operation, pick any zone and set its level to any value — cost is 1. Find the minimum operations to make all zones have the same level.',
    constraints: '1 <= nums.length <= 10^5, 0 <= nums[i] <= 10^9',
    examples: [
      { input: 'nums = [1,2,3]', output: '2' },
      { input: 'nums = [1,1,1]', output: '0' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['bfs', 'array', 'hash'],
    hints: [
      'The minimum operations equals n minus the maximum frequency of any value.',
      'Count frequency of each value using a hash map.',
      'The value that appears most often requires the fewest changes to others.',
    ],
  },

  // ============================================================
  // DFS — EASY (10)
  // ============================================================
  {
    patternSlug: 'dfs',
    title: 'Root-to-Vault Path',
    prompt:
      'A treasure map is stored as a binary tree where each node holds a partial code. Given root and a targetSum, return true if there exists a root-to-leaf path where node values sum to targetSum.',
    constraints: '0 <= number of nodes <= 5000, -1000 <= Node.val <= 1000, -1000 <= targetSum <= 1000',
    examples: [
      { input: 'root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22', output: 'true' },
      { input: 'root = [1,2,3], targetSum = 5', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['dfs', 'tree'],
    hints: [
      'Subtract node value from targetSum as you recurse down.',
      'At a leaf, check if remaining sum equals the leaf value.',
      'Return true as soon as any leaf satisfies the condition.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Checkpoint Node Audit',
    prompt:
      'A quality audit flags "good" nodes. In a rooted binary tree, node X is good if no node on the path from root to X has a value greater than X. Count good nodes.',
    constraints: '1 <= number of nodes <= 10^5, -10^4 <= Node.val <= 10^4',
    examples: [
      { input: 'root = [3,1,4,3,null,1,5]', output: '4' },
      { input: 'root = [3,3,null,4,2]', output: '3' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['dfs', 'tree'],
    hints: [
      'Pass the current max value seen on the path down the recursion.',
      'A node is good if its value >= the max seen so far.',
      'Count 1 for root (always good) plus recursive results.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Antenna Flip Protocol',
    prompt:
      'A satellite dish array is represented as a binary tree. Invert the binary tree (swap left and right children at every node) and return its root.',
    constraints: '0 <= number of nodes <= 100, -100 <= Node.val <= 100',
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
      { input: 'root = [2,1,3]', output: '[2,3,1]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['dfs', 'tree'],
    hints: [
      'Recursively invert left and right subtrees.',
      'Then swap the left and right child pointers of the current node.',
      'Base case: null node returns null.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Structural Integrity Check',
    prompt:
      'A structural analysis tree must be height-balanced for safety. Given root of a binary tree, return true if it is height-balanced (no subtree has left and right heights differing by more than 1).',
    constraints: '0 <= number of nodes <= 5000, -10^4 <= Node.val <= 10^4',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: 'true' },
      { input: 'root = [1,2,2,3,3,null,null,4,4]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['dfs', 'tree'],
    hints: [
      'DFS returning height; return -1 as a sentinel for unbalanced.',
      'If either child returns -1, propagate -1 upward.',
      'Check abs(leftH - rightH) <= 1 at each node.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Leaf Signature Matching',
    prompt:
      'Two botanical sensor trees are leaf-similar if their leaf value sequences (left to right) are identical. Given roots of two trees, return true if they are leaf-similar.',
    constraints: '1 <= number of nodes in each tree <= 200, 0 <= Node.val <= 200',
    examples: [
      { input: 'root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]', output: 'true' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['dfs', 'tree'],
    hints: [
      'DFS each tree to collect its leaf sequence.',
      'A leaf has no left or right child.',
      'Compare the two collected sequences for equality.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Port Side Accumulator',
    prompt:
      'A navigation tree stores heading values. Return the sum of all left leaf values in the binary tree.',
    constraints: '1 <= number of nodes <= 1000, -1000 <= Node.val <= 1000',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '24', explanation: 'Left leaves are 9 and 15.' },
      { input: 'root = [1]', output: '0' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dfs', 'tree'],
    hints: [
      'Pass a boolean flag isLeft into the recursion.',
      'Add node value to sum only when isLeft is true and node is a leaf.',
      'Recurse left child with isLeft=true, right child with isLeft=false.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Deep Space Arity Probe',
    prompt:
      'An alien ship uses an N-ary tree for its command hierarchy. Given an N-ary tree root, return its maximum depth.',
    constraints: '0 <= total nodes <= 10^4, 0 <= children.length <= 1000, -10^4 <= Node.val <= 10^4',
    examples: [
      { input: 'root = [1,null,3,2,4,null,5,6]', output: '3' },
      { input: 'root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', output: '5' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dfs', 'tree', 'n-ary'],
    hints: [
      'DFS over children, taking the max depth among all children.',
      'Return 1 + max(depth(child) for child in children).',
      'Return 0 for null root.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Color Propagation Engine',
    prompt:
      'A painting drone floods a pixel grid. Given an m x n image, a starting pixel (sr, sc), and a new color, perform a flood fill: change the starting pixel and all 4-directionally connected pixels of the same original color to the new color.',
    constraints: 'm, n >= 1, m*n <= 10^4, 0 <= image[i][j], color <= 65535',
    examples: [
      { input: 'image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2', output: '[[2,2,2],[2,2,0],[2,0,1]]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dfs', 'grid'],
    hints: [
      'DFS from (sr, sc) changing the color.',
      'Stop when out of bounds or pixel color differs from original.',
      'If original color equals new color, return immediately to avoid infinite loop.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Access Key Propagation',
    prompt:
      'A locked facility has n rooms (0 to n-1). You start in room 0, which is unlocked. Each room has keys to other rooms. Return true if you can visit all rooms.',
    constraints: 'n >= 1, 0 <= rooms[i].length <= n, 0 <= rooms[i][j] <= n-1, all keys are distinct',
    examples: [
      { input: 'rooms = [[1],[2],[3],[]]', output: 'true' },
      { input: 'rooms = [[1,3],[3,0,1],[2],[0]]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dfs', 'graph'],
    hints: [
      'DFS from room 0, collecting keys and visiting unlocked rooms.',
      'Track visited rooms to avoid revisiting.',
      'After DFS, check if all rooms were visited.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Hub Node Locator',
    prompt:
      'A star-shaped communication network has one central hub. Given an undirected star graph with n nodes and n-1 edges, find the center node (connected to all others).',
    constraints: '3 <= n <= 10^5, edges.length == n-1, edges[i].length == 2, each edge connects to the center',
    examples: [
      { input: 'edges = [[1,2],[2,3],[4,2]]', output: '2' },
      { input: 'edges = [[1,2],[5,1],[1,3],[1,4]]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['dfs', 'graph'],
    hints: [
      'The center appears in every edge.',
      'Check only the first two edges: the center is the node that appears in both.',
      'No DFS needed — one comparison of edges[0] and edges[1] suffices.',
    ],
  },

  // ============================================================
  // DFS — MEDIUM (12)
  // ============================================================
  {
    patternSlug: 'dfs',
    title: 'All Vault Paths',
    prompt:
      'A heist tree has branch nodes and leaf vaults. Given root and targetSum, return all root-to-leaf paths where the sum of node values equals targetSum.',
    constraints: '0 <= number of nodes <= 5000, -1000 <= Node.val <= 1000, -1000 <= targetSum <= 1000',
    examples: [
      { input: 'root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22', output: '[[5,4,11,2],[5,8,4,5]]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dfs', 'tree', 'backtracking'],
    hints: [
      'DFS with backtracking: add node to path, recurse, then remove.',
      'Add path copy to results only at a leaf when remaining sum == leaf value.',
      'Restore state by popping from the current path on return.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Branch Code Enumeration',
    prompt:
      'A cipher tree encodes messages on paths. Given root of a binary tree, return all root-to-leaf paths as strings in format "val1->val2->val3".',
    constraints: '1 <= number of nodes <= 100, -100 <= Node.val <= 100',
    examples: [
      { input: 'root = [1,2,3,null,5]', output: '["1->2->5","1->3"]' },
      { input: 'root = [1]', output: '["1"]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['dfs', 'tree', 'string'],
    hints: [
      'DFS passing the current path string.',
      'Append "->val" for each node visited (except root uses just "val").',
      'At a leaf, add the current path to results.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Binary Code Summation',
    prompt:
      'Each root-to-leaf path in a binary tree of 0s and 1s represents a binary number. Return the sum of all these numbers.',
    constraints: '1 <= number of nodes <= 1000, Node.val is 0 or 1',
    examples: [
      { input: 'root = [1,0,1,0,1,0,1]', output: '22', explanation: 'Paths: 100=4, 101=5, 110=6, 111=7; sum=22.' },
      { input: 'root = [0]', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dfs', 'tree', 'bit-manipulation'],
    hints: [
      'Pass the running number down: num = num*2 + node.val.',
      'At a leaf, add num to the total.',
      'Total is accumulated across all leaves.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'BST Authenticity Verifier',
    prompt:
      'A cryptographic key system uses a BST. Given the root of a binary tree, determine if it is a valid binary search tree (in-order traversal strictly increasing).',
    constraints: '1 <= number of nodes <= 10^4, -2^31 <= Node.val <= 2^31 - 1',
    examples: [
      { input: 'root = [2,1,3]', output: 'true' },
      { input: 'root = [5,1,4,null,null,3,6]', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dfs', 'tree', 'bst'],
    hints: [
      'Pass min and max bounds down the recursion.',
      'Left subtree: all values must be < current node value.',
      'Right subtree: all values must be > current node value.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'BST Common Ancestor',
    prompt:
      'Two agents share a BST mission log. Given root of a BST and two node values p and q, find their lowest common ancestor.',
    constraints: '2 <= number of nodes <= 10^5, -10^9 <= Node.val <= 10^9, p != q, both p and q exist in the tree',
    examples: [
      { input: 'root = [6,2,8,0,4,7,9], p = 2, q = 8', output: '6' },
      { input: 'root = [6,2,8,0,4,7,9], p = 2, q = 4', output: '2' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['dfs', 'tree', 'bst'],
    hints: [
      'If both p and q are less than current, LCA is in left subtree.',
      'If both are greater, LCA is in right subtree.',
      'Otherwise current node is the LCA.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'BST Rank Query',
    prompt:
      'A ranking system stores scores in a BST. Given root and integer k, return the k-th smallest value in the BST.',
    constraints: '1 <= k <= number of nodes <= 10^4, 0 <= Node.val <= 10^4',
    examples: [
      { input: 'root = [3,1,4,null,2], k = 1', output: '1' },
      { input: 'root = [5,3,6,2,4,null,null,1], k = 3', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['dfs', 'tree', 'bst'],
    hints: [
      'In-order traversal of a BST visits nodes in sorted order.',
      'Count nodes during in-order traversal; return when count equals k.',
      'Use an iterative stack-based traversal for O(H+k) space.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Corporate Cascade Timer',
    prompt:
      'A company tree has n employees. The head is employee 0. informTime[i] is minutes for employee i to inform all direct reports. Find the total time for the news to reach all employees.',
    constraints: '1 <= n <= 10^5, 0 <= headID <= n-1, manager.length == n, 0 <= informTime[i] <= 1000',
    examples: [
      { input: 'n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]', output: '1' },
      { input: 'n = 7, headID = 6, manager = [1,2,3,4,5,6,-1], informTime = [0,6,5,4,3,2,1]', output: '21' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dfs', 'tree', 'graph'],
    hints: [
      'Build tree from manager array; DFS from headID.',
      'At each node, take the maximum time among all children plus current informTime.',
      'The answer is the maximum accumulated time across all leaf paths.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Province Boundary Mapper',
    prompt:
      'A diplomatic map has n cities and isConnected[i][j]=1 if cities i and j are directly connected. Find the number of provinces (groups of directly/indirectly connected cities).',
    constraints: '1 <= n <= 200, n == isConnected.length == isConnected[i].length, isConnected[i][j] is 0 or 1, isConnected[i][i] == 1, isConnected[i][j] == isConnected[j][i]',
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', output: '2' },
      { input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['dfs', 'graph', 'union-find'],
    hints: [
      'DFS from each unvisited city, marking all reachable cities as visited.',
      'Each DFS call corresponds to one province.',
      'Adjacency matrix row i lists neighbors of city i.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Covert Cycle Detector',
    prompt:
      'A directed network of agents may contain feedback loops (cycles). Given n nodes and directed edges, return true if the graph contains a cycle.',
    constraints: '1 <= n <= 10^4, 0 <= edges.length <= 10^4, edges[i] = [u, v] means u -> v',
    examples: [
      { input: 'n = 3, edges = [[0,1],[1,2],[2,0]]', output: 'true' },
      { input: 'n = 3, edges = [[0,1],[1,2]]', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dfs', 'graph', 'topological-sort'],
    hints: [
      'DFS with three states: unvisited, in-progress, done.',
      'If you reach an in-progress node, a cycle exists.',
      'Alternatively, Kahn topological sort: if not all nodes processed, a cycle exists.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Flight Log Reconstructor',
    prompt:
      'An analyst must reconstruct a flight itinerary from a list of tickets [from, to]. Start at "JFK". Use all tickets exactly once. Return the itinerary with smallest lexical order.',
    constraints: '1 <= tickets.length <= 300, tickets[i].length == 2, from[i] != to[i], all strings consist of uppercase letters',
    examples: [
      { input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]', output: '["JFK","MUC","LHR","SFO","SJC"]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['dfs', 'graph', 'eulerian-path'],
    hints: [
      'Sort destinations for each source lexicographically.',
      'Hierholzer algorithm: DFS, prepend node to result when backtracking.',
      'This produces a valid Eulerian path in reverse.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Sub-Island Classifier',
    prompt:
      'Two island maps grid1 and grid2 have the same dimensions. An island in grid2 is a sub-island if every land cell of that island is also land in grid1. Count sub-islands in grid2.',
    constraints: 'm, n >= 1, m*n <= 5*10^4, grid1[i][j] and grid2[i][j] are 0 or 1',
    examples: [
      { input: 'grid1 = [[1,1,1],[0,1,0],[1,1,1]], grid2 = [[1,1,1],[0,0,0],[1,1,1]]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['dfs', 'grid'],
    hints: [
      'DFS over grid2 islands.',
      'During DFS, if any cell is land in grid2 but water in grid1, mark island as not a sub-island.',
      'Must still explore the full island even after disqualifying it.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Equation Graph Resolver',
    prompt:
      'A lab has variable equations and division values. Given equations like A/B = k, and a list of queries, return the result of each query or -1.0 if undetermined.',
    constraints: '1 <= equations.length <= 20, values[i] > 0, equations[i].length == 2, 1 <= queries.length <= 20',
    examples: [
      { input: 'equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"]]', output: '[6.0, 0.5]' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['dfs', 'graph', 'union-find'],
    hints: [
      'Model as a weighted directed graph: A->B with weight k, B->A with weight 1/k.',
      'DFS from source to destination, multiplying edge weights along the path.',
      'Return -1.0 if source or destination not in graph, or no path found.',
    ],
  },

  // ============================================================
  // DFS — HARD (8)
  // ============================================================
  {
    patternSlug: 'dfs',
    title: 'Network Fault Lines',
    prompt:
      'A network has n servers and connections. A critical connection (bridge) is one whose removal disconnects the network. Find all critical connections using Tarjan algorithm.',
    constraints: '1 <= n <= 10^5, n-1 <= connections.length <= 10^5',
    examples: [
      { input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]', output: '[[1,3]]' },
      { input: 'n = 2, connections = [[0,1]]', output: '[[0,1]]' },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['dfs', 'graph', 'tarjan', 'bridges'],
    hints: [
      'Tarjan bridge finding: assign discovery time and low value to each node.',
      'Edge (u,v) is a bridge if low[v] > disc[u].',
      'low[v] = min(disc[v], disc of back-edge ancestors reachable from subtree of v).',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Elevation Streak Climber',
    prompt:
      'A terrain map is an m x n matrix. Find the length of the longest strictly increasing path where each step goes to an adjacent (4-directional) cell with a strictly greater value.',
    constraints: 'm, n >= 1, m*n <= 2*10^4, 0 <= matrix[i][j] <= 2^31 - 1',
    examples: [
      { input: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]', output: '4', explanation: 'Path: 1,2,6,9.' },
      { input: 'matrix = [[3,4,5],[3,2,6],[2,2,1]]', output: '4' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dfs', 'dynamic-programming', 'memoization', 'grid'],
    hints: [
      'DFS with memoization: memo[i][j] = longest increasing path starting at (i,j).',
      'Only recurse to neighbors with strictly greater values (no cycles possible).',
      'Fill memo lazily; the DAG structure guarantees no infinite loops.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Island Topology Identifier',
    prompt:
      'A map has islands. Two islands are considered the same shape if one can be translated (not rotated or reflected) to match the other. Return the number of distinct island shapes.',
    constraints: '1 <= m, n <= 50, grid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]', output: '1' },
      { input: 'grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]', output: '3' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dfs', 'grid', 'hash'],
    hints: [
      'DFS each island, recording relative coordinates of visited cells.',
      'Normalize coordinates by subtracting the first cell position.',
      'Store normalized shapes in a set; distinct set entries = answer.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'BST Swap Recovery',
    prompt:
      'Exactly two nodes of a BST were swapped. Recover the tree (restore BST property) without changing the tree structure.',
    constraints: '2 <= number of nodes <= 1000, -2^31 <= Node.val <= 2^31 - 1',
    examples: [
      { input: 'root = [1,3,null,null,2]', output: '[3,1,null,null,2]' },
      { input: 'root = [3,1,4,null,null,2]', output: '[2,1,4,null,null,3]' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dfs', 'tree', 'bst'],
    hints: [
      'In-order traversal of correct BST is strictly increasing.',
      'Find two nodes where the order is violated: first violation gives first swapped node, second gives second.',
      'Swap the values of the two identified nodes.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Tree Codec Relay',
    prompt:
      'A mission-critical binary tree must be transmitted and reconstructed. Design an algorithm to serialize a binary tree to a string and deserialize the string back to the original tree.',
    constraints: '0 <= number of nodes <= 10^4, -1000 <= Node.val <= 1000',
    examples: [
      { input: 'root = [1,2,3,null,null,4,5]', output: 'serialize then deserialize returns same tree' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dfs', 'tree', 'design'],
    hints: [
      'Pre-order DFS: serialize as "val,left_subtree,right_subtree".',
      'Use a sentinel (e.g., "#") for null nodes.',
      'Deserialize by consuming tokens from a queue in pre-order.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Container Stack Demolition',
    prompt:
      'A string of colored boxes can be removed in groups. Removing k consecutive boxes of the same color earns k*k points. Return the maximum points you can collect from the entire string.',
    constraints: '1 <= boxes.length <= 100, boxes[i] is a lowercase letter',
    examples: [
      { input: 'boxes = "ABACBC"', output: '11', explanation: 'Remove AB=1+1, then AACBC, remove AA=4, then CBC=1+1+1=3, total 9; optimal gives 11.' },
      { input: 'boxes = "AAAA"', output: '16' },
    ],
    difficulty: 'hard',
    estMin: 55,
    tags: ['dfs', 'dynamic-programming', 'memoization'],
    hints: [
      'State is dp[l][r][k]: max points from boxes[l..r] with k extra boxes equal to boxes[l] attached before l.',
      'Either remove boxes[l..l+k] together, or find a matching box in [l+1..r] to merge.',
      'Memoize by (l, r, k) to avoid recomputation.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Galactic Language Compiler',
    prompt:
      'An alien dictionary has words in sorted order by alien alphabet. Derive the order of letters in the alien alphabet from the sorted word list. Return any valid ordering, or empty string if a contradiction exists.',
    constraints: '1 <= words.length <= 100, 1 <= words[i].length <= 100, all characters are lowercase English letters',
    examples: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"' },
      { input: 'words = ["z","x"]', output: '"zx"' },
      { input: 'words = ["z","x","z"]', output: '""', explanation: 'Contradiction.' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dfs', 'topological-sort', 'graph'],
    hints: [
      'Compare adjacent words to extract ordering constraints between letters.',
      'Build a directed graph of letter precedence.',
      'Topological sort (DFS-based); if cycle detected, return empty string.',
    ],
  },
  {
    patternSlug: 'dfs',
    title: 'Stronghold Component Counter',
    prompt:
      'A directed graph represents fortification dependencies. Count the number of strongly connected components (SCCs) — groups where every node can reach every other.',
    constraints: '1 <= n <= 10^4, 0 <= edges.length <= 10^4',
    examples: [
      { input: 'n = 5, edges = [[1,0],[0,2],[2,1],[0,3],[3,4]]', output: '3', explanation: 'SCCs: {0,1,2}, {3}, {4}.' },
      { input: 'n = 4, edges = [[0,1],[1,2],[2,0],[1,3]]', output: '2' },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['dfs', 'graph', 'kosaraju', 'tarjan'],
    hints: [
      'Kosaraju: first DFS on original graph to get finish-time order.',
      'Second DFS on transposed graph in reverse finish order.',
      'Each DFS tree in the second pass is one SCC.',
    ],
  },
]
