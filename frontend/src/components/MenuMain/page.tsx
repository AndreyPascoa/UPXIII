import React from 'react';
import { Chart } from "react-google-charts";
import Price from '@mdi/react';
import { mdiCash } from '@mdi/js';
import Storage from '@mdi/react';
import { mdiArchive } from '@mdi/js';
import Alert from '@mdi/react';
import { mdiAlertBox } from '@mdi/js';
import Quantity from '@mdi/react';
import { mdiCounter } from '@mdi/js';
import GraphicsCharts from '../GraphicsCharts/page';

const MenuMain = () => {
    return (
        <div >
            <div className="max-w-[1200px] m-auto grid grid-cols-3 gap-4 mt-6 ">
                <div className='flex bg-[#EEE] py-2 px-4 rounded-lg w-[250px]' >
                    <Quantity path={mdiCounter} size={1} color='#18637e' />
                    <span className='ml-3'>Quantidade:  0</span>
                </div>
                <div className='flex bg-[#EEE] py-2 px-4 rounded-lg w-[250px] '>
                    <Storage path={mdiArchive} size={1} color='#18637e' />
                    <span className='ml-3'>Estoque: 0</span>
                </div>
                <div className='flex bg-[#EEE] py-2 px-4 rounded-lg w-[250px] '>
                    <Price path={mdiCash} size={1} color='#18637e' />
                    <span className='ml-3'>Custo: 0</span>
                </div>
                <div className='flex bg-[#EEE] py-2 px-4 rounded-lg w-[250px]'>
                    <Alert path={mdiAlertBox} size={1} color='#18637e' />
                    <span className='ml-3'>Itens necessários: 0</span>
                </div>
            </div>
            <GraphicsCharts />
        </div>
    )
}

export default MenuMain;
