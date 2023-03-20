import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const PBC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <div className='container'>
        <div className='container my-3 text-start'>
            <h2><u>All Important Sheets for Cracking Any Product Based Companies</u></h2>
            <br/>
            <ul className="list-group">
                <li className="list-group-item"><Link to="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/#Arrays" target='_blank' rel="noreferrer">Love Babbar's SDE Sheet</Link></li>
                <li className="list-group-item"><Link to="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" target='_blank' rel="noreferrer">Most famous Striver's SDE Sheet</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/problem-list/top-interview-questions/" target='_blank' rel="noreferrer">Top Interview Questions on Leetcode</Link></li>
                <li className="list-group-item"><Link to="https://leetcode.com/problem-list/top-100-liked-questions/" target='_blank' rel="noreferrer">Top 100 Questions on Leetcode</Link></li>
                <li className="list-group-item"><Link to="http://surl.li/fprxi" target='_blank' rel="noreferrer">GFG SDE Sheet</Link></li>
                <li className="list-group-item"><Link to="https://www.geeksforgeeks.org/facebookmeta-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer">Facebook(Meta) SDE Sheet: Interview Questions and Answers</Link></li>
                <li className="list-group-item"><Link to="https://www.geeksforgeeks.org/amazon-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer">Amazon SDE Sheet: Interview Questions and Answers</Link></li>
                <li className="list-group-item"><Link to="https://www.geeksforgeeks.org/apple-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer">Apple SDE Sheet: Interview Questions and Answers</Link></li>
                <li className="list-group-item"><Link to="https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer">Netflix SDE Sheet: Interview Questions and Answers</Link></li>
                <li className="list-group-item"><Link to="https://www.geeksforgeeks.org/google-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer">Google SDE Sheet: Interview Questions and Answers</Link></li>

            </ul>
        </div>
    </div>
  );
}

export default PBC;
