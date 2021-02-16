# Tabulation

1. visualize the problem as a table
2. Size and dimension of the table based on inputs (off by one)
3. Initialize the table with default values
4. Seed trivial answer into the table
5. iterate through the table
6. fill further positions based on the current position
    - grid traveler (propagate up / right current value)
    - fib (propagate current in next 2 positions)

# Memoization

1. Make it work (brute force)

-   visualize the problem as a tree
-   identify base case values
-   implement the tree using recursion
-   test it

2. Make it efficient

-   add a memo object
-   add a base case to return memo values

# General Tips

-   Notice any overlapping subproblems
    -   input and types
-   Decide what is the trivially smallest input
-   think recursively and use Memoization
-   think iteratively to use Tabulation
-   Draw a strategy first!!! (slowdown and draw the process)
