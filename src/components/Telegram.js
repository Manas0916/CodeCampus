import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Telegram = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <div className='container'>
        <div className='container my-3 text-start'>
            <h2><b><strong>Top Telegram Channels For Job Updates</strong></b></h2>
            <br/>
            <ul className="list-group">
                <li className="list-group-item"><Link to="https://t.me/goyalarsh" target='_blank' rel="noreferrer">Arsh Goyal</Link></li>
                <li className="list-group-item"><Link to="https://t.me/offcampus_phodenge" target='_blank' rel="noreferrer">Offcampus Phodenge</Link></li>
                <li className="list-group-item"><Link to="https://t.me/internfreak" target='_blank' rel="noreferrer">Intern Freak</Link></li>
                <li className="list-group-item"><Link to="https://t.me/geeksforgeeks_official" target='_blank' rel="noreferrer">GeeksforGeeks</Link></li>
                <li className="list-group-item"><Link to="https://t.me/techwithmukulcode" target='_blank' rel="noreferrer">Tech with Mukul Code</Link></li>
                <li className="list-group-item"><Link to="https://t.me/TechProgramMind_official" target='_blank' rel="noreferrer">Tech Program Mind</Link></li>
                <li className="list-group-item"><Link to="https://t.me/codeforces_official" target='_blank' rel="noreferrer">Codeforces</Link></li>
                <li className="list-group-item"><Link to="https://t.me/premiumCSE" target='_blank' rel="noreferrer">Premium CSE</Link></li>
                <li className="list-group-item"><Link to="https://t.me/Competitive_Programming_tuf" target='_blank' rel="noreferrer">Competitive Programming TUF</Link></li>
                <li className="list-group-item"><Link to="https://t.me/training_internship" target='_blank' rel="noreferrer">Training Internship</Link></li>
                <li className="list-group-item"><Link to="https://t.me/jobxx" target='_blank' rel="noreferrer">Jobxx</Link></li>
                <li className="list-group-item"><Link to="https://t.me/career_page_90" target='_blank' rel="noreferrer">Career Page 90</Link></li>
                <li className="list-group-item"><Link to="https://t.me/realanujbhaiya" target='_blank' rel="noreferrer">Anuj Bhaiya</Link></li>
                <li className="list-group-item"><Link to="https://t.me/jobopportunities2" target='_blank' rel="noreferrer">Job Opportunities</Link></li>
                <li className="list-group-item"><Link to="https://t.me/competitiveprogrammingsolution" target='_blank' rel="noreferrer">Competitive Programming Solution</Link></li>
                <li className="list-group-item"><Link to="https://t.me/tnpofficer" target='_blank' rel="noreferrer">Tnp Officer</Link></li>
            </ul>
        </div>
    </div>
  );
}
export default Telegram;