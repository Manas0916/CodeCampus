import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const DsaCp = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <div className='container'>
        <p className='h5 text-muted'><br />
            <b style={{color: "#cf2d2d"}}>Important Note : </b> All of the below links contains all Easy to Advance Problems, we recommend solving easy questions first on your own before jumping to the medium and hard Problems.
        </p>
        <div className='container my-3 text-start my-5'>
            <h2><u>Topic-Wise-DSA Problems</u></h2>
            <br/>
            <ul className="list-group">
                <li className="list-group-item"><Link to="https://leetcode.com/tag/array/" target='_blank' rel="noreferrer">Arrays</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/string/" target='_blank' rel="noreferrer">String</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/hash-table/" target='_blank' rel="noreferrer">Hash Table</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/sorting/" target='_blank' rel="noreferrer">Sorting</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/two-pointers/" target='_blank' rel="noreferrer">Two Pointers</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/recursion/" target='_blank' rel="noreferrer">Recursion</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/binary-search/" target='_blank' rel="noreferrer">Binary Search</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/matrix/" target='_blank' rel="noreferrer">Matrix</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/stack/" target='_blank' rel="noreferrer">Stacks</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/queue/" target='_blank' rel="noreferrer">Queues</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/heap-priority-queue/" target='_blank' rel="noreferrer">Heap (Priority Queue)</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/sliding-window/" target='_blank' rel="noreferrer">Sliding Window</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/linked-list/" target='_blank' rel="noreferrer">Linked Lists</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/tree/" target='_blank' rel="noreferrer">Tree</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/binary-tree/" target='_blank' rel="noreferrer">Binary Tree</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/binary-search-tree/" target='_blank' rel="noreferrer">Binary Search Tree</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/graph/" target='_blank' rel="noreferrer">Graph</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/greedy/" target='_blank' rel="noreferrer">Greedy</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/backtracking/" target='_blank' rel="noreferrer">Backtracking</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/dynamic-programming/" target='_blank' rel="noreferrer">Dynamic Programming</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/trie/" target='_blank' rel="noreferrer">Trie</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/tag/segment-tree/" target='_blank' rel="noreferrer">Segment Tree</Link></li>
            </ul>
        </div>
        <div className='container mt-3 mb-5 text-start'>
                <h2><u>DSA and CP Sheets</u></h2>
                <br />
                <ul className="list-group">
                    <li className="list-group-item"><Link to="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" target='_blank' rel="noreferrer">Strivers A to Z Course / Sheet</Link></li>
                    <li className="list-group-item"><Link to="https://docs.google.com/spreadsheets/d/1SBx6ifpBn3TVCQWSzK9ka26glyNTyS-fqn6bfOVaXFE/edit#gid=0" target='_blank' rel="noreferrer">75 Days Challenge Sheet</Link></li>
                    <li className="list-group-item"><Link to="https://cses.fi/problemset/list" target='_blank' rel="noreferrer">CSES ProblemSet</Link></li>
                    <li className="list-group-item"><Link to="https://docs.google.com/spreadsheets/u/0/d/1MGVBJ8HkRbCnU6EQASjJKCqQE8BWng4qgL0n3vCVOxE/htmlview" target='_blank' rel="noreferrer">DSA Sheet by Arsh Goyal (45 days Plan)</Link></li>
                    <li className="list-group-item"><Link to="https://takeuforward.org/interview-experience/strivers-cp-sheet/" target='_blank' rel="noreferrer">Strivers Competitive Programming Sheet</Link></li>
                    <li className="list-group-item"><Link to="https://codeforcesladders.firebaseapp.com" target='_blank' rel="noreferrer">Codeforces Ladder (A2OJ)</Link></li>
                    <li className="list-group-item"><Link to="https://www.spoj.com/problems/classical/" target='_blank' rel="noreferrer">SPOJ</Link></li>
                </ul>
            </div>
    </div>
  );
}

export default DsaCp;