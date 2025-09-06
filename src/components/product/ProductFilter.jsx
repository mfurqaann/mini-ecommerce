import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo } from "react";

const items = [
  {
    id: "men's clothing",
    label: "Men's Clothing",
  },
  {
    id: "electronics",
    label: "Electronics",
  },
  {
    id: "women's clothing",
    label: "Women's clothing",
  },
  {
    id: "jewelery",
    label: "Jewelery",
  },
];

function ProductFilter({
  handleCheckBoxFilter,
  maxPrice,
  rangePrice,
  handleSlider,
  handleSort,
  sortedBy,
  orderBy,
  handleOrder,
}) {
  return (
    <div className="w-full h-fit p-3 mt-8 border-2 border-solid">
      <div className="font-bold">Filters</div>
      <div className="mt-3">
        <div className="font-bold">Category</div>
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 mt-3">
            <Checkbox
              id={item.id}
              name={item.id}
              onCheckedChange={() => handleCheckBoxFilter(item.id)}
            />
            <Label htmlFor={item.id}> {item.label} </Label>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="font-bold">Maximal Price</div>
        <div>Rp {rangePrice.toLocaleString("id-ID")}</div>
        <div className="px-3 mt-3">
          <Slider
            max={maxPrice}
            step={1}
            onValueChange={(val) => handleSlider(val)}
          />
        </div>
      </div>

      <div className="mt-5">
        <div className="font-bold">Sort by</div>
        <div className="px-3 mt-3">
          <Select onValueChange={(val) => handleSort(val)} value={sortedBy}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="rate">Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-3 font-bold">Order by</div>
        <RadioGroup
          value={orderBy}
          defaultValue="ASC"
          className="flex gap-3 mt-3"
          onValueChange={(val) => handleOrder(val)}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="asc" id="asc" />
            <Label htmlFor="asc">ASC</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="desc" id="desc" />
            <Label htmlFor="desc">DESC</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default memo(ProductFilter);
