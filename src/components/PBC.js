import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const PBC = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <div className='container'>
        <div className='container my-5 pt-5  text-start'>
            <h2 style={{color: props.mode=== 'dark'? 'white' : 'black' }}><b> All Important Sheets for Cracking Any Product Based Companies </b></h2>
            <br/>
            <ul className="list-group">
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/#Arrays" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Love Babbar's SDE Sheet</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Most famous Striver's SDE Sheet</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://leetcode.com/problem-list/top-interview-questions/" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Top Interview Questions on Leetcode</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://leetcode.com/problem-list/top-100-liked-questions/" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Top 100 Questions on Leetcode</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="http://surl.li/fprxi" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>GFG SDE Sheet</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.geeksforgeeks.org/facebookmeta-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Facebook(Meta) SDE Sheet: Interview Questions and Answers</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.geeksforgeeks.org/amazon-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Amazon SDE Sheet: Interview Questions and Answers</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.geeksforgeeks.org/apple-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Apple SDE Sheet: Interview Questions and Answers</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Netflix SDE Sheet: Interview Questions and Answers</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.geeksforgeeks.org/google-sde-sheet-interview-questions-and-answers/" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Google SDE Sheet: Interview Questions and Answers</Link></li>
            </ul>
        </div>
    </div>
  );
}
export default PBC;
