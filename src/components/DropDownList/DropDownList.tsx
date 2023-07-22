import { useState } from "react";

import "./DropDownList.scss";

interface DropDownOption<OptionId extends string> {
  text: string;
  id: OptionId;
  selected?: boolean;
}

interface DropDownListProps<OptionId extends string> {
  options: Array<DropDownOption<OptionId>>;
  onChanged: (id: string) => void;
  className?: string;
}

// eslint-disable-next-line no-empty-pattern
function DropDownList<OptionId extends string>({
  options,
  onChanged,
  className,
}: DropDownListProps<OptionId>) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>(
    options.find((o) => o.selected)?.id ?? options[0].id
  );

  function onClickerClicked() {
    setOpen(!open);
  }

  function onOptionClicked(optionId: string) {
    setSelectedId(optionId);
    setOpen(false);
    onChanged(optionId);
  }

  const mainClassList = ["drop-down-list", open ? "open" : "", className ?? ""];

  return (
    <>
      <div className={mainClassList.join(" ")}>
        <div className="drop-down-list__clicker" onClick={onClickerClicked}>
          <span>{options.find((o) => o.id === selectedId)?.text}</span>
        </div>
        {open && (
          <div className="drop-down-list__options">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => onOptionClicked(option.id)}
                className={`drop-down-list__option ${
                  selectedId == option.id ? "selected" : ""
                }`}
              >
                <span className="drop-down-list__option-text">
                  {option.text}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default DropDownList;
