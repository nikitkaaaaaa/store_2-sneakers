import React from 'react'
import ContentLoader from "react-content-loader";
const Skeleton = ({ index}) => {
  return (
    <div>
        <ContentLoader
            key={index}
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 400 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
                >
            <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />
            <rect x="0" y="315" rx="2" ry="2" width="300" height="15" />
            <rect x="0" y="341" rx="2" ry="2" width="225" height="15" />
            <rect x="0" y="370" rx="2" ry="2" width="125" height="25" />
            <rect x="261" y="370" rx="2" ry="2" width="41" height="25" />
        </ContentLoader>
    </div>
  )
}

export default Skeleton
