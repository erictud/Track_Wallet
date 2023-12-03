import { createContext, useContext, useState } from "react";

const ExpandableCtx = createContext();

export default function Expandable({ children }) {
  const [activeItem, setActiveItem] = useState("");
  return (
    <ExpandableCtx.Provider value={{ activeItem, setActiveItem }}>
      <div className="flex flex-col gap-2">{children}</div>
    </ExpandableCtx.Provider>
  );
}

function ExpandableItem({ children }) {
  return (
    <div className="p-2 border border-b-1 border-t-0 border-r-0 border-l-0 border-gray-300">
      {children}
    </div>
  );
}

function ExpandableItemHeader({ children, id }) {
  const { setActiveItem } = useContext(ExpandableCtx);

  return <div onClick={() => setActiveItem(id)}>{children}</div>;
}

function ExpandableItemBody({ id, children }) {
  const { activeItem, setActiveItem } = useContext(ExpandableCtx);

  if (activeItem != id) return null;

  return <div onClick={() => setActiveItem("")}>{children}</div>;
}

Expandable.ExpandableItem = ExpandableItem;
Expandable.ExpandableItemHeader = ExpandableItemHeader;
Expandable.ExpandableItemBody = ExpandableItemBody;
