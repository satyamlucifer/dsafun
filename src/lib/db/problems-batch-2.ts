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

export const PROBLEMS_BATCH_2: ProblemSeed[] = [
  // ─────────────────────────────────────────────
  // TWO-POINTERS — EASY (10)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'two-pointers',
    title: 'Inversion Protocol',
    prompt:
      'Agent, you have intercepted a character array that must be reversed in-place before transmission. No extra buffer is allowed — flip the array using only two pointers moving toward each other.',
    constraints: '1 <= s.length <= 10^5. Characters are printable ASCII.',
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['array', 'two-pointers', 'string'],
    hints: [
      'Which two indices should you touch first?',
      'After swapping the outermost characters, where do both pointers move?',
      'Keep swapping s[left] and s[right] while left < right — no extra space needed.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Purge Directive',
    prompt:
      'The database contains corrupted entries marked by a specific value. Your mission: remove all occurrences of that value in-place and return the count of clean entries remaining. The relative order of kept elements does not matter.',
    constraints: '0 <= nums.length <= 3*10^4. -100 <= nums[i] <= 100.',
    examples: [
      { input: 'nums = [3,2,2,3], val = 3', output: '2', explanation: 'nums becomes [2,2,_,_]' },
      { input: 'nums = [0,1,2,2,3,0,4,2], val = 2', output: '5', explanation: 'nums becomes [0,1,3,0,4,_,_,_]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['array', 'two-pointers'],
    hints: [
      'Can you keep a separate write pointer that only advances when a good element is found?',
      'The read pointer scans every element; the write pointer only moves forward when nums[read] != val.',
      'Assign nums[write] = nums[read] whenever they differ, then increment write.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Symmetry Audit',
    prompt:
      'Security protocol requires verifying that a sorted integer array reads the same forwards and backwards. Return true if it is a palindrome, false otherwise.',
    constraints: '1 <= nums.length <= 10^5. -10^9 <= nums[i] <= 10^9.',
    examples: [
      { input: 'nums = [1,2,3,2,1]', output: 'true' },
      { input: 'nums = [1,2,3,4,5]', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 6,
    tags: ['array', 'two-pointers'],
    hints: [
      'Compare the first and last elements — what should be true?',
      'Move both pointers inward after each successful comparison.',
      'If at any point nums[left] != nums[right] before they cross, return false.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Merge Rendezvous',
    prompt:
      'Two field agents carry sorted lists of coordinates. Merge both sorted arrays into a new sorted array. You may use O(m+n) extra space.',
    constraints: '0 <= m, n <= 10^4. -10^9 <= nums1[i], nums2[j] <= 10^9.',
    examples: [
      { input: 'nums1 = [1,3,5], nums2 = [2,4,6]', output: '[1,2,3,4,5,6]' },
      { input: 'nums1 = [1,2], nums2 = []', output: '[1,2]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['array', 'two-pointers', 'sorting'],
    hints: [
      'Use one pointer per array — which array supplies the next element?',
      'Pick the smaller of nums1[i] and nums2[j], then advance that pointer.',
      'After one array is exhausted, append the remainder of the other.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Target Sweep',
    prompt:
      'An unsorted array of integers arrives at headquarters. Sort it, then determine whether any two distinct elements sum to a given target. Return true or false.',
    constraints: '2 <= nums.length <= 10^4. -10^9 <= nums[i] <= 10^9. -2*10^9 <= target <= 2*10^9.',
    examples: [
      { input: 'nums = [4,1,5,3], target = 6', output: 'true', explanation: '1+5=6' },
      { input: 'nums = [1,2,3,9], target = 8', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['array', 'two-pointers', 'sorting'],
    hints: [
      'After sorting, what does a pair at indices i and j with i<j look like?',
      'If the current sum is too large, shrink it by moving the right pointer left.',
      'If the sum is too small, grow it by moving the left pointer right.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Covert Pair Census',
    prompt:
      'Given a sorted array, count the number of pairs (i, j) where i < j and nums[i] + nums[j] < target. Efficiency is critical — O(n) after sorting.',
    constraints: '2 <= nums.length <= 10^4. -10^4 <= nums[i] <= 10^4.',
    examples: [
      { input: 'nums = [1,2,3,4], target = 5', output: '3', explanation: '(1,2),(1,3),(2,2) — wait, pairs are (0,1),(0,2),(0,3) giving 3,4,5 — only 3 and 4 qualify' },
      { input: 'nums = [-2,0,1,3], target = 2', output: '3' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['array', 'two-pointers', 'counting'],
    hints: [
      'With the array sorted, fix the left pointer — how many valid right pointers exist?',
      'If nums[left]+nums[right] < target, every index between left+1 and right is also valid.',
      'Add (right - left) to the count and advance left when the pair is valid.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Duplicate Cap',
    prompt:
      'A sorted agent roster allows at most two appearances of any name. Remove excess duplicates in-place and return the new length.',
    constraints: '1 <= nums.length <= 3*10^4. -10^4 <= nums[i] <= 10^4. Array is sorted.',
    examples: [
      { input: 'nums = [1,1,1,2,2,3]', output: '5', explanation: '[1,1,2,2,3]' },
      { input: 'nums = [0,0,1,1,1,2,2,3,3,4]', output: '9' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['array', 'two-pointers'],
    hints: [
      'Keep a write pointer k; when is it safe to write nums[read] to nums[k]?',
      'It is safe when k < 2 or when nums[k-2] != nums[read].',
      'Increment both pointers after a valid write; only the read pointer advances otherwise.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Lifeboat Dispatch',
    prompt:
      'Agents need rescue and each lifeboat holds at most 2 people up to a weight limit. Given sorted weights, find the minimum number of boats needed.',
    constraints: '1 <= people.length <= 5*10^4. 1 <= people[i] <= limit <= 3*10^4.',
    examples: [
      { input: 'people = [1,2], limit = 3', output: '1' },
      { input: 'people = [3,2,2,1], limit = 3', output: '3' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['array', 'two-pointers', 'greedy'],
    hints: [
      'Sort the weights first — which pair should you try to fit together?',
      'Try pairing the heaviest person with the lightest; if they exceed the limit, the heavy person goes alone.',
      'Use left and right pointers converging inward; count one boat per iteration.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Binary Sort Sweep',
    prompt:
      'A reconnaissance array contains only 0s and 1s in arbitrary order. Sort it in-place in O(n) time using two pointers — 0s on the left, 1s on the right.',
    constraints: '1 <= nums.length <= 10^5. nums[i] is 0 or 1.',
    examples: [
      { input: 'nums = [1,0,1,0,0]', output: '[0,0,0,1,1]' },
      { input: 'nums = [0,1,0]', output: '[0,0,1]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['array', 'two-pointers', 'sorting'],
    hints: [
      'Place a left pointer at 0 and a right pointer at the last index.',
      'Whenever you see a 1 at left, swap it with what is at right and shrink right.',
      'Only advance left when nums[left] == 0.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Closest Rivals',
    prompt:
      'Two rival agents are identified by integers in a sorted array. Find the pair (one from each of two sorted halves, or any two elements) whose absolute difference is minimized and return that minimum difference.',
    constraints: '2 <= nums.length <= 10^5. -10^9 <= nums[i] <= 10^9. Array is sorted ascending.',
    examples: [
      { input: 'nums = [1,3,6,10,15], target = 11', output: '1', explanation: 'Pair (10,11) — closest to target using two pointers on sorted array variant: min |nums[i]-nums[j]| for i != j.' },
      { input: 'nums = [1,2,3,4], target = 0', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['array', 'two-pointers', 'sorting'],
    hints: [
      'In a sorted array, the closest pair of values will be adjacent — but can two pointers still help?',
      'Try comparing nums[left] and nums[right]; if their sum exceeds target*2, move right left.',
      'Track the minimum absolute difference across all valid pointer positions.',
    ],
  },

  // ─────────────────────────────────────────────
  // TWO-POINTERS — MEDIUM (12)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'two-pointers',
    title: 'Quad Intercept',
    prompt:
      'Intelligence reports four operatives whose combined identification numbers equal zero. Return all unique quadruplets from the array that sum to the given target.',
    constraints: '1 <= nums.length <= 200. -10^9 <= nums[i] <= 10^9.',
    examples: [
      { input: 'nums = [1,0,-1,0,-2,2], target = 0', output: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]' },
      { input: 'nums = [2,2,2,2,2], target = 8', output: '[[2,2,2,2]]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['array', 'two-pointers', 'sorting'],
    hints: [
      'Sort first, then fix two outer indices — does this reduce the problem to Two Sum II?',
      'For each fixed pair (i, j), use left and right pointers on the remaining subarray.',
      'Skip duplicates at every level to avoid returning the same quadruplet twice.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Triage Protocol',
    prompt:
      'A field medic array holds 0 (uninjured), 1 (moderate), and 2 (critical). Sort in-place so all 0s come first, then 1s, then 2s — the Dutch national flag algorithm.',
    constraints: '1 <= nums.length <= 300. nums[i] is 0, 1, or 2.',
    examples: [
      { input: 'nums = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' },
      { input: 'nums = [2,0,1]', output: '[0,1,2]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['array', 'two-pointers', 'sorting'],
    hints: [
      'Maintain three pointers: low, mid, and high — what invariant does each uphold?',
      'nums[0..low-1] = 0, nums[low..mid-1] = 1, nums[high+1..n-1] = 2.',
      'Swap based on nums[mid]: 0 → swap with low; 2 → swap with high; 1 → only advance mid.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Polarity Rearrangement',
    prompt:
      'An encrypted signal array has equal numbers of positives and negatives. Rearrange so positives and negatives alternate, starting with a positive, preserving relative order within each sign.',
    constraints: '2 <= nums.length <= 2*10^5. nums.length is even. Exactly half are positive.',
    examples: [
      { input: 'nums = [3,1,-2,-5,2,-4]', output: '[3,-2,1,-5,2,-4]' },
      { input: 'nums = [-1,1]', output: '[1,-1]' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['array', 'two-pointers'],
    hints: [
      'What if you built the answer array by interleaving separately collected positives and negatives?',
      'Separate into two lists maintaining order, then interleave them.',
      'Place positives at even indices 0,2,4,... and negatives at odd indices 1,3,5,...',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Alternating Frequency',
    prompt:
      'Given a binary string, find the minimum number of character replacements so that no two adjacent characters are equal (alternating). Return the minimum of trying "010101..." vs "101010..." patterns.',
    constraints: '1 <= s.length <= 10^5. s[i] is 0 or 1.',
    examples: [
      { input: 's = "0100"', output: '1' },
      { input: 's = "10"', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['string', 'two-pointers', 'greedy'],
    hints: [
      'Compare the string character by character against both alternating patterns simultaneously.',
      'Count mismatches for pattern starting with 0 — the other count is n minus that.',
      'Return the minimum of the two mismatch counts.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Ridge Detector',
    prompt:
      'A topographic scan is stored as an array. Find the length of the longest "mountain" subarray — a contiguous subarray that strictly increases then strictly decreases with at least one peak.',
    constraints: '1 <= arr.length <= 10^4. 0 <= arr[i] <= 10^4.',
    examples: [
      { input: 'arr = [2,1,4,7,3,2,5]', output: '5', explanation: 'Mountain is [1,4,7,3,2]' },
      { input: 'arr = [2,2,2]', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['array', 'two-pointers'],
    hints: [
      'First find every peak index (arr[i-1] < arr[i] > arr[i+1]).',
      'From each peak, expand left while ascending and right while descending.',
      'Track the maximum total length across all peaks.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Delete Simulation',
    prompt:
      'Two agents type strings on terminals that support a backspace character (#). Simulate the final typed string for each and return whether they are equal.',
    constraints: '1 <= s.length, t.length <= 200. s and t contain lowercase letters and #.',
    examples: [
      { input: 's = "ab#c", t = "ad#c"', output: 'true', explanation: 'Both become "ac"' },
      { input: 's = "a#c", t = "b"', output: 'false' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['string', 'two-pointers', 'stack'],
    hints: [
      'Can you compare from the end of both strings without building new strings?',
      'Use a right-to-left pointer per string; count pending backspaces as you go.',
      'Skip characters that are being deleted; compare actual characters when found.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Null Force Triplet',
    prompt:
      'Three rogue signals whose sum is exactly zero must be neutralized. Return all unique triplets from the array that sum to zero.',
    constraints: '3 <= nums.length <= 3000. -10^5 <= nums[i] <= 10^5.',
    examples: [
      { input: 'nums = [-4,-1,-1,0,1,2]', output: '[[-1,-1,2],[-1,0,1]]' },
      { input: 'nums = [0,1,1]', output: '[]' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['array', 'two-pointers', 'sorting'],
    hints: [
      'Sort first — then for each element, what two-sum problem remains?',
      'Fix nums[i] and use left/right pointers starting at i+1 and n-1.',
      'Skip duplicate values of i, left, and right to avoid repeating triplets.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Domino Wave',
    prompt:
      'A row of dominoes is represented as "L", "R", or ".". Simulate the forces so that every free domino falls in the direction of the nearest push. Return the final state.',
    constraints: '1 <= dominoes.length <= 10^5. dominoes[i] is L, R, or .',
    examples: [
      { input: 'dominoes = "RR.L"', output: '"RR.L"' },
      { input: 'dominoes = ".L.R...LR..L.."', output: '"LL.RR.LLRRLL.."' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['string', 'two-pointers', 'simulation'],
    hints: [
      'Process each gap between two forces — what determines the outcome?',
      'Use two pointers or a force-propagation array to track left and right push strengths.',
      'When forces meet at a gap, the gap stays as dots; one-sided forces convert all dots.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Pivot Partition',
    prompt:
      'Rearrange an array around a pivot value so all elements less than pivot appear before those equal to pivot, which appear before elements greater than pivot. Return the rearranged array.',
    constraints: '1 <= nums.length <= 10^5. 0 <= nums[i] <= 10^9. pivot is guaranteed to exist.',
    examples: [
      { input: 'nums = [9,12,5,10,14,3,10], pivot = 10', output: '[9,5,3,10,10,12,14]' },
      { input: 'nums = [-3,4,3,2], pivot = 2', output: '[-3,2,4,3]', explanation: 'One valid answer' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['array', 'two-pointers'],
    hints: [
      'Collect elements into three buckets: less, equal, greater.',
      'Concatenate less + equal + greater for the result.',
      'You can also do this in-place with three pointers similar to Dutch national flag.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Pair Efficiency',
    prompt:
      'You must pair all elements of an even-length sorted array. Minimize the sum of the maximum of each pair. Return that minimum sum.',
    constraints: '2 <= nums.length <= 10^5. nums.length is even. 0 <= nums[i] <= 10^9.',
    examples: [
      { input: 'nums = [1,4,3,2]', output: '4', explanation: 'Sort to [1,2,3,4]; pairs (1,2) and (3,4); max sum = 2+4=6... optimal is (1,4),(2,3) giving 4+3=7. Actually pair (1,2),(3,4)=2+4=6 but (1,3),(2,4)=3+4=7. Best: adjacent pairs after sort.' },
      { input: 'nums = [1,2,3,4]', output: '6' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['array', 'two-pointers', 'greedy'],
    hints: [
      'After sorting, which pairing strategy minimizes the sum of maximums?',
      'Pairing adjacent elements after sorting minimizes the sum — can you prove it?',
      'Iterate through sorted pairs (nums[0],nums[1]), (nums[2],nums[3]) summing the second element of each.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Triple Count Operative',
    prompt:
      'Count the number of "good triplets" (i, j, k) where i < j < k and |nums[i]-nums[j]| <= a, |nums[j]-nums[k]| <= b, and |nums[i]-nums[k]| <= c.',
    constraints: '3 <= arr.length <= 100. 0 <= arr[i] <= 1000. 0 <= a,b,c <= 1000.',
    examples: [
      { input: 'arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3', output: '4' },
      { input: 'arr = [1,1,2,2,3], a = 0, b = 0, c = 1', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['array', 'two-pointers', 'brute-force'],
    hints: [
      'Given the small constraints, can a triple nested loop work?',
      'For each j, iterate i < j and k > j checking all three conditions.',
      'O(n^3) is acceptable here — optimize with early breaks on first condition.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Version Comparison',
    prompt:
      'Two firmware version strings are encoded as dot-separated integers. Compare them: return -1, 0, or 1 if version1 is less than, equal to, or greater than version2.',
    constraints: '1 <= version.length <= 500. Versions only contain digits and dots.',
    examples: [
      { input: 'version1 = "1.01", version2 = "1.001"', output: '0' },
      { input: 'version1 = "1.0.1", version2 = "1"', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['string', 'two-pointers'],
    hints: [
      'Split both strings on "." and compare segments numerically.',
      'Pad the shorter version with zeros if one runs out of segments first.',
      'The first differing numeric segment determines the result.',
    ],
  },

  // ─────────────────────────────────────────────
  // TWO-POINTERS — HARD (8)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'two-pointers',
    title: 'Disorder Locator',
    prompt:
      'A supposedly sorted array has been corrupted in one contiguous region. Find the shortest subarray that, if sorted, makes the whole array sorted. Return its length.',
    constraints: '1 <= nums.length <= 10^4. -10^9 <= nums[i] <= 10^9.',
    examples: [
      { input: 'nums = [2,6,4,8,10,9,15]', output: '5', explanation: 'Sort [6,4,8,10,9] to fix the array' },
      { input: 'nums = [1,2,3,4]', output: '0' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['array', 'two-pointers', 'sorting'],
    hints: [
      'Find the leftmost and rightmost positions where the array violates sorted order.',
      'Expand those boundaries: the subarray must include any element out of the min/max range of the middle.',
      'The left boundary shrinks leftward while any element to its left exceeds the minimum of the subarray.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Storm Drain',
    prompt:
      'A topographic elevation map is stored as an array. Compute the total units of water trapped after rainfall using the two-pointer approach in O(n) time and O(1) space.',
    constraints: '1 <= height.length <= 2*10^4. 0 <= height[i] <= 10^5.',
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['array', 'two-pointers', 'dynamic-programming'],
    hints: [
      'Water at position i depends on min(maxLeft, maxRight) — how do you find both without extra arrays?',
      'Use two pointers; always process the side with the smaller current max.',
      'If height[left] < height[right], the water at left is determined by maxLeft; add max(0, maxLeft - height[left]).',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Sub-K Triad',
    prompt:
      'Count the number of triplets (i, j, k) where i < j < k and nums[i] * nums[j] * nums[k] < K. Array contains positive integers.',
    constraints: '3 <= nums.length <= 10^3. 0 <= nums[i] <= 10^3. 0 <= k <= 10^9.',
    examples: [
      { input: 'nums = [1,2,3,4], k = 8', output: '4' },
      { input: 'nums = [1,1,1], k = 5', output: '1' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['array', 'two-pointers', 'sorting'],
    hints: [
      'Sort the array — then fix one element and apply a two-pointer on the rest.',
      'For fixed nums[k] (the largest), find pairs in nums[0..k-1] whose product * nums[k] < K.',
      'If nums[left]*nums[right]*nums[k] < K, all indices between left and right-1 also work — add (right - left) to count.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Palindrome Fleet',
    prompt:
      'Given an array, find the minimum number of swaps of adjacent elements needed to make the array a palindrome. If impossible, return -1.',
    constraints: '1 <= nums.length <= 10^3. 1 <= nums[i] <= 10^9.',
    examples: [
      { input: 'nums = [1,4,1,2,1,3,1]', output: '2' },
      { input: 'nums = [1,1,2,3]', output: '-1' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['array', 'two-pointers', 'greedy'],
    hints: [
      'First check if a palindrome is even possible — what condition on element frequencies is required?',
      'Use two pointers from both ends; for each left pointer, find its match from the right and count swaps.',
      'If an odd-frequency element exists, it goes in the center; account for it during the sweep.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Equalization Strike',
    prompt:
      'Given an array, find the minimum number of operations (increment or decrement any element by 1) to make all elements equal. Return that minimum total cost.',
    constraints: '1 <= nums.length <= 10^5. -10^9 <= nums[i] <= 10^9.',
    examples: [
      { input: 'nums = [1,10,2,9]', output: '16', explanation: 'All to 5 or 6 costs 16' },
      { input: 'nums = [1,2,3]', output: '2' },
    ],
    difficulty: 'hard',
    estMin: 28,
    tags: ['array', 'two-pointers', 'math', 'sorting'],
    hints: [
      'The optimal target value is the median — why does the median minimize total absolute deviation?',
      'Sort the array; the median is the middle element.',
      'Sum of |nums[i] - median| gives the answer — this can be computed with two pointers on sorted data.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Phantom Interval',
    prompt:
      'Given a list of intervals sorted by start time, insert a new interval and merge all overlapping intervals. Return the resulting list.',
    constraints: '0 <= intervals.length <= 10^4. intervals[i].length == 2. newInterval.length == 2.',
    examples: [
      { input: 'intervals = [[1,3],[6,9]], newInterval = [2,5]', output: '[[1,5],[6,9]]' },
      { input: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]', output: '[[1,2],[3,10],[12,16]]' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['array', 'two-pointers', 'intervals'],
    hints: [
      'Collect all intervals that end before the new one starts, then all that overlap, then the rest.',
      'An overlap occurs when interval[0] <= newEnd and interval[1] >= newStart.',
      'Merge overlapping intervals by taking min(start) and max(end).',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Anagram Gap',
    prompt:
      'Two strings s and t have the same characters but possibly different arrangements. Find the minimum window in s that contains all characters of t (this is a two-pointer hard variant focused on forming an anagram of t as a substring of s).',
    constraints: '1 <= s.length <= 10^5. 1 <= t.length <= s.length.',
    examples: [
      { input: 's = "cbaebabacd", t = "abc"', output: '"abc"', explanation: 'Starting at index 0' },
      { input: 's = "abab", t = "ab"', output: '"ab"' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['string', 'two-pointers', 'hash-map'],
    hints: [
      'Use a frequency map for t; as you expand the right pointer, decrement counts.',
      'Track how many characters are currently satisfied (count == needed frequency).',
      'Shrink from left when all characters are satisfied; record the minimum window.',
    ],
  },
  {
    patternSlug: 'two-pointers',
    title: 'Interval Liquidation',
    prompt:
      'Given a list of intervals, find the minimum number of intervals to remove so that the remaining intervals do not overlap.',
    constraints: '1 <= intervals.length <= 10^5. intervals[i].length == 2. -5*10^4 <= starti < endi <= 5*10^4.',
    examples: [
      { input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]', output: '1', explanation: 'Remove [1,3]' },
      { input: 'intervals = [[1,2],[1,2],[1,2]]', output: '2' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['array', 'two-pointers', 'greedy', 'intervals'],
    hints: [
      'Sort by end time — which greedy choice keeps the most intervals?',
      'Always keep the interval with the earliest end time that does not overlap the previous kept interval.',
      'Count removals as (total intervals) minus (count of non-overlapping intervals kept).',
    ],
  },

  // ─────────────────────────────────────────────
  // SLIDING-WINDOW — EASY (10)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'sliding-window',
    title: 'Peak Signal K',
    prompt:
      'Intercept the maximum sum among all contiguous subarrays of exactly size K in a stream of sensor readings.',
    constraints: '1 <= k <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.',
    examples: [
      { input: 'nums = [2,1,5,1,3,2], k = 3', output: '9', explanation: 'Subarray [5,1,3]' },
      { input: 'nums = [2,3,4,1,5], k = 2', output: '7' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['array', 'sliding-window'],
    hints: [
      'Compute the sum of the first k elements as the initial window.',
      'Slide by adding nums[i] and removing nums[i-k] each step.',
      'Track the running maximum across all window positions.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Rolling Average',
    prompt:
      'Compute the average of every contiguous subarray of size K in the sensor feed and return all K averages as a floating-point array.',
    constraints: '1 <= k <= nums.length <= 10^5. 0 <= nums[i] <= 10^4.',
    examples: [
      { input: 'nums = [1,12,-5,-6,50,3], k = 4', output: '[0.5,12.75,12.25]' },
      { input: 'nums = [5,5,5,5], k = 2', output: '[5.0,5.0,5.0]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['array', 'sliding-window', 'math'],
    hints: [
      'Maintain a running window sum to avoid recomputing sums from scratch.',
      'Divide the current window sum by k at each position to get the average.',
      'Add the new element and subtract the outgoing element as the window slides.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Distinct Roster',
    prompt:
      'For each window of size K sliding across an array of agent IDs, report the count of distinct IDs in that window.',
    constraints: '1 <= k <= nums.length <= 10^5. 1 <= nums[i] <= 10^5.',
    examples: [
      { input: 'nums = [1,2,1,3,4,2,3], k = 4', output: '[3,4,4,3]' },
      { input: 'nums = [1,1,1,1], k = 2', output: '[1,1,1]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['array', 'sliding-window', 'hash-map'],
    hints: [
      'Use a frequency map to track elements in the current window.',
      'When an element leaves the window, decrement its count; remove it from the map if count hits zero.',
      'The map size at each step equals the number of distinct elements.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Dark Spot Detector',
    prompt:
      'Given an array, find the first negative number in each window of size K. If no negative exists, output 0 for that window.',
    constraints: '1 <= k <= nums.length <= 10^5. -10^5 <= nums[i] <= 10^5.',
    examples: [
      { input: 'nums = [12,-1,-7,8,-15,30,16,28], k = 3', output: '[-1,-1,-7,-15,-15,0]' },
      { input: 'nums = [1,2,3,4], k = 2', output: '[0,0,0]' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['array', 'sliding-window', 'deque'],
    hints: [
      'A deque storing indices of negative numbers can efficiently answer queries.',
      'Remove indices from the front when they fall outside the current window.',
      'The front of the deque is the first negative in the window; output 0 if the deque is empty.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Window Apex',
    prompt:
      'Return the maximum element in each window of size K as the window slides across the array from left to right.',
    constraints: '1 <= k <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.',
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]' },
      { input: 'nums = [1], k = 1', output: '[1]' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['array', 'sliding-window', 'deque'],
    hints: [
      'A brute-force O(nk) approach works for easy, but can you hint at the deque approach?',
      'Maintain a deque of indices in decreasing order of their values.',
      'The front of the deque always holds the index of the maximum element in the current window.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Signal Permutation',
    prompt:
      'Determine if any permutation of string t appears as a contiguous substring of string s. Return true or false.',
    constraints: '1 <= s.length, t.length <= 10^4. s and t consist of lowercase English letters.',
    examples: [
      { input: 's = "eidbaooo", t = "ab"', output: 'true', explanation: 'Substring "ba" is a permutation of "ab"' },
      { input: 's = "eidboaoo", t = "ab"', output: 'false' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['string', 'sliding-window', 'hash-map'],
    hints: [
      'A window of exactly len(t) characters is a permutation of t if and only if their frequency maps match.',
      'Slide a fixed window of size len(t) across s, updating the frequency map incrementally.',
      'Use a "matches" counter tracking how many character counts are currently equal.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Budget Monitor',
    prompt:
      'Find the longest contiguous subarray whose sum does not exceed a given budget limit. Return its length.',
    constraints: '1 <= nums.length <= 10^5. 1 <= nums[i] <= 10^4. 1 <= limit <= 10^8.',
    examples: [
      { input: 'nums = [1,2,3,4,5], limit = 9', output: '3', explanation: '[2,3,4] or [1,2,3]' },
      { input: 'nums = [1,1,1,1,1], limit = 3', output: '3' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['array', 'sliding-window'],
    hints: [
      'Use two pointers to maintain a variable-size window.',
      'Expand the right pointer; when the sum exceeds limit, shrink from the left.',
      'Track the maximum window length after each valid expansion.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Vowel Scanner',
    prompt:
      'Count the total number of vowels in every substring of exactly length K and return the array of vowel counts per window.',
    constraints: '1 <= k <= s.length <= 10^5. s consists of lowercase English letters.',
    examples: [
      { input: 's = "abciiidef", k = 3', output: '[1,1,2,3,2,1]', explanation: 'Vowels in each window of size 3' },
      { input: 's = "aeiou", k = 2', output: '[2,2,2,2]' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['string', 'sliding-window'],
    hints: [
      'Initialize a count for the first window of size k.',
      'For each subsequent window, add 1 if the new character is a vowel and subtract 1 if the outgoing one is.',
      'A character is a vowel if it is in the set {a,e,i,o,u}.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Diet Score',
    prompt:
      'An athlete tracks daily calorie intake. For each window of K days, classify the period as "gain" (+1) if total > upper, "lose" (-1) if total < lower, or "maintain" (0) otherwise. Return the sum of all classifications.',
    constraints: '1 <= k <= calories.length <= 10^5. 0 <= calories[i] <= 10^5. 0 <= lower <= upper.',
    examples: [
      { input: 'calories = [1,2,3,4,5], k = 1, lower = 3, upper = 3', output: '0' },
      { input: 'calories = [3,2], k = 2, lower = 0, upper = 1', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['array', 'sliding-window'],
    hints: [
      'Maintain the window sum using add/remove as the window slides.',
      'Compare the window sum against lower and upper to determine the classification.',
      'Accumulate the score across all windows.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Threshold Scout',
    prompt:
      'Count the number of subarrays of size K whose average is greater than or equal to a threshold value.',
    constraints: '1 <= k <= arr.length <= 10^5. 0 <= arr[i] <= 10^4. 0 <= threshold <= 10^4.',
    examples: [
      { input: 'arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4', output: '3' },
      { input: 'arr = [1,1,1,1,1], k = 1, threshold = 0', output: '5' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['array', 'sliding-window'],
    hints: [
      'Instead of comparing average >= threshold, compare sum >= threshold * k to avoid division.',
      'Slide a fixed window of size k, maintaining the running sum.',
      'Increment a counter each time the window sum meets the requirement.',
    ],
  },

  // ─────────────────────────────────────────────
  // SLIDING-WINDOW — MEDIUM (12)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'sliding-window',
    title: 'Frequency Override',
    prompt:
      'Given a string and integer k, find the length of the longest substring you can build by replacing at most k characters so all characters in the window are the same.',
    constraints: '0 <= k <= s.length <= 10^5. s consists of uppercase English letters.',
    examples: [
      { input: 's = "AABABBA", k = 1', output: '4' },
      { input: 's = "ABAB", k = 2', output: '4' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['string', 'sliding-window', 'hash-map'],
    hints: [
      'The window is valid if (windowSize - maxFrequency) <= k.',
      'Track the frequency of the most common character inside the window.',
      'Only shrink the window when the condition is violated; maximize the window length.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Odd Signal Count',
    prompt:
      'Count the number of "nice" subarrays containing exactly k odd numbers.',
    constraints: '1 <= nums.length <= 50000. 1 <= k <= nums.length. 0 <= nums[i] <= 10^5.',
    examples: [
      { input: 'nums = [1,1,2,1,1], k = 3', output: '2' },
      { input: 'nums = [2,4,6], k = 1', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['array', 'sliding-window', 'prefix-sum'],
    hints: [
      'Count subarrays with exactly k odds = (at most k odds) - (at most k-1 odds).',
      'Write a helper that counts subarrays with at most k odd numbers using a sliding window.',
      'Expand right; when odd count exceeds k, shrink left until valid again.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Card Collector',
    prompt:
      'Cards are arranged in a row; you can take the first k or last k cards. Maximize the total score by choosing exactly k cards overall.',
    constraints: '1 <= cardPoints.length <= 10^5. 1 <= k <= cardPoints.length. 1 <= cardPoints[i] <= 10^4.',
    examples: [
      { input: 'cardPoints = [1,2,3,4,5,6,1], k = 3', output: '12' },
      { input: 'cardPoints = [2,2,2], k = 2', output: '4' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['array', 'sliding-window'],
    hints: [
      'Instead of choosing k cards from the ends, think about minimizing the subarray of size (n-k) in the middle.',
      'Total score = totalSum - minimum window sum of size (n-k).',
      'Slide a fixed window of size (n-k) across the array to find the minimum sum.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Relay Burst',
    prompt:
      'Find the length of the shortest contiguous subarray whose sum is at least a given target. Return 0 if none exists.',
    constraints: '1 <= target <= 10^9. 1 <= nums.length <= 2*10^5. 1 <= nums[i] <= 10^5.',
    examples: [
      { input: 'nums = [2,3,1,2,4,3], target = 7', output: '2', explanation: 'Subarray [4,3]' },
      { input: 'nums = [1,4,4], target = 4', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['array', 'sliding-window'],
    hints: [
      'Because all elements are positive, a two-pointer sliding window works.',
      'Expand the right pointer; when sum >= target, record the window length then shrink from left.',
      'Continue until right reaches the end; track the minimum valid length.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Frequency Amplifier',
    prompt:
      'Find the length of the longest subarray you can make so that all elements are the same, after performing at most k increments or decrements to elements, where each operation changes any element by 1.',
    constraints: '1 <= nums.length <= 10^5. 1 <= nums[i] <= 10^5. 0 <= k <= 10^9.',
    examples: [
      { input: 'nums = [1,2,4], k = 5', output: '3' },
      { input: 'nums = [1,4,8,13], k = 5', output: '2' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['array', 'sliding-window', 'sorting'],
    hints: [
      'Sort the array — then a contiguous subarray has the minimum cost to unify at the maximum value.',
      'For a window [l..r] sorted, cost = nums[r] * (r-l+1) - sum(nums[l..r]).',
      'Expand right; when cost exceeds k, shrink left until valid.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Outage Window',
    prompt:
      'Given a binary array, find the length of the longest subarray containing only 1s after deleting exactly one element.',
    constraints: '1 <= nums.length <= 10^5. nums[i] is 0 or 1.',
    examples: [
      { input: 'nums = [1,1,0,1]', output: '3' },
      { input: 'nums = [0,1,1,1,0,1,1,0,1]', output: '5' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['array', 'sliding-window'],
    hints: [
      'Deleting one element means allowing at most one zero in the window.',
      'Use a sliding window that keeps at most one zero; track the maximum (windowSize - 1).',
      'Shrink from left when zero count exceeds one.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Unique Harvest',
    prompt:
      'Find the maximum sum of any subarray with all unique elements.',
    constraints: '1 <= nums.length <= 10^5. 1 <= nums[i] <= 10^4.',
    examples: [
      { input: 'nums = [4,2,4,5,6]', output: '17', explanation: 'Subarray [2,4,5,6]' },
      { input: 'nums = [5,2,1,2,5,2,1,2,5]', output: '8' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['array', 'sliding-window', 'hash-set'],
    hints: [
      'Use a set to track elements in the current window and a running sum.',
      'When a duplicate is encountered, shrink from the left until the duplicate is removed.',
      'Track the maximum sum across all valid windows.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Bounded Transmission',
    prompt:
      'Count the number of contiguous subarrays where the maximum element is between L and R (inclusive).',
    constraints: '1 <= nums.length <= 10^5. 0 <= nums[i] <= 10^9. 0 <= L <= R <= 10^9.',
    examples: [
      { input: 'nums = [2,1,4,3], L = 2, R = 3', output: '3' },
      { input: 'nums = [2,9,2,5,6], L = 2, R = 8', output: '7' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['array', 'sliding-window'],
    hints: [
      'Count subarrays with max <= R and subtract subarrays with max <= L-1.',
      'Write a helper that counts subarrays with max <= bound.',
      'Use a sliding window that resets whenever an element exceeds the bound.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Mood Recovery',
    prompt:
      'A shopkeeper is grumpy on some minutes (grumpy[i]=1). Customers satisfied when not grumpy are already happy. Using a continuous window of X minutes to suppress grumpiness, maximize total satisfied customers.',
    constraints: '1 <= customers.length <= 2*10^4. grumpy.length == customers.length. 1 <= X <= customers.length.',
    examples: [
      { input: 'customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3', output: '16' },
      { input: 'customers = [1], grumpy = [0], X = 1', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['array', 'sliding-window'],
    hints: [
      'Start with baseline: sum of customers[i] where grumpy[i]==0.',
      'Find the window of size X that maximizes the extra recovered customers (grumpy[i]==1 inside window).',
      'Slide the window and track maximum extra satisfaction, then add to baseline.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Trio Coverage',
    prompt:
      'Find the minimum length subarray containing at least one copy each of characters "a", "b", and "c". Return -1 if impossible.',
    constraints: '3 <= s.length <= 5*10^4. s consists only of letters a, b, and c.',
    examples: [
      { input: 's = "abcabc"', output: '3' },
      { input: 's = "aaacb"', output: '3' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['string', 'sliding-window'],
    hints: [
      'Use a sliding window; expand right until all three characters are present.',
      'Once all three are present, try to shrink from the left to minimize length.',
      'A window is valid once counts of a, b, and c are all >= 1.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Sub-K Product',
    prompt:
      'Count the number of contiguous subarrays whose product of all elements is strictly less than K.',
    constraints: '1 <= nums.length <= 3*10^4. 1 <= nums[i] <= 1000. 0 <= k <= 10^6.',
    examples: [
      { input: 'nums = [10,5,2,6], k = 100', output: '8' },
      { input: 'nums = [1,2,3], k = 0', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['array', 'sliding-window'],
    hints: [
      'Use two pointers; maintain the product of elements in the current window.',
      'Expand right; when product >= k, shrink from left dividing out elements.',
      'For each right pointer position, the number of valid subarrays ending at right is (right - left + 1).',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Longest Uniform Stretch',
    prompt:
      'Find the length of the longest subarray that contains only 1s. You are allowed to flip at most k zeros to ones.',
    constraints: '1 <= nums.length <= 10^5. nums[i] is 0 or 1. 0 <= k <= nums.length.',
    examples: [
      { input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2', output: '6' },
      { input: 'nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0], k = 3', output: '10' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['array', 'sliding-window'],
    hints: [
      'Count zeros in the current window — the window is valid while zeros <= k.',
      'Expand right; when zeros exceed k, shrink from left until zeros <= k.',
      'Track maximum window size across all valid positions.',
    ],
  },

  // ─────────────────────────────────────────────
  // SLIDING-WINDOW — HARD (8)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'sliding-window',
    title: 'Ghost Subsequence',
    prompt:
      'Find the minimum window in string S such that every character of string T appears in order as a subsequence. Return the empty string if impossible.',
    constraints: '1 <= S.length <= 2*10^4. 1 <= T.length <= 100.',
    examples: [
      { input: 'S = "abcdebdde", T = "bde"', output: '"bcde"', explanation: 'Minimum window containing b,d,e as subsequence' },
      { input: 'S = "jmeqksopnyx", T = "sqyx"', output: '"sopnyx"' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['string', 'sliding-window', 'two-pointers'],
    hints: [
      'Use a right pointer to find a window ending at right that contains T as a subsequence.',
      'Once found, use a left pointer to find the smallest valid window starting point.',
      'Advance left matching T backwards from the end to tighten the window.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Median Relay',
    prompt:
      'Compute the median of each window of size K as it slides across the array. Return all medians as a floating-point array.',
    constraints: '1 <= k <= nums.length <= 10^5. -2^31 <= nums[i] <= 2^31 - 1.',
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[1.0,-1.0,-1.0,3.0,5.0,6.0]' },
      { input: 'nums = [1,2,3,4,2,3,1,4,2], k = 3', output: '[2.0,3.0,3.0,3.0,2.0,3.0,2.0]' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['array', 'sliding-window', 'heap', 'sorting'],
    hints: [
      'Maintain two heaps: a max-heap for the lower half and a min-heap for the upper half.',
      'Keep them balanced so the median can be read from the tops.',
      'When the outgoing element leaves the window, lazily remove it and rebalance.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Character Wealth',
    prompt:
      'Count the total number of distinct characters across all substrings of string s.',
    constraints: '1 <= s.length <= 10^5. s consists of lowercase English letters.',
    examples: [
      { input: 's = "abc"', output: '10', explanation: 'a,b,c,ab,bc,abc,a,b,c plus individual counts' },
      { input: 's = "aa"', output: '3', explanation: '"a","a","aa" — 1+1+1=3 distinct chars summed' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['string', 'sliding-window', 'math'],
    hints: [
      'For each character c, count the number of substrings containing at least one c.',
      'For a given character c, let last[c] be the last index where c appeared.',
      'Each new occurrence of c at index i contributes (i - last[c]) new substrings.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Concat Infiltration',
    prompt:
      'Given a string s and a list of words (all same length), find all starting indices of substrings in s that are a concatenation of all words in any order.',
    constraints: '1 <= s.length <= 10^4. 1 <= words.length <= 5000. 1 <= words[i].length <= 30.',
    examples: [
      { input: 's = "barfoothefoobarman", words = ["foo","bar"]', output: '[0,9]' },
      { input: 's = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]', output: '[]' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['string', 'sliding-window', 'hash-map'],
    hints: [
      'The total window size is wordLen * numWords; slide the window by one word at a time.',
      'For each offset in [0, wordLen), slide a window checking word counts.',
      'Use a frequency map of required words; decrement as you consume words; reset when an unknown word appears.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Compression Envelope',
    prompt:
      'Find the minimum window substring of s that contains all characters of t (including duplicates). Return an empty string if no such window exists.',
    constraints: '1 <= s.length, t.length <= 10^5. s and t consist of uppercase and lowercase English letters.',
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
      { input: 's = "a", t = "aa"', output: '""' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['string', 'sliding-window', 'hash-map'],
    hints: [
      'Use two frequency maps: one for t, one for the current window.',
      'Track "formed" as the count of characters in the window meeting their required frequency.',
      'When all characters are formed, contract from the left to minimize the window.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Apex Deque',
    prompt:
      'Return the maximum value in each sliding window of size k. Solve it in O(n) time using a monotonic deque.',
    constraints: '1 <= k <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.',
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]' },
      { input: 'nums = [9,11], k = 2', output: '[11]' },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['array', 'sliding-window', 'deque', 'monotonic'],
    hints: [
      'A deque stores indices in decreasing order of their values.',
      'Before adding a new element, pop from the back while the back element is smaller — it can never be a max.',
      'Pop from the front when the front index is outside the current window; the front is always the max.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Frequency Crackdown',
    prompt:
      'Find the length of the longest substring in which no character appears more than once per segment — specifically, the longest substring where every character appears at least k times.',
    constraints: '1 <= s.length <= 10^4. 1 <= k <= 10^5. s consists of lowercase English letters.',
    examples: [
      { input: 's = "aaabb", k = 3', output: '3', explanation: '"aaa"' },
      { input: 's = "ababbc", k = 2', output: '5', explanation: '"ababb"' },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['string', 'sliding-window', 'divide-and-conquer', 'recursion'],
    hints: [
      'Characters with count < k can never be part of a valid substring — they act as dividers.',
      'Split the string on any character whose total frequency is < k.',
      'Recursively solve each segment and take the maximum result.',
    ],
  },
  {
    patternSlug: 'sliding-window',
    title: 'Reverse Recon',
    prompt:
      'Given a string, find the number of substrings where the difference between the count of the most frequent and least frequent character is exactly 1. Return the count mod 10^9+7.',
    constraints: '1 <= s.length <= 1000. s consists of lowercase English letters.',
    examples: [
      { input: 's = "aab"', output: '3', explanation: '"a","a","b" have diff 0; "aa" has diff 0; "ab","ab" have diff 1; count all valid' },
      { input: 's = "abc"', output: '6' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['string', 'sliding-window', 'hash-map', 'counting'],
    hints: [
      'For each pair (i, j), compute max_freq - min_freq within s[i..j].',
      'Brute force all O(n^2) substrings; check the condition using a frequency map.',
      'With n<=1000, O(n^2) is acceptable — update the freq map incrementally for each fixed left boundary.',
    ],
  },

  // ─────────────────────────────────────────────
  // DYNAMIC-PROGRAMMING — EASY (10)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'dynamic-programming',
    title: 'Ascent Budget',
    prompt:
      'You can climb 1 or 2 steps at a time. Each step has a cost; you can start from step 0 or step 1. Find the minimum cost to reach the top of the staircase.',
    constraints: '2 <= cost.length <= 1000. 0 <= cost[i] <= 999.',
    examples: [
      { input: 'cost = [10,15,20]', output: '15' },
      { input: 'cost = [1,100,1,1,1,100,1,1,100,1]', output: '6' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'Define dp[i] as the minimum cost to reach step i.',
      'dp[i] = cost[i] + min(dp[i-1], dp[i-2]).',
      'The answer is min(dp[n-1], dp[n-2]) since you can reach the top from either.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Trifecta Relay',
    prompt:
      'The tribonacci sequence starts with T(0)=0, T(1)=1, T(2)=1, and every subsequent term is the sum of the previous three. Return the N-th tribonacci number.',
    constraints: '0 <= n <= 37.',
    examples: [
      { input: 'n = 4', output: '4' },
      { input: 'n = 25', output: '1389537' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['dynamic-programming', 'math', 'memoization'],
    hints: [
      'This is exactly like Fibonacci but with three previous terms.',
      'Use three variables (a, b, c) and update them iteratively.',
      'At each step: new_c = a + b + c; then shift a=b, b=c, c=new_c.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Triple Step Operative',
    prompt:
      'An agent must climb n stairs. They can jump 1, 2, or 3 steps at a time. Count the number of distinct ways to reach the top.',
    constraints: '1 <= n <= 37.',
    examples: [
      { input: 'n = 3', output: '4', explanation: '(1+1+1),(1+2),(2+1),(3)' },
      { input: 'n = 5', output: '13' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['dynamic-programming', 'math'],
    hints: [
      'dp[i] = number of ways to reach step i.',
      'dp[i] = dp[i-1] + dp[i-2] + dp[i-3] with base cases dp[0]=1, dp[1]=1, dp[2]=2.',
      'You only need the last three values — use three variables.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Infinite Supply Drop',
    prompt:
      'You have unlimited coins of given denominations. Count the number of combinations that sum to a target amount.',
    constraints: '1 <= coins.length <= 300. 1 <= coins[i] <= 5000. 0 <= amount <= 5000.',
    examples: [
      { input: 'coins = [1,2,5], amount = 5', output: '4' },
      { input: 'coins = [2], amount = 3', output: '0' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'dp[i] = number of ways to make amount i; dp[0] = 1.',
      'For each coin, iterate through all amounts from coin to target.',
      'dp[j] += dp[j - coin] for each valid j — this is the classic unbounded knapsack combination count.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Constant Space Courier',
    prompt:
      'Compute the N-th Fibonacci number using O(1) space. No recursion, no array.',
    constraints: '0 <= n <= 30.',
    examples: [
      { input: 'n = 10', output: '55' },
      { input: 'n = 0', output: '0' },
    ],
    difficulty: 'easy',
    estMin: 6,
    tags: ['dynamic-programming', 'math'],
    hints: [
      'You only ever need the previous two Fibonacci numbers to compute the next.',
      'Use two variables: prev and curr.',
      'At each iteration: next = prev + curr; prev = curr; curr = next.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Fence Painter',
    prompt:
      'Paint a fence with n posts using k colors such that no two adjacent posts have the same color. Count the number of ways modulo 10^9+7.',
    constraints: '1 <= n <= 50. 1 <= k <= 10^5.',
    examples: [
      { input: 'n = 3, k = 2', output: '6' },
      { input: 'n = 1, k = 1', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dynamic-programming', 'math'],
    hints: [
      'Track two states: same (last two posts same color) and diff (last two posts different color).',
      'diff[i] = (k-1) * (same[i-1] + diff[i-1]).',
      'same[i] = diff[i-1]; the answer is same[n] + diff[n].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Single Trade',
    prompt:
      'You can buy and sell a stock at most once. Given daily prices, find the maximum profit. If no profit is possible, return 0.',
    constraints: '1 <= prices.length <= 10^5. 0 <= prices[i] <= 10^4.',
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5' },
      { input: 'prices = [7,6,4,3,1]', output: '0' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['dynamic-programming', 'array', 'greedy'],
    hints: [
      'Track the minimum price seen so far as you iterate.',
      'At each step, profit = prices[i] - minPrice; update the maximum profit.',
      'Return max(0, maxProfit) at the end.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Grid Traverse',
    prompt:
      'An agent navigates a grid from the top-left to the bottom-right, moving only right or down. Count the number of unique paths.',
    constraints: '1 <= m, n <= 100.',
    examples: [
      { input: 'm = 3, n = 7', output: '28' },
      { input: 'm = 3, n = 2', output: '3' },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['dynamic-programming', 'math', 'combinatorics'],
    hints: [
      'dp[i][j] = number of ways to reach cell (i, j).',
      'dp[i][j] = dp[i-1][j] + dp[i][j-1] with the first row and column all equal to 1.',
      'You can reduce space to O(n) by using a single row array.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Maximum Broadcast',
    prompt:
      'Find the contiguous subarray with the largest sum (Kadane\'s algorithm). Return the sum.',
    constraints: '1 <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.',
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: '[4,-1,2,1]' },
      { input: 'nums = [1]', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['dynamic-programming', 'array', 'divide-and-conquer'],
    hints: [
      'At each index, decide: extend the current subarray or start fresh?',
      'currentSum = max(nums[i], currentSum + nums[i]).',
      'Track the running maximum of currentSum across all positions.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'BST Census',
    prompt:
      'Count the number of structurally unique Binary Search Trees that can be formed using values 1 through n. This is the n-th Catalan number.',
    constraints: '1 <= n <= 19.',
    examples: [
      { input: 'n = 3', output: '5' },
      { input: 'n = 1', output: '1' },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['dynamic-programming', 'math', 'tree'],
    hints: [
      'For each possible root r (1 to n), the left subtree uses 1..r-1 and the right uses r+1..n.',
      'dp[i] = sum over r of dp[r-1] * dp[i-r].',
      'Base cases: dp[0] = 1 (empty tree) and dp[1] = 1.',
    ],
  },

  // ─────────────────────────────────────────────
  // DYNAMIC-PROGRAMMING — MEDIUM (12)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'dynamic-programming',
    title: 'Circular Heist',
    prompt:
      'Houses are arranged in a circle. You cannot rob two adjacent houses, and the first and last houses are adjacent. Maximize total loot.',
    constraints: '1 <= nums.length <= 100. 0 <= nums[i] <= 1000.',
    examples: [
      { input: 'nums = [2,3,2]', output: '3' },
      { input: 'nums = [1,2,3,1]', output: '4' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'The circular constraint means you cannot take both first and last elements.',
      'Solve the linear house robber problem twice: once excluding the last house, once excluding the first.',
      'Return the maximum of the two results.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Market Cooldown',
    prompt:
      'Trade stocks with a cooldown: after selling you must wait one day before buying again. Maximize profit with unlimited transactions.',
    constraints: '1 <= prices.length <= 5000. 0 <= prices[i] <= 1000.',
    examples: [
      { input: 'prices = [1,2,3,0,2]', output: '3', explanation: 'Buy at 1, sell at 3, cooldown, buy at 0, sell at 2' },
      { input: 'prices = [1]', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'Model states: held (holding stock), sold (just sold), rest (cooldown passed).',
      'held[i] = max(held[i-1], rest[i-1] - prices[i]).',
      'sold[i] = held[i-1] + prices[i]; rest[i] = max(rest[i-1], sold[i-1]).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Grid Descent',
    prompt:
      'Navigate a grid from top-left to bottom-right moving only right or down. Find the minimum sum path.',
    constraints: '1 <= m, n <= 200. 0 <= grid[i][j] <= 100.',
    examples: [
      { input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]', output: '7', explanation: 'Path 1->3->1->1->1' },
      { input: 'grid = [[1,2],[5,6]]', output: '8' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dynamic-programming', 'array', 'matrix'],
    hints: [
      'dp[i][j] = minimum cost to reach (i, j).',
      'dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]).',
      'Handle edge cases: first row only comes from the left; first column only comes from above.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Longest Palindromic Stretch',
    prompt:
      'Find the length of the longest palindromic substring within a transmission string.',
    constraints: '1 <= s.length <= 1000. s consists of lowercase and uppercase English letters and digits.',
    examples: [
      { input: 's = "babad"', output: '3', explanation: '"bab" or "aba"' },
      { input: 's = "cbbd"', output: '2', explanation: '"bb"' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['dynamic-programming', 'string', 'two-pointers'],
    hints: [
      'Expand around each center: each character and each pair of adjacent characters can be a center.',
      'For each center, expand while the characters on both sides match.',
      'Track the maximum palindrome length and its starting position.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Max Product Signal',
    prompt:
      'Find the contiguous subarray with the largest product. The array can contain negative numbers and zeros.',
    constraints: '1 <= nums.length <= 2*10^4. -10 <= nums[i] <= 10. Product fits in a 32-bit integer.',
    examples: [
      { input: 'nums = [2,3,-2,4]', output: '6' },
      { input: 'nums = [-2,0,-1]', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'Track both the maximum and minimum product ending at each index — why both?',
      'A negative number flips max and min, so you need both tracked at all times.',
      'maxProd[i] = max(nums[i], nums[i]*maxProd[i-1], nums[i]*minProd[i-1]).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Target Expression',
    prompt:
      'Assign + or - to each number in the array to make the sum equal to the target. Count the number of valid assignments.',
    constraints: '1 <= nums.length <= 20. 0 <= nums[i] <= 1000. 0 <= target <= 1000.',
    examples: [
      { input: 'nums = [1,1,1,1,1], target = 3', output: '5' },
      { input: 'nums = [1], target = 1', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['dynamic-programming', 'array', 'backtracking'],
    hints: [
      'This is equivalent to partitioning into subsets P (plus) and N (minus) where P - N = target.',
      'Since P + N = sum, we get 2P = sum + target, so find subsets summing to (sum+target)/2.',
      'Use a DP array where dp[j] = number of ways to reach sum j using the subset.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Obstacle Grid',
    prompt:
      'Count unique paths from top-left to bottom-right on a grid where 1 marks an obstacle. Paths can only move right or down.',
    constraints: '1 <= m, n <= 100. obstacleGrid[i][j] is 0 or 1.',
    examples: [
      { input: 'obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]', output: '2' },
      { input: 'obstacleGrid = [[0,1],[0,0]]', output: '1' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dynamic-programming', 'array', 'matrix'],
    hints: [
      'dp[i][j] = 0 if there is an obstacle at (i, j).',
      'Otherwise dp[i][j] = dp[i-1][j] + dp[i][j-1].',
      'Handle the first row and column carefully — set to 0 after any obstacle.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Factorization Fracture',
    prompt:
      'Given a positive integer n, break it into at least two positive integers and maximize their product. Return the maximum product.',
    constraints: '2 <= n <= 58.',
    examples: [
      { input: 'n = 2', output: '1' },
      { input: 'n = 10', output: '36', explanation: '3*3*4 = 36' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'math'],
    hints: [
      'dp[i] = maximum product when breaking integer i.',
      'For each split j (1 to i-1), product = j * max(i-j, dp[i-j]).',
      'The choice max(i-j, dp[i-j]) handles the case where not splitting is better.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Bit Tally',
    prompt:
      'For every integer from 0 to n, count the number of 1s in its binary representation. Return all counts as an array.',
    constraints: '0 <= n <= 10^5.',
    examples: [
      { input: 'n = 2', output: '[0,1,1]' },
      { input: 'n = 5', output: '[0,1,1,2,1,2]' },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['dynamic-programming', 'bit-manipulation'],
    hints: [
      'dp[i] = dp[i >> 1] + (i & 1) — shifting right removes the last bit.',
      'The number of 1s in i equals the number of 1s in i/2 plus the last bit.',
      'This single recurrence handles all cases in O(n) with O(n) space.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Arithmetic Recon',
    prompt:
      'Count the number of arithmetic slices in an array. A slice has at least 3 elements with a constant difference between consecutive terms.',
    constraints: '1 <= nums.length <= 5000. -1000 <= nums[i] <= 1000.',
    examples: [
      { input: 'nums = [1,2,3,4]', output: '3', explanation: '[1,2,3],[2,3,4],[1,2,3,4]' },
      { input: 'nums = [1]', output: '0' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'dp[i] = number of arithmetic slices ending at index i.',
      'If nums[i] - nums[i-1] == nums[i-1] - nums[i-2], then dp[i] = dp[i-1] + 1.',
      'The total count is the sum of all dp[i] values.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Triangle Descent',
    prompt:
      'Given a triangle array, find the minimum path sum from top to bottom. At each step, move to an adjacent number on the row below.',
    constraints: '1 <= triangle.length <= 200. -10^4 <= triangle[i][j] <= 10^4.',
    examples: [
      { input: 'triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]', output: '11', explanation: '2+3+5+1=11' },
      { input: 'triangle = [[-10]]', output: '-10' },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['dynamic-programming', 'array'],
    hints: [
      'Process bottom-up: start from the second-to-last row and work upward.',
      'dp[j] = triangle[i][j] + min(dp[j], dp[j+1]) at each row.',
      'After processing all rows, dp[0] holds the answer.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Square Synthesis',
    prompt:
      'Find the minimum number of perfect square numbers that sum to a given integer n.',
    constraints: '1 <= n <= 10^4.',
    examples: [
      { input: 'n = 12', output: '3', explanation: '4+4+4' },
      { input: 'n = 13', output: '2', explanation: '4+9' },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['dynamic-programming', 'math', 'bfs'],
    hints: [
      'dp[i] = minimum perfect squares to sum to i; dp[0] = 0.',
      'For each i, try all perfect squares j*j <= i: dp[i] = min(dp[i], dp[i - j*j] + 1).',
      'Initialize dp[1..n] to infinity and fill bottom-up.',
    ],
  },

  // ─────────────────────────────────────────────
  // DYNAMIC-PROGRAMMING — HARD (8)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'dynamic-programming',
    title: 'Pattern Infiltrator',
    prompt:
      'Implement regular expression matching with "." (matches any single character) and "*" (matches zero or more of the preceding character). Return true if the pattern matches the entire string.',
    constraints: '1 <= s.length <= 20. 1 <= p.length <= 30. s contains lowercase letters. p contains lowercase letters, ".", and "*".',
    examples: [
      { input: 's = "aa", p = "a*"', output: 'true' },
      { input: 's = "ab", p = ".*"', output: 'true' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dynamic-programming', 'string', 'recursion'],
    hints: [
      'dp[i][j] = true if s[0..i-1] matches p[0..j-1].',
      'If p[j-1] is "*", either skip the x* pair (dp[i][j-2]) or match the preceding char and stay in same row.',
      'Carefully handle the ".*" case which can match any sequence of characters.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Wildcard Strike',
    prompt:
      'Implement wildcard pattern matching where "?" matches any single character and "*" matches any sequence (including empty). Return true if the pattern matches the entire string.',
    constraints: '0 <= s.length, p.length <= 2000. s contains lowercase letters. p contains lowercase letters, "?", and "*".',
    examples: [
      { input: 's = "aa", p = "*"', output: 'true' },
      { input: 's = "cb", p = "?a"', output: 'false' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dynamic-programming', 'string', 'greedy'],
    hints: [
      'dp[i][j] = true if s[0..i-1] matches p[0..j-1].',
      'If p[j-1] == "*", dp[i][j] = dp[i-1][j] (match one char) or dp[i][j-1] (match empty).',
      'If p[j-1] == "?" or matches s[i-1], dp[i][j] = dp[i-1][j-1].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Interleave Verification',
    prompt:
      'Given strings s1, s2, and s3, determine if s3 is formed by interleaving s1 and s2 (maintaining their relative orders).',
    constraints: '0 <= s1.length, s2.length <= 100. s3.length == s1.length + s2.length.',
    examples: [
      { input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"', output: 'true' },
      { input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"', output: 'false' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dynamic-programming', 'string'],
    hints: [
      'dp[i][j] = true if s3[0..i+j-1] can be formed by interleaving s1[0..i-1] and s2[0..j-1].',
      'dp[i][j] is true if (dp[i-1][j] and s1[i-1]==s3[i+j-1]) or (dp[i][j-1] and s2[j-1]==s3[i+j-1]).',
      'Base case: dp[0][0] = true; fill first row using only s2 and first column using only s1.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Ghost Subsequences',
    prompt:
      'Count the number of distinct subsequences of string s that equal string t. Return the answer modulo 10^9+7.',
    constraints: '1 <= s.length, t.length <= 1000. s and t consist of lowercase English letters.',
    examples: [
      { input: 's = "rabbbit", t = "rabbit"', output: '3' },
      { input: 's = "babgbag", t = "bag"', output: '5' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dynamic-programming', 'string'],
    hints: [
      'dp[i][j] = number of ways to form t[0..j-1] from s[0..i-1].',
      'If s[i-1] == t[j-1]: dp[i][j] = dp[i-1][j-1] + dp[i-1][j].',
      'Otherwise: dp[i][j] = dp[i-1][j].',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Palindrome Insert',
    prompt:
      'Find the minimum number of characters to insert into a string to make it a palindrome.',
    constraints: '1 <= s.length <= 500. s consists of lowercase English letters.',
    examples: [
      { input: 's = "zzazz"', output: '0', explanation: 'Already a palindrome' },
      { input: 's = "mbadm"', output: '2' },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['dynamic-programming', 'string'],
    hints: [
      'This equals s.length minus the length of the longest palindromic subsequence.',
      'dp[i][j] = length of longest palindromic subsequence in s[i..j].',
      'If s[i]==s[j]: dp[i][j] = dp[i+1][j-1]+2; else dp[i][j] = max(dp[i+1][j], dp[i][j-1]).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Cherry Grid',
    prompt:
      'In a grid where -1 is a thorn, 0 is empty, and 1 has a cherry, collect maximum cherries on a round trip (down-right then up-left). Two simultaneous paths going down count separately if they overlap.',
    constraints: '1 <= n <= 50. grid[i][j] is -1, 0, or 1.',
    examples: [
      { input: 'grid = [[0,1,-1],[1,0,-1],[1,1,1]]', output: '5' },
      { input: 'grid = [[1,1,-1],[1,-1,1],[-1,1,1]]', output: '0' },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['dynamic-programming', 'array', 'matrix'],
    hints: [
      'Model two simultaneous paths both starting at (0,0) and both ending at (n-1,n-1).',
      'Use a 3D DP: dp[t][r1][r2] where t is the step and r1, r2 are the row positions of both paths.',
      'When both paths land on the same cell, count the cherry only once.',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'K Inversion Vault',
    prompt:
      'Count permutations of 1..n with exactly k inversions. An inversion is a pair (i, j) where i < j but perm[i] > perm[j]. Return the count modulo 10^9+7.',
    constraints: '1 <= n <= 1000. 0 <= k <= 1000.',
    examples: [
      { input: 'n = 3, k = 0', output: '1' },
      { input: 'n = 3, k = 1', output: '2' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dynamic-programming', 'math', 'combinatorics'],
    hints: [
      'dp[i][j] = number of permutations of 1..i with exactly j inversions.',
      'Inserting the number i+1 at various positions adds 0 to i new inversions.',
      'dp[i][j] = sum of dp[i-1][j-t] for t in 0..min(i-1, j).',
    ],
  },
  {
    patternSlug: 'dynamic-programming',
    title: 'Tricolor Grid',
    prompt:
      'Count the number of ways to paint n×3 grid such that no two adjacent cells (horizontally or vertically) share the same color (using 3 colors). Return the answer modulo 10^9+7.',
    constraints: '1 <= n <= 5000.',
    examples: [
      { input: 'n = 1', output: '12' },
      { input: 'n = 2', output: '54' },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['dynamic-programming', 'math', 'combinatorics'],
    hints: [
      'For each row, enumerate valid colorings (no two adjacent cells same color in row).',
      'Two valid row patterns are compatible if no column has the same color in adjacent rows.',
      'Precompute compatible pairs; dp[row][pattern] = sum of dp[row-1][compatible patterns].',
    ],
  },
]
