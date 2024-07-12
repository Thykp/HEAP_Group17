import React from 'react';
import '../css/LineGraph.css'; // Import CSS file for styling

const LineGraph = ({ data }) => {
    // Calculate the maximum value in the data array
    const maxDataValue = Math.max(...data);

    return (
        <div className="line-graph">
            <svg viewBox="0 0 100 100" className="graph-svg">
                {/* X-axis */}
                <line x1="0" y1="90" x2="100" y2="90" className="axis" />
                {/* Y-axis */}
                <line x1="10" y1="0" x2="10" y2="100" className="axis" />

                {/* Plot points */}
                {data.map((value, index) => (
                    <circle
                        key={index}
                        cx={(index + 1) * 10}
                        cy={90 - (value / maxDataValue) * 80} // Scale data based on maxDataValue
                        r="2"
                        className="point"
                    />
                ))}

                {/* Connect points with lines */}
                {data.map((value, index) => (
                    index !== 0 && (
                        <line
                            key={index}
                            x1={index * 10}
                            y1={90 - (data[index - 1] / maxDataValue) * 80} // Scale previous data point
                            x2={(index + 1) * 10}
                            y2={90 - (value / maxDataValue) * 80} // Scale current data point
                            className="line"
                        />
                    )
                ))}
            </svg>
        </div>
    );
};

export default LineGraph;
