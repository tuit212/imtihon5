import React , {useEffect} from 'react'
import './PreLoading.scss'
import { preLoaderAnim } from './Animations'

function PreLoading() {

    useEffect(() => {
        preLoaderAnim()
    }, [])

    
    return (
        <div className='preLoading'>
            <div className="texts-container">
                <span>Assalom</span>
                <span>Alaykum</span>
                <span>Xush kelibsiz</span>
            </div>
        </div>
    )
}

export default PreLoading
