import React, { ReactElement, HTMLProps } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import theme from "../../../../styles/themePrimary";
import { connect } from "react-redux";
import { IRootState } from "../../../../store";

// 'Vertical timeline ref: https://stephane-monnot.github.io/react-vertical-timeline/#/'
//

interface IProps
  extends HTMLProps<ReactElement>,
    ReturnType<typeof mapStateToProps> {}

const CareerTimeline = ({ className, career }: IProps): ReactElement => {
  return (
    <div className={className}>
      <VerticalTimeline>
        {career.map((data: any, key: number) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
              }}
              contentArrowStyle={{
                borderRight: "7px solid " + theme.colorNight,
              }}
              key={key}
              date={
                data.start + " - " + (data.end === null ? "Present" : data.end)
              }
              iconStyle={{
                background: theme.colorDark,
                color: "#fff",
              }}
            >
              <h4 className="vertical-timeline-element-title">
                <a href={data.company.link} target="_blank">
                  {data.title + " at " + data.company.name}
                </a>
              </h4>
              <div className="vertical-timeline-element-subtitle">
                {data.company.city + " " + data.company.province}
              </div>
              <p>{data.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

const mapStateToProps = ({ myInfo: { career } }: IRootState) => ({
  career,
});

export default connect(mapStateToProps)(CareerTimeline);
