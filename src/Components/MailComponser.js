import React, { useEffect, useState } from 'react';
import './styles.css';

const MailComponser = () => {
    const [header, setHeader] = useState('HF Mail Composer');
    const [error,setError] = useState(false);
    const [env, setEnv] = useState('sit21');
    const [hf, setHf] = useState('');
    const [defect, setDefect] = useState('');
    const [showMail,setShowMail] = useState(false);
    const emailTo = 'SHAJIK@amdocs.com';
    const cc = 'ADDigitalPostProdScrum@int.amdocs.com;AmdocsTesting3IRLT2@amdocs.com'

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // 100% of the viewport height
    };

    const Header = (header) => {
        return (
            <div>
                <h2>{header}</h2>
            </div>
        )
    }

    const EnvSelector = () => {

        return (
            <div className='d-flex justify-content-around'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="sit21" name="flexRadioDefault" id="sit21" checked={env === 'sit21'}
                        onChange={(e) => setEnv(e.target.value)} />
                    <label className="form-check-label" htmlFor="sit21">
                        SIT 21
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value='sit25' name="flexRadioDefault" id="sit25" checked={env === 'sit25'}
                        onChange={(e) => setEnv(e.target.value)} />
                    <label className="form-check-label" htmlFor="sit25">
                        SIT 25
                    </label>
                </div>
            </div>
        )
    }

    const Form = () => {

        return (
            <div className='d-flex flex-column mt-4'>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">HFs</span>
                    <input type="text" className="form-control" placeholder="Aem, Dexps, Dexp" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setHf(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Defects</span>
                    <input type="text" className="form-control"  placeholder="Enter the Defect No." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setDefect(e.target.value)} />
                </div>
            </div>
        )
    }

    const MailFormatter = ({emailTo,env,hf,defect}) => {

        const [composeMail,setComposeMail] = useState(false);
        const [errorMessage,setErrorMessage] = useState(null);
        const ENV = env.toUpperCase();
        const hfArray = hf.split(',');
        const subject = `HF APPROVAL | ${ENV} | ${hf} | ${defect}`;
        // let erroMessage = '';
        const emailBody = `
            Hi Shaji,

            Please approve below Hf on ${ENV} for ${defect}

            AEM: ${hfArray[0]|| ''},
            DEXPS: ${hfArray[1] || ''},
            DEXP: ${hfArray[2] || ''}
        `;

        useEffect(() => {
            // Check for validation and set the error state
            if (hf.trim() === '' || defect.trim() === '') {
                setErrorMessage('Both HF and Defect fields cannot be empty.');
                setComposeMail(false);
            } else {
                setComposeMail(true);
                setErrorMessage('');
            }
        }, [hf, defect]);

        return (
            <div className=''>
                    <div>
                    {composeMail && <a className='btn btn-primary'
                            href={`mailto:${emailTo}?cc=${cc}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`}>Compose Mail</a>}
                    {errorMessage && <p className="text-dark">{errorMessage}</p>}
                    </div>
            </div>
        );
    }



    return (
        <div style={containerStyle} className="container">
            <div className='wrapper col-12 col-md-6'>
                {Header(header)}
                {EnvSelector()}
                {Form()}
                {/* <button className="btn btn-primary" type="button" onClick={()=>setShowMail(true)}>Compose Mail</button> */}
                {MailFormatter({showMail,emailTo,env,hf,defect})}
            </div>
        </div>

    )
}

export default MailComponser