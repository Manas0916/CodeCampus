import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Telegram = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <div className='container'>
        <div className='container my-5 pt-5 text-start'>
            <h2 style={{color: props.mode=== 'dark'? 'white' : 'black' }}><b><strong>Top Telegram Channels For Job Updates</strong></b></h2>
            <br/>
        </div>
        <div className='container my-2 mb-5 pb-5 text-start'>
            <ul className="list-group">
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/goyalarsh" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Arsh Goyal</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/offcampus_phodenge" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Offcampus Phodenge</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/internfreak" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Intern Freak</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/geeksforgeeks_official" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>GeeksforGeeks</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/techwithmukulcode" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Tech with Mukul Code</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/TechProgramMind_official" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Tech Program Mind</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/codeforces_official" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Codeforces</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/premiumCSE" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Premium CSE</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/Competitive_Programming_tuf" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Competitive Programming TUF</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/training_internship" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Training Internship</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/jobxx" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Jobxx</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/career_page_90" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Career Page 90</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/realanujbhaiya" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Anuj Bhaiya</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/jobopportunities2" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Job Opportunities</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/competitiveprogrammingsolution" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Competitive Programming Solution</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link className='link' to="https://t.me/tnpofficer" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'#ffc007':'#669cd9'}}>Tnp Officer</Link></li>
            </ul>
        </div>
    </div>
  );
}
export default Telegram;