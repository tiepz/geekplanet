import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 100px 0;
`;

const styles = {
  cls1: {
    fill: '#005b8e',
    opacity: 0.11,
    isolation: 'isolate',
  },
  cls2: {
    fill: '#005b8e',
  },
  cls3: {
    fill: '#27aae1',
  },
};

const MainSpinner = () => (
  <SpinnerContainer>
    <svg id="geekplanet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1731.4 1013.7">
      <title>
geekplanet
      </title>
      <g id="logo">
        <path id="shadow" style={styles.cls1} d="M453.1,979.7c0,18.8,182.7,34,408,34s408-15.2,408-34c0-13.8-99.3-25.7-241.6-31a492.1,492.1,0,0,1-215,24.3,486.3,486.3,0,0,1-116.2-24.5C553,953.8,453.1,965.8,453.1,979.7Z" transform="translate(0 0)" />
        <g id="inner">
          <circle style={styles.cls2} cx="842.1" cy="538.1" r="23.1" />
          <circle style={styles.cls2} cx="892.1" cy="441" r="55.7" />
          <path id="gear" style={styles.cls2} d="M1023.7,487.2a11.5,11.5,0,0,1,8.9-9.8c5.1-1.3,10.3-2.1,15.4-3.2,7.2-1.6,11.4-7,10.1-14.4-1.1-5.8-2.4-11.7-3.7-17.5s-2.4-12.6-9.6-14.4c-5.4-1.4-12.8,1.5-18,2.6-2.6.5-5.2,1.3-7.9.9-6-1-8-5.8-10.4-10.7s-7.1-10.5-6.5-16.4c.4-3.6,2.5-6,5-8.3s8.8-6.8,12.2-10.9c5.2-6.2,1.8-12.7-2.8-17.7l-12.5-13.6c-4.6-5-11.5-8.1-17.4-2.8l-11.7,10.3c-2.6,2.3-5.3,4-8.9,4-6-.1-11.2-5.4-16.1-8.3s-8.5-5.2-8.9-10.9c-.2-2.8.9-5.4,1.8-7.9,1.8-5.2,5.6-12.3,4.3-17.9s-7.7-8.2-13.3-10l-17.4-5.5c-15.1-4.6-16.7,12.6-20.7,22.5a11.7,11.7,0,0,1-11.2,7.7,180.1,180.1,0,0,1-18.3-.9c-8.6-1-9.9-8.6-11.4-15.5s-1.7-13.9-8.2-17-11.7.1-16.8,1.2-10.4,1.9-15.4,3.2c-8.3,2.2-9.7,9.4-8.1,16.6,1.2,5.5,4.2,13.2,2.1,18.8s-12.5,10-12.5,10-10.3,6.1-16.1,4.8c-11.9-2.6-18.2-28.4-33-16.5-3.9,3.2-7.6,6.7-11.4,10s-9.9,7.2-11.2,12.5c-3.7,14.6,23.3,20.3,14.7,35.5-1.5,2.7-8.4,13.2-10.4,15.4s-7.6,4.2-11.9,3-10.3-3.3-15.5-4.9c-15.1-4.5-17.8,14.6-21.3,24.8-1.9,5.7-4.2,11.6.5,16.7s11.7,5.3,16.8,6.9c2.3.7,4.7,1.3,6.7,2.6,4.8,3.4,5,8.3,4.5,13.6-.9,9.3,1.4,20.7-10.2,23.5-5.3,1.3-10.8,2-16.1,3.3-7.5,1.9-10,8.5-8.5,15.5l3.9,18.7c1.4,6.9,5.3,13.1,13.5,12,5.3-.7,10.5-2.2,15.7-3.2,3.3-.7,6.5-.9,9.6.9,5.1,2.9,6.8,9.9,9.5,14.8s5.3,9.4,2.5,14.8c-1.3,2.4-3.5,4.1-5.5,5.9-4,3.5-10.7,7.6-12.6,12.9-2.5,7,2.4,11.6,6.7,16.2s7.8,8.8,12,13,11.8,5.2,17.3.4l13.7-12.1c4.4-4.2,8.7-1.8,8.7-1.8q4,3,8.1,5.7c4.5,2.9,10.7,5.1,13,10.3,1.4,3.3.9,6.4-.1,9.7-1.7,5.1-4.4,10.4-5.1,15.7-1.1,7.6,4.8,11.4,11,13.4l18.3,5.8c6.9,2.2,13.9,1.3,16.9-6.2,2-4.9,3.3-10.1,5.1-15,4.2-11.2,15.4-7.8,24.9-7.6,5.3.1,10.3.3,13.5,5.4,1.3,2.2,1.7,4.7,2.2,7.2,1.2,5.5,1.5,13.7,5.7,17.8s11,2.8,16.9,1.6,11.9-2.3,17.7-3.7c16.4-3.9,6.6-20.2,6.1-31-.3-6,3.8-9.5,8.8-11.8s11-6.9,16.6-7.7c7.4-1.1,11.8,5.5,16.1,10.3s9.5,11.4,17.3,8.5c4.8-1.8,9.1-7,12.8-10.3s8.4-6.4,11.5-10.4c5.4-7.2.2-13.5-4.7-18.8s-10.7-9.6-9.5-16.8c.9-5.6,6.3-10.8,9.2-15.5s6.3-8,12-7.5c10.5,1,27.1,13.9,33.2-1.5,1.9-4.9,3.4-10.1,5.2-15.1s4.9-11.1,2.5-16.6c-5.5-12.4-29.6-5.1-30.4-21.4-.1-2.8.5-5.8.7-8.6S1023.3,490.3,1023.7,487.2ZM865.2,600A111.6,111.6,0,1,1,976.8,488.4,111.6,111.6,0,0,1,865.2,600Z" transform="translate(0 0)" />
        </g>
        <g id="planet">
          <path id="planet-right" style={styles.cls2} d="M1255.2,172.8l-8.5,4.4a29.9,29.9,0,0,1-4.1,2.1c-.4.1-1.2.9-1.6.8s-2.1-2.5-2.5-3q-6.9-8.4-14.2-16.4-14.6-16.2-30.7-31A489.1,489.1,0,0,0,805.7,3.3C748.9,9.9,693.6,25.9,642.4,51.5A482.2,482.2,0,0,0,568.5,97c-6,4.5-12.9,8.3-16.1,15.3s-2.5,17.8,2,25.6c3.1,5.4,7.6,10.4,11.3,15.4l12.9,17.4c4.3,5.8,10.1,11.1,18,10.7s11.2-4.8,16.1-8.4l17.8-13.1c5.2-3.9,10.3-7.9,16.4-10.4,21.1-8.8,45-1.5,58.6,16.6,7.2,9.6,15.2,19.1,21.4,29.4,13.5,22.1,8.2,51-13.1,66.1-18.2,12.8-35.4,26.2-50.8,42.5a270.4,270.4,0,0,0-15.7,351,275.9,275.9,0,0,0,114.1,85.5,269.7,269.7,0,0,0,130.8,17.3,274.3,274.3,0,0,0,118.8-43.2c9.8-6.4,18.5-13.4,30.4-15.4a50,50,0,0,1,35.7,7.6c11.8,7.9,19.8,21.9,28.1,33.1,12.7,17.1,17.7,38.8,6.4,58.2-7.6,12.9-22,21.2-33.7,30-3.7,2.8-7.6,5.4-11.1,8.3-7.6,6.4-7.8,16.7-2.2,24.4,6.8,9.2,13.7,18.4,20.5,27.6s13,18.2,25.6,17.7c6.6-.3,11.6-3.7,16.9-7.2s12.7-8.5,19-12.9A471.3,471.3,0,0,0,1208,834a487.8,487.8,0,0,0,141.1-301.6q1.9-21.7,1.9-43.4c0-3-.4-35.4-1.2-35.4,1.3,0,4.7-3.3,5.8-4.1l9.4-6.8,6.7-4.9,16.5-12.2q20.8-15.5,41.3-31.3,52.3-40.4,102.5-83.4c36.2-31.2,71.5-63.6,104.4-98.3,28.3-29.8,56-61.6,76.4-97.5,7.3-12.9,14.3-26.8,17.4-41.4,1.7-8,1.9-16.9-2.5-24.1-9.7-16.1-34.1-16.9-50.6-16.6-31.5.5-63,7.6-93.3,15.4-38.3,9.8-76.1,22-113.4,35.2s-74.8,27.7-111.7,43c-29.6,12.3-59.1,25.1-88.1,38.9ZM1028.1,636.1a223,223,0,0,1-359.2-35.9A222.1,222.1,0,0,1,795.7,276.5a227,227,0,0,1,143.9,3.9,221.6,221.6,0,0,1,88.5,355.7Zm593.5-488.8c-16.2,30.4-41.3,56.3-65.6,80.3-33.5,33.2-69.6,63.9-106.2,93.6-80.5,65.2-164.6,126-250.2,184.3-27.5,18.8-55.2,37.4-83.1,55.6,14-53.6,14.9-113.9-7.2-165.6a99,99,0,0,0-4.7-9.7c50-23.1,99.1-48.3,147.7-74.3,29.3-15.7,58-32.3,86.7-48.9,24.7-14.2,49.5-28.3,73.9-43.1,19.9-12.1,40.6-24.3,58.2-39.6,4.6-4,17-14.3,6-18.1-4.8-1.6-10.2-1.7-15.2-1.9-8-.2-16,.3-23.9.9-20.5,1.5-40.9,4.2-61.2,7.1-36.5,5.2-72.8,12.1-109.4,17-4.7.6-9.4,1.3-14.1,1.8,10.4-4.6,21.4-8.2,32.1-12.1q19.1-7,38.3-13.7c33.6-11.7,67.4-22.8,101.6-32.8s70.5-19.7,106.5-25.8a331.9,331.9,0,0,1,44.9-5c11-.4,22.4-.1,33,3,7.3,2.1,14.6,6.1,17.9,13.3s1.3,17.4-1.9,25.2A88.9,88.9,0,0,1,1621.6,147.3Zm-365.7,52.1c27.3-3.6,56.3-7.7,83.8-4.2,7.1.9,17.5,2.3,21.7,9s-2.6,16.4-7.2,21.7c-15.4,17.5-36.3,30.5-55.7,43.1A481,481,0,0,0,1255.9,199.4Z" transform="translate(0 0)" />
          <path id="planet-left" style={styles.cls3} d="M493,807.8c55.7,64.2,128.6,114.8,209.3,142,76.8,25.9,159.2,33.7,239.3,20.6a487.1,487.1,0,0,0,141.9-46.2c-19.1-6.3-29.2-24.4-40.5-39.6-5.3-7.2-10.3-14.2-12.5-23.1a49.4,49.4,0,0,1,6.7-38.9c4.9-7.3,11.7-12.3,18.6-17.5l20.4-15.2a43.8,43.8,0,0,0,5.9-4.9,17.2,17.2,0,0,0,2.5-19.7c-3.3-6.1-8.4-11.6-12.4-17.1s-8.2-13.2-14.4-16.4c-12.8-6.5-24.1,5.2-34.1,11.6-23.6,15.2-49.2,26.5-75.9,34.7-52.9,16.3-112.6,17-165.8,2-57.2-16.1-108.4-47.3-147.9-91.9a300.9,300.9,0,0,1-72.6-159c-8.2-61,2.4-124,30.7-178.7A302.9,302.9,0,0,1,647,275.9a384.2,384.2,0,0,1,30.4-26.8c9.9-8,28.3-14.7,25.9-30.3-1.1-7.2-7.9-13.9-12.1-19.5s-7.8-11.2-12.2-16.2c-7.3-8.3-17.9-7-26-1l-20,14.8c-6.6,4.9-13,10-20.8,12.9a49.4,49.4,0,0,1-43.1-4.7c-7.5-4.8-12.6-11.4-17.8-18.4l-15.1-20.3c-6.8-9.1-11.3-19.2-11.4-30.8A487.9,487.9,0,0,0,375.5,524.7q.2,3.3.5,6.6c.2,1.9,1.3,5.6.7,7.3s-1.8,2-3.1,3l-7.6,5.5Q312.2,586.3,260.3,628c-47.7,38.3-94.3,78.3-137.9,121.1-38.8,38-77.9,79-104.5,126.7-10.6,18.9-31.2,56.6-5.5,72.7,10.3,6.4,23.4,7.7,35.2,8,17.6.4,35.3-2,52.6-5,46.2-8.2,91.5-22.1,135.9-37.1,47.5-16.1,94.4-34.1,140.7-53.4,34.4-14.4,68.8-29.2,102.1-46C483.7,812.8,488.4,810.4,493,807.8ZM108.1,838c12.4-23.2,30-43.5,47.9-62.6,23.8-25.4,49.5-48.9,75.8-71.6,29.5-25.5,60-49.9,90.9-73.8s64.7-48.1,96.6-72.9c33.7-26.1,66.4-53.5,101.6-77.5-2.3,38.6,2.3,78.4,14.1,115.3a247.1,247.1,0,0,0,16.9,40.3c-57.3,28.7-113.4,59.6-169,91.7-24.3,14-48.7,28.2-72.2,43.7-9.6,6.3-19.1,12.8-28,19.9-5.9,4.7-12,9.7-16.4,15.8s-1.5,9.9,5.4,11.7c10.9,2.8,22.8,2.2,33.9,1.8,34.4-1.2,68.7-5.8,102.8-10.6q22.1-3.1,44-6.7c7.6-1.2,15.4-3.2,23.1-3.9l1.1-.2c-14.4,5.6-28.9,11-43.4,16.2-33.4,12.1-67,23.5-101,34.1-38.6,12-77.6,23.1-117.2,31.1a435,435,0,0,1-50.9,7.6c-12.9,1-26.3,1.5-39-1.1-8.3-1.7-17.4-5-22-12.6s-2.6-18.5.7-26.8A87.9,87.9,0,0,1,108.1,838Zm370-48.3c-56.5,7.3-188.3,21.7-45.3-69.1A483.1,483.1,0,0,0,478.1,789.7Z" transform="translate(0 0)" />
        </g>
        <path style={styles.cls2} d="M2139.2,935.8" transform="translate(0 0)" />
      </g>
    </svg>
  </SpinnerContainer>
);

export default MainSpinner;
