import React, { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="cuerpo">
      <main>
        {children}
      </main>
    </div>
  );
};

const Contentoutside: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="cuerpooutside">
      <main>
        {children}
      </main>
    </div>
  );
};

export {Content, Contentoutside};