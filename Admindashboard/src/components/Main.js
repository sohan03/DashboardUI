

import PieComponent from './PieComponent';

import BChart from "./BChart"
import DashedChart from "./DashedChart"
import SmallCard from "./SmallCard"
import BigCard from "./BigCard"
import GraphCards from './GraphCard';
import Dropdown from './Dropdown';
import Datepicker from './Datepicker';
import { useState } from 'react';
import TableCard from './TableCard';







const data1 = [
    // Your first dataset
    {
        month: 'Jan',
        sessions: 20,
    },
    // ...
];

const data2 = [
    // Your second dataset
    {
        month: 'Jan',
        yourOtherDataKey: 30, // Use a different key for the second dataset
    },
    // ...
];



// import { Bar } from 'react-chartjs-2';
// import { BarChart } from './BarChart';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const datas = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];



//Dropdown 
const Main = () => {
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleDurationChange = (event) => {
        setSelectedDuration(Number(event.target.value));
    };
    const handleChannelChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleAgentChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleQueueChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleConversationStatusChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleTimezoneChange = (e) => {
        setSelectedCategory(e.target.value);
    };


    const filteredData = datas.slice(-selectedDuration);
    //Dropdown data
    const durationOptions = [
        { value: 7, label: 'Last 7 Days' },
        { value: 30, label: 'Last 30 Days' },
        { value: 90, label: 'Last 3 Months' },
    ];
    const channelOptions = [
        { value: 'all', label: 'All Channels' },
        { value: 'hi', label: 'hi' },
        { value: 'hello', label: 'hello' },
        // Add more options as needed
    ];
    const AgentOptions = [
        { value: 'all', label: 'All Agents' },
        { value: 'Sohan', label: 'Sohan' },
        { value: 'Pushpa', label: 'Pushpa' },
        // Add more options as needed
    ];
    const QueueOptions = [
        { value: 'all', label: 'All Queues' },
        { value: 'Sales', label: 'Sales' },
        { value: 'Support', label: 'Support' },
        // Add more options as needed
    ];
    const ConversationStatusOptions = [
        { value: 'all', label: 'All Status' },
        { value: 'Answered', label: 'Answered' },
        { value: 'Abondoned', label: 'Abondoned' },
        // Add more options as needed
    ];
    const TimezoneOptions = [
        { value: 'IST', label: 'IST' },
        { value: 'GMT', label: 'GMT' },
        { value: 'UST', label: 'UST' },
        // Add more options as needed
    ];

    return (
        <div className=' min-h-screen px-[25px] pt-[10px] bg-[#f1eeee] pb-[100px]'>
            <div>
                <div className='px-[5px] pt-[1px] bg-[#f1eeee] pb-[10px]'>
                    <div className='flex gap-[0px]'>
                        <div className='mt-[10px] mr-10'>
                            <Dropdown
                                label="Duration"
                                options={durationOptions}
                                selectedValue={selectedDuration}
                                onChange={handleDurationChange}
                            />
                        </div>
                        <div className='mt-[10px] mr-10'>

                            <Dropdown
                                label="Channel"
                                options={channelOptions}
                                selectedValue={selectedCategory}
                                onChange={handleChannelChange}
                            />
                        </div>
                        <div className='mt-[10px] mr-10'>

                            <Dropdown
                                label="Agents"
                                options={AgentOptions}
                                selectedValue={selectedCategory}
                                onChange={handleAgentChange}
                            />
                        </div>
                        <div className='mt-[10px] mr-10'>

                            <Dropdown
                                label="Queue"
                                options={QueueOptions}
                                selectedValue={selectedCategory}
                                onChange={handleQueueChange}
                            />
                        </div>
                        <div className='mt-[10px] mr-10'>

                            <Dropdown
                                label="Conversation Status"
                                options={ConversationStatusOptions}
                                selectedValue={selectedCategory}
                                onChange={handleConversationStatusChange}
                            />
                        </div>
                        <div className='mt-[10px] mr-10'>

                            <Dropdown
                                label="Timezone"
                                options={TimezoneOptions}
                                selectedValue={selectedCategory}
                                onChange={handleTimezoneChange}
                            />
                        </div>
                    </div>
                </div>
           <div className='pr-20'>

                <Datepicker />
           </div>

           



            </div>

            {/* Small Cards function call. */}
            <div className='grid grid-cols-6 gap-[30px] mt-[5px] pt-[50px] pb-[10px] margin'>


                <SmallCard
                    title="ON_QUEUE"
                    value="1"
                    percentage="0.0%"
                />


                <SmallCard
                    title="OFF_QUEUE"
                    value="2"
                    percentage="0.0%"
                />


                <SmallCard
                    title="IDLE"
                    value="3"
                    percentage="0.0%"
                />


                <SmallCard
                    title="INTERACTING"
                    value="1"
                    percentage="0.0%"
                />


                <SmallCard
                    title="COMMUNICATING"
                    value="4"
                    percentage="0.0%"
                />

                <SmallCard
                    title="NOT RESPONDING"
                    value="5"
                    percentage="0.0%"
                />


            </div>
            {/* Graph Cards Function call */}
            <div className='grid grid-cols-4 gap-[40px] mt-[5px] pt-[5px] pb-[1px]'>

                <GraphCards title="Engaged Sessions">
                    {/* Content for the second card */}
                    <div className="w-half pt-3 pr-10">
                        <BChart />
                    </div>
                </GraphCards>

                <GraphCards title="Avg session handle time">
                    {/* Content for the second card */}
                    <div className="w-half pt-3 pl-0 pr-40 ml-0">
                        <BChart />
                    </div>
                </GraphCards>

                <GraphCards title="Avg CSAT">
                    {/* Content for the second card */}
                    <div className="w-half pt-0 pr-30">
                        <DashedChart />
                    </div>
                </GraphCards>

                <GraphCards title="Sentiment Zones">
                    {/* Content for the second card */}
                    <div className="w-half pt-1 pr-10">
                        <PieComponent />
                    </div>
                </GraphCards>

                <BigCard  secondtitle="Incoming Sessions vs Engaged Sessions" thirdtitle="Avg Wait time(sec)">
                    {/* Content for the second card */}
                    <div className="w-half pt-1 pr-10">
                        
                    </div>
                </BigCard>


            
            </div>
           
            

        </div >
    )
}

export default Main   