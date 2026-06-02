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

export const PROBLEMS_BATCH_4: ProblemSeed[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // BACKTRACKING — 10 easy
  // ─────────────────────────────────────────────────────────────────────────────
  {
    patternSlug: 'backtracking',
    title: 'The Binary Signal Weaver',
    prompt:
      'A communications engineer needs to enumerate every possible binary signal of exactly n bits to test a new antenna. ' +
      'Given a positive integer n, return all binary strings of length n in any order.',
    constraints: '1 <= n <= 16',
    examples: [
      {
        input: 'n = 2',
        output: '["00","01","10","11"]',
        explanation: 'All 4 binary strings of length 2.',
      },
      {
        input: 'n = 1',
        output: '["0","1"]',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['backtracking', 'strings', 'recursion'],
    hints: [
      'How many binary strings of length n exist in total?',
      'At each position you have exactly 2 choices — can you recurse on both?',
      'Build the string character by character, appending "0" or "1" at each level of the recursion.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Archive Curator',
    prompt:
      'An archivist catalogs every possible subset of a collection of distinct items to prepare exhibition plans. ' +
      'Given an array of distinct integers nums, return all possible subsets (the power set) in any order.',
    constraints: '1 <= nums.length <= 10, all elements are distinct',
    examples: [
      {
        input: 'nums = [1,2,3]',
        output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]',
      },
      {
        input: 'nums = [0]',
        output: '[[],[0]]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['backtracking', 'arrays', 'subsets'],
    hints: [
      'How many total subsets does a set of n elements have?',
      'At each element you have two decisions — include it or skip it. How does that model a recursion tree?',
      'Record the current partial subset at every node of the recursion tree, not just the leaves.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Anagram Cartographer',
    prompt:
      'A linguist wants to map every rearrangement of a word to understand its semantic landscape. ' +
      'Given a string s of distinct characters, return all permutations of its characters in any order.',
    constraints: '1 <= s.length <= 8, all characters are distinct lowercase letters',
    examples: [
      {
        input: 's = "abc"',
        output: '["abc","acb","bac","bca","cab","cba"]',
      },
      {
        input: 's = "ab"',
        output: '["ab","ba"]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['backtracking', 'strings', 'permutations'],
    hints: [
      'How many permutations does a string of n distinct characters have?',
      'Can you swap the current position character with each remaining character to explore each branch?',
      'Backtrack by swapping back after each recursive call to restore the string to its previous state.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Bracket Sculptor',
    prompt:
      'An architect designs ornamental fences using pairs of brackets and needs to draft every valid pattern. ' +
      'Given n pairs of brackets, generate all valid bracket sequences using exactly n opening and n closing brackets.',
    constraints: '1 <= n <= 8',
    examples: [
      {
        input: 'n = 2',
        output: '["(())","()()"]',
      },
      {
        input: 'n = 1',
        output: '["()"]',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['backtracking', 'strings', 'brackets'],
    hints: [
      'What condition must always hold between the count of open and close brackets placed so far?',
      'You can add an open bracket if you still have some left; you can add a close bracket only if it would not exceed the open count.',
      'Recurse with updated counts of remaining open and close brackets, recording the sequence when both reach zero.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Toggle Typist',
    prompt:
      'A puzzle game lets players toggle the case of any letter in a string to find all possible capitalizations. ' +
      'Given a string s containing letters and digits, return all possible strings by toggling each letter to uppercase or lowercase. ' +
      'Digits are always left as-is.',
    constraints: '1 <= s.length <= 12',
    examples: [
      {
        input: 's = "a1b2"',
        output: '["a1b2","a1B2","A1b2","A1B2"]',
      },
      {
        input: 's = "3z4"',
        output: '["3z4","3Z4"]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['backtracking', 'strings', 'case-manipulation'],
    hints: [
      'For each character, what choices do you have, and how does it depend on whether it is a letter or digit?',
      'Digits have only one choice; letters have two. Can you branch the recursion only on letters?',
      'Build the result character by character; at each letter position recurse once with lowercase and once with uppercase.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The IP Address Restorer',
    prompt:
      'A network detective receives a raw string of digits and must recover all valid IPv4 addresses it could represent. ' +
      'Given a string of digits s, return all valid IP addresses that can be formed by inserting exactly three dots.',
    constraints: '4 <= s.length <= 12, s contains only digits',
    examples: [
      {
        input: 's = "25525511135"',
        output: '["255.255.11.135","255.255.111.35"]',
      },
      {
        input: 's = "0000"',
        output: '["0.0.0.0"]',
      },
    ],
    difficulty: 'easy',
    estMin: 18,
    tags: ['backtracking', 'strings', 'ip-address'],
    hints: [
      'An IPv4 address has exactly 4 octets each between 0 and 255. How many segments must you place?',
      'For each segment, try 1, 2, or 3 digit lengths. What conditions make a segment invalid?',
      'Watch out for leading zeros: "01" is not a valid octet unless it equals "0" itself.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Coin Summoner',
    prompt:
      'A treasure hunter at a small vault wants to list every selection of coins that adds up to a precise target. ' +
      'Given a list of distinct positive integers coins and a target, return all unique combinations (without reuse of elements) ' +
      'where the numbers sum to target.',
    constraints: '1 <= coins.length <= 15, 1 <= coins[i] <= 50, 1 <= target <= 40',
    examples: [
      {
        input: 'coins = [2,3,6,7], target = 7',
        output: '[[2,2,3],[7]]',
        explanation: 'Each number can be reused any number of times.',
      },
      {
        input: 'coins = [2,3,5], target = 8',
        output: '[[2,2,2,2],[2,3,3],[3,5]]',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['backtracking', 'arrays', 'combinations'],
    hints: [
      'How can you avoid generating the same combination in different orders?',
      'Try iterating from a start index so you never pick an element that appears before the current one.',
      'At each step either include the current coin and stay at the same index (reuse allowed) or advance the index.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Digit Dialer',
    prompt:
      'A retro telephone operator maps digit sequences to every possible letter combination on an old keypad. ' +
      'Given a string of digits (2-9), return all possible letter combinations using the classic phone keypad mapping.',
    constraints: '0 <= digits.length <= 4',
    examples: [
      {
        input: 'digits = "23"',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
      },
      {
        input: 'digits = ""',
        output: '[]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['backtracking', 'strings', 'recursion'],
    hints: [
      'What data structure can store the digit-to-letters mapping for quick lookup?',
      'For each digit, iterate over its mapped letters and recurse to the next digit.',
      'The base case is when you have consumed all digits — at that point add the built string to results.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Full Tree Census',
    prompt:
      'A botanist counts every structurally unique full binary tree (each node has 0 or 2 children) with exactly n nodes. ' +
      'Given an odd integer n, return the number of structurally unique full binary trees with n nodes.',
    constraints: '1 <= n <= 19, n is odd',
    examples: [
      {
        input: 'n = 7',
        output: '5',
      },
      {
        input: 'n = 1',
        output: '1',
      },
    ],
    difficulty: 'easy',
    estMin: 14,
    tags: ['backtracking', 'trees', 'memoization'],
    hints: [
      'If a full binary tree has n nodes, how many nodes are in its left and right subtrees combined?',
      'The left subtree can have 1, 3, 5, ... up to n-2 nodes. How many choices does that give you?',
      'Multiply the counts for each valid (left, right) split and sum over all splits; memoize on n.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Mosaic Tile Placer',
    prompt:
      'A mosaic artist wants to tile a 1 x n board using 1x1 red tiles and 1x2 blue dominoes, ' +
      'and needs every distinct pattern enumerated for her portfolio. ' +
      'Return all distinct tiling strings, where "R" denotes a red tile and "BB" denotes a blue domino.',
    constraints: '1 <= n <= 12',
    examples: [
      {
        input: 'n = 3',
        output: '["RRR","RBB","BBR"]',
        explanation: 'Three ways to tile a 1x3 board.',
      },
      {
        input: 'n = 2',
        output: '["RR","BB"]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['backtracking', 'strings', 'tiling'],
    hints: [
      'At each position you can either place a single "R" or, if space allows, a "BB". How does that look as a recursion?',
      'The recursion naturally mirrors the Fibonacci structure — base cases are n=0 (empty string) and n=1 ("R").',
      'Collect results in a list passed by reference and append the completed string when remaining length hits 0.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // BACKTRACKING — 12 medium
  // ─────────────────────────────────────────────────────────────────────────────
  {
    patternSlug: 'backtracking',
    title: 'The Relic Grid Hunter',
    prompt:
      'An archaeologist receives a grid of letters and a secret word she believes is inscribed somewhere inside. ' +
      'Given a 2-D grid of characters board and a string word, return true if the word exists in the grid by ' +
      'following adjacent (horizontal or vertical) cells without reusing a cell.',
    constraints: '1 <= rows, cols <= 6, 1 <= word.length <= 15',
    examples: [
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: 'true',
      },
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
        output: 'false',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['backtracking', 'grid', 'dfs'],
    hints: [
      'Which cells could be the starting point for the word? How do you pick one to try?',
      'From each cell, explore all 4 neighbors. How do you mark a cell as visited so you do not reuse it?',
      'Restore the visited marker after the recursive call returns so other branches can use the cell.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Palindrome Cartographer',
    prompt:
      'A linguist wants to carve a string into palindromic pieces in every possible way. ' +
      'Given a string s, return all ways to partition it such that every substring in the partition is a palindrome.',
    constraints: '1 <= s.length <= 16',
    examples: [
      {
        input: 's = "aab"',
        output: '[["a","a","b"],["aa","b"]]',
      },
      {
        input: 's = "a"',
        output: '[["a"]]',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['backtracking', 'strings', 'palindrome'],
    hints: [
      'At each position, what is the set of substrings you can try as the next palindromic piece?',
      'How can you efficiently check whether a given substring is a palindrome?',
      'When you reach the end of the string with a valid partition, add the current list to the result.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Duplicate Deck Shuffler',
    prompt:
      'A card game designer wants every distinct ordering of a multiset of card values. ' +
      'Given an array nums that may contain duplicates, return all distinct permutations.',
    constraints: '1 <= nums.length <= 8',
    examples: [
      {
        input: 'nums = [1,1,2]',
        output: '[[1,1,2],[1,2,1],[2,1,1]]',
      },
      {
        input: 'nums = [1,2,3]',
        output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['backtracking', 'arrays', 'permutations', 'duplicates'],
    hints: [
      'Why does a standard permutation algorithm produce duplicates when the input has repeated elements?',
      'Sort the array first. At each recursion level, skip an element if it is the same as the previous one AND the previous one has already been used (or not used, depending on your strategy).',
      'A boolean "used" array combined with the skip condition ensures each distinct value appears only once per slot.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Lottery Committee',
    prompt:
      'A lottery committee selects exactly k lucky numbers from candidates 1 to n each draw. ' +
      'Return all combinations of k numbers chosen from 1 to n.',
    constraints: '1 <= n <= 20, 1 <= k <= n',
    examples: [
      {
        input: 'n = 4, k = 2',
        output: '[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]',
      },
      {
        input: 'n = 1, k = 1',
        output: '[[1]]',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['backtracking', 'combinations'],
    hints: [
      'How do you ensure that each combination is in non-decreasing order without generating duplicates?',
      'Start from a given index and only pick numbers >= that index to avoid revisiting smaller numbers.',
      'Prune early: if the remaining numbers in [start, n] are fewer than the remaining slots needed, stop.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Single-Use Alchemist',
    prompt:
      'An alchemist has a collection of reagents, each usable only once, and wants every set of reagents ' +
      'that combines to a precise target weight. ' +
      'Given candidates (possibly with duplicates) and a target, return all unique combinations where each number is used at most once and they sum to target.',
    constraints: '1 <= candidates.length <= 15, 1 <= candidates[i] <= 50, 1 <= target <= 40',
    examples: [
      {
        input: 'candidates = [10,1,2,7,6,1,5], target = 8',
        output: '[[1,1,6],[1,2,5],[1,7],[2,6]]',
      },
      {
        input: 'candidates = [2,5,2,1,2], target = 5',
        output: '[[1,2,2],[5]]',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['backtracking', 'arrays', 'combinations', 'duplicates'],
    hints: [
      'How does sorting the candidates help you skip duplicate combinations at the same recursion level?',
      'At each level, if candidates[i] == candidates[i-1] and i > start, skip to avoid duplicates.',
      'Move the start index forward after including a candidate to prevent reuse of the same element.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Queens Census',
    prompt:
      'A chess historian wants to know in how many ways n non-attacking queens can be placed on an n x n board. ' +
      'Return the count of distinct solutions to the n-Queens problem.',
    constraints: '1 <= n <= 9',
    examples: [
      {
        input: 'n = 4',
        output: '2',
      },
      {
        input: 'n = 1',
        output: '1',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['backtracking', 'arrays', 'n-queens'],
    hints: [
      'Place one queen per row. For each row, which columns are safe given queens already placed?',
      'A column, and both diagonals, are attacked. How can you track attacked columns and diagonals with sets?',
      'Increment a counter when all n rows are placed; no need to store the board.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Gray Code Traveler',
    prompt:
      'A digital systems engineer needs to program a rotary encoder that changes only one bit at a time. ' +
      'Given n, return a Gray code sequence of 2^n integers where consecutive values differ in exactly one bit and ' +
      'the sequence begins at 0.',
    constraints: '1 <= n <= 16',
    examples: [
      {
        input: 'n = 2',
        output: '[0,1,3,2]',
      },
      {
        input: 'n = 1',
        output: '[0,1]',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['backtracking', 'bit-manipulation', 'gray-code'],
    hints: [
      'What is the mathematical formula relating the i-th Gray code value to i?',
      'G(i) = i XOR (i >> 1). Does this formula yield the required single-bit-change property?',
      'Alternatively, build iteratively: for bit k, reflect and prefix the existing list, adding 2^(k-1) to reflected copies.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Beautiful Decorator',
    prompt:
      'An interior decorator arranges n objects (numbered 1 to n) in a row such that every object i is placed at a ' +
      'position divisible by i or i is divisible by the position. ' +
      'Given n, return the count of such beautiful arrangements.',
    constraints: '1 <= n <= 15',
    examples: [
      {
        input: 'n = 2',
        output: '2',
        explanation: 'Arrangements [1,2] and [2,1] are both beautiful.',
      },
      {
        input: 'n = 1',
        output: '1',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['backtracking', 'permutations'],
    hints: [
      'Try filling positions 1 to n in order. For each position, which numbers are valid to place there?',
      'A number k is valid at position p if k % p == 0 or p % k == 0. How do you track which numbers are used?',
      'A boolean visited array avoids reuse; increment the count when position n+1 is reached.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Itinerary Reconstructor',
    prompt:
      'A travel agency must reconstruct a flight itinerary from a pile of tickets. ' +
      'Given a list of airline tickets [from, to], reconstruct the itinerary in order, ' +
      'starting from "JFK". If multiple valid itineraries exist, return the lexicographically smallest one.',
    constraints: '1 <= tickets.length <= 300, all airports are 3 uppercase letters',
    examples: [
      {
        input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
        output: '["JFK","MUC","LHR","SFO","SJC"]',
      },
      {
        input: 'tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]',
        output: '["JFK","ATL","JFK","SFO","ATL","SFO"]',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['backtracking', 'graphs', 'euler-path'],
    hints: [
      'Sort the destinations for each departure airport so you always pick the lexicographically smallest one first.',
      'Use a Hierholzer-style DFS: visit destinations greedily and prepend the current airport to the result on the way back.',
      'Decrement (or remove) a ticket when you use it, and restore it if the path is a dead end.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Mismatched Parenthesis Fixer',
    prompt:
      'A code formatter receives a malformed expression and must find all minimal ways to remove parentheses to make it valid. ' +
      'Given a string s of lowercase letters and parentheses, remove the minimum number of parentheses to make it valid and ' +
      'return all unique results.',
    constraints: '1 <= s.length <= 25',
    examples: [
      {
        input: 's = "()())()"',
        output: '["()()()", "(())()"]',
      },
      {
        input: 's = "(a)())()"',
        output: '["(a)()()", "(a())()"]',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['backtracking', 'strings', 'brackets'],
    hints: [
      'First count the minimum number of mismatched open and close parentheses that must be removed.',
      'Use backtracking: at each index decide to keep or remove the current character. Only remove parentheses, not letters.',
      'Use a set to deduplicate results; prune when the remaining removals allowed is less than what is still needed.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Descending Code Splitter',
    prompt:
      'A cryptographer discovers that a codeword can be split into a sequence of consecutive descending numbers. ' +
      'Given a string s of digits, determine if it can be split into a sequence of at least 3 numbers ' +
      'where each term is exactly 1 less than the previous (consecutive descending integers). ' +
      'Return all such valid sequences.',
    constraints: '1 <= s.length <= 20',
    examples: [
      {
        input: 's = "544542"',
        output: 'true',
        explanation: '"544542" -> [544, 543, 542].',
      },
      {
        input: 's = "9999999999999"',
        output: 'false',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['backtracking', 'strings', 'numbers'],
    hints: [
      'The first number can be any prefix of s. How long can it be at most?',
      'Once the first two numbers are fixed, every subsequent number is determined. Can you validate the rest greedily?',
      'Watch out for leading zeros; "01" should not be treated as the number 1.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Subsequence Matchmaker',
    prompt:
      'A bioinformatician matches as many DNA words as possible against a reference strand using distinct subsequences. ' +
      'Given a reference string s and an array of words, return the count of words that appear as a subsequence of s.',
    constraints: '1 <= s.length <= 50000, 1 <= words.length <= 1000, 1 <= words[i].length <= 50',
    examples: [
      {
        input: 's = "abtcdegt", words = ["abt","acd","ace","bet"]',
        output: '3',
        explanation: '"abt", "acd", and "bet" are subsequences of s.',
      },
      {
        input: 's = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]',
        output: '2',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['backtracking', 'strings', 'subsequence', 'two-pointers'],
    hints: [
      'A naive check for each word is O(|s| * |w|). Can you do better by grouping words by their next needed character?',
      'Maintain a bucket for each character a-z containing words waiting for that character next.',
      'Scan s once; for each character c, advance all words in bucket[c] to their next needed character.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // BACKTRACKING — 8 hard
  // ─────────────────────────────────────────────────────────────────────────────
  {
    patternSlug: 'backtracking',
    title: 'The Sentence Synthesizer',
    prompt:
      'A natural language researcher wants to reconstruct every valid English sentence from a run-on string. ' +
      'Given a string s and a dictionary wordDict, return all sentences you can form by inserting spaces ' +
      'so that each word is in wordDict.',
    constraints: '1 <= s.length <= 20, 1 <= wordDict.length <= 1000',
    examples: [
      {
        input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',
        output: '["cats and dog","cat sand dog"]',
      },
      {
        input: 's = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]',
        output: '["pine apple pen apple","pineapple pen apple","pine applepen apple"]',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['backtracking', 'strings', 'dynamic-programming', 'memoization'],
    hints: [
      'At each index, which prefixes of the remaining string are valid words in the dictionary?',
      'Use memoization: store the list of sentence suffixes reachable from each index to avoid recomputation.',
      'Combine the current word with each suffix from the memoized result for the next index.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Expression Operator Inserter',
    prompt:
      'A math puzzle master inserts +, -, and * operators between digits of a number to reach a target value. ' +
      'Given a string num of digits and an integer target, return all expressions formed by inserting +, -, or * ' +
      'between digits (concatenation is also allowed) that evaluate to target.',
    constraints: '1 <= num.length <= 10, -2^31 <= target <= 2^31 - 1',
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
    estMin: 40,
    tags: ['backtracking', 'strings', 'math'],
    hints: [
      'At each position you decide to either append the current digit to the previous operand (concatenation) or apply an operator. How do you track the current running value and the last operand?',
      'For multiplication, you need the last operand separately: new_val = current_val - last + last * digit.',
      'Avoid leading zeros in multi-digit numbers; if the current segment starts with 0 it must be exactly "0".',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Equal Partition Architect',
    prompt:
      'A construction manager needs to split a delivery of tiles into exactly k groups of equal total weight. ' +
      'Given an integer array nums and an integer k, return true if the array can be partitioned into k non-empty ' +
      'subsets each with equal sum.',
    constraints: '1 <= k <= nums.length <= 16, 1 <= nums[i] <= 10000',
    examples: [
      {
        input: 'nums = [4,3,2,3,5,2,1], k = 4',
        output: 'true',
        explanation: 'Four subsets: (5), (1,4), (2,3), (2,3).',
      },
      {
        input: 'nums = [1,2,3,4], k = 3',
        output: 'false',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['backtracking', 'arrays', 'bit-mask', 'memoization'],
    hints: [
      'What is the target sum for each bucket, and what early exits can you apply?',
      'Sort nums in descending order and try to fill one bucket at a time, backtracking when a placement fails.',
      'Use a bitmask to represent which elements are used; memoize on the bitmask to avoid redundant states.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Sticker Speller',
    prompt:
      'A crafts teacher has an unlimited supply of sticker packs and wants to know the minimum number of stickers ' +
      'needed to spell a target word. ' +
      'Given an array stickers of strings and a string target, return the minimum stickers needed to spell target, ' +
      'or -1 if impossible.',
    constraints: '1 <= stickers.length <= 50, 1 <= stickers[i].length <= 10, 1 <= target.length <= 15',
    examples: [
      {
        input: 'stickers = ["with","example","science"], target = "thehat"',
        output: '3',
        explanation: 'Use "with", "example", "example".',
      },
      {
        input: 'stickers = ["notice","possible"], target = "basicbasic"',
        output: '-1',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['backtracking', 'bit-mask', 'dynamic-programming', 'bfs'],
    hints: [
      'Represent the remaining characters needed as a bitmask of target characters still required.',
      'BFS over states: each state is a bitmask of unfulfilled target characters. Apply each sticker to transition states.',
      'Memoize the minimum stickers to reach the empty bitmask (all characters fulfilled).',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Verbal Arithmetic Solver',
    prompt:
      'A cryptarithmetic puzzle challenges players to assign a unique digit to each letter so that ' +
      'the arithmetic equation holds. ' +
      'Given an array of words (operands) and a result word, return true if digits 0-9 can be assigned ' +
      'to distinct letters so that the equation words[0] + words[1] + ... = result holds.',
    constraints: 'words.length >= 2, all words consist of uppercase letters, 1 <= each word length <= 7',
    examples: [
      {
        input: 'words = ["SEND","MORE"], result = "MONEY"',
        output: 'true',
        explanation: 'S=9, E=5, N=6, D=7, M=1, O=0, R=8, Y=2.',
      },
      {
        input: 'words = ["AA","BB"], result = "CD"',
        output: 'false',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['backtracking', 'math', 'permutations'],
    hints: [
      'Collect all unique letters and assign digits to them one by one via backtracking.',
      'Prune early by checking column-by-column from the least significant digit whether the partial assignment is consistent.',
      'Leading letters cannot be assigned 0; prune those branches immediately.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Zuma Sequence Crusher',
    prompt:
      'A player in the Zuma ball game shoots colored balls to clear a row by eliminating groups of 3 or more same-colored consecutive balls. ' +
      'Given a string board representing balls on the board and a hand of balls to insert, ' +
      'return the minimum number of balls from hand needed to clear the board, or -1 if impossible.',
    constraints: '1 <= board.length <= 16, 1 <= hand.length <= 5',
    examples: [
      {
        input: 'board = "WRRBBW", hand = "RB"',
        output: '-1',
      },
      {
        input: 'board = "WWRRBBWW", hand = "WRBRW"',
        output: '2',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['backtracking', 'strings', 'memoization'],
    hints: [
      'After inserting a ball, immediately collapse all groups of 3+ same-colored balls and repeat until stable.',
      'Memoize on (board_state, hand_state) to avoid recomputing identical positions.',
      'Try inserting each hand ball at positions adjacent to matching colors on the board to prune useless insertions.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Box Stacker',
    prompt:
      'A warehouse manager needs to know in how many ways boxes can be removed to make all remaining groups disappear ' +
      'with the fewest moves, where each move removes a contiguous block of same-value boxes earning points equal to count^2. ' +
      'Given an array boxes, return the maximum points obtainable by removing all boxes.',
    constraints: '1 <= boxes.length <= 100, 1 <= boxes[i] <= 100',
    examples: [
      {
        input: 'boxes = [1,3,2,2,2,3,4,3,1]',
        output: '23',
      },
      {
        input: 'boxes = [1,1,1]',
        output: '9',
      },
    ],
    difficulty: 'hard',
    estMin: 55,
    tags: ['backtracking', 'dynamic-programming', 'memoization'],
    hints: [
      'Define dp[l][r][k] as the max points from boxes[l..r] when k boxes identical to boxes[l] are appended on the left.',
      'Either remove the k+1 prefix group immediately, or find a matching box m in [l+1,r] and merge it before removing.',
      'Fill the DP table with memoization to avoid exponential recomputation.',
    ],
  },
  {
    patternSlug: 'backtracking',
    title: 'The Minimal Abbreviator',
    prompt:
      'A security system assigns each user a minimal unique abbreviation of their word. ' +
      'An abbreviation replaces some characters with a digit representing the count of omitted consecutive letters. ' +
      'Given a word target and a dictionary of words, find the shortest abbreviation of target ' +
      'that does not match any word in the dictionary.',
    constraints: '1 <= target.length <= 21, 0 <= dictionary.length <= 1000',
    examples: [
      {
        input: 'target = "apple", dictionary = ["blade"]',
        output: 'a4',
        explanation: '"a4" does not match "blade".',
      },
      {
        input: 'target = "apple", dictionary = ["apple","blade"]',
        output: '5',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['backtracking', 'strings', 'bit-mask'],
    hints: [
      'Enumerate all 2^n subsets of character positions to keep; the rest are abbreviated as counts.',
      'For each subset, check that the resulting abbreviation does not match any dictionary word.',
      'The length of an abbreviation is (kept characters) + (number of runs of omitted characters). Minimize this.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // GREEDY — 10 easy
  // ─────────────────────────────────────────────────────────────────────────────
  {
    patternSlug: 'greedy',
    title: 'The Cookie Ration Officer',
    prompt:
      'A relief officer distributes cookies to children where each child has a minimum greed factor. ' +
      'A child is content if they receive a cookie with size >= their greed factor. ' +
      'Given arrays g (greed factors) and s (cookie sizes), return the maximum number of content children.',
    constraints: '1 <= g.length, s.length <= 30000, 1 <= g[i], s[j] <= 2^31 - 1',
    examples: [
      {
        input: 'g = [1,2,3], s = [1,1]',
        output: '1',
      },
      {
        input: 'g = [1,2], s = [1,2,3]',
        output: '2',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['greedy', 'arrays', 'sorting'],
    hints: [
      'Should you try to satisfy the most or least demanding child first to maximize content children?',
      'Sort both arrays. Match the smallest sufficient cookie to the least greedy unsatisfied child.',
      'Two pointers on sorted arrays allow a single-pass O(n log n) solution.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Lifeboat Commander',
    prompt:
      'A shipwreck commander loads survivors into lifeboats, each with a weight limit. ' +
      'At most 2 people can share a boat. Given an array of people weights and a limit, ' +
      'return the minimum number of boats needed to rescue everyone.',
    constraints: '1 <= people.length <= 50000, 1 <= people[i] <= limit <= 30000',
    examples: [
      {
        input: 'people = [1,2], limit = 3',
        output: '1',
      },
      {
        input: 'people = [3,2,2,1], limit = 3',
        output: '3',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['greedy', 'two-pointers', 'sorting'],
    hints: [
      'Sort the people array. Which pair should you try to put in the same boat?',
      'Try pairing the heaviest person with the lightest. If they fit, both board; otherwise the heaviest goes alone.',
      'Two pointers from both ends of the sorted array implement this in O(n).',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Coin Dispenser',
    prompt:
      'A vending machine dispenser uses the fewest coins to return change using denominations [1, 5, 10, 25]. ' +
      'Given an integer amount in cents, return the minimum number of coins needed using standard US coin denominations.',
    constraints: '0 <= amount <= 10000',
    examples: [
      {
        input: 'amount = 41',
        output: '4',
        explanation: 'One quarter + one dime + one nickel + one penny.',
      },
      {
        input: 'amount = 0',
        output: '0',
      },
    ],
    difficulty: 'easy',
    estMin: 8,
    tags: ['greedy', 'math'],
    hints: [
      'For canonical coin systems like US coins, which denomination should you always try first?',
      'Take as many of the largest coin as possible, then move to the next denomination.',
      'This greedy works because US coins form a canonical system; it would fail for arbitrary denominations.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Matrix Score Maximizer',
    prompt:
      'A game board shows a binary matrix. In one move you can flip all values in any row or column. ' +
      'The score is the sum of each row interpreted as a binary number. ' +
      'Given an m x n binary matrix, return the highest possible score after any number of moves.',
    constraints: '1 <= m, n <= 20, grid[i][j] is 0 or 1',
    examples: [
      {
        input: 'grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]',
        output: '39',
      },
      {
        input: 'grid = [[0]]',
        output: '1',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['greedy', 'bit-manipulation', 'arrays'],
    hints: [
      'The most significant bit (leftmost column) contributes the most to the score. What should its value be in every row?',
      'First flip rows so that every row starts with 1.',
      'Then for each column (after the first), flip the column if more than half its values are 0.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Largest Number Assembler',
    prompt:
      'A rally coordinator wants to display the largest possible number on a scoreboard by rearranging scores. ' +
      'Given an array of non-negative integers, arrange them to form the largest number and return it as a string.',
    constraints: '1 <= nums.length <= 100, 0 <= nums[i] <= 10^9',
    examples: [
      {
        input: 'nums = [10,2]',
        output: '"210"',
      },
      {
        input: 'nums = [3,30,34,5,9]',
        output: '"9534330"',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['greedy', 'sorting', 'strings'],
    hints: [
      'How do you decide whether number a should come before number b in the final arrangement?',
      'Compare the concatenations "ab" vs "ba" as strings; place a before b if "ab" > "ba".',
      'Use a custom sort with this comparator; handle the edge case where all numbers are 0.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Budget Bag Collector',
    prompt:
      'A collector buys bags of marbles where a bag with negative capacity is discarded. ' +
      'She wants to maximize the total positive capacity across all kept bags with at most additionalRocks rocks to add. ' +
      'Given an array capacity[] and additionalRocks, find the maximum number of bags that can be filled to capacity.',
    constraints: '1 <= capacity.length <= 10^5, 0 <= capacity[i] <= 10^9, 0 <= additionalRocks <= 10^9',
    examples: [
      {
        input: 'capacity = [2,3,4,7], additionalRocks = 2',
        output: '3',
        explanation: 'Fill bags of capacity 2 (0 needed), 3 (1 rock), then either 4 (1 rock) to get 3 bags.',
      },
      {
        input: 'capacity = [10,2,2], additionalRocks = 100',
        output: '3',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['greedy', 'sorting', 'arrays'],
    hints: [
      'Which bag should you fill first to maximize the count of fully filled bags?',
      'Sort by capacity and fill the smallest bags first, using rocks when needed.',
      'Accumulate rocks used; stop when you run out.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Binary Stabilizer',
    prompt:
      'A circuit engineer wants to make a binary string non-decreasing (all 0s before all 1s) in the fewest operations. ' +
      'Each operation flips a single character. Given a binary string s, return the minimum number of flips to make s non-decreasing.',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      {
        input: 's = "010110"',
        output: '2',
      },
      {
        input: 's = "00011000"',
        output: '2',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['greedy', 'strings', 'dynamic-programming'],
    hints: [
      'At any split point i, all characters to the left should be 0 and all to the right should be 1. How many flips does a given split require?',
      'Count the number of 1s to the left of the split (must flip to 0) plus the number of 0s to the right (must flip to 1).',
      'Scan left to right maintaining a running count of ones seen; this lets you compute cost for each split in O(1).',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Fruit Basket Packer',
    prompt:
      'A greengrocer fills baskets by picking consecutive fruits from a row, keeping only 2 distinct fruit types per basket. ' +
      'Given an array fruits where fruits[i] is the type of fruit at position i, ' +
      'return the length of the longest sub-array with at most 2 distinct fruit types.',
    constraints: '1 <= fruits.length <= 10^5, 0 <= fruits[i] < fruits.length',
    examples: [
      {
        input: 'fruits = [1,2,1]',
        output: '3',
      },
      {
        input: 'fruits = [0,1,2,2]',
        output: '3',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['greedy', 'sliding-window', 'hash-map'],
    hints: [
      'This is a sliding window "at most 2 distinct" problem. How do you expand and shrink the window?',
      'Maintain a frequency map of the current window. Shrink from the left when the map exceeds 2 keys.',
      'Track the maximum window size seen during the scan.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Non-Decreasing Digit Stamper',
    prompt:
      'A factory stamper must change as few digits as possible so that the resulting number is non-decreasing when read left to right. ' +
      'Given a non-negative integer n, return the largest number <= n with all digits in non-decreasing order.',
    constraints: '0 <= n <= 10^9',
    examples: [
      {
        input: 'n = 332',
        output: '299',
      },
      {
        input: 'n = 10',
        output: '9',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['greedy', 'strings', 'math'],
    hints: [
      'Convert n to a character array. Scan from right to left to find the first violation where s[i-1] > s[i].',
      'Decrement s[i-1] by 1 when a violation is found and set all digits from i onward to 9.',
      'Continue scanning leftward until no more violations remain.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Runway Scheduler',
    prompt:
      'An air traffic controller schedules the minimum number of runways for a set of flights, ' +
      'each with an arrival and departure time. ' +
      'Given arrays of arrival and departure times, return the minimum number of runways needed so no two flights share a runway simultaneously.',
    constraints: '1 <= n <= 10^5, 1 <= arrival[i] <= departure[i] <= 10^9',
    examples: [
      {
        input: 'arrivals = [900,940,950,1100,1500,1800], departures = [910,1200,1120,1130,1900,2000]',
        output: '3',
      },
      {
        input: 'arrivals = [200,210,300,320,350,500], departures = [230,340,320,430,400,520]',
        output: '2',
      },
    ],
    difficulty: 'easy',
    estMin: 14,
    tags: ['greedy', 'sorting', 'arrays'],
    hints: [
      'Sort arrivals and departures independently. What event-driven scan can track concurrent flights?',
      'Use two pointers: advance the arrival pointer if the next arrival is before the next departure.',
      'Keep a running count: +1 on arrival, -1 on departure; the maximum count is the answer.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // GREEDY — 12 medium
  // ─────────────────────────────────────────────────────────────────────────────
  {
    patternSlug: 'greedy',
    title: 'The Arrow Burst Coordinator',
    prompt:
      'A carnival game features balloons floating at various horizontal positions. ' +
      'A vertical arrow shot at x bursts all balloons whose x-range spans x. ' +
      'Given an array of balloon intervals [start, end], return the minimum number of arrows needed to burst all balloons.',
    constraints: '1 <= points.length <= 10^5, -2^31 <= start <= end <= 2^31 - 1',
    examples: [
      {
        input: 'points = [[10,16],[2,8],[1,6],[7,12]]',
        output: '2',
      },
      {
        input: 'points = [[1,2],[3,4],[5,6],[7,8]]',
        output: '4',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'intervals', 'sorting'],
    hints: [
      'If you sort balloons by their end position, where should you shoot the first arrow?',
      'Shoot at the end of the first balloon (sorted by end). That arrow pops all balloons whose start <= this end.',
      'After each shot, skip all popped balloons and repeat for the next unpopped one.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Overlap Extractor',
    prompt:
      'A schedule optimizer removes the minimum number of meetings to leave a set of non-overlapping intervals. ' +
      'Given an array of intervals, return the minimum number to remove so the rest do not overlap.',
    constraints: '1 <= intervals.length <= 10^5, -5 * 10^4 <= start < end <= 5 * 10^4',
    examples: [
      {
        input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]',
        output: '1',
      },
      {
        input: 'intervals = [[1,2],[1,2],[1,2]]',
        output: '2',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'intervals', 'sorting'],
    hints: [
      'Sort intervals by end time. Why is the interval with the earliest end time always safe to keep?',
      'Greedily keep the interval with the smallest end time that does not overlap the last kept interval.',
      'The answer is total intervals minus the count of kept (non-overlapping) intervals.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Parade Formation Planner',
    prompt:
      'A parade director arranges people in a queue such that taller people always stand behind shorter people of the same height, ' +
      'and each person knows how many taller people stand in front of them. ' +
      'Given an array of [height, k] pairs, reconstruct the queue.',
    constraints: '1 <= people.length <= 2000, 0 <= height, k <= 10^6',
    examples: [
      {
        input: 'people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]',
        output: '[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['greedy', 'arrays', 'sorting'],
    hints: [
      'Sort people by height descending, then by k ascending. Why does this ordering help?',
      'Insert each person at index k in the result list. Since shorter people come later, inserting them does not disturb the k-counts of taller people already placed.',
      'Use a list with O(n) insertions; the final list is the answer.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Territory Labeler',
    prompt:
      'A cartographer wants to partition a map string into as many non-overlapping label regions as possible, ' +
      'where each character appears in at most one region. ' +
      'Given a string s, partition it so each letter appears in at most one part and return the lengths of each part.',
    constraints: '1 <= s.length <= 500, s consists of lowercase letters',
    examples: [
      {
        input: 's = "ababcbacadefegdehijhklij"',
        output: '[9,7,8]',
      },
      {
        input: 's = "eccbbbbdec"',
        output: '[10]',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'strings', 'two-pointers'],
    hints: [
      'For each character, what is the farthest right position it appears in the string?',
      'Scan left to right. Expand the current partition to include the farthest right occurrence of every character seen so far.',
      'When the current index reaches the farthest right boundary, close the partition and start a new one.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Flight Booking Optimizer',
    prompt:
      'A travel company minimizes total flight costs by sending half its employees to city A and half to city B. ' +
      'Given a 2D array costs where costs[i][0] and costs[i][1] are the flight costs for person i, ' +
      'and there are 2n people, return the minimum total cost to fly n people to each city.',
    constraints: '2 <= costs.length <= 200, costs.length is even, 1 <= costs[i][j] <= 10^4',
    examples: [
      {
        input: 'costs = [[10,20],[30,200],[400,50],[30,20]]',
        output: '110',
      },
      {
        input: 'costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]',
        output: '1859',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'sorting', 'arrays'],
    hints: [
      'Assume everyone goes to city A. What is the cost saving if person i goes to city B instead?',
      'Sort by (cost_B - cost_A). The first n people (most savings from going to B) go to city B; the rest go to city A.',
      'Sum the actual costs after assigning.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Wiggle Subsequence Scout',
    prompt:
      'A signal analyst extracts the longest alternating subsequence where differences between consecutive elements ' +
      'strictly alternate between positive and negative. ' +
      'Given an integer array nums, return the length of the longest wiggle subsequence.',
    constraints: '1 <= nums.length <= 1000, 0 <= nums[i] <= 1000',
    examples: [
      {
        input: 'nums = [1,7,4,9,2,5]',
        output: '6',
      },
      {
        input: 'nums = [1,17,5,10,13,15,10,5,16,8]',
        output: '7',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'arrays', 'dynamic-programming'],
    hints: [
      'Think of the array as a series of peaks and valleys. What does each peak/valley contribute?',
      'Greedily count every local extremum (peak or valley). The answer is the number of extrema + 1 for the start.',
      'Track the last direction (up or down) and extend the wiggle whenever the direction changes.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The One-Swap Maximizer',
    prompt:
      'A broker can swap at most one pair of digits in an account balance to maximize the number. ' +
      'Given a non-negative integer num, return the maximum value obtainable by swapping two digits at most once.',
    constraints: '0 <= num <= 10^8',
    examples: [
      {
        input: 'num = 2736',
        output: '7236',
        explanation: 'Swap 2 and 7.',
      },
      {
        input: 'num = 9973',
        output: '9973',
        explanation: 'Already maximum.',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'arrays', 'strings'],
    hints: [
      'Convert to a digit array. For each position, what is the best digit you could swap into it?',
      'Precompute the last occurrence of each digit 9 down to 0. Scan left to right seeking a larger digit to the right.',
      'The first position where a larger digit exists to the right gives the optimal swap.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Digit Minimizer',
    prompt:
      'A coder removes exactly k digits from a number string to produce the smallest possible integer. ' +
      'Given a string num and an integer k, return the smallest number after removing k digits.',
    constraints: '1 <= k <= num.length <= 10^5, num consists of digits, num has no leading zeros except "0"',
    examples: [
      {
        input: 'num = "1432219", k = 3',
        output: '"1219"',
      },
      {
        input: 'num = "10200", k = 1',
        output: '"200"',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['greedy', 'stack', 'strings'],
    hints: [
      'Which digit should be removed first to make the number as small as possible?',
      'Use a monotonic stack: whenever the current digit is smaller than the stack top and removals remain, pop the top.',
      'Trim leading zeros from the result; return "0" if empty.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Broken Calculator Hacker',
    prompt:
      'A hacker encounters a calculator that can only double a value or subtract 1. ' +
      'Starting from startValue, find the minimum number of operations to reach target.',
    constraints: '1 <= startValue, target <= 10^9',
    examples: [
      {
        input: 'startValue = 2, target = 3',
        output: '2',
        explanation: '2 -> 4 -> 3.',
      },
      {
        input: 'startValue = 5, target = 8',
        output: '2',
        explanation: '5 -> 4 -> 8.',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['greedy', 'math'],
    hints: [
      'Work backwards from target to startValue. What are the reverse operations?',
      'Reverse of doubling is halving; reverse of subtracting 1 is adding 1.',
      'If target is odd, add 1 (reverse of subtract 1 from target+1); if even, halve it. Stop when target <= startValue.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Minimum Wage Contractor',
    prompt:
      'A project manager hires exactly k workers from a pool, paying each worker at least their minimum wage ' +
      'and proportional to their quality relative to the rest of the group. ' +
      'The cost is wage_ratio * sum(quality in group). ' +
      'Given arrays quality and wage and an integer k, return the minimum total cost to hire exactly k workers.',
    constraints: '1 <= k <= quality.length <= 10^4, 1 <= quality[i], wage[i] <= 10^4',
    examples: [
      {
        input: 'quality = [10,20,5], wage = [70,50,30], k = 2',
        output: '105.0',
      },
      {
        input: 'quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3',
        output: '30.66667',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['greedy', 'heap', 'sorting'],
    hints: [
      'The wage ratio for a group is determined by max(wage[i]/quality[i]) across the group. Sort workers by this ratio.',
      'For each worker as the "captain" (highest ratio), the cheapest group is the k workers with smallest quality among those considered so far.',
      'Use a max-heap of size k to maintain the smallest-quality group; sum * captain_ratio gives the cost.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Talent Profit Matcher',
    prompt:
      'A staffing agency assigns workers to jobs to maximize total profit. ' +
      'Workers have difficulty limits and jobs have difficulty and profit values. ' +
      'A worker can do a job only if job difficulty <= worker ability. ' +
      'Given arrays difficulty, profit, and worker ability, return the maximum total profit.',
    constraints: '1 <= difficulty.length = profit.length <= 10^4, 1 <= worker.length <= 10^4, 1 <= difficulty[i], profit[i], worker[i] <= 10^5',
    examples: [
      {
        input: 'difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]',
        output: '100',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['greedy', 'sorting', 'two-pointers'],
    hints: [
      'Sort jobs by difficulty and workers by ability. Can you match them with two pointers?',
      'For each worker, the best job they can do is the highest-profit job with difficulty <= their ability.',
      'Maintain a running max of best profit seen so far as you advance through jobs sorted by difficulty.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The String Inequality Validator',
    prompt:
      'A verifier checks whether a string can be broken into two halves where every character in the first half is ' +
      'alphabetically less than or equal to every character in the second half. ' +
      'Given a string s of even length, return true if it can be "broken" (rearranging each half independently) ' +
      'such that s1[i] <= s2[i] for all i simultaneously.',
    constraints: '2 <= s.length <= 10^5, s.length is even, s consists of lowercase letters',
    examples: [
      {
        input: 's = "aabc"',
        output: 'true',
        explanation: 'a, a <= b, c.',
      },
      {
        input: 's = "abcd"',
        output: 'true',
      },
    ],
    difficulty: 'medium',
    estMin: 16,
    tags: ['greedy', 'sorting', 'strings'],
    hints: [
      'Split s into first and second halves, sort each independently.',
      'Check if first[i] <= second[i] for all i simultaneously.',
      'Also check the reverse (second[i] <= first[i]) — either direction works for the answer.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // GREEDY — 8 hard
  // ─────────────────────────────────────────────────────────────────────────────
  {
    patternSlug: 'greedy',
    title: 'The Capital Ventures Director',
    prompt:
      'An investment director wants to maximize capital by completing at most k projects, ' +
      'where each project has a profit and a minimum capital requirement. ' +
      'Given arrays capital and profits and initial capital w, return the final maximized capital after at most k projects.',
    constraints: '1 <= k <= 10^5, 0 <= w <= 10^9, 1 <= capital.length = profits.length <= 10^5',
    examples: [
      {
        input: 'k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]',
        output: '4',
      },
      {
        input: 'k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]',
        output: '6',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['greedy', 'heap', 'sorting'],
    hints: [
      'Sort projects by capital requirement. At each step, which projects become available?',
      'Push all newly affordable projects into a max-heap by profit. Pick the most profitable available project.',
      'Repeat k times or until no affordable projects remain.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Garden Irrigation Planner',
    prompt:
      'A gardener places water taps along a 1D garden of length n. Each tap at position i can water ' +
      '[i - ranges[i], i + ranges[i]]. Return the minimum number of taps to water the entire garden [0, n], or -1.',
    constraints: '1 <= n <= 10^4, ranges.length == n+1, 0 <= ranges[i] <= 100',
    examples: [
      {
        input: 'n = 5, ranges = [3,4,1,1,0,0]',
        output: '1',
      },
      {
        input: 'n = 3, ranges = [0,0,0,0]',
        output: '-1',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['greedy', 'arrays', 'jump-game'],
    hints: [
      'Convert each tap at position i with range r to an interval [i-r, i+r]. This becomes a minimum interval cover problem.',
      'Transform to a jump game: for each position p, the farthest right you can reach in one jump from p.',
      'Greedily extend coverage, counting jumps until the garden is covered or no extension is possible.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Array Patcher',
    prompt:
      'A data integrity engineer patches a sorted array of positive integers to ensure that every integer ' +
      'in [1, n] can be represented as a sum of some subset of the array. ' +
      'Return the minimum number of patches (elements to add) needed.',
    constraints: '1 <= nums.length <= 1000, 0 <= nums[i] <= 10^8, 1 <= n <= 2^31 - 1',
    examples: [
      {
        input: 'nums = [1,3], n = 6',
        output: '1',
        explanation: 'Add 2. Now [1,2,3] covers [1,6].',
      },
      {
        input: 'nums = [1,5,10], n = 20',
        output: '2',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['greedy', 'arrays', 'math'],
    hints: [
      'Let reach be the maximum value representable as a subset sum so far. If reach >= n, you are done.',
      'If the next number in nums is <= reach+1, include it (extends reach to reach + nums[i]).',
      'Otherwise patch by adding reach+1, doubling reach. Count each patch.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Fuel Stop Navigator',
    prompt:
      'A road-trip navigator plans the minimum number of fuel stops on a highway. ' +
      'Starting with startFuel, you need to reach a target. Stations along the way have fuel amounts. ' +
      'Return the minimum number of stops, or -1 if impossible.',
    constraints: '1 <= target, startFuel <= 10^9, 0 <= stations.length <= 500, 1 <= stations[i][1] <= 10^9',
    examples: [
      {
        input: 'target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]',
        output: '2',
      },
      {
        input: 'target = 1, startFuel = 1, stations = []',
        output: '0',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['greedy', 'heap', 'arrays'],
    hints: [
      'As you travel, record every station you pass through in a max-heap by fuel amount.',
      'Whenever you run out of fuel, greedily take fuel from the largest station in the heap.',
      'Count each heap extraction as one stop; return -1 if the heap is empty and you still cannot reach the target.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Consecutive Run Splitter',
    prompt:
      'A music producer partitions a sequence of notes into consecutive ascending runs of length >= 3. ' +
      'Given a sorted array nums, determine if it can be split into sub-sequences each of consecutive integers of length >= 3.',
    constraints: '1 <= nums.length <= 10^4, -1000 <= nums[i] <= 1000',
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
    estMin: 38,
    tags: ['greedy', 'hash-map', 'arrays'],
    hints: [
      'Use two maps: count of each number still available, and count of sequences ending at each number.',
      'For each number n, prefer extending an existing sequence ending at n-1 over starting a new one.',
      'A new sequence starting at n requires n, n+1, n+2 all to be available in the count map.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Academic Scheduler',
    prompt:
      'A student enrolls in as many courses as possible. Each course has a last day deadline and a duration. ' +
      'A course can be taken if it finishes on or before its last day. ' +
      'Given a list of [duration, lastDay] pairs, return the maximum number of courses the student can take.',
    constraints: '1 <= courses.length <= 10^4, 1 <= duration <= lastDay <= 2*10^4',
    examples: [
      {
        input: 'courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]',
        output: '3',
      },
      {
        input: 'courses = [[1,2]]',
        output: '1',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['greedy', 'heap', 'sorting'],
    hints: [
      'Sort courses by last day. Greedily take each course if time permits.',
      'If taking the current course violates the deadline, swap it with the longest previously taken course if that saves time.',
      'Use a max-heap of taken course durations to efficiently find and replace the longest one.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Island Disconnector',
    prompt:
      'A geographer wants to know the minimum number of days to flood cells so that a binary island grid ' +
      'becomes disconnected (0 or 2+ islands). ' +
      'Given a binary matrix grid, return the minimum number of days to disconnect the island.',
    constraints: '1 <= m, n <= 30, grid[i][j] is 0 or 1',
    examples: [
      {
        input: 'grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]',
        output: '2',
      },
      {
        input: 'grid = [[1,1]]',
        output: '2',
      },
    ],
    difficulty: 'hard',
    estMin: 45,
    tags: ['greedy', 'graphs', 'bfs'],
    hints: [
      'The answer is always 0, 1, or 2. Why can you guarantee it is never more than 2?',
      'Check if already disconnected (0 days). Then try removing each land cell (1 day) and check connectivity.',
      'If no single removal disconnects it, the answer is 2 — a corner or bridge cell always exists for rectangular islands.',
    ],
  },
  {
    patternSlug: 'greedy',
    title: 'The Profit Window Trader',
    prompt:
      'A quantitative trader can hold at most 2 non-overlapping stock positions simultaneously. ' +
      'Given a prices array, find the maximum profit achievable with at most 2 non-overlapping buy-sell transactions.',
    constraints: '1 <= prices.length <= 10^5, 0 <= prices[i] <= 10^4',
    examples: [
      {
        input: 'prices = [3,3,5,0,0,3,1,4]',
        output: '6',
        explanation: 'Buy at 0 sell at 3, buy at 1 sell at 4.',
      },
      {
        input: 'prices = [1,2,3,4,5]',
        output: '4',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['greedy', 'dynamic-programming', 'arrays'],
    hints: [
      'Compute the best single-transaction profit for each prefix prices[0..i] and store it in a forward array.',
      'Compute the best single-transaction profit for each suffix prices[i..n-1] and store it in a backward array.',
      'Combine: the answer is max over all i of forward[i] + backward[i+1].',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HEAP — 10 easy
  // ─────────────────────────────────────────────────────────────────────────────
  {
    patternSlug: 'heap',
    title: 'The Last Pebble',
    prompt:
      'Two players take the two heaviest pebbles each round, smash them together, and return the remainder if unequal. ' +
      'Given an array stones of weights, simulate the smashing game and return the weight of the last stone, or 0 if none remain.',
    constraints: '1 <= stones.length <= 30, 1 <= stones[i] <= 1000',
    examples: [
      {
        input: 'stones = [2,7,4,1,8,1]',
        output: '1',
      },
      {
        input: 'stones = [1]',
        output: '1',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['heap', 'arrays', 'simulation'],
    hints: [
      'Which data structure lets you efficiently retrieve and remove the maximum element?',
      'A max-heap gives you the two largest stones in O(log n) per operation.',
      'Push the remainder back into the heap after each smash and repeat until at most one stone remains.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Tournament Ranker',
    prompt:
      'A sports analyst assigns medals and ranks to athletes based on their scores. ' +
      'Given an integer array score, return a string array result where result[i] is "Gold Medal", "Silver Medal", ' +
      '"Bronze Medal", or their 1-indexed rank as a string.',
    constraints: '1 <= score.length <= 10^4, 0 <= score[i] <= 10^6, all values are unique',
    examples: [
      {
        input: 'score = [5,4,3,2,1]',
        output: '["Gold Medal","Silver Medal","Bronze Medal","4","5"]',
      },
      {
        input: 'score = [10,3,8,9,4]',
        output: '["Gold Medal","5","Bronze Medal","Silver Medal","4"]',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['heap', 'arrays', 'sorting'],
    hints: [
      'Sort a copy of the scores to determine the overall ranking of each value.',
      'Use a hash map from score value to rank after sorting.',
      'Map rank 1, 2, 3 to medal labels and the rest to their numeric rank as a string.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Kth Peak Detector',
    prompt:
      'A data scientist needs to quickly report the kth largest signal reading from a streaming dataset. ' +
      'Given an integer array nums and an integer k, return the kth largest element in the array.',
    constraints: '1 <= k <= nums.length <= 10^4, -10^4 <= nums[i] <= 10^4',
    examples: [
      {
        input: 'nums = [3,2,1,5,6,4], k = 2',
        output: '5',
      },
      {
        input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4',
        output: '4',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['heap', 'arrays', 'sorting'],
    hints: [
      'A min-heap of size k holds the k largest elements seen so far. What is at its top?',
      'Push each element; if the heap exceeds size k, pop the minimum.',
      'After processing all elements, the heap top is the kth largest.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Rope Fusion Engineer',
    prompt:
      'A rope engineer connects rope segments end-to-end; the cost of each connection equals the combined length. ' +
      'Given an array of rope lengths, return the minimum total cost to connect all ropes into one.',
    constraints: '1 <= ropes.length <= 10^4, 1 <= ropes[i] <= 10^4',
    examples: [
      {
        input: 'ropes = [4,3,2,6]',
        output: '29',
      },
      {
        input: 'ropes = [1,2,3]',
        output: '9',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['heap', 'greedy', 'arrays'],
    hints: [
      'Which two ropes should you connect first to minimize total cost?',
      'Always merge the two shortest ropes; this is the Huffman coding idea applied to lengths.',
      'A min-heap lets you extract the two smallest, merge, and re-insert in O(log n).',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Spatial Proximity Finder',
    prompt:
      'A GPS system locates the k nearest transmitters to the origin. ' +
      'Given an array of points on a 2D plane and an integer k, return the k points closest to the origin.',
    constraints: '1 <= k <= points.length <= 10^4, -10^4 <= xi, yi <= 10^4',
    examples: [
      {
        input: 'points = [[1,3],[-2,2]], k = 1',
        output: '[[-2,2]]',
      },
      {
        input: 'points = [[3,3],[5,-1],[-2,4]], k = 2',
        output: '[[3,3],[-2,4]]',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['heap', 'arrays', 'math'],
    hints: [
      'You do not need the actual distances — comparing squared distances avoids square roots.',
      'A max-heap of size k keeps the k smallest distances: if a new point is closer than the heap top, swap it in.',
      'Alternatively, sort by squared distance and return the first k elements.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Smallest Pair Scout',
    prompt:
      'A data matchmaker pairs elements from two lists and wants to report the k pairs with the smallest sums. ' +
      'Given two sorted arrays nums1 and nums2, return the k pairs (u, v) with the smallest sums.',
    constraints: '1 <= nums1.length, nums2.length <= 10^4, 0 <= nums1[i], nums2[i] <= 10^9, 1 <= k <= 10^4',
    examples: [
      {
        input: 'nums1 = [1,7,11], nums2 = [2,4,6], k = 3',
        output: '[[1,2],[1,4],[1,6]]',
      },
      {
        input: 'nums1 = [1,1,2], nums2 = [1,2,3], k = 2',
        output: '[[1,1],[1,1]]',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['heap', 'arrays', 'sorting'],
    hints: [
      'Start by pushing (nums1[i], nums2[0]) for all i into a min-heap.',
      'Each time you pop (nums1[i], nums2[j]), push the successor (nums1[i], nums2[j+1]) if it exists.',
      'Repeat until you have collected k pairs.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Running Total Monitor',
    prompt:
      'A financial dashboard displays the running median of a transaction stream after each new transaction is added. ' +
      'Given a stream of integers, return an array of medians after each insertion (rounded down for even-length streams).',
    constraints: '1 <= nums.length <= 1000, 1 <= nums[i] <= 10^5',
    examples: [
      {
        input: 'nums = [1,2,3,4,5]',
        output: '[1,1,2,2,3]',
        explanation: 'Medians after each insertion.',
      },
      {
        input: 'nums = [5,3,1]',
        output: '[5,4,3]',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['heap', 'arrays', 'median'],
    hints: [
      'Maintain a max-heap for the lower half and a min-heap for the upper half of the stream.',
      'Balance the heaps so that sizes differ by at most 1.',
      'The median is the top of the larger heap, or the average of both tops for even length.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Ugly Factor Generator',
    prompt:
      'A number theorist studies numbers whose only prime factors are 2, 3, and 5 (called ugly numbers). ' +
      'Given an integer n, return the nth ugly number.',
    constraints: '1 <= n <= 1690',
    examples: [
      {
        input: 'n = 10',
        output: '12',
        explanation: 'The first 10 ugly numbers are [1,2,3,4,5,6,8,9,10,12].',
      },
      {
        input: 'n = 1',
        output: '1',
      },
    ],
    difficulty: 'easy',
    estMin: 12,
    tags: ['heap', 'math', 'dynamic-programming'],
    hints: [
      'Use a min-heap initialized with 1. At each step extract the min and push min*2, min*3, min*5.',
      'Use a set to avoid inserting duplicates into the heap.',
      'After n extractions, the last extracted value is the answer.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Maximum Average Booster',
    prompt:
      'A teacher wants to raise the average pass ratio of classes by assigning extra students optimally. ' +
      'Each class has [passing, total] students. Adding one student raises the pass ratio by (passing+1)/(total+1) - passing/total. ' +
      'Given classes and extraStudents, return the maximum average pass ratio after distributing all extra students.',
    constraints: '1 <= classes.length <= 10^5, 1 <= passing <= total <= 10^5, 1 <= extraStudents <= 10^5',
    examples: [
      {
        input: 'classes = [[1,4],[1,3]], extraStudents = 2',
        output: '0.58333',
        explanation: 'Add one extra student to each class.',
      },
    ],
    difficulty: 'easy',
    estMin: 15,
    tags: ['heap', 'greedy', 'math'],
    hints: [
      'Define the gain of adding one student to class (p, t) as (p+1)/(t+1) - p/t.',
      'Use a max-heap ordered by gain. Each extra student should go to the class with the highest current gain.',
      'After assigning a student, recompute the gain for that class and push it back.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Two-Heap Sorter',
    prompt:
      'A logistics manager sorts packages using only two priority queues and no other data structures. ' +
      'Given an unsorted integer array, sort it using a max-heap and a min-heap and return the sorted result.',
    constraints: '1 <= nums.length <= 10^4, -10^4 <= nums[i] <= 10^4',
    examples: [
      {
        input: 'nums = [3,1,4,1,5,9,2,6]',
        output: '[1,1,2,3,4,5,6,9]',
      },
      {
        input: 'nums = [5]',
        output: '[5]',
      },
    ],
    difficulty: 'easy',
    estMin: 10,
    tags: ['heap', 'sorting', 'arrays'],
    hints: [
      'Push all elements into a min-heap. Popping them out in order gives you the sorted result.',
      'A min-heap repeatedly yields the smallest remaining element — that is exactly what sorting requires.',
      'For the "two-heap" constraint, push all into a max-heap first, then pop into a min-heap, then pop the final order.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HEAP — 12 medium
  // ─────────────────────────────────────────────────────────────────────────────
  {
    patternSlug: 'heap',
    title: 'The Character Spacing Enforcer',
    prompt:
      'A printer must interleave characters so no two identical characters are adjacent. ' +
      'Given a string s, rearrange it so no two adjacent characters are the same. Return "" if impossible.',
    constraints: '1 <= s.length <= 500, s consists of lowercase letters',
    examples: [
      {
        input: 's = "aab"',
        output: '"aba"',
      },
      {
        input: 's = "aaab"',
        output: '""',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['heap', 'greedy', 'strings'],
    hints: [
      'Which character should you always place next if possible?',
      'Always pick the most frequent remaining character that is not the same as the last placed character.',
      'A max-heap by frequency lets you efficiently choose; push back with decremented count after placing.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Nearest Range Locator',
    prompt:
      'A scheduler needs to pair each interval with the interval whose start is just >= its end. ' +
      'Given a list of intervals (non-overlapping, non-sorted), for each interval return the index of the ' +
      'interval with the smallest start >= current end, or -1 if none.',
    constraints: '1 <= intervals.length <= 2 * 10^4, 1 <= start <= end <= 3 * 10^6',
    examples: [
      {
        input: 'intervals = [[3,4],[2,3],[1,2]]',
        output: '[0, 1, -1]',
        explanation: 'Interval [3,4] is the right interval for [2,3].',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['heap', 'sorting', 'intervals'],
    hints: [
      'Build a sorted map of start times to interval indices for binary search.',
      'For each interval, binary search for the smallest start >= end.',
      'A sorted structure like a TreeMap or sorted array supports this in O(log n).',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Frequency Word Ranker',
    prompt:
      'A text analyst ranks words by frequency. Given a list of words and an integer k, ' +
      'return the k most frequent words sorted by frequency descending, then lexicographically for ties.',
    constraints: '1 <= words.length <= 500, 1 <= words[i].length <= 10, k is in [1, number of unique words]',
    examples: [
      {
        input: 'words = ["i","love","leetcode","i","love","coding"], k = 2',
        output: '["i","love"]',
      },
      {
        input: 'words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4',
        output: '["the","is","sunny","day"]',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['heap', 'hash-map', 'strings', 'sorting'],
    hints: [
      'Count word frequencies with a hash map first.',
      'Use a min-heap of size k with a custom comparator: lower frequency or lexicographically greater means smaller priority.',
      'The heap retains the k "largest" words; reverse at the end for the result.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Character Frequency Billboard',
    prompt:
      'A billboard designer wants to arrange letters by frequency for visual impact. ' +
      'Given a string s, sort its characters in decreasing order of frequency. ' +
      'Characters with equal frequency can appear in any relative order.',
    constraints: '1 <= s.length <= 5 * 10^5, s consists of letters and digits',
    examples: [
      {
        input: 's = "tree"',
        output: '"eert"',
      },
      {
        input: 's = "cccaaa"',
        output: '"aaaccc"',
      },
    ],
    difficulty: 'medium',
    estMin: 15,
    tags: ['heap', 'hash-map', 'strings'],
    hints: [
      'Count frequencies with a hash map.',
      'Push all (frequency, character) pairs into a max-heap.',
      'Pop each entry and append the character repeated frequency times to build the result.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Seat Reservation Kiosk',
    prompt:
      'A theatre kiosk manages seat reservations. On reserve(), assign the smallest available seat number. ' +
      'On unreserve(seat), return the seat back to the pool. ' +
      'Implement the SeatManager class with reserve() and unreserve(int seat) methods.',
    constraints: '1 <= n <= 10^5, up to 10^5 calls total',
    examples: [
      {
        input: 'n = 5, operations = ["reserve","reserve","unreserve(2)","reserve"]',
        output: '[1, 2, null, 2]',
      },
    ],
    difficulty: 'medium',
    estMin: 18,
    tags: ['heap', 'design', 'simulation'],
    hints: [
      'Initialize a min-heap with seats 1 through n.',
      'reserve() pops and returns the smallest seat.',
      'unreserve(seat) pushes the seat back into the min-heap.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Server Load Balancer',
    prompt:
      'A load balancer assigns tasks to the least loaded server. ' +
      'Given n servers and tasks with processing times, each task starts when the earliest available server is free. ' +
      'Return the index of the server that handled the most tasks.',
    constraints: '1 <= n <= 10^5, 1 <= tasks.length <= 10^5, 1 <= tasks[i] <= 10^5',
    examples: [
      {
        input: 'n = 3, tasks = [1,2,3,2,1,2]',
        output: '1',
      },
      {
        input: 'n = 2, tasks = [2,2,3,3]',
        output: '[0,1]',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['heap', 'simulation', 'arrays'],
    hints: [
      'Use two heaps: one for free servers (min-heap by index), one for busy servers (min-heap by free time).',
      'At each task arrival time, release servers that have finished (free time <= current time) to the free heap.',
      'Assign the task to the free server with the smallest index.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Deviation Minimizer',
    prompt:
      'A statistician wants to minimize the deviation (max - min) of an array by repeatedly doubling any element ' +
      'or halving any even element. ' +
      'Given an integer array nums, return the minimum possible deviation after any number of operations.',
    constraints: '2 <= nums.length <= 5 * 10^4, 1 <= nums[i] <= 10^9',
    examples: [
      {
        input: 'nums = [1,2,3,4]',
        output: '1',
      },
      {
        input: 'nums = [4,1,5,20,3]',
        output: '3',
      },
    ],
    difficulty: 'medium',
    estMin: 28,
    tags: ['heap', 'greedy', 'math'],
    hints: [
      'First double all odd numbers to make them even. Now you can only halve elements.',
      'Use a max-heap; repeatedly halve the maximum element (if even) and track the current minimum.',
      'The deviation after each operation is max - min; record the minimum deviation seen.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Climbing Contractor',
    prompt:
      'A building contractor is climbing a series of buildings and can either jump for free or use bricks and ladders. ' +
      'Ladders cover any height difference; bricks cover height difference d, consuming d bricks. ' +
      'Given heights, bricks, and ladders, return the furthest building index reachable.',
    constraints: '1 <= heights.length <= 10^5, 0 <= bricks <= 10^9, 0 <= ladders <= heights.length',
    examples: [
      {
        input: 'heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1',
        output: '4',
      },
      {
        input: 'heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2',
        output: '7',
      },
    ],
    difficulty: 'medium',
    estMin: 22,
    tags: ['heap', 'greedy', 'arrays'],
    hints: [
      'At each upward jump, tentatively use a ladder. If you have more ladder assignments than ladders, swap the smallest one for bricks.',
      'A min-heap tracks the smallest ladder-assigned jump so far.',
      'If you cannot afford the bricks for the smallest swap, you cannot proceed further.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Elite Squad Selector',
    prompt:
      'A talent scout maximizes team performance, defined as the sum of speeds multiplied by the minimum efficiency on the team, ' +
      'using at most k engineers. ' +
      'Given speed and efficiency arrays and k, return the maximum performance mod 10^9+7.',
    constraints: '1 <= n <= 10^5, 1 <= speed[i] <= 10^5, 1 <= efficiency[i] <= 10^8, 1 <= k <= n',
    examples: [
      {
        input: 'n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2',
        output: '60',
        explanation: 'Pick engineers with efficiency [10,5] -> speed sum 12 * min_eff 5 = 60.',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['heap', 'greedy', 'sorting'],
    hints: [
      'Sort engineers by efficiency descending. For each engineer as the "minimum efficiency" in the group, pick the k highest speeds from those already seen.',
      'A min-heap of size k maintains the top-k speeds seen so far. Remove the smallest when size exceeds k.',
      'Track the running speed sum; performance = speedSum * currentEfficiency.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The K-Closest Sorted Selector',
    prompt:
      'A search engine returns the k elements in a sorted array closest to a query value x. ' +
      'Given a sorted integer array arr, and integers k and x, return the k closest elements to x, sorted ascending.',
    constraints: '1 <= k <= arr.length <= 10^4, 1 <= k <= arr.length, -10^4 <= arr[i], x <= 10^4',
    examples: [
      {
        input: 'arr = [1,2,3,4,5], k = 4, x = 3',
        output: '[1,2,3,4]',
      },
      {
        input: 'arr = [1,2,3,4,5], k = 4, x = -1',
        output: '[1,2,3,4]',
      },
    ],
    difficulty: 'medium',
    estMin: 20,
    tags: ['heap', 'binary-search', 'two-pointers'],
    hints: [
      'Binary search for x in arr. Then use two pointers expanding outward from that position.',
      'At each step, include the closer of the two candidates; in case of a tie, prefer the smaller element.',
      'Alternatively, binary search for the optimal window start: the window [i, i+k-1] minimises |arr[i] - x| vs |arr[i+k] - x|.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Profit Schedule Maximizer',
    prompt:
      'A freelancer books jobs to maximize earnings. Each job has a start time, end time, and profit. ' +
      'Jobs cannot overlap. Given jobs as [startTime, endTime, profit], return the maximum total profit.',
    constraints: '1 <= jobs.length <= 5 * 10^4, 1 <= startTime < endTime <= 10^9, 1 <= profit <= 10^4',
    examples: [
      {
        input: 'startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]',
        output: '120',
      },
      {
        input: 'startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]',
        output: '150',
      },
    ],
    difficulty: 'medium',
    estMin: 28,
    tags: ['heap', 'dynamic-programming', 'sorting', 'binary-search'],
    hints: [
      'Sort jobs by start time. Use a min-heap (by end time) to track the best achievable profit among completed jobs.',
      'For each job, pop all jobs from the heap that have ended before the current start time.',
      'dp[current job] = profit[current] + max(profit of any completed job), tracked via the heap.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Grid Explorer',
    prompt:
      'A drone navigates an n x n grid where each cell has an elevation. The drone can move to adjacent cells ' +
      'only if the current time t >= both cell elevations (water rises uniformly). ' +
      'Find the minimum time t needed to swim from (0,0) to (n-1, n-1).',
    constraints: '1 <= n <= 50, 0 <= grid[i][j] < n^2, all values are unique',
    examples: [
      {
        input: 'grid = [[0,2],[1,3]]',
        output: '3',
      },
      {
        input: 'grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]',
        output: '16',
      },
    ],
    difficulty: 'medium',
    estMin: 25,
    tags: ['heap', 'dijkstra', 'bfs', 'binary-search'],
    hints: [
      'Use a modified Dijkstra: the "cost" to reach a cell is the maximum elevation encountered on the path.',
      'A min-heap stores (max_elevation_so_far, row, col). Always process the cell with the smallest max elevation.',
      'The answer is the max elevation when you first reach (n-1, n-1).',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HEAP — 8 hard
  // ─────────────────────────────────────────────────────────────────────────────
  {
    patternSlug: 'heap',
    title: 'The Live Median Analyst',
    prompt:
      'A financial system tracks a live feed of transaction values and must answer median queries at any point. ' +
      'Implement a MedianFinder class with addNum(int num) and findMedian() that returns the median of all added numbers.',
    constraints: '-10^5 <= num <= 10^5, findMedian is called at least once, at most 5 * 10^4 operations',
    examples: [
      {
        input: 'addNum(1), addNum(2), findMedian(), addNum(3), findMedian()',
        output: '1.5, 2.0',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['heap', 'design', 'data-stream'],
    hints: [
      'Use a max-heap for the lower half and a min-heap for the upper half of the stream.',
      'Ensure the two heaps are balanced: sizes differ by at most 1, and every element in the lower heap <= every element in the upper heap.',
      'The median is the top of the larger heap, or the average of both tops when sizes are equal.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Meeting Room Allocator',
    prompt:
      'A conference center allocates meeting rooms by assigning each new meeting to the room that became free earliest ' +
      '(by end time). If tied, pick the room with the smallest index. ' +
      'Given n rooms and an array meetings [start, end], return the room that held the most meetings.',
    constraints: '1 <= n <= 100, 1 <= meetings.length <= 10^5, 0 <= start < end <= 5 * 10^5',
    examples: [
      {
        input: 'n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]',
        output: '0',
      },
      {
        input: 'n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]',
        output: '1',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['heap', 'simulation', 'sorting'],
    hints: [
      'Sort meetings by start time. Use a min-heap of free rooms (by index) and a min-heap of busy rooms (by end time).',
      'When a meeting starts, release all rooms with end time <= start to the free heap.',
      'If no room is free, delay the meeting to the earliest room release time and assign that room.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Capital Venture Selector',
    prompt:
      'An entrepreneur maximizes final capital by completing at most k projects sequentially. ' +
      'She can only start a project if current capital >= project capital requirement. ' +
      'Given k, w (initial capital), capitals, and profits arrays, return the maximized capital.',
    constraints: '1 <= k <= 10^5, 0 <= w <= 10^9, n == capitals.length == profits.length <= 10^5',
    examples: [
      {
        input: 'k = 3, w = 0, profits = [1,2,3], capitals = [0,1,1]',
        output: '6',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['heap', 'greedy', 'sorting'],
    hints: [
      'Sort projects by capital requirement. Maintain a pointer for projects that are now affordable.',
      'Push all newly affordable projects (capital <= w) into a max-heap by profit.',
      'Repeat k times: pop the highest profit from the heap and add it to w.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Skyline Silhouette Builder',
    prompt:
      'A city planner generates a skyline silhouette from a list of buildings. ' +
      'Each building is [left, right, height]. ' +
      'Return the skyline as a list of [x, height] key points where the outline changes.',
    constraints: '1 <= buildings.length <= 10^4, 0 <= left < right <= 2^31 - 1, 1 <= height <= 2^31 - 1',
    examples: [
      {
        input: 'buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]',
        output: '[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['heap', 'sweep-line', 'sorting'],
    hints: [
      'Create events for each building: (left, -height) for start and (right, height) for end. Sort all events.',
      'Use a max-heap of active building heights. Process events in order; add height on start, remove on end.',
      'Whenever the max height changes after an event, record the current x and new max height as a key point.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Minimum Grid Traveler',
    prompt:
      'A rover moves through a grid of cells, each requiring a visit token of value equal to the cell. ' +
      'The rover can move to any unvisited adjacent cell (4-directional). ' +
      'Find the minimum number of cells to visit to get from (0,0) to (m-1,n-1), ' +
      'where a cell is visitable only if all cells in the same column above it or same row to its left have been visited.',
    constraints: '1 <= m, n <= 10^5, m * n <= 10^5, 1 <= grid[i][j] <= 10^5',
    examples: [
      {
        input: 'grid = [[3,4],[6,5]]',
        output: '4',
        explanation: 'Visit [0][0],[0][1],[1][1] = 3 cells.',
      },
    ],
    difficulty: 'hard',
    estMin: 50,
    tags: ['heap', 'bfs', 'greedy'],
    hints: [
      'Use a min-heap (priority queue) on (visited_count, row, col). Always expand the state with the fewest cells visited.',
      'A cell (r, c) becomes newly visitable when (r-1, c) or (r, c-1) is visited.',
      'Track visited cells with a set; the first time you reach (m-1,n-1) gives the minimum count.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Network Delay Oracle',
    prompt:
      'A network engineer computes the time until all nodes receive a signal broadcast from a source node. ' +
      'Given a list of directed weighted edges times[i] = [u, v, w] and n nodes, find how long it takes for ' +
      'all nodes to receive the signal starting from node k. Return -1 if unreachable.',
    constraints: '1 <= n <= 100, 1 <= times.length <= 6000, 1 <= k <= n',
    examples: [
      {
        input: 'times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2',
        output: '2',
      },
      {
        input: 'times = [[1,2,1]], n = 2, k = 2',
        output: '-1',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['heap', 'dijkstra', 'graphs'],
    hints: [
      'This is a single-source shortest path problem. Which algorithm is standard for non-negative weights?',
      'Run Dijkstra from node k using a min-heap of (distance, node). Relax edges greedily.',
      'The answer is the maximum shortest-path distance across all nodes; return -1 if any node is unreachable.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Weighted Job Auctioneer',
    prompt:
      'An auctioneer maximizes revenue by bidding on non-overlapping jobs. ' +
      'Jobs have start and end times and values. A set of jobs is valid if no two overlap. ' +
      'Given arrays startTime, endTime, and profit, return the maximum total profit from non-overlapping jobs.',
    constraints: '1 <= jobs.length <= 5 * 10^4, 1 <= startTime[i] < endTime[i] <= 10^9, 1 <= profit[i] <= 10^4',
    examples: [
      {
        input: 'startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]',
        output: '120',
        explanation: 'Jobs (1,3,50) and (3,6,70) are non-overlapping.',
      },
    ],
    difficulty: 'hard',
    estMin: 40,
    tags: ['heap', 'dynamic-programming', 'binary-search', 'sorting'],
    hints: [
      'Sort jobs by start time. Use dp[i] = max profit using jobs from index i onward.',
      'For each job i, either skip it (dp[i+1]) or take it and find the next non-overlapping job via binary search on end times.',
      'A segment tree or sorted structure on (end_time, max_profit) enables efficient range max queries.',
    ],
  },
  {
    patternSlug: 'heap',
    title: 'The Obstacle Course Navigator',
    prompt:
      'A rescue robot must navigate a 2D grid where each cell has a danger value. ' +
      'The robot can move right or down each step. ' +
      'The danger of a path is the maximum danger value of any cell visited. ' +
      'Return the minimum possible danger of any path from top-left to bottom-right.',
    constraints: '1 <= m, n <= 100, 1 <= grid[i][j] <= 10^9',
    examples: [
      {
        input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
        output: '5',
        explanation: 'Path 1->3->1->1->1 has maximum 3; path 1->1->5->1->1 has max 5; path 1->1->1->2->1 has max 4. Minimum is 3.',
      },
      {
        input: 'grid = [[1,2,3],[4,5,6]]',
        output: '5',
      },
    ],
    difficulty: 'hard',
    estMin: 35,
    tags: ['heap', 'dijkstra', 'dynamic-programming'],
    hints: [
      'Use a min-heap where each entry is (max_danger_so_far, row, col).',
      'Expand greedily to minimize the maximum danger encountered — classic Dijkstra-style minimax path.',
      'When you first reach (m-1, n-1), the associated max_danger is the answer.',
    ],
  },
]
