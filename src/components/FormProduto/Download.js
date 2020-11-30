import React from 'react'

const download = ({ url }) => {
  console.log(url);
  return (
    <div>
      <a href={`'${url}'`} className="">Download</a> 
    </div>
  )
}

export default download
