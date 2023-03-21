import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Youtube = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <div className='container'>
        <div className='container my-5 pt-5 text-start'>
            <h2 style={{color: props.mode=== 'dark'? 'white' : 'black' }}><b><strong>Top YouTube Channels For CS Students</strong></b></h2>
        </div>
        <div className='container mt-1 mb-5 pb-5 text-start'>
            <ul className="list-group">
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@ApnaCollegeOfficial" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Apna College</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@JennyslecturesCSIT" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Jenny's Lectures CS IT</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@CodeWithHarry" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>CodeWithHarry</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@AnujBhaiya" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Anuj Bhaiya</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@LoveBabbar" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Love Babbar</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@GateSmashers" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Gate Smashers</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@CodeHelp" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>CodeHelp - by Babbar</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@striver_79" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Striver</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@takeUforward" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>take U forward</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@ArshGoyal" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Arsh Goyal</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@GitupwithNewton" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Git-up with Newton</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@TheAdityaVerma" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Aditya Verma</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@KeertiPurswani" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Keerti Purswani</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@GeeksforGeeksVideos" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>GeeksforGeeks</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@codefromscratch-keertipurswani" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Code From Scratch - Keerti Purswani</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@codingcommunitynewtonschoo8582" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Coding Community | Newton School</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@CollegeWallahbyPW" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>College Wallah</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@javascriptmastery" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>JavaScript Mastery</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@freecodecamp" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>freeCodeCamp.org </Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@FrazMohammad/videos" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Fraz </Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@NishantChahar11/videos" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Nishant Chahar </Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://www.youtube.com/@KunalKushwaha/videos" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Kunal Kushwaha</Link></li>
            </ul>
        </div>
    </div>
  );
}
export default Youtube;