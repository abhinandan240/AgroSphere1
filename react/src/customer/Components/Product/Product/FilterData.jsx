export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "50-60", label: "₹50 To ₹60" },
        { value: "60-70", label: "₹60 To ₹70" },
        { value: "70-80", label: "₹70 To ₹80" },
        { value: "50-70", label: "₹50 To ₹70" },
        { value: "60-80", label: "₹60 To ₹80" },
    ],
  },
  {
    id: "disccout",
    name: "Disccount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "10", label: "10% And Above" },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      
    ],
  },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];

export const filters={}