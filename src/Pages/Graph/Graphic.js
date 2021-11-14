import React from 'react';
import styled from 'styled-components';
import { VictoryChart, VictoryArea } from 'victory';
import { UserContext } from '../../Context/UserContext';
import Loading from '../../Components/Loading/Loading';

const Graps = styled.div`
  display: grid;
  gap: 2rem;
  background: #e4e5e6;
  border-radius: 0.6rem;

  div {
    height: 15rem;
    width: 100%;
  }
`;

const Graphic = () => {
  const { grapic, Converter } = React.useContext(UserContext);
  const [graph, setGraph] = React.useState(null);

  React.useEffect(() => {
    if (grapic) {
      const elemets = grapic.map(({ main, dt_txt }) => {
        return {
          x: new Date(dt_txt)
            .toLocaleTimeString('en-US', { hour12: false })
            .replace(':00', ''),
          y: Number(Converter(main.temp).slice(0, 2)),
        };
      });
      setGraph(elemets);
    }
  }, [grapic, Converter]);

  if (graph)
    return (
      <Graps>
        <VictoryChart>
          <VictoryArea
            data={graph}
            y0={(d) => d.y - 0}
            style={{
              data: {
                fill: '#252525',
                fillOpacity: 0.7,
                stroke: '#252525',
                strokeWidth: 3,
              },
            }}
          />
        </VictoryChart>
      </Graps>
    );
  return <Loading />;
};

export default Graphic;
