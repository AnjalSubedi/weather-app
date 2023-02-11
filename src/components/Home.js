import react from 'react';
import ChooseStateComponents from './Choosestate';

const HomeComponents = ()=>{ 
    return (
        <>
            <div className='homeWrap'>
                <div className='weatherSection'>
                    LeftComponents 
                    <div className='rightSide'>
                       <ChooseStateComponents/>
                        WeekInfoCardComponents <br/>
                        HumidityComponents 
                    </div>
                </div>
            </div>
        </>
    )



}
export default HomeComponents;

