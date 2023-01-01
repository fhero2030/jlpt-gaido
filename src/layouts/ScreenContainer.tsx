import React from "react";

type Props<E extends React.ElementType> = {
  children?: React.ReactNode;
  as?: E;
};

type OwnProps<E extends React.ElementType> = Props<E> &
  Omit<React.ComponentProps<E>, keyof Props<E>>;

const ScreenContainer = <E extends React.ElementType = "div">(
  props: OwnProps<E>
) => {
  const { as, children, className } = props;

  const Component = as || "div";

  return (
    <Component className={`${className} max-w-screen-2xl`}>
      {children}
    </Component>
  );
};

export default ScreenContainer;
