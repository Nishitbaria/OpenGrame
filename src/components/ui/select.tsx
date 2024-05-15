import * as SelectPrimitive from "@radix-ui/react-select";
import classnames from "classnames";
import React, { FC } from "react";

const Select = SelectPrimitive.Root;
const SelectTrigger = SelectPrimitive.Trigger;
const SelectPortal = SelectPrimitive.Portal;
const SelectValue = SelectPrimitive.Value;
const SelectIcon = SelectPrimitive.Icon;
const SelectContent = SelectPrimitive.Content;
const SelectItemText = SelectPrimitive.ItemText;
const SelectGroup = SelectPrimitive.Group;
const SelectViewport = SelectPrimitive.Viewport;

interface DropdownSelectProps {
  placeholder?: React.ReactNode;
  selectIcon?: React.ReactNode;
  optionsData: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
}

const SelectItem = React.forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps
>(({ children, className, ...props }) => {
  return (
    <SelectPrimitive.Item
      className={classnames(
        "flex flex-row gap-1 items-center relative select-none px-4 py-2  data-[disabled]:text-neutral-600 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-hover-primary-500",
        className
      )}
      {...props}
    >
      <SelectItemText>{children}</SelectItemText>
    </SelectPrimitive.Item>
  );
});

const DropdownSelect: FC<DropdownSelectProps> = ({
  placeholder,
  selectIcon,
  optionsData,
}) => (
  <Select>
    <SelectTrigger className="inline-flex items-center justify-center rounded-lg  bg-dark-3 text-light-2 focus:shadow-black outline-none gap-3 px-4 py-2">
      <SelectValue placeholder={placeholder} />
      <SelectIcon className="text-neutral-600">{selectIcon}</SelectIcon>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent className="overflow-hidden bg-dark-3 text-light-2 rounded-lg">
        <SelectViewport className="">
          <SelectGroup>
            {optionsData?.map((item) => {
              return (
                <SelectItem value={item?.value}>
                  {item?.label} {item?.icon}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </Select>
);

export default DropdownSelect;
