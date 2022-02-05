import React, { ReactElement } from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import theme from '../../../../styles/themePrimary';

// 'Vertical timeline ref: https://stephane-monnot.github.io/react-vertical-timeline/#/'
//
const CareerTimeline = (): ReactElement => {
    const careerData = [
        {
            title: 'Software developer student',
            company: {
                name: 'College',
                link: '',
                city: 'Winnipeg',
                province: 'Manitoba',
            },
            start: '9/20/2020',
            end: '8/20/2021',
            description: null,
        },
        {
            title: 'Web developer',
            company: {
                name: 'Rally the Locals',
                link: 'https://www.rallythelocals.com',
                city: 'Winnipeg',
                province: 'Manitoba',
            },
            start: '6/20/2021',
            end: '8/20/2021',
            description: null,
        },
        {
            title: 'Application developer',
            company: {
                name: 'Pollard Banknote Ltd.',
                link: 'https://www.pollardbanknote.com',
                city: 'Winnipeg',
                province: 'Manitoba',
            },
            start: '1/10/2022',
            end: null,
            description: null,
        },
    ];

    return (
        <VerticalTimeline>
            {careerData.map((data, key) => {
                return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'transparent',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid ' + theme.colorNight,
                        }}
                        key={key}
                        date={
                            data.start +
                            ' - ' +
                            (data.end === null ? 'Present' : data.end)
                        }
                        iconStyle={{
                            background: theme.colorDark,
                            color: '#fff',
                        }}
                    >
                        <h4 className="vertical-timeline-element-title">
                            {data.title + ' at ' + data.company.name}
                        </h4>
                        <div className="vertical-timeline-element-subtitle">
                            {data.company.city + ' ' + data.company.province}
                        </div>
                        <p>{data.description}</p>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default CareerTimeline;
