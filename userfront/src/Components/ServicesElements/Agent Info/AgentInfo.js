import React from 'react'

const AgentInfo = () => {
    return (
        <div className='AgentInfoContainer'>
            <div className='InfoContent'>.
                <div className='Column1'>
                    <img className='ProfilImg'> </img>
                    <button className='BtnDemande'></button>
                </div>
                <div className='Column2'>
                    <h1 className='NameContent'></h1>
                    <h2 className='ServicesContent'></h2>
                    <span className ="GeneralInfo"></span>
                    <span className ="GeneralInfo"></span>
                    <span className ="GeneralInfo"></span>
                    <span className ="GeneralInfo"></span>
                    <span className ="GeneralInfo"></span>
                </div>
            </div>

            <div className='CommentContent'>
                <div className='Comment'>
                    <div className ='InfoComment'>
                        <img src='' className='ImgComment'/>
                        <span className='NameComment'></span>
                    </div>
                    <span className='Commentaire'></span>
                </div>
                <div className='AddComment'>
                    <form>
                        <input type='text' className='InputText'/>
                        <input type='submit' className='InputBtn'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AgentInfo