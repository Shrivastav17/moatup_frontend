import React from 'react'
import Investor_StartPost from '../Investor_StartPost/Investor_StartPost'

export default function Investor_Feed() {
  return (
    <>
    <div className='container'>
            <Investor_StartPost/>
    
            
            <div>
              <div class="post-main">
                <div className='post-card'>
                  {/* <!-- Post Header --> */}
                  <div class="post-header">
                    <img src="untitled.png" alt="Profile" class="profile-img" />
                    <div class="post-meta">
                      <h6>Name Surname</h6>
                      <p><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_186_580)">
                          <path d="M6.99996 12.8333C10.2216 12.8333 12.8333 10.2217 12.8333 7C12.8333 3.77834 10.2216 1.16667 6.99996 1.16667C3.7783 1.16667 1.16663 3.77834 1.16663 7C1.16663 10.2217 3.7783 12.8333 6.99996 12.8333Z" stroke="#009E94" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7 4.5V8L9.33333 9.16667" stroke="#009E94" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_186_580">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </span> Today, 12:45</p>
                    </div>
                  </div>
    
                  {/* <!-- Post Content --> */}
                  <div class="p-2 postimg-main">
    
                    <img src="2.jpg" alt="Post Image" class="post-image" />
                  </div>
    
                  {/* <!-- Post Actions --> */}
                  <div class="post-actions">
                    <div>
                      <button class="btn custom-btn">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.59595 22.6719H4.59595C4.06551 22.6719 3.55681 22.4612 3.18173 22.0861C2.80666 21.711 2.59595 21.2023 2.59595 20.6719V13.6719C2.59595 13.1414 2.80666 12.6327 3.18173 12.2577C3.55681 11.8826 4.06551 11.6719 4.59595 11.6719H7.59595M14.5959 9.67188V5.67188C14.5959 4.87623 14.2799 4.11316 13.7173 3.55055C13.1547 2.98795 12.3916 2.67188 11.5959 2.67188L7.59595 11.6719V22.6719H18.8759C19.3583 22.6773 19.8263 22.5083 20.1939 22.1959C20.5614 21.8835 20.8036 21.4488 20.8759 20.9719L22.2559 11.9719C22.2995 11.6852 22.2801 11.3926 22.1993 11.1141C22.1185 10.8357 21.978 10.5782 21.7878 10.3594C21.5976 10.1406 21.362 9.96581 21.0975 9.84709C20.833 9.72838 20.5459 9.66859 20.2559 9.67188H14.5959Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
                         Like</button>
                      <button class="btn custom-btn1">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5959 15.6719C21.5959 16.2023 21.3852 16.711 21.0102 17.0861C20.6351 17.4612 20.1264 17.6719 19.5959 17.6719H7.59595L3.59595 21.6719V5.67188C3.59595 5.14144 3.80666 4.63273 4.18173 4.25766C4.55681 3.88259 5.06551 3.67188 5.59595 3.67188H19.5959C20.1264 3.67188 20.6351 3.88259 21.0102 4.25766C21.3852 4.63273 21.5959 5.14144 21.5959 5.67188V15.6719Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
                         Comment</button>
                    </div>
                    <small class="text-muted">68 Likes · 21 Comments</small>
                  </div>
                </div>
              </div>
            </div>
    
    
    
          </div>
    </>
  )
}
