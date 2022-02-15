import React, { ReactElement } from 'react';
import Card from 'react-animated-3d-card';
import meB from '../assets/imgs/meB.png';
import generateGradient from '../utils/generateGradient';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <main
      className="d-flex justify-content-center align-items-center"
      style={{ width: '100%', height: '100vh', background: generateGradient() }}
    >
      <div>
        <Card
          style={{
            background: generateGradient(),
            width: '20rem',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        >
          <div>
            <div>
              <h1 className="text-center mt-4" style={{ fontSize: '20px' }}>
                PageNotAvailable
              </h1>
              <h3 className="text-center" style={{ fontSize: '16px' }}>
                go to home page
              </h3>
            </div>
            <div style={{ marginTop: '-100px' }}>
              <img src={meB} className="w-100" />
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default NotFoundPage;
