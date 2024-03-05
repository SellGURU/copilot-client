import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
// import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import './PieChart.css';

interface PieChartProps {
    theme ?:string;
    percentage : number;
}

const PieChart:React.FC<PieChartProps> = ({percentage}) => {
    let text;
    if (percentage > 90) {
        text = "Priorities";
    } else if (percentage > 65) {
        text = "High";
    } else if (percentage > 35) {
        text = "Medium";
    } else {
        text = "Low";
    }
    return (      
        <>
        <CircularProgressbar
        value={percentage}
        text={`${text}`}
        circleRatio={0.85}

        styles={{
                // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
            // Path color
            //stroke: percentage > 65 ? `rgba(252, 143, 43, ${percentage / 10})` : percentage > 35 ? `rgba(135, 63, 239, ${percentage / 10})` : `rgba(98, 207, 216, 1) , ${percentage / 10})`,
            stroke: percentage > 90 ? `rgba(255, 62, 93)` : percentage > 65 ? `rgba(252, 143, 43)` : percentage > 35 ? `rgba(135, 63, 239)` : `rgba(98, 207, 216, 1)`,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
            // Rotate the path
            transform: 'rotate(0.575turn)',
            transformOrigin: 'center center',
            
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
            // Trail color
            stroke: 'rgba(79, 186, 240, 0.1)',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            // Rotate the trail
            transform: 'rotate(0.575turn)',
            transformOrigin: 'center center',
            },
            // Customize the text
            text: {
            // Text color
            fill: '#253343',
            // Text size
            fontSize: '16px',
            fontWeight: "600",
            },
            // Customize background - only used when the `background` prop is true
            background: {
            //   fill: '#3e98c7',
            },
        }}
        />

     </>
    )
}
export default PieChart ;