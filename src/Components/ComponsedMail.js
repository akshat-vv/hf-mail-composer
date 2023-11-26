import React from 'react'

function ComponsedMail({emailTo='asda',defects,body}) {

  return (
    <div>
        <div className='d-flex align-items-center justify-content-center'>
            <p>To:</p>
            <p>akshatv@amdocs.com</p>
            <p>{emailTo}</p>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
            <p>Subject:</p>
            <p>HF APPROVAL | SIT25 | 102,123,123 | Defect Number</p>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
            <p>Body:</p>
            <p>Hi Shaji,<br/>
                Please approve below HF for defect<br/>
                AEM:212<br/>
                DEXPS:123<br/>
                DEXP:12344<br/>
            </p>
        </div>
    </div>
  )
}

export default ComponsedMail