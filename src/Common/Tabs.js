import React from 'react';

const Tabs = ({tabs = []}) => {
  return (
    <div>
      <div className="c-tabs--nav">
        {
          tabs.map(({name})=> (
            <a href="#">{name}</a>
          ))
        }
      </div>
    </div>
  );
};

export default Tabs;
