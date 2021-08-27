import React, { useState } from 'react';
// src 안에 이미지는 import 처리
import img1 from '../utils/images/img1.jpg'
import img2 from '../utils/images/img2.jpg'
import image from '../utils/api/image'

const Test8 = () => {
    const [img, setImg] = useState(image)

    return (
        <div>
            <p>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </p>
            <p>
                {/* public 안에 있는 이미지는 바로 사용 가능 */}
                <img src="./images/m0.jpg" alt="" />
                <img src="./images/m1.jpg" alt="" />
            </p>
            <p>
                {/* api 배열 처리 */}
                <img src={img[0].img} />
                <img src={img[1].img} />
                <img src={img[2].img} />
            </p>
        </div>
    );
};

export default Test8;