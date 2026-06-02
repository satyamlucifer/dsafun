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

export const PROBLEMS_BATCH_5: ProblemSeed[] = [
  // ─── HASH-MAP: 10 EASY ───────────────────────────────────────────────────

  {
    patternSlug: 'hash-map',
    title: 'The Pair Finder',
    prompt:
      'A treasure hunter scans a list of artifact weights and needs to find two that sum to a target load capacity. Given an integer array nums and an integer target, return the indices of the two numbers that add up to target. Assume exactly one solution exists and you may not use the same element twice.',
    constraints: '2 <= nums.length <= 10^4 | -10^9 <= nums[i] <= 10^9 | exactly one valid answer',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'nums[0] + nums[1] = 2 + 7 = 9' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
      { input: 'nums = [3,3], target = 6', output: '[0,1]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['hash-map', 'array'],
    hints: [
      'For each element x, what value do you need to find to complete the pair?',
      'Can you store previously seen values in a map so you can look up that complement in O(1)?',
      'Walk through the array once — when you find the complement already in the map, you have your answer.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Duplicate Detector',
    prompt:
      'A data archivist suspects that a shipment list contains repeated entries. Given an integer array nums, return true if any value appears at least twice in the array, and false if every element is distinct.',
    constraints: '1 <= nums.length <= 10^5 | -10^9 <= nums[i] <= 10^9',
    examples: [
      { input: 'nums = [1,2,3,1]', output: 'true' },
      { input: 'nums = [1,2,3,4]', output: 'false' },
      { input: 'nums = [1,1,1,3,3,4,3,2,4,2]', output: 'true' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['hash-map', 'array'],
    hints: [
      'What data structure lets you check membership in O(1) time?',
      'Insert each element into a set; before inserting, check if it is already present.',
      'If the set size after processing equals the array length, there are no duplicates.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Lone Signal',
    prompt:
      'In a communications relay, every signal ID appears exactly twice except for one unique beacon. Given a non-empty array of integers nums where every element appears twice except for one, find that single element. You must solve it in O(n) time and O(1) extra space — but a hash-map approach that trades space for clarity is also acceptable.',
    constraints: '1 <= nums.length <= 3 * 10^4 | -3 * 10^4 <= nums[i] <= 3 * 10^4 | exactly one element appears once',
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' },
      { input: 'nums = [1]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['hash-map', 'bit-manipulation'],
    hints: [
      'A frequency map can count occurrences; the answer is the key whose count is 1.',
      'XOR of a number with itself is 0, and XOR with 0 returns the number — can you exploit this?',
      'XOR all elements together; paired duplicates cancel out, leaving only the single element.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Crossroads Inventory',
    prompt:
      'Two supply caravans each carry a list of item codes. The warehouse manager wants to know which items both caravans share. Given two integer arrays nums1 and nums2, return an array of their intersection — each element in the result must be unique, and the order does not matter.',
    constraints: '1 <= nums1.length, nums2.length <= 1000 | 0 <= nums1[i], nums2[i] <= 1000',
    examples: [
      { input: 'nums1 = [1,2,2,1], nums2 = [2,2]', output: '[2]' },
      { input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]', output: '[9,4]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['hash-map', 'array', 'set'],
    hints: [
      'Store one array in a set so you can check membership in O(1).',
      'Iterate over the second array and collect elements that exist in the set.',
      'Use another set for results to avoid adding the same element twice.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Census Taker',
    prompt:
      'A village elder must identify the candidate who holds the majority vote. Given an array nums of size n, return the element that appears more than n/2 times. The majority element is guaranteed to exist.',
    constraints: 'n == nums.length | 1 <= n <= 5 * 10^4 | -10^9 <= nums[i] <= 10^9 | majority element always exists',
    examples: [
      { input: 'nums = [3,2,3]', output: '3' },
      { input: 'nums = [2,2,1,1,1,2,2]', output: '2' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['hash-map', 'array', 'counting'],
    hints: [
      'Build a frequency map and scan for the key whose count exceeds n/2.',
      'Boyer-Moore voting algorithm can do this in O(1) space — but the hash-map approach is simpler to reason about.',
      'After counting, one linear scan through the map entries gives you the winner.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Happiness Auditor',
    prompt:
      'A numerologist defines a "happy number" as one that eventually reaches 1 when repeatedly replaced by the sum of the squares of its digits. Numbers that never reach 1 loop forever. Given an integer n, return true if n is a happy number.',
    constraints: '1 <= n <= 2^31 - 1',
    examples: [
      {
        input: 'n = 19',
        output: 'true',
        explanation: '1^2 + 9^2 = 82 → 8^2 + 2^2 = 68 → 6^2 + 8^2 = 100 → 1',
      },
      { input: 'n = 2', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['hash-map', 'math', 'cycle-detection'],
    hints: [
      'Track every intermediate value you compute; if you see a value a second time, you are in a cycle.',
      'A set makes it easy to detect repeated sums in O(1).',
      'Alternatively, use Floyd\'s cycle detection — the fast pointer computes two steps, slow computes one.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Anagram Verifier',
    prompt:
      'A cryptographer needs to confirm that two ciphertexts are anagrams — same letters, different order. Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    constraints: '1 <= s.length, t.length <= 5 * 10^4 | s and t consist of lowercase English letters',
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'true' },
      { input: 's = "rat", t = "car"', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['hash-map', 'string', 'sorting'],
    hints: [
      'Count the frequency of each character in s, then decrement for each character in t.',
      'If any count goes negative, or the lengths differ, the strings cannot be anagrams.',
      'A 26-element array keyed by character works as a compact frequency map.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Roman Consul',
    prompt:
      'An ancient scribe must convert Roman numeral inscriptions to their decimal equivalents. Given a string s representing a Roman numeral, convert it to an integer.',
    constraints: '1 <= s.length <= 15 | s contains only the characters I, V, X, L, C, D, M | 1 <= answer <= 3999',
    examples: [
      { input: 's = "III"', output: '3' },
      { input: 's = "LVIII"', output: '58', explanation: 'L=50, V=5, III=3' },
      { input: 's = "MCMXCIV"', output: '1994', explanation: 'M=1000, CM=900, XC=90, IV=4' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['hash-map', 'string', 'math'],
    hints: [
      'Map each Roman symbol to its integer value using a lookup table.',
      'If the current symbol\'s value is less than the next symbol\'s value, subtract it instead of adding.',
      'Traverse left to right, applying the subtraction rule where needed.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Word Census',
    prompt:
      'A linguist needs a frequency report of every word in a field note. Given a string sentence composed of lowercase words separated by spaces, return a map (or sorted list of pairs) of each word to its count.',
    constraints: '1 <= sentence.length <= 10^4 | sentence has no leading or trailing spaces | words are lowercase letters only',
    examples: [
      {
        input: 'sentence = "the quick brown fox jumps over the lazy dog the"',
        output: '{"the":3,"quick":1,"brown":1,"fox":1,"jumps":1,"over":1,"lazy":1,"dog":1}',
      },
      { input: 'sentence = "hello hello world"', output: '{"hello":2,"world":1}' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['hash-map', 'string'],
    hints: [
      'Split the sentence by spaces to get individual words.',
      'Use a hash map to accumulate the count for each word.',
      'A single pass through the words array is sufficient.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The First Scout',
    prompt:
      'A dispatch office must find the first letter in a coded message that does not repeat. Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.',
    constraints: '1 <= s.length <= 10^5 | s consists of only lowercase English letters',
    examples: [
      { input: 's = "leetcode"', output: '0' },
      { input: 's = "loveleetcode"', output: '2' },
      { input: 's = "aabb"', output: '-1' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['hash-map', 'string', 'queue'],
    hints: [
      'First, build a frequency count of all characters in the string.',
      'Then do a second pass; return the index of the first character whose count equals 1.',
      'This two-pass approach is O(n) in time and O(1) in space (fixed alphabet size).',
    ],
  },

  // ─── HASH-MAP: 12 MEDIUM ─────────────────────────────────────────────────

  {
    patternSlug: 'hash-map',
    title: 'The Quadruple Comptroller',
    prompt:
      'Four platoons each report a list of integer scores. A strategist wants to count how many tuples (i, j, k, l) exist such that nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0. Given four integer arrays nums1, nums2, nums3, nums4 each of length n, return the count of such tuples.',
    constraints: 'n == nums1.length == nums2.length == nums3.length == nums4.length | 1 <= n <= 200 | -2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28',
    examples: [
      {
        input: 'nums1=[1,2], nums2=[-2,-1], nums3=[-1,2], nums4=[0,2]',
        output: '2',
        explanation: '(0,0,0,0): 1+(-2)+(-1)+2=0 and (1,1,0,0): 2+(-1)+(-1)+0=0',
      },
      { input: 'nums1=[0], nums2=[0], nums3=[0], nums4=[0]', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['hash-map', 'array'],
    hints: [
      'Count all pairwise sums from nums1 and nums2 in a map.',
      'For each pair sum from nums3 and nums4, check how many times its negation exists in the map.',
      'This reduces an O(n^4) brute force to O(n^2) using the complement trick.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Binary Balancer',
    prompt:
      'A signal engineer wants the longest contiguous sub-sequence of a binary transmission that has an equal number of zeros and ones. Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.',
    constraints: '1 <= nums.length <= 10^5 | nums[i] is either 0 or 1',
    examples: [
      { input: 'nums = [0,1]', output: '2', explanation: 'The entire array has one 0 and one 1.' },
      { input: 'nums = [0,1,0]', output: '2' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['hash-map', 'array', 'prefix-sum'],
    hints: [
      'Replace each 0 with -1; now you want the longest subarray with sum 0.',
      'Track prefix sums; if the same prefix sum appears twice, the subarray between those indices sums to 0.',
      'Store the first occurrence index of each prefix sum in a hash map.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Window Maximizer',
    prompt:
      'A bandwidth throttle allows at most one repeated value in any contiguous window. Given an array of integers nums, return the maximum sum of a subarray that contains all unique elements.',
    constraints: '1 <= nums.length <= 10^5 | 1 <= nums[i] <= 10^4',
    examples: [
      {
        input: 'nums = [4,2,4,5,6]',
        output: '17',
        explanation: 'The subarray [2,4,5,6] has sum 17.',
      },
      { input: 'nums = [5,2,1,2,5,2,1,2,5]', output: '8' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['hash-map', 'sliding-window', 'array'],
    hints: [
      'Use a sliding window with a set to maintain uniqueness of elements in the current window.',
      'Expand the right pointer and shrink the left when a duplicate is found.',
      'Track the running sum and update the maximum whenever the window is valid.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Streak Finder',
    prompt:
      'A cartographer is mapping a terrain where consecutive elevations matter. Given an unsorted array of integers nums, return the length of the longest sequence of consecutive integers. The algorithm must run in O(n) time.',
    constraints: '0 <= nums.length <= 10^5 | -10^9 <= nums[i] <= 10^9',
    examples: [
      { input: 'nums = [100,4,200,1,3,2]', output: '4', explanation: 'Longest sequence is [1,2,3,4].' },
      { input: 'nums = [0,3,7,2,5,8,4,6,0,1]', output: '9' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['hash-map', 'array'],
    hints: [
      'Insert all numbers into a set for O(1) lookups.',
      'Only start counting a sequence from a number n where n-1 is NOT in the set — this avoids reprocessing.',
      'Extend each sequence as far as possible and keep track of the longest.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Node Duplicator',
    prompt:
      'A network architect must clone a linked list where each node has a next pointer and a random pointer that can point to any node or null. Given the head of such a list, return a deep copy. Use a hash map to link original nodes to their clones.',
    constraints: '0 <= n <= 1000 | -10^4 <= Node.val <= 10^4 | Node.random is null or points to a node in the list',
    examples: [
      {
        input: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]',
        output: '[[7,null],[13,0],[11,4],[10,2],[1,0]]',
        explanation: 'A deep copy with the same structure.',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['hash-map', 'linked-list'],
    hints: [
      'First pass: create all clone nodes and store original → clone in a map.',
      'Second pass: set each clone\'s next and random pointers using the map.',
      'The map ensures you never create duplicate clones for the same original node.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Frequency Vault',
    prompt:
      'An engineering guild builds a cache that evicts the least-frequently-used item, with ties broken by recency. Design a data structure that implements a Least Frequently Used (LFU) cache. Implement the LFUCache class with get(key) and put(key, value) operations each in O(1) average time.',
    constraints: '0 <= capacity <= 10^4 | 0 <= key <= 10^5 | 0 <= value <= 10^9 | at most 2 * 10^5 calls to get and put',
    examples: [
      {
        input: 'LFUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2); get(3); put(4,4); get(1); get(3); get(4)',
        output: '1,-1,3,-1,4',
      },
    ],
    difficulty: 'medium',
    estMin: 35,
    tags: ['hash-map', 'linked-list', 'design'],
    hints: [
      'Maintain a map from key to (value, frequency) and a map from frequency to an ordered set of keys.',
      'Track the current minimum frequency; update it on every get and put.',
      'Use a doubly linked list or LinkedHashSet per frequency bucket to keep track of insertion order for tie-breaking.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Hash Architect',
    prompt:
      'A systems programmer needs to build a hash map from scratch without using built-in hash table libraries. Design a HashMap class supporting put(key, value), get(key), and remove(key), all in expected O(1) time. Handle collisions using chaining.',
    constraints: '0 <= key, value <= 10^6 | at most 10^4 calls to put, get, remove',
    examples: [
      {
        input: 'HashMap(); put(1,1); put(2,2); get(1); get(3); put(2,1); get(2); remove(2); get(2)',
        output: '1, -1, 1, -1',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['hash-map', 'design', 'array'],
    hints: [
      'Allocate a fixed-size array of buckets; use key % bucket_size as the hash function.',
      'Each bucket holds a list of (key, value) pairs to handle collisions via chaining.',
      'For get and remove, iterate through the bucket\'s list to find the matching key.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Weighted Lottery',
    prompt:
      'A gambler\'s guild conducts a weighted lottery where each ticket has a different probability of winning. Given an array w of positive integers representing weights, implement pickIndex() which returns a random index with probability proportional to w[i] / sum(w).',
    constraints: '1 <= w.length <= 10^4 | 1 <= w[i] <= 10^5 | pickIndex will be called at most 10^4 times',
    examples: [
      {
        input: 'Solution([1,3]); pickIndex(); pickIndex()',
        output: '1 (75% of the time), 0 (25% of the time)',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['hash-map', 'math', 'binary-search', 'random'],
    hints: [
      'Build a prefix sum array from the weights.',
      'Generate a random number in [0, total_weight) and binary-search for the first prefix sum that exceeds it.',
      'The index found in the binary search corresponds to the randomly chosen bucket.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Volatile Registry',
    prompt:
      'A real-time trading platform needs a registry where insertions, deletions, and random-element access all run in O(1) average time. Design a RandomizedSet class with insert(val), remove(val), and getRandom() operations.',
    constraints: '-2^31 <= val <= 2^31 - 1 | at most 2 * 10^5 calls in total | getRandom is called only when at least one element exists',
    examples: [
      {
        input: 'RandomizedSet(); insert(1); remove(2); insert(2); getRandom(); remove(1); insert(2); getRandom()',
        output: 'true,false,true,[1 or 2],true,false,2',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['hash-map', 'array', 'design', 'random'],
    hints: [
      'Use an array for O(1) random access and a map from value to its array index for O(1) lookup.',
      'To remove in O(1), swap the target element with the last element in the array, then pop.',
      'Update the map entry for the swapped element after the swap.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Sliding Anagram Scanner',
    prompt:
      'A genomic analyst searches for all occurrences of a gene sequence (as permutations) within a longer DNA strand. Given two strings s and p, return all start indices of p\'s anagrams in s.',
    constraints: '1 <= s.length, p.length <= 3 * 10^4 | s and p consist of lowercase English letters',
    examples: [
      {
        input: 's = "cbaebabacd", p = "abc"',
        output: '[0,6]',
        explanation: '"cba" at index 0 and "bac" at index 6 are anagrams of "abc".',
      },
      { input: 's = "abab", p = "ab"', output: '[0,1,2]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['hash-map', 'sliding-window', 'string'],
    hints: [
      'Use two frequency maps — one for p and one for the current window in s.',
      'Slide the window across s, adding the incoming character and removing the outgoing one.',
      'When both maps are equal, record the start index.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Minimal Broadcast Window',
    prompt:
      'A communications relay must find the shortest contiguous segment of a signal string that contains all required channel codes. Given strings s (the signal) and t (the required codes), return the minimum window substring of s that contains all characters of t. If none exists, return an empty string.',
    constraints: 'm == s.length, n == t.length | 1 <= m, n <= 10^5 | s and t consist of uppercase and lowercase English letters',
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
      { input: 's = "a", t = "a"', output: '"a"' },
      { input: 's = "a", t = "aa"', output: '""' },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['hash-map', 'sliding-window', 'string'],
    hints: [
      'Count required characters in a need map; track how many distinct characters are currently satisfied.',
      'Expand the right pointer until all requirements are met, then shrink the left pointer to minimize the window.',
      'Record the smallest valid window seen at each contraction step.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The File Cluster Finder',
    prompt:
      'A disk auditor scans a filesystem and must identify groups of files with identical content. Given a list of directory paths where each path lists a directory name followed by file name and content pairs, return all groups of files with duplicate content.',
    constraints: '1 <= paths.length <= 2 * 10^4 | 2 <= paths[i].length <= 3000 | total chars <= 5 * 10^5',
    examples: [
      {
        input: 'paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]',
        output: '[["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['hash-map', 'string'],
    hints: [
      'Parse each path string to extract the directory, filenames, and their content.',
      'Use a map from content to list of file paths.',
      'Return only the lists with more than one file path.',
    ],
  },

  // ─── HASH-MAP: 8 HARD ────────────────────────────────────────────────────

  {
    patternSlug: 'hash-map',
    title: 'The Alien Lexicographer',
    prompt:
      'An intergalactic cryptologist receives a dictionary of words sorted according to an alien alphabet. Given a list of strings words in this alien language sorted lexicographically, derive the order of letters in the alien alphabet and return any valid ordering. If no valid ordering exists, return an empty string.',
    constraints: '1 <= words.length <= 100 | 1 <= words[i].length <= 100 | words[i] consists of lowercase English letters',
    examples: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"' },
      { input: 'words = ["z","x"]', output: '"zx"' },
      { input: 'words = ["z","x","z"]', output: '""', explanation: 'Cycle detected.' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['hash-map', 'topological-sort', 'graph', 'bfs'],
    hints: [
      'Compare adjacent words to deduce edges in a character-ordering graph.',
      'Run topological sort (Kahn\'s algorithm with in-degree map) on the character graph.',
      'If the resulting order doesn\'t include all unique characters, a cycle exists — return empty string.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Rank Inverter',
    prompt:
      'A stock analyst wants to know, for each position in an array, how many numbers to its right are smaller. Given an integer array nums, return a new array counts where counts[i] is the number of smaller elements to the right of nums[i].',
    constraints: '1 <= nums.length <= 10^5 | -10^4 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [5,2,6,1]', output: '[2,1,1,0]' },
      { input: 'nums = [-1,-1]', output: '[0,0]' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['hash-map', 'binary-indexed-tree', 'merge-sort', 'divide-and-conquer'],
    hints: [
      'A Fenwick tree (BIT) on coordinate-compressed values allows O(log n) prefix-sum queries.',
      'Process the array from right to left; for each element, query the BIT for counts of smaller values, then update.',
      'Coordinate compress values to a range [1, n] before building the BIT.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Frequency Stack Wizard',
    prompt:
      'A magic archive must always serve the most recently pushed element among those with the highest frequency. Design a FreqStack that supports push(val) and pop(). Pop should return the most frequently pushed element; if there is a tie, return the most recently pushed among them.',
    constraints: '0 <= val <= 10^9 | at most 2 * 10^4 calls to push and pop | pop is never called on an empty stack',
    examples: [
      {
        input: 'push(5),push(7),push(5),push(7),push(4),push(5); pop(); pop(); pop(); pop()',
        output: '5,7,5,4',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['hash-map', 'stack', 'design'],
    hints: [
      'Maintain a map from value to its current frequency, and a map from frequency to a stack of values at that frequency.',
      'Track the maximum frequency globally; update it on every push.',
      'On pop, get the top of the stack at max frequency, decrement the value\'s frequency, and lower maxFreq if that stack becomes empty.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Palindrome Weaver',
    prompt:
      'A cryptographer investigates a word list for palindrome pairs. Given an array of unique strings words, return all pairs [i, j] such that concatenating words[i] + words[j] forms a palindrome.',
    constraints: '1 <= words.length <= 5000 | 0 <= words[i].length <= 300 | words[i] consists of lowercase English letters',
    examples: [
      { input: 'words = ["abcd","dcba","lls","s","sssll"]', output: '[[0,1],[1,0],[3,2],[2,4]]' },
      { input: 'words = ["bat","tab","cat"]', output: '[[0,1],[1,0]]' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['hash-map', 'string', 'trie'],
    hints: [
      'Build a map from word to its index for O(1) reverse lookups.',
      'For each word, consider all splits into prefix+suffix; if the prefix is a palindrome and the reverse of the suffix exists in the map (or vice versa), a valid pair is found.',
      'Handle the empty string edge case carefully — an empty string can pair with any palindrome word.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Omniscient Registry',
    prompt:
      'An intelligence bureau maintains a data registry where all four operations — insert, delete, getMaxKey, and getMinKey — must run in O(1) time. Design the AllOne data structure to support these operations on string keys with associated counts.',
    constraints: '1 <= key.length <= 10 | at most 5 * 10^4 calls across all operations | getMaxKey and getMinKey must return "" for an empty data structure',
    examples: [
      {
        input: 'AllOne(); inc("a"); inc("b"); inc("b"); inc("c"); inc("b"); inc("a"); getMaxKey(); getMinKey()',
        output: '"b","c"',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['hash-map', 'linked-list', 'design'],
    hints: [
      'Use a doubly linked list of frequency buckets, each holding a set of keys at that frequency.',
      'Maintain a map from key to its bucket node for O(1) movement between buckets.',
      'The head and tail of the list give O(1) access to minimum and maximum frequency keys.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Concatenation Hunter',
    prompt:
      'A linguist scans a long sentence for hidden phrases that are concatenations of all words in a given list (each word used exactly once). Given a string s and an array of strings words (all same length), return all starting indices of such concatenated substrings in s.',
    constraints: '1 <= s.length <= 10^4 | 1 <= words.length <= 5000 | 1 <= words[i].length <= 30 | s and words[i] consist of lowercase letters',
    examples: [
      {
        input: 's = "barfoothefoobarman", words = ["foo","bar"]',
        output: '[0,9]',
      },
      {
        input: 's = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]',
        output: '[]',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['hash-map', 'sliding-window', 'string'],
    hints: [
      'Precompute a frequency map of all target words.',
      'For each starting offset in [0, word_len), use a sliding window that adds and removes one word at a time.',
      'When the window contains exactly len(words) words all matching the required counts, record the start index.',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Split Quality Assessor',
    prompt:
      'A data scientist evaluates how many ways a binary string can be split into two halves with an equal number of unique characters on each side. Given a binary string s, return the number of good splits where the number of distinct characters in s[0..i] equals the number in s[i+1..n-1].',
    constraints: '1 <= s.length <= 10^5 | s consists of lowercase English letters only (not just binary in this version)',
    examples: [
      { input: 's = "aacaba"', output: '2' },
      { input: 's = "abcd"', output: '1' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['hash-map', 'string', 'prefix-suffix'],
    hints: [
      'Compute the distinct character count for every prefix using a running frequency map.',
      'Similarly compute the distinct character count for every suffix from the right.',
      'Count positions i where prefix_distinct[i] equals suffix_distinct[i+1].',
    ],
  },
  {
    patternSlug: 'hash-map',
    title: 'The Minimum Coverage Enforcer',
    prompt:
      'A regulatory agency must enforce coverage by finding the smallest range [l, r] from k sorted lists such that at least one number from each list falls within [l, r]. Given k sorted integer arrays, find the smallest range that includes at least one number from each of the k lists.',
    constraints: 'nums.length == k | 1 <= k <= 3500 | 1 <= nums[i].length <= 50 | -10^5 <= nums[i][j] <= 10^5 | nums[i] is sorted',
    examples: [
      {
        input: 'nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]',
        output: '[20,24]',
      },
      {
        input: 'nums = [[1,2,3],[1,2,3],[1,2,3]]',
        output: '[1,1]',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['hash-map', 'heap', 'sliding-window', 'greedy'],
    hints: [
      'Merge all elements into a single array tagged with their source list index, then sort.',
      'Use a sliding window; maintain a count map of how many lists are currently represented.',
      'Shrink the window from the left whenever all k lists are covered; track the minimum range seen.',
    ],
  },

  // ─── MONOTONIC-STACK: 10 EASY ─────────────────────────────────────────────

  {
    patternSlug: 'monotonic-stack',
    title: 'The Parenthesis Judge',
    prompt:
      'A syntax validator checks whether a sequence of brackets is properly matched and nested. Given a string s containing only the characters (, ), {, }, [ and ], determine if the input string is valid. An open bracket must be closed by the same type of bracket in the correct order.',
    constraints: '1 <= s.length <= 10^4 | s consists of parentheses only',
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['monotonic-stack', 'string'],
    hints: [
      'Push open brackets onto a stack as you encounter them.',
      'When you see a closing bracket, check that the top of the stack is the matching open bracket.',
      'At the end, the stack must be empty for the string to be valid.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Scoreboard Operator',
    prompt:
      'A sports analyst tracks a running score using a series of operations: integers add points, "+" doubles the previous score entry, "D" records the sum of the last two, and "C" removes the last score. Given a list of operations, return the sum of all final scores on the board.',
    constraints: '1 <= ops.length <= 1000 | ops[i] is "C", "D", "+", or a valid integer in [-3 * 10^4, 3 * 10^4]',
    examples: [
      {
        input: 'ops = ["5","2","C","D","+"]',
        output: '30',
        explanation: '[5] → [5,2] → [5] → [5,10] → [5,10,15], sum=30',
      },
      { input: 'ops = ["5","-2","-4","D","9","+","+"]', output: '27' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['monotonic-stack', 'array', 'simulation'],
    hints: [
      'Use a stack to simulate the scoreboard operations.',
      'Handle each operation type by modifying the top of the stack.',
      'Sum all values remaining in the stack at the end.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Depth Sounder',
    prompt:
      'A cave surveyor measures the maximum nesting depth of a sequence of parentheses. Given a valid parentheses string s (VPS), return its depth — the maximum number of open parentheses at any point.',
    constraints: '1 <= s.length <= 100 | s consists of digits and parentheses | s is a valid parentheses string',
    examples: [
      { input: 's = "(1+(2*3)+((8)/4))+1"', output: '3' },
      { input: 's = "(1)+((2))+(((3)))"', output: '3' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['monotonic-stack', 'string'],
    hints: [
      'Track a running depth counter, incrementing on "(" and decrementing on ")".',
      'Record the maximum depth seen at any point.',
      'No explicit stack is needed — just the counter.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Outer Layer Remover',
    prompt:
      'An editor strips the outermost parentheses from a valid primitive parentheses decomposition. Given a valid parentheses string s, remove the outermost parentheses of every primitive string in the primitive decomposition of s.',
    constraints: '1 <= s.length <= 10^5 | s[i] is either "(" or ")" | s is a valid parentheses string',
    examples: [
      { input: 's = "(()())(())"', output: '()()()', explanation: 'Remove outermost from "(()())" and "(())".' },
      { input: 's = "(()())(())(()(()))"', output: '()()()()(())' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['monotonic-stack', 'string'],
    hints: [
      'Track the nesting depth with a counter.',
      'Only append a character to the result if the current depth is greater than 0 before incrementing (for "(") or greater than 1 before decrementing (for ")").',
      'Characters at depth 0 are the outermost layer and should be skipped.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Backspace Resolver',
    prompt:
      'A terminal emulator simulates typing with backspace characters. Given two strings s and t where # represents a backspace, return true if they are equal when typed into empty text editors.',
    constraints: '1 <= s.length, t.length <= 200 | s and t only contain lowercase letters and #',
    examples: [
      { input: 's = "ab#c", t = "ad#c"', output: 'true', explanation: 'Both become "ac".' },
      { input: 's = "ab##", t = "c#d#"', output: 'true' },
      { input: 's = "a#c", t = "b"', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['monotonic-stack', 'string', 'two-pointer'],
    hints: [
      'Simulate each string by processing characters with a stack — push letters and pop on backspace.',
      'Compare the two resulting stacks at the end.',
      'For the O(1)-space solution, use two reverse pointers and count pending backspaces.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Polish Calculator',
    prompt:
      'A vintage calculator processes expressions in Reverse Polish Notation. Given an array of tokens representing an arithmetic expression in RPN, evaluate it and return the integer result.',
    constraints: '1 <= tokens.length <= 10^4 | tokens[i] is "+", "-", "*", "/", or an integer in [-200, 200] | division truncates toward zero',
    examples: [
      { input: 'tokens = ["2","1","+","3","*"]', output: '9' },
      { input: 'tokens = ["4","13","5","/","+"]', output: '6' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['monotonic-stack', 'math'],
    hints: [
      'Use a stack to hold operands.',
      'When you encounter an operator, pop two operands, apply the operation, and push the result.',
      'The final answer is the single value remaining in the stack.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Duplicate Eliminator',
    prompt:
      'A data cleaner repeatedly removes all adjacent duplicate characters from a string until no more exist. Given a string s, remove all adjacent duplicates and return the resulting string.',
    constraints: '1 <= s.length <= 10^5 | s consists of lowercase English letters',
    examples: [
      { input: 's = "abbaca"', output: '"ca"', explanation: 'Remove "bb", then "aa" leaving "ca".' },
      { input: 's = "azxxzy"', output: '"ay"' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['monotonic-stack', 'string'],
    hints: [
      'Use a stack to process the string character by character.',
      'If the top of the stack equals the current character, pop (remove the pair); otherwise push.',
      'The stack contents after processing form the final string.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Build Sequence Verifier',
    prompt:
      'A robotic assembler receives instructions to build an array using stack operations "Push" and "Pop". Given a target array and a stream of integers from 1 to n, return the list of "Push" and "Pop" operations needed to produce the target, or an empty list if it is impossible.',
    constraints: '1 <= target.length <= 100 | 1 <= n <= 100 | 1 <= target[i] <= n | target is strictly increasing',
    examples: [
      { input: 'target = [1,3], n = 3', output: '["Push","Push","Pop","Push"]' },
      { input: 'target = [1,2,3], n = 3', output: '["Push","Push","Push"]' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['monotonic-stack', 'array', 'simulation'],
    hints: [
      'Iterate through integers 1 to n with a pointer into target.',
      'Always push the current integer; if it equals the current target value, advance the target pointer, otherwise pop.',
      'If the target pointer reaches the end of target, stop early.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The String Sanitizer',
    prompt:
      'A message filter removes "great" adjacent pairs from a string — specifically, a lowercase letter followed by its uppercase equivalent (e.g., "aA") and vice versa. Given a string s, remove all such pairs until none remain, then return the result.',
    constraints: '1 <= s.length <= 10^5 | s consists of uppercase and lowercase English letters',
    examples: [
      { input: 's = "leEeetcode"', output: '"leetcode"', explanation: '"eE" removed.' },
      { input: 's = "abBAcC"', output: '""' },
      { input: 's = "s"', output: '"s"' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['monotonic-stack', 'string'],
    hints: [
      'Process the string with a stack; for each character, check if it forms a bad pair with the top of the stack.',
      'A bad pair is when the two characters are the same letter but different case.',
      'If a bad pair is found, pop; otherwise push the current character.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Nested Decoder',
    prompt:
      'An archivist decodes a compressed string where k[encoded_string] means the encoded_string repeated k times. Given an encoded string s, return its decoded form. Guaranteed no leading zeros; nesting is possible.',
    constraints: '1 <= s.length <= 30 | s consists of lowercase letters, digits, and brackets | all integers k satisfy 1 <= k <= 300',
    examples: [
      { input: 's = "3[a]2[bc]"', output: '"aaabcbc"' },
      { input: 's = "3[a2[c]]"', output: '"accaccacc"' },
      { input: 's = "2[abc]3[cd]ef"', output: '"abcabccdcdcdef"' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['monotonic-stack', 'string', 'recursion'],
    hints: [
      'Use a stack to hold intermediate strings and counts as you encounter nested brackets.',
      'When you see "[", push the current string and the current count onto the stack.',
      'When you see "]", pop the count and previous string, then append the repeated current string.',
    ],
  },

  // ─── MONOTONIC-STACK: 12 MEDIUM ──────────────────────────────────────────

  {
    patternSlug: 'monotonic-stack',
    title: 'The Pattern 132 Detector',
    prompt:
      'A financial auditor hunts for a "132 pattern" — indices i < j < k such that nums[i] < nums[k] < nums[j]. Given an integer array nums, return true if there is a 132 pattern, false otherwise.',
    constraints: 'n == nums.length | 1 <= n <= 2 * 10^5 | -10^9 <= nums[i] <= 10^9',
    examples: [
      { input: 'nums = [1,2,3,4]', output: 'false' },
      { input: 'nums = [3,1,4,2]', output: 'true' },
      { input: 'nums = [-1,3,2,0]', output: 'true' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'Iterate from right to left, maintaining a decreasing stack and a variable "third" tracking the best candidate for nums[k].',
      'Whenever you pop from the stack (because the current element is larger), update "third" to the popped value.',
      'If you ever encounter an element smaller than "third", you have found the pattern.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Digit Minimizer',
    prompt:
      'A budget auditor must reduce a multi-digit number by removing exactly k digits to produce the smallest possible result. Given a non-negative integer represented as a string num and an integer k, return the smallest number after removing k digits.',
    constraints: '1 <= k <= num.length <= 10^5 | num consists of digits only | num has no leading zeros except the number 0 itself',
    examples: [
      { input: 'num = "1432219", k = 3', output: '"1219"' },
      { input: 'num = "10200", k = 1', output: '"200"' },
      { input: 'num = "10", k = 2', output: '"0"' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['monotonic-stack', 'string', 'greedy'],
    hints: [
      'Use a monotonic increasing stack — when the current digit is smaller than the top, pop (remove) it.',
      'Each pop counts as one removal; stop popping once k removals are done.',
      'Strip leading zeros from the final stack result.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Ramp Maximizer',
    prompt:
      'A slope surveyor wants the widest valid "ramp" in a terrain array — the maximum width i to j where i < j and nums[i] <= nums[j]. Given an integer array nums, return the maximum width ramp.',
    constraints: '2 <= nums.length <= 5 * 10^4 | 0 <= nums[i] <= 5 * 10^4',
    examples: [
      { input: 'nums = [6,0,8,2,1,5]', output: '4', explanation: 'Ramp from index 1 (value 0) to index 5 (value 5).' },
      { input: 'nums = [9,8,1,0,1,9,4,0,4,1]', output: '7' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['monotonic-stack', 'array', 'two-pointer'],
    hints: [
      'Build a monotonically decreasing stack of candidate left boundaries by scanning left to right.',
      'Scan from right to left; for each element, pop from the stack while the top is <= current and record the width.',
      'The maximum width found across all pops is the answer.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Balance Restorer',
    prompt:
      'A grammar engine must fix a string of brackets with the minimum number of swaps. Given a string of balanced brackets that has been shuffled, return the minimum number of swaps of adjacent characters to make it balanced.',
    constraints: '2 <= s.length <= 10^6 | s[i] is either "[" or "]" | the number of "[" equals the number of "]"',
    examples: [
      { input: 's = "][]["', output: '1' },
      { input: 's = "]]][[["', output: '2' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['monotonic-stack', 'string', 'greedy', 'math'],
    hints: [
      'Count unmatched "]" using a variable; whenever you see a mismatched ], increment a mismatch counter.',
      'Each swap can fix two mismatched positions: ceil(mismatch / 2) swaps are needed.',
      'Track the running balance (increment for "[", decrement for "]") and count how many times it goes negative.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Subarray Floor Aggregator',
    prompt:
      'A risk analyst needs the total of minimum values across all subarrays of a terrain reading. Given an integer array arr, find the sum of min(b) for every subarray b of arr. Since the answer may be large, return it modulo 10^9 + 7.',
    constraints: '1 <= arr.length <= 3 * 10^4 | 1 <= arr[i] <= 3 * 10^4',
    examples: [
      { input: 'arr = [3,1,2,4]', output: '17', explanation: 'Subarrays: [3]=3,[1]=1,[2]=2,[4]=4,[3,1]=1,[1,2]=1,[2,4]=2,[3,1,2]=1,[1,2,4]=1,[3,1,2,4]=1. Sum=17.' },
      { input: 'arr = [11,81,94,43,3]', output: '444' },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['monotonic-stack', 'array', 'math'],
    hints: [
      'For each element arr[i], find how many subarrays have arr[i] as their minimum using a monotonic stack.',
      'Compute left[i] = distance to the previous smaller element and right[i] = distance to the next smaller or equal element.',
      'The contribution of arr[i] is arr[i] * left[i] * right[i].',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Letter Deduplicator',
    prompt:
      'A lexicographic optimizer removes duplicate letters from a string such that every letter appears exactly once and the result is the smallest lexicographic ordering possible. Given a string s, return the result.',
    constraints: '1 <= s.length <= 10^4 | s consists of lowercase English letters',
    examples: [
      { input: 's = "bcabc"', output: '"abc"' },
      { input: 's = "cbacdcbc"', output: '"acdb"' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['monotonic-stack', 'string', 'greedy'],
    hints: [
      'Track the last occurrence of each character; use a "seen" set to avoid duplicates.',
      'Use a monotonic increasing stack; pop a character only if it appears again later in the string.',
      'Skip characters already in the stack (the seen set handles this).',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Substring Scorer',
    prompt:
      'A reward engine gives points for removing substrings "ab" or "ba" from a string, with configurable point values. Given a string s and point values x (for removing "ab") and y (for removing "ba"), return the maximum points obtainable by removing substrings in any order.',
    constraints: '1 <= s.length <= 10^5 | s consists of lowercase English letters | 1 <= x, y <= 10^4',
    examples: [
      {
        input: 's = "cdbcbbaaabab", x = 4, y = 5',
        output: '19',
        explanation: 'Remove "ba" (+5), "ba" (+5), "ab" (+4), "ab" (+4) plus leftover.',
      },
      { input: 's = "aabbaaxybbaabb", x = 5, y = 4', output: '20' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['monotonic-stack', 'string', 'greedy'],
    hints: [
      'Greedily remove the higher-value pair first using a stack-based pass over the string.',
      'Run a second stack-based pass to remove the remaining lower-value pairs from the leftover string.',
      'Accumulate points for each successful removal in both passes.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Leaf Value Minimizer',
    prompt:
      'A tree builder constructs binary trees from leaf sequences and wants to minimise the sum of all non-leaf node values, where each non-leaf node equals the product of the largest leaf in its left and right subtrees. Given an array arr of positive integers, return the smallest possible sum of the values of each non-leaf node.',
    constraints: '2 <= arr.length <= 40 | 1 <= arr[i] <= 15 | answer fits in a 32-bit signed integer',
    examples: [
      { input: 'arr = [6,2,4]', output: '32', explanation: '6*4+2*4 = 24+8 = 32 (optimal split).' },
      { input: 'arr = [4,11]', output: '44' },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['monotonic-stack', 'dp', 'greedy'],
    hints: [
      'Use a monotonic decreasing stack; when a smaller element is squeezed out, multiply it by the minimum of its neighbours.',
      'The cost of removing an element is element * min(left_neighbour, right_neighbour).',
      'Accumulate the cost for each removal until two elements remain.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Constrained Maximum',
    prompt:
      'A sequence oracle needs the maximum subsequence sum where you cannot skip more than k elements between chosen consecutive elements. Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence where for each consecutive pair of indices i and j chosen (i < j), j - i <= k.',
    constraints: '1 <= k <= nums.length <= 10^5 | -10^4 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [10,2,-10,5,20], k = 2', output: '37', explanation: 'Subsequence [10,2,5,20].' },
      { input: 'nums = [-1,-2,-3], k = 1', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['monotonic-stack', 'dp', 'deque'],
    hints: [
      'Define dp[i] = maximum sum of a valid subsequence ending at index i.',
      'dp[i] = nums[i] + max(0, max(dp[i-k..i-1])) — use a monotonic deque to get the range max in O(1).',
      'The deque stores indices in decreasing dp value order and evicts indices outside the window of size k.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Matrix Ones Counter',
    prompt:
      'A satellite imagery analyst counts rectangular sub-regions in a binary grid that consist entirely of ones. Given an m x n binary matrix mat, return the number of submatrices that contain all ones.',
    constraints: '1 <= m, n <= 150 | mat[i][j] is 0 or 1',
    examples: [
      {
        input: 'mat = [[1,0,1],[1,1,0],[1,1,0]]',
        output: '13',
      },
      { input: 'mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]', output: '24' },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['monotonic-stack', 'matrix', 'dp'],
    hints: [
      'Build a row-wise height array where height[j] counts consecutive 1s ending at the current row in column j.',
      'For each row, treat the height array as a histogram and count rectangles using a stack-based approach.',
      'For a bar of height h, the number of rectangles ending at that bar with that minimum height equals h * width.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Encoded Message Navigator',
    prompt:
      'A puzzle navigator decodes deeply nested instructions of the form k[encoded] and then retrieves the character at a given position without fully decoding the (potentially enormous) string. Given an encoded string s and an integer k, return the k-th character (1-indexed) of the decoded string.',
    constraints: '2 <= s.length <= 100 | s consists of lowercase letters, digits, and brackets | 1 <= k <= 10^9 | Integers k in s satisfy 1 <= k <= 300 | decoded string length < 2^63',
    examples: [
      { input: 's = "leet2[code]3[ab]c", k = 10', output: '"o"' },
      { input: 's = "ha22[blabla]", k = 5', output: '"b"' },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['monotonic-stack', 'string'],
    hints: [
      'Decode the string to determine the total length of each segment using a stack.',
      'Work backwards from the target index — at each repetition level, take k modulo the segment length.',
      'If the remainder is 0, the answer lies at the end of one repetition; recurse into the inner string.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Online Bidder',
    prompt:
      'An auction house tracks the running span of consecutive days where the bid price was less than or equal to today\'s price. Design a StockSpanner class with a next(price) method that returns the span for the current day\'s price, processing queries online.',
    constraints: '1 <= price <= 10^5 | At most 10^4 calls to next',
    examples: [
      {
        input: 'StockSpanner(); next(100); next(80); next(60); next(70); next(60); next(75); next(85)',
        output: '[1,1,1,2,1,4,6]',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['monotonic-stack', 'design'],
    hints: [
      'Store (price, span) pairs on a stack.',
      'When processing a new price, pop all entries whose price is less than or equal to the new price and accumulate their spans.',
      'Push the new (price, accumulated_span) pair and return the accumulated span.',
    ],
  },

  // ─── MONOTONIC-STACK: 8 HARD ──────────────────────────────────────────────

  {
    patternSlug: 'monotonic-stack',
    title: 'The Fortress Matrix Builder',
    prompt:
      'A military engineer scans a binary map for the largest rectangular fortification area filled entirely with "1"s. Given a rows x cols binary matrix filled with 0s and 1s, find the largest rectangle containing only 1s and return its area.',
    constraints: 'rows == matrix.length | cols == matrix[i].length | 1 <= rows, cols <= 200 | matrix[i][j] is 0 or 1',
    examples: [
      {
        input: 'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
        output: '6',
      },
      { input: 'matrix = [["0"]]', output: '0' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['monotonic-stack', 'matrix', 'dp'],
    hints: [
      'Build a histogram height array for each row cumulatively.',
      'Apply the "largest rectangle in histogram" algorithm (monotonic stack) to each row\'s height array.',
      'The maximum rectangle area across all rows is the answer.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Rainfall Collector 3D',
    prompt:
      'A hydrologist models a 3D terrain to calculate trapped rainwater volume. Given an m x n integer matrix heightMap representing the terrain elevation, return the volume of water it can trap after raining.',
    constraints: 'm == heightMap.length | n == heightMap[0].length | 1 <= m, n <= 200 | 0 <= heightMap[i][j] <= 2 * 10^4',
    examples: [
      {
        input: 'heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]',
        output: '4',
      },
      {
        input: 'heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]',
        output: '10',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['monotonic-stack', 'heap', 'bfs', 'matrix'],
    hints: [
      'Use a min-heap seeded with all border cells as initial candidates.',
      'Process cells in order of increasing height via BFS; the trapped water at each cell equals max(0, current_max_height - cell_height).',
      'Update the running maximum boundary height as you expand inward.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Rectangle Sum Scout',
    prompt:
      'A data analyst needs the submatrix with the largest possible sum within a grid of integers. Given an m x n matrix, find the submatrix with the largest sum and return that sum.',
    constraints: 'm == matrix.length | n == matrix[0].length | 1 <= m, n <= 100 | -100 <= matrix[i][j] <= 100',
    examples: [
      {
        input: 'matrix = [[1,0,1],[0,-2,3]]',
        output: '4',
        explanation: 'Submatrix [[0,1],[-2,3]] has sum 4.',
      },
      { input: 'matrix = [[2,1],[-3,-4]]', output: '3' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['monotonic-stack', 'matrix', 'dp', 'divide-and-conquer'],
    hints: [
      'Fix left and right column boundaries and compress rows into a 1D prefix sum array.',
      'Apply Kadane\'s algorithm on each 1D array to find the maximum subarray sum for the current column pair.',
      'Iterating over all O(n^2) column pairs gives an O(m * n^2) solution.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Wizard Strength Oracle',
    prompt:
      'A magical guild assigns each wizard a strength value. For any group of consecutive wizards, the group\'s total strength equals the minimum wizard\'s power multiplied by the sum of all powers in the group. Given an integer array strength, return the sum of total strengths of all contiguous groups of wizards modulo 10^9 + 7.',
    constraints: '1 <= strength.length <= 10^5 | 1 <= strength[i] <= 10^9',
    examples: [
      {
        input: 'strength = [1,3,1,2]',
        output: '44',
      },
      { input: 'strength = [5,4,6]', output: '213' },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['monotonic-stack', 'array', 'prefix-sum', 'math'],
    hints: [
      'For each element as the minimum of a subarray, determine the range it is the minimum using a monotonic stack.',
      'Compute prefix sums of prefix sums (double prefix sums) to efficiently sum subarray totals.',
      'Combine the range boundaries and double prefix sums to compute each element\'s total contribution in O(1).',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Range Value Surveyor',
    prompt:
      'A statistician wants the sum over all subarrays of (max(subarray) - min(subarray)). Given an integer array nums, return the sum of subarray ranges. The range of a subarray is the difference between its largest and smallest elements.',
    constraints: '1 <= nums.length <= 1000 | -10^9 <= nums[i] <= 10^9',
    examples: [
      { input: 'nums = [1,2,3]', output: '4' },
      { input: 'nums = [1,3,3]', output: '4' },
      { input: 'nums = [4,-2,-3,4,1]', output: '59' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'Split the problem: sum of all subarray maxima minus sum of all subarray minima.',
      'Use a monotonic stack to compute the contribution of each element as a subarray maximum and as a minimum.',
      'This is the same "sum of subarray minimums" technique applied twice with different stack orderings.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Queue Visibility Inspector',
    prompt:
      'A parade coordinator counts how many people each person in a queue can see standing to their right. A person i can see person j (j > i) if there is no person taller than min(heights[i], heights[j]) standing between them. Given heights, return the array of visibility counts.',
    constraints: 'n == heights.length | 1 <= n <= 10^5 | 1 <= heights[i] <= 10^5 | all heights are distinct',
    examples: [
      {
        input: 'heights = [10,6,8,5,11,9]',
        output: '[3,1,2,1,1,0]',
      },
      { input: 'heights = [5,1,2,3,10]', output: '[4,1,1,1,0]' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['monotonic-stack', 'array'],
    hints: [
      'Use a decreasing monotonic stack; when a taller element pops shorter ones, those shorter elements get +1 visibility from the current element.',
      'The element doing the popping also sees each popped element (+1 per pop).',
      'If the stack is non-empty after all pops and the current element is shorter, it can see the new top (+1).',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Maximum Jump Collector',
    prompt:
      'A platform game character collects coins during jumps. You are given an integer array nums, and you can jump from any index. Define a valid jump from index i to j (i < j) as satisfying nums[i] <= nums[j] and no element between i and j is strictly between nums[i] and nums[j]. Return the maximum sum of a valid jump sequence starting from any index.',
    constraints: '1 <= nums.length <= 10^5 | 1 <= nums[i] <= 10^9',
    examples: [
      { input: 'nums = [100,1,1,100]', output: '200' },
      { input: 'nums = [1,3,5,3,9,4]', output: '21' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['monotonic-stack', 'dp', 'array'],
    hints: [
      'Use a monotonic decreasing stack and dynamic programming combined.',
      'When you pop an element because the current is larger, you can jump from the popped to the current; merge their dp values.',
      'If after popping the new top equals the current element, they can also jump to each other — take the max dp value.',
    ],
  },
  {
    patternSlug: 'monotonic-stack',
    title: 'The Lexicographic Stack Compressor',
    prompt:
      'An encoder compresses a string by repeatedly finding the leftmost pair of identical adjacent characters and replacing them with a single character that is one rank higher in the alphabet (a→b, b→c, …). Given a string s and a target length k, return the lexicographically smallest string of length k achievable, or an empty string if impossible.',
    constraints: '1 <= s.length <= 10^5 | 1 <= k <= s.length | s consists of lowercase English letters | no character in s is "z"',
    examples: [
      { input: 's = "aaabccdd", k = 4', output: '"bccd"' },
      { input: 's = "abcd", k = 2', output: '""' },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['monotonic-stack', 'string', 'greedy'],
    hints: [
      'Use a stack to simulate the compression: when the top equals the current character, pop and push the incremented character.',
      'Track whether each stack entry was produced by a merge (and can therefore be further reduced) versus an original character.',
      'Greedily decide whether to trigger a merge based on whether the resulting string can reach length k.',
    ],
  },

  // ─── UNION-FIND: 10 EASY ──────────────────────────────────────────────────

  {
    patternSlug: 'union-find',
    title: 'The Path Scout',
    prompt:
      'A route planner checks whether a traveller can get from a source city to a destination in a road network. Given n nodes numbered 0 to n-1, a list of bidirectional edges, a source src, and a destination dst, return true if there exists a valid path from src to dst.',
    constraints: '1 <= n <= 2 * 10^5 | 0 <= edges.length <= 2 * 10^5 | 0 <= src, dst <= n - 1 | edges[i] are valid pairs',
    examples: [
      { input: 'n=3, edges=[[0,1],[1,2],[2,0]], src=0, dst=2', output: 'true' },
      { input: 'n=6, edges=[[0,1],[0,2],[3,5],[5,4],[4,3]], src=0, dst=5', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['union-find', 'graph', 'bfs', 'dfs'],
    hints: [
      'Union all edges together; at the end, check if src and dst share the same root.',
      'With path compression and union by rank, each find operation is nearly O(1).',
      'Alternatively, BFS/DFS from src and check if dst is reachable.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Connectivity Checker',
    prompt:
      'A network engineer verifies whether all nodes in an undirected graph are reachable from any node. Given n nodes and a list of edges, return true if the graph is fully connected.',
    constraints: '1 <= n <= 1000 | 0 <= edges.length <= n*(n-1)/2 | no duplicate edges | no self-loops',
    examples: [
      { input: 'n=4, edges=[[0,1],[0,2],[0,3]]', output: 'true' },
      { input: 'n=4, edges=[[0,1],[2,3]]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['union-find', 'graph'],
    hints: [
      'Union all edges; then verify that all nodes share the same root.',
      'Track the number of distinct components — it starts at n and decreases by 1 each time two different components are merged.',
      'If the component count reaches 1, the graph is connected.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Component Counter',
    prompt:
      'A telecom analyst counts isolated sub-networks in a map of undirected connections. Given n nodes and a list of edges, return the number of connected components.',
    constraints: '1 <= n <= 2000 | 1 <= edges.length <= 5000 | edges[i].length == 2 | 0 <= ai, bi < n | no repeated edges',
    examples: [
      { input: 'n=5, edges=[[0,1],[1,2],[3,4]]', output: '2' },
      { input: 'n=5, edges=[[0,1],[1,2],[2,3],[3,4]]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['union-find', 'graph', 'dfs'],
    hints: [
      'Initialise n components; each successful union (merging two different roots) decrements the count by 1.',
      'Return the final component count after processing all edges.',
      'Path compression keeps the union-find efficient.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Cycle Patrol',
    prompt:
      'A safety inspector checks whether an undirected network contains any redundant (cycle-forming) cable. Given n nodes and a list of edges, return true if there is a cycle in the undirected graph.',
    constraints: '1 <= n <= 1000 | 1 <= edges.length <= 10^4 | no duplicate edges or self-loops',
    examples: [
      { input: 'n=3, edges=[[0,1],[1,2],[0,2]]', output: 'true' },
      { input: 'n=3, edges=[[0,1],[1,2]]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['union-find', 'graph'],
    hints: [
      'For each edge (u, v), check if u and v already share the same root before unioning.',
      'If they share a root, adding this edge would create a cycle.',
      'Union-find with path compression detects cycles in nearly O(n) total.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Valid Forest Inspector',
    prompt:
      'A forestry surveyor determines whether a set of nodes and edges forms a valid tree. Given n nodes labelled 0 to n-1 and a list of undirected edges, return true if these edges make up a valid tree (connected and acyclic).',
    constraints: '1 <= n <= 2000 | 0 <= edges.length <= 5000 | edges[i].length == 2 | no duplicate edges or self-loops',
    examples: [
      { input: 'n=5, edges=[[0,1],[0,2],[0,3],[1,4]]', output: 'true' },
      { input: 'n=5, edges=[[0,1],[1,2],[2,3],[1,3],[1,4]]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['union-find', 'graph'],
    hints: [
      'A valid tree has exactly n-1 edges and is connected — check both conditions.',
      'Use union-find: if any edge connects two nodes already in the same component, a cycle exists.',
      'After processing all edges, verify that only one component remains.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Swap Sorter',
    prompt:
      'A logistic coordinator can swap any two characters at positions that are connected in a network. Given a string s and a list of pairs, return the lexicographically smallest string achievable by performing any number of swaps on the pairs.',
    constraints: '1 <= s.length <= 10^5 | 0 <= pairs.length <= 10^5 | 0 <= pairs[i][0], pairs[i][1] < s.length | s consists of lowercase English letters',
    examples: [
      { input: 's = "dcab", pairs = [[0,3],[1,2]]', output: '"bacd"' },
      { input: 's = "dcab", pairs = [[0,3],[1,2],[0,2]]', output: '"abcd"' },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['union-find', 'string', 'sorting'],
    hints: [
      'Use union-find to group connected index positions into components.',
      'Within each component, collect the characters and their positions, sort the characters, then assign them back in sorted order.',
      'Return the modified string.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Island Counter',
    prompt:
      'A cartographer counts discrete landmasses in a binary ocean map. Given an m x n 2D grid where "1" is land and "0" is water, return the number of islands (connected groups of land cells).',
    constraints: 'm, n >= 1 | grid[i][j] is "0" or "1"',
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: '1',
      },
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: '3',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['union-find', 'matrix', 'dfs', 'bfs'],
    hints: [
      'Flatten the 2D grid to a 1D union-find array using index = row * n + col.',
      'For each land cell, union it with its adjacent (up, left, right, down) land cells.',
      'The number of distinct roots among land cells is the island count.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Same Cluster Query',
    prompt:
      'A social network analyst answers repeated membership queries: "are person A and person B in the same community?" Given n people, a list of friend pairs, and a list of queries, return an array of booleans answering each query.',
    constraints: '1 <= n <= 10^4 | 0 <= pairs.length, queries.length <= 10^4',
    examples: [
      {
        input: 'n=6, pairs=[[0,1],[1,2],[3,4]], queries=[[0,2],[3,5],[1,4]]',
        output: '[true,false,false]',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['union-find', 'graph'],
    hints: [
      'Build the union-find structure from the pairs list.',
      'For each query (a, b), return find(a) == find(b).',
      'Path compression makes repeated queries efficient.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Rope Knotter',
    prompt:
      'A craftsman must connect n ropes into one by always joining the two shortest ropes first to minimise total knot cost. The cost of joining two ropes equals the sum of their lengths. Given an array ropes of rope lengths, return the minimum total cost to connect them all.',
    constraints: '1 <= ropes.length <= 10^4 | 1 <= ropes[i] <= 10^4',
    examples: [
      { input: 'ropes = [4,3,2,6]', output: '29', explanation: 'Join 2+3=5 (cost 5), join 4+5=9 (cost 9), join 9+6=15 (cost 15). Total = 29.' },
      { input: 'ropes = [1,2,3,4,5]', output: '33' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['union-find', 'heap', 'greedy'],
    hints: [
      'Use a min-heap to always extract the two shortest ropes.',
      'Merge them, add their sum to the total cost, and push the new rope back.',
      'Repeat until one rope remains.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Region Validator',
    prompt:
      'A border enforcer checks a binary matrix to see if all "O" (zero) regions fully surrounded by "X"s will be captured. Given an m x n board of "X" and "O", return the count of "O" cells that would NOT be captured (i.e., those connected to the board boundary).',
    constraints: 'm, n >= 1 | board[i][j] is "X" or "O"',
    examples: [
      {
        input: 'board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]',
        output: '1',
        explanation: 'The "O" at [3][1] touches the boundary, so it is safe; the others are captured.',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['union-find', 'matrix', 'dfs'],
    hints: [
      'Create a virtual node representing "escape" and union all boundary "O" cells with it.',
      'Then union each "O" cell with its adjacent "O" neighbours.',
      'Any "O" cell whose root is the virtual escape node is safe; the rest would be captured.',
    ],
  },

  // ─── UNION-FIND: 12 MEDIUM ────────────────────────────────────────────────

  {
    patternSlug: 'union-find',
    title: 'The Stone Sweeper',
    prompt:
      'A game mechanic removes stones from a grid: a stone can be removed if it shares a row or column with at least one other stone. Given an array of stone positions, return the maximum number of stones that can be removed.',
    constraints: '1 <= stones.length <= 1000 | 0 <= stones[i][j] <= 10^4 | no two stones are at the same position',
    examples: [
      {
        input: 'stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]',
        output: '5',
      },
      { input: 'stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['union-find', 'graph', 'dfs'],
    hints: [
      'Union all stones that share a row or column — they belong to the same connected component.',
      'From each connected component of size k, at most k-1 stones can be removed (one must remain).',
      'Answer = total stones - number of connected components.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Equation Arbiter',
    prompt:
      'A formal logic system checks a set of variable equality and inequality constraints for satisfiability. Given an array of equations where each equation is either "a==b" or "a!=b", return true if it is possible to assign integers to variables to satisfy all constraints.',
    constraints: '1 <= equations.length <= 500 | equations[i].length == 4 | equations[i][0], equations[i][3] are lowercase letters | equations[i][1] is either "=" | equations[i][2] is either "=" or "!"',
    examples: [
      { input: 'equations = ["a==b","b!=a"]', output: 'false' },
      { input: 'equations = ["b==a","a==b"]', output: 'true' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['union-find', 'graph'],
    hints: [
      'First pass: union all variables connected by "==" equations.',
      'Second pass: for every "!=" equation, verify the two variables do NOT share the same root.',
      'If any inequality connects two variables in the same component, return false.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Distance Minimizer',
    prompt:
      'A logistics coordinator minimizes the Hamming distance across swap operations. You have two integer arrays source and target of equal length. In one operation you can swap two elements at any pair of allowed-swap indices. Return the minimum Hamming distance after performing any number of swaps.',
    constraints: 'n == source.length == target.length | 1 <= n <= 10^5 | 1 <= source[i], target[i] <= 10^5 | 0 <= allowedSwaps.length <= 10^5',
    examples: [
      {
        input: 'source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[0,1],[2,3]]',
        output: '1',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['union-find', 'array', 'hash-map'],
    hints: [
      'Union the allowed swap indices into connected components.',
      'Within each component, count how many source values can be matched to target values using a frequency map.',
      'Unmatched elements in the component contribute to the Hamming distance.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Network Reconstructor',
    prompt:
      'A disaster recovery team must bring n computers back online, all connected to computer 0. Currently there are n-1 connections. Determine the minimum number of extra connections needed (each new connection is made by repurposing an existing connection that is "redundant"). Given n and a list of connections, return the minimum operations to connect all computers, or -1 if impossible.',
    constraints: '1 <= n <= 10^5 | 1 <= connections.length <= min(n*(n-1)/2, 10^5) | no duplicate connections or self-loops',
    examples: [
      { input: 'n=4, connections=[[0,1],[0,2],[1,2]]', output: '1' },
      { input: 'n=6, connections=[[0,1],[0,2],[0,3],[1,2],[1,3]]', output: '2' },
      { input: 'n=6, connections=[[0,1],[0,2],[0,3],[1,2]]', output: '-1' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['union-find', 'graph'],
    hints: [
      'Count the number of connected components C and the number of redundant (cycle-forming) edges R.',
      'You can only reconnect computers if R >= C - 1; otherwise return -1.',
      'The minimum operations needed is C - 1 (one cable per component join).',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Bounded Path Oracle',
    prompt:
      'A topographer checks if mountain paths below a certain elevation limit exist between query pairs. Given an undirected weighted graph and queries of the form [p, q, limit], answer each query: is there a path from p to q where every edge weight is strictly less than limit?',
    constraints: 'n == edgeList.length | 1 <= n, m <= 10^5 | 1 <= queries.length <= 10^5 | 0 <= p, q < n | 1 <= dis, limit <= 10^9',
    examples: [
      {
        input: 'n=3, edgeList=[[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries=[[0,1,2],[0,2,5]]',
        output: '[false,true]',
      },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['union-find', 'graph', 'offline', 'sorting'],
    hints: [
      'Sort edges by weight and queries by limit — process queries offline.',
      'For each query with limit L, union all edges with weight < L first.',
      'Then check if the two query nodes are in the same component.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Graph Type Reducer',
    prompt:
      'A network pruner must remove the maximum number of edges from a mixed graph (type 1: traversable by Alice, type 2: by Bob, type 3: by both) while keeping it fully traversable by both Alice and Bob. Return the max edges removed, or -1 if impossible.',
    constraints: '1 <= n <= 10^5 | 1 <= edges.length <= min(3*n*(n-1)/2, 10^5) | edges[i][0] in {1,2,3} | 1 <= edges[i][1] < edges[i][2] <= n',
    examples: [
      {
        input: 'n=4, edges=[[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]',
        output: '2',
      },
      { input: 'n=4, edges=[[3,1,2],[3,2,3],[1,1,4],[2,1,4]]', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['union-find', 'graph', 'greedy'],
    hints: [
      'Add type-3 edges first (they help both Alice and Bob); count how many are redundant.',
      'Then add type-1 edges for Alice\'s union-find and type-2 for Bob\'s; count redundant edges for each.',
      'If either Alice\'s or Bob\'s graph is not fully connected, return -1; otherwise return total redundant edges.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Rising Water Swimmer',
    prompt:
      'A swimmer navigates a rising-water grid where grid[i][j] is the elevation and the water level rises to t at time t. At time t you can swim from cell (r1, c1) to (r2, c2) if both are <= t and they are adjacent. Given an n x n integer matrix grid, return the minimum time t such that it is possible to swim from (0,0) to (n-1,n-1).',
    constraints: 'n == grid.length == grid[0].length | 1 <= n <= 50 | 0 <= grid[i][j] < n^2 | each value appears exactly once',
    examples: [
      { input: 'grid = [[0,2],[1,3]]', output: '3' },
      {
        input: 'grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]',
        output: '16',
      },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['union-find', 'binary-search', 'heap', 'matrix'],
    hints: [
      'Binary search on the answer t; for each t, check connectivity of cells with elevation <= t.',
      'Alternatively, sort cells by elevation and union them greedily until (0,0) and (n-1,n-1) are connected.',
      'The first time they connect is the answer.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Mega Island Engineer',
    prompt:
      'A terraformer flips one "0" cell in a binary grid to "1" and wants to maximize the resulting island size. Given an n x n binary matrix grid, return the size of the largest island after this single flip. If the grid is already all 1s, return n * n.',
    constraints: 'n == grid.length == grid[0].length | 1 <= n <= 500 | grid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [[1,0],[0,1]]', output: '3' },
      { input: 'grid = [[1,1],[1,0]]', output: '4' },
      { input: 'grid = [[1,1],[1,1]]', output: '4' },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['union-find', 'matrix', 'dfs'],
    hints: [
      'Label each island with a unique ID using union-find and record each component\'s size.',
      'For each "0" cell, look at its four neighbours and sum the sizes of distinct adjacent island components (+1 for the flipped cell).',
      'Return the maximum such sum across all "0" cells.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Unreachable Pair Counter',
    prompt:
      'A network analyst counts pairs of nodes that cannot communicate. Given n nodes and a list of edges, return the number of pairs (i, j) (i < j) such that there is no path between nodes i and j.',
    constraints: '1 <= n <= 10^5 | 0 <= edges.length <= 2 * 10^5 | 0 <= ai, bi < n | no duplicate edges or self-loops',
    examples: [
      { input: 'n=3, edges=[[0,1],[0,2]]', output: '0' },
      { input: 'n=7, edges=[[0,2],[0,5],[2,4],[1,6],[5,4]]', output: '14' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['union-find', 'graph', 'math'],
    hints: [
      'Use union-find to compute the size of every connected component.',
      'For each component of size s, the number of unreachable pairs to nodes outside it is s * (n - s).',
      'Sum all such products and divide by 2 to avoid double-counting.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Matrix Rank Transformer',
    prompt:
      'A scheduler assigns ranks to a matrix such that: (1) the rank is a positive integer, (2) if two elements in the same row or column are equal they have the same rank, (3) if a < b and they share a row or column then rank(a) < rank(b), and (4) ranks are as small as possible. Given an m x n matrix, return the matrix after applying these rules.',
    constraints: 'm == matrix.length | n == matrix[0].length | 1 <= m, n <= 500 | -10^9 <= matrix[i][j] <= 10^9',
    examples: [
      { input: 'matrix = [[1,2],[3,4]]', output: '[[1,2],[2,3]]' },
      { input: 'matrix = [[7,7],[7,7]]', output: '[[1,1],[1,1]]' },
    ],
    difficulty: 'medium',
    estMin: 35,
    tags: ['union-find', 'matrix', 'sorting', 'greedy'],
    hints: [
      'Sort all (value, row, col) triples; process groups of equal values together.',
      'Within a group, union cells that share a row or column.',
      'Assign each merged component a rank equal to the max current rank in its rows/columns + 1.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Weighted Swap Optimizer',
    prompt:
      'A compiler optimizer can swap characters at paired index positions. Using union-find to group swappable positions, return the lexicographically smallest permutation of string s achievable by any number of swaps using the given allowed pairs.',
    constraints: '1 <= s.length <= 10^5 | 0 <= pairs.length <= 10^5 | 0 <= pairs[i][0], pairs[i][1] < s.length | s consists of lowercase English letters',
    examples: [
      { input: 's = "dcab", pairs = [[0,3],[1,2],[0,2]]', output: '"abcd"' },
      { input: 's = "cba", pairs = [[0,1],[1,2]]', output: '"abc"' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['union-find', 'string', 'sorting'],
    hints: [
      'Union all pairs to form connected components of indices.',
      'For each component, collect the characters at those indices and sort them.',
      'Write the sorted characters back to the positions (sorted) in the component.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Critical Bridge Finder',
    prompt:
      'A network reliability engineer identifies which connections are critical (bridges) and which are redundant (pseudo-critical). Given n nodes and a list of weighted edges, return [criticalEdges, pseudoCriticalEdges] where an edge is critical if removing it increases the MST cost, and pseudo-critical if it can appear in some MST.',
    constraints: '2 <= n <= 100 | 1 <= edges.length <= min(200, n*(n-1)/2) | edges[i].length == 3 | 0 <= fromi < toi < n | 1 <= weighti <= 1000 | no duplicate edges',
    examples: [
      { input: 'n=5, edges=[[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]', output: '[[0,1],[2,3,4,5]]' },
      { input: 'n=4, edges=[[0,1,1],[1,2,1],[0,2,1],[2,3,1]]', output: '[[3],[0,1,2]]' },
    ],
    difficulty: 'medium',
    estMin: 40,
    tags: ['union-find', 'graph', 'mst'],
    hints: [
      'First compute the baseline MST cost using Kruskal\'s algorithm.',
      'For each edge, try excluding it and compute the new MST cost — if higher, it is critical.',
      'For pseudo-critical edges, force-include the edge first, then complete the MST — if the cost equals baseline, it is pseudo-critical.',
    ],
  },

  // ─── UNION-FIND: 8 HARD ───────────────────────────────────────────────────

  {
    patternSlug: 'union-find',
    title: 'The Dynamic Island Tracker',
    prompt:
      'A terraforming simulator adds land cells one by one to an ocean and reports the island count after each addition. Given an m x n grid (initially all water) and a list of positions to add land, return an array where the i-th element is the number of islands after the i-th operation.',
    constraints: 'm, n >= 1 | 1 <= positions.length <= m * n | positions[i] = [ri, ci]',
    examples: [
      {
        input: 'm=3, n=3, positions=[[0,0],[0,1],[1,2],[2,1]]',
        output: '[1,1,2,3]',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['union-find', 'matrix'],
    hints: [
      'Process land additions one by one; for each new cell, union it with existing land neighbours.',
      'Track the island count: start at 0, increment on each new land cell, decrement for each successful union with a different component.',
      'Use a visited set to avoid re-adding the same position.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Weighted Component Analyzer',
    prompt:
      'A social analyst studies a network where each edge has a weight indicating relationship strength. Using a weighted union-find, answer queries about the weight ratio between two nodes connected through the union-find structure. Given equations like a/b = 2.0, answer division queries.',
    constraints: '1 <= equations.length <= 20 | equations[i].length == 2 | 1 <= Ai.length, Bi.length <= 5 | values[i] > 0 | 1 <= queries.length <= 20',
    examples: [
      {
        input: 'equations=[["a","b"],["b","c"]], values=[2.0,3.0], queries=[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]',
        output: '[6.0,0.5,-1.0,1.0,-1.0]',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['union-find', 'graph', 'bfs', 'weighted'],
    hints: [
      'Model as a weighted graph: edge a → b with weight values[i].',
      'BFS or DFS from the source, multiplying edge weights along the path to the destination.',
      'For a union-find approach, store the ratio to the root at each node and propagate during path compression.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Minimum City Network',
    prompt:
      'A city planner must interconnect n cities using a minimum-cost spanning network. Some pairs of cities have already been connected at a known cost. Given the cost to connect any two cities (as a matrix), return the minimum cost to connect all n cities.',
    constraints: '1 <= n <= 1000 | costs[i][j] == costs[j][i] | costs[i][i] == 0 | 0 <= costs[i][j] <= 10^5',
    examples: [
      { input: 'costs = [[0,1,2,3],[1,0,1,1],[2,1,0,4],[3,1,4,0]]', output: '3' },
      { input: 'costs = [[0,1],[1,0]]', output: '1' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['union-find', 'graph', 'mst', 'kruskal'],
    hints: [
      'Extract all edges from the cost matrix and sort them by cost.',
      'Apply Kruskal\'s algorithm: union the cheapest edges that do not form a cycle.',
      'Stop when all n cities are in one component; the accumulated cost is the MST cost.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Debt Settlement Optimizer',
    prompt:
      'A financial mediator simplifies debts between n people by finding the minimum number of transactions to settle all balances. Given a list of transactions [from, to, amount], return the minimum number of transactions to settle all debts.',
    constraints: '0 <= transactions.length <= 8 | transactions[i].length == 3 | 0 <= fromi, toi < 12 | fromi != toi | 1 <= amounti <= 100',
    examples: [
      { input: 'transactions = [[0,1,10],[2,0,5]]', output: '2' },
      { input: 'transactions = [[0,1,10],[1,0,1],[1,2,5],[2,0,5]]', output: '1' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['union-find', 'backtracking', 'greedy'],
    hints: [
      'Compute the net balance for each person (total received minus total paid).',
      'People with net balance 0 are already settled — ignore them.',
      'Use backtracking to try settling debts between creditors and debtors, minimising the number of transactions.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Pair Distance Counter',
    prompt:
      'A graph analyst counts the number of pairs of nodes (i, j) where j is reachable from i AND the distance from i to j (in terms of edge count) is at most maxDist. Given n nodes, a list of edges, and maxDist, return the count of qualifying pairs.',
    constraints: '1 <= n <= 1000 | 0 <= edges.length <= 10^4 | maxDist >= 0 | edges[i] = [u, v] undirected',
    examples: [
      {
        input: 'n=3, edges=[[0,1],[1,2]], maxDist=1',
        output: '4',
        explanation: 'Pairs within distance 1: (0,1),(1,0),(1,2),(2,1).',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['union-find', 'bfs', 'graph'],
    hints: [
      'BFS from each node to compute distances to all reachable nodes.',
      'Count pairs where the distance is at most maxDist.',
      'A union-find can quickly check reachability, but full BFS is needed for distance constraints.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Offline LCA Solver',
    prompt:
      'A genealogy engine answers batch lowest-common-ancestor queries efficiently. Given a rooted binary tree and a list of node pairs, return the LCA for each pair using Tarjan\'s offline LCA algorithm (union-find based).',
    constraints: 'The number of nodes in the tree is in the range [2, 10^4] | 0 <= Node.val <= 10^4 | All Node.val are unique | 1 <= queries.length <= 10^4',
    examples: [
      {
        input: 'root = [3,5,1,6,2,0,8,null,null,7,4], queries = [[4,5],[3,8]]',
        output: '[5,3]',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['union-find', 'tree', 'dfs', 'offline'],
    hints: [
      'Tarjan\'s algorithm performs a DFS; after visiting all children of a node, union it with its parent and mark it as visited.',
      'When visiting a node u and a query partner v is already visited, the current root of v\'s component is the LCA.',
      'Pre-group queries by node to check both endpoints during a single DFS pass.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Spanning Forest Optimizer',
    prompt:
      'An infrastructure planner must build a minimum spanning forest that connects groups of cities in multiple provinces. Given n cities, required province assignments, and a cost matrix, return the minimum cost spanning forest satisfying the province constraints.',
    constraints: '1 <= n <= 1000 | 1 <= edges.length <= 10^5 | edges[i] = [u, v, w] | 1 <= w <= 10^5 | Connected components must be respected',
    examples: [
      {
        input: 'n=4, edges=[[0,1,1],[1,2,2],[2,3,3],[0,3,4]], requiredComponents=2',
        output: '3',
        explanation: 'Build two spanning trees with minimum total edge weight = 1 + 2 = 3.',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['union-find', 'graph', 'mst', 'greedy'],
    hints: [
      'Sort edges by weight and use Kruskal\'s; stop adding edges once you have n - requiredComponents edges in the spanning forest.',
      'Each time you skip unioning two nodes already in the same component, track redundant edges.',
      'The final forest will consist of exactly requiredComponents trees.',
    ],
  },
  {
    patternSlug: 'union-find',
    title: 'The Cluster Weight Classifier',
    prompt:
      'A physicist classifies particles into clusters using a weighted union-find. Each union operation carries a parity (same/different charge). Given n particles, a list of merge operations each tagged with same/different, and queries asking whether two particles have the same charge, answer each query or report a contradiction was detected.',
    constraints: '1 <= n <= 10^5 | 1 <= merge_ops.length <= 10^5 | 1 <= queries.length <= 10^5',
    examples: [
      {
        input: 'n=5, ops=[(1,2,"same"),(2,3,"diff"),(1,3,"diff")], queries=[(1,3),(2,3)]',
        output: '[false (contradiction),true]',
        explanation: 'The operation (1,3,"diff") contradicts (1,2,"same")+(2,3,"diff") which implies same.',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['union-find', 'weighted', 'parity'],
    hints: [
      'Use a weighted union-find where the weight encodes parity (0 = same as root, 1 = different from root).',
      'When unioning two nodes, compute the required root weight from the existing path weights and the edge parity.',
      'For queries, check if the XOR of the two nodes\' weights to their common root matches the expected relationship.',
    ],
  },
]
