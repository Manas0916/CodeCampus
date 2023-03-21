import React, {useEffect} from 'react';
import Resumetemplate from './images/resume-template.png'
const Resume = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <>
        <div className='container mb-3 mt-5 pt-5 text-start'>
            <h2 style={{color: props.mode=== 'dark'?'white':'black'}}><b><strong> Resume Building Guide: For Coding Interviews</strong></b></h2>
        </div>
        <div className="container text-start">
            <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'}`}>
                <br/>
                Are you confused on why you are not even shortlisted for the interview  despite mentioning 3 different
                programming languages, multiple pages of description, and much more quality things?
            </p>
            <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'}`}>
                <br />
                But <span ><strong style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}>Dont Worry</strong></span> , 
                after reading this guide, we assure you that this is unlikely to happen the next time you apply
                for a job!
            </p>
            <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'}`}>
                <br />
                A resume must be built according to a specific job opening and the company. Resumes can have different <br />
                formats based on the profile for which you are applying, the company to which you are applying, etc. <br />
                 Here, we will discuss a format that is suitable for the role of <b><strong>Software Developers</strong></b>.
            </p>
            <p className={`h5 ${props.mode==='dark'?' text-light':'text-muted'}`}> <br/>Below are some of the key points that everyone should keep in mind while writing a Resume:</p>
            <ul style={{color: props.mode==='dark'?'white':'black'}}>
                <br />
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Customizing Resume : </b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>The most common mistakes everyone makes while writing a resume is to not customizing it as per the job requirements. <br /> It definitely requires extra time, but it is worth it. If you are applying for the role of Java Developer, and your resume doesn't <br /> contain your proficiency in Java then you are most likely to get rejected straight away.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Name of the resume file : </b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>We have seen some really cool names of resume files like, <i> proCoder.pdf ,
                    gamer360.pdf , abc.pdf , untitled.pdf. </i> Are you <br /> one of these? If yes , you might want to reconsider your
                    filename again. Firstly, some cool and funky names like these will  <br /> definitely ruin your first impression.
                    Secondly, these names don't convey any useful information. A good resume file name <br /> can be 
                    <i style={{color: "#0393e3"}}> “ arun_singh_java_developer.pdf ” </i>, this file name contains the name of the applicant and his job title. The
                    recruiter <br /> now has an idea about Arun before even opening his resume.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Single Page Resume : </b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>Recruiters do not have a lot of time to read everything that is written in a resume of 2-3 pages, they review a resume for <br />
                    20-30 seconds. So, what do you think they will prioritize? The answer is “Work Experience”. As a fresher can you put your <br />  
                    work  experience in one page or half page? Obviously yes. So, keep your resume short up to a single page. Also, when you are <br /> 
                    writing less then you will write only important things about you.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Don't include Career Objective :</b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>This is also a common mistake done by job aspirants. A career objective generally read as, “Objective: To utilize my knowledge,<br /> 
                    skills, and abilities as a Software Engineer”. Now, what does this sentence refer to? The above quoted sentence, basically states  <br /> 
                    the position you are applying for and your interests, which the recruiter already knows. So, writing a career objective will only <br /> 
                    consume extra space in your resume. There is nothing wrong with including a career objective but avoiding it will save you space <br /> 
                    for something more important.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Include Accomplishments :</b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>Making your resume accomplishment-oriented instead of responsibilities oriented will help recruiters understand your excellence in <br /> 
                    possible areas. Accomplishments state the things you have achieved and how well you have managed your responsibilities.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Count Matters :</b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>Do not misinterpret the meaning of the word count here. Count doesn't refer to the number of experiences or projects or certificates <br /> 
                    you list in your resume. But whatever you write, adding count/figures in terms of your achievement will drive attention and make you <br /> 
                    stand out. For Example, if you have won any competition then do specify this achievement along with your rank. If you have <br /> 
                    developed a website and it's live, mention the count of users you scaled it for.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Avoid Grammatical Mistakes :</b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>Try to avoid any grammatical error in your resume. Do read it a couple of times before submitting it. We recommend using some <br /> 
                    plugins like “Grammarly”.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Mention the relevant keywords : </b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>If you are applying on the job portal of any company or probably have asked someone to refer you. On most of these portals, <br /> 
                    the resume goes through a resume-filtering process where an automated algorithm scans your resume for specific keywords <br /> 
                    related to the job opening. So, try to create your resume by mentioning or highlighting your skills in a way that it covers most of <br /> 
                    these keywords. You can find the relevant keywords in the job description itself. If you are applying for a software developer role, <br /> 
                    some of the most frequent keywords are: Data Structures, Algorithms, Java, React, JavaScript, Problem Solving etc.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>More content, less space :</b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>Use a good resume template, with columns. This will allow you to fit more content on your resume while making it easier to scan for key <br /> 
                    information like company names and titles.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Projects :</b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>Pick your best projects (projects you were an integral part of and remember every ins and outs of it) to list in your resume. <br /> 
                    Secondly, pick those projects which matches with the tech stack specified in the job description. For example, if you are <br />  
                    applying for a Django developer role and you have projects in Ruby on Rails and Django both then mention Django on top of <br />
                    Ruby on Rails even if the Django projects seem less technical to you. You may also list an ongoing project if the project matches <br />  
                    the tech stack of the company you are applying to. This is said because many companies have a resume filtering option. That is <br /> 
                    when you apply for a vacancy on their website your resume passes through an initial keyword matching process before it<br /> 
                    reaches the hiring team.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Additional Experience : </b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>You may also add additional experiences but it will be of benefit to you only when your additional experiences match with the <br /> 
                    position you are applying for. For example, consider that you are applying for a software development role and you have added <br /> 
                    an additional experience of “ Digital Marketer “.This will not seek the attention of the recruiter in any way. But if you add an <br /> 
                    additional experience of “Technical Content Writer” then it will surely credit some score to your resume.</p>
                </li>
                <li >
                    <strong className='h4' style={{color: props.mode==='dark' ?'#ffc007'  :'#cf2d2d'}}><span><b>Do not Fake :</b></span></strong>
                    <p className={`h5 ${props.mode==='dark'?'text-light':'text-muted'} my-3`}>Do not ever fake on a resume. Listing something fake on your resume has a very high chance of getting you into trouble. <br /> 
                    Recruiters always try to ask questions based on the resume. That is, things you have listed you have expertise in.</p>
                </li>
            </ul>
        </div>
        <div className="container  my-5">
            <h4 className='text-muted my-5' ><strong><b style={{color: "#32bacb"}}>Here is the Standard Template which is used by Most of the Software Developers in the industry</b></strong></h4>
            <div className="container">
                <img className='text-centre' src={Resumetemplate} alt="" style={{width: '40%', height:'40%'}}/>
            </div>
            <div className="container">
                <a className={`btn btn-outline-${props.mode==='dark'?'warning':'danger'} btn-lg mx-5 my-4`} target='_blank' style={{BackgroundColor: "#32bacb"}} href="https://www.overleaf.com/latex/templates/jakes-resume-anonymous/cstpnrbkhndn" rel='noreferrer'>Here is the website if you want to Design your Resume &raquo;</a>
            </div>
        </div>
    </>
  );
}

export default Resume;
