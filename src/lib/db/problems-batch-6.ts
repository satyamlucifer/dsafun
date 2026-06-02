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

export const PROBLEMS_BATCH_6: ProblemSeed[] = [
  // ─────────────────────────────────────────────
  // TRIE — EASY (10)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'trie',
    title: 'Prefix Word Counter',
    prompt:
      'You have a trie pre-loaded with a list of words. Given a prefix string, return the count of words in the trie that begin with that prefix.',
    constraints: '1 <= words.length <= 10^4, 1 <= word.length <= 20, 1 <= prefix.length <= 20, all lowercase letters',
    examples: [
      {
        input: 'words = ["apple","app","application","apply"], prefix = "app"',
        output: '4',
        explanation: 'All four words start with "app".',
      },
      {
        input: 'words = ["cat","car","card","dog"], prefix = "ca"',
        output: '3',
        explanation: '"cat", "car", and "card" start with "ca".',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['trie', 'prefix', 'counting'],
    hints: [
      'Can you store a running count at each trie node as words are inserted?',
      'When traversing the trie for the prefix, which node holds the answer?',
      'What should you return if the prefix does not exist in the trie?',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Longest Common Prefix Finder',
    prompt:
      'Given an array of strings, insert them all into a trie and then walk down from the root while each node has exactly one child and is not a word end. Return the longest common prefix shared by all strings.',
    constraints: '1 <= strs.length <= 200, 0 <= strs[i].length <= 200, all lowercase letters',
    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"',
        explanation: '"fl" is the longest prefix common to all three words.',
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: 'No common prefix exists.',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['trie', 'string', 'prefix'],
    hints: [
      'After inserting all words, start at the root and keep descending as long as there is exactly one child and the current node is not a terminal.',
      'What condition causes you to stop the traversal early?',
      'Edge case: what if the array contains an empty string?',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Dictionary Membership Check',
    prompt:
      'Build a trie from a list of dictionary words. Given a query word, return true if it exists exactly in the dictionary, or false otherwise. No wildcards — exact match only.',
    constraints: '1 <= dictionary.length <= 10^4, 1 <= word.length <= 30, all lowercase letters',
    examples: [
      {
        input: 'dictionary = ["hello","world","help"], query = "hello"',
        output: 'true',
      },
      {
        input: 'dictionary = ["hello","world","help"], query = "hell"',
        output: 'false',
        explanation: '"hell" is a prefix of "hello" but not itself a dictionary word.',
      },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['trie', 'search', 'string'],
    hints: [
      'Traverse the trie character by character — if any character is missing, return false immediately.',
      'Reaching the last character is not enough; what additional flag must be set on that node?',
      'How does this differ from a prefix-only check?',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Prefix Word Lister',
    prompt:
      'Insert a list of words into a trie. Given a prefix, perform a depth-first traversal starting from the node at the end of the prefix and collect every complete word reachable from that node.',
    constraints: '1 <= words.length <= 500, 1 <= word.length <= 20, 1 <= prefix.length <= 10, all lowercase letters',
    examples: [
      {
        input: 'words = ["pear","peace","peak","pen","pin"], prefix = "pe"',
        output: '["pear","peace","peak","pen"]',
        explanation: 'All four words begin with "pe"; "pin" does not.',
      },
      {
        input: 'words = ["abc","abd","xyz"], prefix = "ab"',
        output: '["abc","abd"]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['trie', 'dfs', 'prefix', 'string'],
    hints: [
      'First navigate to the trie node representing the end of the prefix — if it does not exist, return an empty list.',
      'From that node, use DFS or BFS and collect the running path whenever you encounter a terminal node.',
      'Remember to include the prefix itself in the path you build during traversal.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Trie-Powered String Sorter',
    prompt:
      'Insert all strings from an array into a trie. Then perform an in-order (lexicographic) DFS traversal of the trie to produce a sorted output array without using any comparison-based sort.',
    constraints: '1 <= strs.length <= 10^4, 1 <= strs[i].length <= 20, all lowercase letters',
    examples: [
      {
        input: 'strs = ["banana","apple","cherry","apricot"]',
        output: '["apple","apricot","banana","cherry"]',
      },
      {
        input: 'strs = ["z","a","m","a"]',
        output: '["a","a","m","z"]',
        explanation: 'Duplicates are preserved.',
      },
    ],
    difficulty: 'easy',
    estMin: 14,
    tags: ['trie', 'sorting', 'dfs'],
    hints: [
      'Children in the trie are naturally ordered by character (index 0 to 25), so iterating them in order gives lexicographic traversal.',
      'How do you handle duplicate strings? You may store a count at each terminal node.',
      'The DFS collects one string every time it reaches a terminal node.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Prefix Existence Probe',
    prompt:
      'Build a trie from a set of words. Given a prefix string, return true if at least one word in the trie starts with that prefix, and false otherwise.',
    constraints: '1 <= words.length <= 10^4, 1 <= word.length <= 20, 1 <= prefix.length <= 20, all lowercase letters',
    examples: [
      {
        input: 'words = ["interview","internal","inter","into"], prefix = "intern"',
        output: 'true',
        explanation: '"internal" and "intern" both start with "intern".',
      },
      {
        input: 'words = ["abc","def"], prefix = "xyz"',
        output: 'false',
      },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['trie', 'prefix', 'boolean'],
    hints: [
      'This is purely a traversal check — no terminal flag needed.',
      'If you can reach the node representing the last character of the prefix, the answer is true.',
      'What is the simplest trie method to implement for prefix checking?',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Distinct Word Counter',
    prompt:
      'Design a trie that supports insert and countDistinct operations. After inserting n words (which may include duplicates), return the count of unique words stored.',
    constraints: '1 <= n <= 10^5, 1 <= word.length <= 20, all lowercase letters',
    examples: [
      {
        input: 'ops = [insert("hi"), insert("hi"), insert("hey"), countDistinct()]',
        output: '2',
        explanation: '"hi" inserted twice counts as one distinct word.',
      },
      {
        input: 'ops = [insert("a"), insert("b"), insert("c"), countDistinct()]',
        output: '3',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['trie', 'design', 'counting'],
    hints: [
      'A simple approach: maintain a global counter that increments only when a new word (not previously inserted) reaches a fresh terminal node.',
      'How can you tell at insertion time whether a word is genuinely new?',
      'Alternatively, could you use a flag at each terminal node to detect first-time insertion?',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Pattern Match in Trie',
    prompt:
      'Insert a list of words into a trie. Given a pattern that uses only lowercase letters (no wildcards), return all stored words that exactly match the pattern. Two words match a pattern if they are identical in length and characters.',
    constraints: '1 <= words.length <= 1000, 1 <= pattern.length <= 20, all lowercase letters',
    examples: [
      {
        input: 'words = ["mass","mast","past","fast"], pattern = "mast"',
        output: '["mast"]',
      },
      {
        input: 'words = ["cat","bat","rat"], pattern = "cat"',
        output: '["cat"]',
      },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['trie', 'pattern', 'search'],
    hints: [
      'An exact pattern match in a trie is just a standard trie search — traverse character by character.',
      'Return the word only if you reach the terminal node at the end of the pattern.',
      'How would this change if the pattern had wildcard characters?',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Prefix Substring Checker',
    prompt:
      'Build a trie from a list of words. Given a query string, determine whether the query is a prefix of any word stored in the trie (the query itself does not need to be a complete word).',
    constraints: '1 <= words.length <= 10^4, 1 <= query.length <= 20, all lowercase letters',
    examples: [
      {
        input: 'words = ["helloworld","helpdesk","helm"], query = "hel"',
        output: 'true',
        explanation: '"hel" is a prefix of all three stored words.',
      },
      {
        input: 'words = ["cat","dog"], query = "cats"',
        output: 'false',
        explanation: '"cats" is not a prefix of "cat"; it extends beyond it.',
      },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['trie', 'prefix', 'string'],
    hints: [
      'Traverse the trie with each character of the query.',
      'If every character maps to an existing child node, the query is a valid prefix.',
      'No need to check terminal nodes — a prefix does not have to be a complete word.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Autocomplete Suggestions Builder',
    prompt:
      'You are given a sorted list of products. For a given search prefix, use a trie to return all product names that start with that prefix. If there are more than 3 matches, return only the first 3 in lexicographic order.',
    constraints: '1 <= products.length <= 1000, 1 <= products[i].length <= 20, 1 <= searchWord.length <= 20, all lowercase letters',
    examples: [
      {
        input: 'products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mo"',
        output: '["mobile","moneypot","monitor"]',
        explanation: 'Top 3 lexicographically from words starting with "mo".',
      },
      {
        input: 'products = ["bags","baggage","banner","box","cloths"], searchWord = "bag"',
        output: '["baggage","bags"]',
        explanation: 'Only 2 products start with "bag".',
      },
    ],
    difficulty: 'easy',
    estMin: 14,
    tags: ['trie', 'autocomplete', 'string'],
    hints: [
      'Insert all products into the trie first. Because the list may be sorted, lexicographic order is maintained naturally.',
      'After navigating to the prefix node, collect words via DFS but stop once you have 3.',
      'What early-exit condition can you add to the DFS to avoid collecting more than 3 results?',
    ],
  },

  // ─────────────────────────────────────────────
  // TRIE — MEDIUM (12)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'trie',
    title: 'Root Word Replacer',
    prompt:
      'In English, a root word is a short word that forms the base of longer derivative words. Given a dictionary of roots and a sentence, replace every word in the sentence with the shortest root from the dictionary that is a prefix of that word. If no root is a prefix, keep the original word.',
    constraints: '1 <= dictionary.length <= 1000, sentence contains 1..1000 words, all lowercase letters and spaces',
    examples: [
      {
        input: 'dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"',
        output: '"the cat was rat by the bat"',
      },
      {
        input: 'dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"',
        output: '"a a b c"',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['trie', 'string', 'replacement'],
    hints: [
      'Insert all roots into the trie. For each word in the sentence, traverse the trie character by character.',
      'Stop as soon as you hit a terminal node — that is the shortest matching root.',
      'If you exhaust the trie without finding a root, use the original word.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Map Sum by Prefix',
    prompt:
      'Design a data structure that accepts (key, value) pairs where keys are strings and values are integers. Implement insert(key, val) and sum(prefix) where sum returns the total of all values whose keys start with the given prefix.',
    constraints: '1 <= key.length <= 50, 1 <= val <= 1000, 1 <= prefix.length <= 50, at most 50 calls to each method',
    examples: [
      {
        input: 'insert("apple", 3), insert("app", 2), sum("ap")',
        output: '5',
        explanation: 'Both "apple" and "app" start with "ap"; 3 + 2 = 5.',
      },
      {
        input: 'insert("apple", 3), sum("apple"), sum("ap")',
        output: 'sum("apple") = 3, sum("ap") = 3',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['trie', 'design', 'prefix-sum'],
    hints: [
      'Store the value at the terminal node of each key.',
      'For sum(prefix), traverse to the end of the prefix in the trie, then recursively sum all values in the subtree rooted there.',
      'Alternatively, store a running prefix-sum at each node during insertion — how does that simplify sum()?',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Palindrome Pair Finder',
    prompt:
      'Given a list of unique words, find all pairs of indices (i, j) such that the concatenation words[i] + words[j] forms a palindrome. Return all such pairs.',
    constraints: '1 <= words.length <= 5000, 0 <= words[i].length <= 300, all lowercase letters, no two words are the same',
    examples: [
      {
        input: 'words = ["abcd","dcba","lls","s","sssll"]',
        output: '[[0,1],[1,0],[3,2],[2,4]]',
      },
      {
        input: 'words = ["bat","tab","cat"]',
        output: '[[0,1],[1,0]]',
      },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['trie', 'palindrome', 'string'],
    hints: [
      'Insert reversed versions of all words into a trie, tagging terminal nodes with the original index.',
      'For each word w, search the trie for its reverse — a match means w + reverse(match) is a palindrome candidate.',
      'Also handle cases where one word is shorter: the remaining suffix must itself be a palindrome.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Search Suggestion System',
    prompt:
      'Given a list of products and a searchWord, design a system that after each character of the searchWord is typed, returns the top 3 products (lexicographically) that share the typed prefix so far.',
    constraints: '1 <= products.length <= 1000, 1 <= products[i].length <= 20, 1 <= searchWord.length <= 20, all lowercase',
    examples: [
      {
        input: 'products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"',
        output: '[["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]',
        explanation: 'After each character of "mouse" is added, top-3 suggestions are returned.',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['trie', 'autocomplete', 'design'],
    hints: [
      'Sort the products list first so DFS naturally yields lexicographic order.',
      'After inserting all products into the trie, for each prefix length navigate to that prefix node and collect up to 3 words via DFS.',
      'Once the prefix node is missing, all subsequent characters also yield empty lists.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'CamelCase Pattern Matcher',
    prompt:
      'Given a list of PascalCase words and a camelCase pattern, return all words in the list that match the pattern. A word matches the pattern if, after extracting only its uppercase letters, we get exactly the pattern string.',
    constraints: '1 <= words.length <= 1000, 1 <= words[i].length <= 30, 1 <= pattern.length <= 10, uppercase and lowercase letters only',
    examples: [
      {
        input: 'words = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"',
        output: '["FooBar","FootBall","FrameBuffer"]',
      },
      {
        input: 'words = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"',
        output: '["FooBar","FooBarTest"]',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['trie', 'string', 'pattern'],
    hints: [
      'Build a trie using only the uppercase letters of each word as the key, storing the original word at the terminal node.',
      'Then search the trie with the pattern to find all matching keys.',
      'Handle the case where a word has fewer uppercase letters than the pattern length.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Prefix and Suffix Combined Search',
    prompt:
      'Design a WordFilter data structure. Given a list of words at construction time, implement a filter(prefix, suffix) method that returns the index of the word in the list that has the given prefix and suffix. If multiple words qualify, return the one with the largest index. Return -1 if no match.',
    constraints: '1 <= words.length <= 15000, 1 <= words[i].length <= 10, 1 <= prefix.length, suffix.length <= 10, at most 15000 calls to filter',
    examples: [
      {
        input: 'WordFilter(["apple"]), filter("a","e")',
        output: '0',
        explanation: '"apple" starts with "a" and ends with "e".',
      },
      {
        input: 'WordFilter(["apple","maple"]), filter("a","e")',
        output: '0',
        explanation: 'Both match; return the largest index... wait, "apple" is index 0 and "maple" is 1. "maple" starts with "a"? No — return 0.',
      },
    ],
    difficulty: 'medium',
    estMin: 28,
    tags: ['trie', 'design', 'prefix', 'suffix'],
    hints: [
      'One approach: for each word, create keys of the form suffix + "#" + prefix and insert all combinations into a trie, storing the word index.',
      'During filter, search for suffix + "#" + prefix and return the stored maximum index.',
      'How many keys are generated per word? Is there a smarter trie structure you could use instead?',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Indexed String Pair Finder',
    prompt:
      'Given a text string and a list of words, find all [i, j] index pairs such that words[k] equals text[i..j] for some word k. Return pairs sorted by start index.',
    constraints: '1 <= text.length <= 100, 1 <= words.length <= 20, 1 <= words[i].length <= 50, all lowercase letters',
    examples: [
      {
        input: 'text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]',
        output: '[[4,8],[10,13],[10,17]]',
      },
      {
        input: 'text = "ababa", words = ["aba","ab"]',
        output: '[[0,1],[0,2],[2,4]]',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['trie', 'string', 'search'],
    hints: [
      'Insert all words into a trie. For each starting index in the text, traverse the trie as far as possible.',
      'Whenever you reach a terminal node during the traversal, record the [start, start + length - 1] pair.',
      'This approach is O(n * max_word_length) which is efficient for the given constraints.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Word Squares Constructor',
    prompt:
      'Given a list of unique words of the same length n, return all word squares you can build. A word square is a sequence of n words where the kth row and kth column spell the same word (i.e., the square is symmetric).',
    constraints: '1 <= words.length <= 1000, words[i].length == n, 1 <= n <= 5, all words are lowercase and unique',
    examples: [
      {
        input: 'words = ["area","lead","wall","lady","ball"]',
        output: '[["wall","area","lead","lady"],["ball","area","lead","lady"]]',
      },
      {
        input: 'words = ["abat","baba","atan","atal"]',
        output: '[["abat","baba","atan","atal"]]',
      },
    ],
    difficulty: 'medium',
    estMin: 35,
    tags: ['trie', 'backtracking', 'string'],
    hints: [
      'Build a trie from all words. Use backtracking to fill the square row by row.',
      'After placing k words, determine the required prefix for the (k+1)-th word by reading column k from the already placed words.',
      'Use the trie to quickly find all words sharing a given prefix.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Virtual File Path Store',
    prompt:
      'Design a file system supporting createPath(path, value) and get(path). createPath creates a new path with an integer value (like creating a file); get returns the value at the path, or -1 if not found. Paths resemble Unix paths starting with "/".',
    constraints: '2 <= path.length <= 100, 1 <= value <= 10^9, at most 10^4 calls total',
    examples: [
      {
        input: 'createPath("/a",1), createPath("/a/b",2), get("/a"), get("/a/b"), get("/c")',
        output: 'true, true, 1, 2, -1',
      },
      {
        input: 'createPath("/leet",1), createPath("/leet/code",2), get("/leet/code")',
        output: 'true, true, 2',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['trie', 'design', 'path'],
    hints: [
      'Split the path by "/" to get its components, then use a trie where each node maps a path component to a child node.',
      'createPath should fail if the parent path does not already exist.',
      'Store the value at the terminal node of each path.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Maximum XOR Pair',
    prompt:
      'Given an integer array nums, return the maximum XOR of any two elements in the array. Solve this in O(n log(max_val)) time using a binary trie of bit representations.',
    constraints: '1 <= nums.length <= 2 * 10^5, 0 <= nums[i] <= 2^31 - 1',
    examples: [
      {
        input: 'nums = [3,10,5,25,2,8]',
        output: '28',
        explanation: '5 XOR 25 = 28.',
      },
      {
        input: 'nums = [14,70,53,83,49,91,36,80,92,51,66,70]',
        output: '127',
      },
    ],
    difficulty: 'medium',
    estMin: 28,
    tags: ['trie', 'bit-manipulation', 'xor'],
    hints: [
      'Build a binary trie by inserting all numbers bit by bit from the most significant bit to the least.',
      'For each number, greedily try to take the opposite bit at every level to maximize XOR.',
      'If the opposite bit child does not exist, take the same bit child instead.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Online Character Stream Matcher',
    prompt:
      'Given a list of words and a character stream, design a class StreamMatcher that reads one character at a time. After each character, return true if any word in the list is a suffix of the characters read so far.',
    constraints: '1 <= words.length <= 2000, 1 <= words[i].length <= 2000, sum of words lengths <= 10^5, 1 <= query characters <= 4 * 10^4',
    examples: [
      {
        input: 'StreamMatcher(["cd","f","kl"]), query("a") -> false, query("b") -> false, query("c") -> false, query("d") -> true',
        output: 'false, false, false, true',
        explanation: 'After reading "abcd", "cd" is a suffix.',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['trie', 'stream', 'string', 'design'],
    hints: [
      'Insert the reversed words into a trie. Maintain a list of active trie pointers.',
      'For each incoming character, try to advance each active pointer by the reversed character. Also start a new pointer from the root.',
      'If any active pointer lands on a terminal node, return true.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Concatenated Word Detector',
    prompt:
      'Given an array of words (no duplicates), return all words that can be formed by concatenating two or more shorter words from the same array.',
    constraints: '1 <= words.length <= 10^4, 1 <= words[i].length <= 30, all lowercase, words are distinct',
    examples: [
      {
        input: 'words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]',
        output: '["catsdogcats","dogcatsdog","ratcatdogcat"]',
      },
      {
        input: 'words = ["cat","dog","catdog"]',
        output: '["catdog"]',
      },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['trie', 'dynamic-programming', 'string'],
    hints: [
      'Sort words by length and insert them one by one. Before inserting a word, check if it can be split.',
      'Use DP or DFS with the trie: for each position in the word, check if the prefix ending there is a trie word, then recurse on the remainder.',
      'Ensure you count at least two components — a word cannot be formed by itself alone.',
    ],
  },

  // ─────────────────────────────────────────────
  // TRIE — HARD (8)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'trie',
    title: 'Word Squares with Pruning',
    prompt:
      'Given a list of words, find all valid word squares using backtracking guided by a trie. Prune branches early when no word with the required column prefix exists, dramatically reducing the search space.',
    constraints: '1 <= words.length <= 1000, words[i].length == n, 1 <= n <= 5, all lowercase',
    examples: [
      {
        input: 'words = ["area","lead","wall","lady","ball"]',
        output: '[["wall","area","lead","lady"],["ball","area","lead","lady"]]',
        explanation: 'Trie pruning eliminates invalid branches before full placement.',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['trie', 'backtracking', 'pruning'],
    hints: [
      'Build a prefix-to-words map using the trie so you can instantly look up candidates for any prefix.',
      'At step k, the prefix for the next row is determined by reading column k from the already placed rows.',
      'Prune immediately when the trie has no subtree for the required column prefix.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Frequency-Ranked Autocomplete',
    prompt:
      'Design a search autocomplete system. You are given historical sentences and their usage counts. For each character typed, return the top 3 suggestions (by frequency, then lexicographic tiebreak) from all previously seen sentences that start with the current input.',
    constraints: '1 <= sentences.length <= 100, 1 <= sentences[i].length <= 100, 1 <= times[i] <= 50, total input characters <= 200',
    examples: [
      {
        input: 'sentences = ["i love you","island","iroman","i love leetcode"], times = [5,3,2,2], input = ["i"," ","a","#"]',
        output: '[["i love you","island","i love leetcode"],["i love you","i love leetcode"],[],[]]',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['trie', 'design', 'autocomplete', 'heap'],
    hints: [
      'Store sentences in a trie with frequency counts at terminal nodes.',
      'For each character (other than "#"), extend the current prefix and traverse the trie subtree to gather candidates.',
      'Use a max-heap or sort by (-frequency, sentence) to return the top 3. On "#", insert the typed sentence with an incremented count.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Distinct Substring Counter',
    prompt:
      'Given a string s, return the number of distinct non-empty substrings it contains. Use a suffix trie (or suffix automaton) to count efficiently.',
    constraints: '1 <= s.length <= 1000, s consists of lowercase letters',
    examples: [
      {
        input: 's = "aabbaba"',
        output: '21',
        explanation: 'There are 21 distinct non-empty substrings.',
      },
      {
        input: 's = "abcdef"',
        output: '21',
        explanation: 'All 6+5+4+3+2+1 = 21 substrings are distinct.',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['trie', 'suffix-trie', 'string', 'counting'],
    hints: [
      'Build a trie by inserting every suffix of s. Each node in the trie represents a unique prefix of some suffix, i.e., a distinct substring.',
      'The total number of distinct substrings equals the total number of trie nodes minus the root.',
      'What is the time complexity of building a full suffix trie, and can you bound it for the given constraints?',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Minimum Unique Abbreviation',
    prompt:
      'Given a target string and a dictionary of words, find the minimum abbreviation of target such that it does not match any word in the dictionary. An abbreviation replaces a contiguous group of characters with their count (e.g., "word" -> "w2d" or "4").',
    constraints: '1 <= target.length <= 21, 1 <= dictionary.length <= 1000, 1 <= dictionary[i].length <= 21, all lowercase',
    examples: [
      {
        input: 'target = "apple", dictionary = ["blade"]',
        output: '"a4"',
        explanation: '"a4" does not match "blade" and is the shortest valid abbreviation of "apple".',
      },
      {
        input: 'target = "apple", dictionary = ["apple","blade"]',
        output: '"b4"',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['trie', 'bit-manipulation', 'backtracking'],
    hints: [
      'Filter the dictionary to only words of the same length as target — abbreviations cannot change word length semantics here.',
      'Use bitmask DP: represent which characters are "kept" (not abbreviated) and greedily minimize the abbreviation length.',
      'A trie of the dictionary helps quickly check whether a candidate abbreviation matches any dictionary word.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'T9 Keyboard Word Suggestions',
    prompt:
      'On a T9 phone keyboard (2=abc, 3=def, 4=ghi, 5=jkl, 6=mno, 7=pqrs, 8=tuv, 9=wxyz), given a dictionary and a sequence of digits, return all words that can be formed by the digit sequence.',
    constraints: '1 <= dictionary.length <= 10^4, 1 <= dictionary[i].length <= 20, 1 <= digits.length <= 10, digits contain only 2-9',
    examples: [
      {
        input: 'dictionary = ["tree","used","euse","fuse","fused","fees","fed","fen","few","fee"], digits = "3733"',
        output: '["ered","fees","fend","feod","fere","fern","fero"]',
        explanation: 'All words formed from the 3-7-3-3 key presses.',
      },
      {
        input: 'dictionary = ["hello","world"], digits = "43556"',
        output: '["hello"]',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['trie', 'string', 'phone-keyboard'],
    hints: [
      'Build a trie from the dictionary. Then perform a DFS on the trie guided by the digit sequence.',
      'At each level, only follow trie edges whose characters belong to the set mapped by the current digit.',
      'Collect words at terminal nodes reached after consuming all digits.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Board Word Hunter',
    prompt:
      'Given an m x n character grid and a list of words, find all words that exist in the grid. A word is formed by sequentially adjacent cells (horizontally or vertically), and the same cell may not be reused within a single word.',
    constraints: 'm, n in [1,12], words.length in [1,3*10^4], each word length in [1,10], all lowercase',
    examples: [
      {
        input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
        output: '["eat","oath"]',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['trie', 'dfs', 'backtracking', 'grid'],
    hints: [
      'Insert all words into a trie. Start a DFS from every cell, using the trie to guide which directions are worth exploring.',
      'Mark cells as visited during DFS and unmark them on backtrack.',
      'When a terminal node is reached in the trie, add the word to the result and remove it from the trie to avoid duplicates.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'Max XOR with Array Bound',
    prompt:
      'Given an array nums and an integer maximumBit, for each query remove the last element and return the maximum XOR of any subset of the remaining elements with some value k where 0 <= k < 2^maximumBit.',
    constraints: '1 <= nums.length <= 10^5, 1 <= maximumBit <= 20, nums[i] in [0, 2^maximumBit - 1]',
    examples: [
      {
        input: 'nums = [0,1,1,3], maximumBit = 2',
        output: '[0,3,2,3]',
      },
      {
        input: 'nums = [2,3,4,7], maximumBit = 3',
        output: '[5,2,6,5]',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['trie', 'bit-manipulation', 'xor', 'prefix-xor'],
    hints: [
      'Compute a running XOR prefix. The XOR of the whole prefix up to index i is the XOR of all elements so far.',
      'The best k to maximize XOR with the current prefix XOR is simply the bitwise complement within maximumBit bits.',
      'Process queries from right to left and remove one element at a time by updating the prefix XOR.',
    ],
  },
  {
    patternSlug: 'trie',
    title: 'In-Memory File System',
    prompt:
      'Design an in-memory file system supporting four operations: ls(path) lists files/directories, mkdir(path) creates a directory, addContentToFile(filePath, content) creates or appends to a file, readContentFromFile(filePath) reads a file.',
    constraints: 'At most 300 calls, all paths are absolute and start with "/", file and directory names are alphanumeric, no path exceeds length 100',
    examples: [
      {
        input: 'mkdir("/a/b/c"), addContentToFile("/a/b/c/d","hello"), ls("/"), readContentFromFile("/a/b/c/d")',
        output: 'ls -> ["a"], read -> "hello"',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['trie', 'design', 'file-system'],
    hints: [
      'Model the file system as a trie where each node stores a map of children (subdirectories/files), a boolean isFile flag, and a content string.',
      'Split paths by "/" to navigate the trie. mkdir creates intermediate nodes as needed.',
      'ls at a directory returns sorted child names; ls at a file returns just the file name in a list.',
    ],
  },

  // ─────────────────────────────────────────────
  // FAST-SLOW POINTERS — EASY (10)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Cycle Detection Flag',
    prompt:
      'Given the head of a singly linked list, return true if the list contains a cycle (i.e., some node can be reached again by continuously following next pointers), and false otherwise.',
    constraints: '0 <= number of nodes <= 10^4, -10^5 <= Node.val <= 10^5',
    examples: [
      {
        input: 'head = [3,2,0,-4], pos = 1',
        output: 'true',
        explanation: 'The tail connects back to node at index 1.',
      },
      {
        input: 'head = [1], pos = -1',
        output: 'false',
        explanation: 'Single node with no cycle.',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['fast-slow-pointers', 'linked-list', 'cycle'],
    hints: [
      'Use two pointers: slow moves one step, fast moves two steps per iteration.',
      'If they ever point to the same node, a cycle exists.',
      'If fast or fast.next becomes null, the list has no cycle.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Middle Node Locator',
    prompt:
      'Given the head of a singly linked list, return the middle node. If the list has an even number of nodes, return the second middle node.',
    constraints: '1 <= number of nodes <= 100, 1 <= Node.val <= 100',
    examples: [
      {
        input: 'head = [1,2,3,4,5]',
        output: 'Node 3',
        explanation: 'The middle of 5 nodes is node 3.',
      },
      {
        input: 'head = [1,2,3,4,5,6]',
        output: 'Node 4',
        explanation: 'Even length — return the second middle.',
      },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Move fast two steps and slow one step simultaneously.',
      'When fast reaches the end, slow is at the middle.',
      'How does the stopping condition differ for odd vs even length lists?',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Linked List Palindrome Check',
    prompt:
      'Given the head of a singly linked list, return true if the linked list forms a palindrome sequence, false otherwise. Aim for O(n) time and O(1) space.',
    constraints: '1 <= number of nodes <= 10^5, 0 <= Node.val <= 9',
    examples: [
      {
        input: 'head = [1,2,2,1]',
        output: 'true',
      },
      {
        input: 'head = [1,2]',
        output: 'false',
      },
    ],
    difficulty: 'easy',
    estMin: 18,
    tags: ['fast-slow-pointers', 'linked-list', 'palindrome', 'reversal'],
    hints: [
      'Find the middle of the list using fast and slow pointers.',
      'Reverse the second half of the list in-place.',
      'Compare the first half and the reversed second half node by node.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Remove Nth From End',
    prompt:
      'Given the head of a linked list, remove the nth node from the end of the list and return the modified list head. Do it in a single pass.',
    constraints: '1 <= number of nodes <= 30, 0 <= Node.val <= 100, 1 <= n <= number of nodes',
    examples: [
      {
        input: 'head = [1,2,3,4,5], n = 2',
        output: '[1,2,3,5]',
        explanation: 'The 2nd node from end is 4; remove it.',
      },
      {
        input: 'head = [1], n = 1',
        output: '[]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['fast-slow-pointers', 'linked-list', 'two-pointers'],
    hints: [
      'Advance the fast pointer n steps ahead of the slow pointer.',
      'Then move both pointers together until fast reaches the last node.',
      'At that point slow is just before the node to remove — update its next pointer.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Delete Middle Node',
    prompt:
      'Given the head of a linked list with at least one node, delete the middle node and return the modified list. The middle is the floor(n/2)-th node (0-indexed).',
    constraints: '1 <= number of nodes <= 10^5, 1 <= Node.val <= 10^5',
    examples: [
      {
        input: 'head = [1,3,4,7,1,2,6]',
        output: '[1,3,4,1,2,6]',
        explanation: 'Middle node (index 3, value 7) is deleted.',
      },
      {
        input: 'head = [1,2,3,4]',
        output: '[1,2,4]',
        explanation: 'Middle is index 2 (value 3); delete it.',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['fast-slow-pointers', 'linked-list'],
    hints: [
      'Use fast-slow pointers to find the node just before the middle.',
      'Move fast two steps and slow one step — when fast reaches the tail, slow is one step before middle.',
      'Update slow.next to skip the middle node.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Merge Two Sorted Lists',
    prompt:
      'Given the heads of two sorted linked lists, merge them into one sorted linked list and return its head. The result should be made by splicing together the nodes of the two input lists.',
    constraints: '0 <= number of nodes in each list <= 50, -100 <= Node.val <= 100, both lists are sorted in non-decreasing order',
    examples: [
      {
        input: 'list1 = [1,2,4], list2 = [1,3,4]',
        output: '[1,1,2,3,4,4]',
      },
      {
        input: 'list1 = [], list2 = []',
        output: '[]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['fast-slow-pointers', 'linked-list', 'merge', 'sorting'],
    hints: [
      'Use a dummy head node to simplify edge cases.',
      'Compare the current nodes of both lists and attach the smaller one.',
      'After one list is exhausted, attach the remainder of the other list.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Iterative List Reversal',
    prompt:
      'Given the head of a singly linked list, reverse it iteratively and return the new head. Use O(1) extra space.',
    constraints: '0 <= number of nodes <= 5000, -5000 <= Node.val <= 5000',
    examples: [
      {
        input: 'head = [1,2,3,4,5]',
        output: '[5,4,3,2,1]',
      },
      {
        input: 'head = [1,2]',
        output: '[2,1]',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['fast-slow-pointers', 'linked-list', 'reversal'],
    hints: [
      'Maintain prev, curr, and next pointers as you traverse.',
      'At each step, reverse the curr.next pointer to point to prev, then advance all three pointers.',
      'When curr is null, prev is the new head.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Remove Sorted Duplicates',
    prompt:
      'Given the head of a sorted linked list, remove all duplicates so that each element appears only once. Return the resulting list head.',
    constraints: '0 <= number of nodes <= 300, -100 <= Node.val <= 100, list is sorted in ascending order',
    examples: [
      {
        input: 'head = [1,1,2]',
        output: '[1,2]',
      },
      {
        input: 'head = [1,1,2,3,3]',
        output: '[1,2,3]',
      },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['fast-slow-pointers', 'linked-list', 'duplicates'],
    hints: [
      'Use a slow pointer to track the last unique node and a fast pointer to scan ahead.',
      'When fast finds a value different from slow, link slow to fast and advance slow.',
      'This is an in-place modification — no extra space needed.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Cycle Length Measurement',
    prompt:
      'Given the head of a linked list that contains a cycle, return the length of the cycle (number of nodes in the cycle).',
    constraints: '1 <= number of nodes <= 10^4, -10^5 <= Node.val <= 10^5, the list is guaranteed to have a cycle',
    examples: [
      {
        input: 'head = [3,2,0,-4], pos = 1',
        output: '3',
        explanation: 'The cycle involves nodes at indices 1, 2, 3 — length 3.',
      },
      {
        input: 'head = [1,2], pos = 0',
        output: '2',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['fast-slow-pointers', 'linked-list', 'cycle'],
    hints: [
      'First detect the meeting point of fast and slow pointers.',
      'Once they meet, keep one pointer stationary and advance the other one step at a time, counting steps until they meet again.',
      'That count is the cycle length.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Kth Node From End',
    prompt:
      'Given the head of a singly linked list and an integer k, return the value of the kth node from the end of the list (1-indexed, where the last node is k=1).',
    constraints: '1 <= number of nodes <= 10^4, 1 <= k <= number of nodes, 0 <= Node.val <= 10^4',
    examples: [
      {
        input: 'head = [1,2,3,4,5], k = 2',
        output: '4',
        explanation: 'The 2nd node from end has value 4.',
      },
      {
        input: 'head = [7], k = 1',
        output: '7',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['fast-slow-pointers', 'linked-list', 'two-pointers'],
    hints: [
      'Advance the fast pointer k steps ahead of the slow pointer.',
      'Then move both pointers until fast reaches the last node.',
      'The slow pointer will be at the kth node from the end.',
    ],
  },

  // ─────────────────────────────────────────────
  // FAST-SLOW POINTERS — MEDIUM (12)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Cycle Entry Point',
    prompt:
      'Given the head of a linked list, if there is a cycle, return the node where the cycle begins. If there is no cycle, return null. Solve in O(n) time and O(1) space.',
    constraints: '0 <= number of nodes <= 10^4, -10^5 <= Node.val <= 10^5',
    examples: [
      {
        input: 'head = [3,2,0,-4], pos = 1',
        output: 'node with value 2',
        explanation: 'The cycle starts at the node with value 2.',
      },
      {
        input: 'head = [1,2], pos = 0',
        output: 'node with value 1',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['fast-slow-pointers', 'linked-list', 'cycle', 'floyd'],
    hints: [
      'After fast and slow meet inside the cycle, reset one pointer to the head.',
      'Advance both pointers one step at a time — they will meet exactly at the cycle entry node.',
      'Can you prove mathematically why this works using the distance traveled by each pointer?',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'List Reorder Weave',
    prompt:
      'Given the head of a singly linked list L0 -> L1 -> ... -> Ln, reorder it in-place to L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ... Do not return a new list — modify the existing nodes.',
    constraints: '1 <= number of nodes <= 5 * 10^4, 1 <= Node.val <= 1000',
    examples: [
      {
        input: 'head = [1,2,3,4]',
        output: '[1,4,2,3]',
      },
      {
        input: 'head = [1,2,3,4,5]',
        output: '[1,5,2,4,3]',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['fast-slow-pointers', 'linked-list', 'reversal', 'merge'],
    hints: [
      'Find the middle of the list using fast-slow pointers.',
      'Reverse the second half of the list in-place.',
      'Merge the two halves by alternating nodes from each.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Subrange Reversal',
    prompt:
      'Given the head of a linked list and two integers m and n (1-indexed), reverse the nodes from position m to position n in a single pass and return the modified list head.',
    constraints: '1 <= number of nodes <= 500, -500 <= Node.val <= 500, 1 <= m <= n <= number of nodes',
    examples: [
      {
        input: 'head = [1,2,3,4,5], m = 2, n = 4',
        output: '[1,4,3,2,5]',
      },
      {
        input: 'head = [5], m = 1, n = 1',
        output: '[5]',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['fast-slow-pointers', 'linked-list', 'reversal'],
    hints: [
      'Walk to the node just before position m — this is the "before" anchor.',
      'Reverse the sublist from m to n using the standard iterative reversal technique.',
      'Reconnect the reversed segment: attach "before".next to the new sublist head, and the old sublist head to node n+1.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'List Rotation by K',
    prompt:
      'Given the head of a linked list, rotate it to the right by k places and return the new head.',
    constraints: '0 <= number of nodes <= 500, -100 <= Node.val <= 100, 0 <= k <= 2 * 10^9',
    examples: [
      {
        input: 'head = [1,2,3,4,5], k = 2',
        output: '[4,5,1,2,3]',
      },
      {
        input: 'head = [0,1,2], k = 4',
        output: '[2,0,1]',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['fast-slow-pointers', 'linked-list', 'rotation'],
    hints: [
      'First find the length n of the list and reduce k modulo n to handle large k values.',
      'Find the new tail at position n - k - 1 from the head.',
      'Break the list at the new tail and attach the old tail to the old head.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Adjacent Node Swapper',
    prompt:
      'Given the head of a linked list, swap every two adjacent nodes and return the modified list head. You must not modify node values — only rearrange the nodes themselves.',
    constraints: '0 <= number of nodes <= 100, 0 <= Node.val <= 100',
    examples: [
      {
        input: 'head = [1,2,3,4]',
        output: '[2,1,4,3]',
      },
      {
        input: 'head = [1]',
        output: '[1]',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['fast-slow-pointers', 'linked-list', 'swapping'],
    hints: [
      'Use a dummy head node to handle the edge case of swapping starting from the first node.',
      'Maintain a prev pointer and swap pairs by re-linking nodes two at a time.',
      'After swapping a pair, advance prev two steps forward.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Linked List Merge Sort',
    prompt:
      'Given the head of a linked list, sort it in ascending order using merge sort. Your solution must use O(n log n) time and O(log n) space.',
    constraints: '0 <= number of nodes <= 5 * 10^4, -10^5 <= Node.val <= 10^5',
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
    difficulty: 'medium',
    estMin: 28,
    tags: ['fast-slow-pointers', 'linked-list', 'sorting', 'divide-and-conquer'],
    hints: [
      'Use fast-slow pointers to find the middle and split the list into two halves.',
      'Recursively sort each half.',
      'Merge the two sorted halves using the standard sorted list merge technique.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Linked List Number Adder',
    prompt:
      'You are given two non-empty linked lists representing two non-negative integers stored in reverse order (each node stores one digit). Add the two numbers and return the sum as a linked list in the same reverse-order format.',
    constraints: '1 <= number of nodes <= 100, 0 <= Node.val <= 9, no leading zeros except the number 0 itself',
    examples: [
      {
        input: 'l1 = [2,4,3], l2 = [5,6,4]',
        output: '[7,0,8]',
        explanation: '342 + 465 = 807.',
      },
      {
        input: 'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]',
        output: '[8,9,9,9,0,0,0,1]',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['fast-slow-pointers', 'linked-list', 'math'],
    hints: [
      'Simultaneously traverse both lists, summing corresponding digits plus any carry.',
      'Create a new node for each digit of the result (sum % 10) and carry the remainder forward.',
      'After both lists are exhausted, if there is still a carry, append one more node.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'List Intersection Finder',
    prompt:
      'Given the heads of two singly linked lists, return the node at which the two lists intersect. If no intersection exists, return null. The lists may differ in length.',
    constraints: '0 <= number of nodes in each list <= 3 * 10^4, -10^5 <= Node.val <= 10^5, no cycles',
    examples: [
      {
        input: 'listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], intersectVal = 8',
        output: 'node with value 8',
      },
      {
        input: 'listA = [2,6,4], listB = [1,5], intersectVal = 0',
        output: 'null',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['fast-slow-pointers', 'linked-list', 'two-pointers'],
    hints: [
      'When pointer A reaches the end of list A, redirect it to the head of list B (and vice versa for pointer B).',
      'Both pointers will traverse a total of len(A) + len(B) steps and meet at the intersection node.',
      'If there is no intersection, both pointers will reach null simultaneously.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Odd-Even Node Segregator',
    prompt:
      'Given the head of a singly linked list, group all odd-indexed nodes together followed by all even-indexed nodes (1-indexed). Return the reordered list. The relative order within each group must be preserved.',
    constraints: '0 <= number of nodes <= 10^4, -10^6 <= Node.val <= 10^6',
    examples: [
      {
        input: 'head = [1,2,3,4,5]',
        output: '[1,3,5,2,4]',
      },
      {
        input: 'head = [2,1,3,5,6,4,7]',
        output: '[2,3,6,7,1,5,4]',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['fast-slow-pointers', 'linked-list', 'rearrangement'],
    hints: [
      'Maintain separate pointers for the current odd node and current even node.',
      'Weave through the list advancing odd.next = even.next and even.next = odd.next alternately.',
      'After traversal, connect the tail of the odd group to the head of the even group.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Deep Copy with Random Pointers',
    prompt:
      'A linked list is given where each node contains an extra random pointer that can point to any node in the list or null. Construct a deep copy of this list in O(n) time and O(1) space (excluding the output).',
    constraints: '0 <= number of nodes <= 1000, -10^4 <= Node.val <= 10^4, random pointer is null or points to a node in the list',
    examples: [
      {
        input: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]',
        output: '[[7,null],[13,0],[11,4],[10,2],[1,0]]',
        explanation: 'A new deep copy with the same structure and random links.',
      },
    ],
    difficulty: 'medium',
    estMin: 30,
    tags: ['fast-slow-pointers', 'linked-list', 'deep-copy', 'hash-map'],
    hints: [
      'First pass: create copy nodes interleaved with originals (A -> A\' -> B -> B\' -> ...).',
      'Second pass: set each copy node\'s random pointer using the interleaved structure.',
      'Third pass: restore the original list and extract the copied list.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Multilevel List Flattener',
    prompt:
      'You are given a doubly linked list where nodes may have a child pointer pointing to a separate doubly linked list. Flatten it so all nodes appear in a single-level doubly linked list by inserting child lists after their parent nodes.',
    constraints: '1 <= number of nodes <= 1000, 1 <= Node.val <= 10^5, at most 2 levels of nesting',
    examples: [
      {
        input: 'head = [1,2,3,4,5,6], node 3 has child [7,8,9,10], node 8 has child [11,12]',
        output: '[1,2,3,7,8,11,12,9,10,4,5,6]',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['fast-slow-pointers', 'linked-list', 'doubly-linked', 'flatten'],
    hints: [
      'Traverse the list. When you encounter a node with a child, detach the child list and insert it between the current node and its next.',
      'Remember to update both the prev and next pointers of all affected nodes.',
      'Continue traversal from the first node of the inserted child list.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Split List Into K Parts',
    prompt:
      'Given the head of a singly linked list and an integer k, split the list into k consecutive parts. The sizes of the parts should be as equal as possible; no two parts should differ by more than one. Earlier parts should be larger if the length is not divisible by k.',
    constraints: '1 <= number of nodes <= 1000, 0 <= Node.val <= 1000, 1 <= k <= 50',
    examples: [
      {
        input: 'head = [1,2,3], k = 5',
        output: '[[1],[2],[3],[],[]]',
        explanation: 'Three parts have one node each; two parts are empty.',
      },
      {
        input: 'head = [1,2,3,4,5,6,7,8,9,10], k = 3',
        output: '[[1,2,3,4],[5,6,7],[8,9,10]]',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['fast-slow-pointers', 'linked-list', 'split'],
    hints: [
      'First compute the total length n, then determine base size = n / k and extra = n % k.',
      'The first "extra" parts get base + 1 nodes; remaining parts get base nodes.',
      'Carefully cut the list at each part boundary by setting the current tail\'s next to null.',
    ],
  },

  // ─────────────────────────────────────────────
  // FAST-SLOW POINTERS — HARD (8)
  // ─────────────────────────────────────────────
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Reverse Nodes in Groups of K',
    prompt:
      'Given the head of a linked list and an integer k, reverse the nodes of the list k at a time and return the modified list. If the remaining nodes are fewer than k, leave them as-is.',
    constraints: '1 <= number of nodes <= 5000, 0 <= Node.val <= 1000, 1 <= k <= number of nodes',
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
    estMin: 35,
    tags: ['fast-slow-pointers', 'linked-list', 'reversal', 'groups'],
    hints: [
      'Before reversing each group, check whether at least k nodes remain — if not, leave them.',
      'Reverse the group in-place and carefully reconnect the reversed segment with the previous and next segments.',
      'Use a dummy head to simplify handling the first group.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Merge K Sorted Lists',
    prompt:
      'Given an array of k sorted linked lists, merge them all into one sorted linked list and return its head. Use a divide-and-conquer approach.',
    constraints: '0 <= k <= 10^4, 0 <= total nodes <= 10^4, -10^4 <= Node.val <= 10^4, each list is sorted in ascending order',
    examples: [
      {
        input: 'lists = [[1,4,5],[1,3,4],[2,6]]',
        output: '[1,1,2,3,4,4,5,6]',
      },
      {
        input: 'lists = []',
        output: '[]',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['fast-slow-pointers', 'linked-list', 'merge', 'divide-and-conquer', 'heap'],
    hints: [
      'Pair up lists and merge each pair. Repeat until only one list remains.',
      'Each merge-two-lists operation takes O(n + m) time; with log k rounds, total time is O(n log k).',
      'Alternatively, use a min-heap seeded with the first node from each list, popping and pushing to build the merged result.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'LRU Cache with Linked List',
    prompt:
      'Design a Least Recently Used (LRU) cache with O(1) get and put operations. get(key) returns the value or -1. put(key, value) inserts or updates the key; if capacity is exceeded, evict the least recently used item.',
    constraints: '1 <= capacity <= 3000, 0 <= key <= 10^4, 0 <= value <= 10^5, at most 2 * 10^5 calls',
    examples: [
      {
        input: 'LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2), put(4,4), get(1), get(3), get(4)',
        output: 'get(1)->1, get(2)->-1, get(1)->1, get(3)->3, get(4)->4',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['fast-slow-pointers', 'linked-list', 'design', 'hash-map', 'doubly-linked'],
    hints: [
      'Combine a doubly linked list (for O(1) insertion/removal) with a hash map (for O(1) lookup by key).',
      'The most recently used node lives at the head of the list; the least recently used is at the tail.',
      'On get or put, move the accessed node to the head. On eviction, remove from the tail.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Flatten Binary Tree to List',
    prompt:
      'Given the root of a binary tree, flatten it into a linked list in-place using pre-order traversal order. The flattened list uses only right pointers; all left pointers must be null.',
    constraints: '0 <= number of nodes <= 2000, -100 <= Node.val <= 100',
    examples: [
      {
        input: 'root = [1,2,5,3,4,null,6]',
        output: '[1,null,2,null,3,null,4,null,5,null,6]',
        explanation: 'Pre-order is 1,2,3,4,5,6; each node points right to the next.',
      },
      {
        input: 'root = []',
        output: '[]',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['fast-slow-pointers', 'linked-list', 'binary-tree', 'in-place'],
    hints: [
      'For each node, find the rightmost node of its left subtree (the in-order predecessor).',
      'Attach the right subtree to the right of that predecessor, then move the left subtree to the right and set left to null.',
      'Advance to the right child and repeat — this is Morris traversal adapted for flattening.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Duplicate Finder via Cycle Detection',
    prompt:
      'Given an array nums of n+1 integers where each element is in the range [1, n], there is exactly one duplicate number. Find it without modifying the array, using O(1) extra space and O(n) time. Treat the array as a linked list where nums[i] points to nums[nums[i]].',
    constraints: '2 <= n <= 10^5, nums has exactly n+1 elements, each in [1,n], exactly one value is duplicated (possibly multiple times)',
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
    tags: ['fast-slow-pointers', 'array', 'cycle', 'floyd'],
    hints: [
      'Treat index i as a node and nums[i] as the next pointer. The duplicate value means two indices point to the same "next" node, creating a cycle.',
      'Use Floyd\'s cycle detection to find the meeting point inside the cycle.',
      'Then use the same two-pointer trick as finding the cycle entry point to locate the duplicate.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Sorted List to Balanced BST',
    prompt:
      'Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree and return the root.',
    constraints: '0 <= number of nodes <= 2 * 10^4, -10^5 <= Node.val <= 10^5',
    examples: [
      {
        input: 'head = [-10,-3,0,5,9]',
        output: '[0,-3,9,-10,null,5]',
        explanation: 'One valid height-balanced BST with root 0.',
      },
      {
        input: 'head = []',
        output: '[]',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['fast-slow-pointers', 'linked-list', 'binary-tree', 'divide-and-conquer'],
    hints: [
      'Use fast-slow pointers to find the middle of the current list — this becomes the BST root.',
      'Disconnect the left half and recurse on both halves to build the left and right subtrees.',
      'The recursion depth is O(log n) making this approach memory-efficient.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Browser History Navigator',
    prompt:
      'Design a browser history system starting from a homepage. Implement visit(url) to visit a new page (clearing forward history), back(steps) to go back up to steps pages, and forward(steps) to go forward up to steps pages. Return the current url after back/forward.',
    constraints: '1 <= homepage.length, url.length <= 20, 1 <= steps <= 100, at most 5000 calls total',
    examples: [
      {
        input: 'BrowserHistory("leetcode.com"), visit("google.com"), visit("facebook.com"), visit("youtube.com"), back(1), back(1), forward(1), visit("linkedin.com"), forward(2), back(2), back(7)',
        output: 'back(1)->facebook.com, back(1)->google.com, forward(1)->facebook.com, forward(2)->linkedin.com, back(2)->google.com, back(7)->leetcode.com',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['fast-slow-pointers', 'linked-list', 'design', 'doubly-linked'],
    hints: [
      'Use a doubly linked list where each node stores a URL. Maintain a current pointer.',
      'visit: create a new node after current, set current to it, and sever any forward history.',
      'back/forward: move current backward or forward by min(steps, available) positions.',
    ],
  },
  {
    patternSlug: 'fast-slow-pointers',
    title: 'Linked List Serializer',
    prompt:
      'Design algorithms to serialize a singly linked list to a string and deserialize the string back to the original linked list. Your encoded string should be compact and your deserialization should correctly reconstruct all nodes and links.',
    constraints: '0 <= number of nodes <= 10^4, -10^4 <= Node.val <= 10^4',
    examples: [
      {
        input: 'head = [1,2,3,4,5]',
        output: 'serialize -> "1,2,3,4,5", deserialize("1,2,3,4,5") -> [1,2,3,4,5]',
      },
      {
        input: 'head = []',
        output: 'serialize -> "", deserialize("") -> []',
      },
    ],
    difficulty: 'hard',
    estMin: 30,
    tags: ['fast-slow-pointers', 'linked-list', 'serialization', 'design'],
    hints: [
      'Serialization: traverse the list and join node values with a delimiter such as ",".',
      'Deserialization: split the string by the delimiter, create nodes for each value, and link them sequentially.',
      'Handle edge cases: empty list serializes to "" or "[]" and must deserialize back to null.',
    ],
  },
]
