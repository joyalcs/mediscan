import React from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = () => {
    return (
        <div style={{ position: 'absolute', width: '500px', height: '500px', left: '137px', top: '262px' }}>
            <Lottie
                animationData={null} // This will be updated dynamically
                path="https://assets8.lottiefiles.com/private_files/lf30_fe507ybk.json" // URL of the Lottie JSON file
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default LottieAnimation;
