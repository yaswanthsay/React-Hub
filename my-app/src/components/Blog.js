import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LazyShow from './LazyShow';

export default function StandardImageList() {
  return (
    <>
    <LazyShow>
    <div className='blog'>
      <h1 className='blog__title'>Websites made with React</h1>
      <p className='blog__para1'>The importance of a website cannot be stated enough. Over the past few years, modern React websites have made a mark of their own. Moreover, we have seen many market leaders opting for React JS in order to increase their user base. Some of the React websites example GitHub followed by Facebook, Airbnb, Instagram, Salesforce, BBC, Reddit and many more.</p>
      <div className='blog__contents'>
      <div className='blog__img'>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
         <div className='blog__list'>
          <ul>
            <li>Uber</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Reddit</li>
            <li>Udemy</li>
            <li>Netflix</li>
            <li>CodeCademy</li>
            <li>Khan academy</li>
            <li>Outlook</li>
          </ul>
        </div> 
      
      </div>
    </div>
    </LazyShow>
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1585047668151-b281b0c89c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1594670297948-e910d5964979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1595039838779-f3780873afdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1588912914074-b93851ff14b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWRlbXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1616509091215-57bbece93654?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkZGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3V0bG9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlbGxvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1599652457988-f236c900d722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvcGJveHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1600933435972-e4a4a40a4abd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhlJTIwbmV3JTIweW9yayUyMHRpbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5iJTIwd2Vic2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsZXNmb3JjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Bike',
  },
];








