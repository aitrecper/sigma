import React, { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="cuerpo" style={{ marginTop: '40px', marginLeft:"45vh", 
 height:"100px", width: "145vh", }}>
      <main>
        {children}
      </main>
    </div>
  );
};

const Contentoutside: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="cuerpooutside"style={{ marginTop: '20px', marginLeft:"320px", 
    marginRight:"30px", height:"100px", width: "75%", }}>
      <main>
        {children}
      </main>
    </div>
  );
};

export {Content, Contentoutside};