import React from 'react';


function Sidebar(props) {
  return (
    <div className="sidebar">
      {props.children}
    </div>
  );
}

export default Sidebar;
