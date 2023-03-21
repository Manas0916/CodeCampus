import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Youtube = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <div className='container'>
        <div className='container my-3 text-start'>
            <h2><b><strong>Top YouTube Channels For CS Students</strong></b></h2>
            <br/>
            <ul className="list-group">
                <li className="list-group-item"><Link to="https://www.youtube.com/@ApnaCollegeOfficial" target='_blank' rel="noreferrer">Apna College</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@JennyslecturesCSIT" target='_blank' rel="noreferrer">Jenny's Lectures CS IT</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@CodeWithHarry" target='_blank' rel="noreferrer">CodeWithHarry</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@AnujBhaiya" target='_blank' rel="noreferrer">Anuj Bhaiya</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@LoveBabbar" target='_blank' rel="noreferrer">Love Babbar</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@GateSmashers" target='_blank' rel="noreferrer">Gate Smashers</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@CodeHelp" target='_blank' rel="noreferrer">CodeHelp - by Babbar</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@striver_79" target='_blank' rel="noreferrer">Striver</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@takeUforward" target='_blank' rel="noreferrer">take U forward</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@ArshGoyal" target='_blank' rel="noreferrer">Arsh Goyal</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@GitupwithNewton" target='_blank' rel="noreferrer">Git-up with Newton</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@TheAdityaVerma" target='_blank' rel="noreferrer">Aditya Verma</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@KeertiPurswani" target='_blank' rel="noreferrer">Keerti Purswani</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@GeeksforGeeksVideos" target='_blank' rel="noreferrer">GeeksforGeeks</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@codefromscratch-keertipurswani" target='_blank' rel="noreferrer">Code From Scratch - Keerti Purswani</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@codingcommunitynewtonschoo8582" target='_blank' rel="noreferrer">Coding Community | Newton School</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@CollegeWallahbyPW" target='_blank' rel="noreferrer">College Wallah</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@javascriptmastery" target='_blank' rel="noreferrer">JavaScript Mastery</Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@freecodecamp" target='_blank' rel="noreferrer">freeCodeCamp.org </Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@FrazMohammad/videos" target='_blank' rel="noreferrer">Fraz </Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@NishantChahar11/videos" target='_blank' rel="noreferrer">Nishant Chahar </Link></li>
                <li className="list-group-item"><Link to="https://www.youtube.com/@KunalKushwaha/videos" target='_blank' rel="noreferrer">Kunal Kushwaha</Link></li>
            </ul>
        </div>
    </div>
  );
}
export default Youtube;