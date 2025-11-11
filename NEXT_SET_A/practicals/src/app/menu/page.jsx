import Link from "next/link";

export default function MenuPage() {
  const menuItems = [
    { id: 1, name: "Pizza", price: 12 },
    { id: 2, name: "Burger", price: 8 },
    { id: 3, name: "Pasta", price: 10 },
  ];

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={`/menu/${item.id}`}>
              {item.name} - ${item.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
